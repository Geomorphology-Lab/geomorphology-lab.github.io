import { Link } from 'react-router-dom'
import { researchAreas, researchIntro } from '../../content/research'
import { AboutVisual } from './AboutVisual'
import { ArrowLink } from '../common/ArrowLink'
import { ArrowUpRight } from '../common/Icons'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { CardPhotoReveal } from './CardPhotoReveal'
import { pick, useLang } from '../../lang'

export function ResearchOverview() {
  // Korean mode: the lead and the card summaries switch; the headings and card titles stay English
  const { lang } = useLang()
  const lead = pick(lang, researchIntro.lead, researchIntro.leadKo)
  return (
    <section
      id="research-areas"
      aria-labelledby="research-areas-title"
      className="theme-paper relative overflow-hidden border-b border-line pb-24 md:pb-32"
    >
      {/* Background image: flush with the top edge, fading into the section background below */}
      <AboutVisual />

      {/* The heading overlaps the image's (already white) bottom edge slightly */}
      <div className="container-page relative z-10 -mt-[clamp(1rem,2.4vw,2.25rem)]">
        <SectionHeading
          id="research-areas-title"
          eyebrow="Research Areas"
          title="Research Areas"
          description={lead.value}
          descriptionLang={lead.lang}
          swap
          action={<ArrowLink to="/research">All research</ArrowLink>}
        />
        <ol className="grid border-t border-l border-line sm:grid-cols-2 xl:grid-cols-4">
          {researchAreas.map((area, i) => {
            const summary = pick(lang, area.summary, area.ko?.summary)
            return (
            <li key={area.id} className="border-r border-b border-line">
              <Reveal delay={i * 80} className="h-full">
                <Link
                  to={`/research#${area.id}`}
                  className="group relative isolate flex h-full flex-col p-7 transition-colors duration-500 hover:bg-fg/[0.04] hover:[--color-accent:#fff] hover:[--color-fg-muted:#e2e2e2] hover:[--color-fg-subtle:#d0d0d0] hover:[--color-fg:#fff] focus-visible:[--color-accent:#fff] focus-visible:[--color-fg-muted:#e2e2e2] focus-visible:[--color-fg-subtle:#d0d0d0] focus-visible:[--color-fg:#fff] md:p-8"
                >
                  {area.cardPhoto && <CardPhotoReveal photo={area.cardPhoto} />}
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm font-medium tabular-nums tracking-[0.18em] text-accent transition-colors duration-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <ArrowUpRight className="size-5 text-fg-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <div className="pt-8 md:pt-10">
                    <h3 lang="en" className="text-xl font-semibold text-fg transition-colors duration-500 md:text-[1.375rem]">{area.title}</h3>
                    <p lang={summary.lang} className="lang-swap mt-4 text-[0.95rem] leading-[1.75] text-fg-muted transition-colors duration-500">{summary.value}</p>
                  </div>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-soft group-hover:scale-x-100" />
                </Link>
              </Reveal>
            </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
