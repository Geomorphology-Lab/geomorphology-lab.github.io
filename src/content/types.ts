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
  /** Optional responsive sources, e.g. '/images/a-960.webp 960w, /images/a-1600.webp 1600w' */
  srcSet?: string
  /** CSS object-position to keep the important part visible when cropped (default: centre) */
  position?: string
  /** 'contain' shows the whole photograph without cropping (default: 'cover') */
  fit?: 'cover' | 'contain'
  /** Very wide photographs: show them across the full content width below the text instead of in the narrow side column */
  wide?: boolean
}

export interface NavItem {
  label: string
  path: string
  /** Drop-down links shown under the item on hover / keyboard focus (and in the mobile menu) */
  children?: { label: string; path: string }[]
}

/** A line of text with optional bold parts: plain strings and { bold } pieces are joined in order */
export type RichText = (string | { bold: string })[]

export interface ProspectiveSection {
  heading: string
  items: RichText[]
  /** Shown in a tinted box instead of a plain list */
  boxed?: boolean
}

export interface ProspectiveInfo {
  /** Heading of the box */
  title: string
  sections: ProspectiveSection[]
}

export interface RelatedProject {
  title: string
  /** Funding or role line shown under the title, e.g. 'NRF Early Career Research Program · PI · 2026–2029' */
  detail?: string
}

/** Decorative photograph revealed behind a Research Areas card on hover (hidden from assistive technology) */
export interface CardPhoto {
  src: string
  /** Responsive sources, e.g. '/images/a-600.webp 600w, /images/a-1000.webp 1000w' */
  srcSet: string
  /** CSS object-position: which part of the photo stays visible in the card crop */
  position: string
}

export interface ResearchArea {
  /** URL anchor, e.g. 'area-1' → /research#area-1 */
  id: string
  title: string
  /** Short name for the tab on the Research page (falls back to `title`) */
  tabLabel?: string
  /** Short English label shown above the title (optional; not shown when omitted) */
  label?: string
  /** Short summary used on the Home cards */
  summary: string
  /** The guiding research question, shown prominently on the Research page */
  question?: string
  /** One or more paragraphs: background and methods, then achievements and future directions */
  description: string[]
  image?: ImageRef
  /** Photo shown behind the Home card on hover (optional) */
  cardPhoto?: CardPhoto
  relatedProjects: RelatedProject[]
  /** Short citation lines such as 'Jeong et al. (2026), Earth-Sci. Rev.' */
  relatedPublications: string[]
}

export interface Person {
  name: string
  position: string
  /** Optional: when missing, the card simply omits the section (no placeholder text is shown) */
  researchInterests?: string
  /** Only publish emails that the person has approved. Shown as a mailto link when it is a valid address. */
  email?: string
  photo?: ImageRef
  /** Optional line shown between the position and the research interests (e.g. department) */
  affiliation?: string
}

/** One degree: shown as "Degree · Years" with the institution on the next line */
export interface EducationEntry {
  degree: string
  years: string
  institution: string
}

export interface PrincipalInvestigator extends Omit<Person, 'position' | 'researchInterests'> {
  researchInterests: string
  affiliation: string
  /** Google Scholar profile URL (shows a button under the email) */
  scholarUrl?: string
  /** Curriculum vitae PDF in /public (shows a "Download CV" button) */
  cvUrl?: string
  /** Optional short biography paragraphs (not shown when empty) */
  biography?: string[]
  education: EducationEntry[]
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
  /** Book editors, e.g. 'R. Schaetzl & R. Marston' (chapters only; shown as "(Eds.)") */
  editors?: string
  /** Chapter number or label, e.g. '10' (chapters only) */
  chapter?: string
  /** Full publication date as supplied, e.g. 'November 12, 2025' (kept for reference; not shown) */
  date?: string
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
  /** Brightness multiplier applied to the photo (1 = unchanged); e.g. 0.7 tones down a very bright photo */
  dim?: number
}
