import type { ResponsivePhoto } from './types'

/**
 * Header photographs for inner pages. Files live in public/images/headers/
 * and are created with: python3 scripts/optimize-photo.py <photo> public/images/headers <name>
 * Adjust `position` if an important feature is cropped on mobile or desktop.
 */
const set = (name: string, widths: number[]) =>
  widths.map((width) => ({ width, src: `/images/headers/${name}-${width}.webp` }))

export const headerPhotos = {
  research: {
    alt: '',
    files: set('research-glacier', [960, 1600]),
    aspect: 1600 / 1200,
    position: { mobile: '55% 78%', desktop: '50% 80%' },
  },
  members: {
    alt: '',
    files: set('members-river-delta', [960, 1600, 2560]),
    aspect: 2560 / 1707,
    position: { mobile: '62% 45%', desktop: '50% 46%' },
  },
  publications: {
    alt: '',
    files: set('publications-arizona-desert', [960, 1600, 2560]),
    aspect: 2560 / 887,
    position: { mobile: '76% 50%', desktop: '50% 45%' },
  },
  news: {
    alt: '',
    files: set('news-volcanic-eruption', [960, 1600, 2560]),
    aspect: 1,
    position: { mobile: '45% 62%', desktop: '50% 64%' },
    overlay: 'light',
  },
  contact: {
    alt: '',
    files: set('contact-urban-mountains', [960, 1600, 2560]),
    aspect: 2560 / 1318,
    position: { mobile: '46% 45%', desktop: '50% 42%' },
  },
} satisfies Record<string, ResponsivePhoto>

export const photoSrc = (p: ResponsivePhoto) => (p.files.find((f) => f.width === 1600) ?? p.files[p.files.length - 1]).src
export const photoSrcSet = (p: ResponsivePhoto) => p.files.map((f) => `${f.src} ${f.width}w`).join(', ')
