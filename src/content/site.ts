import type { NavItem } from './types'
import { researchAreas } from './research'

/**
 * Site-wide information. Text marked "이곳에는 …" is temporary and should be
 * replaced with verified information supplied by the laboratory.
 */
export const site = {
  name: 'Geomorphology Lab',
  institution: 'Kyung Hee University',
  institutionKo: '경희대학교',
  domain: 'geomorphology.khu.ac.kr',

  hero: {
    eyebrow: 'Kyung Hee University',
    title: 'Geomorphology Lab',
    description:
      'Exploring the processes that shape Earth’s surface and transform landscapes.',
    /** Scrolls to the About section further down the homepage */
    primaryAction: { label: 'About the Lab', href: '#about' },
    secondaryAction: { label: 'Explore Research', path: '/research' },
  },

  homeAbout: {
    heading: 'Studying the processes that shape the Earth’s surface',
    paragraphs: [
      'The Geomorphology Lab at Kyung Hee University investigates how landscapes form and change, and the mechanisms that turn surface processes into natural hazards. We reconstruct the evolution of landscapes across Quaternary glacial–interglacial cycles, quantify how rock coasts erode and collapse, and examine how agriculture, urbanization, wildfire, and climate change accelerate erosion today. Our study sites range from the rocky coasts and mountain slopes of the Korean Peninsula to the glaciated valleys of Wyoming and the arid landscapes of Arizona. Through national research programs, peer-reviewed publications, and international conferences, we aim to provide a scientific basis for understanding and responding to environmental change.',
      'Our research begins in the field and is completed with numbers. We pair detailed field surveys with high-resolution 3D mapping from UAV-SfM and LiDAR, cosmogenic radionuclide (CRN) dating, and numerical modeling such as finite element analysis (FEA). By integrating these approaches, we connect what a landscape looks like today with how fast it has changed in the past and how it is likely to respond in the future.',
    ],
  },

}

export const navigation: NavItem[] = [
  {
    label: 'Research',
    path: '/research',
    // the four research areas (titles come from research.ts, so they always stay in sync)
    children: researchAreas.map((a) => ({ label: a.title, path: `/research#${a.id}` })),
  },
  {
    label: 'Members',
    path: '/members',
    children: [
      // the Members page shows one group at a time; the address after # chooses the tab (see MembersPage)
      { label: 'Professor', path: '/members#professor' },
      { label: 'Students', path: '/members#students' },
      { label: 'Alumni', path: '/members#alumni' },
    ],
  },
  { label: 'Publications', path: '/publications' },
  { label: 'News & Gallery', path: '/news' },
  { label: 'Contact', path: '/contact' },
]

export const contact = {
  location: 'Space21 #624, College of Sciences · Kyung Hee University Seoul Campus',
  /** Set to a confirmed public address to show a mailto link. */
  email: 'ara.jeong@khu.ac.kr',
  /**
   * Building shown on the map (Google Maps search, no API key needed).
   * Space21 building, Kyung Hee University Seoul Campus (College of Sciences).
   */
  map: {
    query: '경희대학교 스페이스21',
    label: 'Space21, College of Sciences · Kyung Hee University Seoul Campus',
    address: '26 Kyungheedae-ro, Dongdaemun-gu, Seoul 02447, Republic of Korea',
  },
}
