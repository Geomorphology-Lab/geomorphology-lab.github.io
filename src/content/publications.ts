import type { Publication } from './types'

/**
 * All publications. The page groups them by `year` (newest first) and builds
 * the year filter from the years present here — no other code changes needed.
 *
 * Add real records like this (only verified information):
 *   {
 *     id: 'jeong-2025-shore-platforms',
 *     year: 2025,
 *     title: 'Title of the article',
 *     authors: ['Jeong, A.', 'Kim, C.-S.'],
 *     venue: 'Earth-Science Reviews',
 *     volume: '262',
 *     pages: '105000',
 *     doi: '10.xxxx/xxxxx',
 *     type: 'journal',
 *   },
 *
 * The single entry below only describes what goes where; it is not a
 * publication record. Delete it when the first real record is added.
 */
export const publications: Publication[] = [
  {
    id: 'placeholder',
    title: '이곳에는 학술논문의 제목이 들어갑니다.',
    authors: ['이곳에는 저자명이 들어갑니다.'],
    venue: '이곳에는 학술지명이 들어갑니다',
    volume: '권',
    issue: '호',
    pages: '페이지 정보',
  },
]

/** Shown in the year column for a record that has no year yet. */
export const UNDATED_LABEL = '발표 연도'
/** Shown only if the list above is empty. */
export const EMPTY_MESSAGE = '이곳에는 연구실의 발표 논문 목록이 들어갑니다.'
