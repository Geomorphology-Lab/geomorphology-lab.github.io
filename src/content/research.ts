import type { ResearchArea } from './types'

export const researchIntro = {
  title: 'Research',
  lead: '이곳에는 연구실의 연구 분야 전반을 소개하는 문장이 들어갑니다.',
  description:
    '이곳에는 연구실이 다루는 연구 분야들이 서로 어떻게 연결되는지, 그리고 연구실이 해결하고자 하는 핵심 질문에 대한 설명이 들어갑니다.',
}

/**
 * Research areas. Add, remove or reorder entries freely — the Home and
 * Research pages update automatically. Numbers (01, 02 …) follow the order.
 */
export const researchAreas: ResearchArea[] = [
  {
    id: 'area-1',
    label: 'Research Area',
    title: '첫 번째 연구 분야',
    summary: '이곳에는 첫 번째 연구 분야의 핵심 주제를 한두 문장으로 요약한 소개글이 들어갑니다.',
    description: [
      '이곳에는 해당 연구 분야의 배경과 주요 연구 내용, 활용하는 연구 방법에 대한 설명이 들어갑니다.',
      '이곳에는 해당 연구 분야에서 연구실이 거둔 주요 성과와 향후 연구 계획에 대한 설명이 들어갑니다.',
    ],
    image: { alt: '이곳에는 첫 번째 연구 분야를 대표하는 사진이 들어갑니다.' },
    relatedProjects: ['이곳에는 이 분야와 관련된 연구 과제명이 들어갑니다.'],
    relatedPublications: ['이곳에는 이 분야와 관련된 대표 논문 정보가 들어갑니다.'],
  },
  {
    id: 'area-2',
    label: 'Research Area',
    title: '두 번째 연구 분야',
    summary: '이곳에는 두 번째 연구 분야의 핵심 주제를 한두 문장으로 요약한 소개글이 들어갑니다.',
    description: [
      '이곳에는 해당 연구 분야의 배경과 주요 연구 내용, 활용하는 연구 방법에 대한 설명이 들어갑니다.',
      '이곳에는 해당 연구 분야에서 연구실이 거둔 주요 성과와 향후 연구 계획에 대한 설명이 들어갑니다.',
    ],
    image: { alt: '이곳에는 두 번째 연구 분야를 대표하는 사진이 들어갑니다.' },
    relatedProjects: ['이곳에는 이 분야와 관련된 연구 과제명이 들어갑니다.'],
    relatedPublications: ['이곳에는 이 분야와 관련된 대표 논문 정보가 들어갑니다.'],
  },
  {
    id: 'area-3',
    label: 'Research Area',
    title: '세 번째 연구 분야',
    summary: '이곳에는 세 번째 연구 분야의 핵심 주제를 한두 문장으로 요약한 소개글이 들어갑니다.',
    description: [
      '이곳에는 해당 연구 분야의 배경과 주요 연구 내용, 활용하는 연구 방법에 대한 설명이 들어갑니다.',
      '이곳에는 해당 연구 분야에서 연구실이 거둔 주요 성과와 향후 연구 계획에 대한 설명이 들어갑니다.',
    ],
    image: { alt: '이곳에는 세 번째 연구 분야를 대표하는 사진이 들어갑니다.' },
    relatedProjects: ['이곳에는 이 분야와 관련된 연구 과제명이 들어갑니다.'],
    relatedPublications: ['이곳에는 이 분야와 관련된 대표 논문 정보가 들어갑니다.'],
  },
  {
    id: 'area-4',
    label: 'Research Area',
    title: '네 번째 연구 분야',
    summary: '이곳에는 네 번째 연구 분야의 핵심 주제를 한두 문장으로 요약한 소개글이 들어갑니다.',
    description: [
      '이곳에는 해당 연구 분야의 배경과 주요 연구 내용, 활용하는 연구 방법에 대한 설명이 들어갑니다.',
      '이곳에는 해당 연구 분야에서 연구실이 거둔 주요 성과와 향후 연구 계획에 대한 설명이 들어갑니다.',
    ],
    image: { alt: '이곳에는 네 번째 연구 분야를 대표하는 사진이 들어갑니다.' },
    relatedProjects: ['이곳에는 이 분야와 관련된 연구 과제명이 들어갑니다.'],
    relatedPublications: ['이곳에는 이 분야와 관련된 대표 논문 정보가 들어갑니다.'],
  },
]
