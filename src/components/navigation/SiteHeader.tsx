import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation, site } from '../../content/site'
import { ChevronDown, CloseIcon, MenuIcon } from '../common/Icons'
import { useLang } from '../../lang'

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="group flex flex-col leading-none" aria-label={`${site.name}, ${site.institution} — Home`}>
      <span className="font-display text-[1.05rem] font-semibold tracking-[-0.01em] text-fg sm:text-lg">{site.name}</span>
      <span className="mt-1.5 text-[0.625rem] font-medium uppercase tracking-[0.24em] text-fg-muted transition-colors group-hover:text-accent">
        {site.institution}
      </span>
    </Link>
  )
}

/** Language switch "ENG / KOR": the current language is white with an underline (like the active menu item). */
function LangToggle() {
  const { lang, setLang } = useLang()
  const item = (code: 'en' | 'ko', label: string, name: string) => {
    const active = lang === code
    return (
      <button
        type="button"
        onClick={() => setLang(code)}
        aria-pressed={active}
        aria-label={name}
        lang={code}
        className={`relative inline-flex h-9 items-center px-1 text-[0.75rem] font-medium tracking-[0.14em] transition-colors after:absolute after:inset-x-1 after:bottom-1.5 after:h-px after:bg-fg after:transition-opacity ${
          active ? 'text-fg after:opacity-100' : 'text-fg-muted after:opacity-0 hover:text-fg'
        }`}
      >
        {label}
      </button>
    )
  }
  return (
    <div role="group" aria-label="Language" className="flex items-center">
      {item('en', 'ENG', 'English')}
      <span aria-hidden="true" className="px-0.5 text-[0.75rem] text-fg-subtle">/</span>
      {item('ko', 'KOR', '한국어 (Korean)')}
    </div>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // Drop-down that was just used (a link inside it, or the item itself, was followed). It stays shut, however the
  // pointer moves over the spot where it was, and opens again only when the pointer re-enters the top-level item
  // or the menu gets keyboard focus.
  const [shut, setShut] = useState<string | null>(null)
  // Mobile menu: the one section whose sub-links are shown (all are folded when the menu opens)
  const [expanded, setExpanded] = useState<string | null>(null)
  const { pathname } = useLocation()
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) setExpanded(null)
  }, [open])
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname])

  // Lock page scroll, close on Escape, keep focus inside the open menu
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusTimer = window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>('a')?.focus(), 60)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab' && panelRef.current) {
        const items = [toggleRef.current, ...panelRef.current.querySelectorAll<HTMLElement>('a')].filter(Boolean) as HTMLElement[]
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.clearTimeout(focusTimer)
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open
  return (
    <>
    {/* The bar's frosted background is a ::before layer, not the header itself: an element with backdrop-filter
        hides the page from its descendants' own backdrop-filter, and the drop-down menus below need it. */}
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-ink-900/92 before:backdrop-blur-md before:transition-opacity before:duration-500 ${
        solid ? 'border-line before:opacity-100' : 'border-transparent before:opacity-0'
      }`}
    >
      <div className={`container-page flex items-center justify-between transition-[height] duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
        <Wordmark onClick={() => setOpen(false)} />

        <div className="flex items-center">
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li
                key={item.path}
                className="group/nav relative"
                onClick={() => item.children && setShut(item.path)}
                onFocus={() => setShut((s) => (s === item.path ? null : s))}
              >
                <NavLink
                  to={item.path}
                  onMouseEnter={() => setShut((s) => (s === item.path ? null : s))}
                  className={({ isActive }) =>
                    `relative block px-3.5 py-2 text-[0.9rem] font-medium tracking-wide transition-colors after:absolute after:inset-x-3.5 after:bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300 ${
                      isActive ? 'text-fg after:scale-x-100' : 'text-fg-muted hover:text-fg after:scale-x-0 hover:after:scale-x-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  /* Drop-down: opens on hover or keyboard focus. The top padding keeps the pointer inside the
                     menu while it crosses the gap below the item, so it does not flicker shut. */
                  <div
                    style={shut === item.path ? { visibility: 'hidden', opacity: 0 } : undefined}
                    className="invisible absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility,transform] duration-200 group-focus-within/nav:visible group-focus-within/nav:opacity-100 group-hover/nav:visible group-hover/nav:opacity-100 motion-reduce:transition-none">
                    <ul
                      aria-label={`${item.label} sections`}
                      className="w-max min-w-[15rem] max-w-[22rem] border border-line-strong bg-ink-900/80 py-2 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-lg [@media(prefers-reduced-transparency:reduce)]:bg-ink-900"
                    >
                      {item.children.map((c) => (
                        <li key={c.path}>
                          <Link
                            to={c.path}
                            onClick={(e) => e.currentTarget.blur()}
                            className="block px-5 py-2.5 text-[0.875rem] leading-snug text-fg-muted transition-colors hover:bg-fg/[0.06] hover:text-accent focus-visible:bg-fg/[0.06] focus-visible:text-accent"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mr-2 lg:mr-0 lg:ml-4 lg:border-l lg:border-line lg:pl-5">
          <LangToggle />
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
        </div>
      </div>

    </header>
    {/* Mobile menu — outside <header>, whose backdrop-filter would otherwise clip a fixed child */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`fixed inset-0 z-40 overflow-y-auto bg-ink-900 transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="container-page flex h-full flex-col pt-24 pb-10">
          <ul className="border-t border-line">
            {navigation.map((item, i) => (
              <li
                key={item.path}
                className={`border-b border-line transition-[opacity,transform] duration-500 ease-out-soft ${open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                style={{ transitionDelay: open ? `${60 + i * 35}ms` : '0ms' }}
              >
                {item.children ? (
                  (() => {
                    /* A section with sub-links: the row is a button that folds them in and out (folded by default).
                       Only one section is unfolded at a time. The rows animate open with grid-template-rows 0fr → 1fr. */
                    const isOpen = expanded === item.path
                    const subId = `mobile-sub-${i}`
                    return (
                      <>
                        <button
                          type="button"
                          tabIndex={open ? 0 : -1}
                          aria-expanded={isOpen}
                          aria-controls={subId}
                          onClick={() => setExpanded((e) => (e === item.path ? null : item.path))}
                          className={`flex min-h-14 w-full items-center justify-between py-4 text-left font-display text-2xl font-medium tracking-tight ${
                            pathname.startsWith(item.path) ? 'text-accent' : 'text-fg'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {item.label}
                            <ChevronDown
                              className={`size-5 text-fg-subtle transition-transform duration-300 motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`}
                            />
                          </span>
                        </button>
                        <div
                          id={subId}
                          aria-hidden={!isOpen}
                          className={`grid transition-[grid-template-rows] duration-300 ease-out-soft motion-reduce:transition-none ${
                            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                          }`}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <ul className="space-y-0.5 pb-4 pl-1">
                              {/* Research opens with "All" (the whole page), since its row now unfolds instead of navigating */}
                              {(item.path === '/research' ? [{ path: item.path, label: 'All' }, ...item.children] : item.children).map((c) => (
                                <li key={c.path}>
                                  <Link
                                    to={c.path}
                                    tabIndex={open && isOpen ? 0 : -1}
                                    onClick={() => setOpen(false)}
                                    className="flex min-h-11 items-center py-1.5 text-[0.95rem] leading-snug text-fg-muted transition-colors hover:text-accent"
                                  >
                                    <span aria-hidden="true" className="mr-3 inline-block h-px w-3 shrink-0 bg-line-strong" />
                                    {c.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )
                  })()
                ) : (
                  <NavLink
                    to={item.path}
                    tabIndex={open ? 0 : -1}
                    className={({ isActive }) =>
                      `flex min-h-14 items-center justify-between py-4 font-display text-2xl font-medium tracking-tight ${isActive ? 'text-accent' : 'text-fg'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-auto text-xs uppercase leading-relaxed tracking-[0.24em] text-fg-subtle">
            <span className="block">{site.name}</span>
            <span className="block">{site.institution}</span>
          </p>
        </nav>
      </div>
    </>
  )
}
