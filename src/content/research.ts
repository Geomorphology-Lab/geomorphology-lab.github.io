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
    ko: {
      summary:
        '중기 홀로세부터 현재까지의 한반도 암석 해안의 침식을 정량적으로 분석합니다. UAV-SfM 기반 3차원 지형 측량, 우주기원 방사성 핵종 연대측정 및 유한요소 모델링을 결합하여 시스택과 해안 절벽의 붕괴 임계점과 잔존 수명을 예측합니다.',
      description: [
        '한반도의 해안선은 주로 암석 해안이 상당 부분을 차지하는 지역으로, 해안 침식률과 지형의 붕괴 시점을 정량적으로 규명하는 것은 해안 지형의 장기적인 발달 과정을 이해하는 데 중요합니다. 본 연구실에서는 UAV-SfM 기반 3차원 지형 측량, cosmogenic radionuclide dating, finite element modeling을 활용하여 중기 홀로세 이후의 해안 침식 과정을 복원하고, 시스의 붕괴를 유발하는 임계 조건을 분석합니다.',
        '전 세계 암석 해안의 우주기원 핵종 연구 결과를 종합한 선행연구를 바탕으로, 현재 한반도 동·서해안에 분포하는 시스택의 지형적 특성과 침식 양상을 비교하고 있습니다. 이를 통해 해안 지형의 붕괴 임계 조건과 잔존 수명을 예측하고, 해안 재해 위험성 평가 및 지질유산 보전을 위한 과학적 근거를 마련하고자 합니다.',
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
      summary:
        '우주기원 방사성 핵종 연대측정과 LiDAR 기반 지형 분석을 활용하여 빙하 지형, 하안단구 및 구조 지형의 형성 시기와 발달 과정을 복원합니다. 이를 바탕으로 제4기 빙기-간빙기 주기와 기후 변동에 따른 지표 환경의 변화 및 지형 발달 특성을 분석합니다.',
      description: [
        '빙퇴석과 하안단구를 비롯한 다양한 지형에는 제4기 기후 변화에 따른 지표 환경의 변동 과정이 기록되어 있습니다. 이러한 지형의 형성 시기와 발달 과정을 규명하기 위해서는 신뢰도 높은 절대연대 자료가 필수적입니다. 본 연구실에서는 ¹⁰Be 깊이별 농도 분포 분석을 포함한 우주기원 방사성 핵종 연대측정법과 OSL 연대측정법을 활용하여 지형의 형성 연대를 추정하고, LiDAR 및 UAV 기반 지형 분석을 통해 지형적 특성을 정밀하게 파악합니다.',
        '현재 북부 Rocky Mountains의 Powell Basin과 Beartooth Mountains를 대상으로 빙하의 전진 시기와 후기 플라이스토세 및 홀로세 하안단구의 형성 과정을 복원하고 있습니다. 이를 고기후 기록과 연결함으로써 수만 년에 걸친 기후 변동에 대한 빙하, 하천 및 사면 지형의 반응과 장기적인 지형 발달 과정을 분석하고자 합니다.',
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
      summary:
        '농업 활동과 도시화 등 토지 이용 변화가 사면 침식 및 토양 유실에 미치는 영향을 정량적으로 규명합니다. 한반도의 전통 농경 지역 및 미국 애리조나주의 도시화가 진행 중인 건조 지역을 대상으로, 인간 활동에 따른 지표 환경의 변화와 그 사회적 영향을 분석합니다.',
      description: [
        '인간 활동에 따른 토지 이용 변화는 지표 변화에 상당한 영향을 미치며, 그 영향을 정량적으로 측정하기 위해서는 인간이 등장하기 이전 자연 상태의 침식률에 대한 이해가 선행되어야 합니다. 본 연구실에서는 우주기원 ¹⁰Be 분석을 통해 자연 상태의 배경 침식률을 구하고, 이를 농업 활동, 건설 및 도시 개발에 따른 현재의 침식률과 비교합니다.',
        '미국 애리조나주 Phoenix는 빠르게 도시 성장이 이루어지고 있는 도시 중 하나입니다. 이곳을 대상으로 한 선행연구에서는 도시화가 건조 지역의 토양 유실과 퇴적물 이동에 미치는 영향을 정량적으로 분석하고, 홍수 방어 기반시설 관리와 관련된 시사점을 제시하였습니다. 현재는 이러한 연구 접근을 한반도로 확장하여, 수 세기에 걸친 개간과 전통적인 농업 활동이 사면 침식 및 지형 발달에 미친 영향을 규명하고 있습니다.',
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
      summary:
        '지형학과 미생물생태학의 학제 간 접근을 통해 극한 자연현상에 따른 지형 및 토양 생태계의 반응을 분석합니다. 현재 2025년 경북 산불 피해 지역을 대상으로 사면 침식과 토양 미생물 군집의 변화를 조사하고, 지형 조건에 따른 생태계 회복 특성을 규명하고 있습니다.',
      description: [
        '산불은 식생 피복과 토양의 특성을 변화시켜 사면 침식의 위험성을 증가시킵니다. 그러나 산불 이후의 지형 조건과 토양 침식, 미생물 군집 변화 사이의 상호관계는 아직 충분히 규명되지 않았습니다. 본 연구실에서는 지형학과 미생물생태학의 다학제적 접근을 바탕으로, 현장 조사와 고해상도 지형 분석, 토양 미생물 군집 분석을 통합하여 산불 이후 지표 환경의 변화를 연구합니다.',
        '2025년 경북 산불 피해 지역을 대상으로 지형 조건에 따른 산불 이후의 침식과 미생물 군집의 변화를 분석하고 있습니다. 이를 통해 지형적 특성이 산불 이후 토양 생태계의 회복 과정에 미치는 영향을 파악하고, 향후 산불 피해지 관리 및 복원 전략 수립에 필요한 기초자료를 확보하고자 합니다.',
      ],
    },
  },
]
