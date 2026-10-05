type Localized = { fr: string; en: string };

export interface EducationStage {
  period: string;
  level?: string;
  title: Localized;
  school: string;
  detail: Localized;
  status: "passed" | "running";
}

// Rendered as a CI pipeline: each diploma is a stage, the current one is "running".
export const education: EducationStage[] = [
  {
    period: "2023 - 2026",
    level: "Bac+3",
    title: { fr: "BUT Informatique", en: "BUT Computer Science" },
    school: "IUT Montpellier-Sète",
    detail: {
      fr: "Parcours DACS - déploiement d'applications communicantes et sécurisées.",
      en: "DACS track - deployment of secure, networked applications.",
    },
    status: "passed",
  },
  {
    period: "2025 - 2026",
    level: "Bac+3",
    title: { fr: "Management & gestion de projet", en: "Management & project management" },
    school: "IAE Montpellier",
    detail: {
      fr: "Double diplôme obtenu en parallèle du BUT.",
      en: "Dual degree earned alongside the BUT.",
    },
    status: "passed",
  },
  {
    period: "2026 - 2029",
    level: "Bac+5",
    title: { fr: "Ingénieur DevOps", en: "DevOps engineering degree" },
    school: "Polytech Montpellier",
    detail: {
      fr: "Cycle ingénieur en alternance chez ITESOFT.",
      en: "Engineering degree, work-study at ITESOFT.",
    },
    status: "running",
  },
];

export interface Experience {
  period: Localized;
  org: string;
  place: string;
  role: Localized;
  kind: "work" | "internship" | "volunteer";
  summary: Localized;
  highlights?: { fr: string[]; en: string[] };
  tags: string[];
  href?: string;
}

export const experiences: Experience[] = [
  {
    period: { fr: "Sept. 2025 - auj.", en: "Sep 2025 - now" },
    org: "ITESOFT",
    place: "Aimargues (30)",
    role: {
      fr: "Alternant · Assistant ingénieur développement & projet",
      en: "Work-study · Assistant development & project engineer",
    },
    kind: "work",
    summary: {
      fr: "Dans l'équipe Delivery, je conçois les outils qui automatisent le quotidien de l'équipe autour de Streamline Invoices, la plateforme de traitement de factures d'ITESOFT utilisée par de grands comptes.",
      en: "In the Delivery team, I build the tools that automate the team's day-to-day work around Streamline Invoices, ITESOFT's invoice processing platform used by large enterprises.",
    },
    highlights: {
      fr: [
        "Initialisation automatique des plateformes clients : ce qui se configurait à la main à chaque nouveau client devient scripté et reproductible.",
        "Pipelines CI/CD pour builder, tester et livrer les personnalisations clients de façon fiable.",
        "Outils d'automatisation de process internes, comme l'export en masse de CreatField qui remplace des heures de manipulations.",
        "Personnalisation Java / Angular, cycle Dev → Staging → Prod et support client.",
      ],
      en: [
        "Automated client platform setup: what used to be configured by hand for every new client is now scripted and reproducible.",
        "CI/CD pipelines to build, test and ship client customizations reliably.",
        "Internal process automation tools, like the CreatField bulk export that replaces hours of manual work.",
        "Java / Angular customization, Dev → Staging → Prod cycle and client support.",
      ],
    },
    tags: ["CI/CD", "Java", "Angular", "PostgreSQL", "Azure", "Maven"],
    href: "/projects/itesoft-assistant-ingenieur",
  },
  {
    period: { fr: "Janv. - avr. 2025", en: "Jan - Apr 2025" },
    org: "TamaBox",
    place: "Draguignan (83)",
    role: { fr: "Stage · Développeur full-stack", en: "Internship · Full-stack developer" },
    kind: "internship",
    summary: {
      fr: "Conception en autonomie de TamaStat, un outil de visualisation statistique pour une entreprise de location de box. Taux d'occupation du client passé de 75-82 % à 100 %.",
      en: "Built TamaStat on my own, a statistics dashboard for a storage box rental company. The client's occupancy rate went from 75-82% to 100%.",
    },
    tags: ["JavaScript", "Chart.js", "Vercel"],
    href: "/projects/tamastat",
  },
  {
    period: { fr: "Mai 2024 - avr. 2026", en: "May 2024 - Apr 2026" },
    org: "BDE Informatique Montpellier",
    place: "Montpellier (34)",
    role: { fr: "Bénévolat · Événementiel & communication", en: "Volunteer · Events & communication" },
    kind: "volunteer",
    summary: {
      fr: "Organisation d'événements pour les étudiants en informatique de l'IUT, communication Discord et Instagram, logistique des soirées et sorties.",
      en: "Organizing events for the IUT's CS students, Discord and Instagram communication, logistics for parties and outings.",
    },
    tags: ["Discord", "Instagram"],
  },
];
