/**
 * Hidden message for visitors who open the browser's developer tools (F12 → Console).
 * It only writes to the console: nothing in the page UI changes.
 */

// The text below is printed exactly as written (spaces and line breaks included). Do not reformat it.
const MESSAGE = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━༻❁༺━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 
    랩 홈페이지의 이곳까지 당도한 당신,
    훌륭한 연구자의 자질을 갖고 계십니다 ✧⁺⸜(･ ᗜ ･ )⸝⁺✧
    Geomorphology Lab에서 당신의 재능을 꽃피워 보세요!

              ∘₊✧ Contact: ara.jeong@khu.ac.kr ✧₊∘

                                          - 2026년도 학부연구생 드림.
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━༻❁༺━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`

// Muted lavender (#906fc9): about 4:1 contrast on both light and dark console backgrounds.
// A monospace stack with Korean-capable fallbacks keeps the box-drawing characters as even as the font allows.
const STYLE = [
  'color: #906fc9',
  'font-size: 14px',
  'line-height: 1.8',
  "font-family: 'D2Coding', 'Noto Sans Mono CJK KR', 'Nanum Gothic Coding', ui-monospace, SFMono-Regular, Menlo, Consolas, 'Malgun Gothic', 'Apple SD Gothic Neo', monospace",
].join('; ')

const FLAG = '__geomorphologyLabEasterEgg__'

/** Prints the message once per page load (guarded against React Strict Mode, hot reload and repeat calls). */
export function printEasterEgg() {
  if (typeof window === 'undefined' || typeof console === 'undefined') return
  const w = window as unknown as Record<string, unknown>
  if (w[FLAG]) return
  w[FLAG] = true
  console.log('%c' + MESSAGE, STYLE)
}
