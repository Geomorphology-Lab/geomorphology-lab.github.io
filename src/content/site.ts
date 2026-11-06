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
      '이곳에는 연구실의 주요 연구 분야와 연구 목표를 소개하는 문구가 들어갑니다.',
    primaryAction: { label: 'About the Lab', path: '/about' },
    secondaryAction: { label: 'Explore Research', path: '/research' },
    /** Describes the hero photograph for screen readers. Update when the photo is replaced. */
    imageAlt: '안개가 낀 계곡 너머로 겹겹이 이어지는 산 능선 풍경',
  },

  homeAbout: {
    heading: 'Studying the processes that shape the Earth’s surface',
    paragraphs: [
      '이곳에는 연구실의 주요 연구 주제와 연구 목표, 연구실이 수행하는 학술 활동에 대한 소개글이 들어갑니다.',
      '이곳에는 연구실이 지향하는 연구 방향과 현장 조사, 분석 방법 등 연구실의 특징을 간략히 설명하는 문장이 들어갑니다.',
    ],
  },

  footer: {
    description: '이곳에는 연구실을 한두 문장으로 소개하는 짧은 문구가 들어갑니다.',
    address: '이곳에는 연구실의 위치와 공식 연락처가 들어갑니다.',
  },
}

export const navigation: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Research', path: '/research' },
  { label: 'People', path: '/people' },
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
  intro: '이곳에는 연구실의 위치와 공식 연락처가 들어갑니다.',
  /** Confirmed: the laboratory belongs to Kyung Hee University. */
  university: 'Kyung Hee University (경희대학교)',
  department: '이곳에는 연구실이 소속된 단과대학 및 학과명이 들어갑니다.',
  location: '이곳에는 연구실이 위치한 건물명과 호실, 주소가 들어갑니다.',
  /** Set to a confirmed public address to show a mailto link. */
  email: '이곳에는 연구실의 공식 이메일 주소가 들어갑니다.',
  phone: '이곳에는 연구실의 공식 전화번호가 들어갑니다.',
  prospective:
    '이곳에는 대학원 진학 및 연구실 참여를 희망하는 학생들을 위한 안내 문구가 들어갑니다.',
  /** Optional: a Google Maps / Naver Map / Kakao Map embed URL. Leave undefined to show the placeholder panel. */
  mapEmbedUrl: undefined as string | undefined,
  mapDescription: '이곳에는 연구실 위치를 보여주는 지도가 들어갑니다.',
}
