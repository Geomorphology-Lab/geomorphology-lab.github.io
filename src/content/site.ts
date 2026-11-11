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
    /** Atmospheric image at the top of the Research Areas band (files in public/images/about/) */
    image: {
      src: '/images/about/misty-ridges-1600.webp',
      srcSet: '/images/about/misty-ridges-960.webp 960w, /images/about/misty-ridges-1600.webp 1600w, /images/about/misty-ridges-2560.webp 2560w',
      alt: '어두운 안개 속에 겹겹이 이어지는 산 능선',
      /** Which part stays visible when cropped: mobile / desktop */
      position: { mobile: '50% 55%', desktop: '50% 55%' },
    },
    heading: 'Studying the processes that shape the Earth’s surface',
    paragraphs: [
      'The Geomorphology Lab at Kyung Hee University investigates how landscapes form and change, and the mechanisms that turn surface processes into natural hazards. We reconstruct the evolution of landscapes across Quaternary glacial–interglacial cycles, quantify how rock coasts erode and collapse, and examine how agriculture, urbanization, wildfire, and climate change accelerate erosion today. Our study sites range from the rocky coasts and mountain slopes of the Korean Peninsula to the glaciated valleys of Wyoming and the arid landscapes of Arizona. Through national research programs, peer-reviewed publications, and international conferences, we aim to provide a scientific basis for understanding and responding to environmental change.',
      'Our research begins in the field and is completed with numbers. We pair detailed field surveys with high-resolution 3D mapping from UAV-SfM and LiDAR, cosmogenic radionuclide (CRN) dating, and numerical modeling such as finite element analysis (FEA). By integrating these approaches, we connect what a landscape looks like today with how fast it has changed in the past and how it is likely to respond in the future.',
    ],
    /** Korean version of the paragraphs (Korean mode). The eyebrow and heading stay English. */
    paragraphsKo: [
      '경희대학교 지형학 실험실은 지형의 형성과 발달 과정, 지표 환경의 변화 및 자연재해 발생과 관련된 지형학적 메커니즘을 연구합니다. 제4기 빙기–간빙기 주기에 따른 장기적인 지형 발달사를 복원하고, 암석 해안의 침식률과 붕괴 임계 조건을 정량적으로 분석하며, 농업·도시화·산불·기후 변화 등 자연적·인위적 요인이 지표 침식에 미치는 영향을 규명합니다. 주요 연구 지역은 한반도의 암석 해안과 산지 사면을 비롯하여, 미국 와이오밍주의 빙하 지형과 애리조나주의 건조 지역에 이르기까지 다양한 지형 환경을 연구합니다. 이러한 연구를 바탕으로 지표 환경의 변화와 자연재해 발생 과정을 이해하고, 환경 변화에 대한 대응 및 지형 관리에 필요한 과학적 기반을 마련하고자 합니다.',
      '우리의 연구는 현장에서 시작해, 정량적 분석을 통해 완성됩니다. 정밀한 현장 조사와 UAV-SfM 및 LiDAR 기반 고해상도 3차원 지형 분석, 우주기원 방사성 핵종(CRN) 연대측정, 유한요소해석(FEA) 등의 수치 모델링을 결합하여 지형의 형성 시기와 변화 속도, 지형 발달에 관여하는 주요 요인을 분석합니다. 이러한 통합적 접근은 현재의 지형적 특성에 대한 이해에서 출발하여, 과거의 지형 변화 속도를 복원하고 미래의 지형학적 반응에 대한 예측으로까지 이어집니다.',
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
