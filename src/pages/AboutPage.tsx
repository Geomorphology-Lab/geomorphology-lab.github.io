import { about } from '../content/site'
import { PageHeader } from '../components/common/PageHeader'
import { Reveal } from '../components/common/Reveal'

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="About the Lab" lead={about.intro.lead} />

      {/* Introduction */}
      <section aria-labelledby="intro-title" className="bg-ink-900 py-20 md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">01</p>
            <h2 id="intro-title" className="text-[clamp(1.6rem,1.25rem+1.4vw,2.4rem)] font-semibold">{about.intro.title}</h2>
          </div>
          <Reveal className="space-y-6 lg:col-span-7 lg:col-start-6">
            {about.intro.paragraphs.map((p, i) => (
              <p key={i} lang="ko" className="prose-body">{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section aria-labelledby="vision-title" className="border-y border-line bg-ink-800 py-20 md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">02</p>
            <h2 id="vision-title" className="text-[clamp(1.6rem,1.25rem+1.4vw,2.4rem)] font-semibold">{about.vision.title}</h2>
          </div>
          <Reveal className="lg:col-span-7 lg:col-start-6">
            {about.vision.paragraphs.map((p, i) => (
              <p key={i} lang="ko" className="border-l-2 border-accent pl-6 text-[clamp(1.15rem,1.05rem+0.5vw,1.45rem)] leading-[1.7] font-medium text-fg md:pl-8">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-title" className="bg-ink-900 py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">03</p>
              <h2 id="approach-title" className="text-[clamp(1.6rem,1.25rem+1.4vw,2.4rem)] font-semibold">{about.approach.title}</h2>
            </div>
            <p lang="ko" className="prose-body lg:col-span-7 lg:col-start-6">{about.approach.intro}</p>
          </div>
          <ol className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
            {about.approach.items.map((item, i) => (
              <li key={i} className="bg-ink-900 p-7 md:p-9">
                <span className="font-display text-sm tabular-nums tracking-[0.18em] text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 lang="ko" className="mt-8 text-xl font-semibold">{item.title}</h3>
                <p lang="ko" className="mt-4 text-[0.95rem] leading-[1.75] text-fg-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Activities */}
      <section aria-labelledby="activities-title" className="border-t border-line bg-ink-800 py-20 md:py-28">
        <div className="container-page">
          <div className="lg:w-1/3">
            <p className="eyebrow mb-4">04</p>
            <h2 id="activities-title" className="text-[clamp(1.6rem,1.25rem+1.4vw,2.4rem)] font-semibold">{about.activities.title}</h2>
          </div>
          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {about.activities.items.map((item) => (
              <li key={item.title} className="border-t border-line-strong pt-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p lang="ko" className="mt-3 text-[0.95rem] leading-[1.75] text-fg-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
