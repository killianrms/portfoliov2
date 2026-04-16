/*
 * ============================================================
 * SECTION TEMPORAIRE — Portfolio d'apprentissage
 * À SUPPRIMER APRÈS CORRECTION BUT 3 (parcours DACS)
 * ============================================================
 * Cette page a été créée uniquement pour l'évaluation du BUT 3.
 * Pour la supprimer intégralement :
 *   1. Supprimer ce dossier : src/app/portfolio-apprentissage/
 *   2. Retirer le lien dans src/components/Navbar.tsx
 *      (rechercher le commentaire TEMPORAIRE dans ce fichier)
 * ============================================================
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio d'apprentissage - Killian RAMUS",
  description:
    "Portfolio d'apprentissage BUT 3 - Parcours DACS. Justification des compétences Réaliser, Administrer et Collaborer.",
  robots: { index: false, follow: false },
};

/* ─── Données statiques des preuves par compétence ──────────────────────── */

const realiserProjects = [
  {
    slug: "itesoft-assistant-ingenieur",
    label: "ITESOFT - Alternance",
    badge: "Professionnel",
    points: [
      "Consolidation des compétences Java dans un contexte professionnel réel : Streamline Invoices est une plateforme déployée depuis des dizaines d'années, avec une base de code dense et des conventions internes établies. Comprendre et étendre ce code sans le dégrader est une contrainte bien plus exigeante qu'un projet from scratch.",
      "Apprentissage d'AngularJS sur le tas - un framework déprécié depuis des années, avec une documentation fragmentée et souvent obsolète. Les ressources disponibles sont limitées et pas toujours fiables, ce qui m'a obligé à lire directement le code existant pour comprendre les patterns utilisés.",
      "Analyse du code standard R&D pour identifier les points d'extension sans créer de conflits lors des mises à jour : chaque personnalisation est pensée en amont pour rester isolée du core.",
      "Outillage imposé par l'environnement (Maven, IntelliJ, PostgreSQL, Termius) - adaptation rapide à un écosystème existant sans marge de manoeuvre sur les choix techniques.",
      "Cycle Dev -> Staging (Azure) -> Production : livraison d'un package de déploiement validé en recette avec le client avant toute MEP.",
      "Amélioration de l'outil interne CreatField : passage d'un processus manuel (20-30 champs un par un) à un script API, puis intégration dans l'interface Angular avec barre de recherche et sélection multiple.",
    ],
  },
  {
    slug: "tamastat",
    label: "TamaStat - Stage",
    badge: "Professionnel",
    points: [
      "Conception et développement complet (solo) d'un outil de visualisation statistique pour TamaBox, depuis le recueil du besoin jusqu'au déploiement sur Vercel.",
      "Choix de Chart.js pour la visualisation : adapté aux données de location de box, léger, sans dépendance serveur.",
      "Adaptation de l'interface à un public métier non-technique : tableaux de bord lisibles, personas marketing, outil de prévision.",
    ],
  },
  {
    slug: "referendum",
    label: "Referendum - SAÉ universitaire",
    badge: "Universitaire",
    points: [
      "Application de vote sécurisée en Java / JavaFX : implémentation du chiffrement ElGamal et des preuves à divulgation nulle (Zero Knowledge Proof).",
      "Choix et justification des bibliothèques cryptographiques : contraintes de sécurité mathématique, pas de bibliothèque externe non auditée.",
      "Profiling et analyse du comportement du protocole ZKP pour garantir l'absence de fuite d'information.",
    ],
  },
  {
    slug: "lobbybot-fortnite",
    label: "LobbyBot 2.0 - Projet personnel",
    badge: "Personnel",
    points: [
      "Architecture microservices en Node.js / Python / Express / Socket.IO avec load balancing automatique entre les bots (sélection du bot le moins chargé, création dynamique).",
      "Conteneurisation Docker pour l'isolation et le redémarrage automatique en cas de crash.",
      "Intégration PostgreSQL pour la persistance de l'état des bots et la gestion des amis.",
    ],
  },
  {
    slug: "portfolio",
    label: "Portfolio v2 - Projet personnel",
    badge: "Personnel",
    points: [
      "Développement de ce portfolio en Next.js 16 / React 19 / TypeScript / Tailwind CSS 4 : SPA avec App Router, SSG, optimisation des images (AVIF/WebP), lazy loading.",
      "Profiling des performances (Core Web Vitals), correction du ChunkLoadError, gestion des ancres et du scroll.",
    ],
  },
];

