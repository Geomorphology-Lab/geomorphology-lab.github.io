import type { ImageRef } from '../../content/types'

interface Props {
  image?: ImageRef
  /** Tailwind aspect class, e.g. 'aspect-[4/3]' */
  aspect?: string
  variant?: 'landscape' | 'portrait'
  className?: string
  /** Set for above-the-fold images */
  eager?: boolean
}

/**
 * Displays an image, or — when no photograph has been supplied yet — a calm
 * topographic-contour surface of identical size, so layouts look final.
 */
export function MediaFrame({ image, aspect = 'aspect-[4/3]', variant = 'landscape', className = '', eager }: Props) {
  const frame = `relative overflow-hidden bg-ink-700 ${aspect} ${className}`
  if (image?.src) {
    return (
      <div className={frame}>
        <img
          src={image.src}
          alt={image.alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
        />
      </div>
    )
  }
  return (
    <div className={`${frame} topo-pattern`} role="img" aria-label={image?.alt ?? ''}>
      {variant === 'portrait' && (
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-x-0 bottom-0 mx-auto h-[78%] w-auto text-fg/[0.13]"
          aria-hidden="true"
        >
          <circle cx="50" cy="38" r="17" fill="currentColor" />
          <path d="M14 100c3-22 18-34 36-34s33 12 36 34Z" fill="currentColor" />
        </svg>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
    </div>
  )
}
