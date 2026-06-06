import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type ThemePref = 'light' | 'dark' | 'system'

interface ThemeContextValue {
  pref: ThemePref
  setPref: (p: ThemePref) => void
  resolved: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const STORAGE_KEY = 'cv-theme'

function resolveTheme(pref: ThemePref): 'light' | 'dark' {
  if (pref === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
  return pref
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [pref, setPrefState] = useState<ThemePref>(
    () => (localStorage.getItem(STORAGE_KEY) as ThemePref) ?? 'system'
  )
  const [resolved, setResolved] = useState<'light' | 'dark'>(() =>
    resolveTheme(pref)
  )

  const apply = (p: ThemePref) => {
    const r = resolveTheme(p)
    document.documentElement.setAttribute('data-theme', r)
    setResolved(r)
  }

  const setPref = (p: ThemePref) => {
    localStorage.setItem(STORAGE_KEY, p)
    setPrefState(p)
    apply(p)
  }

  // Keep in sync with OS preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      if (pref === 'system') apply('system')
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [pref])

  // Initial apply
  useEffect(() => {
    apply(pref)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeContext.Provider value={{ pref, setPref, resolved }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider')
  return ctx
}
