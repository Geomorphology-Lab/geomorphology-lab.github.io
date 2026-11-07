import { useId, useState } from 'react'
import type { Alumnus } from '../../content/types'

/**
 * Alumni entries inside a disclosure: collapsed by default, opened with a discreet text button.
 * The entries stay in the DOM (hidden) so the structure is unchanged once real alumni are added.
 */
export function AlumniList({ alumni }: { alumni: Alumnus[] }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
      >
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className={`size-3.5 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 3l5 5-5 5" />
        </svg>
        <span className="border-b border-line-strong pb-0.5 transition-colors group-hover:border-accent">
          {open ? 'Hide alumni entries' : 'Show alumni entries'}
        </span>
      </button>
      <div id={panelId} hidden={!open} className="mt-6">
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
      </div>
    </div>
  )
}
