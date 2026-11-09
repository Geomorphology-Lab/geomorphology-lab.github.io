import { site } from '../../content/site'
import { Reveal } from '../common/Reveal'
import { ContourReveal } from './ContourReveal'
import { pick, useLang } from '../../lang'

/** About the Laboratory text block (sits on the dark background directly below the hero). */
export function AboutPreview() {
  const { lang } = useLang()
  // the eyebrow and heading stay English; the paragraphs follow the site language
  const body = pick(lang, site.homeAbout.paragraphs, site.homeAbout.paragraphsKo)
  return (
    <section id="about" aria-labelledby="about-preview-title" className="relative bg-ink-900 pt-24 pb-[3.75rem] md:pt-32 md:pb-[5.25rem]">
      {/* Decorative background: topographic contour map that surfaces on scroll (see ContourReveal) */}
      <ContourReveal />
      <div className="container-page relative z-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">About the Laboratory</p>
          <h2 id="about-preview-title" className="text-[clamp(1.75rem,1.3rem+1.8vw,2.75rem)] font-semibold text-fg">
            {site.homeAbout.heading}
          </h2>
          <div className="mt-8 space-y-5">
            {body.value.map((p, i) => (
              <p key={`${body.lang}-${i}`} lang={body.lang} className="prose-body lang-swap">{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
