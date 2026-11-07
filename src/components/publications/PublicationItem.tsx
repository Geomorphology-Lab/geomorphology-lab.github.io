import type { Publication } from '../../content/types'
import { ArrowUpRight } from '../common/Icons'

/** "A, B, & C" — the author order is exactly the order in the data */
function formatAuthors(authors: string[]) {
  if (authors.length <= 1) return authors.join('')
  return `${authors.slice(0, -1).join(', ')}, & ${authors[authors.length - 1]}`
}

/** Journal: "Venue, Volume(Issue), Pages". Chapter: "In Book (pp. Pages). Publisher." Only existing parts are shown. */
function citation(p: Publication) {
  if (p.type === 'chapter') {
    // "In R. Schaetzl & R. Marston (Eds.), Book Title (Chapter 10, pp. 182–211). Publisher."
    const who = p.editors ? `${p.editors} (Eds.), ` : ''
    const where = [p.chapter ? `Chapter ${p.chapter}` : '', p.pages ? `pp. ${p.pages}` : ''].filter(Boolean).join(', ')
    return `In ${who}${p.venue}${where ? ` (${where})` : ''}${p.publisher ? `. ${p.publisher}` : ''}.`
  }
  let s = p.venue
  if (p.volume) s += `, ${p.volume}`
  if (p.issue) s += p.volume ? `(${p.issue})` : `, (${p.issue})`
  if (p.pages) s += `, ${p.pages}`
  return s
}

/** Sets cosmogenic isotope names (10Be, 9Be) with a superscript mass number; the stored title stays plain text. */
function Title({ text }: { text: string }) {
  const parts = text.split(/(?<![\d.])(10|9)(?=Be\b)/)
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <sup key={i}>{part}</sup> : part))}
    </>
  )
}

/** One publication entry. Real and temporary entries share exactly the same layout. */
export function PublicationItem({ publication: p }: { publication: Publication }) {
  const href = p.doi ? `https://doi.org/${p.doi}` : p.url
  const lang = /[가-힣]/.test(p.title) ? 'ko' : 'en'
  return (
    <article className="flex items-start gap-6 py-7 md:py-8">
      <div className="min-w-0 flex-1">
        <h3 lang={lang} className="text-[1.075rem] leading-snug font-semibold text-fg md:text-lg">
          <Title text={p.title} />
        </h3>
        <p lang={lang} className="mt-2.5 text-[0.95rem] leading-relaxed text-fg-muted">{formatAuthors(p.authors)}</p>
        <p lang={lang} className="mt-1 text-[0.95rem] leading-relaxed text-fg-muted">
          <span className="text-fg/90">{citation(p)}</span>
          {p.doi && (
            <>
              <span aria-hidden="true"> · </span>
              <a href={`https://doi.org/${p.doi}`} className="text-fg-subtle hover:text-accent hover:underline">
                <span className="whitespace-nowrap">DOI:</span> <span className="[overflow-wrap:anywhere]">{p.doi}</span>
              </a>
            </>
          )}
        </p>
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex size-11 shrink-0 items-center justify-center border border-line text-fg-muted transition-colors hover:border-accent hover:text-accent"
          aria-label={`Open “${p.title}” (opens in a new tab)`}
        >
          <ArrowUpRight className="size-4" />
        </a>
      )}
    </article>
  )
}
