import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

/* ── Small reusable pieces ──────────────────────────────────────── */
function Tag({ label }: { label: string }) {
  return <span className="tag">{label}</span>
}

interface ExperienceEntry {
  title: Record<string, string>
  company: Record<string, string>
  startDate: Record<string, string>
  endDate?: Record<string, string>
  bullets: Record<string, string>[]
  tags: string[]
}

/* ── Data — edit this section to fill in your details ───────────── */
const EXPERIENCE: ExperienceEntry[] = [
  {
    title: {
      en: 'Researcher',
      tr: 'Araştırmacı',
    },
    company: {
      en: 'Tübitak BİLGEM',
      tr: 'Tübitak BİLGEM',
    },
    startDate: {
      en: 'Dec 2025',
      tr: 'Ara 2025',
    },
    bullets: [
      {
        en: 'Developing software using Qt and C++',
        tr: 'Qt ve C++ kullanarak geliştirme yapıyorum',
      },
    ],
    tags: ['C++', 'Python', 'Typescript', 'Docker', 'Qt'],
  },
  {
    title: {
      en: 'Research Assistant & Scholar (Part Time)',
      tr: 'Aday Araştırmacı & Bursiyer (Yarı Zamanlı)',
    },
    company: {
      en: 'Tübitak BİLGEM',
      tr: 'Tübitak BİLGEM',
    },
    startDate: {
      en: 'Jul 2024',
      tr: 'Tem 2024',
    },
    endDate: {
      en: 'Nov 2025',
      tr: 'Kas 2025',
    },
    bullets: [
      {
        en: 'Developed software using C++ and Typescript',
        tr: 'C++ ve Typescript kullanarak geliştirme yaptım',
      },
    ],
    tags: ['C++', 'Python', 'Typescript', 'Docker', 'Qt', 'Angular', 'NestJS'],
  },
  {
    title: {
      en: 'Web Developer (Part Time)',
      tr: 'Web Geliştirici (Yarı Zamanlı)',
    },
    company: {
      en: 'Gebze Technical University Tübitak 1001 Project',
      tr: 'Gebze Teknik Üniversitesi Tübitak 1001 Projesi',
    },
    startDate: {
      en: 'Feb 2024',
      tr: 'Şub 2024',
    },
    endDate: {
      en: 'Jun 2024',
      tr: 'Haz 2024',
    },
    bullets: [
      {
        en: 'Developed a website that shows the real estate data on the map using React and Leaflet',
        tr: 'React ve Leaflet kullanarak harita üzerinde gayrimenkul verilerini gösteren bir web sitesi geliştirdim',
      },
      {
        en: 'Used Google Firebase for the hosting and database',
        tr: 'Barındırma ve veritabanı için Google Firebase kullandım',
      },
      {
        en: 'Used Firestore NoSQL database for storing the data',
        tr: 'Verileri depolamak için Firestore NoSQL veritabanını kullandım',
      },
      {
        en: 'Used Bootstrap for the design of the website',
        tr: 'Web sitesinin tasarımı için Bootstrap kullandım',
      },
    ],
    tags: ['React', 'Leaflet', 'Google Firebase', 'Firestore', 'Bootstrap'],
  },
  {
    title: {
      en: 'Electronics Team Member - Team Leader',
      tr: 'Elektronik Takım Üyesi - Takım Lideri',
    },
    company: {
      en: 'GTÜ Triton - Unmanned Underwater Vehicle (UUV)',
      tr: 'GTÜ Triton - İnsansız Su Altı Aracı (UUV)',
    },
    startDate: {
      en: '2023',
      tr: '2023',
    },
    endDate: {
      en: '2024',
      tr: '2024',
    },
    bullets: [
      {
        en: "Managed the design of the vehicle's PCBs",
        tr: 'Aracın PCB tasarımını yönettim',
      },
      {
        en: 'Designed the general electronic systems of the vehicle',
        tr: 'Aracın genel elektronik sistemlerini tasarladım',
      },
    ],
    tags: ['Electronics', 'PCB Design', 'Embedded Systems', 'Team Leadership'],
  },
  {
    title: {
      en: 'Software Team Member',
      tr: 'Yazılım Takım Üyesi',
    },
    company: {
      en: 'GTÜ Aren - Unmanned Aerial Vehicle (UAV)',
      tr: 'GTÜ Aren - İnsansız Hava Aracı (UAV)',
    },
    startDate: {
      en: '2021',
      tr: '2021',
    },
    endDate: {
      en: '2023',
      tr: '2023',
    },
    bullets: [
      {
        en: 'Oversaw the communication interface between the ground station and the UAV',
        tr: 'Yer istasyonu ile UAV arasındaki iletişim arayüzünü yönettim',
      },
      {
        en: 'Developed a program to adjust the angle of the propellers based on data from the UAVs controller, utilizing C++ and Arduino',
        tr: 'UAV denetleyicisinden gelen verilere göre pervane açısını ayarlayan bir program geliştirdim; C++ ve Arduino kullandım',
      },
      {
        en: 'Contributed to the development of autonomous task algorithms for the UAV, employing C++ and ROS2',
        tr: 'UAV için özerk görev algoritmalarının geliştirilmesine katkıda bulundum; C++ ve ROS2 kullandım',
      },
    ],
    tags: [
      'C++',
      'Arduino',
      'ROS2',
      'UAV',
      'Embedded Systems',
      'Communication',
    ],
  },
]

