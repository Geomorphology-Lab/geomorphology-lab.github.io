import { useLayoutEffect, useRef } from 'react'

/**
 * Decorative topographic contour map for the About section: it starts "submerged" in the dark
 * background (faint, small, blurred, a little lower and to the right) and surfaces as the section
 * scrolls into view. Scrolling back up reverses the effect.
 *
 * How it works: the scroll position is turned into a 0 → 1 progress value for the section; that value
 * is eased and written to CSS custom properties on the stage element (no React state, so nothing
 * re-renders while scrolling). The stylesheet (.contour-* in index.css) turns those variables into
 * opacity, blur, scale, a small drift and a radial reveal that grows outwards from the summit.
 * A spring-like smoothing keeps it fluid. With prefers-reduced-motion, none of this runs and the
 * stylesheet's static, subtly visible state is used.
 */

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v))
const smooth = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a))
  return t * t * (3 - 2 * t)
}
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export function ContourReveal() {
  const layerRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const layer = layerRef.current
    const stage = stageRef.current
    if (!layer || !stage) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    stage.dataset.motion = ''

    const cur = { p: 0, par: 0 }
    const target = { p: 0, par: 0 }
    const written: Record<string, string> = {}
    let raf = 0
    let last = 0

    const set = (name: string, value: string) => {
      if (written[name] !== value) {
        written[name] = value
        stage.style.setProperty(name, value)
      }
    }

    /** Turns scroll progress into the CSS variables used by the stylesheet. */
    const apply = () => {
      const p = cur.p
      const e = smooth(0, 1, p)
      set('--o', smooth(0, 0.85, p).toFixed(4)) // opacity factor (the stylesheet scales it to the final, restrained opacity)
      set('--b', (1 - smooth(0.1, 0.95, p)).toFixed(4)) // blur factor: clears slightly before the end
      set('--s', (0.9 + 0.1 * easeOutCubic(p)).toFixed(4)) // scale 0.90 → 1
      set('--rv', (0.35 + 1.45 * smooth(0.05, 1, p)).toFixed(4)) // radial reveal radius, grows from the summit outwards
      set('--x', `${((1 - e) * 24).toFixed(2)}px`) // starts slightly to the right …
      set('--y', `${((1 - e) * 28 + cur.par).toFixed(2)}px`) // … and lower, plus a small parallax lag
    }

    const measure = () => {
      const rect = layer.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the section's top edge enters at the bottom of the screen, 1 when it has risen to 30% of the screen height
      target.p = clamp((vh - rect.top) / (vh * 0.7))
      // The contour moves a little slower than the text (depth): offset proportional to distance from the screen centre
      const k = window.innerWidth < 640 ? 0.03 : 0.06
      target.par = clamp(-(rect.top + rect.height / 2 - vh / 2) * k, -36, 36)
    }

    const tick = (now: number) => {
      const dt = Math.min(now - (last || now), 64)
      last = now
      const k = 1 - Math.exp(-dt / 120) // exponential smoothing (time based, so it feels the same at any frame rate)
      cur.p += (target.p - cur.p) * k
      cur.par += (target.par - cur.par) * k
      apply()
      if (Math.abs(target.p - cur.p) > 0.0008 || Math.abs(target.par - cur.par) > 0.05) {
        raf = requestAnimationFrame(tick)
      } else {
        raf = 0
        last = 0
        cur.p = target.p
        cur.par = target.par
        apply()
      }
    }

    const onScroll = () => {
      measure()
      if (!raf) raf = requestAnimationFrame(tick)
    }

    // First paint: jump straight to the correct state (no animation), e.g. when landing on #about
    measure()
    cur.p = target.p
    cur.par = target.par
    apply()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
      delete stage.dataset.motion
    }
  }, [])

  return (
    <div ref={layerRef} aria-hidden="true" className="contour-layer">
      <div ref={stageRef} className="contour-stage">
        <div className="contour-art" />
      </div>
    </div>
  )
}
