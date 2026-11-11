import type { NewsItem } from './types'

/**
 * Gallery items, newest first.
 * An item with `photos` opens its own page (/news/<id>) that lists the photographs one after another, and its
 * thumbnail gets a small "+" mark. Photos live in /public/images/gallery/ (created with
 * scripts/optimize-photo.py <photo> public/images/gallery <name>); `width` and `height` are the pixel size of the
 * largest file. An item without photos is shown as a plain card.
 * A title may contain \n to choose where a long title breaks into lines on its card (the photo page shows it on one line).
 */
export const news: NewsItem[] = [
  {
    id: 'icamg-10',
    title: 'ICAMG-10(국제아시아해양지질학회) 참여 및 발표',
    image: {
      src: '/images/gallery/icamg-10-thumb-1600.webp',
      srcSet: '/images/gallery/icamg-10-thumb-960.webp 960w, /images/gallery/icamg-10-thumb-1600.webp 1600w',
      alt: '발표 슬라이드가 비치는 스크린 옆에서 발표하는 모습',
    },
    photos: [
      {
        src: '/images/gallery/icamg-10-thumb-1600.webp',
        srcSet: '/images/gallery/icamg-10-thumb-960.webp 960w, /images/gallery/icamg-10-thumb-1600.webp 1600w',
        width: 1600,
        height: 1200,
        alt: '발표 슬라이드가 비치는 스크린 옆에서 발표하는 모습',
      },
      {
        src: '/images/gallery/icamg-10-02-1600.webp',
        srcSet: '/images/gallery/icamg-10-02-960.webp 960w, /images/gallery/icamg-10-02-1600.webp 1600w, /images/gallery/icamg-10-02-2560.webp 2560w',
        width: 2560,
        height: 1920,
        alt: 'ICAMG-10 2026 행사 배경 패널 앞에 두 사람이 나란히 서 있다.',
      },
      {
        src: '/images/gallery/icamg-10-03-1600.webp',
        srcSet: '/images/gallery/icamg-10-03-960.webp 960w, /images/gallery/icamg-10-03-1600.webp 1600w, /images/gallery/icamg-10-03-2560.webp 2560w',
        width: 2560,
        height: 1920,
        alt: 'ICAMG-10 현수막이 걸린 발표장 무대 앞에 두 사람이 서 있다.',
      },
      {
        src: '/images/gallery/icamg-10-01-1600.webp',
        srcSet: '/images/gallery/icamg-10-01-960.webp 960w, /images/gallery/icamg-10-01-1600.webp 1600w, /images/gallery/icamg-10-01-2560.webp 2560w',
        width: 2560,
        height: 1707,
        alt: '레스토랑 실내의 식사 자리에 일행이 앉아 있다.',
      }
    ],
  },
  {
    id: 'ybra-90th',
    title: 'YBRA 90th Anniversary 참여 및\nMt. Beartooth 현장 조사',
    image: {
      src: '/images/gallery/ybra-90th-thumb-1600.webp',
      srcSet: '/images/gallery/ybra-90th-thumb-960.webp 960w, /images/gallery/ybra-90th-thumb-1600.webp 1600w',
      alt: '“90” 표지판 뒤로 참가자들이 야외에 모여 선 단체 사진',
      position: '40% 50%',
    },
    photos: [
      {
        src: '/images/gallery/ybra-90th-thumb-1600.webp',
        srcSet: '/images/gallery/ybra-90th-thumb-960.webp 960w, /images/gallery/ybra-90th-thumb-1600.webp 1600w',
        width: 1600,
        height: 554,
        alt: '“90” 표지판 뒤로 참가자들이 야외에 모여 선 단체 사진',
      },
      {
        src: '/images/gallery/ybra-90th-01-1600.webp',
        srcSet: '/images/gallery/ybra-90th-01-960.webp 960w, /images/gallery/ybra-90th-01-1600.webp 1600w, /images/gallery/ybra-90th-01-2560.webp 2560w',
        width: 2560,
        height: 1920,
        alt: '초원 언덕에서 참가자들이 모여 서서 현장 설명을 듣고 있다.',
      },
      {
        src: '/images/gallery/ybra-90th-02-1600.webp',
        srcSet: '/images/gallery/ybra-90th-02-960.webp 960w, /images/gallery/ybra-90th-02-1600.webp 1600w, /images/gallery/ybra-90th-02-2560.webp 2560w',
        width: 2560,
        height: 1920,
        alt: '초원에서 참가자들이 둘러서서 이야기를 나누고 있다.',
      },
      {
        src: '/images/gallery/ybra-90th-03-1179.webp',
        srcSet: '/images/gallery/ybra-90th-03-960.webp 960w, /images/gallery/ybra-90th-03-1179.webp 1179w',
        width: 1179,
        height: 1472,
        alt: '통나무 건물 아래에서 사람들이 뷔페 음식을 담고 있다.',
      },
      {
        src: '/images/gallery/ybra-90th-04-1600.webp',
        srcSet: '/images/gallery/ybra-90th-04-960.webp 960w, /images/gallery/ybra-90th-04-1600.webp 1600w, /images/gallery/ybra-90th-04-2560.webp 2560w',
        width: 2560,
        height: 1920,
        alt: 'Wyoming 표지판 앞에 네 사람이 서 있다.',
      },
      {
        src: '/images/gallery/ybra-90th-05-1600.webp',
        srcSet: '/images/gallery/ybra-90th-05-960.webp 960w, /images/gallery/ybra-90th-05-1600.webp 1600w, /images/gallery/ybra-90th-05-2560.webp 2560w',
        width: 2560,
        height: 1920,
        alt: '초원에서 참가자들이 모여 서서 이야기를 듣고 있다.',
      },
      {
        src: '/images/gallery/ybra-90th-06-1600.webp',
        srcSet: '/images/gallery/ybra-90th-06-960.webp 960w, /images/gallery/ybra-90th-06-1600.webp 1600w, /images/gallery/ybra-90th-06-2560.webp 2560w',
        width: 2560,
        height: 1920,
        alt: '온천 침전물 지형이 보이는 나무 난간 앞에 세 사람이 앉고 서 있다.',
      },
      {
        src: '/images/gallery/ybra-90th-07-1600.webp',
        srcSet: '/images/gallery/ybra-90th-07-960.webp 960w, /images/gallery/ybra-90th-07-1600.webp 1600w, /images/gallery/ybra-90th-07-2560.webp 2560w',
        width: 2560,
        height: 1707,
        alt: '넓은 연회장에서 참석자들이 원탁에 앉아 손을 들어 인사하고 있다.',
      },
    ],
  },
]
