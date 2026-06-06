import { useLanguage } from '../context/LanguageContext'

interface Game {
  icon: string
  title: string
  description: string
  path: string
}

/* ── Add your games here ────────────────────────────────────────── */
const GAMES: Game[] = [
  // Example — uncomment and fill in when you have games:
  // {
  //   icon: '🐍',
  //   title: 'Snake',
  //   description: 'Classic snake game. Use arrow keys to move.',
  //   path: '/games/snake',
  // },
]

function GameCard({ game }: { game: Game }) {
  return (
    <a
      href={game.path}
      className="game-card"
      style={{ textDecoration: 'none' }}
    >
      <div className="game-card-thumb">{game.icon}</div>
      <div className="game-card-body">
        <div className="game-card-title">{game.title}</div>
        <p className="game-card-desc">{game.description}</p>
      </div>
    </a>
  )
}

export default function Games() {
  const { t } = useLanguage()
  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-header-title">{t.games.title}</h1>
        <p className="page-header-sub">{t.games.subtitle}</p>
      </div>

      {GAMES.length > 0 ? (
        <div className="games-grid">
          {GAMES.map((g, i) => (
            <GameCard key={i} game={g} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">🎮</div>
          <div className="empty-state-title">{t.games.comingSoonTitle}</div>
          <p className="empty-state-text">
            {t.games.comingSoonText}{' '}
            <a
              href="https://github.com/e-altunel/e-altunel.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              repo
            </a>
          </p>
        </div>
      )}
    </main>
  )
}
