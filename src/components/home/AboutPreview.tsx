import { heroImage } from '../../content/images'
import { site } from '../../content/site'
import { ArrowLink } from '../common/ArrowLink'
import { Reveal } from '../common/Reveal'

export function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-title" className="relative overflow-hidden border-y border-line bg-ink-800 py-24 md:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/5]">
            <img
              src={heroImage.src}
              srcSet={heroImage.srcSet}
              sizes="(min-width: 1024px) 45vw, 100vw"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 size-full scale-[1.25] object-cover"
              style={{ objectPosition: '72% 55%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
            <div className="absolute inset-4 border border-fg/15 md:inset-6" aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-6">
          <p className="eyebrow mb-5">About the Laboratory</p>
          <h2 id="about-preview-title" className="text-[clamp(1.75rem,1.3rem+1.8vw,2.75rem)] font-semibold text-fg">
            {site.homeAbout.heading}
          </h2>
          <div className="mt-8 space-y-5">
            {site.homeAbout.paragraphs.map((p, i) => (
              <p key={i} lang="ko" className="prose-body">{p}</p>
            ))}
          </div>
          <ArrowLink to="/about" className="mt-10">More about the lab</ArrowLink>
        </Reveal>
      </div>
    </section>
  )
}
