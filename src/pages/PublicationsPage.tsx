import { publicationCategories, publicationsIntro } from '../content/publications'
import { PageHeader } from '../components/common/PageHeader'
import { PublicationItem } from '../components/publications/PublicationItem'

export default function PublicationsPage() {
  return (
    <>
      <PageHeader eyebrow="Publications" title="Publications" lead={publicationsIntro} />
      <div className="bg-ink-900 py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Category navigation: horizontal on mobile, sticky sidebar on desktop */}
          <nav aria-label="Publication categories" className="lg:col-span-3">
            <ul className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:sticky lg:top-28 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-line">
              {publicationCategories.map((c) => (
                <li key={c.id} className="shrink-0 lg:border-b lg:border-line">
                  <a
                    href={`#${c.id}`}
                    className="flex min-h-11 items-center justify-between gap-4 border border-line px-4 text-sm font-medium text-fg-muted transition-colors hover:border-accent hover:text-fg lg:border-0 lg:px-0 lg:py-3"
                  >
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="min-w-0 space-y-20 lg:col-span-9">
            {publicationCategories.map((c) => (
              <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`}>
                <h2 id={`${c.id}-title`} className="text-[clamp(1.5rem,1.2rem+1.2vw,2.1rem)] font-semibold">{c.title}</h2>
                <p lang="ko" className="prose-body mt-4 max-w-2xl">{c.description}</p>
                <ul className="mt-8 border-t border-line">
                  {c.items.map((p, i) => (
                    <li key={i} className="border-b border-line">
                      <PublicationItem publication={p} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
