# geomorphology-lab.github.io

**경희대학교 지형학 연구실(Geomorphology Lab, Kyung Hee University)** 웹사이트입니다.

- 공개 주소: <https://geomorphology.khu.ac.kr>
- GitHub Pages 주소: <https://geomorphology-lab.github.io>
- 기술 스택: React 18 · TypeScript · Vite · Tailwind CSS v4 · GitHub Actions → GitHub Pages

> **상태:** 홈, Research, Members(교수님), Contact는 실제 내용으로 채워져 있습니다. Publications 목록은 공개 자료로 정리한 초안이며 교수님의 최종 확인이 필요합니다(`publications.ts` 맨 위 주석). Gallery 항목과 일부 구성원 정보처럼 아직 정해지지 않은 곳에는 그 자리에 들어갈 내용을 설명하는 임시 한국어 문구(예: "이곳에는 … 이 들어갑니다")가 남아 있습니다(`news.ts`, `people.ts` 등). 최종 콘텐츠와 같은 스타일이라 레이아웃은 완성된 모습으로 보입니다. 확인된 정보가 생기는 대로 교체하세요(아래 참고).

**사이트 구성:** Home · Research · Members(Professor / Current Members / Alumni 탭) · Publications · Gallery · Contact. 색은 검정·흰색을 기본으로 하고, 남색(`#132433`, `--color-navy`)을 강조색으로 씁니다.

---

## 1. Run locally

Node.js 20 이상이 필요합니다(22 권장).

```bash
npm install
```

```bash
npm run dev
```

