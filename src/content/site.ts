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
      '이곳에는 연구실의 주요 연구 주제와 연구 목표, 연구실이 수행하는 학술 활동에 대한 소개글이 들어갑니다.',
      '이곳에는 연구실이 지향하는 연구 방향과 현장 조사, 분석 방법 등 연구실의 특징을 간략히 설명하는 문장이 들어갑니다.',
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
  location: 'SPACE21, College of Sciences, Room 624',
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
