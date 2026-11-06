import type { Person } from '../../content/types'
import { EmailText } from '../common/EmailText'
import { MailIcon } from '../common/Icons'
import { MediaFrame } from '../common/MediaFrame'

export function MemberCard({ person }: { person: Person }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-ink-800/60 transition-colors duration-500 hover:border-line-strong">
      <MediaFrame image={person.photo} aspect="aspect-[4/3] xs:aspect-[4/5]" variant="portrait" />
      <div className="flex flex-1 flex-col p-6">
        <h3 lang="ko" className="text-lg font-semibold text-fg">{person.name}</h3>
        <p lang="ko" className="mt-1.5 text-sm leading-relaxed text-accent">{person.position}</p>
        <p lang="ko" className="mt-4 text-[0.95rem] leading-[1.7] text-fg-muted">{person.researchInterests}</p>
        {person.email && (
          <p className="mt-auto flex items-start gap-2.5 border-t border-line pt-4 text-sm text-fg-muted [&:not(:first-child)]:mt-6">
            <MailIcon className="mt-0.5 size-4 shrink-0 text-fg-subtle" />
            <EmailText value={person.email} />
          </p>
        )}
      </div>
    </article>
  )
}
