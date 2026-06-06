import { createContext, useContext, useState, type ReactNode } from 'react'
import {
  TRANSLATIONS,
  type Lang,
  type Translations,
} from '../i18n/translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'cv-lang'

function detectLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'tr') return saved
  // Auto-detect from browser
  const browser = navigator.language.slice(0, 2).toLowerCase()
  return browser === 'tr' ? 'tr' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const setLang = (l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l)
    setLangState(l)
    document.documentElement.setAttribute('lang', l)
  }

  // Set initial lang attribute
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', lang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be inside LanguageProvider')
  return ctx
}
