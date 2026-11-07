/**
 * Hidden message for visitors who open the browser's developer tools (F12 → Console).
 * It only writes to the console: nothing in the page UI changes.
 */

// The text is printed exactly as written (spaces, emoji and line breaks included). Do not reformat it.
const LINE_CREDIT = 'Built with ♡'

/** The console turns a full https:// address into a clickable link. */
const GITHUB_URL = 'https://github.com/shkim03'
const LINE_BY = `by @shkim03 (${GITHUB_URL})`
const LINE_DEDICATION = '...and with a little extra love and admiration for Prof. Ara Jeong 🌷'

// One soft blue for all lines; mid-tone so it stays readable on both light and dark consoles.
// All lines share one size and spacing; only the first is bold and only the last is italic.
const BLUE = '#868cda'
const STYLE_SOFT = [`color: ${BLUE}`, 'font-size: 15px', 'line-height: 1.8']
const STYLE_CREDIT = [...STYLE_SOFT, 'font-weight: 700'].join('; ')
const STYLE_BY = STYLE_SOFT.join('; ')
const STYLE_DEDICATION = [...STYLE_SOFT, 'font-style: italic'].join('; ')

const FLAG = '__geomorphologyLabEasterEgg__'

/** Prints the message once per page load (guarded against React Strict Mode, hot reload and repeat calls). */
export function printEasterEgg() {
  if (typeof window === 'undefined' || typeof console === 'undefined') return
  const w = window as unknown as Record<string, unknown>
  if (w[FLAG]) return
  w[FLAG] = true

  console.log(
    `\n%c${LINE_CREDIT}\n%c${LINE_BY}\n\n%c${LINE_DEDICATION}\n`,
    STYLE_CREDIT,
    STYLE_BY,
    STYLE_DEDICATION,
  )
}
