import { useLayoutEffect, useRef } from 'react'

/**
 * Decorative topographic contour map for the About section. The map itself never moves: it is part of
 * the section like the navy background. Only its visibility changes with scroll: it starts "submerged"
 * (invisible and blurred, revealed from its summit outwards) and surfaces as the section scrolls into
 * view; scrolling back up reverses it. Once revealed it simply looks like it was always in the background.
 *
 * How it works: the scroll position becomes a 0 → 1 progress value for the section, eased with
 * time-based smoothing and written to CSS custom properties (--o opacity, --b blur, --rv radial reveal)
 * on the stage element (no React state, so nothing re-renders while scrolling). The stylesheet
 * (.contour-* in index.css) does the rest, including the 25° rotation and the cropped, fading edges.
 * With prefers-reduced-motion none of this runs and the final, static look is used.
 */

/**
 * Reveal timing, as the position of the section's top edge on screen (fraction of the screen height,
 * measured from the top of the screen). The reveal starts when the top edge rises to START (the heading
 * is just coming into view) and ends when it reaches END (the heading is at the top of the screen), so it
 * unfolds while the text is being read. Move START down / END further up to make it slower still.
 */
const START = 0.62
const END = -0.12

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v))
const smooth = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a))
  return t * t * (3 - 2 * t)
}

export function ContourReveal() {
  const layerRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const layer = layerRef.current
    const stage = stageRef.current
    if (!layer || !stage) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    stage.dataset.motion = ''

    const cur = { p: 0 }
    const target = { p: 0 }
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
      set('--o', smooth(0.04, 0.95, p).toFixed(4)) // opacity factor (the stylesheet scales it to the final, restrained opacity): rises gradually over the whole reveal
      set('--b', (1 - smooth(0, 0.6, p)).toFixed(4)) // blur factor: gone by the middle of the reveal, so the lines are crisp well before it is complete
      set('--rv', (0.3 + 1.5 * smooth(0.03, 1, p)).toFixed(4)) // radial reveal radius, grows from the summit outwards across the whole reveal
    }

    const measure = () => {
      const rect = layer.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the section's top edge is at START of the screen height, 1 when it has risen to END
      target.p = clamp((vh * START - rect.top) / (vh * (START - END)))
    }

    const tick = (now: number) => {
      const dt = Math.min(now - (last || now), 64)
      last = now
      const k = 1 - Math.exp(-dt / 200) // exponential smoothing (time based, so it feels the same at any frame rate); a little slower for a calmer surfacing
      cur.p += (target.p - cur.p) * k
      apply()
      if (Math.abs(target.p - cur.p) > 0.0008) {
        raf = requestAnimationFrame(tick)
      } else {
        raf = 0
        last = 0
        cur.p = target.p
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
