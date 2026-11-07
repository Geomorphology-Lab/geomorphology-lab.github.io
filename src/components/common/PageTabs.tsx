interface Props<T extends string | number> {
  /** Accessible name of the group, e.g. "Filter publications by year" */
  label: string
  options: { id: T; label: string }[]
  value: T
  onChange: (id: T) => void
}

/**
 * Tab ribbon for the bottom edge of `PageHeader` (pass it as the `tabs` prop).
 * The active tab is white, so it continues into the white content below.
 */
export function PageTabs<T extends string | number>({ label, options, value, onChange }: Props<T>) {
  return (
    <div role="group" aria-label={label} className="page-tabs">
      {options.map((o) => (
        <button key={o.id} type="button" aria-pressed={value === o.id} onClick={() => onChange(o.id)} className="page-tab">
          {o.label}
        </button>
      ))}
    </div>
  )
}
