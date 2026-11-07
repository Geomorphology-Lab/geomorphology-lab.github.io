/**
 * Homepage hero slideshow — all settings in one place.
 *
 * Images live in public/images/hero/ and are generated from the original
 * photographs by scripts/optimize-hero-photos.py (WebP, sRGB, 960/1600/2560 px).
 * To swap a photo: export new WebP files with the same names, or change the
 * `files` entries below to the new file names. Order here = order on screen.
 */

/** A transition starts every … ms (measured from the start of the previous one). */
export const SLIDE_INTERVAL_MS = 3000
/** Duration of the opacity cross-dissolve. */
export const CROSSFADE_DURATION_MS = 1100
/** Largest Ken Burns scale used by any slide. */
export const KEN_BURNS_MAX_SCALE = 1.035
/** Each slide is visible from the start of its fade-in until the next slide fully covers it. */
export const KEN_BURNS_DURATION_MS = SLIDE_INTERVAL_MS + CROSSFADE_DURATION_MS

export interface HeroSlide {
  id: string
  /** Screen-reader description of the photograph */
  alt: string
  /** Files in /public/images/hero, keyed by pixel width */
  files: { width: number; file: string }[]
  /** CSS object-position — which part of the photo stays visible when cropped */
  position: { mobile: string; desktop: string }
  /** Ken Burns motion: scale and horizontal drift at the start and end of the slide */
  motion: { fromScale: number; toScale: number; fromX?: string; toX?: string }
}

const dir = '/images/hero/'

export const heroSlides: HeroSlide[] = [
  {
    id: 'mountain-ridges',
    alt: '구름바다 위로 이어지는 숲으로 덮인 산악 능선',
    files: [
      { width: 960, file: 'mountain-ridges-sea-of-clouds-960.webp' },
      { width: 1600, file: 'mountain-ridges-sea-of-clouds-1600.webp' },
      { width: 2560, file: 'mountain-ridges-sea-of-clouds-2560.webp' },
    ],
    position: { mobile: '42% 50%', desktop: '50% 50%' },
    motion: { fromScale: 1, toScale: KEN_BURNS_MAX_SCALE }, // gentle zoom in
  },
  {
    id: 'glacial-valley',
    alt: '높은 산봉우리 사이로 깊게 파인 빙식곡과 산악 지형',
    files: [
      { width: 960, file: 'glacial-valley-960.webp' },
      { width: 1600, file: 'glacial-valley-1600.webp' },
      { width: 2560, file: 'glacial-valley-2560.webp' },
    ],
    position: { mobile: '50% 50%', desktop: '50% 45%' },
    motion: { fromScale: KEN_BURNS_MAX_SCALE, toScale: 1 }, // gentle zoom out
  },
  {
    id: 'river-canyon',
    alt: '석회암 절벽 협곡 사이를 흐르는 청록색 하천',
    files: [
      // The original photograph is 1372 px wide, so no larger size exists.
      { width: 960, file: 'river-canyon-960.webp' },
      { width: 1372, file: 'river-canyon-1372.webp' },
    ],
    position: { mobile: '52% 50%', desktop: '50% 50%' },
    motion: { fromScale: 1.01, toScale: 1.016, fromX: '0%', toX: '-0.4%' }, // almost stationary
  },
]

export const slideSrc = (s: HeroSlide) => dir + s.files[s.files.length > 1 ? 1 : 0].file
export const slideSrcSet = (s: HeroSlide) => s.files.map((f) => `${dir}${f.file} ${f.width}w`).join(', ')
