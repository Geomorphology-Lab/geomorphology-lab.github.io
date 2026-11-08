import { site } from '../../content/site'

/**
 * Full-width atmospheric image (the placeholder landscape, toned black-and-white with a navy cast; see
 * scripts/tone-about-image.py). It sits at the top of the Research Areas section: it starts at the section's top
 * edge, joins the dark About section above, and dissolves into the white section toward its bottom.
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
    </div>
  )
}
