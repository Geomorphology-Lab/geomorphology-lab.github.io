import type { NavItem } from './types'

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
    /** Atmospheric image at the top of the homepage About section (file in public/images/about/) */
    image: {
      src: '/images/about/braided-river-1600.webp',
      srcSet: '/images/about/braided-river-960.webp 960w, /images/about/braided-river-1600.webp 1600w, /images/about/braided-river-2560.webp 2560w',
      alt: '어두운 퇴적층 위로 여러 갈래의 물길이 갈라졌다 합쳐지는 망상하천을 위에서 내려다본 모습',
      /** Which part stays visible when cropped: mobile / desktop */
      position: { mobile: '40% 50%', desktop: '50% 48%' },
    },
    heading: 'Studying the processes that shape the Earth’s surface',
    paragraphs: [
      'The Geomorphology Lab at Kyung Hee University investigates how landscapes form and change, and the mechanisms that turn surface processes into natural hazards. We reconstruct the evolution of landscapes across Quaternary glacial–interglacial cycles, quantify how rock coasts erode and collapse, and examine how agriculture, urbanization, wildfire, and climate change accelerate erosion today. Our study sites range from the rocky coasts and mountain slopes of the Korean Peninsula to the glaciated valleys of Wyoming and the arid landscapes of Arizona. Through national research programs, peer-reviewed publications, and international conferences, we aim to provide a scientific basis for understanding and responding to environmental change.',
      'Our research begins in the field and is completed with numbers. We pair detailed field surveys with high-resolution 3D mapping from UAV-SfM and LiDAR, cosmogenic radionuclide (CRN) dating, and numerical modeling such as finite element analysis (FEA). By integrating these approaches, we connect what a landscape looks like today with how fast it has changed in the past and how it is likely to respond in the future.',
    ],
  },

}

export const navigation: NavItem[] = [
  { label: 'Research', path: '/research' },
  { label: 'Members', path: '/members' },
  { label: 'Publications', path: '/publications' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
]

export const contact = {
  location: 'Space21 #624',
  /** Set to a confirmed public address to show a mailto link. */
  email: 'ara.jeong@khu.ac.kr',
  prospective:
    '이곳에는 대학원 진학 및 연구실 참여를 희망하는 학생들을 위한 안내 문구가 들어갑니다.',
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
