import type { NavItem, ProspectiveInfo } from './types'
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
      { label: 'Current Members', path: '/members#current' },
      { label: 'Alumni', path: '/members#alumni' },
    ],
  },
  { label: 'Publications', path: '/publications' },
  { label: 'Gallery', path: '/news' },
  { label: 'Contact', path: '/contact' },
]

export const contact = {
  location: 'Space21 #624, College of Sciences · Kyung Hee University Seoul Campus',
  /** Set to a confirmed public address to show a mailto link. */
  email: 'ara.jeong@khu.ac.kr',
  /** Student recruitment guide (shown on the Contact page) */
  prospective: {
    title: 'Join Us | Undergraduate Researchers',
    sections: [
      {
        heading: '지원 대상',
        items: [
          [{ bold: '대학원 진학(석사 / 석·박사 통합과정)을 고려하는 학부생 또는 예비 대학원생' }],
          ['지리학, 지형학, 자연재해 및 지구환경 변화 연구에 관심 있는 ', { bold: '학부 3~4학년 재학생' }],
          ['남학생의 경우 군필자(또는 면제자) (학업 및 연속적 연구 참여 가능)'],
          [{ bold: '현장 지형 조사' }, '와 ', { bold: '지형 데이터 수치분석' }, '에 적극적인 열정을 가진 학생'],
        ],
      },
      {
        heading: '요구 역량 및 인재상',
        items: [
          [{ bold: '책임감과 성실성:' }, ' 맡은 분석 과업과 연구를 끝까지 주도적으로 완수하는 자세'],
          [{ bold: '열정과 배움의 의지:' }, ' 3D 측량, 연대측정, 수치모델링을 적극적으로 배우려는 의지'],
          [{ bold: '인성과 협업 태도:' }, ' 팀원과의 원활한 소통, 상호 배려와 존중 기반의 팀워크'],
        ],
      },
      {
        heading: '연구실 참여 혜택',
        boxed: true,
        items: [
          ['국가연구개발사업 참여를 통한 연구 인건비/장학금 지원'],
          ['국내외 학술대회 발표 및 논문 작성 1:1 밀착 지도'],
          ['랩실 내 개인 연구 좌석 및 데이터 분석 인프라 제공'],
        ],
      },
    ],
  } satisfies ProspectiveInfo,
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
