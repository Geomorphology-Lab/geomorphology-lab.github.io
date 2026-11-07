import type { ResearchArea } from './types'

export const researchIntro = {
  title: 'Research',
  /** Shown on the Home page above the research cards and on the Research page */
  lead: 'We study Earth-surface processes across timescales from millennia to years, linking long-term landscape history with present-day hazards and human impacts.',
}

/**
 * Research areas. The Home cards and the Research page both read from this list.
 * Numbers (01, 02 …) follow the order. `cardPhoto` is the picture revealed behind each Home card on hover.
 * Photographs live in /public/images/research/
 * (created with scripts/optimize-content-image.py); `position` keeps the key part of a photo
 * visible when it is cropped, and fit: 'contain' shows a photo uncropped.
 */
export const researchAreas: ResearchArea[] = [
  {
    id: 'area-1',
    cardPhoto: {
      src: '/images/research/card-rock-coast-600.webp',
      srcSet: '/images/research/card-rock-coast-600.webp 600w, /images/research/card-rock-coast-1000.webp 1000w',
      position: '42% 0%',
    },
    title: 'Rock Coast Dynamics & Geomorphic Thresholds',
    tabLabel: 'Rock Coast Dynamics',
    summary:
      'We quantify rock coast erosion along the Korean Peninsula from the mid-Holocene to the present. By combining UAV-SfM surveys, cosmogenic nuclides, and finite element modeling, we predict the collapse thresholds and remaining lifespans of sea stacks and coastal cliffs.',
    question: 'How fast do rocky coasts erode, and when do coastal landforms such as sea stacks reach the point of collapse?',
    description: [
      'Rocky coasts dominate much of the Korean shoreline, yet how fast they retreat and when coastal landforms collapse remain poorly understood. We combine UAV-SfM 3D surveys, cosmogenic radionuclide dating, and finite element modeling to reconstruct coastal erosion since the mid-Holocene and identify the thresholds at which sea stacks fail.',
      'Building on our global synthesis of cosmogenic nuclide records from rocky coasts, we are now comparing sea stacks on the east and west coasts of Korea. Our goal is to predict their collapse thresholds and remaining lifespans, supporting coastal hazard assessment and geoheritage conservation.',
    ],
    image: {
      src: '/images/research/research-rock-coast-1600.webp',
      srcSet: '/images/research/research-rock-coast-960.webp 960w, /images/research/research-rock-coast-1600.webp 1600w',
      alt: '푸른 바다와 맞닿은 암석 해안과 해안 마을을 위에서 내려다본 항공 사진',
      position: '50% 50%',
    },
    relatedProjects: [
      {
        title: 'Prediction of Collapse Threshold and Lifespan for Rocky Coasts in the Korean Peninsula by Environmental Setting',
        detail: 'NRF Early Career Research Program · PI · 2026–2029',
      },
    ],
    relatedPublications: ['Jeong et al. (2026), Earth-Sci. Rev.', 'Jeong et al. (2024), Mar. Geol.', 'Jeong et al. (2021), J. Geol. Soc. Korea'],
  },
  {
    id: 'area-2',
    cardPhoto: {
      src: '/images/research/card-moraine-600.webp',
      srcSet: '/images/research/card-moraine-600.webp 600w, /images/research/card-moraine-1000.webp 1000w',
      position: '47% 50%',
    },
    title: 'Landscape Chronology & Quaternary Environments',
    tabLabel: 'Landscape Chronology',
    summary:
      'Using cosmogenic radionuclide dating and LiDAR-based terrain analysis, we reconstruct the history of glacial landforms, river terraces, and structural landscapes. We ask how Earth’s surface responded to Quaternary glacial–interglacial cycles and past climate change.',
    question: 'When did today’s landscapes form, and how did they respond to past glacial–interglacial climate change?',
    description: [
      'Moraines, river terraces, and other landforms preserve a record of how Earth’s surface responded to Quaternary climate change, but reading that record requires reliable ages. We date landforms using cosmogenic radionuclides (¹⁰Be), including depth-profile methods, together with optically stimulated luminescence (OSL), and map them in detail with LiDAR and drone-based surveys.',
      'In the Powell Basin and Beartooth Mountains of the northern Rocky Mountains, we are reconstructing the timing of glacial advances and the formation of Late Pleistocene and Holocene river terraces. By linking these chronologies to paleoclimate records, we aim to understand how glaciers, rivers, and hillslopes adjust to shifting climate over tens of thousands of years.',
    ],
    image: {
      src: '/images/research/research-quaternary-field-group-1600.webp',
      srcSet:
        '/images/research/research-quaternary-field-group-960.webp 960w, /images/research/research-quaternary-field-group-1600.webp 1600w, /images/research/research-quaternary-field-group-2400.webp 2400w',
      alt: '“90th Anniversary”라고 적힌 현수막 뒤로 야외에 모여 선 단체 사진. 배경에 숲과 산이 보인다.',
      // The photo is very wide (about 2.9:1): show it whole (no cropping), across the full width below the text.
      fit: 'contain',
      wide: true,
    },
    relatedProjects: [
      {
        title: 'Application of Numerical Dating Techniques for the Quantification of Landscape Processes, Forms, and History',
        detail: 'Kyung Hee University Research Grant for New Faculty · PI · 2025–2026',
      },
      { title: 'Quaternary Landscape Evolution of the Powell Basin, Wyoming, USA' },
    ],
    relatedPublications: [
      'Jeong et al., in review',
      'Jeong et al. (2024), Phys. Geogr.',
      'Jeong et al. (2023), Episodes',
      'Jeong et al. (2018), Quat. Sci. Rev.',
    ],
  },
  {
    id: 'area-3',
    cardPhoto: {
      src: '/images/research/card-erosion-600.webp',
      srcSet: '/images/research/card-erosion-600.webp 600w, /images/research/card-erosion-1000.webp 1000w',
      position: '18% 50%',
    },
    title: 'Anthropocene Soil Erosion & Land Use',
    tabLabel: 'Soil Erosion & Land Use',
    summary:
      'We measure how agriculture, urbanization, and land-use change have accelerated hillslope erosion and soil loss. Our work spans historical farming landscapes in Korea and urbanizing arid regions of Arizona, linking surface processes to their social consequences.',
    question: 'How much faster do hillslopes erode when people farm, build, and develop the land?',
    description: [
      'Human activity is now one of the most powerful forces reshaping Earth’s surface, yet measuring its impact requires knowing how fast landscapes eroded before people arrived. We use cosmogenic ¹⁰Be to establish natural background erosion rates and compare them with present-day rates under agriculture, construction, and urban development.',
      'In Phoenix, Arizona, one of the fastest-growing desert cities in the United States, we have quantified how urbanization accelerates soil loss and sediment delivery in arid landscapes, with direct implications for flood-control infrastructure. We are now extending this approach to the Korean Peninsula, where centuries of land clearing and traditional farming have left a lasting imprint on hillslopes.',
    ],
    image: {
      src: '/images/research/research-soil-erosion-ldd-500.webp',
      alt: 'Land Degradation & Development 2019년 30권 2호 표지. 황갈색 풀밭과 하늘 위에 토양 유실량을 비교한 상자 그림이 겹쳐 있다.',
      fit: 'contain',
    },
    relatedProjects: [
      { title: 'Land Use and Soil Erosion in the Urban Fringe of Phoenix, Arizona, USA' },
      { title: 'Traditional Agriculture, Soil Erosion, and Hillslope Development in Korea' },
    ],
    relatedPublications: [
      'Jeong et al. (2025), Land',
      'Jeong et al. (2021), Land',
      'Jeong (2019), Environ. Res. Lett.',
      'Jeong & Dorn (2019), Land Degrad. Dev.',
    ],
  },
  {
    id: 'area-4',
    cardPhoto: {
      src: '/images/research/card-wildfire-600.webp',
      srcSet: '/images/research/card-wildfire-600.webp 600w, /images/research/card-wildfire-1000.webp 1000w',
      position: '45% 52%',
    },
    title: 'Interdisciplinary Research: Geomorphology Meets Ecology',
    tabLabel: 'Geomorphology Meets Ecology',
    summary:
      'We combine geomorphology with microbial ecology to study how landscapes and soil ecosystems respond together to extreme events. Our current work tracks post-fire soil erosion and changes in soil microbial communities on slopes burned in the 2025 Gyeongbuk wildfires.',
    question: 'How do burned landscapes and their soil ecosystems recover after extreme wildfire?',
    description: [
      'Wildfires strip vegetation and alter soils, leaving hillslopes vulnerable to rapid erosion, yet the links between terrain, soil loss, and soil life after fire remain poorly understood. Bridging geomorphology and microbial ecology, we combine field surveys and high-resolution terrain mapping with analyses of soil microbial communities.',
      'On slopes burned in the 2025 Gyeongbuk wildfires, we are tracking how post-fire erosion and microbial communities change together across different terrain settings. Our goal is to understand how topography shapes ecosystem recovery and to inform post-fire land management.',
    ],
    image: {
      src: '/images/research/research-wildfire-field-480.webp',
      alt: '식물이 새로 돋아난 탄 흙 비탈에 모종삽과 작은 시료병이 놓여 있는 현장 사진',
      fit: 'contain',
    },
    relatedProjects: [{ title: 'Post-Fire Landscape and Soil Microbiome Change after the 2025 Gyeongbuk Wildfires' }],
    relatedPublications: ['Jeong et al., in preparation'],
  },
]
