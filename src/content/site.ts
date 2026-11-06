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
    primaryAction: { label: 'About the Lab', path: '/about' },
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
  { label: 'About', path: '/about' },
  { label: 'Research', path: '/research' },
  { label: 'Members', path: '/members' },
  { label: 'Publications', path: '/publications' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
]

export const about = {
  intro: {
    title: 'Laboratory Introduction',
    lead: '이곳에는 연구실을 대표하는 한 문장 소개가 들어갑니다.',
    paragraphs: [
      '이곳에는 연구실의 설립 배경과 소속, 연구실이 다루는 학문 분야에 대한 소개글이 들어갑니다.',
      '이곳에는 연구실의 주요 연구 주제와 연구 목표, 연구실이 수행하는 학술 활동에 대한 소개글이 들어갑니다.',
    ],
  },
  vision: {
    title: 'Research Vision',
    paragraphs: [
      '이곳에는 연구실이 장기적으로 추구하는 연구 비전과 학문적·사회적 기여 방향에 대한 설명이 들어갑니다.',
    ],
  },
  approach: {
    title: 'Research Approach',
    intro: '이곳에는 연구실이 활용하는 연구 방법론 전반을 소개하는 문장이 들어갑니다.',
    items: [
      { title: '첫 번째 연구 방법', text: '이곳에는 연구실이 활용하는 첫 번째 연구 방법(예: 현장 조사, 시료 분석 등)에 대한 설명이 들어갑니다.' },
      { title: '두 번째 연구 방법', text: '이곳에는 연구실이 활용하는 두 번째 연구 방법(예: 원격탐사, 지형 분석 등)에 대한 설명이 들어갑니다.' },
      { title: '세 번째 연구 방법', text: '이곳에는 연구실이 활용하는 세 번째 연구 방법(예: 수치 모델링, 데이터 분석 등)에 대한 설명이 들어갑니다.' },
    ],
  },
  activities: {
    title: 'Laboratory Activities',
    items: [
      { title: 'Fieldwork', text: '이곳에는 연구실의 정기 현장 조사 활동에 대한 설명이 들어갑니다.' },
      { title: 'Seminars', text: '이곳에는 연구실 세미나 및 정기 모임에 대한 설명이 들어갑니다.' },
      { title: 'Collaboration', text: '이곳에는 국내외 공동 연구 및 협력 기관에 대한 설명이 들어갑니다.' },
      { title: 'Education', text: '이곳에는 연구실이 담당하는 교육 및 학생 지도 활동에 대한 설명이 들어갑니다.' },
    ],
  },
}

export const contact = {
  /** Confirmed: the laboratory belongs to Kyung Hee University. */
  university: 'Kyung Hee University (경희대학교)',
  department: 'Department of Geography, College of Science',
  location: 'SPACE21, College of Science, Room 624',
  /** Set to a confirmed public address to show a mailto link. */
  email: 'ara.jeong@khu.ac.kr',
  prospective:
    '이곳에는 대학원 진학 및 연구실 참여를 희망하는 학생들을 위한 안내 문구가 들어갑니다.',
  /**
   * Building shown on the map (Google Maps search, no API key needed).
   * Space21 houses the College of Science and the College of Nursing Science, Seoul Campus.
   */
  map: {
    query: '경희대학교 서울캠퍼스 스페이스21 간호과학대학',
    label: 'Space21, College of Nursing Science · Kyung Hee University Seoul Campus',
    address: '26 Kyungheedae-ro, Dongdaemun-gu, Seoul, Republic of Korea',
  },
}
