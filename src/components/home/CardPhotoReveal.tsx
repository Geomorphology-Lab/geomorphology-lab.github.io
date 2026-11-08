import type { CardPhoto } from '../../content/types'

// 1×1 transparent GIF: what touch devices (no hover) get instead of the real photograph
const BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

/**
 * Photograph revealed behind a Research Areas card. It is invisible until the card (the parent
 * `group`) is hovered or keyboard-focused, then fades in under a black overlay while settling from
 * a slight zoom. Pure CSS: no state or event listeners. Must be placed inside an `isolate`d,
 * `group` card so the layers sit behind the card's text and above its background.
 *
 * Devices without hover (touch) never download the photograph: the <picture> source only applies
 * when the primary input can hover.
 */
export function CardPhotoReveal({ photo }: { photo: CardPhoto }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-0 transition-opacity duration-[750ms] ease-out-soft group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
    >
      <picture>
        <source media="(hover: hover)" srcSet={photo.srcSet} sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" />
        <img
          src={BLANK}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full scale-[1.04] object-cover transition-transform duration-[750ms] ease-out-soft group-hover:scale-100 group-focus-visible:scale-100 motion-reduce:scale-100 motion-reduce:transition-none"
          style={{ objectPosition: photo.position }}
        />
      </picture>
      {/* Black veil keeps the palette and the text contrast consistent across photos of different brightness */}
      <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.78)_45%,rgba(0,0,0,0.9)_100%)]" />
    </span>
  )
}
