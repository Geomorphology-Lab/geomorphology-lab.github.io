import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SiteHeader } from '../navigation/SiteHeader'
import { SiteFooter } from './SiteFooter'
import { navigation, site } from '../../content/site'

/** Scroll to top on page change, or to #anchor when present; update the document title. */
function useRouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        // Jump straight to the section (a smooth scroll can stop short while images above it are still loading),
        // then re-align a couple of times as the layout settles, unless the visitor starts scrolling.
        const align = () => el.scrollIntoView({ behavior: 'instant' as ScrollBehavior })
        let touched = false
        const stop = () => {
          touched = true
        }
        const events = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const
        events.forEach((e) => window.addEventListener(e, stop, { passive: true, once: true }))
        const raf = requestAnimationFrame(align)
        const timers = [250, 700, 1400].map((ms) => window.setTimeout(() => !touched && align(), ms))
        return () => {
          cancelAnimationFrame(raf)
          timers.forEach(window.clearTimeout)
          events.forEach((e) => window.removeEventListener(e, stop))
        }
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  useEffect(() => {
    const clean = pathname.replace(/\/+$/, '') || '/'
    const page = navigation.find((n) => n.path === clean)
    document.title = page ? `${page.label} | ${site.name}, ${site.institution}` : `${site.name} | ${site.institution}`
  }, [pathname])
}

export function Layout() {
  useRouteEffects()
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}
