import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'

interface Props {
  to: string
  children: React.ReactNode
  className?: string
}

/** Understated text link with a sliding arrow, used for "view all" actions. */
export function ArrowLink({ to, children, className = '' }: Props) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-fg transition-colors hover:text-accent ${className}`}
    >
      <span className="border-b border-line-strong pb-0.5 transition-colors group-hover:border-accent">{children}</span>
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}
