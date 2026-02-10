export interface CodeHighlight {
  title: { fr: string; en: string };
  code: string;
  language: string;
  explanation: { fr: string; en: string };
}

export interface Skill {
  name: { fr: string; en: string };
  description: { fr: string; en: string };
}

export interface Project {
  slug: string;
  title: string;
  category: "professional" | "personal" | "university" | "competition";
  technologies: string[];
  duration: { fr: string; en: string };
  team: { fr: string; en: string };
  role: { fr: string; en: string };
  shortDescription: { fr: string; en: string };
  context: { fr: string; en: string };
  objectives: { fr: string; en: string };
  approach: { fr: string; en: string };
  architecture: { fr: string; en: string };
  skills: Skill[];
  codeHighlights: CodeHighlight[];
  results: { fr: string; en: string };
  reflection: { fr: string; en: string };
  thumbnail: string;
  images: string[];
  links?: { github?: string; live?: string };
}

export const projects: Project[] = [
  {
    slug: "itesoft-assistant-ingenieur",
    title: "ITESOFT — Assistant Ingénieur Développement et Projet",
    category: "professional",
    technologies: ["Java", "Angular", "SQL", "PostgreSQL", "Maven", "IntelliJ IDEA", "Termius", "Postman", "Azure", "Git"],
    duration: { fr: "Septembre 2024 — Présent (Alternance)", en: "September 2024 — Present (Work-Study)" },
    team: { fr: "Équipe Delivery (~30 personnes) — l'équipe projet d'ITESOFT", en: "Delivery team (~30 people) — ITESOFT's project team" },
    role: { fr: "Assistant Ingénieur Développement et Projet — Personnalisation, déploiement et support de Streamline Invoices", en: "Assistant Development & Project Engineer — Customization, deployment and support of Streamline Invoices" },
    shortDescription: {
      fr: "Alternance au sein de l'équipe Delivery d'ITESOFT : personnalisation de la plateforme Streamline Invoices pour des grandes entreprises, développement d'outils internes et support client.",
      en: "Work-study in ITESOFT's Delivery team: customization of the Streamline Invoices platform for large enterprises, internal tool development and client support."
    },
    context: {
      fr: `ITESOFT est un éditeur logiciel français spécialisé dans la dématérialisation et l'automatisation des processus documentaires. L'entreprise développe notamment Streamline Invoices, une plateforme de gestion de factures destinée à de grandes entreprises réalisant plusieurs milliards d'euros de chiffre d'affaires annuel. Cet outil permet aux comptables de centraliser l'ensemble du traitement des factures : capture automatique (PDF, email), circuits de validation configurables, et flux de traitement de bout en bout.

Dans le cadre de mon alternance en BUT Informatique parcours « Réalisation d'applications : conception, développement, validation » à l'IUT de Montpellier-Sète, j'ai intégré l'équipe Delivery en septembre 2024. Cette équipe est littéralement l'équipe projet d'ITESOFT : elle est responsable de la personnalisation, du déploiement et du support de Streamline Invoices auprès des clients.

Mon rôle consiste à personnaliser la plateforme selon les besoins spécifiques de chaque client : configuration des entreprises, holdings, utilisateurs et permissions, mais aussi développement de fonctionnalités sur-mesure (endpoints supplémentaires, connexions ERP, filtres, boutons). Un enjeu majeur de mon travail est de minimiser les modifications au code standard (maintenu par l'équipe R&D) afin de faciliter les montées de version et de limiter les conflits lors des mises à jour, tout en respectant les exigences de sécurité de l'entreprise, certifiée ISO 27001.

Au quotidien, je participe aux daily meetings de l'équipe Delivery pour suivre l'avancement des projets et remonter les éventuels blocages, et je fais également des reviews de pull requests des autres développeurs de l'équipe, ce qui me permet de monter en compétences en lisant du code métier et de contribuer à la qualité globale du code livré.`,
      en: `ITESOFT is a French software company specializing in dematerialization and document process automation. The company develops Streamline Invoices, an invoice management platform designed for large enterprises generating billions of euros in annual revenue. This tool allows accountants to centralize all invoice processing: automatic capture (PDF, email), configurable validation circuits, and end-to-end processing workflows.

As part of my work-study program in a Computer Science degree (specialization: "Application Development: Design, Development, Validation") at IUT Montpellier-Sète, I joined the Delivery team in September 2024. This team is literally ITESOFT's project team: responsible for the customization, deployment, and support of Streamline Invoices for clients.

My role involves customizing the platform according to each client's specific needs: configuring companies, holdings, users, and permissions, as well as developing custom features (additional endpoints, ERP connections, filters, buttons). A major challenge in my work is minimizing modifications to the standard code (maintained by the R&D team) to facilitate version upgrades and limit conflicts during updates, while respecting the company's security requirements under ISO 27001 certification.

On a daily basis, I participate in the Delivery team's daily meetings to track project progress and flag any blockers, and I also review pull requests from other developers on the team, which helps me improve my skills by reading business code and contributes to the overall quality of delivered code.`
    },
    objectives: {
      fr: `Les objectifs de ma mission chez ITESOFT s'articulent autour de quatre axes principaux :

1. **Personnalisation client** : Configurer et adapter Streamline Invoices pour chaque nouveau client — mise en place des VM de développement et de staging, installation de la plateforme, configuration des entreprises, holdings, utilisateurs et permissions, et développement des personnalisations spécifiques (endpoints, connexions ERP, filtres, boutons, fonctionnalités métier).

2. **Développement d'outils internes** : Concevoir et développer des outils qui améliorent la productivité de l'équipe Delivery. Notamment l'amélioration majeure de l'outil interne CreatField, utilisé pour la gestion des champs personnalisés des clients.

3. **Support client** : Traiter les tickets ouverts par les clients, diagnostiquer les problèmes (côté client ou côté plateforme), et si nécessaire rédiger des Demandes d'Assistance (DA) détaillées pour l'équipe R&D lorsqu'un problème relève du standard.

4. **Recette et déploiement** : Exécuter les procédures de recette pour valider les personnalisations, gérer le cycle Dev → Staging → Production, et préparer les packages de déploiement pour l'équipe de mise en production.`,
      en: `The objectives of my mission at ITESOFT revolve around four main axes:

1. **Client customization**: Configure and adapt Streamline Invoices for each new client — setting up development and staging VMs, installing the platform, configuring companies, holdings, users and permissions, and developing specific customizations (endpoints, ERP connections, filters, buttons, business features).

2. **Internal tool development**: Design and develop tools that improve the Delivery team's productivity. Notably the major improvement of the internal CreatField tool, used for managing client custom fields.

3. **Client support**: Handle client-opened tickets, diagnose issues (client-side or platform-side), and when necessary write detailed Assistance Requests (DA) for the R&D team when an issue relates to the standard product.

4. **Testing and deployment**: Execute testing procedures to validate customizations, manage the Dev → Staging → Production cycle, and prepare deployment packages for the production deployment team.`
    },
    approach: {
      fr: `Mon workflow de développement chez ITESOFT suit un cycle structuré en plusieurs étapes. Pour chaque nouveau client, je commence par créer une VM de développement sur laquelle j'installe Streamline Invoices, puis je configure l'environnement selon les spécifications du client (entreprises, holdings, utilisateurs, permissions, circuits de validation).

Lorsque le client a besoin de fonctionnalités spécifiques — comme des endpoints supplémentaires pour se connecter à son ERP, des filtres personnalisés, ou des boutons métier — je développe ces personnalisations en Java (back-end) et Angular (front-end), en veillant à rester au maximum en dehors du code standard de la R&D. Cette contrainte est essentielle : elle permet de limiter les conflits lors des montées de version et de simplifier la maintenance à long terme.

Le code est compilé via Maven dans IntelliJ IDEA, l'outil utilisé par toute l'entreprise. J'utilise Termius pour la connexion SSH/SFTP aux machines virtuelles, Postman pour tester les endpoints et envoyer des fichiers JSON, et PostgreSQL comme base de données. Les VM de développement sont locales, tandis que les VM de staging sont hébergées sur Azure, ce qui permet au client de s'y connecter pour tester. Une fois les tests validés en staging avec le client, je prépare un package de déploiement que j'envoie à l'équipe de production.

J'ai également contribué de manière significative à l'amélioration de CreatField, un outil interne permettant de créer des champs personnalisés en respectant les conventions de l'entreprise. Le problème initial était que lors des migrations, il fallait retélécharger et renvoyer les champs un par un, ce qui pouvait représenter 20 à 30 champs par client — un processus long et fastidieux. J'ai d'abord développé un script pour télécharger via API tous les champs d'un client d'un coup, puis j'ai intégré cette fonctionnalité directement dans l'application avec une barre de recherche (avant, il fallait chercher manuellement le client parmi plus de 200) et des cases à cocher permettant de sélectionner des champs spécifiques ou tous les champs d'un client.`,
      en: `My development workflow at ITESOFT follows a structured multi-step cycle. For each new client, I start by creating a development VM on which I install Streamline Invoices, then configure the environment according to client specifications (companies, holdings, users, permissions, validation circuits).

When the client needs specific features — such as additional endpoints to connect to their ERP, custom filters, or business buttons — I develop these customizations in Java (back-end) and Angular (front-end), making sure to stay as much as possible outside the R&D's standard code. This constraint is essential: it limits conflicts during version upgrades and simplifies long-term maintenance.

Code is compiled via Maven in IntelliJ IDEA, the tool used across the entire company. I use Termius for SSH/SFTP connections to virtual machines, Postman for testing endpoints and sending JSON files, and PostgreSQL as the database. Development VMs are local, while staging VMs are hosted on Azure, allowing clients to connect and test. Once staging tests are validated with the client, I prepare a deployment package that I send to the production team.

I also significantly contributed to improving CreatField, an internal tool for creating custom fields following company conventions. The initial problem was that during migrations, fields had to be re-downloaded and re-uploaded one by one, which could represent 20 to 30 fields per client — a long and tedious process. I first developed a script to download all client fields at once via API, then integrated this feature directly into the application with a search bar (previously, you had to manually search for the client among 200+) and checkboxes allowing selection of specific fields or all fields for a client.`
    },
    architecture: {
      fr: `Streamline Invoices repose sur une architecture applicative structurée autour des composants suivants :

- **Capture documentaire** : Ingestion automatique des factures par PDF ou email, avec extraction des données via OCR et reconnaissance intelligente.
- **Moteur de workflow** : Orchestration des circuits de validation configurables par client (ex : au-delà de X euros, validation par tel responsable). Les comptables peuvent vérifier, valider ou demander des informations à d'autres membres de l'entreprise.
- **Front-end Angular** : Interface web permettant aux utilisateurs de naviguer dans leurs factures, appliquer des filtres, et suivre l'état de traitement.
- **Back-end Java** : API REST et logique métier, compilée via Maven. Les personnalisations client sont développées dans des modules séparés du code standard R&D.
- **Base de données PostgreSQL** : Stockage des factures, configurations client, utilisateurs et données de workflow.
- **Infrastructure** : VM locales (dev) et VM Azure (staging/production). Accès via Termius (SSH/SFTP).

Le cycle de déploiement suit le chemin : Développement local → VM de staging Azure (test client) → Package de production (envoyé à l'équipe dédiée).`,
      en: `Streamline Invoices is built on an application architecture structured around the following components:

- **Document capture**: Automatic invoice ingestion via PDF or email, with data extraction through OCR and intelligent recognition.
- **Workflow engine**: Orchestration of client-configurable validation circuits (e.g., above X euros, validation by a specific manager). Accountants can verify, validate, or request information from other company members.
- **Angular front-end**: Web interface allowing users to browse their invoices, apply filters, and track processing status.
- **Java back-end**: REST API and business logic, compiled via Maven. Client customizations are developed in modules separate from the R&D standard code.
- **PostgreSQL database**: Storage for invoices, client configurations, users, and workflow data.
- **Infrastructure**: Local VMs (dev) and Azure VMs (staging/production). Access via Termius (SSH/SFTP).

The deployment cycle follows the path: Local development → Azure staging VM (client testing) → Production package (sent to the dedicated team).`
    },
    skills: [
      {
        name: { fr: "Développement Java & Angular", en: "Java & Angular Development" },
        description: { fr: "Développement de personnalisations back-end en Java (endpoints REST, logique métier, connexions ERP) et front-end en Angular (composants, filtres, boutons). Compilation et build via Maven dans IntelliJ IDEA.", en: "Back-end customization development in Java (REST endpoints, business logic, ERP connections) and front-end in Angular (components, filters, buttons). Compilation and build via Maven in IntelliJ IDEA." }
      },
      {
        name: { fr: "Gestion d'infrastructure & déploiement", en: "Infrastructure Management & Deployment" },
        description: { fr: "Création et gestion de machines virtuelles (locales et Azure), installation et configuration de Streamline Invoices, gestion du cycle de déploiement Dev → Staging → Production via SSH/SFTP avec Termius.", en: "Creation and management of virtual machines (local and Azure), Streamline Invoices installation and configuration, management of the Dev → Staging → Production deployment cycle via SSH/SFTP with Termius." }
      },
      {
        name: { fr: "Base de données PostgreSQL", en: "PostgreSQL Database" },
        description: { fr: "Configuration et interrogation de bases de données PostgreSQL dans le cadre de la personnalisation client. Écriture de requêtes SQL pour la configuration des données métier et le diagnostic de problèmes.", en: "Configuration and querying of PostgreSQL databases for client customization. Writing SQL queries for business data configuration and issue diagnosis." }
      },
      {
        name: { fr: "Support client & diagnostic", en: "Client Support & Diagnosis" },
        description: { fr: "Traitement de tickets clients, diagnostic d'erreurs (côté client ou plateforme), rédaction de Demandes d'Assistance détaillées pour l'équipe R&D, et communication avec les clients pour résoudre les problèmes.", en: "Processing client tickets, diagnosing errors (client-side or platform-side), writing detailed Assistance Requests for the R&D team, and communicating with clients to resolve issues." }
      },
      {
        name: { fr: "Développement d'outils internes", en: "Internal Tool Development" },
        description: { fr: "Amélioration significative de l'outil CreatField : développement d'un script d'API pour le téléchargement en masse, puis intégration dans l'application avec barre de recherche et sélection par cases à cocher, remplaçant un processus manuel fastidieux.", en: "Significant improvement of the CreatField tool: development of an API script for bulk downloading, then integration into the application with search bar and checkbox selection, replacing a tedious manual process." }
      },
      {
        name: { fr: "Sécurité & conformité ISO 27001", en: "Security & ISO 27001 Compliance" },
        description: { fr: "Développement en respectant les normes de sécurité ISO 27001 de l'entreprise. Attention particulière à la sécurité des personnalisations : validation des entrées, gestion des permissions, protection des données sensibles.", en: "Development respecting the company's ISO 27001 security standards. Particular attention to customization security: input validation, permission management, sensitive data protection." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Amélioration de CreatField — Téléchargement en masse via API", en: "CreatField Improvement — Bulk Download via API" },
        code: `// Principe de l'amélioration CreatField (code simplifié)
// Avant : téléchargement manuel un par un parmi 200+ clients
// Après : recherche + sélection multiple + téléchargement en lot

// 1. Appel API pour récupérer tous les champs d'un client
GET /api/creatfield/clients/{clientId}/fields
// Retourne la liste des champs custom du client

// 2. Téléchargement en lot des champs sélectionnés
POST /api/creatfield/download-batch
Content-Type: application/json
{
  "clientId": "CLIENT_001",
  "fieldIds": ["field_1", "field_2", "field_15", "field_22"],
  "format": "standard"
}

// 3. Côté front-end Angular : barre de recherche + checkboxes
// - Recherche dynamique parmi 200+ clients (filtrage instantané)
// - Cases à cocher par champ ou "tout sélectionner"
// - Bouton de téléchargement groupé`,
        language: "javascript",
        explanation: {
          fr: "Cette amélioration illustre mon approche chez ITESOFT : identifier un processus manuel fastidieux (télécharger 20-30 champs un par un en cherchant parmi 200+ clients), puis l'automatiser progressivement. D'abord un script API simple, puis une intégration complète dans l'application avec interface de recherche et sélection multiple. Le gain de temps est considérable pour toute l'équipe Delivery.",
          en: "This improvement illustrates my approach at ITESOFT: identifying a tedious manual process (downloading 20-30 fields one by one while searching among 200+ clients), then progressively automating it. First a simple API script, then a complete integration into the application with search interface and multi-selection. The time savings are considerable for the entire Delivery team."
        }
      }
    ],
    results: {
      fr: `Mon expérience chez ITESOFT a produit des résultats concrets tant pour l'entreprise que pour mon développement professionnel :

- **Personnalisations client livrées** : Plusieurs clients configurés et personnalisés avec succès, de l'installation initiale à la mise en production, en passant par les phases de test avec le client sur les environnements staging Azure.
- **Amélioration de CreatField** : L'intégration de la recherche et du téléchargement en lot dans l'outil CreatField a considérablement réduit le temps nécessaire à la gestion des champs personnalisés, passant de plusieurs heures à quelques minutes pour les migrations de 20-30 champs. Cette amélioration est utilisée par toute l'équipe Delivery au quotidien.
- **Support client** : Traitement de nombreux tickets de support, avec diagnostic et résolution de problèmes variés, allant de la configuration utilisateur à des erreurs plus complexes nécessitant des Demandes d'Assistance à l'équipe R&D.
- **Montées de version** : Gestion réussie de montées de version de Streamline Invoices chez les clients, grâce à l'approche de minimisation des modifications du code standard qui a limité les conflits.

Cette alternance m'a confronté à la réalité d'un éditeur logiciel servant de grandes entreprises, où la fiabilité, la sécurité et la satisfaction client sont des priorités absolues.`,
      en: `My experience at ITESOFT has produced concrete results both for the company and my professional development:

- **Client customizations delivered**: Several clients successfully configured and customized, from initial installation to production deployment, through client testing phases on Azure staging environments.
- **CreatField improvement**: The integration of search and bulk download into the CreatField tool significantly reduced the time needed for custom field management, going from several hours to a few minutes for migrations of 20-30 fields. This improvement is used by the entire Delivery team daily.
- **Client support**: Processing numerous support tickets, with diagnosis and resolution of varied issues, from user configuration to more complex errors requiring Assistance Requests to the R&D team.
- **Version upgrades**: Successful management of Streamline Invoices version upgrades for clients, thanks to the approach of minimizing standard code modifications that limited conflicts.

This work-study confronted me with the reality of a software publisher serving large enterprises, where reliability, security, and client satisfaction are absolute priorities.`
    },
    reflection: {
      fr: `Cette expérience professionnelle chez ITESOFT constitue un tournant majeur dans mon parcours. Elle m'a fait passer d'un développeur essentiellement « scolaire » à quelqu'un qui comprend les enjeux réels d'un produit logiciel en production utilisé par des grandes entreprises.

Les principaux apprentissages que je retiens sont :

1. **L'art du compromis technique** : La contrainte de ne pas toucher au code standard de la R&D m'a appris à trouver des solutions créatives pour implémenter des fonctionnalités client tout en préservant la maintenabilité. Chaque personnalisation doit être pensée en fonction de son impact sur les futures montées de version.

2. **La relation client** : Le support m'a appris à communiquer avec des utilisateurs non-techniques, à diagnostiquer des problèmes à distance, et à rédiger des rapports clairs pour l'équipe R&D via les Demandes d'Assistance. La patience et la pédagogie sont des compétences aussi importantes que le code.

3. **L'automatisation comme réflexe** : L'amélioration de CreatField m'a montré que lorsqu'un processus est répétitif et fastidieux, il vaut toujours la peine d'investir du temps pour l'automatiser. Le script initial m'a pris quelques heures, mais il fait gagner des heures chaque semaine à toute l'équipe.

4. **La sécurité comme culture** : Travailler sous norme ISO 27001 m'a appris que la sécurité n'est pas une fonctionnalité qu'on ajoute à la fin, mais une préoccupation constante qui influence chaque choix de conception et de développement.

5. **La rigueur du cycle de déploiement** : Le passage obligé par Dev → Staging → Production m'a fait comprendre l'importance des environnements de test et de la validation client avant toute mise en production. Une erreur en production chez un client à plusieurs milliards de CA n'est pas une option.`,
      en: `This professional experience at ITESOFT represents a major turning point in my journey. It took me from being an essentially "academic" developer to someone who understands the real challenges of a production software product used by large enterprises.

The main learnings I take away are:

1. **The art of technical compromise**: The constraint of not touching R&D's standard code taught me to find creative solutions for implementing client features while preserving maintainability. Each customization must be considered in terms of its impact on future version upgrades.

2. **Client relations**: Support taught me to communicate with non-technical users, diagnose problems remotely, and write clear reports for the R&D team via Assistance Requests. Patience and pedagogy are skills as important as code.

3. **Automation as a reflex**: The CreatField improvement showed me that when a process is repetitive and tedious, it's always worth investing time to automate it. The initial script took me a few hours, but it saves hours every week for the entire team.

4. **Security as a culture**: Working under ISO 27001 standards taught me that security is not a feature you add at the end, but a constant concern that influences every design and development choice.

5. **Deployment cycle rigor**: The mandatory path through Dev → Staging → Production made me understand the importance of test environments and client validation before any production deployment. An error in production for a client with billions in revenue is not an option.`
    },
    thumbnail: "/images/itesoft.jpg",
    images: [],
    links: {}
  },
  {
    slug: "tamastat",
    title: "TamaStat",
    category: "professional",
    technologies: ["Python", "Flask", "JavaScript", "Chart.js", "API REST", "HTML/CSS", "Bootstrap"],
    duration: { fr: "Avril — Juin 2024 (Stage)", en: "April — June 2024 (Internship)" },
    team: { fr: "2 stagiaires + 1 tuteur de stage", en: "2 interns + 1 internship supervisor" },
    role: { fr: "Développeur Full-Stack — Conception et développement de l'application", en: "Full-Stack Developer — Application design and development" },
    shortDescription: {
      fr: "Application web de visualisation statistique des données de transport en commun de la métropole de Montpellier (TaM).",
      en: "Web application for statistical visualization of Montpellier metropolitan public transport data (TaM)."
    },
    context: {
      fr: `TamaStat est un projet réalisé dans le cadre de mon stage de deuxième année de BUT Informatique. L'objectif était de concevoir et développer une application web permettant de visualiser et d'analyser les données statistiques du réseau de transport en commun de la Métropole de Montpellier, géré par TaM (Transports de l'Agglomération de Montpellier).

Le réseau TaM dessert plus de 500 000 habitants et génère un volume considérable de données sur la fréquentation, les retards, les itinéraires et les performances des lignes. Cependant, ces données brutes étaient difficilement exploitables par les décideurs et les analystes sans un outil de visualisation adapté.

Mon stage s'est déroulé au sein d'une équipe technique qui avait besoin d'un tableau de bord interactif pour faciliter la prise de décision basée sur les données. L'enjeu principal était de transformer des données brutes en informations visuelles pertinentes et facilement interprétables.`,
      en: `TamaStat is a project completed during my second-year Computer Science internship. The goal was to design and develop a web application for visualizing and analyzing statistical data from the Montpellier Metropolitan public transport network, managed by TaM (Transports de l'Agglomération de Montpellier).

The TaM network serves over 500,000 residents and generates a considerable volume of data on ridership, delays, routes, and line performance. However, this raw data was difficult to use for decision-makers and analysts without an appropriate visualization tool.

My internship took place within a technical team that needed an interactive dashboard to facilitate data-driven decision making. The main challenge was transforming raw data into relevant and easily interpretable visual information.`
    },
    objectives: {
      fr: `1. **Collecte et traitement des données** : Mettre en place un système d'extraction et de nettoyage des données depuis les API du réseau TaM.
2. **Visualisation interactive** : Développer des graphiques dynamiques et interactifs permettant d'explorer les données selon différents axes (temporel, géographique, par ligne).
3. **Interface utilisateur intuitive** : Créer une interface accessible aux non-techniciens avec des filtres et des options de personnalisation.
4. **Performance** : Assurer des temps de chargement rapides malgré le volume important de données à traiter.`,
      en: `1. **Data collection and processing**: Set up a system for extracting and cleaning data from TaM network APIs.
2. **Interactive visualization**: Develop dynamic and interactive charts allowing data exploration along different axes (temporal, geographical, by line).
3. **Intuitive user interface**: Create an interface accessible to non-technical users with filters and customization options.
4. **Performance**: Ensure fast loading times despite the large volume of data to process.`
    },
    approach: {
      fr: `L'application a été développée avec une architecture client-serveur classique. Le back-end utilise Python avec le framework Flask pour exposer une API REST qui traite et agrège les données. Le front-end est construit en HTML/CSS avec JavaScript et Chart.js pour les visualisations.

La chaîne de traitement des données suit le schéma suivant : les données brutes sont extraites des API TaM, nettoyées et transformées côté serveur (Python/Flask), puis exposées via des endpoints REST que le front-end consomme pour générer les graphiques dynamiques avec Chart.js.

J'ai implémenté un système de mise en cache côté serveur pour éviter de surcharger les API externes et améliorer les temps de réponse. Les données sont rafraîchies périodiquement en arrière-plan, ce qui garantit la fraîcheur des informations sans impacter l'expérience utilisateur.`,
      en: `The application was developed with a classic client-server architecture. The back-end uses Python with the Flask framework to expose a REST API that processes and aggregates data. The front-end is built with HTML/CSS, JavaScript, and Chart.js for visualizations.

The data processing chain follows this schema: raw data is extracted from TaM APIs, cleaned and transformed server-side (Python/Flask), then exposed via REST endpoints that the front-end consumes to generate dynamic charts with Chart.js.

I implemented a server-side caching system to avoid overloading external APIs and improve response times. Data is periodically refreshed in the background, ensuring information freshness without impacting user experience.`
    },
    architecture: {
      fr: `Architecture en trois couches :
- **Couche données** : Scripts Python d'extraction et de nettoyage des données depuis les API TaM, stockage en cache local.
- **Couche métier** : API REST Flask exposant les données agrégées et filtrées selon les paramètres de requête.
- **Couche présentation** : Interface web responsive avec graphiques Chart.js interactifs, filtres dynamiques et export des données.`,
      en: `Three-layer architecture:
- **Data layer**: Python scripts for extracting and cleaning data from TaM APIs, local cache storage.
- **Business layer**: Flask REST API exposing aggregated and filtered data according to query parameters.
- **Presentation layer**: Responsive web interface with interactive Chart.js charts, dynamic filters, and data export.`
    },
    skills: [
      {
        name: { fr: "Développement Python / Flask", en: "Python / Flask Development" },
        description: { fr: "Création d'une API REST complète avec Flask, gestion des routes, sérialisation JSON, et mise en place d'un système de cache.", en: "Creation of a complete REST API with Flask, route management, JSON serialization, and cache system implementation." }
      },
      {
        name: { fr: "Visualisation de données", en: "Data Visualization" },
        description: { fr: "Utilisation avancée de Chart.js pour créer des graphiques interactifs (barres, lignes, camemberts) avec des animations et des tooltips personnalisés.", en: "Advanced use of Chart.js to create interactive charts (bars, lines, pies) with animations and custom tooltips." }
      },
      {
        name: { fr: "Traitement de données", en: "Data Processing" },
        description: { fr: "Extraction, nettoyage et transformation de données brutes provenant d'API externes, gestion des formats de données hétérogènes.", en: "Extraction, cleaning and transformation of raw data from external APIs, handling heterogeneous data formats." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Endpoint API Flask avec cache", en: "Flask API Endpoint with Caching" },
        code: `from flask import Flask, jsonify, request
from functools import lru_cache
from datetime import datetime, timedelta

app = Flask(__name__)

@app.route('/api/stats/line/<line_id>')
def get_line_stats(line_id):
    date_from = request.args.get('from', default_date())
    date_to = request.args.get('to', today())

    stats = compute_line_statistics(line_id, date_from, date_to)

    return jsonify({
        'line': line_id,
        'period': {'from': date_from, 'to': date_to},
        'ridership': stats['ridership'],
        'avg_delay': stats['avg_delay'],
        'punctuality_rate': stats['punctuality_rate'],
        'peak_hours': stats['peak_hours']
    })`,
        language: "python",
        explanation: {
          fr: "Cet endpoint Flask illustre le traitement des données par ligne de transport. Les paramètres de date sont extraits de la requête URL, les statistiques sont calculées à la volée, et le résultat est renvoyé au format JSON structuré. Le système de cache évite les recalculs inutiles pour les mêmes requêtes.",
          en: "This Flask endpoint illustrates data processing by transport line. Date parameters are extracted from the URL query, statistics are computed on the fly, and the result is returned in structured JSON format. The caching system avoids unnecessary recalculations for identical requests."
        }
      }
    ],
    results: {
      fr: `Le projet TamaStat a abouti à un tableau de bord fonctionnel et interactif qui a été présenté et validé par l'équipe encadrante. Les principaux résultats sont :

- Un dashboard permettant de visualiser les données de fréquentation sur plus de 30 lignes de transport
- Des graphiques interactifs avec filtrage par période, par ligne et par type de données
- Un temps de chargement moyen inférieur à 2 secondes grâce au système de cache
- Une interface responsive accessible sur ordinateur et tablette

Ce stage m'a apporté une première expérience concrète du développement web professionnel et m'a conforté dans mon choix de poursuivre dans ce domaine.`,
      en: `The TamaStat project resulted in a functional and interactive dashboard that was presented and validated by the supervising team. The main results are:

- A dashboard for visualizing ridership data across more than 30 transport lines
- Interactive charts with filtering by period, line, and data type
- Average loading time under 2 seconds thanks to the caching system
- A responsive interface accessible on desktop and tablet

This internship gave me a first concrete experience of professional web development and confirmed my choice to continue in this field.`
    },
    reflection: {
      fr: `Ce stage m'a permis de prendre conscience de plusieurs réalités du développement professionnel :

1. **La qualité des données** est un enjeu majeur. Les données brutes des API TaM contenaient des incohérences, des valeurs manquantes et des formats hétérogènes. J'ai appris que le nettoyage et la validation des données représentent souvent une part significative du travail de développement.

2. **L'importance du prototypage** : En présentant des maquettes et des prototypes tôt dans le processus, j'ai pu obtenir des retours rapides et ajuster l'orientation du projet avant d'investir trop de temps dans une direction.

3. **La communication avec les utilisateurs finaux** est essentielle pour comprendre leurs besoins réels et adapter l'interface en conséquence. Certaines fonctionnalités que je pensais importantes se sont révélées secondaires, tandis que d'autres besoins insoupçonnés ont émergé au fil des échanges.`,
      en: `This internship made me aware of several realities of professional development:

1. **Data quality** is a major challenge. Raw data from TaM APIs contained inconsistencies, missing values, and heterogeneous formats. I learned that data cleaning and validation often represent a significant portion of development work.

2. **The importance of prototyping**: By presenting mockups and prototypes early in the process, I was able to get quick feedback and adjust the project direction before investing too much time in one direction.

3. **Communication with end users** is essential to understand their real needs and adapt the interface accordingly. Some features I thought were important turned out to be secondary, while other unsuspected needs emerged through discussions.`
    },
    thumbnail: "/images/tamastat.jpg",
    images: [],
    links: { github: "https://github.com/killianrms/tamastat" }
  },
  {
    slug: "site-ecommerce-parfum",
    title: "Site E-commerce de Parfums",
    category: "university",
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap", "MVC"],
    duration: { fr: "Janvier — Mars 2024 (Projet universitaire)", en: "January — March 2024 (University project)" },
    team: { fr: "Groupe de 4 étudiants", en: "Group of 4 students" },
    role: { fr: "Développeur Back-End — Architecture MVC et base de données", en: "Back-End Developer — MVC Architecture and database" },
    shortDescription: {
      fr: "Site e-commerce complet développé en PHP suivant l'architecture MVC, avec gestion de catalogue, panier, commandes et espace administrateur.",
      en: "Complete e-commerce website developed in PHP following MVC architecture, with catalog management, shopping cart, orders, and admin panel."
    },
    context: {
      fr: `Ce projet s'inscrit dans le cadre du module de développement web du BUT Informatique. L'objectif pédagogique était de concevoir et réaliser un site e-commerce complet en PHP, en appliquant le pattern architectural MVC (Modèle-Vue-Contrôleur) de manière rigoureuse.

Le thème choisi par notre groupe était un site de vente de parfums en ligne. Ce choix nous a permis de travailler sur des problématiques variées : gestion d'un catalogue de produits avec différentes caractéristiques (notes olfactives, volumes, marques), système de panier avec calcul de prix dynamique, gestion des utilisateurs avec authentification, et interface d'administration pour la gestion du stock.

Le projet a été mené en méthodologie semi-agile, avec des jalons hebdomadaires et des présentations intermédiaires devant l'enseignant. Chaque membre de l'équipe avait un rôle défini, et nous utilisions Git pour la gestion collaborative du code source.`,
      en: `This project was part of the web development module in the Computer Science degree. The pedagogical objective was to design and build a complete e-commerce website in PHP, rigorously applying the MVC (Model-View-Controller) architectural pattern.

The theme chosen by our group was an online perfume store. This choice allowed us to work on various challenges: managing a product catalog with different characteristics (fragrance notes, volumes, brands), a shopping cart system with dynamic price calculation, user management with authentication, and an administration interface for stock management.

The project was conducted in a semi-agile methodology, with weekly milestones and intermediate presentations to the instructor. Each team member had a defined role, and we used Git for collaborative source code management.`
    },
    objectives: {
      fr: `1. **Implémenter l'architecture MVC** en PHP pur, sans framework, pour comprendre les fondements de ce pattern architectural.
2. **Concevoir une base de données relationnelle** normalisée pour gérer les produits, utilisateurs, commandes et paniers.
3. **Développer un système d'authentification** sécurisé avec hashage des mots de passe et gestion des sessions.
4. **Créer une interface d'administration** permettant la gestion complète du catalogue produit (CRUD).
5. **Assurer la sécurité** de l'application contre les failles courantes (injection SQL, XSS, CSRF).`,
      en: `1. **Implement MVC architecture** in pure PHP, without a framework, to understand the foundations of this architectural pattern.
2. **Design a normalized relational database** to manage products, users, orders, and carts.
3. **Develop a secure authentication system** with password hashing and session management.
4. **Create an administration interface** allowing complete product catalog management (CRUD).
5. **Ensure application security** against common vulnerabilities (SQL injection, XSS, CSRF).`
    },
    approach: {
      fr: `L'application suit strictement le pattern MVC :

- **Modèle** : Classes PHP encapsulant la logique métier et les interactions avec la base de données MySQL via PDO (requêtes préparées pour prévenir les injections SQL).
- **Vue** : Templates PHP avec séparation stricte entre la logique et la présentation, utilisant Bootstrap pour le design responsive.
- **Contrôleur** : Classes PHP gérant les requêtes HTTP, la validation des données utilisateur, et l'orchestration entre les modèles et les vues.

Un routeur central (front controller) intercepte toutes les requêtes et les distribue au contrôleur approprié. Cette approche m'a permis de comprendre en profondeur le fonctionnement interne des frameworks web modernes qui utilisent ce même pattern.

La base de données MySQL a été modélisée avec un MCD (Modèle Conceptuel de Données) puis un MLD (Modèle Logique de Données), en respectant les formes normales pour éviter la redondance des données.`,
      en: `The application strictly follows the MVC pattern:

- **Model**: PHP classes encapsulating business logic and interactions with the MySQL database via PDO (prepared statements to prevent SQL injection).
- **View**: PHP templates with strict separation between logic and presentation, using Bootstrap for responsive design.
- **Controller**: PHP classes handling HTTP requests, user data validation, and orchestration between models and views.

A central router (front controller) intercepts all requests and distributes them to the appropriate controller. This approach allowed me to deeply understand the internal workings of modern web frameworks that use this same pattern.

The MySQL database was modeled with a CDM (Conceptual Data Model) then an LDM (Logical Data Model), respecting normal forms to avoid data redundancy.`
    },
    architecture: {
      fr: `Structure du projet MVC :
- **/public** : Point d'entrée unique (index.php), assets CSS/JS
- **/src/Controller** : Contrôleurs (ProductController, UserController, CartController, AdminController)
- **/src/Model** : Modèles (Product, User, Cart, Order) avec accès base de données via PDO
- **/src/View** : Templates PHP organisés par module (products/, users/, cart/, admin/)
- **/config** : Configuration base de données et constantes applicatives
- **/sql** : Scripts de création et de peuplement de la base de données`,
      en: `MVC project structure:
- **/public**: Single entry point (index.php), CSS/JS assets
- **/src/Controller**: Controllers (ProductController, UserController, CartController, AdminController)
- **/src/Model**: Models (Product, User, Cart, Order) with database access via PDO
- **/src/View**: PHP templates organized by module (products/, users/, cart/, admin/)
- **/config**: Database configuration and application constants
- **/sql**: Database creation and seeding scripts`
    },
    skills: [
      {
        name: { fr: "Architecture MVC", en: "MVC Architecture" },
        description: { fr: "Implémentation complète du pattern MVC en PHP pur, comprenant le routage, la séparation des responsabilités et le front controller.", en: "Complete implementation of the MVC pattern in pure PHP, including routing, separation of concerns, and front controller." }
      },
      {
        name: { fr: "Sécurité Web", en: "Web Security" },
        description: { fr: "Protection contre les injections SQL (requêtes préparées PDO), XSS (échappement des sorties), CSRF (tokens de vérification) et sécurisation des sessions.", en: "Protection against SQL injection (PDO prepared statements), XSS (output escaping), CSRF (verification tokens), and session security." }
      },
      {
        name: { fr: "Modélisation de bases de données", en: "Database Modeling" },
        description: { fr: "Conception d'un schéma relationnel normalisé, création de MCD/MLD, écriture de requêtes SQL complexes avec jointures et agrégations.", en: "Design of a normalized relational schema, CDM/LDM creation, writing complex SQL queries with joins and aggregations." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Modèle Product avec PDO", en: "Product Model with PDO" },
        code: `class Product {
    private PDO $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    public function findAll(array $filters = []): array {
        $sql = "SELECT p.*, b.name as brand_name
                FROM products p
                JOIN brands b ON p.brand_id = b.id
                WHERE 1=1";
        $params = [];

        if (!empty($filters['brand'])) {
            $sql .= " AND p.brand_id = :brand";
            $params[':brand'] = $filters['brand'];
        }
        if (!empty($filters['min_price'])) {
            $sql .= " AND p.price >= :min_price";
            $params[':min_price'] = $filters['min_price'];
        }

        $stmt = $this->db->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}`,
        language: "php",
        explanation: {
          fr: "Ce modèle illustre l'utilisation de PDO avec des requêtes préparées pour sécuriser les accès à la base de données. Le système de filtrage dynamique construit la requête SQL de manière sécurisée en utilisant des paramètres nommés, évitant ainsi toute injection SQL. La jointure avec la table des marques enrichit les données produit en une seule requête.",
          en: "This model illustrates the use of PDO with prepared statements to secure database access. The dynamic filtering system builds the SQL query securely using named parameters, thus avoiding SQL injection. The join with the brands table enriches product data in a single query."
        }
      }
    ],
    results: {
      fr: `Le projet a été livré dans les délais avec l'ensemble des fonctionnalités demandées. L'application comprend un catalogue de plus de 50 produits, un système de panier fonctionnel, une authentification sécurisée et un panneau d'administration complet. Le projet a obtenu une note de 16/20, avec des retours positifs sur la qualité de l'architecture MVC et la sécurisation de l'application.`,
      en: `The project was delivered on time with all required features. The application includes a catalog of over 50 products, a functional cart system, secure authentication, and a complete administration panel. The project received a grade of 16/20, with positive feedback on the MVC architecture quality and application security.`
    },
    reflection: {
      fr: `Ce projet m'a permis de comprendre en profondeur le fonctionnement d'un framework web en implémentant ses mécanismes de zéro. Avant ce projet, j'utilisais les frameworks sans vraiment comprendre leur fonctionnement interne. Maintenant, je comprends comment fonctionne le routage, l'injection de dépendances, et la séparation des responsabilités.

La principale difficulté a été la gestion du panier en session tout en maintenant la cohérence avec la base de données. J'ai appris l'importance de bien réfléchir à la gestion de l'état avant de coder, plutôt que de corriger les incohérences après coup.`,
      en: `This project allowed me to deeply understand how a web framework works by implementing its mechanisms from scratch. Before this project, I used frameworks without really understanding their internal workings. Now I understand how routing, dependency injection, and separation of concerns work.

The main difficulty was managing the cart in session while maintaining consistency with the database. I learned the importance of thinking carefully about state management before coding, rather than fixing inconsistencies after the fact.`
    },
    thumbnail: "/images/ecommerce.jpg",
    images: [],
    links: { github: "https://github.com/killianrms/ecommerce-parfum" }
  },
  {
    slug: "referendum",
    title: "Referendum",
    category: "university",
    technologies: ["Java", "JavaFX", "FXML", "CSS", "MVC", "SQLite"],
    duration: { fr: "Octobre — Décembre 2023 (Projet universitaire)", en: "October — December 2023 (University project)" },
    team: { fr: "Groupe de 3 étudiants", en: "Group of 3 students" },
    role: { fr: "Développeur principal — Architecture et interface graphique", en: "Lead Developer — Architecture and GUI" },
    shortDescription: {
      fr: "Application de bureau développée en Java/JavaFX permettant la création et la gestion de référendums avec système de vote sécurisé.",
      en: "Desktop application developed in Java/JavaFX enabling the creation and management of referendums with a secure voting system."
    },
    context: {
      fr: `Dans le cadre du module de développement d'applications du BUT Informatique, nous avons conçu et développé une application de bureau en Java/JavaFX permettant d'organiser et de gérer des référendums numériques. L'application devait respecter le pattern MVC et offrir une interface graphique ergonomique.

Le contexte pédagogique mettait l'accent sur la programmation orientée objet avancée, l'utilisation de design patterns, et la séparation entre la logique métier et l'interface utilisateur. Le projet nous a également amené à réfléchir sur les problématiques de sécurité du vote électronique, même dans un cadre simplifié.`,
      en: `As part of the application development module in the Computer Science degree, we designed and developed a desktop application in Java/JavaFX for organizing and managing digital referendums. The application had to follow the MVC pattern and offer an ergonomic graphical interface.

The pedagogical context emphasized advanced object-oriented programming, the use of design patterns, and the separation between business logic and user interface. The project also led us to think about electronic voting security issues, even in a simplified context.`
    },
    objectives: {
      fr: `1. Concevoir une application desktop en Java avec interface graphique JavaFX
2. Implémenter le pattern MVC pour séparer la logique métier de l'interface
3. Gérer la persistance des données avec SQLite
4. Assurer l'unicité du vote par utilisateur et la confidentialité des résultats
5. Créer une interface utilisateur intuitive et responsive`,
      en: `1. Design a desktop application in Java with JavaFX GUI
2. Implement the MVC pattern to separate business logic from the interface
3. Manage data persistence with SQLite
4. Ensure vote uniqueness per user and result confidentiality
5. Create an intuitive and responsive user interface`
    },
    approach: {
      fr: `L'application a été structurée selon le pattern MVC avec JavaFX :

- **Modèle** : Classes Java représentant les entités métier (Referendum, Vote, User) avec accès à la base SQLite via JDBC.
- **Vue** : Fichiers FXML définissant la structure de l'interface, stylés avec CSS pour un rendu moderne.
- **Contrôleur** : Classes Java liées aux vues FXML, gérant les interactions utilisateur et orchestrant les appels au modèle.

La sécurité du vote a été assurée par un système de hashage des identifiants de votants, rendant impossible le lien entre un vote et un utilisateur tout en garantissant l'unicité du vote. Les résultats ne sont accessibles qu'après la clôture du référendum.`,
      en: `The application was structured according to the MVC pattern with JavaFX:

- **Model**: Java classes representing business entities (Referendum, Vote, User) with SQLite database access via JDBC.
- **View**: FXML files defining the interface structure, styled with CSS for a modern look.
- **Controller**: Java classes linked to FXML views, managing user interactions and orchestrating model calls.

Vote security was ensured by a voter identifier hashing system, making it impossible to link a vote to a user while guaranteeing vote uniqueness. Results are only accessible after the referendum closes.`
    },
    architecture: {
      fr: `Application JavaFX structurée en MVC :
- **Model** : Entités Java + DAO (Data Access Object) pour l'accès SQLite
- **View** : FXML + CSS pour l'interface graphique
- **Controller** : Contrôleurs JavaFX liés aux vues FXML
- **Service** : Couche service pour la logique métier (VoteService, ReferendumService)`,
      en: `JavaFX application structured in MVC:
- **Model**: Java entities + DAO (Data Access Object) for SQLite access
- **View**: FXML + CSS for the graphical interface
- **Controller**: JavaFX controllers linked to FXML views
- **Service**: Service layer for business logic (VoteService, ReferendumService)`
    },
    skills: [
      {
        name: { fr: "Java avancé & POO", en: "Advanced Java & OOP" },
        description: { fr: "Utilisation avancée de l'héritage, du polymorphisme, des interfaces et des design patterns (DAO, Observer, Singleton) dans un projet concret.", en: "Advanced use of inheritance, polymorphism, interfaces, and design patterns (DAO, Observer, Singleton) in a concrete project." }
      },
      {
        name: { fr: "Interface graphique JavaFX", en: "JavaFX GUI" },
        description: { fr: "Conception d'interfaces utilisateur avec JavaFX et FXML, gestion des événements, binding de propriétés et stylisation CSS.", en: "User interface design with JavaFX and FXML, event handling, property binding, and CSS styling." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Pattern DAO pour l'accès aux données", en: "DAO Pattern for Data Access" },
        code: `public class ReferendumDAO {
    private final Connection connection;

    public ReferendumDAO(Connection connection) {
        this.connection = connection;
    }

    public List<Referendum> findActive() throws SQLException {
        String sql = "SELECT * FROM referendums WHERE end_date > ? AND status = 'ACTIVE'";
        PreparedStatement stmt = connection.prepareStatement(sql);
        stmt.setTimestamp(1, Timestamp.valueOf(LocalDateTime.now()));

        ResultSet rs = stmt.executeQuery();
        List<Referendum> results = new ArrayList<>();
        while (rs.next()) {
            results.add(mapRow(rs));
        }
        return results;
    }

    private Referendum mapRow(ResultSet rs) throws SQLException {
        return new Referendum(
            rs.getLong("id"),
            rs.getString("title"),
            rs.getString("description"),
            rs.getTimestamp("end_date").toLocalDateTime(),
            ReferendumStatus.valueOf(rs.getString("status"))
        );
    }
}`,
        language: "java",
        explanation: {
          fr: "Ce DAO (Data Access Object) encapsule toute la logique d'accès à la base de données SQLite pour les référendums. Le pattern DAO permet d'isoler la couche de persistance du reste de l'application, facilitant ainsi les tests et l'évolution de la base de données. Les requêtes préparées (PreparedStatement) protègent contre les injections SQL.",
          en: "This DAO (Data Access Object) encapsulates all SQLite database access logic for referendums. The DAO pattern isolates the persistence layer from the rest of the application, facilitating testing and database evolution. Prepared statements protect against SQL injection."
        }
      }
    ],
    results: {
      fr: `L'application a été livrée fonctionnelle avec toutes les fonctionnalités demandées : création de référendums, système de vote sécurisé, affichage des résultats et interface d'administration. Le projet a été bien noté et salué pour la qualité de son architecture et la clarté de son interface.`,
      en: `The application was delivered functional with all required features: referendum creation, secure voting system, result display, and administration interface. The project was well-graded and praised for the quality of its architecture and the clarity of its interface.`
    },
    reflection: {
      fr: `Ce projet a été ma première vraie expérience de développement d'application desktop structurée. J'ai appris l'importance du pattern DAO pour isoler l'accès aux données, et comment JavaFX permet de créer des interfaces riches tout en maintenant une bonne séparation des responsabilités.

La gestion de la sécurité du vote, même simplifiée, m'a sensibilisé aux enjeux de la confiance numérique et de l'intégrité des données dans les systèmes de vote. C'est un sujet qui a renforcé mon intérêt pour la cybersécurité.`,
      en: `This project was my first real experience developing a structured desktop application. I learned the importance of the DAO pattern for isolating data access, and how JavaFX enables creating rich interfaces while maintaining good separation of concerns.

Managing vote security, even simplified, made me aware of digital trust and data integrity issues in voting systems. This topic reinforced my interest in cybersecurity.`
    },
    thumbnail: "/images/referendum.jpg",
    images: [],
    links: { github: "https://github.com/killianrms/referendum" }
  },
  {
    slug: "bot-fortnite-python",
    title: "Bot Fortnite en Python",
    category: "personal",
    technologies: ["Python", "API REST", "OAuth2", "JSON", "Asyncio", "WebSocket"],
    duration: { fr: "Projet personnel continu (2023 — 2024)", en: "Ongoing personal project (2023 — 2024)" },
    team: { fr: "Projet individuel", en: "Individual project" },
    role: { fr: "Développeur unique — Conception, développement et maintenance", en: "Sole Developer — Design, development and maintenance" },
    shortDescription: {
      fr: "Bot automatisé en Python interagissant avec les API d'Epic Games pour récupérer des statistiques, gérer des listes d'amis et automatiser des tâches dans Fortnite.",
      en: "Automated Python bot interacting with Epic Games APIs to retrieve statistics, manage friend lists, and automate tasks in Fortnite."
    },
    context: {
      fr: `Ce projet personnel est né de ma passion pour le jeu Fortnite et de ma volonté d'explorer les possibilités offertes par les API d'Epic Games. L'objectif initial était simple : récupérer automatiquement mes statistiques de jeu. Mais le projet a rapidement évolué pour devenir un bot complet capable d'interagir avec l'écosystème Fortnite via les API non-documentées d'Epic Games.

Ce projet m'a poussé à explorer des concepts avancés de programmation Python que je n'aurais pas abordés dans un cadre universitaire : la programmation asynchrone avec asyncio, l'authentification OAuth2, la gestion de WebSockets pour les communications en temps réel, et le reverse engineering d'API non-documentées.

La particularité de ce projet est qu'il m'a obligé à faire du reverse engineering : les API d'Epic Games n'étant pas publiquement documentées, j'ai dû analyser le trafic réseau du client officiel pour comprendre les endpoints disponibles, les formats de requêtes attendus et les mécanismes d'authentification.`,
      en: `This personal project was born from my passion for Fortnite and my desire to explore the possibilities offered by Epic Games APIs. The initial goal was simple: automatically retrieve my game statistics. But the project quickly evolved into a complete bot capable of interacting with the Fortnite ecosystem via Epic Games' undocumented APIs.

This project pushed me to explore advanced Python programming concepts that I wouldn't have encountered in a university setting: asynchronous programming with asyncio, OAuth2 authentication, WebSocket management for real-time communications, and reverse engineering of undocumented APIs.

The specificity of this project is that it required reverse engineering: since Epic Games' APIs are not publicly documented, I had to analyze the official client's network traffic to understand available endpoints, expected request formats, and authentication mechanisms.`
    },
    objectives: {
      fr: `1. Récupérer et afficher les statistiques de jeu détaillées via les API Epic Games
2. Automatiser la gestion de la liste d'amis (ajout, suppression, acceptation)
3. Implémenter l'authentification OAuth2 complète avec refresh token
4. Communiquer en temps réel via WebSocket pour les notifications
5. Maintenir le bot à jour face aux changements d'API fréquents`,
      en: `1. Retrieve and display detailed game statistics via Epic Games APIs
2. Automate friend list management (add, remove, accept)
3. Implement complete OAuth2 authentication with refresh token
4. Communicate in real-time via WebSocket for notifications
5. Keep the bot updated against frequent API changes`
    },
    approach: {
      fr: `Le bot est développé en Python 3 avec une architecture modulaire :

- **Module d'authentification** : Gestion complète du flux OAuth2 d'Epic Games, incluant l'obtention du token initial, le refresh automatique, et la gestion de multiples comptes.
- **Module API** : Classes encapsulant les appels aux différents endpoints (statistiques, amis, matchmaking, boutique).
- **Module WebSocket** : Client XMPP/WebSocket pour les communications en temps réel (notifications d'amis, invitations).
- **Module CLI** : Interface en ligne de commande interactive pour contrôler le bot.

L'utilisation d'asyncio permet de gérer simultanément les requêtes HTTP, les connexions WebSocket et l'interface utilisateur sans blocage, offrant une réactivité optimale.`,
      en: `The bot is developed in Python 3 with a modular architecture:

- **Authentication module**: Complete management of Epic Games' OAuth2 flow, including initial token acquisition, automatic refresh, and multi-account management.
- **API module**: Classes encapsulating calls to different endpoints (statistics, friends, matchmaking, shop).
- **WebSocket module**: XMPP/WebSocket client for real-time communications (friend notifications, invitations).
- **CLI module**: Interactive command-line interface for bot control.

Using asyncio allows simultaneous handling of HTTP requests, WebSocket connections, and user interface without blocking, providing optimal responsiveness.`
    },
    architecture: {
      fr: `Architecture modulaire asynchrone :
- **auth/** : Gestion OAuth2 (AuthClient, TokenManager)
- **api/** : Clients API (StatsAPI, FriendsAPI, ShopAPI)
- **ws/** : Client WebSocket XMPP pour le temps réel
- **commands/** : Commandes CLI du bot
- **utils/** : Utilitaires (logging, config, helpers)`,
      en: `Asynchronous modular architecture:
- **auth/**: OAuth2 management (AuthClient, TokenManager)
- **api/**: API clients (StatsAPI, FriendsAPI, ShopAPI)
- **ws/**: XMPP WebSocket client for real-time
- **commands/**: Bot CLI commands
- **utils/**: Utilities (logging, config, helpers)`
    },
    skills: [
      {
        name: { fr: "Programmation asynchrone Python", en: "Asynchronous Python Programming" },
        description: { fr: "Maîtrise d'asyncio, des coroutines, des event loops et de la gestion concurrente des I/O pour des performances optimales.", en: "Mastery of asyncio, coroutines, event loops, and concurrent I/O management for optimal performance." }
      },
      {
        name: { fr: "Authentification OAuth2", en: "OAuth2 Authentication" },
        description: { fr: "Implémentation complète du protocole OAuth2 avec gestion des tokens d'accès, refresh tokens et flux d'authentification multi-étapes.", en: "Complete implementation of the OAuth2 protocol with access token management, refresh tokens, and multi-step authentication flows." }
      },
      {
        name: { fr: "Reverse Engineering d'API", en: "API Reverse Engineering" },
        description: { fr: "Analyse du trafic réseau pour identifier les endpoints, les headers requis et les formats de données des API non-documentées d'Epic Games.", en: "Network traffic analysis to identify endpoints, required headers, and data formats of Epic Games' undocumented APIs." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Client d'authentification OAuth2 asynchrone", en: "Asynchronous OAuth2 Authentication Client" },
        code: `import aiohttp
import asyncio
from datetime import datetime, timedelta

class EpicAuthClient:
    TOKEN_URL = "https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token"

    def __init__(self, client_id: str, client_secret: str):
        self.client_id = client_id
        self.client_secret = client_secret
        self.access_token = None
        self.refresh_token = None
        self.token_expiry = None

    async def authenticate(self, auth_code: str) -> dict:
        async with aiohttp.ClientSession() as session:
            async with session.post(
                self.TOKEN_URL,
                headers={"Content-Type": "application/x-www-form-urlencoded"},
                auth=aiohttp.BasicAuth(self.client_id, self.client_secret),
                data={
                    "grant_type": "authorization_code",
                    "code": auth_code
                }
            ) as resp:
                data = await resp.json()
                self._update_tokens(data)
                return data

    async def refresh(self) -> dict:
        async with aiohttp.ClientSession() as session:
            async with session.post(
                self.TOKEN_URL,
                auth=aiohttp.BasicAuth(self.client_id, self.client_secret),
                data={
                    "grant_type": "refresh_token",
                    "refresh_token": self.refresh_token
                }
            ) as resp:
                data = await resp.json()
                self._update_tokens(data)
                return data

    def _update_tokens(self, data: dict):
        self.access_token = data["access_token"]
        self.refresh_token = data.get("refresh_token")
        self.token_expiry = datetime.now() + timedelta(
            seconds=data["expires_in"]
        )`,
        language: "python",
        explanation: {
          fr: "Ce client d'authentification asynchrone gère le flux OAuth2 complet d'Epic Games. La méthode authenticate() effectue l'échange du code d'autorisation contre les tokens d'accès, tandis que refresh() renouvelle automatiquement le token avant son expiration. L'utilisation d'aiohttp permet des requêtes non-bloquantes, essentielles pour maintenir la réactivité du bot pendant l'authentification.",
          en: "This asynchronous authentication client manages Epic Games' complete OAuth2 flow. The authenticate() method exchanges the authorization code for access tokens, while refresh() automatically renews the token before expiration. Using aiohttp enables non-blocking requests, essential for maintaining bot responsiveness during authentication."
        }
      }
    ],
    results: {
      fr: `Le bot est fonctionnel et utilisé quotidiennement. Il gère avec succès l'authentification OAuth2, récupère les statistiques en temps réel, et automatise la gestion des amis. Le projet a été partagé sur GitHub et a reçu des contributions de la communauté.

Ce projet personnel m'a apporté des compétences que je n'aurais pas acquises uniquement dans le cadre universitaire, notamment en programmation asynchrone et en sécurité des API.`,
      en: `The bot is functional and used daily. It successfully handles OAuth2 authentication, retrieves real-time statistics, and automates friend management. The project has been shared on GitHub and received community contributions.

This personal project gave me skills I wouldn't have acquired solely in a university setting, particularly in asynchronous programming and API security.`
    },
    reflection: {
      fr: `Ce projet illustre parfaitement la valeur de l'apprentissage par la pratique. En m'attaquant à un problème qui me passionnait, j'ai exploré des technologies et des concepts bien au-delà du programme universitaire.

Le reverse engineering des API m'a appris à lire et analyser le trafic réseau, une compétence directement transposable en cybersécurité. La programmation asynchrone m'a fait comprendre les enjeux de performance et de concurrence dans les applications modernes.

La principale leçon apprise est l'importance de la maintenance : les API non-documentées changent fréquemment, et j'ai dû adapter mon code régulièrement, ce qui m'a enseigné la valeur d'une architecture modulaire et bien testée.`,
      en: `This project perfectly illustrates the value of learning by doing. By tackling a problem I was passionate about, I explored technologies and concepts well beyond the university curriculum.

API reverse engineering taught me to read and analyze network traffic, a skill directly transferable to cybersecurity. Asynchronous programming made me understand performance and concurrency challenges in modern applications.

The main lesson learned is the importance of maintenance: undocumented APIs change frequently, and I had to adapt my code regularly, which taught me the value of a modular and well-tested architecture.`
    },
    thumbnail: "/images/fortnite-bot.jpg",
    images: [],
    links: { github: "https://github.com/killianrms/fortnite-bot" }
  },
  {
    slug: "nuit-info-2025",
    title: "Nuit de l'Info 2025",
    category: "competition",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSocket", "CSS3"],
    duration: { fr: "Décembre 2025 (1 nuit)", en: "December 2025 (1 night)" },
    team: { fr: "Équipe de 6 étudiants", en: "Team of 6 students" },
    role: { fr: "Développeur Front-End & Intégrateur", en: "Front-End Developer & Integrator" },
    shortDescription: {
      fr: "Compétition nationale de développement web en une nuit sur le thème de l'informatique responsable et du numérique durable.",
      en: "National one-night web development competition on the theme of responsible computing and sustainable digital."
    },
    context: {
      fr: `La Nuit de l'Info est une compétition nationale annuelle qui rassemble des étudiants en informatique de toute la France pendant une nuit entière. L'édition 2025 portait sur le thème de l'informatique responsable et du numérique durable, nous invitant à réfléchir sur l'impact environnemental du numérique et à proposer des solutions concrètes.

Notre équipe de 6 étudiants de l'IUT de Montpellier s'est organisée rapidement en répartissant les tâches : deux développeurs front-end (dont moi), deux développeurs back-end, un designer/UX, et un chef de projet qui s'occupait également de la documentation. L'enjeu était de livrer un produit fonctionnel en moins de 12 heures, ce qui a nécessité une coordination efficace et des choix techniques rapides.`,
      en: `The Nuit de l'Info is an annual national competition that brings together computer science students from all over France for an entire night. The 2025 edition focused on responsible computing and sustainable digital, inviting us to reflect on the environmental impact of digital technology and propose concrete solutions.

Our team of 6 students from IUT Montpellier organized quickly by distributing tasks: two front-end developers (including myself), two back-end developers, a designer/UX, and a project manager who also handled documentation. The challenge was to deliver a functional product in less than 12 hours, requiring efficient coordination and quick technical choices.`
    },
    objectives: {
      fr: `1. Développer une application web sensibilisant aux enjeux du numérique responsable
2. Implémenter des fonctionnalités interactives engageantes pour l'utilisateur
3. Optimiser les performances et l'accessibilité de l'application
4. Livrer un produit fonctionnel et présentable en moins de 12 heures`,
      en: `1. Develop a web application raising awareness about responsible digital issues
2. Implement engaging interactive features for the user
3. Optimize application performance and accessibility
4. Deliver a functional and presentable product in less than 12 hours`
    },
    approach: {
      fr: `Nous avons opté pour une stack React / Node.js / Express / MongoDB pour sa rapidité de mise en place. L'application proposait un calculateur d'empreinte carbone numérique personnalisé, avec des recommandations pour réduire son impact.

Mon rôle de développeur front-end m'a amené à créer les composants React interactifs, les animations CSS pour rendre l'expérience engageante, et à intégrer les API back-end pour l'affichage des résultats en temps réel.

La communication en temps réel via WebSocket permettait d'afficher un compteur global agrégé de tous les utilisateurs, créant un effet de communauté et de prise de conscience collective.`,
      en: `We chose a React / Node.js / Express / MongoDB stack for its quick setup. The application offered a personalized digital carbon footprint calculator, with recommendations to reduce impact.

My role as front-end developer led me to create interactive React components, CSS animations to make the experience engaging, and integrate back-end APIs for real-time result display.

Real-time communication via WebSocket displayed an aggregated global counter of all users, creating a community effect and collective awareness.`
    },
    architecture: {
      fr: `Stack MERN (MongoDB, Express, React, Node.js) :
- **Front-end** : React avec composants fonctionnels et hooks, animations CSS3
- **Back-end** : Express.js avec API REST et WebSocket (Socket.io)
- **Base de données** : MongoDB pour le stockage flexible des profils utilisateurs
- **Temps réel** : Socket.io pour le compteur communautaire en direct`,
      en: `MERN Stack (MongoDB, Express, React, Node.js):
- **Front-end**: React with functional components and hooks, CSS3 animations
- **Back-end**: Express.js with REST API and WebSocket (Socket.io)
- **Database**: MongoDB for flexible user profile storage
- **Real-time**: Socket.io for live community counter`
    },
    skills: [
      {
        name: { fr: "Développement sous pression", en: "Development Under Pressure" },
        description: { fr: "Capacité à produire du code de qualité dans un temps très limité, à prendre des décisions techniques rapides et à gérer le stress.", en: "Ability to produce quality code in very limited time, make quick technical decisions, and manage stress." }
      },
      {
        name: { fr: "Travail d'équipe intensif", en: "Intensive Teamwork" },
        description: { fr: "Coordination efficace au sein d'une équipe de 6 personnes, communication constante, résolution rapide des conflits de merge Git.", en: "Efficient coordination within a 6-person team, constant communication, quick resolution of Git merge conflicts." }
      }
    ],
    codeHighlights: [],
    results: {
      fr: `Notre application a été livrée fonctionnelle à la fin de la nuit. Le calculateur d'empreinte carbone permettait aux utilisateurs de mesurer l'impact de leurs habitudes numériques et de recevoir des conseils personnalisés. Le compteur communautaire en temps réel a été particulièrement apprécié par le jury.

Cette expérience m'a appris la valeur du prototypage rapide et de la priorisation des fonctionnalités essentielles (MVP) lorsque le temps est limité.`,
      en: `Our application was delivered functional by the end of the night. The carbon footprint calculator allowed users to measure the impact of their digital habits and receive personalized advice. The real-time community counter was particularly appreciated by the jury.

This experience taught me the value of rapid prototyping and prioritizing essential features (MVP) when time is limited.`
    },
    reflection: {
      fr: `La Nuit de l'Info 2025 a été une expérience unique qui m'a appris énormément sur la gestion de projet en conditions extrêmes. En seulement 12 heures, il faut savoir identifier les priorités, abandonner les fonctionnalités secondaires, et se concentrer sur un MVP fonctionnel.

La principale difficulté a été la gestion des conflits Git lors des merges simultanés. Nous avons appris à mieux structurer notre code en modules indépendants pour minimiser les conflits. Cette leçon m'accompagne dans tous mes projets collaboratifs depuis.`,
      en: `The Nuit de l'Info 2025 was a unique experience that taught me a lot about project management under extreme conditions. In just 12 hours, you need to identify priorities, abandon secondary features, and focus on a functional MVP.

The main difficulty was managing Git conflicts during simultaneous merges. We learned to better structure our code into independent modules to minimize conflicts. This lesson has accompanied me in all my collaborative projects since.`
    },
    thumbnail: "/images/nuitinfo2025.jpg",
    images: [],
    links: {}
  },
  {
    slug: "autotweetvideouploader",
    title: "AutoTweetVideoUploader",
    category: "personal",
    technologies: ["Python", "Twitter API v2", "OAuth 1.0a", "FFmpeg", "Cron", "Linux"],
    duration: { fr: "Projet personnel (2024)", en: "Personal project (2024)" },
    team: { fr: "Projet individuel", en: "Individual project" },
    role: { fr: "Développeur unique", en: "Sole Developer" },
    shortDescription: {
      fr: "Bot Python d'automatisation de publication de vidéos sur Twitter/X, avec planification, conversion vidéo et gestion des limites d'API.",
      en: "Python bot for automating video publication on Twitter/X, with scheduling, video conversion, and API rate limit management."
    },
    context: {
      fr: `Ce projet personnel est né du constat que la publication régulière de contenu vidéo sur Twitter/X est chronophage et répétitive. J'ai développé un bot Python qui automatise l'ensemble du processus : sélection de la vidéo, conversion au format compatible Twitter, rédaction du tweet, et publication planifiée.

Le bot utilise l'API Twitter v2 avec authentification OAuth 1.0a, FFmpeg pour la conversion et l'optimisation des vidéos, et le système cron de Linux pour la planification des publications. Ce projet m'a permis d'explorer l'intégration de multiples API et outils système dans un pipeline automatisé.`,
      en: `This personal project came from the observation that regularly publishing video content on Twitter/X is time-consuming and repetitive. I developed a Python bot that automates the entire process: video selection, conversion to Twitter-compatible format, tweet composition, and scheduled publication.

The bot uses the Twitter v2 API with OAuth 1.0a authentication, FFmpeg for video conversion and optimization, and Linux's cron system for publication scheduling. This project allowed me to explore integrating multiple APIs and system tools into an automated pipeline.`
    },
    objectives: {
      fr: `1. Automatiser la publication de vidéos sur Twitter/X
2. Gérer la conversion vidéo avec FFmpeg (codec, résolution, taille)
3. Respecter les limites de l'API Twitter (rate limiting)
4. Planifier les publications via cron`,
      en: `1. Automate video publication on Twitter/X
2. Handle video conversion with FFmpeg (codec, resolution, size)
3. Respect Twitter API limits (rate limiting)
4. Schedule publications via cron`
    },
    approach: {
      fr: `Le bot suit un pipeline en 4 étapes :
1. **Sélection** : Parcours d'un dossier de vidéos en attente et sélection selon un ordre configuré.
2. **Conversion** : Utilisation de FFmpeg via subprocess pour convertir la vidéo au format MP4 H.264 compatible Twitter, avec optimisation de la taille.
3. **Upload** : Upload chunked via l'API Twitter v2 pour les vidéos volumineuses, avec gestion des erreurs et retry.
4. **Publication** : Création du tweet avec le media attaché, gestion du rate limiting avec backoff exponentiel.

Le tout est orchestré par un script Python exécuté via cron à des heures optimales pour maximiser l'engagement.`,
      en: `The bot follows a 4-step pipeline:
1. **Selection**: Browse a pending videos folder and select according to a configured order.
2. **Conversion**: Use FFmpeg via subprocess to convert video to Twitter-compatible MP4 H.264 format, with size optimization.
3. **Upload**: Chunked upload via Twitter v2 API for large videos, with error handling and retry.
4. **Publication**: Tweet creation with attached media, rate limiting management with exponential backoff.

Everything is orchestrated by a Python script executed via cron at optimal times to maximize engagement.`
    },
    architecture: {
      fr: `Pipeline automatisé :
- **video_selector.py** : Sélection et file d'attente des vidéos
- **video_converter.py** : Conversion FFmpeg avec paramètres optimisés
- **twitter_client.py** : Client API Twitter v2 avec OAuth 1.0a et gestion du rate limiting
- **scheduler.py** : Script principal orchestrant le pipeline, exécuté via cron`,
      en: `Automated pipeline:
- **video_selector.py**: Video selection and queue
- **video_converter.py**: FFmpeg conversion with optimized parameters
- **twitter_client.py**: Twitter v2 API client with OAuth 1.0a and rate limiting management
- **scheduler.py**: Main script orchestrating the pipeline, executed via cron`
    },
    skills: [
      {
        name: { fr: "Intégration d'API tierces", en: "Third-party API Integration" },
        description: { fr: "Maîtrise de l'API Twitter v2, gestion de l'authentification OAuth 1.0a, et respect des contraintes de rate limiting.", en: "Mastery of Twitter v2 API, OAuth 1.0a authentication management, and rate limiting constraints compliance." }
      },
      {
        name: { fr: "Automatisation système", en: "System Automation" },
        description: { fr: "Utilisation de cron, subprocess et FFmpeg pour créer un pipeline automatisé fiable sur Linux.", en: "Using cron, subprocess, and FFmpeg to create a reliable automated pipeline on Linux." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Upload chunked de vidéo sur Twitter", en: "Chunked Video Upload to Twitter" },
        code: `import tweepy
import os
import time

class TwitterUploader:
    CHUNK_SIZE = 4 * 1024 * 1024  # 4MB chunks

    def __init__(self, api: tweepy.API):
        self.api = api

    def upload_video(self, file_path: str) -> str:
        file_size = os.path.getsize(file_path)

        # INIT
        media = self.api.chunked_upload(
            filename=file_path,
            file_type='video/mp4',
            wait_for_async_finalize=True
        )

        # Wait for processing
        while media.processing_info and \\
              media.processing_info['state'] != 'succeeded':
            wait = media.processing_info.get(
                'check_after_secs', 5
            )
            time.sleep(wait)
            media = self.api.get_media_upload_status(
                media.media_id
            )

        return str(media.media_id)`,
        language: "python",
        explanation: {
          fr: "Cette classe gère l'upload de vidéos volumineuses vers Twitter en utilisant le mécanisme d'upload chunked. La vidéo est envoyée par morceaux de 4MB, puis on attend que Twitter termine le traitement asynchrone de la vidéo avant de récupérer l'identifiant media. La boucle de polling avec wait adaptatif respecte les délais recommandés par l'API.",
          en: "This class handles uploading large videos to Twitter using the chunked upload mechanism. The video is sent in 4MB chunks, then we wait for Twitter to finish asynchronous video processing before retrieving the media identifier. The polling loop with adaptive wait respects the delays recommended by the API."
        }
      }
    ],
    results: {
      fr: `Le bot fonctionne de manière autonome et a publié plus de 200 vidéos automatiquement. Il gère correctement les erreurs d'API, les vidéos trop volumineuses (compression automatique), et les limites de publication. Le code est open-source sur GitHub et a inspiré d'autres développeurs de la communauté.`,
      en: `The bot runs autonomously and has published over 200 videos automatically. It correctly handles API errors, oversized videos (automatic compression), and publication limits. The code is open-source on GitHub and has inspired other community developers.`
    },
    reflection: {
      fr: `Ce projet m'a appris la réalité de l'automatisation : un bot qui fonctionne « la plupart du temps » n'est pas suffisant. La gestion robuste des erreurs, le logging détaillé, et les mécanismes de retry sont essentiels pour un système autonome fiable.

J'ai également appris l'importance de respecter les conditions d'utilisation des API et les bonnes pratiques d'usage (rate limiting, contenu approprié).`,
      en: `This project taught me the reality of automation: a bot that works "most of the time" is not enough. Robust error handling, detailed logging, and retry mechanisms are essential for a reliable autonomous system.

I also learned the importance of respecting API terms of use and usage best practices (rate limiting, appropriate content).`
    },
    thumbnail: "/images/autotweetvideo.jpg",
    images: [],
    links: { github: "https://github.com/killianrms/AutoTweetVideoUploader" }
  },
  {
    slug: "portfolio-personnel",
    title: "Portfolio Personnel",
    category: "personal",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    duration: { fr: "Projet personnel (2024)", en: "Personal project (2024)" },
    team: { fr: "Projet individuel", en: "Individual project" },
    role: { fr: "Développeur & Designer", en: "Developer & Designer" },
    shortDescription: {
      fr: "Première version de mon portfolio personnel, développé en HTML/CSS/JS vanilla pour présenter mes projets et compétences.",
      en: "First version of my personal portfolio, developed in vanilla HTML/CSS/JS to showcase my projects and skills."
    },
    context: {
      fr: `Ce portfolio (v1) a été mon premier projet de vitrine personnelle en ligne. Développé en HTML, CSS et JavaScript sans framework, il m'a permis d'apprendre les fondamentaux du développement web front-end et les principes du responsive design.

La version actuelle (v2) que vous consultez est une refonte complète réalisée avec Next.js, intégrant des animations avancées, un système bilingue, et des analyses de projets beaucoup plus détaillées pour répondre aux attentes académiques de mon parcours BUT Informatique.`,
      en: `This portfolio (v1) was my first personal online showcase project. Developed in HTML, CSS, and JavaScript without a framework, it allowed me to learn the fundamentals of front-end web development and responsive design principles.

The current version (v2) you are viewing is a complete redesign built with Next.js, integrating advanced animations, a bilingual system, and much more detailed project analyses to meet the academic expectations of my Computer Science degree.`
    },
    objectives: {
      fr: `1. Créer une présence en ligne professionnelle
2. Apprendre les fondamentaux HTML/CSS/JS
3. Mettre en pratique le responsive design
4. Présenter mes projets de manière claire et accessible`,
      en: `1. Create a professional online presence
2. Learn HTML/CSS/JS fundamentals
3. Practice responsive design
4. Present my projects clearly and accessibly`
    },
    approach: {
      fr: `Développement en vanilla HTML/CSS/JS avec une approche mobile-first. Utilisation de CSS Grid et Flexbox pour la mise en page responsive, JavaScript pour les interactions (navigation, filtres, animations). Le site est hébergé et déployé via GitHub Pages.`,
      en: `Development in vanilla HTML/CSS/JS with a mobile-first approach. Using CSS Grid and Flexbox for responsive layout, JavaScript for interactions (navigation, filters, animations). The site is hosted and deployed via GitHub Pages.`
    },
    architecture: {
      fr: `Site statique simple :
- **index.html** : Structure du site avec sections (biographie, parcours, projets, contact)
- **styles/** : Fichiers CSS organisés par section
- **scripts/** : JavaScript pour les interactions et animations
- **assets/** : Images, icônes et fichiers statiques`,
      en: `Simple static site:
- **index.html**: Site structure with sections (biography, journey, projects, contact)
- **styles/**: CSS files organized by section
- **scripts/**: JavaScript for interactions and animations
- **assets/**: Images, icons, and static files`
    },
    skills: [
      {
        name: { fr: "HTML/CSS avancé", en: "Advanced HTML/CSS" },
        description: { fr: "Maîtrise de CSS Grid, Flexbox, animations CSS, media queries et approche mobile-first.", en: "Mastery of CSS Grid, Flexbox, CSS animations, media queries, and mobile-first approach." }
      },
      {
        name: { fr: "JavaScript vanilla", en: "Vanilla JavaScript" },
        description: { fr: "Manipulation du DOM, gestion des événements, animations et interactions sans dépendance à un framework.", en: "DOM manipulation, event handling, animations, and interactions without framework dependency." }
      }
    ],
    codeHighlights: [],
    results: {
      fr: `Le portfolio v1 a rempli son rôle de vitrine en ligne pendant un an, me permettant de partager mes projets avec des recruteurs et des pairs. Son principal défaut était le manque de profondeur dans les analyses de projets, ce qui a motivé la création de cette v2.`,
      en: `The v1 portfolio served its purpose as an online showcase for a year, allowing me to share my projects with recruiters and peers. Its main drawback was the lack of depth in project analyses, which motivated the creation of this v2.`
    },
    reflection: {
      fr: `Ce premier portfolio m'a appris l'importance de la présentation dans la carrière d'un développeur. Au-delà du code, savoir communiquer sur son travail est une compétence essentielle. La v2 représente une évolution naturelle, avec plus de profondeur analytique et une meilleure expérience utilisateur.`,
      en: `This first portfolio taught me the importance of presentation in a developer's career. Beyond code, knowing how to communicate about your work is an essential skill. V2 represents a natural evolution, with more analytical depth and better user experience.`
    },
    thumbnail: "/images/portfolio.jpg",
    images: [],
    links: { github: "https://github.com/killianrms/portfolio", live: "https://killianrms.com" }
  },
  {
    slug: "code-game-jam-2023",
    title: "Code Game Jam 2023",
    category: "competition",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Design"],
    duration: { fr: "Novembre 2023 (48h)", en: "November 2023 (48h)" },
    team: { fr: "Équipe de 4 étudiants", en: "Team of 4 students" },
    role: { fr: "Développeur Gameplay & Graphismes", en: "Gameplay & Graphics Developer" },
    shortDescription: {
      fr: "Développement d'un jeu vidéo en 48 heures lors d'une compétition de game jam, utilisant HTML5 Canvas et JavaScript pur.",
      en: "Video game development in 48 hours during a game jam competition, using HTML5 Canvas and pure JavaScript."
    },
    context: {
      fr: `La Code Game Jam 2023 est une compétition de développement de jeux vidéo organisée sur 48 heures. Le thème, révélé au début de la compétition, devait être interprété et intégré dans le gameplay. Notre équipe a choisi de développer un jeu en JavaScript pur avec HTML5 Canvas, sans moteur de jeu, pour démontrer nos compétences en programmation fondamentale.

Ce défi de créer un jeu complet en 48 heures nous a poussés à optimiser notre workflow, à prioriser les fonctionnalités essentielles, et à travailler de manière très coordonnée. J'étais responsable du moteur de rendu, de la boucle de jeu, et de la logique de gameplay principale.`,
      en: `The Code Game Jam 2023 is a 48-hour video game development competition. The theme, revealed at the start of the competition, had to be interpreted and integrated into the gameplay. Our team chose to develop a game in pure JavaScript with HTML5 Canvas, without a game engine, to demonstrate our fundamental programming skills.

The challenge of creating a complete game in 48 hours pushed us to optimize our workflow, prioritize essential features, and work in a highly coordinated manner. I was responsible for the rendering engine, game loop, and main gameplay logic.`
    },
    objectives: {
      fr: `1. Créer un jeu jouable et amusant en 48 heures
2. Implémenter un moteur de rendu 2D avec HTML5 Canvas
3. Intégrer le thème imposé de manière créative
4. Optimiser les performances pour un gameplay fluide`,
      en: `1. Create a playable and fun game in 48 hours
2. Implement a 2D rendering engine with HTML5 Canvas
3. Creatively integrate the imposed theme
4. Optimize performance for smooth gameplay`
    },
    approach: {
      fr: `Le jeu a été développé entièrement en JavaScript vanilla avec HTML5 Canvas pour le rendu 2D. La boucle de jeu utilise requestAnimationFrame pour des animations fluides à 60 FPS. La détection de collisions est basée sur des AABB (Axis-Aligned Bounding Boxes) pour des performances optimales.

Mon approche a privilégié la simplicité et l'efficacité : un système d'entités léger, un gestionnaire d'input réactif, et un système de sprites simple mais efficace.`,
      en: `The game was developed entirely in vanilla JavaScript with HTML5 Canvas for 2D rendering. The game loop uses requestAnimationFrame for smooth 60 FPS animations. Collision detection is based on AABBs (Axis-Aligned Bounding Boxes) for optimal performance.

My approach favored simplicity and efficiency: a lightweight entity system, a responsive input manager, and a simple but effective sprite system.`
    },
    architecture: {
      fr: `Moteur de jeu minimaliste :
- **Game Loop** : requestAnimationFrame avec delta time pour une vitesse constante
- **Entity System** : Classes d'entités (Player, Enemy, Projectile) avec update/render
- **Collision** : Détection AABB optimisée
- **Input** : Gestionnaire d'événements clavier/souris
- **Renderer** : Abstraction Canvas 2D avec gestion de caméra`,
      en: `Minimalist game engine:
- **Game Loop**: requestAnimationFrame with delta time for constant speed
- **Entity System**: Entity classes (Player, Enemy, Projectile) with update/render
- **Collision**: Optimized AABB detection
- **Input**: Keyboard/mouse event manager
- **Renderer**: Canvas 2D abstraction with camera management`
    },
    skills: [
      {
        name: { fr: "Développement de jeu vidéo", en: "Video Game Development" },
        description: { fr: "Conception de game loop, systèmes d'entités, détection de collisions, et rendu 2D avec HTML5 Canvas.", en: "Game loop design, entity systems, collision detection, and 2D rendering with HTML5 Canvas." }
      },
      {
        name: { fr: "Optimisation des performances", en: "Performance Optimization" },
        description: { fr: "Gestion du frame rate, optimisation du rendu Canvas, et minimisation des allocations mémoire pour un gameplay fluide.", en: "Frame rate management, Canvas rendering optimization, and memory allocation minimization for smooth gameplay." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Game Loop avec delta time", en: "Game Loop with Delta Time" },
        code: `class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.entities = [];
        this.lastTime = 0;
        this.running = false;
    }

    start() {
        this.running = true;
        this.lastTime = performance.now();
        requestAnimationFrame((t) => this.loop(t));
    }

    loop(timestamp) {
        if (!this.running) return;

        const dt = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;

        this.update(dt);
        this.render();

        requestAnimationFrame((t) => this.loop(t));
    }

    update(dt) {
        for (const entity of this.entities) {
            entity.update(dt);
        }
        this.checkCollisions();
    }

    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        for (const entity of this.entities) {
            entity.render(this.ctx);
        }
    }
}`,
        language: "javascript",
        explanation: {
          fr: "Cette classe implémente la boucle de jeu fondamentale. Le delta time (dt) garantit que la vitesse du jeu est constante quelle que soit la fréquence d'images de l'écran. La séparation entre update() et render() permet de gérer indépendamment la logique de jeu et l'affichage, un pattern classique en développement de jeux vidéo.",
          en: "This class implements the fundamental game loop. The delta time (dt) ensures that game speed is constant regardless of the screen's frame rate. The separation between update() and render() allows independent management of game logic and display, a classic pattern in video game development."
        }
      }
    ],
    results: {
      fr: `Le jeu a été livré fonctionnel et jouable à la fin des 48 heures. Il comprenait un gameplay complet avec un système de scoring, des ennemis avec IA basique, et des effets visuels. L'expérience a été extrêmement enrichissante sur le plan technique et humain.`,
      en: `The game was delivered functional and playable at the end of the 48 hours. It included complete gameplay with a scoring system, enemies with basic AI, and visual effects. The experience was extremely enriching both technically and personally.`
    },
    reflection: {
      fr: `La Game Jam m'a appris à gérer le rapport entre ambition et réalisme. Il est tentant de vouloir implémenter de nombreuses fonctionnalités, mais en 48 heures, il faut se concentrer sur le core gameplay et s'assurer qu'il est solide avant d'ajouter du contenu. Cette leçon de priorisation est transposable à tout projet de développement.`,
      en: `The Game Jam taught me to manage the balance between ambition and realism. It's tempting to want to implement many features, but in 48 hours, you need to focus on core gameplay and make sure it's solid before adding content. This prioritization lesson is transferable to any development project.`
    },
    thumbnail: "/images/gamejam2023.jpg",
    images: [],
    links: {}
  },
  {
    slug: "nuit-info-2023",
    title: "Nuit de l'Info 2023",
    category: "competition",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    duration: { fr: "Décembre 2023 (1 nuit)", en: "December 2023 (1 night)" },
    team: { fr: "Équipe de 5 étudiants", en: "Team of 5 students" },
    role: { fr: "Développeur Full-Stack", en: "Full-Stack Developer" },
    shortDescription: {
      fr: "Première participation à la Nuit de l'Info, compétition nationale de développement web en une nuit.",
      en: "First participation in the Nuit de l'Info, a national one-night web development competition."
    },
    context: {
      fr: `La Nuit de l'Info 2023 était ma première participation à cette compétition nationale. C'était également ma première expérience de développement en conditions de hackathon. Notre équipe de 5 étudiants en première année de BUT Informatique devait créer un site web en une nuit sur un thème imposé.

Cette première expérience a été formatrice, notamment pour apprendre à travailler sous pression, à communiquer efficacement en équipe, et à prendre des décisions techniques rapides. Nous avons choisi une stack simple (HTML/CSS/JS/PHP) que nous maîtrisions tous, plutôt qu'une technologie plus moderne que nous aurions dû apprendre en même temps.`,
      en: `The Nuit de l'Info 2023 was my first participation in this national competition. It was also my first development experience under hackathon conditions. Our team of 5 first-year Computer Science students had to create a website in one night on an imposed theme.

This first experience was formative, especially for learning to work under pressure, communicate effectively as a team, and make quick technical decisions. We chose a simple stack (HTML/CSS/JS/PHP) that we all mastered, rather than a more modern technology we would have had to learn simultaneously.`
    },
    objectives: {
      fr: `1. Livrer un site web fonctionnel en une nuit
2. Travailler efficacement en équipe sous pression
3. Appliquer les compétences acquises en cours dans un contexte réel`,
      en: `1. Deliver a functional website in one night
2. Work efficiently as a team under pressure
3. Apply skills learned in class in a real context`
    },
    approach: {
      fr: `Nous avons opté pour une approche pragmatique avec des technologies que nous maîtrisions tous. Le site a été développé en PHP avec une base MySQL, une interface en HTML/CSS responsive, et du JavaScript pour les interactions dynamiques.

La répartition des tâches était claire : deux personnes sur le front-end, deux sur le back-end PHP/MySQL, et une personne sur l'intégration et les tests. Cette organisation nous a permis de travailler en parallèle efficacement malgré notre inexpérience en conditions de hackathon.`,
      en: `We opted for a pragmatic approach with technologies we all mastered. The site was developed in PHP with a MySQL database, a responsive HTML/CSS interface, and JavaScript for dynamic interactions.

Task distribution was clear: two people on front-end, two on PHP/MySQL back-end, and one person on integration and testing. This organization allowed us to work in parallel effectively despite our inexperience in hackathon conditions.`
    },
    architecture: {
      fr: `Site web PHP classique :
- **Front-end** : HTML/CSS responsive + JavaScript
- **Back-end** : PHP procédural avec connexion MySQL
- **Base de données** : MySQL pour le stockage des données`,
      en: `Classic PHP website:
- **Front-end**: Responsive HTML/CSS + JavaScript
- **Back-end**: Procedural PHP with MySQL connection
- **Database**: MySQL for data storage`
    },
    skills: [
      {
        name: { fr: "Développement web sous contrainte", en: "Constrained Web Development" },
        description: { fr: "Capacité à livrer un produit fonctionnel dans un temps très limité avec des ressources restreintes.", en: "Ability to deliver a functional product in very limited time with restricted resources." }
      },
      {
        name: { fr: "Collaboration en conditions extrêmes", en: "Collaboration Under Extreme Conditions" },
        description: { fr: "Communication efficace, gestion des conflits de code, et coordination d'équipe dans un environnement de hackathon.", en: "Effective communication, code conflict management, and team coordination in a hackathon environment." }
      }
    ],
    codeHighlights: [],
    results: {
      fr: `Le site a été livré fonctionnel à la fin de la nuit. Bien que le résultat soit plus modeste que notre participation en 2025, cette première expérience a posé les bases de notre amélioration. L'essentiel était d'apprendre à collaborer efficacement sous pression.`,
      en: `The site was delivered functional at the end of the night. Although the result was more modest than our 2025 participation, this first experience laid the groundwork for our improvement. The key was learning to collaborate effectively under pressure.`
    },
    reflection: {
      fr: `Comparée à ma participation en 2025, cette première Nuit de l'Info montre clairement ma progression en deux ans. En 2023, nous nous battions avec les bases (merge Git, déploiement, structure du code). En 2025, ces problèmes étaient résolus et nous pouvions nous concentrer sur la qualité du produit.

Cette progression illustre l'importance de la pratique répétée et de l'apprentissage par l'erreur dans le développement de compétences solides.`,
      en: `Compared to my 2025 participation, this first Nuit de l'Info clearly shows my progression over two years. In 2023, we were struggling with basics (Git merging, deployment, code structure). In 2025, these problems were solved and we could focus on product quality.

This progression illustrates the importance of repeated practice and learning from mistakes in developing solid skills.`
    },
    thumbnail: "/images/nuitinfo2023.jpg",
    images: [],
    links: {}
  }
];
