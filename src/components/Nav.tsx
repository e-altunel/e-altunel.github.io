import { NavLink } from 'react-router-dom'
import ThemeSelector from './ThemeSelector'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '../context/LanguageContext'

function NavIcon({ d }: { d: string }) {
  return (
    <svg
      className="nav-icon"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}

export default function Nav() {
  const { t } = useLanguage()
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    'nav-link' + (isActive ? ' active' : '')

  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand" end>
          [EA]
        </NavLink>
        <NavLink to="/" className={linkClass} end aria-label={t.nav.cv}>
          <NavIcon d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-9 3h2v2h-2zm0 4h2v2h-2zM8 10h2v2H8zm0 4h2v2H8zm8-4h-2v2h2zm0 4h-2v2h2zM5 3h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" />
          <span>{t.nav.cv}</span>
        </NavLink>
        <NavLink
          to="/projects"
          className={linkClass}
          aria-label={t.nav.projects}
        >
          <NavIcon d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z" />
          <span>{t.nav.projects}</span>
        </NavLink>
        <NavLink to="/games" className={linkClass} aria-label={t.nav.games}>
          <NavIcon d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          <span>{t.nav.games}</span>
        </NavLink>
        <LanguageSelector />
        <ThemeSelector />
      </div>
    </nav>
  )
}
