"use client";

import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "./FadeIn";

interface TimelineItem {
  year: string;
  title: { fr: string; en: string };
  subtitle: { fr: string; en: string };
  description: { fr: string; en: string };
  type: "education" | "experience" | "volunteer";
}

const timelineData: TimelineItem[] = [
  {
    year: "2025 - Présent",
    title: {
      fr: "Alternance - ITESOFT",
      en: "Work-Study - ITESOFT",
    },
    subtitle: {
      fr: "Assistant Ingénieur Projet",
      en: "Assistant Project Engineer",
    },
    description: {
      fr: "Participation au cycle de développement logiciel complet dans un environnement Agile Scrum. Développement Java/Spring Boot, CI/CD avec Jenkins, conteneurisation Docker/Kubernetes, et assurance qualité avec SonarQube.",
      en: "Participation in the complete software development lifecycle in an Agile Scrum environment. Java/Spring Boot development, CI/CD with Jenkins, Docker/Kubernetes containerization, and quality assurance with SonarQube.",
    },
    type: "experience",
  },
  {
    year: "Mai 2024 - Avril 2026",
    title: {
      fr: "BDE Informatique Montpellier",
      en: "BDE Informatique Montpellier (Student Association)",
    },
    subtitle: {
      fr: "Responsable Événementiel et Communication",
      en: "Events & Communication Manager",
    },
    description: {
      fr: "Organisation d'événements pour les étudiants en informatique de l'IUT de Montpellier. Gestion de la communication sur les réseaux sociaux (Discord, Instagram). Coordination logistique des soirées, sorties et activités étudiantes.",
      en: "Organizing events for computer science students at IUT Montpellier. Managing social media communication (Discord, Instagram). Logistical coordination of parties, outings, and student activities.",
    },
    type: "volunteer",
  },
  {
    year: "Janvier - Avril 2025",
    title: {
      fr: "Stage - TamaBox (Draguignan, 83)",
      en: "Internship - TamaBox (Draguignan, France)",
    },
    subtitle: {
      fr: "Développeur Full-Stack - Projet TamaStat",
      en: "Full-Stack Developer - TamaStat Project",
    },
    description: {
      fr: "Conception et développement en autonomie totale d'un outil de visualisation statistique pour une entreprise de location de box. JavaScript/Chart.js, personas marketing, module de prévision. Première expérience professionnelle - le taux d'occupation du client est passé de 75-82% à 100%.",
      en: "Fully autonomous design and development of a statistical visualization tool for a storage box rental company. JavaScript/Chart.js, marketing personas, forecasting module. First professional experience - client occupancy rate went from 75-82% to 100%.",
    },
    type: "experience",
  },
  {
    year: "2023 - Présent",
    title: {
      fr: "BUT Informatique - IUT Montpellier-Sète",
      en: "Computer Science Degree - IUT Montpellier-Sète",
    },
    subtitle: {
      fr: "Parcours Réalisation d'applications : conception, développement, validation",
      en: "Specialization: Application Development: Design, Development, Validation",
    },
    description: {
      fr: "Formation approfondie en développement logiciel, bases de données, réseaux, sécurité informatique et gestion de projet. Apprentissage des méthodologies agiles et des bonnes pratiques de développement.",
      en: "In-depth training in software development, databases, networks, IT security, and project management. Learning agile methodologies and development best practices.",
    },
    type: "education",
  },
  {
    year: "2023",
    title: {
      fr: "Baccalauréat STI2D - Lycée Thomas Edison, Lorgues (83)",
      en: "STI2D High School Diploma - Lycée Thomas Edison, Lorgues (83)",
    },
    subtitle: {
      fr: "Spécialité SIN — Sciences de l'Ingénieur et du Numérique, et Mathématiques",
      en: "Specialization: SIN — Engineering and Digital Sciences, and Mathematics",
    },
    description: {
      fr: "Obtention du baccalauréat technologique STI2D avec la spécialité SIN (Sciences de l'Ingénieur et du Numérique). Première découverte de la programmation et des systèmes numériques.",
      en: "Obtained the STI2D technological baccalaureate with the SIN (Engineering and Digital Sciences) specialization. First introduction to programming and digital systems.",
    },
    type: "education",
  },
];

const typeConfig = {
  education: {
    border: "border-l-blue-500",
    badge: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    iconBg: "bg-blue-500/10 text-blue-400",
    label: { fr: "Formation", en: "Education" },
  },
  experience: {
    border: "border-l-green-500",
    badge: "bg-green-500/10 text-green-400 border border-green-500/20",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    iconBg: "bg-green-500/10 text-green-400",
    label: { fr: "Expérience", en: "Experience" },
  },
  volunteer: {
    border: "border-l-amber-500",
    badge: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    iconBg: "bg-amber-500/10 text-amber-400",
    label: { fr: "Bénévolat", en: "Volunteer" },
  },
};

export default function Timeline() {
  const { language, t } = useLanguage();

  return (
    <section id="timeline" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            {t("timeline.title")}
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            {t("timeline.subtitle")}
          </p>
        </FadeIn>

        {/* Timeline cards */}
        <div className="space-y-5">
          {timelineData.map((item, i) => {
            const config = typeConfig[item.type];
            return (
              <FadeIn key={`${item.type}-${item.year}`} delay={i * 0.1}>
                <div className={`flex gap-5 p-5 md:p-6 bg-surface border border-border border-l-4 ${config.border} rounded-r-2xl rounded-tl-2xl hover:shadow-lg hover:shadow-accent/5 transition-shadow duration-300`}>
                  {/* Icon */}
                  <div className={`shrink-0 w-11 h-11 rounded-xl ${config.iconBg} flex items-center justify-center`}>
                    {config.icon}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${config.badge}`}>
                        {config.label[language]}
                      </span>
                      <span className="text-xs text-muted">{item.year}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug">
                      {item.title[language]}
                    </h3>
                    <p className="text-sm text-accent/80 mt-0.5 font-medium">
                      {item.subtitle[language]}
                    </p>
                    <p className="text-sm text-muted mt-2 leading-relaxed">
                      {item.description[language]}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
