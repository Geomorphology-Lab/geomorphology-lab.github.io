import { useState } from 'react'
import { news, newsCategories } from '../content/news'
import { headerPhotos } from '../content/pageImages'
import type { NewsCategory } from '../content/types'
import { PageHeader } from '../components/common/PageHeader'
import { NewsCard } from '../components/news/NewsCard'

export default function NewsPage() {
  const [filter, setFilter] = useState<NewsCategory | 'All'>('All')
  const items = filter === 'All' ? news : news.filter((n) => n.category === filter)
  const options = [{ id: 'All' as const, label: 'All' }, ...newsCategories]

  return (
    <>
      <PageHeader
        eyebrow="News & Gallery"
        title="News & Gallery"
        photo={headerPhotos.news}
        tabs={
          <div role="group" aria-label="Filter news by category" className="page-tabs">
            {options.map((o) => (
              <button key={o.id} type="button" aria-pressed={filter === o.id} onClick={() => setFilter(o.id)} className="page-tab">
                {o.label}
              </button>
            ))}
          </div>
        }
      />
      <div className="theme-paper pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container-page">
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
