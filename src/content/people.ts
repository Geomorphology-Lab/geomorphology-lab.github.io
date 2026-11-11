import type { Alumnus, Person, PrincipalInvestigator } from './types'

export const principalInvestigator: PrincipalInvestigator = {
  name: 'Prof. Ara Jeong',
  affiliation: 'Assistant Professor',
  researchInterests:
    'Quaternary Geochronology · Cosmogenic Radionuclides · Rock Coast Evolution · Geomorphic Hazards · Anthropocene Soil Erosion · Post-Wildfire Landscapes · UAV-SfM & LiDAR · Numerical Modeling',
  email: 'ara.jeong@khu.ac.kr',
  scholarUrl: 'https://scholar.google.com/citations?user=FXMvtQwAAAAJ&hl=ko&oi=ao',
  cvUrl: '/docs/Ara_Jeong_CV.pdf',
  photo: {
    src: '/images/people/pi-ara-jeong-1000.webp',
    srcSet: '/images/people/pi-ara-jeong-600.webp 600w, /images/people/pi-ara-jeong-1000.webp 1000w',
    alt: 'Ara Jeong 교수의 프로필 사진. 회색 배경 앞에서 흰 셔츠를 입고 있다.',
  },
  education: [
    {
      degree: 'Ph.D.',
      years: '2015–2019',
      institution: 'School of Geographical Sciences and Urban Planning, Arizona State University',
    },
    {
      degree: 'Master’s Degree',
      years: '2013–2015',
      institution: 'Department of Geography, Korea University',
    },
    {
      degree: 'Bachelor’s Degree',
      years: '2009–2013',
      institution: 'Department of Geography Education and Department of Earth and Environmental Sciences, Korea University',
    },
  ],
  career: [
    '2025.03–Present: Assistant Professor, Department of Geography, Kyung Hee University',
    '2022.02–2025.02: Assistant Professor, Department of Civil and Environmental Engineering, Korea Military Academy',
    '2021.07–2021.12: Full-time Researcher, Institute of Geologic Hazard and Industrial Resources, Pusan National University',
    '2020.07–2021.06: Research Professor, Institute of Future Land, Korea University',
    '2020.01–2020.12: Full-time Researcher, Institute of Geologic Hazard and Industrial Resources, Pusan National University',
    '2019.07–2020.01: Postdoctoral Research Scholar and Lecturer, Arizona State University, USA',
  ],
  piKo: {
    name: '정아라 교수',
    education: [
      { degree: 'Ph.D.', years: '2015–2019', institution: 'Arizona State University, School of Geographical Sciences and Urban Planning' },
      { degree: 'Master’s Degree', years: '2013–2015', institution: '고려대학교 지리학과' },
      { degree: 'Bachelor’s Degree', years: '2009–2013', institution: '고려대학교 지리교육과, 지구환경과학과' },
    ],
    career: [
      '2025.03–Present: 경희대학교 지리학과, 조교수',
      '2022.02–2025.02: 육군사관학교 토목환경학과, 조교수',
      '2021.07–2021.12: 부산대학교 지질재해 산업자원 연구소, 전임연구원',
      '2020.07–2021.06: 고려대학교 미래국토연구소, 연구교수',
      '2020.01–2020.12: 부산대학교 지질재해 산업자원 연구소, 전임연구원',
      '2019.07–2020.01: Arizona State University, Post Doctoral Research Scholar',
    ],
  },
}

/** Graduate students. Copy an entry to add a member; delete it to remove. Optional fields can simply be left out. */
export const graduateStudents: Person[] = [
  {
    name: 'Eungi Cho',
    position: 'M.S. course',
    affiliation: 'Department of Climate-Social Science Convergence, Kyung Hee University',
    email: 'dmsrlwh@khu.ac.kr',
    ko: { name: '조은기', position: '석사과정', affiliation: '경희대학교 기후사회과학융합학과' },
    researchInterests: 'Geochronology, Geological Engineering, Remote sensing, Anthropocene',
    photo: { alt: 'Eungi Cho 프로필 사진 (사진 준비 중)' },
  },
]

export const undergraduateResearchers: Person[] = [
  {
    name: 'Sohyeon Kim',
    position: 'Undergraduate researcher',
    affiliation: 'Department of Chemistry and Department of Geography, Kyung Hee University',
    ko: { name: '김소현', position: '학부연구생', affiliation: '경희대학교 화학과 / 지리학과' },
    researchInterests: 'Biogeochemistry, Environmental Remote Sensing, Earth System Data Analysis',
    email: 'nhye03@khu.ac.kr',
    photo: {
      src: '/images/people/sohyeon-kim-600.webp',
      srcSet: '/images/people/sohyeon-kim-600.webp 600w, /images/people/sohyeon-kim-951.webp 951w',
      alt: 'Sohyeon Kim의 증명사진. 흰 바탕 앞에서 검은 재킷을 입고 있다.',
    },
  },
]

/**
 * The Alumni tab and its menu link stay, but the page is left blank until there are real records:
 * the list below is not shown. Set this to true once it holds real entries; nothing else needs to change.
 */
export const SHOW_ALUMNI = false

export const alumni: Alumnus[] = [
  {
    name: '졸업생 성명',
    degree: '이곳에는 취득 학위가 들어갑니다.',
    year: '졸업 연도',
    currentPosition: '이곳에는 졸업생의 현재 소속과 직위가 들어갑니다.',
  },
  {
    name: '졸업생 성명',
    degree: '이곳에는 취득 학위가 들어갑니다.',
    year: '졸업 연도',
    currentPosition: '이곳에는 졸업생의 현재 소속과 직위가 들어갑니다.',
  },
]
