import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      {t.footer} ·{' '}
      <a
        href="https://github.com/e-altunel/e-altunel.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.footerSource}
      </a>
    </footer>
  )
}
