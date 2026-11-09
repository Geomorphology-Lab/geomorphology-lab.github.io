import { Link } from 'react-router-dom'
import { site } from '../../content/site'
import { HeroSlideshow } from './HeroSlideshow'
import { ArrowDown, ArrowRight } from '../common/Icons'
import { useLang } from '../../lang'

export function Hero() {
  const { hero } = site
  const { lang } = useLang()

  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink-900">
      {/* Background photographs: cross-dissolve slideshow (config: src/content/heroSlides.ts) */}
      <HeroSlideshow />
      {/* Legibility overlays: left-to-right for the title, top & bottom for nav and transition */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.70)_32%,rgba(0,0,0,0.48)_55%,rgba(0,0,0,0.24)_78%,rgba(0,0,0,0.20)_100%)] max-md:bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.62)_35%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0.3)_100%)]" />
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
          {/* Korean subtitle: Korean mode only (the English page is unchanged) */}
          {lang === 'ko' && (
          <p
            lang="ko"
            className="animate-rise mt-5 text-[clamp(1rem,0.92rem+0.45vw,1.35rem)] font-medium tracking-[0.06em] text-fg/80 [animation-delay:280ms] md:mt-6"
          >
            {hero.subtitleKo}
          </p>
          )}
          <p
            lang="en"
            className="animate-rise mt-8 max-w-xl text-[clamp(1.05rem,0.95rem+0.45vw,1.3rem)] leading-[1.75] text-fg/85 [animation-delay:350ms] md:mt-10"
          >
            {hero.description}
          </p>
          <div className="animate-rise mt-10 flex flex-col gap-3 [animation-delay:500ms] xs:flex-row xs:flex-wrap sm:gap-4 md:mt-12">
            <a
              href={hero.primaryAction.href}
              className="group inline-flex min-h-12 items-center justify-between gap-6 border border-fg/80 bg-fg px-6 text-sm font-semibold tracking-wide text-ink-900 transition-colors hover:border-accent hover:bg-accent xs:justify-center"
            >
              {hero.primaryAction.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
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
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.625rem] font-medium uppercase tracking-[0.3em] text-fg/70 transition-colors hover:text-fg md:flex"
      >
        Scroll
        <ArrowDown className="animate-cue size-4" />
      </a>
    </section>
  )
}
