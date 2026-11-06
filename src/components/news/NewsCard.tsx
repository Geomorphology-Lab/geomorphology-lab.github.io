import type { NewsItem } from '../../content/types'
import { newsCategories } from '../../content/news'
import { MediaFrame } from '../common/MediaFrame'

export function NewsCard({ item }: { item: NewsItem }) {
  const label = newsCategories.find((c) => c.id === item.category)?.label ?? item.category
  const body = (
    <>
      <MediaFrame image={item.image} aspect="aspect-[3/2]" />
      <div className="mt-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em]">
        <span className="text-accent">{label}</span>
        <span className="h-px w-4 bg-line-strong" aria-hidden="true" />
        <span lang="ko" className="text-fg-subtle normal-case tracking-normal">{item.date}</span>
      </div>
      <h3 lang="ko" className="mt-4 text-lg leading-snug font-semibold text-fg transition-colors group-hover:text-accent">{item.title}</h3>
      <p lang="ko" className="mt-3 text-[0.95rem] leading-[1.75] text-fg-muted">{item.summary}</p>
    </>
  )
  return item.link ? (
    <a href={item.link} className="group block">{body}</a>
  ) : (
    <article className="group">{body}</article>
  )
}
