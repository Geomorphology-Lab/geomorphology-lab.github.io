import type { ResearchArea } from '../../content/types'
import { MediaFrame } from '../common/MediaFrame'
import { Reveal } from '../common/Reveal'

/**
 * Keeps each half of a "First part & Second part" title together, so the heading can only wrap
 * after the "&" (e.g. "Anthropocene Soil Erosion &" / "Land Use") and never in the middle of a phrase.
 * A half that is wider than the screen still wraps normally. Titles without "&" are unchanged.
 */
function HeadingText({ title }: { title: string }) {
  const i = title.indexOf(' & ')
  if (i === -1) return <>{title}</>
  return (
    <>
      <span className="inline-block">{title.slice(0, i + 2)}</span> <span className="inline-block">{title.slice(i + 3)}</span>
    </>
  )
}

export function ResearchAreaBlock({ area, index }: { area: ResearchArea; index: number }) {
  const num = String(index + 1).padStart(2, '0')
  const flip = index % 2 === 1
  const wide = Boolean(area.image?.wide)
  const photo = (
    <MediaFrame
      image={area.image}
      aspect={area.image?.fit === 'contain' ? '' : 'aspect-[4/3]'}
      variant="landscape"
      className={area.image?.fit === 'contain' ? 'research-photo' : ''}
      sizes={wide ? '(min-width: 1024px) 80vw, 100vw' : '(min-width: 1024px) 40vw, 100vw'}
    />
  )
  return (
    <article id={area.id} aria-labelledby={`${area.id}-title`} className="border-t border-line py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {!wide && (
          <Reveal className={`lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
            {/* A portrait or square photo keeps its own proportions (shown whole) instead of being cropped to 4:3 */}
            {photo}
          </Reveal>
        )}
        <Reveal delay={100} className={wide ? 'lg:col-span-12' : `lg:col-span-7 ${flip ? 'lg:order-1 lg:col-start-1' : ''}`}>
          <p className="flex items-center gap-4 font-display text-sm font-medium tracking-[0.18em] text-accent uppercase">
            <span className="tabular-nums">{num}</span>
            {area.label && <span className="text-fg-subtle">{area.label}</span>}
          </p>
          <h2 id={`${area.id}-title`} lang="en" className="mt-4 text-[clamp(1.6rem,1.25rem+1.4vw,2.4rem)] font-semibold text-fg">
            <HeadingText title={area.title} />
          </h2>
          {area.question && (
            <p lang="en" className="mt-5 border-l-2 border-accent/60 pl-4 text-[clamp(1.05rem,1rem+0.25vw,1.2rem)] leading-[1.75] text-fg">
              {area.question}
            </p>
          )}
          <div className="mt-6 space-y-4">
            {area.description.map((p, i) => (
              <p key={i} lang="en" className="prose-body">{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="eyebrow mb-3 text-fg-subtle">Related Projects</dt>
              {area.relatedProjects.map((p, i) => (
                <dd key={i} lang="en" className="mt-2 border-l border-accent/50 pl-4 text-[0.95rem] leading-relaxed text-fg-muted">
                  <span className="block">{p.title}</span>
                  {p.detail && <span className="mt-1 block text-[0.875rem] text-fg-subtle">{p.detail}</span>}
                </dd>
              ))}
            </div>
            <div>
              <dt className="eyebrow mb-3 text-fg-subtle">Related Publications</dt>
              {area.relatedPublications.map((t, i) => (
                <dd key={i} lang="en" className="mt-2 border-l border-accent/50 pl-4 text-[0.95rem] leading-relaxed text-fg-muted">{t}</dd>
              ))}
            </div>
          </dl>
        </Reveal>
      </div>
      {wide && (
        <Reveal className="mt-12">
          {photo}
        </Reveal>
      )}
    </article>
  )
}
