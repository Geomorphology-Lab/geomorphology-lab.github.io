const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Renders a mailto link for a real address, or the text as-is (e.g. temporary wording). */
export function EmailText({ value, className = '' }: { value: string; className?: string }) {
  if (EMAIL.test(value.trim())) {
    return (
      <a href={`mailto:${value.trim()}`} className={`select-text break-all underline-offset-4 hover:text-accent hover:underline ${className}`}>
        {value.trim()}
      </a>
    )
  }
  return <span lang="ko" className={`select-text ${className}`}>{value}</span>
}
