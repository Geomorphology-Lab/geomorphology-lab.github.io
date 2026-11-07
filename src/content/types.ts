/**
 * Shared content types. Editing content never requires touching components:
 * change the data files in this folder instead.
 */

/** An image shown on the site. Leave `src` undefined to show the neutral topographic visual. */
export interface ImageRef {
  /** Imported image module or a path under /public, e.g. '/images/field-2025.jpg' */
  src?: string
  /** Meaningful description for screen readers (required when `src` is set) */
  alt: string
}

export interface NavItem {
  label: string
  path: string
}

export interface ResearchArea {
  /** URL anchor, e.g. 'area-1' → /research#area-1 */
  id: string
  title: string
  /** Short English label shown above the title (optional) */
  label?: string
  summary: string
  /** One or more paragraphs */
  description: string[]
  image?: ImageRef
  relatedProjects: string[]
  relatedPublications: string[]
}

export interface Person {
  name: string
  position: string
  researchInterests: string
  /** Only publish emails that the person has approved. Shown as a mailto link when it is a valid address. */
  email?: string
  photo?: ImageRef
}

export interface PrincipalInvestigator extends Omit<Person, 'position'> {
  affiliation: string
  /** Google Scholar profile URL (shows a button under the email) */
  scholarUrl?: string
  /** Optional short biography paragraphs (not shown when empty) */
  biography?: string[]
  education: string[]
  career: string[]
}

export interface Alumnus {
  name: string
  degree: string
  year: string
  currentPosition: string
}

export interface Publication {
  /** Unique, stable key, e.g. 'jeong-2025-esr' */
  id: string
  /** Publication year. Leave undefined only for a record whose year is not yet known. */
  year?: number
  title: string
  authors: string[]
  /** Journal name, conference name, or (for a chapter) the book title */
  venue: string
  /** Publisher, shown for book chapters */
  publisher?: string
  volume?: string
  issue?: string
  pages?: string
  /** DOI without the https://doi.org/ prefix, e.g. '10.1016/j.earscirev.2025.105000' */
  doi?: string
  /** External link when no DOI exists */
  url?: string
  /** Kept for future use (e.g. 'journal', 'conference'); not shown on the page */
  type?: string
}

export type NewsCategory = 'Fieldwork' | 'Conference' | 'Award' | 'Research'

export interface NewsItem {
  id: string
  category: NewsCategory
  /** Displayed as written, e.g. '2026.03.15' */
  date: string
  title: string
  summary: string
  image?: ImageRef
  link?: string
}

/** A responsive photograph available at several widths under /public */
export interface ResponsivePhoto {
  alt: string
  /** Files keyed by pixel width; paths start with /images/ */
  files: { width: number; src: string }[]
  /** Pixel size of the largest file (used to pick the right size when cropped) */
  aspect: number
  /** CSS object-position for mobile and for tablet/desktop */
  position: { mobile: string; desktop: string }
  /** 'light' keeps more of a bright focal point (e.g. lava) visible under the overlay */
  overlay?: 'default' | 'light'
}
