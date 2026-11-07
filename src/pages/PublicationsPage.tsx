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
    <>
      <PageHeader
        eyebrow="Publications"
        title="Publications"
        photo={headerPhotos.publications}
        tabs={
          <div role="group" aria-label="Filter publications by year" className="page-tabs">
            {options.map((o) => (
              <button key={o.id} type="button" aria-pressed={filter === o.id} onClick={() => setFilter(o.id)} className="page-tab">
                {o.label}
              </button>
            ))}
          </div>
        }
      />
      <div className="theme-paper pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="container-page">
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
    </>
  )
}
