import { Link } from 'react-router-dom'
import { researchAreas, researchIntro } from '../../content/research'
import { ArrowLink } from '../common/ArrowLink'
import { ArrowUpRight } from '../common/Icons'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { AboutVisual } from './AboutVisual'
import { CardPhotoReveal } from './CardPhotoReveal'

export function ResearchOverview() {
  return (
    <section
      id="research-areas"
      aria-labelledby="research-areas-title"
      className="relative overflow-hidden border-b border-line bg-ink-800 pb-24 md:pb-32"
    >
      {/* Background image: flush with the top edge, fading into the section background below */}
      <AboutVisual />

      {/* The heading overlaps the faded bottom of the image slightly */}
      <div className="container-page relative z-10 -mt-[clamp(2.5rem,7vw,6rem)]">
        <SectionHeading
          id="research-areas-title"
          eyebrow="Research Areas"
          title="Research Areas"
          description={researchIntro.lead}
          descriptionLang="en"
          action={<ArrowLink to="/research">All research</ArrowLink>}
        />
        <ol className="grid border-t border-l border-line sm:grid-cols-2 xl:grid-cols-4">
          {researchAreas.map((area, i) => (
            <li key={area.id} className="border-r border-b border-line">
              <Reveal delay={i * 80} className="h-full">
                <Link
                  to={`/research#${area.id}`}
                  className="group relative isolate flex h-full flex-col p-7 transition-colors duration-500 hover:bg-fg/[0.04] md:p-8"
                >
                  {area.cardPhoto && <CardPhotoReveal photo={area.cardPhoto} />}
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm font-medium tabular-nums tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <ArrowUpRight className="size-5 text-fg-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <div className="pt-8 md:pt-10">
                    <h3 lang="en" className="text-xl font-semibold text-fg md:text-[1.375rem]">{area.title}</h3>
                    <p lang="en" className="mt-4 text-[0.95rem] leading-[1.75] text-fg-muted">{area.summary}</p>
                  </div>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-soft group-hover:scale-x-100" />
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
