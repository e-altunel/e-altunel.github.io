import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { LANGUAGES, type Lang } from '../i18n/translations'

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

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  const current = LANGUAGES.find((l) => l.id === lang) ?? LANGUAGES[0]

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
    <div className="theme-menu-wrap" ref={wrapRef}>
      <button
        className="theme-btn"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="lang-flag">{current.flag}</span>
        <span className="lang-label">{current.id.toUpperCase()}</span>
        <ChevronIcon />
      </button>

      <div className={`theme-dropdown${open ? ' open' : ''}`}>
        {LANGUAGES.map((l) => (
          <button
            key={l.id}
            className={`theme-option${lang === l.id ? ' selected' : ''}`}
            onClick={() => {
              setLang(l.id as Lang)
              setOpen(false)
            }}
          >
            <span>{l.flag}</span>
            {l.label}
          </button>
        ))}
      </div>
    </div>
  )
}
