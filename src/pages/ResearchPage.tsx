import { useState } from 'react'
import { researchAreas, researchIntro } from '../content/research'
import { PageHeader } from '../components/common/PageHeader'
import { PageTabs } from '../components/common/PageTabs'
import { headerPhotos } from '../content/pageImages'
import { ResearchAreaBlock } from '../components/research/ResearchAreaBlock'
import { pick, useLang } from '../lang'

type Filter = 'all' | string

const tabOptions: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  ...researchAreas.map((a) => ({ id: a.id, label: a.tabLabel ?? a.title })),
]

export default function ResearchPage() {
  // "All" is the default so links such as /research#area-2 (from the home page) find their section.
  const [filter, setFilter] = useState<Filter>('all')
  const showAll = filter === 'all'
  const { lang } = useLang()
  const lead = pick(lang, researchIntro.lead, researchIntro.leadKo)

  return (
    <>
      <PageHeader
        eyebrow="Research"
        title={researchIntro.title}
        photo={headerPhotos.research}
        tabs={<PageTabs label="Show research areas" options={tabOptions} value={filter} onChange={setFilter} />}
      />
      <section className="theme-paper pt-10 pb-8 md:pt-14">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <p lang={lead.lang} className="prose-body lang-swap lg:col-span-7">{lead.value}</p>
          {showAll && (
            <nav aria-label="Research areas" className="lg:col-span-4 lg:col-start-9">
              <p className="eyebrow mb-4 text-fg-subtle">On this page</p>
              <ol className="border-t border-line">
                {researchAreas.map((a, i) => (
                  <li key={a.id} className="border-b border-line">
                    <a href={`#${a.id}`} className="flex min-h-12 items-center gap-4 py-3 text-[0.95rem] text-fg-muted transition-colors hover:text-fg">
                      <span className="font-display text-xs tabular-nums tracking-[0.18em] text-accent">{String(i + 1).padStart(2, '0')}</span>
                      <span lang="en">{a.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </section>
      <div className="theme-paper pb-16 md:pb-24">
        <div className="container-page">
          {researchAreas.map((area, i) =>
            showAll || area.id === filter ? <ResearchAreaBlock key={area.id} area={area} index={i} /> : null,
          )}
        </div>
      </div>
    </>
  )
}
