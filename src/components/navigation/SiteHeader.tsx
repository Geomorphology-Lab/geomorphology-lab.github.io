import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation, site } from '../../content/site'
import { CloseIcon, MenuIcon } from '../common/Icons'

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

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const toggleRef = useRef<HTMLButtonElement>(null)
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid ? 'border-b border-line bg-ink-900/92 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className={`container-page flex items-center justify-between transition-[height] duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
        <Wordmark onClick={() => setOpen(false)} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.path} className="group/nav relative">
                <NavLink
                  to={item.path}
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
                  <div className="invisible absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility,transform] duration-200 group-focus-within/nav:visible group-focus-within/nav:opacity-100 group-hover/nav:visible group-hover/nav:opacity-100 motion-reduce:transition-none">
                    <ul
                      aria-label={`${item.label} sections`}
                      className="w-max min-w-[15rem] max-w-[22rem] border border-line-strong bg-ink-900 py-2 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)]"
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
                <NavLink
                  to={item.path}
                  tabIndex={open ? 0 : -1}
                  className={({ isActive }) =>
                    `flex min-h-14 items-center justify-between py-4 font-display text-2xl font-medium tracking-tight ${isActive ? 'text-accent' : 'text-fg'}`
                  }
                >
                  {item.label}
                  <span className="text-xs tabular-nums tracking-[0.2em] text-fg-subtle">{String(i + 1).padStart(2, '0')}</span>
                </NavLink>
                {item.children && (
                  <ul className="-mt-2 mb-4 space-y-0.5 pl-1">
                    {item.children.map((c) => (
                      <li key={c.path}>
                        <Link
                          to={c.path}
                          tabIndex={open ? 0 : -1}
                          className="flex min-h-11 items-center py-1.5 text-[0.95rem] leading-snug text-fg-muted transition-colors hover:text-accent"
                        >
                          <span aria-hidden="true" className="mr-3 inline-block h-px w-3 shrink-0 bg-line-strong" />
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
