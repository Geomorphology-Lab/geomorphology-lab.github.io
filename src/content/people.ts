import type { Alumnus, Person, PrincipalInvestigator } from './types'

export const peopleIntro =
  '이곳에는 연구실 구성원과 연구실의 공동체 문화를 간략히 소개하는 문장이 들어갑니다.'

export const principalInvestigator: PrincipalInvestigator = {
  name: 'Prof. Ara Jeong',
  position: 'Principal Investigator',
  affiliation: 'Assistant Professor, ',
  researchInterests: 'Geomorphology, Earth Surface and Landforms, Anthropocene, Soil Erosion, Cosmogenic Radionuclides, Sustainability',
  email: 'ara.jeong@khu.ac.kr',
  photo: { alt: '교수님 사진' },
  biography: ['이곳에는 약력과 연구 경력을 소개하는 글이 들어갑니다.'],
  education: ['이곳에는 학력 사항이 들어갑니다.'],
  career: ['이곳에는 주요 경력 사항이 들어갑니다.'],
}

/** Graduate students. Copy an entry to add a member; delete to remove. */
export const graduateStudents: Person[] = [
  {
    name: '구성원 성명',
    position: '이곳에는 학위과정(박사과정·석사과정 등)이 들어갑니다.',
    researchInterests: '이곳에는 구성원의 연구 관심 분야가 들어갑니다.',
    email: '이곳에는 공개가 승인된 이메일 주소가 들어갑니다.',
    photo: { alt: '대학원생 구성원 사진' },
  },
  {
    name: '구성원 성명',
    position: '이곳에는 학위과정(박사과정·석사과정 등)이 들어갑니다.',
    researchInterests: '이곳에는 구성원의 연구 관심 분야가 들어갑니다.',
    email: '이곳에는 공개가 승인된 이메일 주소가 들어갑니다.',
    photo: { alt: '대학원생 구성원 사진' },
  },
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
    photo: { alt: '학부 연구생 사진' },
  },
  {
    name: '구성원 성명',
    position: '이곳에는 학부 연구생의 학과와 학년이 들어갑니다.',
    researchInterests: '이곳에는 구성원의 연구 관심 분야가 들어갑니다.',
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
