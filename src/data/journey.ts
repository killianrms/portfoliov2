type Localized = { fr: string; en: string };

export interface EducationStage {
  start: number;
  end: number;
  level: string;
  title: Localized;
  school: string;
  detail: Localized;
  status: "passed" | "running";
}

// Rendered as a CI pipeline: each diploma is a stage, the current one is "running".
export const education: EducationStage[] = [
  {
    start: 2023,
    end: 2026,
    level: "Bac+3",
    title: { fr: "BUT Informatique", en: "BUT in Computer Science" },
    school: "IUT Montpellier-Sète",
    detail: {
      fr: "Parcours DACS : déploiement d'applications communicantes et sécurisées.",
      en: "DACS track: deployment of secure, networked applications.",
    },
    status: "passed",
  },
  {
    start: 2025,
    end: 2026,
    level: "Bac+3",
    title: { fr: "Management et gestion de projet", en: "Management and project management" },
    school: "IAE Montpellier",
    detail: {
      fr: "Double diplôme obtenu en parallèle du BUT.",
      en: "Dual degree earned alongside the BUT.",
    },
    status: "passed",
  },
  {
    start: 2026,
    end: 2029,
    level: "Bac+5",
    title: { fr: "Diplôme d'ingénieur, spécialité DevOps", en: "Engineering degree, DevOps specialization" },
    school: "Polytech Montpellier",
    detail: {
      fr: "Cycle ingénieur en alternance chez ITESOFT.",
      en: "Engineering program on a work-study contract at ITESOFT.",
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
  current?: boolean;
  summary: Localized;
  highlights?: { fr: string[]; en: string[] };
  tags: string[];
  href?: string;
}

export const experiences: Experience[] = [
  {
    period: { fr: "Sept. 2025 → aujourd'hui", en: "Sep 2025 → today" },
    org: "ITESOFT",
    place: "Aimargues (30)",
    role: {
      fr: "Alternance · Assistant ingénieur développement et projet",
      en: "Work-study · Assistant development and project engineer",
    },
    kind: "work",
    current: true,
    summary: {
      fr: "Je travaille dans l'équipe Delivery de Streamline for Invoices, la solution de traitement des factures fournisseurs d'ITESOFT utilisée par de grands comptes. J'y développe des customisations, j'assure le support en production et j'automatise les process de l'équipe.",
      en: "I work in the Delivery team of Streamline for Invoices, ITESOFT's supplier invoice processing solution used by large companies. I develop customizations, support production platforms and automate the team's processes.",
    },
    highlights: {
      fr: [
        "AutoInit, une initiative personnelle : un workflow n8n qui initialise une plateforme client de bout en bout (dépôt Git, pipeline Azure DevOps, déploiement SSH/SFTP, frontal web, accès). Environ 2 h de manipulations remplacées par un formulaire d'une minute, une vingtaine de plateformes initialisées, outil repris par l'entreprise.",
        "Customisations en production chez de nombreux clients : règles métier JavaScript et Java, requêtes RSQL, scripts SQL et tâches cron.",
        "Diagnostic d'incidents dans les conteneurs Docker, les journaux Grafana et les bases PostgreSQL.",
        "Git flow avec merge requests relues, staging pour la recette client, environnement certifié ISO 27001.",
        "Ces travaux sont confidentiels : je ne peux pas les détailler davantage ici, mais j'en parle volontiers.",
      ],
      en: [
        "AutoInit, a personal initiative: an n8n workflow that sets up a client platform end to end (Git repository, Azure DevOps pipeline, SSH/SFTP deployment, web front end, access). About 2 hours of manual work replaced by a one-minute form, around twenty platforms set up, tool taken over by the company.",
        "Customizations in production for many clients: JavaScript and Java business rules, RSQL queries, SQL scripts and cron jobs.",
        "Incident diagnosis across Docker containers, Grafana logs and PostgreSQL databases.",
        "Git flow with reviewed merge requests, staging for client acceptance, ISO 27001 certified environment.",
        "This work is confidential: I can't detail it further here, but I'm happy to talk about it.",
      ],
    },
    tags: ["n8n", "Docker", "Azure DevOps", "Node.js", "Java", "PostgreSQL", "Grafana"],
    href: "/projects/itesoft-assistant-ingenieur",
  },
  {
    period: { fr: "Janv. → avr. 2025", en: "Jan → Apr 2025" },
    org: "TamaBox",
    place: "Draguignan (83)",
    role: { fr: "Stage · Développeur full-stack", en: "Internship · Full-stack developer" },
    kind: "internship",
    summary: {
      fr: "J'ai conçu seul TamaStat, un tableau de bord statistique pour une entreprise de location de box de stockage. Le taux d'occupation du client est passé de 75-82 % à 100 %.",
      en: "I built TamaStat on my own, a statistics dashboard for a storage box rental company. The client's occupancy rate went from 75-82% to 100%.",
    },
    tags: ["JavaScript", "Chart.js", "Vercel"],
    href: "/projects/tamastat",
  },
  {
    period: { fr: "Mai 2024 → avr. 2026", en: "May 2024 → Apr 2026" },
    org: "BDE Informatique Montpellier",
    place: "Montpellier (34)",
    role: { fr: "Bénévolat · Événementiel et communication", en: "Volunteer · Events and communication" },
    kind: "volunteer",
    summary: {
      fr: "Organisation d'événements pour les étudiants en informatique de l'IUT, communication sur Discord et Instagram, logistique des soirées et des sorties.",
      en: "Organizing events for the IUT's computer science students, communication on Discord and Instagram, logistics for parties and outings.",
    },
    tags: ["Discord", "Instagram"],
  },
];