/* ── Page ────────────────────────────────────────────────────────── */
export default function CV() {
  const { t, lang } = useLanguage()

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-avatar">👤</div>
        <div className="hero-body">
          <h1 className="hero-name">Emirhan Altunel</h1>
          <p className="hero-title">{t.cv.title}</p>
          <p className="hero-summary">{t.cv.summary}</p>
          <div className="hero-links">
            <a className="hero-link" href="mailto:e.altunel@outlook.com">
              <MailIcon /> e.altunel@outlook.com
            </a>
            <a
              className="hero-link"
              href="https://github.com/e-altunel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon /> e-altunel
            </a>
            <a
              className="hero-link"
              href="https://linkedin.com/in/emirhan-altunel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <span className="hero-link">
              <LocationIcon /> İstanbul
            </span>
            <button className="pdf-btn" onClick={() => window.print()}>
              <DownloadIcon /> {t.cv.downloadPdf}
            </button>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">{t.cv.sections.skills_interest}</h2>
        <div className="skills-grid">
          <SkillGroup
            label={t.cv.skillGroups.languages}
            items={[
              'C/C++',
              'Python',
              'JavaScript',
              'TypeScript',
              'Rust',
              'SQL',
              'Java',
            ]}
          />
          <SkillGroup
            label={t.cv.skillGroups.systemsTools}
            items={[
              'Linux',
              'Git',
              'Docker',
              'CMake',
              'GDB',
              'perf',
              'heaptrack',
              'valgrind',
            ]}
          />
          <SkillGroup
            label={t.cv.skillGroups.webBackend}
            items={[
              'React',
              'Angular',
              'NestJS',
              'Express',
              'Bun',
              'Firebase',
              'Fastify',
              'FastAPI',
            ]}
          />
          <SkillGroup
            label={t.cv.skillGroups.interests}
            items={[
              'Game Development',
              'Concurrent Programming',
              'Systems Programming',
            ]}
          />
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">{t.cv.sections.experience}</h2>
        {EXPERIENCE.map((e, i) => (
          <div className="card" key={i}>
            <div className="card-header">
              <div>
                <div className="card-title">
                  {e.title[lang] ?? e.title['en']}
                </div>
                <div className="card-subtitle">
                  {e.company[lang] ?? e.company['en']}
                </div>
              </div>
              <span className="card-date">
                {e.startDate[lang] ?? e.startDate['en']} –{' '}
                {e.endDate
                  ? (e.endDate[lang] ?? e.endDate['en'])
                  : t.cv.present}
              </span>
            </div>
            <div className="card-body">
              <ul>
                {e.bullets.map((b, j) => (
                  <li key={j}>{b[lang] ?? b['en']}</li>
                ))}
              </ul>
            </div>
            {e.tags.length > 0 && (
              <p className="card-keypoints">
                <span className="card-keypoints-label">{t.cv.keypoints}:</span>{' '}
                {e.tags.join(', ')}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="section">
        <h2 className="section-title">{t.cv.sections.education}</h2>
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">{t.cv.education.degree}</div>
              <div className="card-subtitle">{t.cv.education.university}</div>
            </div>
            <span className="card-date">2020 – 2025</span>
          </div>
          <div className="card-body">{t.cv.education.gpa}: [3.0 / 4.0]</div>
        </div>
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">{t.cv.education.highschool}</div>
              <div className="card-subtitle">
                {t.cv.education.highschoolName}
              </div>
            </div>
            <span className="card-date">2016 – 2020</span>
          </div>
        </div>
      </section>

      {/* Projects teaser */}
      <section className="section">
        <h2 className="section-title">{t.cv.sections.featuredProjects}</h2>
        <div className="card">
          <div className="card-header">
            <div>
              <div className="card-title">
                <Link to="/projects">{t.cv.seeAllProjects}</Link>
              </div>
              <div className="card-subtitle">{t.cv.openSourceSubtitle}</div>
            </div>
          </div>
          <div className="card-body">{t.cv.projectsTeaser}</div>
        </div>
      </section>
    </main>
  )
}

/* ── Skill Group ─────────────────────────────────────────────────── */
function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="skill-group">
      <div className="skill-group-label">{label}</div>
      <div className="skill-list">
        {items.map((i) => (
          <Tag key={i} label={i} />
        ))}
      </div>
    </div>
  )
}

/* ── Inline Icons ────────────────────────────────────────────────── */
function MailIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22,4 12,14 2,4" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
