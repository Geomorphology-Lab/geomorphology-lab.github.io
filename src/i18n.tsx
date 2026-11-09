import { useCallback, useEffect, useRef, useState } from 'react'
import { LangContext, type Lang } from './lang'

const KEY = 'geomorphology-lab-lang'

function readStored(): Lang {
  try {
    return window.localStorage.getItem(KEY) === 'ko' ? 'ko' : 'en'
  } catch {
    return 'en'
  }
}

/** Holds the site language (see lang.ts) and remembers the visitor's choice. */
export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStored)
  const langRef = useRef(lang)
  const timer = useRef(0)
  const setLang = useCallback((l: Lang) => {
    if (l === langRef.current) return
    langRef.current = l
    // For half a second the translated text fades in softly (.lang-swap in index.css); not on first load, and not with reduced motion
    const root = document.documentElement
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.dataset.swapping = ''
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => delete root.dataset.swapping, 700)
    }
    setLangState(l)
    try {
      window.localStorage.setItem(KEY, l)
    } catch {
      /* private mode or blocked storage: the choice simply is not remembered */
    }
  }, [])
  useEffect(() => {
    document.documentElement.dataset.lang = lang
  }, [lang])
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}
