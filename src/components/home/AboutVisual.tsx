import { useEffect, useLayoutEffect, useRef } from 'react'
import { site } from '../../content/site'

/**
 * Full-width atmospheric image (the placeholder landscape, toned black-and-white with a navy cast; see
 * scripts/tone-about-image.py). It sits at the top of the Research Areas section: it starts at the section's top
 * edge, joins the dark About section above, and dissolves into the white section toward its bottom.
 *
 * Two quiet motions (styles: .about-visual-* in index.css):
 * - Daybreak: as the band scrolls into view, a faint dimming lifts and the light behind the ridge grows,
 *   once, then holds. Scroll position → 0..1 progress (time-smoothed) → CSS variable --sr. Nothing moves.
 * - Drifting mist: two very faint mist layers slide sideways at different, very slow speeds. Paused while the
 *   band is off screen.
 * With prefers-reduced-motion neither runs and the final, fully lit still is shown.
 */

/** Daybreak timing: the band's top edge at START of the screen height (just entering) → END (well in view). */
const START = 0.95
const END = 0.3

const clamp = (v: number) => Math.min(1, Math.max(0, v))

export function AboutVisual() {
  const { image } = site.homeAbout
  const ref = useRef<HTMLDivElement>(null)

  // Daybreak: scroll-linked progress, written straight to a CSS variable (no React re-renders)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    el.dataset.motion = ''
    let cur = 0
    let target = 0
    let raf = 0
    let last = 0
    let written = ''
    const write = () => {
      const v = (cur * cur * (3 - 2 * cur)).toFixed(4)
      if (v !== written) el.style.setProperty('--sr', (written = v))
    }
    const measure = () => {
      const top = el.getBoundingClientRect().top
      const vh = window.innerHeight
      target = clamp((vh * START - top) / (vh * (START - END)))
    }
    const tick = (now: number) => {
      const dt = Math.min(now - (last || now), 64)
      last = now
      cur += (target - cur) * (1 - Math.exp(-dt / 260))
      if (Math.abs(target - cur) > 0.001) {
        write()
        raf = requestAnimationFrame(tick)
      } else {
        cur = target
        write()
        raf = 0
        last = 0
      }
    }
    const onScroll = () => {
      measure()
      if (!raf) raf = requestAnimationFrame(tick)
    }
    measure()
    cur = target
    write()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
      delete el.dataset.motion
      el.style.removeProperty('--sr')
    }
  }, [])

  // Mist: only animate while the band is on screen
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => {
      el.dataset.drift = e.isIntersecting ? 'on' : 'off'
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="about-visual relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9] lg:max-h-[36rem]">
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes="100vw"
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="about-visual-img absolute inset-0 size-full object-cover"
        style={{ '--pos-mobile': image.position.mobile, '--pos-desktop': image.position.desktop } as React.CSSProperties}
      />
      <span aria-hidden="true" className="about-visual-glow" />
      <span aria-hidden="true" className="about-visual-mist">
        <span className="about-visual-mist-layer about-visual-mist-far" />
        <span className="about-visual-mist-layer about-visual-mist-near" />
      </span>
      <span aria-hidden="true" className="about-visual-dim" />
    </div>
  )
}
