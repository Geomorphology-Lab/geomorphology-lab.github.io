import type { Publication } from '../../content/types'
import { ArrowUpRight } from '../common/Icons'

/** "Venue, Volume(Issue), Pages" — only the parts that exist */
function citation(p: Publication) {
  let s = p.venue
  if (p.volume) s += `, ${p.volume}`
  if (p.issue) s += p.volume ? `(${p.issue})` : `, (${p.issue})`
  if (p.pages) s += `, ${p.pages}`
  return s
}

/** One publication entry. Real and temporary entries share exactly the same layout. */
export function PublicationItem({ publication: p }: { publication: Publication }) {
  const href = p.doi ? `https://doi.org/${p.doi}` : p.url
  return (
    <article className="flex items-start gap-6 py-7 md:py-8">
      <div className="min-w-0 flex-1">
        <h3 lang="ko" className="text-[1.075rem] leading-snug font-semibold text-fg md:text-lg">{p.title}</h3>
        <p lang="ko" className="mt-2.5 text-[0.95rem] leading-relaxed text-fg-muted">{p.authors.join(', ')}</p>
        <p lang="ko" className="mt-1 text-[0.95rem] leading-relaxed text-fg-muted">
          <span className="text-fg/90">{citation(p)}</span>
          {p.doi && (
            <>
              <span aria-hidden="true"> · </span>
              <a href={`https://doi.org/${p.doi}`} className="break-all text-fg-subtle hover:text-accent hover:underline">
                DOI: {p.doi}
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
