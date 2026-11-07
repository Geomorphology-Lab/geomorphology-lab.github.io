/**
 * Hidden message for visitors who open the browser's developer tools (F12 → Console).
 * It only writes to the console: nothing in the page UI changes.
 */

// The text is printed exactly as written (spaces, emoji and line breaks included). Do not reformat it.
const BORDER_TOP = '┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━༻❁༺━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓'
const BORDER_BOTTOM = '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━༻❁༺━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'
const LINE_CREDIT = '  Built with ♡ '

/** The console turns a full https:// address into a clickable link. */
const GITHUB_URL = 'https://github.com/shkim03'
const LINE_BY = `  by @shkim03 (${GITHUB_URL})`
const LINE_DEDICATION = '  and with a little extra love and admiration for Prof. Ara Jeong 🌷'

// Colours are mid-tone pinks so they stay readable on both light and dark consoles (about 3.4:1 to 5:1).
const STYLE_BORDER = [
  'color: #9f8294',
  'font-size: 14px',
  'line-height: 1.7',
  "font-family: 'D2Coding', 'Noto Sans Mono CJK KR', 'Nanum Gothic Coding', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
].join('; ')
const STYLE_CREDIT = ['color: #d44aa6', 'font-size: 18px', 'font-weight: 600', 'line-height: 1.8'].join('; ')
// The "by @shkim03 (…)" line and the dedication share one look; only the dedication is italic.
const STYLE_SOFT = ['color: #c2729a', 'font-size: 15px', 'line-height: 1.8']
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
    `\n%c${BORDER_TOP}\n\n%c${LINE_CREDIT}\n%c${LINE_BY}\n\n%c${LINE_DEDICATION}\n\n%c${BORDER_BOTTOM}\n`,
    STYLE_BORDER,
    STYLE_CREDIT,
    STYLE_BY,
    STYLE_DEDICATION,
    STYLE_BORDER,
  )
}
