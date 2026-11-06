import type { ResearchArea } from '../../content/types'
import { MediaFrame } from '../common/MediaFrame'
import { Reveal } from '../common/Reveal'

export function ResearchAreaBlock({ area, index }: { area: ResearchArea; index: number }) {
  const num = String(index + 1).padStart(2, '0')
  const flip = index % 2 === 1
  return (
    <article id={area.id} aria-labelledby={`${area.id}-title`} className="border-t border-line py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className={`lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
          <MediaFrame image={area.image} aspect="aspect-[4/3]" />
        </Reveal>
        <Reveal delay={100} className={`lg:col-span-7 ${flip ? 'lg:order-1 lg:col-start-1' : ''}`}>
          <p className="flex items-center gap-4 font-display text-sm font-medium tracking-[0.18em] text-accent uppercase">
            <span className="tabular-nums">{num}</span>
            {area.label && <span className="text-fg-subtle">{area.label}</span>}
          </p>
          <h2 id={`${area.id}-title`} lang="ko" className="mt-4 text-[clamp(1.6rem,1.25rem+1.4vw,2.4rem)] font-semibold text-fg">
            {area.title}
          </h2>
          <p lang="ko" className="mt-5 text-[clamp(1.05rem,1rem+0.25vw,1.2rem)] leading-[1.75] text-fg">{area.summary}</p>
          <div className="mt-6 space-y-4">
            {area.description.map((p, i) => (
              <p key={i} lang="ko" className="prose-body">{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="eyebrow mb-3 text-fg-subtle">Related Projects</dt>
              {area.relatedProjects.map((t, i) => (
                <dd key={i} lang="ko" className="mt-2 border-l border-accent/50 pl-4 text-[0.95rem] leading-relaxed text-fg-muted">{t}</dd>
              ))}
            </div>
            <div>
              <dt className="eyebrow mb-3 text-fg-subtle">Related Publications</dt>
              {area.relatedPublications.map((t, i) => (
                <dd key={i} lang="ko" className="mt-2 border-l border-accent/50 pl-4 text-[0.95rem] leading-relaxed text-fg-muted">{t}</dd>
              ))}
            </div>
          </dl>
        </Reveal>
      </div>
    </article>
  )
}
