import { heroImage } from '../../content/images'

interface Props {
  eyebrow: string
  title: string
  lead?: string
}

/** Top band for inner pages: the hero landscape, cropped and darkened. */
export function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <header className="relative isolate flex min-h-[min(62vh,34rem)] items-end overflow-hidden bg-ink-900 pt-28 pb-14 md:pb-20">
      <img
        src={heroImage.src}
        srcSet={heroImage.srcSet}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover opacity-70"
        style={{ objectPosition: heroImage.position }}
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-ink-900/75 to-ink-900/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900/80 via-ink-900/30 to-transparent" />
      <div className="container-page animate-rise">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="text-[clamp(2.5rem,1.6rem+4vw,4.75rem)] font-semibold tracking-[-0.035em] text-fg">{title}</h1>
        {lead && (
          <p lang="ko" className="mt-6 max-w-2xl text-[clamp(1.05rem,0.98rem+0.35vw,1.25rem)] leading-relaxed text-fg-muted">
            {lead}
          </p>
        )}
      </div>
    </header>
  )
}
