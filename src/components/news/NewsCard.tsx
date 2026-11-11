import { Link } from 'react-router-dom'
import type { NewsItem } from '../../content/types'
import { MediaFrame } from '../common/MediaFrame'

/** Small square with a plus (white border, half-transparent white fill): marks a thumbnail that opens a page with more photographs */
function MoreMark() {
  return (
    <span
      aria-hidden="true"
      className="absolute right-3 bottom-3 inline-flex size-8 items-center justify-center border border-white bg-white/50 text-black transition-colors duration-300 group-hover:bg-black/60 group-hover:text-white"
    >
      <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
        <path d="M8 3v10M3 8h10" />
      </svg>
    </span>
  )
}

export function NewsCard({ item }: { item: NewsItem }) {
  const hasPhotos = Boolean(item.photos?.length)
  const body = (
    <>
      <div className="relative">
        <MediaFrame image={item.image} aspect="aspect-[3/2]" />
        {hasPhotos && <MoreMark />}
      </div>
      <h3 lang="ko" className="mt-6 text-lg leading-snug font-semibold text-fg transition-colors group-hover:text-accent">{item.title}</h3>
    </>
  )
  if (hasPhotos) {
    return (
      <Link to={`/news/${item.id}`} className="group block" aria-label={`${item.title} (사진 ${item.photos!.length}장 보기)`}>
        {body}
      </Link>
    )
  }
  return item.link ? (
    <a href={item.link} className="group block">{body}</a>
  ) : (
    <article className="group">{body}</article>
  )
}
