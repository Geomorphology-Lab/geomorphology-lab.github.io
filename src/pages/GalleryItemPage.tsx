import { Link, useParams } from 'react-router-dom'
import { news } from '../content/news'
import { headerPhotos } from '../content/pageImages'
import { PageHeader } from '../components/common/PageHeader'
import { ArrowLink } from '../components/common/ArrowLink'
import NotFoundPage from './NotFoundPage'

/** One gallery item: its title, then every photograph one after another (opened from the thumbnail on the Gallery page). */
export default function GalleryItemPage() {
  const { id } = useParams()
  const item = news.find((n) => n.id === id && n.photos?.length)
  if (!item) return <NotFoundPage />
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Gallery" photo={headerPhotos.news} />
      <div className="theme-paper pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="container-page">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <span aria-hidden="true">←</span> Gallery
          </Link>
          <h2 lang="ko" className="mt-6 max-w-4xl text-[clamp(1.5rem,1.2rem+1.3vw,2.25rem)] leading-snug font-semibold text-fg">
            {item.title}
          </h2>
          <ul className="mt-10 flex flex-col items-center gap-8 md:mt-14 md:gap-12">
            {item.photos!.map((p, i) => (
              <li key={p.src} className="w-full text-center">
                <img
                  src={p.src}
                  srcSet={p.srcSet}
                  sizes="(min-width: 1280px) 1184px, 100vw"
                  width={p.width}
                  height={p.height}
                  alt={p.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`mx-auto block h-auto max-w-full ${p.height > p.width ? 'max-h-[88vh] w-auto' : 'w-full'}`}
                />
              </li>
            ))}
          </ul>
          <div className="mt-14 md:mt-20">
            <ArrowLink to="/news">Back to Gallery</ArrowLink>
          </div>
        </div>
      </div>
    </>
  )
}
