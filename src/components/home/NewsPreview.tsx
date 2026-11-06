import { news, newsIntro } from '../../content/news'
import { ArrowLink } from '../common/ArrowLink'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { NewsCard } from '../news/NewsCard'

export function NewsPreview() {
  return (
    <section aria-labelledby="news-preview-title" className="border-t border-line bg-ink-800 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="news-preview-title"
          eyebrow="News & Fieldwork"
          title="News & Fieldwork"
          description={newsIntro}
          action={<ArrowLink to="/news">All news</ArrowLink>}
        />
        <ul className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {news.slice(0, 3).map((item, i) => (
            <li key={item.id}>
              <Reveal delay={i * 80}>
                <NewsCard item={item} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
