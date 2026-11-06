import { useState } from 'react'
import { news, newsCategories, newsIntro } from '../content/news'
import type { NewsCategory } from '../content/types'
import { PageHeader } from '../components/common/PageHeader'
import { NewsCard } from '../components/news/NewsCard'

export default function NewsPage() {
  const [filter, setFilter] = useState<NewsCategory | 'All'>('All')
  const items = filter === 'All' ? news : news.filter((n) => n.category === filter)
  const options = [{ id: 'All' as const, label: 'All' }, ...newsCategories]

  return (
    <>
      <PageHeader eyebrow="News & Gallery" title="News & Gallery" lead={newsIntro} />
      <div className="bg-ink-900 py-16 md:py-24">
        <div className="container-page">
          <div role="group" aria-label="Filter news by category" className="-mx-1 mb-12 flex gap-2 overflow-x-auto px-1 pb-1 md:mb-16 md:flex-wrap">
            {options.map((o) => (
              <button
                key={o.id}
                type="button"
                aria-pressed={filter === o.id}
                onClick={() => setFilter(o.id)}
                className={`min-h-11 shrink-0 border px-5 text-sm font-medium transition-colors ${
                  filter === o.id ? 'border-accent bg-accent text-ink-900' : 'border-line text-fg-muted hover:border-line-strong hover:text-fg'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">{items.length} items shown</p>
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.id}><NewsCard item={item} /></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
