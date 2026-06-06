import { useEffect, useRef, useState } from 'react'
import { useTheme, type ThemePref } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

const SunIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const MonitorIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

const ChevronIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

interface ThemeOption {
  id: ThemePref
  label: string
  icon: React.ReactNode
}

export default function ThemeSelector() {
  const { pref, setPref } = useTheme()
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  const OPTIONS: ThemeOption[] = [
    { id: 'system', label: t.theme.system, icon: <MonitorIcon /> },
    { id: 'light', label: t.theme.light, icon: <SunIcon /> },
    { id: 'dark', label: t.theme.dark, icon: <MoonIcon /> },
  ]

  const current = OPTIONS.find((o) => o.id === pref) ?? OPTIONS[0]

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="theme-menu-wrap" ref={wrapRef} style={{ marginLeft: 8 }}>
      <button
        className="theme-btn"
        aria-label="Change theme"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {current.icon}
        <span>{current.label}</span>
        <ChevronIcon />
      </button>

      <div className={`theme-dropdown${open ? ' open' : ''}`}>
        {OPTIONS.map((opt) => (
          <button
            key={opt.id}
            className={`theme-option${pref === opt.id ? ' selected' : ''}`}
            onClick={() => {
              setPref(opt.id)
              setOpen(false)
            }}
          >
            {opt.icon}
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
