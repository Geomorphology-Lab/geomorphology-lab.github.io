import { useCallback, useEffect, useState } from 'react'
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
  const setLang = useCallback((l: Lang) => {
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
