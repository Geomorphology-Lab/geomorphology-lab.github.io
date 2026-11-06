import { publicationCategories, publicationsIntro } from '../../content/publications'
import { ArrowLink } from '../common/ArrowLink'
import { SectionHeading } from '../common/SectionHeading'
import { PublicationItem } from '../publications/PublicationItem'

export function SelectedPublications() {
  const featured = publicationCategories
    .flatMap((c) => c.items.filter((p) => p.featured).map((p) => ({ ...p, category: c.title })))
    .slice(0, 4)

  return (
    <section aria-labelledby="selected-pubs-title" className="bg-ink-900 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          id="selected-pubs-title"
          eyebrow="Selected Publications"
          title="Selected Research & Publications"
          description={publicationsIntro}
          action={<ArrowLink to="/publications">All publications</ArrowLink>}
        />
        <ul className="border-t border-line">
          {featured.map((p, i) => (
            <li key={i} className="border-b border-line">
              <PublicationItem publication={p} category={p.category} hideYear />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
