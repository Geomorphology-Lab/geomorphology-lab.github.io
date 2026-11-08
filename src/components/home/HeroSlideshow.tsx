import { memo, useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import {
  CROSSFADE_DURATION_MS,
  KEN_BURNS_DURATION_MS,
  SLIDE_INTERVAL_MS,
  heroSlides,
  slideSrc,
  slideSrcSet,
} from '../../content/heroSlides'

/* ---------- environment hooks ---------- */

const REDUCED = '(prefers-reduced-motion: reduce)'
function subscribeReduced(cb: () => void) {
  const mq = window.matchMedia(REDUCED)
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}
const useReducedMotion = () =>
  useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false)

function subscribeVisibility(cb: () => void) {
  document.addEventListener('visibilitychange', cb)
  return () => document.removeEventListener('visibilitychange', cb)
}
const usePageVisible = () =>
  useSyncExternalStore(subscribeVisibility, () => document.visibilityState === 'visible', () => true)

/* ---------- component ---------- */

interface Phase {
  /** Slide on top (fading in, then fully visible) */
  current: number
  /** Slide underneath during a cross-dissolve; stays fully opaque so nothing dark shows through */
  previous: number | null
}

/**
 * Layered cross-dissolve slideshow for the hero background.
 * Renders only the photographs and the progress indicator; the hero's text,
 * buttons and overlay live in the parent and never re-render because of it.
 */
export const HeroSlideshow = memo(function HeroSlideshow() {
  const count = heroSlides.length
  const reduced = useReducedMotion()
  const pageVisible = usePageVisible()
  const [phase, setPhase] = useState<Phase>({ current: 0, previous: null })
  const [firstReady, setFirstReady] = useState(false)
  const [paused, setPaused] = useState(false)
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])
  const failed = useRef<Set<number>>(new Set())
  /** Time already spent on the current slide before the latest pause */
  const elapsed = useRef(0)

  const motionOn = firstReady && !reduced && !paused && pageVisible
  const running = motionOn && count > 1

  /** Resolves once slide `i` is downloaded and decoded, so it never appears half-loaded. */
  const ensureReady = useCallback((i: number): Promise<boolean> => {
    const img = imgRefs.current[i]
    if (!img) return Promise.resolve(false)
    const decode = () => img.decode().then(() => true, () => img.naturalWidth > 0)
    if (img.complete) return img.naturalWidth > 0 ? decode() : Promise.resolve(false)
    return new Promise((resolve) => {
      img.addEventListener('load', () => decode().then(resolve), { once: true })
      img.addEventListener('error', () => resolve(false), { once: true })
    })
  }, [])

  // Reveal the first photograph once it has loaded (dark background until then).
  useEffect(() => {
    let alive = true
    ensureReady(0).then((ok) => alive && ok && setFirstReady(true))
    return () => {
      alive = false
    }
  }, [ensureReady])

  // Schedule the next cross-dissolve.
  const { current } = phase
  useEffect(() => {
    if (!running) return
    let cancelled = false
    let advanced = false
    const segmentStart = performance.now()
    const next = (from: number): number => {
      for (let k = 1; k <= count; k++) {
        const i = (from + k) % count
        if (!failed.current.has(i)) return i
      }
      return from
    }
    let target = next(current)
    ensureReady(target) // warm the decoder well before the transition starts
    const timer = window.setTimeout(async () => {
      // Skip any slide that failed to load
      while (target !== current && !(await ensureReady(target))) {
        failed.current.add(target)
        target = next(current)
      }
      if (cancelled || target === current) return
      advanced = true
      elapsed.current = 0
      setPhase({ current: target, previous: current })
    }, Math.max(0, SLIDE_INTERVAL_MS - elapsed.current))
    return () => {
      cancelled = true
      window.clearTimeout(timer)
      if (!advanced) elapsed.current += performance.now() - segmentStart
    }
  }, [current, running, count, ensureReady])

  // Once the new slide is fully opaque, hide the old one (it is completely covered at this moment).
  useEffect(() => {
    if (phase.previous === null) return
    const t = window.setTimeout(() => setPhase((p) => ({ ...p, previous: null })), CROSSFADE_DURATION_MS)
    return () => window.clearTimeout(t)
  }, [phase])

  return (
    <>
      <div className="hero-slides absolute inset-0 -z-20 overflow-hidden">
        {heroSlides.map((slide, i) => {
          const isCurrent = reduced ? i === 0 : i === phase.current
          const isPrevious = !reduced && i === phase.previous
          const visible = (isCurrent && firstReady) || isPrevious
          const animate = !reduced && visible
          return (
            <div
              key={slide.id}
              className="hero-slide"
              data-state={isCurrent ? 'current' : isPrevious ? 'previous' : 'hidden'}
              style={{
                opacity: visible ? 1 : 0,
                zIndex: isCurrent ? 3 : isPrevious ? 2 : 1,
                transition: isCurrent && !reduced ? `opacity ${CROSSFADE_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
              }}
            >
              <img
                ref={(el) => {
                  imgRefs.current[i] = el
                }}
                src={slideSrc(slide)}
                srcSet={slideSrcSet(slide)}
                sizes="100vw"
                alt={isCurrent ? slide.alt : ''}
                aria-hidden={!isCurrent}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : 'low'}
                className={`hero-slide-img ${animate ? 'is-animating' : ''}`}
                style={
                  {
                    '--pos-mobile': slide.position.mobile,
                    '--pos-desktop': slide.position.desktop,
                    '--kb-from': slide.motion.fromScale,
                    '--kb-to': slide.motion.toScale,
                    '--kb-x0': slide.motion.fromX ?? '0%',
                    '--kb-x1': slide.motion.toX ?? '0%',
                    '--kb-duration': `${KEN_BURNS_DURATION_MS}ms`,
                    animationPlayState: motionOn || !animate ? 'running' : 'paused',
                  } as React.CSSProperties
                }
              />
            </div>
          )
        })}
      </div>

      {/* Minimal progress indicator + pause control (WCAG 2.2.2) */}
      {!reduced && count > 1 && (
        <div className="container-page pointer-events-none absolute inset-x-0 bottom-7 z-10 md:bottom-9">
          <div className="pointer-events-auto flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Play background slideshow' : 'Pause background slideshow'}
              aria-pressed={paused}
              className="-ml-2.5 inline-flex size-10 items-center justify-center rounded-full text-fg/70 transition-colors hover:text-fg"
            >
              {paused ? (
                <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" /></svg>
              ) : (
                <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden="true"><path d="M4 2.5h2.6v11H4zM9.4 2.5H12v11H9.4z" /></svg>
              )}
            </button>
            <ol className="flex items-center gap-2" aria-hidden="true">
              {heroSlides.map((slide, i) => (
                <li key={slide.id} className="relative h-px w-8 overflow-hidden bg-fg/25 sm:w-10">
                  {i === phase.current && firstReady && (
                    <span
                      key={`${phase.current}`}
                      className="hero-progress absolute inset-0 origin-left bg-accent"
                      style={{
                        animationDuration: `${SLIDE_INTERVAL_MS}ms`,
                        animationPlayState: running ? 'running' : 'paused',
                      }}
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  )
})
