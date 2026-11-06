/**
 * Hero photograph. To replace it, overwrite the three files in
 * src/assets/images/hero/ (same file names) with a landscape photograph
 * exported at 2560px, 1600px and 960px wide — no code changes needed.
 * Update `site.hero.imageAlt` in site.ts to describe the new photo.
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
