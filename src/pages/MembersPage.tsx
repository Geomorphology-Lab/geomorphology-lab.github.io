import { alumni, graduateStudents, peopleIntro, principalInvestigator as pi, undergraduateResearchers } from '../content/people'
import type { Person } from '../content/types'
import { PageHeader } from '../components/common/PageHeader'
import { MediaFrame } from '../components/common/MediaFrame'
import { EmailText } from '../components/common/EmailText'
import { MailIcon } from '../components/common/Icons'
import { MemberCard } from '../components/people/MemberCard'
import { SectionHeading } from '../components/common/SectionHeading'

function MemberGrid({ id, title, members }: { id: string; title: string; members: Person[] }) {
  if (members.length === 0) return null
  return (
    <section aria-labelledby={id} className="border-t border-line py-16 md:py-24">
      <SectionHeading id={id} eyebrow="Members" title={title} />
      <ul className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      <PageHeader eyebrow="Members" title="Members" lead={peopleIntro} />
      <div className="bg-ink-900">
        <div className="container-page">
          {/* Principal Investigator */}
          <section aria-labelledby="pi-title" className="py-16 md:py-24">
            <p className="eyebrow mb-10">Principal Investigator</p>
            <div className="grid gap-10 md:grid-cols-12 md:gap-14">
              <div className="max-w-xs md:col-span-5 md:max-w-none lg:col-span-4">
                <MediaFrame image={pi.photo} aspect="aspect-[4/5]" variant="portrait" eager />
              </div>
              <div className="md:col-span-7 lg:col-span-8">
                <h2 id="pi-title" lang="ko" className="text-[clamp(1.75rem,1.3rem+1.8vw,2.75rem)] font-semibold">{pi.name}</h2>
                <p lang="en" className="mt-3 text-[1rem] text-accent">{pi.affiliation}</p>
                {pi.email && (
                  <p className="mt-5 flex items-start gap-2.5 text-sm text-fg-muted">
                    <MailIcon className="mt-0.5 size-4 shrink-0 text-fg-subtle" />
                    <EmailText value={pi.email} />
                  </p>
                )}
                <div className="mt-8 space-y-4 border-t border-line pt-8">
                  {pi.biography.map((p, i) => (
                    <p key={i} lang="ko" className="prose-body">{p}</p>
                  ))}
                </div>
                <dl className="mt-10 grid gap-8 sm:grid-cols-3">
                  {[
                    ['Research Interests', [pi.researchInterests]],
                    ['Education', pi.education],
                    ['Career', pi.career],
                  ].map(([label, items]) => (
                    <div key={label as string}>
                      <dt className="eyebrow mb-3 text-fg-subtle">{label as string}</dt>
                      {(items as string[]).map((t, i) => (
                        <dd key={i} lang="ko" className="mt-2 text-[0.95rem] leading-[1.7] text-fg-muted">{t}</dd>
                      ))}
                    </div>
                  ))}
                </dl>
              </div>
            </div>
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
