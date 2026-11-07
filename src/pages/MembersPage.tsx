import { alumni, graduateStudents, principalInvestigator as pi, undergraduateResearchers } from '../content/people'
import { headerPhotos } from '../content/pageImages'
import type { Person } from '../content/types'
import { PageHeader } from '../components/common/PageHeader'
import { MediaFrame } from '../components/common/MediaFrame'
import { EmailText } from '../components/common/EmailText'
import { ArrowUpRight, MailIcon } from '../components/common/Icons'
import { MemberCard } from '../components/people/MemberCard'
import { SectionHeading } from '../components/common/SectionHeading'

function MemberGrid({ id, title, members }: { id: string; title: string; members: Person[] }) {
  if (members.length === 0) return null
  return (
    <section aria-labelledby={id} className="border-t border-line py-16 md:py-24">
      <SectionHeading id={id} eyebrow="Members" title={title} />
      <ul className="member-grid">
        {members.map((m, i) => (
          <li key={i}><MemberCard person={m} /></li>
        ))}
      </ul>
    </section>
  )
}

export default function MembersPage() {
  return (
    <>
      <PageHeader eyebrow="Members" title="Members" photo={headerPhotos.members} />
      <div className="bg-ink-900">
        <div className="container-page">
          {/* Principal Investigator */}
          <section aria-labelledby="pi-title" className="py-16 md:py-24">
            <p className="eyebrow mb-10">Principal Investigator</p>

            {/* Upper row: portrait + identification */}
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
              <div className="pi-photo shrink-0">
                <MediaFrame image={pi.photo} aspect="aspect-[4/5]" variant="portrait" eager />
              </div>
              <div className="min-w-0">
                <h2 id="pi-title" lang="en" className="text-[clamp(2rem,1.5rem+1.95vw,3.125rem)] font-semibold">{pi.name}</h2>
                <p lang="en" className="mt-3 text-[1.0625rem] text-accent">{pi.affiliation}</p>
                {pi.email && (
                  <p className="mt-5 flex items-start gap-2.5 text-sm text-fg-muted">
                    <MailIcon className="mt-0.5 size-4 shrink-0 text-fg-subtle" />
                    <EmailText value={pi.email} />
                  </p>
                )}
                {pi.scholarUrl && (
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
                {pi.education.map((t, i) => (
                  <dd key={i} lang="en" className="border-t border-line py-3.5 text-[0.975rem] leading-[1.7] text-fg-muted first-of-type:border-t-0 first-of-type:pt-0">
                    {t}
                  </dd>
                ))}
              </div>
              <div className="md:col-span-2">
                <dt className="eyebrow mb-4 text-fg-subtle">Career</dt>
                {pi.career.map((t, i) => {
                  // "2025.03–Present: Title, Institution" → date shown on its own line (text unchanged)
                  const m = t.match(/^(\d{4}\.\d{2}\s*[–-]\s*(?:\d{4}\.\d{2}|Present)):\s*(.+)$/)
                  return (
                    <dd key={i} lang="en" className="border-t border-line py-3.5 text-[0.975rem] leading-[1.7] text-fg-muted first-of-type:border-t-0 first-of-type:pt-0">
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

          <MemberGrid id="graduate-title" title="Graduate Students" members={graduateStudents} />
          <MemberGrid id="undergraduate-title" title="Undergraduate Researchers" members={undergraduateResearchers} />

          {/* Alumni */}
          {alumni.length > 0 && (
            <section aria-labelledby="alumni-title" className="border-t border-line py-16 md:py-24">
              <SectionHeading id="alumni-title" eyebrow="Members" title="Alumni" />
              <ul className="border-t border-line">
                {alumni.map((a, i) => (
                  <li key={i} className="grid gap-x-8 gap-y-1.5 border-b border-line py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_8rem_minmax(0,1.6fr)] md:items-baseline">
                    <p lang="ko" className="font-semibold text-fg">{a.name}</p>
                    <p lang="ko" className="text-[0.95rem] text-fg-muted">{a.degree}</p>
                    <p lang="ko" className="text-[0.95rem] tabular-nums text-accent">{a.year}</p>
                    <p lang="ko" className="text-[0.95rem] text-fg-muted">{a.currentPosition}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </>
  )
}