const administrerProjects = [
  {
    slug: "itesoft-assistant-ingenieur",
    label: "ITESOFT - Alternance",
    badge: "Professionnel",
    points: [
      "Création et gestion de machines virtuelles (locales pour le développement, Azure pour le staging) : installation, configuration réseau, gestion des accès.",
      "Connexion SSH/SFTP aux VMs via Termius pour le transfert de fichiers et la supervision des services.",
      "Application de la politique de sécurité ISO 27001 : validation des entrées, gestion fine des permissions, protection des données sensibles dans les personnalisations.",
      "Cycle de déploiement structuré Dev → Staging → Production : aucune mise en production sans recette client validée.",
      "Automatisation via script API (CreatField) : traitement en lot de 20-30 ressources, réduction du risque d'erreur humaine, gain de temps mesurable.",
    ],
  },
  {
    slug: "lobbybot-fortnite",
    label: "LobbyBot 2.0 - Projet personnel",
    badge: "Personnel",
    points: [
      "Déploiement d'un serveur Node.js / Express avec Socket.IO : configuration des ports, gestion des processus, auto-restart via scripts de surveillance.",
      "Conteneurisation Docker : isolation des services, reproductibilité de l'environnement, déploiement sans friction.",
      "Gestion d'une base PostgreSQL en production : requêtes de mise à jour en temps réel, cohérence des données entre les instances de bots.",
      "Processus automatisé de load balancing : surveillance de l'état des bots, création dynamique, relance automatique en cas de défaillance.",
    ],
  },
  {
    slug: "tamastat",
    label: "TamaStat - Stage",
    badge: "Professionnel",
    points: [
      "Déploiement continu sur Vercel : pipeline automatisé depuis Git, zéro downtime, gestion des variables d'environnement.",
      "Configuration d'un service de données accessible depuis un navigateur sans back-end dédié : choix architectural justifié par la taille de l'entreprise.",
    ],
  },
  {
    slug: "application-sauvegarde",
    label: "Application de Sauvegarde - SAÉ universitaire",
    badge: "Universitaire",
    points: [
      "Application Python / Flask de sauvegarde avec chiffrement et compression : politique de sécurité des données au niveau applicatif.",
      "Gestion des processus de sauvegarde automatisée : scripts de planification, vérification d'intégrité.",
    ],
  },
];

const collaborerProjects = [
  {
    slug: "itesoft-assistant-ingenieur",
    label: "ITESOFT - Alternance",
    badge: "Professionnel",
    points: [
      "Participation aux daily meetings de l'équipe Delivery (~30 personnes) : remontée des blocages, suivi de l'avancement, coordination avec les chefs de projet.",
      "Revues de pull requests des autres développeurs : lecture de code métier, commentaires constructifs, contribution à la qualité globale.",
      "Rédaction de Demandes d'Assistance (DA) détaillées pour l'équipe R&D : identification de la cause racine, reproduction du problème, proposition de correctif.",
      "Communication directe avec les clients pour les phases de recette en staging : pédagogie, reformulation des besoins techniques en langage métier.",
      "Adaptation à la norme ISO 27001 : conduite du changement dans les pratiques de développement au sein de l'équipe.",
      "Veille technologique sur les évolutions de Streamline Invoices (notes de version R&D) et sur Java / Angular pour anticiper les impacts des mises à jour.",
    ],
  },
  {
    slug: "tamastat",
    label: "TamaStat - Stage",
    badge: "Professionnel",
    points: [
      "Travail en binôme avec le gérant de TamaBox : recueil des besoins, itérations sur les maquettes, présentation des prototypes.",
      "Identification des enjeux métier de la location de stockage (saisonnalité, personas clients) et traduction en fonctionnalités de l'outil.",
      "Accompagnement à la prise en main de l'outil par un utilisateur non-technique.",
    ],
  },
  {
    slug: "nuit-info-2025",
    label: "Nuit de l'Info 2025",
    badge: "Compétition",
    points: [
      "Développement en équipe sur 24h : coordination des tâches, gestion des conflits Git, répartition des rôles selon les compétences.",
      "Veille rapide sur l'API DeepSeek et le Manifest V3 des extensions Chrome pour choisir la bonne approche technique en contrainte de temps.",
      "Partage de connaissances en temps réel : documentation inline, revue de code au fil de l'eau.",
    ],
  },
  {
    slug: "code-game-jam-2026",
    label: "Code Game Jam 2026",
    badge: "Compétition",
    points: [
      "Organisation du projet avec Trello : backlog, sprints courts, attribution des tâches.",
      "Coordination d'une équipe pluridisciplinaire (code C#, game design, sound design) sous contrainte de délai.",
    ],
  },
];

