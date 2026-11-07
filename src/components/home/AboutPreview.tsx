import { site } from '../../content/site'
import { Reveal } from '../common/Reveal'

/** About the Laboratory text block (sits on the dark background directly below the hero). */
export function AboutPreview() {
  return (
    <section id="about" aria-labelledby="about-preview-title" className="relative bg-ink-900 py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">About the Laboratory</p>
          <h2 id="about-preview-title" className="text-[clamp(1.75rem,1.3rem+1.8vw,2.75rem)] font-semibold text-fg">
            {site.homeAbout.heading}
          </h2>
          <div className="mt-8 space-y-5">
            {site.homeAbout.paragraphs.map((p, i) => (
              <p key={i} lang="ko" className="prose-body">{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
