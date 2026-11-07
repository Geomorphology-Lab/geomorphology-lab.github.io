# geomorphology-lab.github.io

Website for **Geomorphology Lab, Kyung Hee University** (경희대학교 지형학 연구실).

- Public address: <https://geomorphology.khu.ac.kr>
- GitHub Pages address: <https://geomorphology-lab.github.io>
- Stack: React 18 · TypeScript · Vite · Tailwind CSS v4 · GitHub Actions → GitHub Pages

> **Status: first design prototype.** Most text is temporary Korean wording that describes what will go there, for example "이곳에는 … 이 들어갑니다". It uses the same styling as the final content, so the layout already looks finished. Replace this text with verified information as it becomes available (see below).

---

## 1. Run locally

You need Node.js 20 or newer (22 recommended).

```bash
npm install
```

```bash
npm run dev
```

Open the address printed in the terminal (usually <http://localhost:5173>).

## 2. Build and check

```bash
npm run lint
```

```bash
npm run build
```

`npm run build` does three things:

1. Type-checks with TypeScript.
2. Builds the static site into `dist/`.
3. Runs `scripts/postbuild.mjs`, which copies `index.html` to `dist/<route>/index.html` and `dist/404.html`. That lets URLs such as `/research` load directly and survive a page refresh on GitHub Pages. The script also stops the build if `CNAME` is missing.

To preview the production build:

```bash
npm run preview
```

## 3. Deploy

Deployment is automatic. Every push to `main` runs `.github/workflows/deploy.yml`, which lints, builds and publishes `dist/` to GitHub Pages. It works on a free GitHub plan.

**One-time setup (an organization owner must do this before the first merge):**

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**. Until this changes, Pages keeps serving the raw files from the branch. After the merge that would be the unbuilt `index.html`, and the site would show a blank page.
3. Under **Custom domain**, confirm the domain is still `geomorphology.khu.ac.kr`, and enable **Enforce HTTPS** once GitHub has issued the certificate.

The custom domain is kept by `public/CNAME`, which is copied into every build. The root `CNAME` is also kept for compatibility. The university manages the DNS record, so no DNS changes are needed.

You can also start a deployment manually: **Actions → Deploy to GitHub Pages → Run workflow**.

## 4. Where the content lives

All replaceable text and data are in `src/content/`. You do not need to edit any component code.

| File | Contents |
| --- | --- |
| `site.ts` | Lab name, hero text, homepage About text, footer, Contact page (location and map), navigation menu |
| `research.ts` | Research areas (title, summary, description, image, related projects and publications) |
| `people.ts` | Principal investigator, graduate students, undergraduate researchers, alumni (shown on the Members page) |
| `publications.ts` | All publications (grouped by year on the page) |
| `news.ts` | News and gallery items, news categories |
| `heroSlides.ts` | Homepage hero slideshow (photos, order, timing) |
| `pageImages.ts` | Header photographs for Research, Members, Publications, News and Contact |
| `images.ts` | Fallback header image (404 page) |
| `types.ts` | Field definitions for every content type (reference) |

### Replacing temporary text

Find a sentence such as `'이곳에는 … 들어갑니다.'` in the files above and overwrite it with the real text. Keep the quotes `'…'` and the trailing commas. The new text appears with exactly the same design.

### Adding a research area

In the `researchAreas` array in `research.ts`, copy one `{ … }` block, paste it, and change its `id` to a new value (for example `'area-5'`). Numbers (01, 02 …) are assigned automatically in order. The homepage cards and the Research page update together.

### Adding a lab member

Add an entry to the appropriate array in `people.ts`:

```ts
{
  name: '홍길동',
  position: '박사과정',
  researchInterests: '하천 지형 변화, 퇴적물 이동',
  email: 'name@khu.ac.kr',            // Only when the member has approved public disclosure. A real address becomes a mailto link; placeholder text is shown as plain text.
  photo: { src: '/images/people/hong.jpg', alt: '홍길동 사진' },
},
```

- Photos go in `public/images/people/`. A 4:5 portrait ratio around 800×1000 px is recommended.
- If you omit `photo.src`, a neutral portrait image is shown.
- `email` becomes a mailto link automatically only when it is a valid email address.
- When a member graduates, move them to `alumni` in the form `{ name, degree, year, currentPosition }`.

### Adding a publication

Add an entry to the `publications` array in `publications.ts` (the file's header comment explains each field). Titles stay plain text; isotope names such as 10Be are set with superscripts automatically; the page adds the `&` before the last author.

```ts
{
  id: 'hong-2025-geomorphology',   // Any unique key
  year: 2025,                      // A number; the year filter is built from these
  title: 'Title of the article',
  authors: ['Hong, G.-D.', 'Kim, C.-S.'],
  venue: 'Geomorphology',
  volume: '450',                   // Optional
  issue: '2',                      // Optional
  pages: '109000',                 // Optional
  doi: '10.1016/j.geomorph.2025.109000', // Optional, without the https://doi.org/ prefix
  type: 'journal',                 // Optional, not shown on the page
},
```

The page groups entries by year (newest first) and shows an **All** button plus one button per year that has entries. Within a year, entries appear in the order they are listed. If there is no DOI, use `url: 'https://…'` instead. Enter only verified records.

### Adding news or gallery items

Add an item to the top of the `news` array in `news.ts`. `category` must be one of `'Fieldwork' | 'Conference' | 'Award' | 'Research'`. Photos go in `public/images/news/`, using a 3:2 ratio:

```ts
image: { src: '/images/news/field-2026-05.jpg', alt: '하천 현장 조사 모습' },
```

### Contact information and map

Edit the `contact` object in `site.ts`. The map is a Google Maps embed (no API key) built from `contact.map.query`; the "Open in Google Maps" link uses the same query. If the marker lands on the wrong building, change `query` to a more specific place name.

## 5. Replacing the photographs

### Homepage hero slideshow

The homepage top shows three landscape photos as a cross-dissolve slideshow. All settings are in **`src/content/heroSlides.ts`**.

| Setting | Value | Meaning |
| --- | --- | --- |
| `SLIDE_INTERVAL_MS` | 3000 | A new transition starts every 3 seconds |
| `CROSSFADE_DURATION_MS` | 1100 | Each cross-dissolve takes 1.1 seconds |
| `KEN_BURNS_MAX_SCALE` | 1.035 | Maximum scale of the slow zoom |

- The order of the `heroSlides` array is the order on screen: ① mountain ridges and sea of clouds → ② glacial valley → ③ canyon river.
- Each slide's `position` sets the crop focus separately for mobile and desktop, and `motion` sets its zoom direction.
- When the user's system has "reduce motion" enabled, only the first photo is shown, with no transitions or zoom. The pause button at the bottom left stops the slideshow.

**To replace or add a photo:**

1. Prepare the source photos (use only images whose copyright you own or have permission to use).
2. Run the following with the photos in the order they should appear. The script converts colour to sRGB, removes metadata (EXIF), and creates 960/1600/2560 px WebP files in `public/images/hero/`. Smaller originals are never upscaled.
   ```bash
   python3 scripts/optimize-hero-photos.py ridges.jpg valley.jpg canyon.jpg
   ```
3. If the file names change, update `files` and `alt` in `heroSlides.ts`. Also update the preload paths in `index.html` (the `hero-preload` comment marks them) to match the first photo.
4. Run `npm run build` to confirm there are no errors.

### Inner page header photos

Research, Members, Publications, News and Contact each have their own header photo, configured in `src/content/pageImages.ts` (files in `public/images/headers/`). To replace one:

```bash
python3 scripts/optimize-photo.py new-photo.jpg public/images/headers research-glacier
```

Using the same name overwrites the existing files, so no code change is needed. Adjust `position` (mobile / desktop) if an important feature is cropped. The 404 page still uses the code-rendered landscape in `src/assets/images/hero/`.

### About section contour map

A pale-cyan topographic contour map (rotated 25° clockwise) surfaces from the dark background behind the right side of "About the Laboratory" as you scroll, and fades back when scrolling up. The map itself never moves: it scrolls with the page like the background, only its visibility changes. Parts that stick out of the section are cropped, and its top and bottom edges fade into the navy, so it never touches the hero photo. The behaviour is in `src/components/home/ContourReveal.tsx` and the look is in the `.contour-*` rules at the end of `src/styles/index.css`:

- `--contour-max` is the final opacity (0.36 on desktop, lower on tablet and phone), `--contour-blur` the starting blur, `--contour-rotate` the angle, `--contour-w` / `--contour-right` the size and position.
- The image (`src/assets/images/about/contour-map.webp`) is used as a mask, so only its alpha matters; the line colour is the site accent colour. To use another map, replace the file with a transparent PNG/WebP of any square shape.
- With "reduce motion" enabled in the system, a static, faint version is shown instead.

### Research card hover photos

Each Home research card reveals a photograph on hover or keyboard focus. The photos are set per area as `cardPhoto` in `src/content/research.ts` (files in `public/images/research/card-*`); `position` chooses which part stays visible in the card crop. Create new sizes with `python3 scripts/optimize-content-image.py <photo> public/images/research <name> 1000 600`. Touch devices never download these photos.

### Homepage About image

The braided-river photo is configured in `homeAbout.image` in `src/content/site.ts` (files in `public/images/about/`, created with `scripts/optimize-photo.py`).

### Research, people and news photos

Put files under `public/images/…` and add `src` and `alt` to the matching content entry. Where there is no photo, a topographic-contour pattern is shown in the same frame size.

## 6. Project structure

```
src/
  components/
    common/        Shared components (headings, image frame, icons, etc.)
    layout/        Layout, footer
    navigation/    Header and mobile menu
    home/          Homepage sections (Hero, About text, Research Areas over the river image)
    research/      Research page blocks
    people/        Member cards
    publications/  Publication items
    news/          News cards
  content/         ← Content to edit
  pages/           Page components
  assets/images/   Hero image
  styles/          Global styles and design tokens (colors, fonts)
public/            Files copied as-is (CNAME, favicon, member and news photos)
scripts/           Build helper scripts
.github/workflows/ Automatic deployment
```

### Adding a new page

1. Write a component in `src/pages/`.
2. Add a `<Route>` in `src/App.tsx`.
3. Add a menu item to `navigation` in `src/content/site.ts`.
4. Add the path to the `routes` array in `scripts/postbuild.mjs`.

## 7. Notes for future maintainers

- **Only verified information**: do not publish publications, member details or contact details until they are confirmed.
- **Image licensing**: use only photos the lab owns or has permission to use. Do not hotlink images found in search results.
- **Accessibility**: always add an `alt` description to new images.
- **Before you push**: run `npm run build` locally to confirm there are no errors. If the build fails on `main`, the site is not updated, and the previous version stays live.
- Design tokens (colors, fonts) are in the `@theme` block of `src/styles/index.css`.
- Fonts (Inter and Pretendard) are bundled through npm packages, so the site does not depend on an external font CDN.
