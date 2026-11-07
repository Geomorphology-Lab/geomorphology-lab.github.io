import { site } from '../../content/site'

/**
 * Full-width atmospheric image (braided river). It stays in the same place on the
 * homepage as the background of the lower section: it starts at the section's top
 * edge and dissolves into the background toward its bottom.
 */
export function AboutVisual() {
  const { image } = site.homeAbout
  return (
    <div className="about-visual relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9] lg:max-h-[36rem]">
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes="100vw"
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="about-visual-img absolute inset-0 size-full object-cover"
        style={{ '--pos-mobile': image.position.mobile, '--pos-desktop': image.position.desktop } as React.CSSProperties}
      />
      {/* Gentle tone-down so the bright photo sits inside the dark palette */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink-900/25" />
    </div>
  )
}
