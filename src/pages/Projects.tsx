import { useLanguage } from '../context/LanguageContext'

interface Project {
  icon: string
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
}

/* ── Add your projects here ─────────────────────────────────────── */
const PROJECTS: Project[] = [
  {
    icon: '🛠️',
    title: '[Project Name]',
    description:
      'A short description of what this project does and what problem it solves. Add one or two sentences.',
    tags: ['C++', 'CMake'],
    githubUrl: 'https://github.com/e-altunel/[repo]',
  },
  {
    icon: '🌐',
    title: '[Project Name]',
    description:
      'Another project description. Mention the key tech, scale, or interesting engineering challenge.',
    tags: ['Python', 'Docker'],
    githubUrl: 'https://github.com/e-altunel/[repo]',
  },
  {
    icon: '⚙️',
    title: '[Project Name]',
    description:
      'Description of a third project. Keep it concise — visitors should get the idea in a glance.',
    tags: ['Go', 'Linux'],
    githubUrl: 'https://github.com/e-altunel/[repo]',
  },
]

const ExternalLinkIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage()
  return (
    <div className="project-card">
      <div className="project-card-icon">{project.icon}</div>
      <div className="project-card-title">{project.title}</div>
      <p className="project-card-desc">{project.description}</p>
      <div className="project-card-footer">
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {project.githubUrl && (
            <a
              className="project-link"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.github} <ExternalLinkIcon />
            </a>
          )}
          {project.demoUrl && (
            <a
              className="project-link"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.demo} <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-header-title">{t.projects.title}</h1>
        <p className="page-header-sub">{t.projects.subtitle}</p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </main>
  )
}
