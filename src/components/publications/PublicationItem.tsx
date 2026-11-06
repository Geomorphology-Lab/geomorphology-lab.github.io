import type { Publication } from '../../content/types'
import { ArrowUpRight } from '../common/Icons'

interface Props {
  publication: Publication
  category?: string
}

/** One publication row. Real and temporary entries share exactly the same layout. */
export function PublicationItem({ publication: p, category }: Props) {
  const href = p.doi ? `https://doi.org/${p.doi}` : p.url
  return (
    <article className="grid gap-x-10 gap-y-3 py-7 md:grid-cols-[7rem_1fr_auto] md:py-8">
      <div className="flex items-baseline gap-3 md:flex-col md:gap-1.5">
        <span lang="ko" className="font-display text-base font-semibold tabular-nums text-accent">{p.year}</span>
        {category && <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-fg-subtle">{category}</span>}
      </div>
      <div className="min-w-0">
        <h3 lang="ko" className="text-[1.075rem] leading-snug font-semibold text-fg md:text-lg">{p.title}</h3>
        <p lang="ko" className="mt-2.5 text-[0.95rem] leading-relaxed text-fg-muted">{p.authors}</p>
        <p lang="ko" className="mt-1 text-[0.95rem] leading-relaxed text-fg-muted">
          <span className="text-fg/90">{p.venue}</span>
          {p.details && <span>, {p.details}</span>}
        </p>
        {p.doi && (
          <p className="mt-2 text-sm break-all text-fg-subtle">
            DOI: <a href={`https://doi.org/${p.doi}`} className="hover:text-accent hover:underline">{p.doi}</a>
          </p>
        )}
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex size-11 items-center justify-center self-start border border-line text-fg-muted transition-colors hover:border-accent hover:text-accent"
          aria-label={`Open “${p.title}” (opens in a new tab)`}
        >
          <ArrowUpRight className="size-4" />
        </a>
      )}
    </article>
  )
}
