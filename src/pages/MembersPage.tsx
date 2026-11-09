import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { alumni, graduateStudents, principalInvestigator as pi, undergraduateResearchers } from '../content/people'
import { headerPhotos } from '../content/pageImages'
import type { Person } from '../content/types'
import { PageHeader } from '../components/common/PageHeader'
import { PageTabs } from '../components/common/PageTabs'
import { MediaFrame } from '../components/common/MediaFrame'
import { EmailText } from '../components/common/EmailText'
import { ArrowUpRight, MailIcon } from '../components/common/Icons'
import { MemberCard } from '../components/people/MemberCard'
import { AlumniList } from '../components/people/AlumniList'
import { SectionHeading } from '../components/common/SectionHeading'
import { pick, useLang } from '../lang'

type Tab = 'professor' | 'current' | 'alumni'

const tabOptions: { id: Tab; label: string }[] = [
  { id: 'professor', label: 'Professor' },
  { id: 'current', label: 'Current Members' },
  { id: 'alumni', label: 'Alumni' },
]

function MemberGrid({ id, title, members }: { id: string; title: string; members: Person[] }) {
  if (members.length === 0) return null
  return (
    <section aria-labelledby={id} className="pt-10 pb-16 md:pt-14 md:pb-24">
      <SectionHeading id={id} eyebrow="Members" title={title} />
      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {members.map((m, i) => (
          <li key={i}><MemberCard person={m} /></li>
        ))}
      </ul>
    </section>
  )
}

/** Addresses such as /members#graduate open that tab (used by the navigation drop-down) */
const tabFromHash = (hash: string): Tab | undefined => tabOptions.find((o) => `#${o.id}` === hash)?.id

export default function MembersPage() {
  const { hash, key } = useLocation()
  const [tab, setTab] = useState<Tab>(tabFromHash(hash) ?? 'professor')
  // Korean mode: the PI's name, education and career switch; headings and the rest stay English
  const { lang } = useLang()
  const piName = pick(lang, pi.name, pi.piKo?.name)
  const education = pick(lang, pi.education, pi.piKo?.education)
  const career = pick(lang, pi.career, pi.piKo?.career)
  // Also react when the link is followed while already on this page (even to the same address)
  useEffect(() => {
    const t = tabFromHash(hash)
    if (t) setTab(t)
  }, [hash, key])
  return (
    <>
      <PageHeader
        eyebrow="Members"
        title="Members"
        photo={headerPhotos.members}
        tabs={<PageTabs label="Show members by group" options={tabOptions} value={tab} onChange={setTab} />}
      />
      <div className="theme-paper">
        <div className="container-page">
          {/* Principal Investigator */}
          {tab === 'professor' && (
          <section aria-labelledby="pi-title" className="pt-10 pb-16 md:pt-14 md:pb-24">
            <p className="eyebrow mb-10">Principal Investigator</p>

            {/* Upper row: portrait + identification */}
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
              <div className="pi-photo shrink-0">
                <MediaFrame image={pi.photo} aspect="aspect-[4/5]" variant="portrait" eager />
              </div>
              <div className="min-w-0">
                <h2 id="pi-title" lang={piName.lang} className={`lang-swap font-semibold ${piName.lang === 'ko' ? 'text-[clamp(1.6rem,1.2rem+1.6vw,2.5rem)]' : 'text-[clamp(2rem,1.5rem+1.95vw,3.125rem)]'}`}>{piName.value}</h2>
                <p lang="en" className="mt-3 text-[1.0625rem] text-accent">{pi.affiliation}</p>
                {pi.email && (
                  <p className="mt-5 flex items-start gap-2.5 text-sm text-fg-muted">
                    <MailIcon className="mt-0.5 size-4 shrink-0 text-fg-subtle" />
                    <EmailText value={pi.email} />
                  </p>
                )}
                {pi.scholarUrl && (
                  <div>
                  <a
                    href={pi.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 border border-accent/60 px-4 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent hover:text-ink-900"
                  >
                    Google Scholar
                    <ArrowUpRight className="size-4" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                  </div>
                )}
                {pi.cvUrl && (
                  <div>
                    <a
                      href={pi.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-11 items-center gap-2 border border-accent/60 px-4 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent hover:text-ink-900"
                    >
                      Download CV
                      <ArrowUpRight className="size-4" />
                      <span className="sr-only">(PDF, opens in a new tab)</span>
                    </a>
                  </div>
                )}
                {pi.biography && pi.biography.length > 0 && (
                  <div className="mt-8 max-w-2xl space-y-4 border-t border-line pt-8">
                    {pi.biography.map((p, i) => (
                      <p key={i} lang="ko" className="prose-body">{p}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Lower row: academic information across the full content width */}
            <dl className="mt-14 grid gap-x-12 gap-y-12 border-t border-line pt-12 md:grid-cols-2">
              <div>
                <dt className="eyebrow mb-4 text-fg-subtle">Research Interests</dt>
                <dd lang="en" className="text-[0.975rem] leading-[1.75] text-fg-muted">{pi.researchInterests}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-4 text-fg-subtle">Education</dt>
                {education.value.map((e, i) => (
                  <dd key={`${education.lang}-${i}`} lang={education.lang} className="lang-swap border-t border-line py-3.5 text-[0.975rem] leading-[1.7] text-fg-muted first-of-type:border-t-0 first-of-type:pt-0">
                    <span className="block font-display text-[0.8125rem] font-medium tracking-wide text-accent">
                      {e.degree} · <span className="tabular-nums">{e.years}</span>
                    </span>
                    <span className="mt-1 block">{e.institution}</span>
                  </dd>
                ))}
              </div>
              <div className="md:col-span-2">
                <dt className="eyebrow mb-4 text-fg-subtle">Career</dt>
                {career.value.map((t, i) => {
                  // "2025.03–Present: Title, Institution" (Korean: "2025.03–현재: …") → date shown on its own line (text unchanged)
                  const m = t.match(/^(\d{4}\.\d{2}\s*[–-]\s*(?:\d{4}\.\d{2}|Present|현재)):\s*(.+)$/)
                  return (
                    <dd key={`${career.lang}-${i}`} lang={career.lang} className="lang-swap border-t border-line py-3.5 text-[0.975rem] leading-[1.7] text-fg-muted first-of-type:border-t-0 first-of-type:pt-0">
                      {m ? (
                        <>
                          <span className="block font-display text-[0.8125rem] font-medium tabular-nums tracking-wide text-accent">{m[1]}</span>
                          <span className="mt-1 block">{m[2]}</span>
                        </>
                      ) : (
                        t
                      )}
                    </dd>
                  )
                })}
              </div>
            </dl>
          </section>
          )}

          {/* Graduate students first, then undergraduate researchers, in one list */}
          {tab === 'current' && <MemberGrid id="current-title" title="Current Members" members={[...graduateStudents, ...undergraduateResearchers]} />}

          {/* Alumni */}
          {tab === 'alumni' && alumni.length > 0 && (
            <section aria-labelledby="alumni-title" className="pt-10 pb-16 md:pt-14 md:pb-24">
              <SectionHeading id="alumni-title" eyebrow="Members" title="Alumni" />
              <AlumniList alumni={alumni} />
            </section>
          )}
        </div>
      </div>
    </>
  )
}
