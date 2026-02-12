"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    year: "2024 - Présent",
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

type TimelineFilter = "all" | "education" | "experience" | "volunteer";

export default function Timeline() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<TimelineFilter>("all");

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

  const filters: { key: TimelineFilter; label: string }[] = [
    { key: "all", label: language === "fr" ? "Tout" : "All" },
    { key: "education", label: typeLabels.education },
    { key: "experience", label: typeLabels.experience },
    { key: "volunteer", label: typeLabels.volunteer },
  ];

  const filteredData =
    filter === "all"
      ? timelineData
      : timelineData.filter((item) => item.type === filter);

  return (
    <section id="timeline" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === f.key
                  ? "bg-accent text-white"
                  : "bg-surface border border-border text-muted hover:text-foreground hover:border-accent/50"
              }`}
            >
              {f.key !== "all" && (
                <div className={`w-2.5 h-2.5 rounded-full ${typeColors[f.key]}`} />
              )}
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredData.map((item, i) => (
                <motion.div
                  key={`${item.type}-${item.year}`}
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
