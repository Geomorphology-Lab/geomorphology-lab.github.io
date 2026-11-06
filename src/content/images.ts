/**
 * Image for the inner-page header band (PageHeader) and the homepage About section.
 * The homepage hero slideshow is configured separately in heroSlides.ts.
 * To replace: overwrite the three files in src/assets/images/hero/ (same names).
 *
 */
import hero2560 from '../assets/images/hero/hero-2560.jpg'
import hero1600 from '../assets/images/hero/hero-1600.jpg'
import hero960 from '../assets/images/hero/hero-960.jpg'

export const heroImage = {
  src: hero1600,
  srcSet: `${hero960} 960w, ${hero1600} 1600w, ${hero2560} 2560w`,
  /** CSS object-position: which part of the photo stays visible when cropped (mobile). */
  position: '68% 50%',
}
