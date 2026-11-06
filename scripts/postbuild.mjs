// GitHub Pages serves static files only. To make every route load correctly on
// a direct visit or a page refresh (e.g. /research), copy the built index.html
// into a folder for each route, and to 404.html for unknown paths.
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const index = join(dist, 'index.html')
// Keep this list in sync with the routes in src/content/site.ts
const routes = ['about', 'research', 'members', 'publications', 'news', 'contact']

if (!existsSync(index)) throw new Error('dist/index.html not found - run vite build first')
// Inner pages do not show the slideshow, so drop the homepage image preload there.
const innerHtml = readFileSync(index, 'utf8').replace(/\s*<!-- hero-preload:[\s\S]*?<link rel="preload" as="image"[^>]*>/, '')
for (const route of routes) {
  mkdirSync(join(dist, route), { recursive: true })
  writeFileSync(join(dist, route, 'index.html'), innerHtml)
}
writeFileSync(join(dist, '404.html'), innerHtml)

// Every hero slideshow image referenced in index.html must exist in the build.
for (const m of readFileSync(index, 'utf8').matchAll(/\/images\/hero\/[\w.-]+\.webp/g)) {
  if (!existsSync(join(dist, m[0]))) throw new Error(`missing hero image ${m[0]}`)
}
if (!existsSync(join(dist, 'CNAME'))) throw new Error('dist/CNAME missing - custom domain would be lost')
console.log(`postbuild: wrote ${routes.length} route pages + 404.html; CNAME present`)
