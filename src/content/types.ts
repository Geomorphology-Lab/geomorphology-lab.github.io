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
  biography: string[]
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
  authors: string
  year: string
  title: string
  /** Journal name, conference name, or publisher */
  venue: string
  /** Volume / issue / pages, presentation type, etc. */
  details?: string
  /** DOI without the https://doi.org/ prefix, e.g. '10.1016/j.geomorph.2024.109000' */
  doi?: string
  /** External link when no DOI exists */
  url?: string
  /** Mark to feature on the homepage */
  featured?: boolean
}

export interface PublicationCategory {
  id: string
  title: string
  description: string
  items: Publication[]
}

export type NewsCategory = 'Announcement' | 'Fieldwork' | 'Conference' | 'Award' | 'Research'

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
