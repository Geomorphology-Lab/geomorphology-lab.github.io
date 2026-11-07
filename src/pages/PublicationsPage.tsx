import { useMemo, useState } from 'react'
import { EMPTY_MESSAGE, UNDATED_LABEL, publications } from '../content/publications'
import { headerPhotos } from '../content/pageImages'
import type { Publication } from '../content/types'
import { PageHeader } from '../components/common/PageHeader'
import { PublicationItem } from '../components/publications/PublicationItem'

type Filter = 'all' | number

/** Groups by year, newest first; records without a year come last. */
function groupByYear(items: Publication[]) {
  const map = new Map<number | undefined, Publication[]>()
  for (const p of items) map.set(p.year, [...(map.get(p.year) ?? []), p])
  return [...map.entries()].sort(([a], [b]) => (b ?? -Infinity) - (a ?? -Infinity))
}

export default function PublicationsPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const groups = useMemo(() => groupByYear(publications), [])
  const years = groups.map(([y]) => y).filter((y): y is number => typeof y === 'number')
  const visible = filter === 'all' ? groups : groups.filter(([y]) => y === filter)
  const options: { id: Filter; label: string }[] = [{ id: 'all', label: 'All' }, ...years.map((y) => ({ id: y, label: String(y) }))]

  return (
    <div className="light-page">
      <PageHeader eyebrow="Publications" title="Publications" photo={headerPhotos.publications} tone="light" />
      <div className="bg-ink-900 py-16 md:py-24">
        <div className="container-page">
          <div role="group" aria-label="Filter publications by year" className="-mx-1 mb-12 flex gap-2 overflow-x-auto px-1 pb-1 md:mb-16 md:flex-wrap">
            {options.map((o) => (
              <button
                key={o.id}
                type="button"
                aria-pressed={filter === o.id}
                onClick={() => setFilter(o.id)}
                className={`min-h-11 shrink-0 border px-5 text-sm font-medium tabular-nums transition-colors ${
                  filter === o.id ? 'border-accent bg-accent text-ink-900' : 'border-line text-fg-muted hover:border-line-strong hover:text-fg'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          {publications.length === 0 ? (
            <p lang="ko" className="prose-body border-t border-line pt-8">{EMPTY_MESSAGE}</p>
          ) : (
            <div className="border-t border-line">
              {visible.map(([year, items]) => {
                const label = year === undefined ? UNDATED_LABEL : String(year)
                const id = `year-${year ?? 'undated'}`
                return (
                  <section key={id} aria-labelledby={id} className="grid border-b border-line md:grid-cols-[9rem_1fr] md:gap-x-10">
                    <h2 id={id} lang="ko" className="pt-7 font-display text-base font-semibold tabular-nums text-accent md:pt-8">
                      <span className="md:sticky md:top-28">{label}</span>
                    </h2>
                    <ul className="divide-y divide-line">
                      {items.map((p) => (
                        <li key={p.id}>
                          <PublicationItem publication={p} />
                        </li>
                      ))}
                    </ul>
                  </section>
                )
              })}
            </div>
          )}
          <p className="sr-only" aria-live="polite">{visible.reduce((n, [, items]) => n + items.length, 0)} publications shown</p>
        </div>
      </div>
    </div>
  )
}
