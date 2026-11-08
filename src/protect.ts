/**
 * Photo protection: no dragging a photo out of the page and no right-click menu (save image) on photos.
 * Text selection is limited in CSS (index.css); the rest of the right-click menu is left alone.
 * This only deters casual saving; it cannot stop determined copying.
 */
export function protectPhotos() {
  if (typeof document === 'undefined') return
  const isPhoto = (t: EventTarget | null) => t instanceof Element && !!t.closest('img, picture')
  document.addEventListener('contextmenu', (e) => {
    if (isPhoto(e.target)) e.preventDefault()
  })
  document.addEventListener('dragstart', (e) => {
    if (isPhoto(e.target)) e.preventDefault()
  })
}
