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
        requestAnimationFrame(() => el.scrollIntoView())
        return
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
