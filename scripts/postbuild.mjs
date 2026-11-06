// GitHub Pages serves static files only. To make every route load correctly on
// a direct visit or a page refresh (e.g. /research), copy the built index.html
// into a folder for each route, and to 404.html for unknown paths.
import { copyFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const index = join(dist, 'index.html')
// Keep this list in sync with the routes in src/content/site.ts
const routes = ['about', 'research', 'people', 'publications', 'news', 'contact']

if (!existsSync(index)) throw new Error('dist/index.html not found - run vite build first')
for (const route of routes) {
  mkdirSync(join(dist, route), { recursive: true })
  copyFileSync(index, join(dist, route, 'index.html'))
}
copyFileSync(index, join(dist, '404.html'))
if (!existsSync(join(dist, 'CNAME'))) throw new Error('dist/CNAME missing - custom domain would be lost')
console.log(`postbuild: wrote ${routes.length} route pages + 404.html; CNAME present`)
