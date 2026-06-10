export type Lang = 'en' | 'tr'

export interface Translations {
  nav: {
    cv: string //
    projects: string
    games: string
  }
  theme: {
    label: string //
    system: string
    light: string
    dark: string
  }
  cv: {
    title: string
    summary: string
    downloadPdf: string
    sections: {
      skills_interest: string
      experience: string
      education: string
      featuredProjects: string
    }
    skillGroups: {
      languages: string
      systemsTools: string
      webBackend: string
      interests: string
    }
    present: string
    keypoints: string
    education: {
      degree: string //
      university: string
      gpa: string
      highschool: string
      highschoolName: string
    }
    seeAllProjects: string
    openSourceSubtitle: string
    projectsTeaser: string
  }
  projects: {
    title: string //
    subtitle: string
    github: string
    demo: string
  }
  games: {
    title: string
    subtitle: string
    comingSoonTitle: string
    comingSoonText: string
  }
  footer: string
  footerSource: string
}

const en: Translations = {
  nav: {
    cv: 'CV',
    projects: 'Projects',
    games: 'Games',
  },
  theme: {
    label: 'Theme',
    system: 'System',
    light: 'Light',
    dark: 'Dark',
  },
  cv: {
    title: 'Computer Engineer',
    summary:
      'C++, Python, and Typescript developer with experience in web and desktop applications.',
    downloadPdf: 'Download PDF',
    sections: {
      skills_interest: 'Skills & Interests',
      experience: 'Experience',
      education: 'Education',
      featuredProjects: 'Featured Projects',
    },
    skillGroups: {
      languages: 'Languages',
      systemsTools: 'Systems & Tools',
      webBackend: 'Web / Backend',
      interests: 'Interests',
    },
    present: 'Present',
    keypoints: 'Keypoints',
    education: {
      degree: 'B.Sc. Computer Engineering',
      university: 'Gebze Technical University',
      gpa: 'GPA',
      highschool: 'High School',
      highschoolName: 'Kartal Anotolian High School',
    },
    seeAllProjects: 'See all projects →',
    openSourceSubtitle: 'Open-source & personal work',
    projectsTeaser: '...',
  },
  projects: {
    title: 'Projects',
    subtitle: "Open-source work, personal experiments, and things I've built.",
    github: 'GitHub',
    demo: 'Demo',
  },
  games: {
    title: 'Games',
    subtitle: "Small web games I've built for fun. Click to play.",
    comingSoonTitle: 'Games coming soon',
    comingSoonText:
      "I'm building some small web games. Check back later, or watch the repo for updates.",
  },
  footer: 'Emirhan Altunel',
  footerSource: 'Source',
}

const tr: Translations = {
  nav: {
    cv: 'CV',
    projects: 'Projeler',
    games: 'Oyunlar',
  },
  theme: {
    label: 'Tema',
    system: 'Sistem',
    light: 'Açık',
    dark: 'Koyu',
  },
  cv: {
    title: 'Bilgisayar Mühendisi',
    summary:
      'Web ve masaüstü uygulamalarında deneyimli C++, Python ve Typescript geliştiricisi.',
    downloadPdf: 'PDF İndir',
    sections: {
      skills_interest: 'Yetenekler & İlgi Alanları',
      experience: 'Deneyim',
      education: 'Eğitim',
      featuredProjects: 'Öne Çıkan Projeler',
    },
    skillGroups: {
      languages: 'Diller',
      systemsTools: 'Sistemler & Araçlar',
      webBackend: 'Web / Backend',
      interests: 'İlgi Alanları',
    },
    present: 'Günümüz',
    keypoints: 'Önemli Noktalar',
    education: {
      degree: 'Bilgisayar Mühendisliği Lisans',
      university: 'Gebze Teknik Üniversitesi',
      gpa: 'Not Ortalaması',
      highschool: 'Lise',
      highschoolName: 'Kartal Anadolu Lisesi',
    },
    seeAllProjects: 'Tüm projeleri gör →',
    openSourceSubtitle: 'Açık kaynak & kişisel çalışmalar',
    projectsTeaser: '...',
  },
  projects: {
    title: 'Projeler',
    subtitle:
      'Açık kaynak çalışmalar, kişisel deneyler ve inşa ettiğim şeyler.',
    github: 'GitHub',
    demo: 'Demo',
  },
  games: {
    title: 'Oyunlar',
    subtitle: 'Eğlence için yaptığım küçük web oyunları. Oynamak için tıkla.',
    comingSoonTitle: 'Oyunlar yakında geliyor',
    comingSoonText:
      "Küçük web oyunları yapıyorum. Daha sonra tekrar kontrol edin veya güncellemeler için repo'yu takip edin.",
  },
  footer: 'Emirhan Altunel',
  footerSource: 'Kaynak',
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  en,
  tr,
}

export const LANGUAGES: { id: Lang; label: string; flag: string }[] = [
  { id: 'en', label: 'English', flag: '🇬🇧' },
  { id: 'tr', label: 'Türkçe', flag: '🇹🇷' },
]
