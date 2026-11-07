import type { Alumnus, Person, PrincipalInvestigator } from './types'

export const principalInvestigator: PrincipalInvestigator = {
  name: 'Prof. Ara Jeong',
  affiliation: 'Assistant Professor',
  researchInterests: 'Geomorphology, Earth Surface and Landforms, Anthropocene, Soil Erosion, Cosmogenic Radionuclides, Sustainability',
  email: 'ara.jeong@khu.ac.kr',
  scholarUrl: 'https://scholar.google.com/citations?user=FXMvtQwAAAAJ&hl=ko&oi=ao',
  photo: { alt: '교수님 사진' },
  education: [
    'Ph.D., 2015–2019, School of Geographical Sciences and Urban Planning, Arizona State University',
    'Master’s, 2013–2015, Department of Geography, Korea University',
    'Bachelor’s, 2009–2013, Department of Geography Education and Department of Earth and Environmental Sciences, Korea University',
  ],
  career: [
    '2025.03–Present: Assistant Professor, Department of Geography, Kyung Hee University',
    '2022.02–2025.02: Assistant Professor, Department of Civil and Environmental Engineering, Korea Military Academy',
    '2021.07–2021.12: Full-time Researcher, Institute of Geologic Hazard and Industrial Resources, Pusan National University',
    '2020.07–2021.06: Research Professor, Institute of Future Land, Korea University',
    '2020.01–2020.12: Full-time Researcher, Institute of Geologic Hazard and Industrial Resources, Pusan National University',
    '2019.07–2020.01: Post-Doctoral Research Scholar, Arizona State University',
  ],
}

/** Graduate students. Copy the example entry to add a member; delete it to remove. */
export const graduateStudents: Person[] = [
  {
    name: '구성원 성명',
    position: '이곳에는 학위과정(박사과정·석사과정 등)이 들어갑니다.',
    researchInterests: '이곳에는 구성원의 연구 관심 분야가 들어갑니다.',
    email: '이곳에는 공개가 승인된 이메일 주소가 들어갑니다.',
    photo: { alt: '대학원생 구성원 사진' },
  },
]

export const undergraduateResearchers: Person[] = [
  {
    name: '구성원 성명',
    position: '이곳에는 학부 연구생의 학과와 학년이 들어갑니다.',
    researchInterests: '이곳에는 구성원의 연구 관심 분야가 들어갑니다.',
    email: '이곳에는 공개가 승인된 이메일 주소가 들어갑니다.',
    photo: { alt: '학부 연구생 사진' },
  },
]

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
