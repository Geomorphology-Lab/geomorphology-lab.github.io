import type { ResearchArea } from './types'

export const researchIntro = {
  title: 'Research',
  /** Shown on the Home page above the research cards and on the Research page */
  lead: 'We study Earth-surface processes across timescales from millennia to years, linking long-term landscape history with present-day hazards and human impacts.',
  /** Korean version of the lead (Research page, Korean mode) */
  leadKo: '수천 년에서 수년에 이르는 다양한 시간 규모에서 지표 과정을 연구하며, 장기적인 지형 발달사를 오늘날의 자연재해 및 인간 활동의 영향과 연결합니다.',
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
    ko: {
      question: '암석 해안은 얼마나 빠르게 침식되며, 시스택과 같은 해안 지형은 언제 붕괴 임계점에 도달할까?',
      description: [
        '암석 해안은 한국 해안선의 상당 부분을 차지하지만, 해안이 얼마나 빠르게 후퇴하고 해안 지형이 언제 붕괴하는지는 아직 잘 알려져 있지 않습니다. 우리는 UAV-SfM 3차원 측량, 우주기원 방사성 핵종 연대측정, 유한요소 모델링을 결합하여 중기 홀로세 이후의 해안 침식을 복원하고, 시스택이 붕괴하는 임계 조건을 규명합니다.',
        '암석 해안의 우주기원 핵종 기록을 종합한 전 지구적 연구를 바탕으로, 현재 한국 동해안과 서해안의 시스택을 비교하고 있습니다. 이를 통해 시스택의 붕괴 임계점과 잔존 수명을 예측하여 해안 재해 평가와 지질유산 보전에 기여하고자 합니다.',
      ],
    },
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
    ko: {
      question: '오늘날의 지형은 언제 형성되었으며, 과거 빙기–간빙기 기후 변화에 어떻게 반응했을까?',
      description: [
        '빙퇴석과 하안단구 같은 지형에는 제4기 기후 변화에 지표가 어떻게 반응했는지가 기록되어 있지만, 이 기록을 읽어 내려면 신뢰할 수 있는 연대가 필요합니다. 우리는 심도 프로파일 방법을 포함한 우주기원 방사성 핵종(¹⁰Be) 연대측정과 광여기루미네선스(OSL) 연대측정으로 지형의 연대를 구하고, LiDAR와 드론 측량으로 지형을 정밀하게 매핑합니다.',
        '북부 로키산맥의 파월 분지(Powell Basin)와 베어투스 산맥(Beartooth Mountains)에서 빙하의 전진 시기와 후기 플라이스토세 및 홀로세 하안단구의 형성 시기를 복원하고 있습니다. 이 연대들을 고기후 기록과 연결하여, 빙하·하천·사면이 수만 년에 걸친 기후 변화에 어떻게 적응하는지 이해하고자 합니다.',
      ],
    },
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
    ko: {
      question: '사람이 농사를 짓고, 건물을 세우고, 땅을 개발하면 사면 침식은 얼마나 빨라질까?',
      description: [
        '인간 활동은 오늘날 지표를 변화시키는 가장 강력한 요인 중 하나가 되었지만, 그 영향을 측정하려면 인간이 등장하기 이전에 지형이 얼마나 빠르게 침식되었는지를 알아야 합니다. 우리는 우주기원 ¹⁰Be를 이용해 자연 상태의 배경 침식률을 구하고, 이를 농업, 건설, 도시 개발이 이루어지는 현재의 침식률과 비교합니다.',
        '미국에서 가장 빠르게 성장하는 사막 도시 중 하나인 애리조나주 피닉스에서는 도시화가 건조 지형의 토양 유실과 퇴적물 공급을 얼마나 가속하는지 정량화했으며, 이는 홍수 방어 시설에 직접적인 시사점을 줍니다. 현재는 수 세기에 걸친 개간과 전통 농업이 사면에 깊은 흔적을 남긴 한반도로 이 접근법을 확장하고 있습니다.',
      ],
    },
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
    ko: {
      question: '극한 산불 이후 불탄 지형과 토양 생태계는 어떻게 회복될까?',
      description: [
        '산불은 식생을 없애고 토양을 변화시켜 사면을 급격한 침식에 취약하게 만들지만, 산불 이후 지형과 토양 유실, 토양 생물 사이의 관계는 아직 잘 밝혀지지 않았습니다. 우리는 지형학과 미생물생태학을 잇는 연구로, 현장 조사와 고해상도 지형 매핑을 토양 미생물 군집 분석과 결합합니다.',
        '2025년 경북 산불로 피해를 입은 사면에서, 지형 조건에 따라 산불 이후의 침식과 미생물 군집이 함께 어떻게 변화하는지 추적하고 있습니다. 지형이 생태계 회복에 미치는 영향을 이해하고, 산불 이후의 토지 관리에 도움이 되는 정보를 제공하는 것이 목표입니다.',
      ],
    },
  },
]
