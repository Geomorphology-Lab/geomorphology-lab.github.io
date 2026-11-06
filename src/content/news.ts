import type { NewsCategory, NewsItem } from './types'

export const newsCategories: { id: NewsCategory; label: string }[] = [
  { id: 'Fieldwork', label: 'Fieldwork' },
  { id: 'Conference', label: 'Conferences' },
  { id: 'Award', label: 'Awards' },
  { id: 'Research', label: 'Research Activities' },
]

/**
 * News items, newest first.
 * To add a photo: put the file in /public/images/news/ and set
 * image: { src: '/images/news/filename.jpg', alt: '사진 설명' }
 */
export const news: NewsItem[] = [
  {
    id: 'fieldwork',
    category: 'Fieldwork',
    date: '게시일',
    title: '이곳에는 현장 조사 소식의 제목이 들어갑니다.',
    summary: '이곳에는 현장 조사 지역과 조사 내용을 소개하는 문장이 들어갑니다.',
    image: { alt: '이곳에는 현장 조사 사진이 들어갑니다.' },
  },
  {
    id: 'conference',
    category: 'Conference',
    date: '게시일',
    title: '이곳에는 학술대회 참가 소식의 제목이 들어갑니다.',
    summary: '이곳에는 참가한 학술대회와 발표 내용을 소개하는 문장이 들어갑니다.',
    image: { alt: '이곳에는 학술대회 참가 사진이 들어갑니다.' },
  },
  {
    id: 'award',
    category: 'Award',
    date: '게시일',
    title: '이곳에는 수상 소식의 제목이 들어갑니다.',
    summary: '이곳에는 수상 내역과 수상자를 소개하는 문장이 들어갑니다.',
    image: { alt: '이곳에는 수상 관련 사진이 들어갑니다.' },
  },
  {
    id: 'research',
    category: 'Research',
    date: '게시일',
    title: '이곳에는 연구 활동 소식의 제목이 들어갑니다.',
    summary: '이곳에는 연구실의 연구 활동 내용을 소개하는 문장이 들어갑니다.',
    image: { alt: '이곳에는 연구 활동 사진이 들어갑니다.' },
  },
]
