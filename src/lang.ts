import { createContext, useContext } from 'react'

/**
 * Site language: English by default; the button at the right end of the navigation bar switches to Korean.
 * Only selected body text has a Korean version (the About section paragraphs on Home and the Research page body);
 * headings, navigation and everything else stay in English. The choice is remembered in this browser.
 * The provider is in i18n.tsx.
 */
export type Lang = 'en' | 'ko'

export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'en', setLang: () => {} })

export const useLang = () => useContext(LangContext)

/** Picks the Korean text when the site is in Korean and a Korean version exists, otherwise the English one. */
export function pick<T>(lang: Lang, en: T, ko: T | undefined): { value: T; lang: Lang } {
  return lang === 'ko' && ko !== undefined ? { value: ko, lang: 'ko' } : { value: en, lang: 'en' }
}
