import type { PublicationCategory } from './types'

export const publicationsIntro =
  '이곳에는 연구실에서 발표한 학술논문 및 학술대회 발표 실적이 들어갑니다.'

/**
 * Add real publications to `items`, newest first. Every field is plain text.
 * Example of a real entry:
 *   {
 *     authors: 'Hong, G.-D., Kim, C.-S.',
 *     year: '2025',
 *     title: 'Title of the article',
 *     venue: 'Geomorphology',
 *     details: '450, 109000',
 *     doi: '10.xxxx/xxxxx',
 *     featured: true,
 *   }
 * The entries below only describe what goes where; they are not publication records.
 */
export const publicationCategories: PublicationCategory[] = [
  {
    id: 'journal-articles',
    title: 'Journal Articles',
    description: '이곳에는 국내외 학술지에 게재된 연구 논문 목록이 들어갑니다.',
    items: [
      {
        authors: '이곳에는 저자명이 들어갑니다.',
        year: '발표 연도',
        title: '이곳에는 학술논문의 제목이 들어갑니다.',
        venue: '이곳에는 학술지명이 들어갑니다.',
        details: '권(호), 페이지 정보',
        featured: true,
      },
    ],
  },
  {
    id: 'conference-presentations',
    title: 'Conference Presentations',
    description: '이곳에는 국내외 학술대회에서 발표한 구두 및 포스터 발표 목록이 들어갑니다.',
    items: [
      {
        authors: '이곳에는 발표자명이 들어갑니다.',
        year: '발표 연도',
        title: '이곳에는 학술대회 발표 제목이 들어갑니다.',
        venue: '이곳에는 학술대회명과 개최 장소가 들어갑니다.',
        details: '발표 형식(구두·포스터)',
        featured: true,
      },
    ],
  },
  {
    id: 'other-outputs',
    title: 'Other Academic Outputs',
    description: '이곳에는 저서, 보고서, 특허 등 기타 학술 성과가 들어갑니다.',
    items: [
      {
        authors: '이곳에는 저자명이 들어갑니다.',
        year: '발표 연도',
        title: '이곳에는 저서·보고서 등의 제목이 들어갑니다.',
        venue: '이곳에는 발행처가 들어갑니다.',
      },
    ],
  },
]
