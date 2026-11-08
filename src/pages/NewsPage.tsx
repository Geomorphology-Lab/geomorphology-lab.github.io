import { news } from '../content/news'
import { headerPhotos } from '../content/pageImages'
import { PageHeader } from '../components/common/PageHeader'
import { NewsCard } from '../components/news/NewsCard'

export default function NewsPage() {
  return (
    <>
      <PageHeader eyebrow="News & Gallery" title="News & Gallery" photo={headerPhotos.news} />
      <div className="theme-paper pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container-page">
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <li key={item.id}><NewsCard item={item} /></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