터미널에 표시되는 주소(보통 <http://localhost:5173>)를 여세요.

## 2. Build and check

```bash
npm run lint
```

```bash
npm run build
```

`npm run build`는 세 가지 작업을 합니다.

1. TypeScript로 타입을 검사합니다.
2. 정적 사이트를 `dist/`에 빌드합니다.
3. `scripts/postbuild.mjs`를 실행해 `index.html`을 `dist/<route>/index.html`과 `dist/404.html`로 복사합니다. 덕분에 `/research` 같은 주소를 바로 열거나 새로고침해도 GitHub Pages에서 페이지가 정상적으로 열립니다. 이 스크립트는 `CNAME`이 없으면 빌드를 중단합니다.

배포용 빌드를 미리 보려면 다음을 실행하세요.

```bash
npm run preview
```

## 3. Deploy

배포는 자동입니다. `main`에 push할 때마다 `.github/workflows/deploy.yml`이 실행되어 lint와 빌드를 거친 뒤 `dist/`를 GitHub Pages에 게시합니다. 무료 GitHub 요금제에서도 동작합니다.

**최초 1회 설정(첫 머지 전에 조직 소유자가 해야 함):**

1. 저장소의 **Settings → Pages**를 엽니다.
2. **Build and deployment → Source**에서 **GitHub Actions**를 선택합니다. 이 설정을 바꾸기 전까지 Pages는 브랜치의 원본 파일을 그대로 보여 줍니다. 그러면 머지 후에는 빌드되지 않은 `index.html`이 게시되어 빈 화면이 나옵니다.
3. **Custom domain**에서 도메인이 여전히 `geomorphology.khu.ac.kr`인지 확인하고, GitHub가 인증서를 발급하면 **Enforce HTTPS**를 켭니다.

사용자 지정 도메인은 모든 빌드에 복사되는 `public/CNAME`으로 유지됩니다. 호환성을 위해 루트의 `CNAME`도 남겨 두었습니다. DNS 레코드는 학교에서 관리하므로 DNS를 바꿀 필요는 없습니다.

배포를 직접 시작할 수도 있습니다: **Actions → Deploy to GitHub Pages → Run workflow**.

## 4. Where the content lives

바꿀 수 있는 문구와 데이터는 모두 `src/content/`에 있습니다. 컴포넌트 코드는 수정하지 않아도 됩니다.

| 파일 | 내용 |
| --- | --- |
| `site.ts` | 연구실 이름, 히어로 문구, 홈 About 문구와 Research Areas 위 이미지, Contact 페이지(위치, 지도, 학부연구생 모집 안내), 푸터 주소, 내비게이션 메뉴 |
| `research.ts` | 연구 분야(제목, 요약, 설명, 이미지, 관련 과제와 논문) |
| `people.ts` | 책임연구자, 대학원생, 학부연구생, 졸업생(Members 페이지에 표시. 대학원생과 학부연구생은 Current Members 탭에 한 목록으로 이어서 표시) |
| `publications.ts` | 전체 논문 목록(페이지에서는 연도별로 묶어 표시) |
| `news.ts` | Gallery 페이지 항목(소식과 사진), 항목 분류 |
| `heroSlides.ts` | 홈 히어로 사진(현재 한 장)과 슬라이드쇼 설정 |
| `pageImages.ts` | Research, Members, Publications, Gallery, Contact의 헤더 사진 |
| `images.ts` | 예비 헤더 이미지(404 페이지, 헤더 사진을 불러오지 못할 때) |
| `types.ts` | 모든 콘텐츠 유형의 필드 정의(참고용) |

### Replacing temporary text

위 파일에서 `'이곳에는 … 들어갑니다.'` 같은 문장을 찾아 실제 문구로 덮어쓰세요. 따옴표 `'…'`와 줄 끝의 쉼표는 그대로 두어야 합니다. 새 문구는 같은 디자인으로 그대로 표시됩니다.

### Adding a research area

`research.ts`의 `researchAreas` 배열에서 `{ … }` 블록 하나를 복사해 붙여 넣고, `id`를 새 값(예: `'area-5'`)으로 바꾸세요. 번호(01, 02 …)는 순서대로 자동으로 붙습니다. 홈의 카드와 Research 페이지가 함께 바뀝니다.

### Adding a lab member

`people.ts`의 해당 배열에 항목을 추가하세요.

```ts
{
  name: '홍길동',
  position: '박사과정',
  researchInterests: '하천 지형 변화, 퇴적물 이동',
  email: 'name@khu.ac.kr',            // 본인이 공개에 동의한 경우에만. 실제 주소는 mailto 링크가 되고, 임시 문구는 일반 텍스트로 표시됩니다.
  photo: { src: '/images/people/hong.jpg', alt: '홍길동 사진' },
},
```

- 사진은 `public/images/people/`에 넣습니다. 약 800×1000 px의 4:5 세로 비율을 권장합니다.
- `photo.src`를 생략하면 중립적인 인물 이미지가 표시됩니다.
- `email`은 올바른 이메일 주소일 때만 자동으로 mailto 링크가 됩니다.
- 구성원이 졸업하면 `{ name, degree, year, currentPosition }` 형식으로 `alumni`로 옮기세요.

### Adding a publication

`publications.ts`의 `publications` 배열에 항목을 추가하세요(각 필드 설명은 파일 맨 위 주석에 있습니다). 제목은 일반 텍스트로 쓰면 되고, 10Be 같은 동위원소 이름은 자동으로 위첨자 처리되며, 마지막 저자 앞의 `&`도 페이지에서 자동으로 붙습니다.

```ts
{
  id: 'hong-2025-geomorphology',   // 겹치지 않는 아무 키
  year: 2025,                      // 숫자. 연도 필터가 이 값으로 만들어집니다
  title: 'Title of the article',
  authors: ['Hong, G.-D.', 'Kim, C.-S.'],
  venue: 'Geomorphology',
  volume: '450',                   // 선택
  issue: '2',                      // 선택
  pages: '109000',                 // 선택
  doi: '10.1016/j.geomorph.2025.109000', // 선택. https://doi.org/ 접두어 없이
  type: 'journal',                 // 선택. 페이지에는 표시되지 않음
},
```

페이지는 항목을 연도별로(최신순) 묶고, **All** 버튼과 항목이 있는 연도마다 버튼을 하나씩 보여 줍니다. 같은 연도 안에서는 목록에 적힌 순서대로 나옵니다. DOI가 없으면 대신 `url: 'https://…'`을 쓰세요. 확인된 기록만 입력하세요.

### Adding news or gallery items

Gallery 페이지(주소 `/news`)는 모든 항목을 분류 탭 없이 한 목록으로 보여 줍니다. `news.ts`의 `news` 배열 맨 위에 항목을 추가하세요(위에 있을수록 먼저 표시). `category`는 카드에 작은 라벨로만 표시되며 `'Fieldwork' | 'Conference' | 'Award' | 'Research'` 중 하나여야 합니다. 사진은 3:2 비율로 `public/images/news/`에 넣습니다.

```ts
image: { src: '/images/news/field-2026-05.jpg', alt: '하천 현장 조사 모습' },
```

### Contact information and map

`site.ts`의 `contact` 객체를 수정하세요. 지도는 `contact.map.query`로 만드는 Google 지도 임베드(API 키 불필요)이고, "Open in Google Maps" 링크도 같은 검색어를 씁니다. 표시가 엉뚱한 건물에 찍히면 `query`를 더 구체적인 장소 이름으로 바꾸세요. 푸터의 연구실 주소도 같은 `contact` 내용(`location`, `map.address`)을 그대로 씁니다.

Contact 페이지 왼쪽의 학부연구생 모집 안내("Join Us | Undergraduate Researchers")는 `contact.prospective`에 있습니다. 섹션마다 항목 목록이 있고, 각 항목은 글 조각의 배열이며 `{ bold: '…' }`로 쓴 조각은 굵게 표시됩니다.

## 5. Replacing the photographs

### Korean mode (한국어 버튼)

내비게이션 바 오른쪽 끝의 버튼을 누르면 일부 본문이 한국어로 바뀝니다. 사이트는 영어로 열립니다.
한국어 버전이 있는 곳은 홈 **About** 문단(`src/content/site.ts`의 `homeAbout.paragraphsKo`), 홈 **Research Areas** 소개 문장과 카드 본문, **Research** 페이지 본문(`src/content/research.ts`의 `researchIntro.leadKo`와 각 분야의 `ko` 필드: `summary`, `question`, `description`)뿐입니다. 한국어 모드에서는 메인 제목 아래에 "경희대학교 지형학 실험실" 소제목(`hero.subtitleKo`)도 나타납니다.
제목, 소제목, 내비게이션과 그 밖의 모든 페이지는 영어로 유지됩니다. 방문자가 고른 언어는 그 브라우저에 기억됩니다(`src/i18n.tsx`, `src/lang.ts`).

### Homepage hero slideshow

홈 맨 위에는 협곡 하천 사진 한 장(`river-canyon`, 원래 슬라이드 세 장 중 세 번째)이 처음 나타날 때의 페이드와 아주 느린 줌과 함께 표시되며, 다른 사진으로 바뀌지 않습니다. 사진이 한 장일 때는 진행 표시와 일시정지 버튼도 나오지 않습니다. 모든 설정은 **`src/content/heroSlides.ts`**에 있고, `heroSlides` 배열에 항목을 더 추가하면 아래 설정대로 크로스 디졸브 슬라이드쇼가 다시 동작합니다. 예전 슬라이드 사진 두 장(`mountain-ridges-sea-of-clouds`, `glacial-valley`)은 `public/images/hero/`에 남아 있습니다.

| 설정 | 값 | 의미 |
| --- | --- | --- |
| `SLIDE_INTERVAL_MS` | 3000 | 3초마다 새 전환이 시작됨 |
| `CROSSFADE_DURATION_MS` | 1100 | 크로스 디졸브 한 번에 1.1초 |
| `KEN_BURNS_MAX_SCALE` | 1.035 | 느린 줌의 최대 배율 |

- `heroSlides` 배열의 순서가 화면에 나오는 순서입니다(현재는 협곡 하천 한 장).
- 각 슬라이드의 `position`은 모바일과 데스크톱의 잘림 기준점을 따로 정하고, `motion`은 줌 방향을 정합니다.
- 사용자 시스템에서 "동작 줄이기"가 켜져 있으면 첫 번째 사진만 전환과 줌 없이 표시됩니다. 슬라이드가 두 장 이상이면 왼쪽 아래에 진행 표시와 일시정지 버튼이 나타납니다.

**사진을 교체하거나 추가하려면:**

1. 원본 사진을 준비합니다(저작권을 보유했거나 사용 허가를 받은 이미지만 사용).
2. 보여 줄 순서대로 사진을 넣어 다음을 실행합니다. 스크립트가 색 공간을 sRGB로 바꾸고 메타데이터(EXIF)를 지운 뒤 `public/images/hero/`에 960/1600/2560 px WebP 파일을 만듭니다. 원본보다 크게 늘리지는 않습니다.
   ```bash
   python3 scripts/optimize-hero-photos.py ridges.jpg valley.jpg canyon.jpg
   ```
   (스크립트 안의 `NAMES`가 출력 파일 이름입니다. 다른 이름을 쓰려면 그 목록을 고치세요.)
3. 파일 이름이 바뀌면 `heroSlides.ts`의 `files`와 `alt`를 고치세요. `index.html`의 미리 불러오기 경로(`hero-preload` 주석이 표시된 곳)도 화면에 처음 보이는 사진에 맞게 고쳐야 합니다. 지금은 `river-canyon` 사진을 미리 불러옵니다.
4. `npm run build`를 실행해 오류가 없는지 확인합니다.

### Inner page header photos

Research, Members, Publications, Gallery, Contact에는 각각 헤더 사진이 있으며, `src/content/pageImages.ts`에서 설정합니다(파일은 `public/images/headers/`). 교체하려면:

```bash
python3 scripts/optimize-photo.py new-photo.jpg public/images/headers research-glacier
```

같은 이름을 쓰면 기존 파일을 덮어쓰므로 코드는 고치지 않아도 됩니다. 중요한 부분이 잘리면 `position`(모바일 / 데스크톱)을 조정하세요. 404 페이지는 여전히 `src/assets/images/hero/`의 코드로 그린 풍경 이미지를 씁니다.

### About section contour map

홈의 About 섹션은 히어로와 이어지는 검정 배경이고(제목은 흰색, 본문은 밝은 회색), "About the Laboratory" 오른쪽 뒤편에 옅은 회색 지형 등고선도(오른쪽으로 25° 회전)가 스크롤에 따라 떠오르고, 위로 스크롤하면 다시 사라집니다. 지도 자체는 움직이지 않고 배경처럼 페이지와 함께 스크롤되며, 보이는 정도만 바뀝니다. 섹션 밖으로 나가는 부분은 잘리고 위아래 가장자리는 검정 배경으로 흐려지므로 히어로 사진에 닿지 않습니다. 떠오르는 효과는 제목이 화면 아래쪽에서 맨 위로 스크롤되는 동안 진행됩니다(`ContourReveal.tsx` 맨 위의 `START`와 `END`. 범위를 넓히면 더 느려집니다). 동작은 `src/components/home/ContourReveal.tsx`에, 모양은 `src/styles/index.css` 끝부분의 `.contour-*` 규칙에 있습니다.

- `--contour-max`는 최종 불투명도(데스크톱 0.36, 태블릿과 휴대폰은 더 낮음), `--contour-blur`는 시작할 때의 흐림, `--contour-rotate`는 각도, `--contour-w`는 크기, `--contour-gap`은 글과 지도 사이 간격입니다(데스크톱에서는 지도가 글 단의 끝에서부터 배치되어 글자를 가리지 않고, 태블릿과 휴대폰은 `--contour-right`를 씁니다).
- 이미지(`src/assets/images/about/contour-map.webp`)는 마스크로 쓰이므로 알파 채널만 의미가 있고, 선 색은 어두운 배경에서의 강조색(옅은 회색 `#e4e4e4`)입니다. 다른 지도를 쓰려면 아무 정사각형 모양의 투명 PNG/WebP로 파일을 바꾸면 됩니다.
- 시스템에서 "동작 줄이기"가 켜져 있으면 움직임 없이 옅은 정지 화면이 표시됩니다.

### Research card hover photos

홈의 각 연구 카드는 마우스를 올리거나 키보드로 초점을 옮기면 사진이 나타납니다. 사진은 `src/content/research.ts`에서 분야별 `cardPhoto`로 설정합니다(파일은 `public/images/research/card-*`). 사진 위에는 검정 반투명 막이 깔리고 카드 글자가 흰색으로 바뀝니다. `position`은 카드에서 잘릴 때 보일 부분을 정합니다. 새 크기는 `python3 scripts/optimize-content-image.py <photo> public/images/research <name> 1000 600`으로 만드세요. 터치 기기에서는 이 사진들을 내려받지 않습니다.

### Homepage About image

About 섹션과 흰 Research Areas 섹션 사이에는 폭 전체를 채우는 산 능선 이미지 띠가 있습니다(`src/components/home/AboutVisual.tsx`, 설정은 `site.ts`의 `homeAbout.image`).

- **이미지:** 처음 사이트를 만들 때 쓰던 예비 풍경 이미지(`src/assets/images/hero/hero-2560.jpg`)를 흑백으로 바꾸고 어두운 부분에만 남색을 남긴 것입니다. `python3 scripts/tone-about-image.py`를 실행하면 `public/images/about/misty-ridges-{960,1600,2560}.webp`가 다시 만들어집니다.
- **이어짐:** 위쪽은 검정으로 흐려져 About 섹션과 경계 없이 이어지고(`.about-visual::after`), 아래쪽은 이미지 높이의 46%부터 흰색이 섞여 93%에서 완전히 흰색이 됩니다(`.about-visual` 마스크). "RESEARCH AREAS"와 제목은 완전히 흰 바탕에 놓입니다.
- **모션:** 이미지가 화면에 들어오면 옅은 어두움이 걷히며 능선 뒤 빛이 은은하게 커진 뒤 멈추고(스크롤 연동), 능선 사이 옅은 안개 두 겹이 아주 느리게 옆으로 흐릅니다(220초 / 140초에 한 바퀴, 화면 밖에서는 멈춤). 세기는 `index.css`의 `.about-visual-glow`, `.about-visual-dim`, `.about-visual-mist*` 규칙에서 조정합니다. "동작 줄이기"가 켜져 있으면 움직임 없이 빛이 다 떠오른 정지 화면이 보입니다.

### Research, people and news photos

파일을 `public/images/…` 아래에 넣고, 해당 콘텐츠 항목에 `src`와 `alt`를 추가하세요. 사진이 없는 곳에는 같은 크기의 프레임에 지형 등고선 무늬가 표시됩니다.

## 6. Project structure

```
src/
  components/
    common/        공통 컴포넌트(제목, 이미지 프레임, 아이콘 등)
    layout/        레이아웃, 푸터
    navigation/    헤더와 모바일 메뉴
    home/          홈 섹션(Hero, About 문구와 등고선, 산 이미지 띠, Research Areas)
    research/      Research 페이지 블록
    people/        구성원 카드
    publications/  논문 항목
    news/          소식 카드
  content/         ← 수정할 콘텐츠
  pages/           페이지 컴포넌트
  assets/images/   예비 풍경 이미지, 등고선도 마스크
  styles/          전역 스타일과 디자인 토큰(색, 글꼴)
public/            그대로 복사되는 파일(CNAME, 파비콘, 히어로·헤더·연구·구성원 사진)
scripts/           빌드 보조 스크립트
.github/workflows/ 자동 배포
```

### Adding a new page

1. `src/pages/`에 컴포넌트를 작성합니다.
2. `src/App.tsx`에 `<Route>`를 추가합니다.
3. `src/content/site.ts`의 `navigation`에 메뉴 항목을 추가합니다.
4. `scripts/postbuild.mjs`의 `routes` 배열에 경로를 추가합니다.

## 7. Notes for future maintainers

- **확인된 정보만**: 논문, 구성원 정보, 연락처는 확인되기 전까지 게시하지 마세요.
- **이미지 저작권**: 연구실이 보유했거나 사용 허가를 받은 사진만 쓰세요. 검색 결과에서 찾은 이미지를 직접 링크하지 마세요.
- **접근성**: 새 이미지에는 항상 `alt` 설명을 넣으세요.
- **push하기 전에**: 로컬에서 `npm run build`를 실행해 오류가 없는지 확인하세요. `main`에서 빌드가 실패하면 사이트는 갱신되지 않고 이전 버전이 그대로 유지됩니다.
- 디자인 토큰(색, 글꼴)은 `src/styles/index.css`의 `@theme` 블록에 있습니다. 어두운 영역(메뉴, 히어로, 헤더, 푸터)은 검정, 내용 영역은 흰색(`.theme-paper`)이며, 흰 바탕에서의 강조색은 `--color-navy`(`#132433`)입니다.
- **복사·저장 방지:** 본문 텍스트는 드래그로 선택되지 않고(`index.css`의 `body { user-select: none }`), 사진은 끌어서 저장하거나 우클릭 저장을 할 수 없습니다(`src/protect.ts`). 이메일, 주소, 링크는 복사할 수 있습니다(`select-text` 클래스). 소스 보기나 스크린샷으로는 여전히 복사할 수 있는 가벼운 장치입니다.
- 글꼴(Inter와 Pretendard)은 npm 패키지로 함께 번들되므로 외부 글꼴 CDN에 의존하지 않습니다.

### Navigation drop-down, recruitment guide, header photo brightness

- **드롭다운 메뉴:** 상단 바의 *Research*나 *Members*에 마우스를 올리거나 Tab 키로 이동하면 하위 항목 목록이 열립니다. 링크는 `navigation`(`src/content/site.ts`) 각 항목의 `children`입니다. `/members#current` 같은 Members 링크는 해당 탭을 엽니다(`#` 뒤의 주소를 `MembersPage`가 읽습니다. `#professor`, `#current`, `#alumni`). Research 목록은 `research.ts`에서 만들어지므로 항상 네 연구 분야와 일치합니다. 모바일 메뉴도 각 항목 아래에 같은 링크를 보여 줍니다. 드롭다운 패널은 불투명도 80%의 검정에 뒤쪽을 흐리게 비추는 유리 효과를 씁니다(`SiteHeader.tsx`).
- **학부연구생 모집 안내:** Contact 페이지의 모집 안내 문구는 `site.ts`의 `contact.prospective`에서 고칩니다(위 "Contact information and map" 참고).
- **헤더 사진 어둡게 하기:** `src/content/pageImages.ts`에서 사진에 `dim`(예: `0.6`)을 설정하세요. Gallery의 용암 사진이 이 설정을 씁니다.

### Browser-tab icon

브라우저 탭에 보이는 아이콘은 학교 엠블럼을 검정 바탕에 흰색으로 넣은 것입니다(검정 정사각형 위의 흰 엠블럼). 파일은 `public/favicon.ico`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`이며, 엠블럼 이미지로 `python3 scripts/make-favicon.py <emblem.png>`를 실행해 만듭니다(원본 이미지는 저장소에 보관하지 않음). 브라우저는 탭 아이콘을 오래 캐시하므로, 바꾼 뒤에는 강력 새로고침이나 새 비공개 창이 필요할 수 있습니다.
