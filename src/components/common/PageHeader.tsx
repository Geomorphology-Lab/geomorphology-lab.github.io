import { heroImage } from '../../content/images'
import { photoSrc, photoSrcSet } from '../../content/pageImages'
import type { ResponsivePhoto } from '../../content/types'

interface Props {
  eyebrow: string
  title: string
  lead?: string
  /** Page-specific photograph; falls back to the shared landscape */
  photo?: ResponsivePhoto
  /**
   * Filter tabs (a `.page-tabs` group of `.page-tab` buttons). They sit on the bottom edge of the hero,
   * and the active tab is white, so it continues into the white content below.
   */
  tabs?: React.ReactNode
}

/**
 * Top band for inner pages: a landscape photograph, cropped and darkened. It ends in a band of
 * pure navy, then the light content area starts with a hard edge (no shadow, line or second gradient).
 */
export function PageHeader({ eyebrow, title, lead, photo, tabs }: Props) {
  // Real photographs get a lighter overlay than the dark fallback image so the landforms stay recognisable.
  const level = !photo ? 'fallback' : photo.overlay === 'light' ? 'light' : 'photo'
  // Header height is about clamp(24rem, 48vh, 31rem); a cover-cropped wide photo can render wider than the viewport.
  const sizes = photo ? `max(100vw, ${Math.ceil(50 * photo.aspect)}vh)` : '100vw'
  return (
    <header
      className={`relative isolate flex min-h-[clamp(24rem,48vh,31rem)] items-end overflow-hidden bg-ink-900 pt-28 ${
        tabs ? 'pb-0' : 'pb-16 md:pb-24'
      }`}
    >
      <img
        src={photo ? photoSrc(photo) : heroImage.src}
        srcSet={photo ? photoSrcSet(photo) : heroImage.srcSet}
        sizes={sizes}
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchPriority="high"
        className={`page-header-img absolute inset-0 -z-20 size-full object-cover ${level === 'fallback' ? 'opacity-70' : level === 'photo' ? 'opacity-85' : 'opacity-95'}`}
        style={
          {
            '--pos-mobile': photo?.position.mobile ?? heroImage.position,
            '--pos-desktop': photo?.position.desktop ?? heroImage.position,
          } as React.CSSProperties
        }
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
      {/* Left-to-right shade keeps the title legible; the bottom-up fade (last, so it paints on top) ends in solid navy */}
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-r to-transparent ${
          level === 'light' ? 'from-ink-900/70 via-ink-900/10' : level === 'photo' ? 'from-ink-900/75 via-ink-900/20' : 'from-ink-900/80 via-ink-900/30'
        }`}
      />
      <div className="page-header-fade absolute inset-0 -z-10" data-level={level} />
      <div className="container-page animate-rise">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="text-[clamp(2.5rem,1.6rem+4vw,4.75rem)] font-semibold tracking-[-0.035em] text-fg">{title}</h1>
        {lead && (
          <p lang="ko" className="mt-6 max-w-2xl text-[clamp(1.05rem,0.98rem+0.35vw,1.25rem)] leading-relaxed text-fg-muted">
            {lead}
          </p>
        )}
        {tabs && <div className="mt-10 md:mt-12">{tabs}</div>}
      </div>
    </header>
  )
}