/* ─── Composants utilitaires ─────────────────────────────────────────────── */

function Badge({ label }: { label: string }) {
  const colorMap: Record<string, string> = {
    Professionnel:
      "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    Universitaire:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    Personnel:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    Compétition:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  };
  return (
    <span
      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${
        colorMap[label] ?? "bg-surface text-muted"
      }`}
    >
      {label}
    </span>
  );
}

function ProjectCard({
  slug,
  label,
  badge,
  points,
}: {
  slug: string;
  label: string;
  badge: string;
  points: string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <Link
          href={`/projects/${slug}`}
          className="font-semibold text-foreground hover:text-accent transition-colors duration-200 text-sm"
        >
          {label} →
        </Link>
        <Badge label={badge} />
      </div>
      <ul className="flex flex-col gap-2">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2 text-sm text-muted leading-relaxed">
            <span className="text-accent mt-0.5 shrink-0">▸</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompetenceSection({
  id,
  color,
  number,
  title,
  subtitle,
  situation,
  acItems,
  synthesis,
  projects,
}: {
  id: string;
  color: string;
  number: string;
  title: string;
  subtitle: string;
  situation: string;
  acItems: string[];
  synthesis: string;
  projects: typeof realiserProjects;
}) {
  return (
    <section id={id} className="py-16 md:py-20 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`rounded-2xl p-6 mb-10 border ${color}`}>
          <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">
            Compétence {number}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-1">
            {title}
          </h2>
          <p className="text-sm opacity-80">{subtitle}</p>
        </div>

        {/* Cadre référentiel */}
        <div className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-3">
            Situation professionnelle visée (niveau 3 - DACS)
          </h3>
          <p className="text-sm text-muted leading-relaxed border-l-2 border-accent pl-4">
            {situation}
          </p>
        </div>

        {/* Apprentissages critiques */}
        <div className="mb-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-3">
            Apprentissages critiques du niveau 3
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {acItems.map((ac, i) => (
              <li
                key={i}
                className="flex gap-2 items-start text-sm text-foreground bg-surface border border-border rounded-lg px-4 py-3"
              >
                <span className="text-accent font-bold shrink-0">AC3{i + 1}</span>
                <span>{ac}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Synthèse argumentée */}
        <div className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-3">
            Pourquoi cette compétence est consolidée
          </h3>
          <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
            {synthesis}
          </p>
        </div>

        {/* Preuves / projets */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-4">
            Traces et preuves concrètes
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page principale ────────────────────────────────────────────────────── */

export default function PortfolioApprentissage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <header className="pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Bandeau discret "évaluation" */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent px-3 py-1 rounded-full mb-6">
            BUT Informatique - Parcours DACS - Niveau 3
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Portfolio{" "}
            <span className="text-accent">d&apos;apprentissage</span>
          </h1>

          <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
            Cette page constitue mon portfolio d&apos;apprentissage pour
            l&apos;évaluation du BUT 3, parcours DACS (Déploiement
            d&apos;Applications Communicantes et Sécurisées). Elle a pour
            objectif de justifier l&apos;acquisition des compétences du niveau
            3 en m&apos;appuyant sur des traces concrètes issues de mon
            alternance chez ITESOFT, de mes stages, de mes SAÉ universitaires
            et de mes projets personnels.
          </p>

          {/* Navigation interne */}
          <nav className="flex flex-wrap justify-center gap-3">
            {[
              { href: "#realiser", label: "Réaliser" },
              { href: "#administrer", label: "Administrer" },
              { href: "#collaborer", label: "Collaborer" },
              { href: "#conclusion", label: "Conclusion" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium border border-border rounded-lg px-4 py-2 text-muted hover:text-foreground hover:border-accent transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="w-full h-px bg-border max-w-5xl mx-auto" />

      {/* ── Compétence 1 — Réaliser ──────────────────────────────────────── */}
      <CompetenceSection
        id="realiser"
        color="border-violet-300 dark:border-violet-700 bg-violet-50/50 dark:bg-violet-950/20 text-foreground"
        number="1"
        title="Réaliser"
        subtitle="Développer des applications informatiques adaptées et de qualité"
        situation="Concevoir, développer et maintenir des applications informatiques en réponse à des besoins réels, en choisissant les architectures et bibliothèques adaptées, en garantissant la qualité du code et en intégrant les solutions dans un environnement de production."
        acItems={[
          "Choisir et implémenter les architectures adaptées",
          "Faire évoluer une application existante",
          "Intégrer des solutions dans un environnement de production",
          "Choisir et utiliser des bibliothèques et méthodes adaptées",
        ]}
        synthesis={`Chez ITESOFT, je n'ai pas appris Java en partant de zéro - j'avais déjà une base solide via les SAÉ et projets universitaires. Ce que l'alternance m'a apporté, c'est la confrontation à un code de production vieux de plusieurs décennies, avec ses conventions internes, ses couches d'abstraction et ses contraintes de maintenabilité. Étendre ce code sans le casser, c'est un exercice très différent d'écrire du code from scratch.

Côté Angular, la situation était différente : le framework est déprécié, les docs officielles ne sont plus maintenues pour les vieilles versions, et les ressources en ligne sont souvent contradictoires ou obsolètes. J'ai dû apprendre en lisant directement le code existant du projet et en testant. C'est inconfortable mais ça force à vraiment comprendre ce qu'on fait plutôt que de copier des exemples.

Sur Referendum ou LobbyBot, les choix techniques étaient libres - ce qui oblige à les justifier autrement. Pourquoi ElGamal et pas une lib crypto toute faite ? Pourquoi Socket.IO pour le dashboard ? Ces décisions sont documentées dans les pages projets et reflètent une vraie réflexion sur le contexte.`}
        projects={realiserProjects}
      />

      <div className="w-full h-px bg-border max-w-5xl mx-auto" />

      {/* ── Compétence 2 — Administrer ───────────────────────────────────── */}
      <CompetenceSection
        id="administrer"
        color="border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-950/20 text-foreground"
        number="2"
        title="Administrer"
        subtitle="Administrer des systèmes informatiques communicants complexes"
        situation="Déployer, configurer et maintenir des infrastructures systèmes et réseaux en répondant aux besoins d'une organisation, en créant des processus automatisés et en appliquant une politique de sécurité cohérente."
        acItems={[
          "Créer des processus de traitement automatisé",
          "Configurer un serveur et des services réseaux de manière avancée",
          "Appliquer une politique de sécurité au niveau de l'infrastructure",
          "Déployer et maintenir une infrastructure en fonction des besoins",
        ]}
        synthesis={`Chez ITESOFT, la partie administration était intégrée au travail quotidien sans être forcément étiquetée comme telle. Créer une VM, installer la plateforme, configurer les accès, ouvrir les bons ports, tester la connexion SSH - c'est fait systématiquement pour chaque nouveau client. La certification ISO 27001 de l'entreprise impose une rigueur sur la sécurité : pas de données sensibles en clair, gestion stricte des permissions, traçabilité des accès.

L'amélioration de CreatField illustre bien l'AC "processus de traitement automatisé" : avant, migrer les champs d'un client prenait une demi-journée à cause du processus manuel. Après, quelques clics suffisent. C'est une automatisation modeste techniquement, mais son impact sur le travail de l'équipe est concret et immédiat.

Sur LobbyBot, j'administrais un serveur en conditions réelles - pas un projet académique en local. Docker m'a permis d'isoler les services et de redémarrer proprement en cas de crash, sans intervention manuelle.`}
        projects={administrerProjects}
      />

      <div className="w-full h-px bg-border max-w-5xl mx-auto" />

      {/* ── Compétence 3 — Collaborer ────────────────────────────────────── */}
      <CompetenceSection
        id="collaborer"
        color="border-emerald-300 dark:border-emerald-700 bg-emerald-50/50 dark:bg-emerald-950/20 text-foreground"
        number="3"
        title="Collaborer"
        subtitle="Satisfaire aux besoins des utilisateurs au regard de la chaîne de valeur du client"
        situation="Travailler en équipe pluridisciplinaire, organiser une veille technologique, accompagner le management de projet informatique, et guider la conduite du changement dans une organisation."
        acItems={[
          "Organiser et partager une veille technologique et informationnelle",
          "Identifier les enjeux de l'économie de l'innovation numérique",
          "Guider la conduite du changement informatique au sein d'une organisation",
          "Accompagner le management de projet informatique",
        ]}
        synthesis={`Ce qui m'a le plus surpris chez ITESOFT, c'est la place que prend la communication dans le travail d'un développeur. Rédiger une Demande d'Assistance pour l'équipe R&D, c'est un exercice précis : reproduire le bug, isoler la cause probable, proposer une piste - sans ça, le ticket repart en attente. Pareil pour les phases de recette client : expliquer à un comptable pourquoi son bouton ne fonctionne pas comme prévu demande de traduire un problème technique en langage métier.

Les code reviews m'ont aussi beaucoup appris, dans les deux sens. Lire le code des autres développeurs de l'équipe m'a permis de monter en compétences sur des patterns que je n'aurais pas rencontrés autrement. Et commenter des PR en apportant quelque chose d'utile, sans être condescendant, c'est un exercice en soi.

Sur CreatField, la dimension "conduite du changement" est réelle même si elle est modeste : convaincre l'équipe d'adopter un nouvel outil qu'on a soi-même développé demande de montrer que ça fonctionne et que ça fait gagner du temps concrètement.`}
        projects={collaborerProjects}
      />

      <div className="w-full h-px bg-border max-w-5xl mx-auto" />

      {/* ── Conclusion ───────────────────────────────────────────────────── */}
      <section id="conclusion" className="py-16 md:py-20 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-center">
            Cohérence du parcours DACS
          </h2>
          <div className="bg-surface border border-border rounded-2xl p-8 text-sm text-muted leading-relaxed space-y-4">
            <p>
              L&apos;alternance chez ITESOFT est probablement la situation qui
              illustre le mieux les trois compétences en même temps : je{" "}
              <strong className="text-foreground">réalise</strong> des
              personnalisations sur un outil en production depuis des dizaines
              d&apos;années, j&apos;
              <strong className="text-foreground">administre</strong> les
              environnements de déploiement de A à Z (VM, SSH, cycle
              Dev-&gt;Staging-&gt;Prod), et je{" "}
              <strong className="text-foreground">collabore</strong> dans une
              équipe de ~30 personnes avec ses processus, ses rituels et ses
              clients réels.
            </p>
            <p>
              Les projets personnels et universitaires viennent compléter ça sur
              des aspects que l&apos;alternance ne couvre pas forcément : la
              liberté de choisir l&apos;architecture (LobbyBot, Referendum), le
              travail sous contrainte de temps extrême (Nuit de l&apos;Info), ou
              le fait de porter un projet de bout en bout sans filet (TamaStat,
              Portfolio v2).
            </p>
            <p>
              Le parcours DACS m&apos;a mis dans des situations suffisamment
              variées pour que ces trois compétences soient réellement exercées,
              pas juste théorisées.
            </p>
          </div>

          {/* Retour */}
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground border border-border hover:border-accent rounded-lg px-5 py-2.5 transition-colors duration-200"
            >
              ← Retour au portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer discret ───────────────────────────────────────────────── */}
      <footer className="py-8 px-6 text-center text-xs text-muted border-t border-border">
        Portfolio d&apos;apprentissage - BUT 3 Informatique, parcours DACS -
        Killian RAMUS - {new Date().getFullYear()}
      </footer>
    </div>
  );
}
