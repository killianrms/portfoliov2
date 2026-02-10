"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface TimelineItem {
  year: string;
  title: { fr: string; en: string };
  subtitle: { fr: string; en: string };
  description: { fr: string; en: string };
  type: "education" | "experience" | "volunteer";
}

const timelineData: TimelineItem[] = [
  {
    year: "2024 — Présent",
    title: {
      fr: "Alternance — ITESOFT",
      en: "Work-Study — ITESOFT",
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
    year: "2023 — Présent",
    title: {
      fr: "BUT Informatique — IUT Montpellier-Sète",
      en: "Computer Science Degree — IUT Montpellier-Sète",
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
    year: "Avril — Juin 2024",
    title: {
      fr: "Stage — TamaStat",
      en: "Internship — TamaStat",
    },
    subtitle: {
      fr: "Développeur Full-Stack",
      en: "Full-Stack Developer",
    },
    description: {
      fr: "Conception et développement d'une application de visualisation statistique des données de transport en commun. Stack Python/Flask pour le back-end et JavaScript/Chart.js pour les visualisations interactives.",
      en: "Design and development of a statistical visualization application for public transport data. Python/Flask stack for back-end and JavaScript/Chart.js for interactive visualizations.",
    },
    type: "experience",
  },
  {
    year: "2023",
    title: {
      fr: "Baccalauréat Général",
      en: "High School Diploma (Baccalauréat)",
    },
    subtitle: {
      fr: "Spécialités Mathématiques et NSI",
      en: "Mathematics and Computer Science Specializations",
    },
    description: {
      fr: "Obtention du baccalauréat général avec les spécialités Mathématiques et Numérique et Sciences Informatiques (NSI). Première découverte de la programmation avec Python et des algorithmes fondamentaux.",
      en: "Obtained the general baccalaureate with Mathematics and Digital & Computer Science (NSI) specializations. First introduction to programming with Python and fundamental algorithms.",
    },
    type: "education",
  },
];

export default function Timeline() {
  const { language, t } = useLanguage();

  const typeColors: Record<string, string> = {
    education: "bg-blue-500",
    experience: "bg-green-500",
    volunteer: "bg-amber-500",
  };

  const typeLabels: Record<string, string> = {
    education: t("timeline.education"),
    experience: t("timeline.experience"),
    volunteer: t("timeline.volunteer"),
  };

  return (
    <section id="timeline" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            {t("timeline.title")}
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            {t("timeline.subtitle")}
          </p>
        </motion.div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-12">
          {Object.entries(typeLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${typeColors[key]}`} />
              <span className="text-sm text-muted">{label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {timelineData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full ${typeColors[item.type]} ring-4 ring-background`} />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-sm text-accent font-medium">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1">
                  {item.title[language]}
                </h3>
                <p className="text-sm text-accent/80 mt-0.5">
                  {item.subtitle[language]}
                </p>
                <p className="text-sm text-muted mt-2 leading-relaxed">
                  {item.description[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
