import { researchAreas, researchIntro } from '../content/research'
import { PageHeader } from '../components/common/PageHeader'
import { headerPhotos } from '../content/pageImages'
import { ResearchAreaBlock } from '../components/research/ResearchAreaBlock'

export default function ResearchPage() {
  return (
    <>
      <PageHeader eyebrow="Research" title={researchIntro.title} photo={headerPhotos.research} />
      <section className="bg-ink-900 pt-16 pb-8 md:pt-24">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <p lang="ko" className="prose-body lg:col-span-7">{researchIntro.description}</p>
          <nav aria-label="Research areas" className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow mb-4 text-fg-subtle">On this page</p>
            <ol className="border-t border-line">
              {researchAreas.map((a, i) => (
                <li key={a.id} className="border-b border-line">
                  <a href={`#${a.id}`} className="flex min-h-12 items-center gap-4 py-3 text-[0.95rem] text-fg-muted transition-colors hover:text-fg">
                    <span className="font-display text-xs tabular-nums tracking-[0.18em] text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <span lang="ko">{a.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>
      <div className="bg-ink-900 pb-16 md:pb-24">
        <div className="container-page">
          {researchAreas.map((area, i) => (
            <ResearchAreaBlock key={area.id} area={area} index={i} />
          ))}
        </div>
      </div>
    </>
  )
}
