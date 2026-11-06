interface Props {
  eyebrow?: string
  title: string
  description?: string
  action?: React.ReactNode
  id?: string
  as?: 'h1' | 'h2'
}

export function SectionHeading({ eyebrow, title, description, action, id, as: Tag = 'h2' }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <Tag id={id} className="text-[clamp(1.75rem,1.3rem+1.8vw,2.75rem)] font-semibold text-fg">
          {title}
        </Tag>
        {description && (
          <p lang="ko" className="prose-body mt-5 max-w-2xl">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
