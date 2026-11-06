import type { NewsCategory, NewsItem } from './types'

export const newsIntro =
  '이곳에는 연구실의 공지사항과 현장 조사, 학술대회 참가, 수상 소식 등 연구실 활동 소식이 들어갑니다.'

export const newsCategories: { id: NewsCategory; label: string }[] = [
  { id: 'Announcement', label: 'Announcements' },
  { id: 'Fieldwork', label: 'Fieldwork' },
  { id: 'Conference', label: 'Conferences' },
  { id: 'Award', label: 'Awards' },
  { id: 'Research', label: 'Research Activities' },
]

/**
 * News items, newest first. The first three appear on the homepage.
 * To add a photo: put the file in /public/images/news/ and set
 * image: { src: '/images/news/filename.jpg', alt: '사진 설명' }
 */
export const news: NewsItem[] = [
  {
    id: 'announcement',
    category: 'Announcement',
    date: '게시일',
    title: '이곳에는 연구실 공지사항의 제목이 들어갑니다.',
    summary: '이곳에는 공지사항의 주요 내용을 요약한 문장이 들어갑니다.',
    image: { alt: '이곳에는 공지사항과 관련된 사진이 들어갑니다.' },
  },
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
