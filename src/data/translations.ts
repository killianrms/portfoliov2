const fr = {
  // Navigation
  "nav.projects": "Projets",
  "nav.studies": "Parcours",
  "nav.about": "À propos",
  "nav.contact": "Contact",
  "nav.experience": "Expérience",

  // Hero
  "hero.tagline": "Développeur Créatif & Passionné de Cybersécurité",
  "hero.subtitle": "Création d'expériences interactives et sécurisées.",
  "hero.scroll": "Défiler pour découvrir",

  // Projects Section
  "projects.title": "Mes Projets",
  "projects.subtitle": "Une sélection de réalisations qui témoignent de mes compétences techniques et créatives.",
  "projects.viewAll": "Voir tous les projets",
  "projects.viewProject": "Voir le projet",
  "projects.filter.all": "Tous",
  "projects.filter.professional": "Professionnel",
  "projects.filter.personal": "Personnel",
  "projects.filter.university": "Universitaire",
  "projects.filter.competition": "Compétition",

  // Project Detail
  "project.context": "Contexte",
  "project.objectives": "Objectifs",
  "project.approach": "Approche Technique",
  "project.skills": "Compétences Développées",
  "project.codeHighlights": "Extraits de Code",
  "project.architecture": "Architecture",
  "project.results": "Résultats & Bilan",
  "project.reflection": "Réflexion & Apprentissages",
  "project.back": "Retour aux projets",
  "project.technologies": "Technologies Utilisées",
  "project.duration": "Durée",
  "project.team": "Équipe",
  "project.role": "Mon Rôle",

  // Timeline
  "timeline.title": "Mon Parcours",
  "timeline.subtitle": "De la découverte de l'informatique à l'ingénierie projet, un chemin marqué par la curiosité et la persévérance.",
  "timeline.education": "Formation",
  "timeline.experience": "Expérience",
  "timeline.volunteer": "Bénévolat",

  // Tech Stack
  "tech.title": "Stack Technique",
  "tech.subtitle": "Les technologies et outils que je maîtrise au quotidien.",

  // About
  "about.title": "À Propos",
  "about.subtitle": "Qui suis-je ?",
  "about.description": "Étudiant en informatique de 21 ans, passionné par la cybersécurité et le développement d'applications. Actuellement en alternance chez ITESOFT en tant qu'Assistant Ingénieur Projet, je combine mes études à l'IUT de Montpellier-Sète avec une expérience professionnelle enrichissante dans le domaine de l'édition logicielle.",
  "about.description2": "Mon parcours m'a permis de développer une approche polyvalente du développement logiciel, allant du front-end au back-end, en passant par les méthodologies DevOps et la sécurité informatique. Je suis convaincu que la qualité logicielle passe par une compréhension globale de l'écosystème technique.",

  // Contact
  "contact.title": "Me Contacter",
  "contact.subtitle": "Un projet en tête ? N'hésitez pas à me contacter.",
  "contact.name": "Nom",
  "contact.email": "Email",
  "contact.message": "Message",
  "contact.send": "Envoyer",
  "contact.sending": "Envoi en cours...",
  "contact.success": "Message envoyé avec succès !",
  "contact.error": "Erreur lors de l'envoi. Veuillez réessayer.",
  "contact.downloadCV": "Télécharger mon CV",

  // Footer
  "footer.rights": "Tous droits réservés.",
  "footer.madeWith": "Conçu et développé avec",

  // Experience Analysis
  "experience.title": "Analyse de l'Expérience Professionnelle",
  "experience.subtitle": "Une réflexion approfondie sur mon parcours en entreprise et les compétences acquises.",
};

const en: Record<string, string> = {
  // Navigation
  "nav.projects": "Projects",
  "nav.studies": "Journey",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.experience": "Experience",

  // Hero
  "hero.tagline": "Creative Developer & Cybersecurity Enthusiast",
  "hero.subtitle": "Building interactive and secure experiences.",
  "hero.scroll": "Scroll to discover",

  // Projects Section
  "projects.title": "My Projects",
  "projects.subtitle": "A selection of achievements that showcase my technical and creative skills.",
  "projects.viewAll": "View all projects",
  "projects.viewProject": "View project",
  "projects.filter.all": "All",
  "projects.filter.professional": "Professional",
  "projects.filter.personal": "Personal",
  "projects.filter.university": "University",
  "projects.filter.competition": "Competition",

  // Project Detail
  "project.context": "Context",
  "project.objectives": "Objectives",
  "project.approach": "Technical Approach",
  "project.skills": "Skills Developed",
  "project.codeHighlights": "Code Highlights",
  "project.architecture": "Architecture",
  "project.results": "Results & Outcomes",
  "project.reflection": "Reflection & Learnings",
  "project.back": "Back to projects",
  "project.technologies": "Technologies Used",
  "project.duration": "Duration",
  "project.team": "Team",
  "project.role": "My Role",

  // Timeline
  "timeline.title": "My Journey",
  "timeline.subtitle": "From discovering computer science to project engineering, a path marked by curiosity and perseverance.",
  "timeline.education": "Education",
  "timeline.experience": "Experience",
  "timeline.volunteer": "Volunteer",

  // Tech Stack
  "tech.title": "Tech Stack",
  "tech.subtitle": "Technologies and tools I work with daily.",

  // About
  "about.title": "About",
  "about.subtitle": "Who am I?",
  "about.description": "A 21-year-old computer science student passionate about cybersecurity and application development. Currently working as an Assistant Project Engineer at ITESOFT in a work-study program, I combine my studies at IUT Montpellier-Sète with enriching professional experience in software publishing.",
  "about.description2": "My journey has allowed me to develop a versatile approach to software development, from front-end to back-end, including DevOps methodologies and IT security. I believe that software quality comes from a comprehensive understanding of the technical ecosystem.",

  // Contact
  "contact.title": "Contact Me",
  "contact.subtitle": "Have a project in mind? Don't hesitate to reach out.",
  "contact.name": "Name",
  "contact.email": "Email",
  "contact.message": "Message",
  "contact.send": "Send",
  "contact.sending": "Sending...",
  "contact.success": "Message sent successfully!",
  "contact.error": "Error sending message. Please try again.",
  "contact.downloadCV": "Download my CV",

  // Footer
  "footer.rights": "All rights reserved.",
  "footer.madeWith": "Designed and developed with",

  // Experience Analysis
  "experience.title": "Professional Experience Analysis",
  "experience.subtitle": "An in-depth reflection on my professional journey and acquired skills.",
};

export const translations = { fr, en } as const;

export type TranslationKey = keyof typeof fr;
