import { site } from '../../content/site'
import { ArrowLink } from '../common/ArrowLink'
import { Reveal } from '../common/Reveal'

export function AboutPreview() {
  const { image } = site.homeAbout
  return (
    <section aria-labelledby="about-preview-title" className="relative overflow-hidden border-b border-line bg-ink-800 pb-24 md:pb-32">
      {/* Full-width atmospheric image: starts at the section's top edge and dissolves into the background */}
      <div className="about-visual relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9] lg:max-h-[36rem]">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="about-visual-img absolute inset-0 size-full object-cover"
          style={{ '--pos-mobile': image.position.mobile, '--pos-desktop': image.position.desktop } as React.CSSProperties}
        />
        {/* Gentle tone-down so the bright photo sits inside the dark palette */}
        <div aria-hidden="true" className="absolute inset-0 bg-ink-900/25" />
      </div>

      {/* The text overlaps the faded bottom of the image slightly */}
      <div className="container-page relative z-10 -mt-[clamp(3.5rem,11vw,9rem)]">
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
          <ArrowLink to="/about" className="mt-10">More about the lab</ArrowLink>
        </Reveal>
      </div>
    </section>
  )
}
