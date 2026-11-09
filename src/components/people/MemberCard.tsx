import type { Person } from '../../content/types'
import { EmailText } from '../common/EmailText'
import { MailIcon } from '../common/Icons'
import { MediaFrame } from '../common/MediaFrame'
import { useLang } from '../../lang'

const isKorean = (s: string) => /[가-힣]/.test(s)

/**
 * Horizontal member card: photo on the left, details on the right.
 * Below ~384 px (very narrow phones) the photo stacks above the details.
 * The photo is always a 4:5 box, narrower than the PI portrait.
 */
export function MemberCard({ person: base }: { person: Person }) {
  // Korean mode: name, position and affiliation switch when a Korean version exists (everything else stays)
  const { lang } = useLang()
  const person = lang === 'ko' && base.ko ? { ...base, ...base.ko } : base
  return (
    <article className="group flex h-full flex-col gap-5 border border-line p-5 transition-colors duration-500 hover:border-line-strong min-[24rem]:flex-row min-[24rem]:gap-6 md:p-6">
      <div className="w-[7.5rem] shrink-0 sm:w-36 xl:w-[10.5rem]">
        <MediaFrame image={person.photo} aspect="aspect-[4/5]" variant="portrait" className="w-full" still />
      </div>
      <div className="flex min-w-0 flex-1 flex-col [overflow-wrap:anywhere]">
        <h3 lang={isKorean(person.name) ? 'ko' : 'en'} className="lang-swap text-lg leading-snug font-semibold text-fg md:text-xl">{person.name}</h3>
        <p lang={isKorean(person.position) ? 'ko' : 'en'} className="lang-swap mt-1.5 text-sm leading-relaxed text-accent md:text-[0.9375rem]">{person.position}</p>
        {person.affiliation && (
          <p lang={isKorean(person.affiliation) ? 'ko' : 'en'} className="lang-swap mt-1 text-sm leading-relaxed text-fg-muted">{person.affiliation}</p>
        )}
        {person.researchInterests && (
          <div className="mt-4">
            <p className="eyebrow mb-1.5 text-[0.6875rem] tracking-[0.14em] text-fg-subtle">Research Interests</p>
            <p lang={isKorean(person.researchInterests) ? 'ko' : 'en'} className="text-[0.95rem] leading-[1.7] text-fg-muted">{person.researchInterests}</p>
          </div>
        )}
        {person.email && (
          <div className="mt-auto border-t border-line pt-4 [&:not(:first-child)]:mt-5">
            <p className="eyebrow mb-1.5 text-[0.6875rem] tracking-[0.14em] text-fg-subtle">Email</p>
            <p className="flex items-start gap-2.5 text-sm text-fg-muted">
              <MailIcon className="mt-0.5 size-4 shrink-0 text-fg-subtle" />
              <EmailText value={person.email} />
            </p>
          </div>
        )}
      </div>
    </article>
  )
}
