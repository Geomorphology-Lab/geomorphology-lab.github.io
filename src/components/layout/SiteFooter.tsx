import { Link } from 'react-router-dom'
import { navigation, site } from '../../content/site'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-8">
          <p className="font-display text-2xl font-semibold tracking-tight text-fg">{site.name}</p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.24em] text-fg-subtle">
            {site.institution} · {site.institutionKo}
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-4">
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-sm text-fg-muted transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}, <span className="whitespace-nowrap">{site.institution}</span>. All rights reserved.</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  )
}
