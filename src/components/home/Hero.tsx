import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../content/site'
import { heroImage } from '../../content/images'
import { ArrowDown, ArrowRight } from '../common/Icons'

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false)
  const { hero } = site

  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink-900">
      {/* Background photograph (replaceable — see src/content/images.ts) */}
      {!imageFailed && (
        <img
          src={heroImage.src}
          srcSet={heroImage.srcSet}
          sizes="100vw"
          alt={hero.imageAlt}
          fetchPriority="high"
          decoding="async"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 -z-20 size-full object-cover"
          style={{ objectPosition: heroImage.position }}
        />
      )}
      {/* Legibility overlays: left-to-right for the title, top & bottom for nav and transition */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(8_16_26/0.82)_0%,rgb(8_16_26/0.55)_38%,rgb(8_16_26/0.12)_72%,transparent_100%)] max-md:bg-[linear-gradient(180deg,rgb(8_16_26/0.55)_0%,rgb(8_16_26/0.3)_50%,rgb(8_16_26/0.05)_78%,transparent_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink-900/70 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-ink-900 to-transparent md:h-48" />

      <div className="container-page flex flex-1 flex-col justify-start pt-[clamp(8rem,24svh,13rem)] pb-28 md:justify-center md:pt-24 md:pb-24">
        <div className="max-w-5xl">
          <p className="eyebrow animate-rise mb-6 text-fg/85 [animation-delay:100ms] md:mb-8">
            <span className="mr-3 inline-block h-px w-8 bg-accent align-middle" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="animate-rise font-display text-[clamp(2.4rem,0.8rem+8vw,7.5rem)] leading-[0.95] [overflow-wrap:normal] [word-break:normal] font-semibold tracking-[-0.045em] text-fg [animation-delay:200ms]"
          >
            {hero.title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          <p
            lang="ko"
            className="animate-rise mt-8 max-w-xl text-[clamp(1.05rem,0.95rem+0.45vw,1.3rem)] leading-[1.75] text-fg/85 [animation-delay:350ms] md:mt-10"
          >
            {hero.description}
          </p>
          <div className="animate-rise mt-10 flex flex-col gap-3 [animation-delay:500ms] xs:flex-row xs:flex-wrap sm:gap-4 md:mt-12">
            <Link
              to={hero.primaryAction.path}
              className="group inline-flex min-h-12 items-center justify-between gap-6 border border-fg/80 bg-fg px-6 text-sm font-semibold tracking-wide text-ink-900 transition-colors hover:border-accent hover:bg-accent xs:justify-center"
            >
              {hero.primaryAction.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to={hero.secondaryAction.path}
              className="group inline-flex min-h-12 items-center justify-between gap-6 border border-fg/35 bg-ink-900/20 px-6 text-sm font-semibold tracking-wide text-fg backdrop-blur-[2px] transition-colors hover:border-accent hover:text-accent xs:justify-center"
            >
              {hero.secondaryAction.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <a
        href="#research-areas"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.625rem] font-medium uppercase tracking-[0.3em] text-fg/70 transition-colors hover:text-fg md:flex"
      >
        Scroll
        <ArrowDown className="animate-cue size-4" />
      </a>
    </section>
  )
}
