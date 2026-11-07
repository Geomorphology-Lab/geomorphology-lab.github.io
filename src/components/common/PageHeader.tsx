import { heroImage } from '../../content/images'
import { photoSrc, photoSrcSet } from '../../content/pageImages'
import type { ResponsivePhoto } from '../../content/types'

interface Props {
  eyebrow: string
  title: string
  lead?: string
  /** Page-specific photograph; falls back to the shared landscape */
  photo?: ResponsivePhoto
  /** 'light': the photo fades into a white page (use inside `.light-page`) */
  tone?: 'dark' | 'light'
}

/** Top band for inner pages: a landscape photograph, cropped and darkened. */
export function PageHeader({ eyebrow, title, lead, photo, tone = 'dark' }: Props) {
  // Real photographs get a lighter overlay than the dark fallback image so the landforms stay recognisable.
  const level = tone === 'light' ? 'white' : !photo ? 'fallback' : photo.overlay === 'light' ? 'light' : 'photo'
  // Header height is about min(62vh, 34rem); a cover-cropped wide photo can render wider than the viewport.
  const sizes = photo ? `max(100vw, ${Math.ceil(62 * photo.aspect)}vh)` : '100vw'
  return (
    <header className="relative isolate flex min-h-[min(62vh,34rem)] items-end overflow-hidden bg-ink-900 pt-28 pb-14 md:pb-20">
      <img
        src={photo ? photoSrc(photo) : heroImage.src}
        srcSet={photo ? photoSrcSet(photo) : heroImage.srcSet}
        sizes={sizes}
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchPriority="high"
        className={`page-header-img absolute inset-0 -z-20 size-full object-cover ${level === 'fallback' ? 'opacity-70' : level === 'photo' ? 'opacity-85' : level === 'white' ? 'opacity-100' : 'opacity-95'}`}
        style={
          {
            '--pos-mobile': photo?.position.mobile ?? heroImage.position,
            '--pos-desktop': photo?.position.desktop ?? heroImage.position,
          } as React.CSSProperties
        }
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
      {level === 'white' ? (
        <>
          {/* photo on top, melting into white towards the title; a soft white wash from the left keeps the title crisp */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_22%,rgba(255,255,255,0.55)_52%,rgba(255,255,255,0.92)_78%,#fff_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.18)_45%,transparent_75%)]" />
        </>
      ) : level === 'light' ? (
        <>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-ink-900/35 to-ink-900/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900/70 via-ink-900/10 to-transparent" />
        </>
      ) : level === 'photo' ? (
        <>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-ink-900/50 to-ink-900/35" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900/75 via-ink-900/20 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-ink-900/75 to-ink-900/40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900/80 via-ink-900/30 to-transparent" />
        </>
      )}
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
