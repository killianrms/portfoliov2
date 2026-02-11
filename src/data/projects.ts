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
  links?: { github?: string; live?: string; video?: string; report?: string; discord?: string };
}

export const projects: Project[] = [
  {
    slug: "itesoft-assistant-ingenieur",
    title: "ITESOFT - Assistant Ingénieur Développement et Projet",
    category: "professional",
    technologies: ["Java", "Angular", "SQL", "PostgreSQL", "Maven", "IntelliJ IDEA", "Termius", "Postman", "Azure", "Git"],
    duration: { fr: "Septembre 2024 - Présent (Alternance)", en: "September 2024 - Present (Work-Study)" },
    team: { fr: "Équipe Delivery (~30 personnes) - l'équipe projet d'ITESOFT", en: "Delivery team (~30 people) - ITESOFT's project team" },
    role: { fr: "Assistant Ingénieur Développement et Projet - Personnalisation, déploiement et support de Streamline Invoices", en: "Assistant Development & Project Engineer - Customization, deployment and support of Streamline Invoices" },
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

1. **Personnalisation client** : Configurer et adapter Streamline Invoices pour chaque nouveau client - mise en place des VM de développement et de staging, installation de la plateforme, configuration des entreprises, holdings, utilisateurs et permissions, et développement des personnalisations spécifiques (endpoints, connexions ERP, filtres, boutons, fonctionnalités métier).

2. **Développement d'outils internes** : Concevoir et développer des outils qui améliorent la productivité de l'équipe Delivery. Notamment l'amélioration majeure de l'outil interne CreatField, utilisé pour la gestion des champs personnalisés des clients.

3. **Support client** : Traiter les tickets ouverts par les clients, diagnostiquer les problèmes (côté client ou côté plateforme), et si nécessaire rédiger des Demandes d'Assistance (DA) détaillées pour l'équipe R&D lorsqu'un problème relève du standard.

4. **Recette et déploiement** : Exécuter les procédures de recette pour valider les personnalisations, gérer le cycle Dev → Staging → Production, et préparer les packages de déploiement pour l'équipe de mise en production.`,
      en: `The objectives of my mission at ITESOFT revolve around four main axes:

1. **Client customization**: Configure and adapt Streamline Invoices for each new client - setting up development and staging VMs, installing the platform, configuring companies, holdings, users and permissions, and developing specific customizations (endpoints, ERP connections, filters, buttons, business features).

2. **Internal tool development**: Design and develop tools that improve the Delivery team's productivity. Notably the major improvement of the internal CreatField tool, used for managing client custom fields.

3. **Client support**: Handle client-opened tickets, diagnose issues (client-side or platform-side), and when necessary write detailed Assistance Requests (DA) for the R&D team when an issue relates to the standard product.

4. **Testing and deployment**: Execute testing procedures to validate customizations, manage the Dev → Staging → Production cycle, and prepare deployment packages for the production deployment team.`
    },
    approach: {
      fr: `Mon workflow de développement chez ITESOFT suit un cycle structuré en plusieurs étapes. Pour chaque nouveau client, je commence par créer une VM de développement sur laquelle j'installe Streamline Invoices, puis je configure l'environnement selon les spécifications du client (entreprises, holdings, utilisateurs, permissions, circuits de validation).

Lorsque le client a besoin de fonctionnalités spécifiques - comme des endpoints supplémentaires pour se connecter à son ERP, des filtres personnalisés, ou des boutons métier - je développe ces personnalisations en Java (back-end) et Angular (front-end), en veillant à rester au maximum en dehors du code standard de la R&D. Cette contrainte est essentielle : elle permet de limiter les conflits lors des montées de version et de simplifier la maintenance à long terme.

Le code est compilé via Maven dans IntelliJ IDEA, l'outil utilisé par toute l'entreprise. J'utilise Termius pour la connexion SSH/SFTP aux machines virtuelles, Postman pour tester les endpoints et envoyer des fichiers JSON, et PostgreSQL comme base de données. Les VM de développement sont locales, tandis que les VM de staging sont hébergées sur Azure, ce qui permet au client de s'y connecter pour tester. Une fois les tests validés en staging avec le client, je prépare un package de déploiement que j'envoie à l'équipe de production.

J'ai également contribué de manière significative à l'amélioration de CreatField, un outil interne permettant de créer des champs personnalisés en respectant les conventions de l'entreprise. Le problème initial était que lors des migrations, il fallait retélécharger et renvoyer les champs un par un, ce qui pouvait représenter 20 à 30 champs par client - un processus long et fastidieux. J'ai d'abord développé un script pour télécharger via API tous les champs d'un client d'un coup, puis j'ai intégré cette fonctionnalité directement dans l'application avec une barre de recherche (avant, il fallait chercher manuellement le client parmi plus de 200) et des cases à cocher permettant de sélectionner des champs spécifiques ou tous les champs d'un client.`,
      en: `My development workflow at ITESOFT follows a structured multi-step cycle. For each new client, I start by creating a development VM on which I install Streamline Invoices, then configure the environment according to client specifications (companies, holdings, users, permissions, validation circuits).

When the client needs specific features - such as additional endpoints to connect to their ERP, custom filters, or business buttons - I develop these customizations in Java (back-end) and Angular (front-end), making sure to stay as much as possible outside the R&D's standard code. This constraint is essential: it limits conflicts during version upgrades and simplifies long-term maintenance.

Code is compiled via Maven in IntelliJ IDEA, the tool used across the entire company. I use Termius for SSH/SFTP connections to virtual machines, Postman for testing endpoints and sending JSON files, and PostgreSQL as the database. Development VMs are local, while staging VMs are hosted on Azure, allowing clients to connect and test. Once staging tests are validated with the client, I prepare a deployment package that I send to the production team.

I also significantly contributed to improving CreatField, an internal tool for creating custom fields following company conventions. The initial problem was that during migrations, fields had to be re-downloaded and re-uploaded one by one, which could represent 20 to 30 fields per client - a long and tedious process. I first developed a script to download all client fields at once via API, then integrated this feature directly into the application with a search bar (previously, you had to manually search for the client among 200+) and checkboxes allowing selection of specific fields or all fields for a client.`
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
        title: { fr: "Amélioration de CreatField - Téléchargement en masse via API", en: "CreatField Improvement - Bulk Download via API" },
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
    thumbnail: "/images/itesoft.webp",
    images: [],
    links: {}
  },
  {
    slug: "tamastat",
    title: "TamaStat - TamaBox",
    category: "professional",
    technologies: ["JavaScript", "Chart.js", "HTML/CSS", "Vercel", "Git"],
    duration: { fr: "Janvier - Avril 2025 (Stage)", en: "January - April 2025 (Internship)" },
    team: { fr: "Seul avec le gérant de l'entreprise", en: "Solo with the company owner" },
    role: { fr: "Développeur Full-Stack - Conception, développement et déploiement complet de l'application", en: "Full-Stack Developer - Complete design, development and deployment of the application" },
    shortDescription: {
      fr: "Outil de visualisation statistique développé pour TamaBox (Draguignan, 83) : analyse des données de location de box de stockage, personas marketing et outil de prévision.",
      en: "Statistical visualization tool developed for TamaBox (Draguignan, France): storage box rental data analysis, marketing personas and forecasting tool."
    },
    context: {
      fr: `TamaStat est un outil de visualisation statistique que j'ai conçu et développé dans le cadre de mon stage de deuxième année de BUT Informatique, réalisé chez TamaBox, une entreprise de location de box de stockage située à Draguignan dans le Var (83), de janvier à avril 2025.

C'était ma toute première expérience professionnelle. J'étais seul avec le gérant de l'entreprise - pas d'équipe technique, pas de développeur senior pour me guider. Le gérant m'a donné carte blanche : il m'a expliqué son activité, ses données, et ce qu'il voulait comprendre à travers un tableau de bord. À partir de là, j'ai eu une autonomie totale sur la conception, le développement et le déploiement de l'outil.

Le contexte métier était le suivant : TamaBox propose des box de stockage de différentes tailles à la location. Le gérant disposait de données brutes sur son activité (entrées/sorties de locataires, répartition par taille de box, taux d'occupation, chiffre d'affaires, surface totale louée) mais n'avait aucun outil pour les visualiser et les analyser. Son taux d'occupation oscillait entre 75% et 82%, et il souhaitait atteindre les 100%.

Nos échanges se faisaient lors de réunions hebdomadaires où je présentais l'avancement et où il me faisait ses retours. Le reste du temps, je travaillais en totale autonomie.`,
      en: `TamaStat is a statistical visualization tool that I designed and developed during my second-year Computer Science internship at TamaBox, a storage box rental company located in Draguignan, Var (83), France, from January to April 2025.

This was my very first professional experience. I was alone with the company owner - no technical team, no senior developer to guide me. The owner gave me full creative freedom: he explained his business, his data, and what he wanted to understand through a dashboard. From there, I had complete autonomy over the design, development, and deployment of the tool.

The business context was as follows: TamaBox offers storage boxes of various sizes for rent. The owner had raw data about his business (tenant entries/exits, box size distribution, occupancy rates, revenue, total rented surface area) but had no tool to visualize and analyze it. His occupancy rate fluctuated between 75% and 82%, and he wanted to reach 100%.

Our exchanges took place during weekly meetings where I presented progress and he gave his feedback. The rest of the time, I worked with complete autonomy.`
    },
    objectives: {
      fr: `1. **Tableau de bord statistique** : Créer un outil de visualisation complet permettant au gérant de comprendre en un coup d'œil l'état de son activité - entrées/sorties de locataires, répartition par taille de box, taux de boxes louées vs non louées, évolution du chiffre d'affaires, et surface totale louée.

2. **Personas marketing** : Concevoir des profils types de clients (personas) à partir de l'analyse des données, afin de permettre au gérant de cibler ses campagnes publicitaires vers les bons segments de clientèle.

3. **Outil de prévision (forecasting)** : Développer un module de projection permettant d'anticiper l'évolution du taux d'occupation et du chiffre d'affaires sur les mois à venir.

4. **Autonomie complète** : Gérer l'intégralité du projet seul - de la conception à la mise en production - en tant que première expérience professionnelle.`,
      en: `1. **Statistical dashboard**: Create a comprehensive visualization tool allowing the owner to understand his business at a glance - tenant entries/exits, box size distribution, rented vs unrented box rates, revenue evolution, and total rented surface area.

2. **Marketing personas**: Design typical customer profiles (personas) from data analysis, enabling the owner to target his advertising campaigns towards the right customer segments.

3. **Forecasting tool**: Develop a projection module to anticipate the evolution of occupancy rates and revenue in the coming months.

4. **Complete autonomy**: Manage the entire project solo - from design to production deployment - as a first professional experience.`
    },
    approach: {
      fr: `C'était la première fois que je faisais du JavaScript - je l'ai appris sur le tas pendant le stage. J'ai choisi une approche front-end pure avec JavaScript et Chart.js pour les visualisations, ce qui permettait un déploiement simple et rapide sur Vercel.

J'ai tout construit seul de A à Z : le design de l'interface, le développement des graphiques interactifs, la logique de traitement des données, les personas marketing, et le module de prévision. Pour chaque fonctionnalité, je partais des données brutes fournies par le gérant, que je structurais et transformais en visualisations exploitables.

Les graphiques couvrent plusieurs axes d'analyse :
- **Entrées/sorties** : Suivi des mouvements de locataires dans le temps
- **Répartition par taille** : Distribution des box louées selon leur superficie
- **Taux d'occupation** : Pourcentage de box louées vs disponibles, avec évolution temporelle
- **Chiffre d'affaires** : Évolution des revenus avec ventilation par type de box
- **Surface totale louée** : Suivi de la surface louée en m²

Pour les personas, j'ai analysé les données clients pour identifier des profils types (particuliers déménagement, entreprises stockage long terme, étudiants, etc.) avec leurs caractéristiques et comportements. Le gérant a ensuite utilisé ces personas pour cibler ses publicités.

Le module de forecasting utilise les tendances historiques pour projeter l'évolution du taux d'occupation et du CA sur les mois suivants, permettant au gérant d'anticiper et d'ajuster sa stratégie.

Le tout a été déployé sur Vercel pour un accès simple et permanent.`,
      en: `This was the first time I ever worked with JavaScript - I learned it on the job during the internship. I chose a pure front-end approach with JavaScript and Chart.js for visualizations, which allowed simple and fast deployment on Vercel.

I built everything from scratch on my own: the interface design, interactive chart development, data processing logic, marketing personas, and the forecasting module. For each feature, I started from raw data provided by the owner, which I structured and transformed into actionable visualizations.

The charts cover several analysis axes:
- **Entries/exits**: Tracking tenant movements over time
- **Size distribution**: Distribution of rented boxes by surface area
- **Occupancy rate**: Percentage of rented vs available boxes, with temporal evolution
- **Revenue**: Revenue evolution with breakdown by box type
- **Total rented surface**: Tracking rented surface area in m²

For the personas, I analyzed customer data to identify typical profiles (moving individuals, long-term business storage, students, etc.) with their characteristics and behaviors. The owner then used these personas to target his advertisements.

The forecasting module uses historical trends to project occupancy rate and revenue evolution for the coming months, allowing the owner to anticipate and adjust his strategy.

Everything was deployed on Vercel for simple and permanent access.`
    },
    architecture: {
      fr: `Application front-end déployée sur Vercel :
- **Données** : Fichiers de données structurées à partir des exports bruts du gérant, transformées en format exploitable par les graphiques.
- **Visualisation** : Chart.js pour l'ensemble des graphiques interactifs (barres, lignes, camemberts, graphiques combinés) avec tooltips, légendes et animations.
- **Personas** : Module d'analyse présentant les profils types de clients avec leurs caractéristiques, comportements de location et recommandations de ciblage publicitaire.
- **Forecasting** : Module de projection basé sur les tendances historiques, affichant les prévisions d'occupation et de chiffre d'affaires.
- **Déploiement** : Hébergement sur Vercel avec déploiement continu depuis Git.`,
      en: `Front-end application deployed on Vercel:
- **Data**: Structured data files from the owner's raw exports, transformed into chart-friendly format.
- **Visualization**: Chart.js for all interactive charts (bars, lines, pies, combined charts) with tooltips, legends and animations.
- **Personas**: Analysis module presenting typical customer profiles with their characteristics, rental behaviors and advertising targeting recommendations.
- **Forecasting**: Projection module based on historical trends, displaying occupancy and revenue forecasts.
- **Deployment**: Hosted on Vercel with continuous deployment from Git.`
    },
    skills: [
      {
        name: { fr: "JavaScript (apprentissage sur le tas)", en: "JavaScript (learned on the job)" },
        description: { fr: "Première utilisation de JavaScript dans un contexte professionnel. Apprentissage autonome du langage et de ses spécificités (manipulation DOM, événements, asynchrone) directement en développant l'application.", en: "First use of JavaScript in a professional context. Self-taught learning of the language and its specifics (DOM manipulation, events, async) directly while developing the application." }
      },
      {
        name: { fr: "Visualisation de données avec Chart.js", en: "Data Visualization with Chart.js" },
        description: { fr: "Utilisation approfondie de Chart.js pour créer des graphiques variés et interactifs : barres empilées, courbes d'évolution, camemberts de répartition, avec personnalisation des tooltips, couleurs et animations.", en: "In-depth use of Chart.js to create varied and interactive charts: stacked bars, evolution curves, distribution pies, with custom tooltips, colors and animations." }
      },
      {
        name: { fr: "Analyse de données et personas", en: "Data Analysis and Personas" },
        description: { fr: "Analyse des données clients pour identifier des segments types et créer des personas marketing actionnables. Transformation de données brutes en recommandations stratégiques concrètes.", en: "Customer data analysis to identify typical segments and create actionable marketing personas. Transformation of raw data into concrete strategic recommendations." }
      },
      {
        name: { fr: "Autonomie et gestion de projet solo", en: "Autonomy and Solo Project Management" },
        description: { fr: "Gestion complète d'un projet en autonomie totale : analyse du besoin, conception, développement, déploiement, et présentations hebdomadaires au gérant. Première expérience professionnelle.", en: "Complete project management with full autonomy: requirement analysis, design, development, deployment, and weekly presentations to the owner. First professional experience." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Extraits de code à venir", en: "Code excerpts coming soon" },
        code: `// Les extraits de code seront ajoutés prochainement
// Code excerpts will be added soon

// TamaStat - TamaBox
// Outil de visualisation statistique
// Statistical visualization tool`,
        language: "javascript",
        explanation: {
          fr: "Les extraits de code détaillés de TamaStat seront ajoutés prochainement avec des exemples concrets de la logique de visualisation, du traitement des données et du module de forecasting.",
          en: "Detailed code excerpts from TamaStat will be added soon with concrete examples of the visualization logic, data processing and forecasting module."
        }
      }
    ],
    results: {
      fr: `TamaStat a eu un impact direct et mesurable sur l'activité de TamaBox :

- **Taux d'occupation passé de 75-82% à 100%** : Grâce aux personas marketing que j'ai développés, le gérant a pu cibler ses campagnes publicitaires vers les bons segments de clientèle. Il a atteint un taux d'occupation de 100% de ses box, ce qui était son objectif principal.
- **Tableau de bord complet** : Visualisation en temps réel des entrées/sorties, de la répartition par taille, du taux d'occupation, du chiffre d'affaires et de la surface louée.
- **Outil de prévision fonctionnel** : Le module de forecasting permet au gérant d'anticiper les tendances et d'ajuster sa stratégie commerciale en conséquence.
- **Application déployée et utilisée** : L'outil est en ligne sur Vercel et utilisé activement par le gérant au quotidien.

C'était ma toute première expérience professionnelle et elle a été très formatrice. J'ai découvert ce que c'est de travailler seul sur un projet avec une vraie responsabilité et un vrai impact business.`,
      en: `TamaStat had a direct and measurable impact on TamaBox's business:

- **Occupancy rate went from 75-82% to 100%**: Thanks to the marketing personas I developed, the owner was able to target his advertising campaigns towards the right customer segments. He reached a 100% occupancy rate for his boxes, which was his primary goal.
- **Complete dashboard**: Real-time visualization of entries/exits, size distribution, occupancy rates, revenue, and rented surface area.
- **Functional forecasting tool**: The forecasting module allows the owner to anticipate trends and adjust his business strategy accordingly.
- **Deployed and actively used application**: The tool is live on Vercel and actively used by the owner on a daily basis.

This was my very first professional experience and it was extremely formative. I discovered what it's like to work solo on a project with real responsibility and real business impact.`
    },
    reflection: {
      fr: `Ce stage chez TamaBox a été une expérience fondatrice à plusieurs niveaux :

1. **Apprendre un langage sur le tas** : C'était la première fois que je faisais du JavaScript. Devoir l'apprendre en conditions réelles, sans filet, avec un livrable attendu, m'a poussé à développer une vraie capacité d'auto-apprentissage. J'ai appris à chercher efficacement dans la documentation, à comprendre les erreurs, et à progresser vite par la pratique.

2. **L'autonomie totale** : Être seul sur un projet sans équipe technique m'a obligé à prendre toutes les décisions moi-même - choix techniques, architecture, priorisation des fonctionnalités. C'est une responsabilité qui m'a beaucoup fait grandir et qui m'a donné confiance pour les projets suivants.

3. **L'impact business concret** : Voir le gérant passer de 75-82% à 100% d'occupation grâce aux personas que j'avais développés a été extrêmement gratifiant. Cela m'a montré que le développement ne se limite pas au code - c'est un outil au service d'objectifs business concrets.

4. **La relation directe avec le client** : Les réunions hebdomadaires m'ont appris à présenter mon travail de manière claire à un non-technicien, à recueillir et interpréter ses retours, et à adapter mes priorités en fonction de ses besoins réels plutôt que de mes intuitions techniques.`,
      en: `This internship at TamaBox was a foundational experience on several levels:

1. **Learning a language on the job**: This was my first time working with JavaScript. Having to learn it in real conditions, without a safety net, with an expected deliverable, pushed me to develop a genuine self-learning ability. I learned to search documentation efficiently, understand errors, and progress quickly through practice.

2. **Complete autonomy**: Being alone on a project without a technical team forced me to make all decisions myself - technical choices, architecture, feature prioritization. This responsibility helped me grow significantly and gave me confidence for subsequent projects.

3. **Concrete business impact**: Seeing the owner go from 75-82% to 100% occupancy thanks to the personas I had developed was extremely rewarding. It showed me that development isn't just about code - it's a tool serving concrete business objectives.

4. **Direct client relationship**: The weekly meetings taught me to present my work clearly to a non-technical person, to gather and interpret their feedback, and to adapt my priorities based on their actual needs rather than my technical intuitions.`
    },
    thumbnail: "/images/tamastat.webp",
    images: [],
    links: { live: "https://tama-stat.vercel.app/" }
  },
  {
    slug: "lobbybot-fortnite",
    title: "LobbyBot 2.0 - Bots Fortnite",
    category: "personal",
    technologies: ["Node.js", "Python", "Discord.js", "Express", "Socket.IO", "PostgreSQL", "Docker", "OAuth2", "WebSocket", "Asyncio"],
    duration: { fr: "Projet personnel continu (2020 - Présent)", en: "Ongoing personal project (2020 - Present)" },
    team: { fr: "Projet individuel - Communauté de 8 500+ membres Discord", en: "Individual project - Community of 8,500+ Discord members" },
    role: { fr: "Développeur unique - Conception, développement, maintenance et gestion de communauté", en: "Sole Developer - Design, development, maintenance and community management" },
    shortDescription: {
      fr: "Système complet de bots Fortnite avec gestion multi-comptes, bot Discord central, dashboard web temps réel et communauté de 8 500+ membres. Projet initié pendant le COVID à 16 ans, devenu mon plus gros projet personnel.",
      en: "Complete Fortnite bot system with multi-account management, central Discord bot, real-time web dashboard and community of 8,500+ members. Project started during COVID at age 16, became my biggest personal project."
    },
    context: {
      fr: `LobbyBot 2.0 est mon plus gros projet personnel. Il a démarré en 2020, pendant le COVID, alors que j'avais 16 ans. À l'origine, c'était simplement des bots Fortnite en Python qui permettaient aux joueurs de voir tous les skins et danses du jeu. Le projet était financé par la publicité de mon code créateur Epic Games (10% de rémunération sur chaque achat effectué par mes soutiens sur le store Epic Games).

Les joueurs utilisaient les bots pour prévisualiser les skins et danses à venir dans la boutique, mais aussi pour jouer avec eux afin de faciliter leur progression et éviter de tomber contre des joueurs trop forts. J'ai eu plusieurs contacts avec Epic Games qui m'ont autorisé à faire ces bots.

Ce petit projet initié pendant le confinement est devenu, et reste encore aujourd'hui, mon plus gros projet personnel. La communauté compte plus de 8 500 membres sur Discord qui suivent activement le projet. Au fil des années, j'ai considérablement amélioré le code : passage du simple script Python à une architecture complète avec un bot Discord central en Node.js, un dashboard web en temps réel, une base de données PostgreSQL, et le tout orchestré avec Docker.

Les améliorations majeures incluent : l'automatisation de la création de nouveaux bots quand un bot atteint sa limite d'amis, l'automatisation du relancement des bots en cas de crash ou de redémarrage serveur, et un système de load balancing intelligent qui sélectionne automatiquement le bot le moins chargé pour chaque nouvel ami.`,
      en: `LobbyBot 2.0 is my biggest personal project. It started in 2020, during COVID, when I was 16 years old. Originally, it was simply Python Fortnite bots that allowed players to see all the game's skins and dances. The project was funded through my Epic Games creator code advertising (10% commission on each purchase made by my supporters on the Epic Games store).

Players used the bots to preview upcoming skins and dances in the shop, but also to play with them to ease their progression and avoid facing overly strong opponents. I had multiple contacts with Epic Games who authorized me to create these bots.

This small project started during lockdown became, and still remains today, my biggest personal project. The community has over 8,500 members on Discord actively following the project. Over the years, I significantly improved the code: from simple Python scripts to a complete architecture with a central Discord bot in Node.js, a real-time web dashboard, a PostgreSQL database, all orchestrated with Docker.

Major improvements include: automated creation of new bots when a bot reaches its friend limit, automated bot restart in case of crash or server reboot, and an intelligent load balancing system that automatically selects the least loaded bot for each new friend.`
    },
    objectives: {
      fr: `1. **Système multi-bots** : Gérer un nombre illimité de bots Fortnite simultanément avec un load balancing intelligent (seuil de 900 amis par bot)
2. **Bot Discord central** : Permettre aux 8 500+ membres de la communauté d'interagir avec les bots Fortnite via des commandes Discord (/add, /login, /list, /shop, /locker...)
3. **Dashboard web temps réel** : Interface de contrôle permettant de voir l'état des bots, leurs amis, et de les gérer (kick, promote, privacy) via Socket.IO
4. **Automatisation complète** : Création automatique de bots, relancement en cas de crash, et gestion autonome des listes d'amis
5. **Internationalisation** : Support multilingue (FR/EN/ES/DE) pour la communauté internationale`,
      en: `1. **Multi-bot system**: Manage unlimited simultaneous Fortnite bots with intelligent load balancing (900 friends threshold per bot)
2. **Central Discord bot**: Allow the 8,500+ community members to interact with Fortnite bots via Discord commands (/add, /login, /list, /shop, /locker...)
3. **Real-time web dashboard**: Control interface to view bot status, friends, and manage them (kick, promote, privacy) via Socket.IO
4. **Full automation**: Automatic bot creation, restart on crash, and autonomous friend list management
5. **Internationalization**: Multilingual support (FR/EN/ES/DE) for the international community`
    },
    approach: {
      fr: `Le projet a évolué d'un simple script Python vers une architecture distribuée complète :

- **Phase 1 (2020)** : Bots Python simples utilisant les API non-documentées d'Epic Games, avec authentification OAuth2 et gestion basique des amis et skins.
- **Phase 2 (évolution)** : Migration vers une architecture Node.js pour le bot Discord central, avec Discord.js pour gérer les commandes de la communauté.
- **Phase 3 (actuelle - LobbyBot 2.0)** : Architecture complète avec trois composants principaux orchestrés par Docker :

  1. **Discord Manager** (Node.js) : Le cœur du système. Gère tous les bots simultanément, le load balancing, les commandes Discord, et la communication avec la base de données PostgreSQL.
  2. **Dashboard Web** (Node.js/Express/Socket.IO) : Interface de contrôle en temps réel avec un design "Space/Starfield". Communication instantanée avec le Manager via Socket.IO.
  3. **Base de données PostgreSQL** : Stockage des comptes bots, utilisateurs, préférences de langue, et statistiques.

Le système de load balancing sélectionne automatiquement le bot ayant le moins d'amis (< 900) pour chaque nouvelle demande d'ajout. Si tous les bots sont pleins, un nouveau bot est créé automatiquement.`,
      en: `The project evolved from a simple Python script to a complete distributed architecture:

- **Phase 1 (2020)**: Simple Python bots using Epic Games' undocumented APIs, with OAuth2 authentication and basic friend/skin management.
- **Phase 2 (evolution)**: Migration to Node.js architecture for the central Discord bot, using Discord.js to handle community commands.
- **Phase 3 (current - LobbyBot 2.0)**: Complete architecture with three main components orchestrated by Docker:

  1. **Discord Manager** (Node.js): The system's core. Manages all bots simultaneously, load balancing, Discord commands, and PostgreSQL database communication.
  2. **Web Dashboard** (Node.js/Express/Socket.IO): Real-time control interface with a "Space/Starfield" design. Instant communication with the Manager via Socket.IO.
  3. **PostgreSQL Database**: Storage for bot accounts, users, language preferences, and statistics.

The load balancing system automatically selects the bot with the fewest friends (< 900) for each new friend request. If all bots are full, a new bot is automatically created.`
    },
    architecture: {
      fr: `Architecture distribuée Docker multi-services :

- **lobbybot2.0-discord/** (Node.js) : Manager central
  - \`src/managers/\` : Gestionnaires principaux (Bots, Database, User, API, Discord)
  - \`src/commands/\` : Commandes Discord (/login, /add, /list, /shop, /locker, /admin...)
  - \`src/actions/\` : Logique des actions Fortnite (Skin, Party, Friends)
  - \`src/utils/\` : Utilitaires (Locales i18n, helpers)

- **lobbybot2.0-website/** (Node.js/Express) : Dashboard web
  - Backend Express + Socket.IO pour la communication temps réel
  - Frontend HTML5/CSS3/Vanilla JS avec design "Space/Starfield"
  - Affichage de l'état des bots, amis, contrôles (Kick, Promote, Privacy)

- **PostgreSQL** : Base de données partagée (comptes, utilisateurs, préférences)
- **Docker Compose** : Orchestration des trois services`,
      en: `Distributed multi-service Docker architecture:

- **lobbybot2.0-discord/** (Node.js): Central Manager
  - \`src/managers/\`: Main managers (Bots, Database, User, API, Discord)
  - \`src/commands/\`: Discord commands (/login, /add, /list, /shop, /locker, /admin...)
  - \`src/actions/\`: Fortnite action logic (Skin, Party, Friends)
  - \`src/utils/\`: Utilities (i18n Locales, helpers)

- **lobbybot2.0-website/** (Node.js/Express): Web Dashboard
  - Express + Socket.IO backend for real-time communication
  - HTML5/CSS3/Vanilla JS frontend with "Space/Starfield" design
  - Bot status display, friends, controls (Kick, Promote, Privacy)

- **PostgreSQL**: Shared database (accounts, users, preferences)
- **Docker Compose**: Orchestration of all three services`
    },
    skills: [
      {
        name: { fr: "Architecture distribuée & Docker", en: "Distributed Architecture & Docker" },
        description: { fr: "Conception et déploiement d'une architecture multi-services avec Docker Compose : Manager Node.js, Dashboard web, et base de données PostgreSQL communiquant en temps réel.", en: "Design and deployment of a multi-service architecture with Docker Compose: Node.js Manager, Web Dashboard, and PostgreSQL database communicating in real-time." }
      },
      {
        name: { fr: "Gestion de communauté & produit", en: "Community & Product Management" },
        description: { fr: "Animation d'une communauté de 8 500+ membres Discord, gestion des retours utilisateurs, évolution continue du produit sur 5+ ans, et financement via code créateur Epic Games.", en: "Management of a 8,500+ member Discord community, user feedback handling, continuous product evolution over 5+ years, and funding through Epic Games creator code." }
      },
      {
        name: { fr: "Communication temps réel (Socket.IO)", en: "Real-time Communication (Socket.IO)" },
        description: { fr: "Implémentation de communications bidirectionnelles en temps réel entre le Dashboard web et le Manager via Socket.IO pour le contrôle instantané des bots.", en: "Implementation of bidirectional real-time communications between the Web Dashboard and Manager via Socket.IO for instant bot control." }
      },
      {
        name: { fr: "Automatisation & Load Balancing", en: "Automation & Load Balancing" },
        description: { fr: "Système intelligent de répartition de charge entre les bots, création automatique de nouveaux bots, et relancement automatique en cas de crash ou redémarrage serveur.", en: "Intelligent load distribution system between bots, automatic creation of new bots, and automatic restart on crash or server reboot." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Extraits de code à venir", en: "Code excerpts coming soon" },
        code: `// Les extraits de code seront ajoutés prochainement
// Code excerpts will be added soon

// LobbyBot 2.0 - Système de Bots Fortnite
// Architecture: Discord Manager + Web Dashboard + PostgreSQL
// LobbyBot 2.0 - Fortnite Bot System
// Architecture: Discord Manager + Web Dashboard + PostgreSQL`,
        language: "javascript",
        explanation: {
          fr: "Les extraits de code détaillés du projet LobbyBot 2.0 seront ajoutés prochainement, avec des exemples concrets du système de load balancing, de la gestion multi-bots et de la communication Socket.IO temps réel.",
          en: "Detailed code excerpts from the LobbyBot 2.0 project will be added soon, with concrete examples of the load balancing system, multi-bot management and real-time Socket.IO communication."
        }
      }
    ],
    results: {
      fr: `LobbyBot 2.0 est un projet actif depuis 2020 avec des résultats concrets :

- **8 500+ membres Discord** suivant activement le projet et utilisant les bots au quotidien
- **Système multi-bots fonctionnel** avec load balancing intelligent et création automatique de nouveaux bots
- **Dashboard web temps réel** permettant le monitoring et le contrôle de tous les bots
- **Autorisation officielle d'Epic Games** obtenue après plusieurs échanges directs
- **Financement autonome** via le système de code créateur Epic Games (10% de commission)
- **5+ ans de maintenance continue**, avec des évolutions majeures (Python → Node.js, scripts → architecture Docker)
- **Internationalisation complète** en 4 langues (FR/EN/ES/DE) pour la communauté internationale

Ce projet, initié à 16 ans pendant le COVID, est devenu et reste mon plus gros projet personnel, démontrant ma capacité à mener un projet de A à Z sur le long terme.`,
      en: `LobbyBot 2.0 has been an active project since 2020 with concrete results:

- **8,500+ Discord members** actively following the project and using bots daily
- **Functional multi-bot system** with intelligent load balancing and automatic new bot creation
- **Real-time web dashboard** enabling monitoring and control of all bots
- **Official Epic Games authorization** obtained after multiple direct exchanges
- **Self-funded** through the Epic Games creator code system (10% commission)
- **5+ years of continuous maintenance**, with major evolutions (Python → Node.js, scripts → Docker architecture)
- **Full internationalization** in 4 languages (FR/EN/ES/DE) for the international community

This project, started at age 16 during COVID, became and remains my biggest personal project, demonstrating my ability to lead a project from A to Z over the long term.`
    },
    reflection: {
      fr: `LobbyBot 2.0 est le projet qui m'a le plus appris en dehors du cadre scolaire :

1. **L'évolution technique sur 5 ans** m'a fait passer de simples scripts Python à une architecture distribuée complète avec Docker. Chaque itération m'a poussé à apprendre de nouvelles technologies pour résoudre des problèmes concrets : Node.js pour la performance, PostgreSQL pour la persistance, Socket.IO pour le temps réel, Docker pour le déploiement.

2. **La gestion d'une communauté de 8 500+ membres** m'a enseigné des compétences non-techniques essentielles : communication, gestion des attentes, priorisation des fonctionnalités basée sur les retours utilisateurs, et la responsabilité de maintenir un service utilisé quotidiennement.

3. **Le contact avec Epic Games** m'a appris à interagir professionnellement avec une grande entreprise, à présenter mon projet de manière convaincante et à respecter leurs conditions d'utilisation.

4. **La maintenance sur le long terme** est la leçon la plus importante : les API changent, les serveurs crashent, les utilisateurs ont des besoins qui évoluent. Ce projet m'a enseigné la valeur d'une architecture robuste, de l'automatisation (relancement automatique, load balancing), et de la documentation.

Ce projet prouve qu'un side project passionné peut devenir quelque chose de significatif avec de la persévérance et une amélioration continue.`,
      en: `LobbyBot 2.0 is the project that taught me the most outside of school:

1. **5 years of technical evolution** took me from simple Python scripts to a complete distributed architecture with Docker. Each iteration pushed me to learn new technologies to solve concrete problems: Node.js for performance, PostgreSQL for persistence, Socket.IO for real-time, Docker for deployment.

2. **Managing a community of 8,500+ members** taught me essential non-technical skills: communication, expectation management, feature prioritization based on user feedback, and the responsibility of maintaining a daily-used service.

3. **Contact with Epic Games** taught me to interact professionally with a large company, present my project convincingly, and respect their terms of use.

4. **Long-term maintenance** is the most important lesson: APIs change, servers crash, users' needs evolve. This project taught me the value of robust architecture, automation (automatic restart, load balancing), and documentation.

This project proves that a passionate side project can become something significant with perseverance and continuous improvement.`
    },
    thumbnail: "/images/lobbybot.webp",
    images: [],
    links: { github: "https://github.com/killianrms/lobbybot2.0-discord", live: "https://github.com/killianrms/lobbybot2.0-website", video: "https://youtu.be/tja-34-FpnY", discord: "https://discord.gg/SarmtBh3Gu" }
  },
  {
    slug: "referendum",
    title: "Referendum - Application de Vote Sécurisée",
    category: "university",
    technologies: ["Java", "JavaFX", "ElGamal", "Zero Knowledge Proof", "DeepSeek API", "Cryptographie", "Sockets", "Scrum", "Git"],
    duration: { fr: "Toute la deuxième année de BUT 2 (Projet de fin d'année)", en: "Full second year of CS degree (Year-end project)" },
    team: { fr: "Groupe de 4 étudiants", en: "Group of 4 students" },
    role: { fr: "Product Owner & Développeur Cryptographie - Chiffrement ElGamal, Preuve Zero Knowledge, ChatBot IA et sécurisation des sockets", en: "Product Owner & Cryptography Developer - ElGamal encryption, Zero Knowledge Proof, AI ChatBot and socket security" },
    shortDescription: {
      fr: "Application de vote sécurisée en Java/JavaFX avec chiffrement ElGamal, preuve Zero Knowledge non-interactive, chatbot IA (DeepSeek) et méthodologie Scrum sur toute une année universitaire.",
      en: "Secure voting application in Java/JavaFX with ElGamal encryption, non-interactive Zero Knowledge Proof, AI chatbot (DeepSeek) and Scrum methodology over a full academic year."
    },
    context: {
      fr: `Referendum est le projet de fin de deuxième année de BUT Informatique. C'est le projet le plus structurant de la formation : il a duré toute l'année universitaire et a été mené avec la méthodologie Scrum dans des conditions proches du monde professionnel.

Le cas d'étude était une entreprise fictive qui avait besoin de faire voter ses employés de manière sécurisée. Notre mission était de concevoir et développer une application de vote complète, garantissant la confidentialité des votes, l'intégrité des résultats et l'authentification des votants.

Nous étions une équipe de 4 étudiants, et j'occupais le rôle de Product Owner. À ce titre, je gérais le backlog produit, priorisais les fonctionnalités, et faisais le lien entre les "besoins client" (définis par les enseignants) et l'équipe de développement. Mais j'avais aussi un rôle technique majeur : j'étais responsable de toute la partie cryptographie (chiffrement ElGamal, imposé par les professeurs), de la sécurisation des communications par sockets, de l'implémentation de la Preuve Zero Knowledge non-interactive pour la vérification des votes, et de la création d'un chatbot FAQ alimenté par l'API DeepSeek.

Le projet était découpé en plusieurs phases : des sprints avec des rendus réguliers, puis un nouveau contrat où nous devions améliorer davantage l'application, suivis de nouveaux sprints. Chaque phase comprenait des présentations orales devant un "client" (les enseignants), la rédaction de dossiers techniques, et des soutenances.`,
      en: `Referendum is the final project of the second year of the Computer Science degree. It's the most structuring project of the program: it lasted the entire academic year and was conducted using Scrum methodology under conditions close to the professional world.

The case study was a fictional company that needed its employees to vote securely. Our mission was to design and develop a complete voting application, guaranteeing vote confidentiality, result integrity, and voter authentication.

We were a team of 4 students, and I held the role of Product Owner. In this capacity, I managed the product backlog, prioritized features, and served as the link between "client needs" (defined by instructors) and the development team. But I also had a major technical role: I was responsible for the entire cryptography part (ElGamal encryption, imposed by the professors), securing socket communications, implementing the non-interactive Zero Knowledge Proof for vote verification, and creating a FAQ chatbot powered by the DeepSeek API.

The project was divided into several phases: sprints with regular deliveries, then a new contract where we had to further improve the application, followed by more sprints. Each phase included oral presentations to a "client" (the instructors), technical documentation writing, and defenses.`
    },
    objectives: {
      fr: `1. **Application de vote sécurisée** : Développer une application Java/JavaFX permettant de créer des scrutins, de voter de manière confidentielle, et de consulter les résultats de manière sécurisée.

2. **Chiffrement ElGamal** : Implémenter le protocole cryptographique ElGamal (imposé par les professeurs) pour garantir la confidentialité des votes. C'était ma partie principale dans l'équipe.

3. **Preuve Zero Knowledge non-interactive** : Garantir que chaque vote est bien 0 ou 1 (oui ou non) sans révéler la valeur du vote. Le projet intègre les fonctions createZKProof (création de la preuve côté client) et verifyZKProof (vérification côté serveur) pour valider les votes en un seul échange.

4. **ChatBot FAQ (DeepSeek API)** : Créer un chatbot intégré à l'application pour répondre aux questions fréquentes des utilisateurs. L'API DeepSeek est utilisée uniquement pour comprendre la question de l'utilisateur et fournir la réponse la plus pertinente parmi des réponses pré-préparées relatives à l'application.

5. **Sécurisation des sockets** : Mettre en place une communication client-serveur sécurisée via des sockets chiffrés, pour empêcher l'interception ou la manipulation des votes en transit.

6. **Méthodologie Scrum** : Travailler en sprints avec des rendus réguliers, des rétrospectives, un backlog priorisé, et des présentations client orales.

7. **Documentation technique** : Rédiger des dossiers techniques complets à chaque phase du projet (architecture, choix techniques, diagrammes UML, tests).`,
      en: `1. **Secure voting application**: Develop a Java/JavaFX application allowing creation of polls, confidential voting, and secure result viewing.

2. **ElGamal encryption**: Implement the ElGamal cryptographic protocol (imposed by professors) to guarantee vote confidentiality. This was my main part within the team.

3. **Non-interactive Zero Knowledge Proof**: Ensure each vote is strictly 0 or 1 (yes or no) without revealing the actual vote value. The project integrates createZKProof (client-side proof creation) and verifyZKProof (server-side verification) functions to validate votes in a single exchange.

4. **FAQ ChatBot (DeepSeek API)**: Create a chatbot integrated into the application to answer frequently asked questions. The DeepSeek API is used solely to understand the user's question and provide the most relevant answer from pre-prepared responses related to the application.

5. **Socket security**: Set up secure client-server communication via encrypted sockets, to prevent interception or manipulation of votes in transit.

6. **Scrum methodology**: Work in sprints with regular deliveries, retrospectives, a prioritized backlog, and oral client presentations.

7. **Technical documentation**: Write complete technical documents at each project phase (architecture, technical choices, UML diagrams, tests).`
    },
    approach: {
      fr: `Le projet a suivi la méthodologie Scrum sur toute l'année. En tant que Product Owner, j'organisais les sprint plannings, maintenais le backlog, et présentais les démos au "client" (les enseignants) à chaque fin de sprint. À la fin de chaque cycle, nous recevions un nouveau contrat avec des exigences supplémentaires, simulant l'évolution des besoins d'un vrai client.

Côté technique, l'application est développée en Java avec une interface JavaFX. Mon rôle technique principal était le chiffrement ElGamal - un système de cryptographie asymétrique à clé publique. Le principe : chaque vote est chiffré avec la clé publique du scrutin avant d'être envoyé au serveur. Seul le détenteur de la clé privée peut déchiffrer les votes à la clôture du scrutin. Cela garantit que personne - pas même le serveur - ne peut lire un vote individuel avant la fin du scrutin.

**Preuve Zero Knowledge non-interactive** : Pour garantir l'intégrité des votes, le projet intègre une preuve Zero Knowledge. L'objectif est de prouver côté serveur que le vote d'un client est bien "oui" ou "non" (0 ou 1), sans révéler lequel. Si un utilisateur tente de voter une valeur invalide (par exemple 10 ou un nombre négatif), le vote est rejeté. La preuve est non-interactive : un seul échange entre le client et le serveur suffit - l'envoi de la preuve avec le message chiffré. Côté client, la fonction createZKProof génère deux preuves (une vraie, une simulée) via des engagements cryptographiques, un haché SHA-256 et de l'arithmétique modulaire. Côté serveur, verifyZKProof recalcule les valeurs et vérifie que la somme des challenges correspond au haché. Si c'est le cas, la preuve est valide - le vote est bien 0 ou 1, sans que le serveur ne sache lequel.

**ChatBot FAQ (DeepSeek API)** : J'ai implémenté un chatbot FAQ intégré à l'application dont le but est de répondre aux questions fréquentes des utilisateurs. J'ai intégré l'API DeepSeek qui sert uniquement à comprendre la question de l'utilisateur pour lui fournir la réponse la plus pertinente parmi des réponses spécifiques pré-préparées, limitées aux questions relatives à l'application.

J'ai également sécurisé les communications par sockets entre le client et le serveur. Les échanges sont chiffrés pour empêcher toute interception (man-in-the-middle) ou manipulation des données en transit.

Le reste de l'équipe travaillait sur l'interface JavaFX, la gestion des utilisateurs, la base de données et la logique métier des scrutins. Nous faisions des revues de code régulières et utilisions Git pour la gestion du code source.`,
      en: `The project followed Scrum methodology throughout the year. As Product Owner, I organized sprint plannings, maintained the backlog, and presented demos to the "client" (instructors) at each sprint end. At the end of each cycle, we received a new contract with additional requirements, simulating the evolving needs of a real client.

On the technical side, the application is developed in Java with a JavaFX interface. My main technical role was ElGamal encryption - an asymmetric public-key cryptography system. The principle: each vote is encrypted with the poll's public key before being sent to the server. Only the private key holder can decrypt votes when the poll closes. This ensures that nobody - not even the server - can read an individual vote before the poll ends.

**Non-interactive Zero Knowledge Proof**: To guarantee vote integrity, the project integrates a Zero Knowledge Proof. The goal is to prove server-side that a client's vote is indeed "yes" or "no" (0 or 1), without revealing which one. If a user attempts to vote an invalid value (e.g., 10 or a negative number), the vote is rejected. The proof is non-interactive: a single exchange between client and server suffices - sending the proof along with the encrypted message. Client-side, the createZKProof function generates two proofs (one real, one simulated) via cryptographic commitments, a SHA-256 hash, and modular arithmetic. Server-side, verifyZKProof recalculates values and verifies that the sum of challenges matches the hash. If so, the proof is valid - the vote is indeed 0 or 1, without the server knowing which.

**FAQ ChatBot (DeepSeek API)**: I implemented a FAQ chatbot integrated into the application to answer users' frequently asked questions. I integrated the DeepSeek API which serves solely to understand the user's question and provide the most relevant answer from specific pre-prepared responses, limited to questions related to the application.

I also secured socket communications between client and server. Exchanges are encrypted to prevent any interception (man-in-the-middle) or data manipulation in transit.

The rest of the team worked on the JavaFX interface, user management, database, and poll business logic. We conducted regular code reviews and used Git for source code management.`
    },
    architecture: {
      fr: `Application Java client-serveur avec interface JavaFX :
- **Client JavaFX** : Interface graphique pour la création de scrutins, le vote et la consultation des résultats.
- **Serveur Java** : Gestion des scrutins, stockage des votes chiffrés, déchiffrement à la clôture.
- **Cryptographie ElGamal** : Génération de clés (publique/privée), chiffrement des votes côté client, déchiffrement côté serveur à la clôture du scrutin.
- **Preuve Zero Knowledge** : Fonctions createZKProof (client) et verifyZKProof (serveur) dans la librairie cryptographique pour valider que chaque vote est strictement 0 ou 1 sans révéler sa valeur.
- **ChatBot FAQ** : Chatbot intégré utilisant l'API DeepSeek pour comprendre les questions utilisateurs et fournir des réponses pré-préparées relatives à l'application.
- **Sockets sécurisés** : Communication client-serveur chiffrée pour protéger les échanges de données.
- **Méthodologie** : Scrum avec sprints, backlog, rétrospectives, présentations client, dossiers techniques.`,
      en: `Java client-server application with JavaFX interface:
- **JavaFX Client**: GUI for poll creation, voting, and result viewing.
- **Java Server**: Poll management, encrypted vote storage, decryption at poll closure.
- **ElGamal Cryptography**: Key generation (public/private), client-side vote encryption, server-side decryption at poll closure.
- **Zero Knowledge Proof**: createZKProof (client) and verifyZKProof (server) functions in the cryptographic library to validate that each vote is strictly 0 or 1 without revealing its value.
- **FAQ ChatBot**: Integrated chatbot using the DeepSeek API to understand user questions and provide pre-prepared answers related to the application.
- **Secure Sockets**: Encrypted client-server communication to protect data exchanges.
- **Methodology**: Scrum with sprints, backlog, retrospectives, client presentations, technical documents.`
    },
    skills: [
      {
        name: { fr: "Cryptographie - ElGamal", en: "Cryptography - ElGamal" },
        description: { fr: "Implémentation complète du protocole ElGamal : génération de clés asymétriques, chiffrement et déchiffrement des votes. Compréhension des fondements mathématiques (logarithme discret, arithmétique modulaire) et des enjeux de sécurité.", en: "Complete implementation of the ElGamal protocol: asymmetric key generation, vote encryption and decryption. Understanding of mathematical foundations (discrete logarithm, modular arithmetic) and security challenges." }
      },
      {
        name: { fr: "Preuve Zero Knowledge non-interactive", en: "Non-interactive Zero Knowledge Proof" },
        description: { fr: "Vérification cryptographique que chaque vote est strictement 0 ou 1 sans révéler sa valeur. Preuve non-interactive en un seul échange via engagements cryptographiques, haché SHA-256 et arithmétique modulaire (fonctions createZKProof et verifyZKProof).", en: "Cryptographic verification that each vote is strictly 0 or 1 without revealing its value. Non-interactive proof in a single exchange via cryptographic commitments, SHA-256 hash, and modular arithmetic (createZKProof and verifyZKProof functions)." }
      },
      {
        name: { fr: "ChatBot IA (DeepSeek API)", en: "AI ChatBot (DeepSeek API)" },
        description: { fr: "Implémentation d'un chatbot FAQ intégré à l'application utilisant l'API DeepSeek pour comprendre les questions des utilisateurs et fournir des réponses pertinentes pré-préparées, limitées au contexte de l'application.", en: "Implementation of a FAQ chatbot integrated into the application using the DeepSeek API to understand user questions and provide relevant pre-prepared answers, limited to the application context." }
      },
      {
        name: { fr: "Sécurisation des sockets", en: "Socket Security" },
        description: { fr: "Mise en place de communications client-serveur chiffrées via sockets Java, protection contre l'interception et la manipulation des données en transit.", en: "Implementation of encrypted client-server communications via Java sockets, protection against interception and data manipulation in transit." }
      },
      {
        name: { fr: "Product Owner (Scrum)", en: "Product Owner (Scrum)" },
        description: { fr: "Gestion du backlog produit, priorisation des fonctionnalités, organisation des sprints, présentations client orales, rédaction de dossiers techniques. Interface entre les besoins client et l'équipe de développement.", en: "Product backlog management, feature prioritization, sprint organization, oral client presentations, technical document writing. Interface between client needs and the development team." }
      },
      {
        name: { fr: "Java avancé & JavaFX", en: "Advanced Java & JavaFX" },
        description: { fr: "Développement d'une application desktop Java complète avec interface graphique JavaFX, gestion d'événements, et architecture client-serveur.", en: "Development of a complete Java desktop application with JavaFX GUI, event handling, and client-server architecture." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Extraits de code à venir", en: "Code excerpts coming soon" },
        code: `// Les extraits de code seront ajoutés prochainement
// Code excerpts will be added soon

// Referendum - Application de Vote Sécurisée
// Chiffrement ElGamal & Sécurisation des Sockets
// ElGamal Encryption & Socket Security`,
        language: "java",
        explanation: {
          fr: "Les extraits de code détaillés du projet Referendum seront ajoutés prochainement, avec des exemples concrets de l'implémentation du chiffrement ElGamal et de la sécurisation des communications par sockets.",
          en: "Detailed code excerpts from the Referendum project will be added soon, with concrete examples of the ElGamal encryption implementation and socket communication security."
        }
      }
    ],
    results: {
      fr: `Le projet Referendum a été mené avec succès sur toute l'année universitaire :

- **Application de vote fonctionnelle et sécurisée** : Création de scrutins, vote confidentiel avec chiffrement ElGamal, consultation des résultats après clôture, le tout via une interface JavaFX intuitive.
- **Cryptographie ElGamal opérationnelle** : Le système de chiffrement asymétrique garantit que les votes sont illisibles en transit et en stockage, et ne sont déchiffrés qu'à la clôture du scrutin.
- **Preuve Zero Knowledge fonctionnelle** : Vérification cryptographique que chaque vote est bien 0 ou 1 en un seul échange, sans compromettre la confidentialité du vote. Les votes invalides sont automatiquement rejetés par le serveur.
- **ChatBot FAQ opérationnel** : Chatbot intégré utilisant l'API DeepSeek pour répondre aux questions fréquentes des utilisateurs de manière pertinente et contextuelle.
- **Communications sécurisées** : Les échanges client-serveur via sockets sont chiffrés, empêchant toute interception.
- **Méthodologie Scrum respectée** : Sprints réguliers, rendus, amélioration continue via les nouveaux contrats, présentations orales devant le client, et dossiers techniques complets à chaque phase.
- **Travail d'équipe structuré** : Collaboration efficace à 4, avec des rôles clairs et une bonne répartition du travail.`,
      en: `The Referendum project was successfully conducted throughout the academic year:

- **Functional and secure voting application**: Poll creation, confidential voting with ElGamal encryption, result viewing after closure, all through an intuitive JavaFX interface.
- **Operational ElGamal cryptography**: The asymmetric encryption system ensures votes are unreadable in transit and storage, and are only decrypted at poll closure.
- **Functional Zero Knowledge Proof**: Cryptographic verification that each vote is indeed 0 or 1 in a single exchange, without compromising vote confidentiality. Invalid votes are automatically rejected by the server.
- **Operational FAQ ChatBot**: Integrated chatbot using the DeepSeek API to answer users' frequently asked questions in a relevant and contextual manner.
- **Secure communications**: Client-server exchanges via sockets are encrypted, preventing any interception.
- **Scrum methodology respected**: Regular sprints, deliveries, continuous improvement through new contracts, oral presentations to the client, and complete technical documents at each phase.
- **Structured teamwork**: Effective collaboration of 4, with clear roles and good work distribution.`
    },
    reflection: {
      fr: `Le projet Referendum est celui qui m'a le plus apporté sur le plan professionnel pendant ma formation :

1. **Le rôle de Product Owner** m'a appris à voir un projet au-delà du code. Gérer un backlog, prioriser les fonctionnalités en fonction de la valeur métier, et présenter un produit à un client - ce sont des compétences que je n'aurais pas développées en restant uniquement développeur.

2. **La cryptographie ElGamal et la Preuve Zero Knowledge** m'ont confronté à un domaine que je ne connaissais pas du tout. Comprendre les fondements mathématiques (logarithme discret, arithmétique modulaire, SHA-256), implémenter un protocole de chiffrement asymétrique, et concevoir une preuve non-interactive garantissant l'intégrité des votes sans compromettre leur confidentialité m'a donné une vraie sensibilité à la cybersécurité et à la rigueur qu'elle exige.

3. **Le chatbot IA avec DeepSeek** m'a permis d'explorer l'intégration d'API d'intelligence artificielle dans une application concrète, en limitant l'IA à la compréhension de la question pour fournir des réponses pré-préparées pertinentes.

4. **La durée du projet** (toute l'année) m'a appris la gestion sur le long terme : maintenir la motivation, gérer la dette technique, et s'adapter aux changements de périmètre à chaque nouveau contrat. C'est très différent d'un projet de quelques semaines.

5. **Les présentations orales et dossiers techniques** m'ont forcé à structurer ma pensée et à expliquer des concepts complexes de manière accessible. C'est une compétence essentielle que le code seul ne développe pas.`,
      en: `The Referendum project taught me the most on a professional level during my studies:

1. **The Product Owner role** taught me to see a project beyond the code. Managing a backlog, prioritizing features based on business value, and presenting a product to a client - these are skills I wouldn't have developed by staying purely a developer.

2. **ElGamal cryptography and Zero Knowledge Proof** confronted me with a domain I knew nothing about. Understanding the mathematical foundations (discrete logarithm, modular arithmetic, SHA-256), implementing an asymmetric encryption protocol, and designing a non-interactive proof guaranteeing vote integrity without compromising confidentiality gave me a genuine sensitivity to cybersecurity and the rigor it demands.

3. **The AI chatbot with DeepSeek** allowed me to explore integrating artificial intelligence APIs into a concrete application, limiting the AI to question understanding to provide relevant pre-prepared answers.

4. **The project duration** (the full year) taught me long-term management: maintaining motivation, managing technical debt, and adapting to scope changes with each new contract. It's very different from a project lasting just a few weeks.

5. **Oral presentations and technical documents** forced me to structure my thinking and explain complex concepts in an accessible way. It's an essential skill that code alone doesn't develop.`
    },
    thumbnail: "/images/ref.webp",
    images: ["/images/referendum1.webp", "/images/referendum2.webp", "/images/referendum3.webp", "/images/referendum4.webp", "/images/referendum5.webp"],
    links: { github: "https://github.com/killianrms/referendum", video: "https://youtu.be/F3I_4daMcuk", report: "https://docs.google.com/document/d/11MfYwfZin0VpMzFhqWLSZ3Y3LzQwRpnDo-VK7oX6jJ8/edit?usp=sharing" }
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    category: "personal",
    technologies: ["Next.js", "React", "TypeScript", "Framer Motion", "CSS Modules", "Vercel"],
    duration: { fr: "Projet personnel (2025)", en: "Personal project (2025)" },
    team: { fr: "Projet individuel", en: "Individual project" },
    role: { fr: "Développeur & Designer", en: "Developer & Designer" },
    shortDescription: {
      fr: "Portfolio personnel développé avec Next.js 15, React et TypeScript. Système bilingue FR/EN, animations Framer Motion, analyses de projets détaillées et design responsive.",
      en: "Personal portfolio developed with Next.js 15, React and TypeScript. Bilingual FR/EN system, Framer Motion animations, detailed project analyses and responsive design."
    },
    context: {
      fr: `Ce portfolio est la refonte complète de mon ancien site personnel (HTML/CSS/JS vanilla). L'objectif était de créer une vitrine professionnelle moderne avec des analyses de projets détaillées, répondant aux attentes académiques de mon parcours BUT Informatique.

Le site est développé avec Next.js 15, React et TypeScript, et intègre des fonctionnalités avancées : un système bilingue français/anglais avec context React, des animations fluides avec Framer Motion, un routage dynamique pour les pages de projets, et un design responsive soigné. Chaque projet est documenté en profondeur avec contexte, objectifs, approche technique, architecture, compétences acquises et réflexion personnelle.`,
      en: `This portfolio is a complete redesign of my old personal site (vanilla HTML/CSS/JS). The goal was to create a modern professional showcase with detailed project analyses, meeting the academic expectations of my Computer Science degree.

The site is developed with Next.js 15, React and TypeScript, and integrates advanced features: a French/English bilingual system with React context, smooth animations with Framer Motion, dynamic routing for project pages, and a polished responsive design. Each project is documented in depth with context, objectives, technical approach, architecture, acquired skills, and personal reflection.`
    },
    objectives: {
      fr: `1. **Refonte complète** de l'ancien portfolio HTML/CSS en une application Next.js moderne
2. **Système bilingue** FR/EN avec context React et traductions type-safe
3. **Animations fluides** avec Framer Motion (scroll-triggered, staggered)
4. **Analyses de projets détaillées** avec code highlights et réflexions
5. **Design responsive** avec thème sombre et typographie soignée`,
      en: `1. **Complete redesign** of the old HTML/CSS portfolio into a modern Next.js application
2. **Bilingual system** FR/EN with React context and type-safe translations
3. **Smooth animations** with Framer Motion (scroll-triggered, staggered)
4. **Detailed project analyses** with code highlights and reflections
5. **Responsive design** with dark theme and polished typography`
    },
    approach: {
      fr: `Le portfolio est développé avec Next.js 15 (App Router) en TypeScript. L'architecture suit les conventions Next.js avec des composants React modulaires.

- **Système bilingue** : Un LanguageContext React fournit une fonction \`t(key)\` type-safe via \`useCallback\` pour les traductions, avec toggle FR/EN. Le contenu des projets utilise des objets \`{ fr, en }\` pour le bilingue inline.
- **Animations** : Framer Motion avec \`whileInView\` pour les animations au scroll, et un système de stagger via \`delay: index * 0.1\` pour les cartes de projets.
- **Routage dynamique** : Les pages de projets utilisent \`/projects/[slug]\` avec lookup dans le tableau de données.
- **Design** : Thème sombre avec variables CSS, typographie serif/sans-serif, et composants réutilisables (ProjectCard, Timeline, etc.).`,
      en: `The portfolio is developed with Next.js 15 (App Router) in TypeScript. The architecture follows Next.js conventions with modular React components.

- **Bilingual system**: A React LanguageContext provides a type-safe \`t(key)\` function via \`useCallback\` for translations, with FR/EN toggle. Project content uses \`{ fr, en }\` objects for inline bilingual support.
- **Animations**: Framer Motion with \`whileInView\` for scroll-triggered animations, and a stagger system via \`delay: index * 0.1\` for project cards.
- **Dynamic routing**: Project pages use \`/projects/[slug]\` with lookup in the data array.
- **Design**: Dark theme with CSS variables, serif/sans-serif typography, and reusable components (ProjectCard, Timeline, etc.).`
    },
    architecture: {
      fr: `Application Next.js 15 (App Router) :
- **src/app/** : Pages et layout (page d'accueil, pages projets dynamiques)
- **src/components/** : Composants React (ProjectCard, ProjectsSection, Timeline, Header, etc.)
- **src/context/** : LanguageContext pour le système bilingue
- **src/data/** : Données des projets et traductions (TypeScript)
- **public/** : Assets statiques (images, icônes)
- **Déploiement** : Vercel`,
      en: `Next.js 15 Application (App Router):
- **src/app/**: Pages and layout (homepage, dynamic project pages)
- **src/components/**: React components (ProjectCard, ProjectsSection, Timeline, Header, etc.)
- **src/context/**: LanguageContext for the bilingual system
- **src/data/**: Project data and translations (TypeScript)
- **public/**: Static assets (images, icons)
- **Deployment**: Vercel`
    },
    skills: [
      {
        name: { fr: "Next.js & React avancé", en: "Advanced Next.js & React" },
        description: { fr: "Utilisation de Next.js 15 App Router, composants React modulaires, context API pour la gestion d'état, et routage dynamique avec [slug].", en: "Usage of Next.js 15 App Router, modular React components, context API for state management, and dynamic routing with [slug]." }
      },
      {
        name: { fr: "TypeScript", en: "TypeScript" },
        description: { fr: "Typage strict des interfaces (Project, Skill, CodeHighlight), des traductions (TranslationKey), et des props de composants pour la fiabilité du code.", en: "Strict typing of interfaces (Project, Skill, CodeHighlight), translations (TranslationKey), and component props for code reliability." }
      },
      {
        name: { fr: "Framer Motion", en: "Framer Motion" },
        description: { fr: "Animations au scroll (whileInView), transitions staggered pour les listes, et animations de page pour une expérience utilisateur fluide.", en: "Scroll-triggered animations (whileInView), staggered transitions for lists, and page animations for a smooth user experience." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Système bilingue avec Context React", en: "Bilingual System with React Context" },
        code: `"use client";
import { createContext, useContext, useState, useCallback } from "react";
import { translations, type TranslationKey } from "@/data/translations";

type Language = "fr" | "en";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState<Language>("fr");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[language][key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}`,
        language: "typescript",
        explanation: {
          fr: "Ce contexte React fournit le systeme bilingue a toute l'application. La fonction t() est optimisee avec useCallback pour eviter les re-rendus inutiles. Le typage TranslationKey garantit que toutes les cles de traduction existent a la compilation. Les composants appellent simplement t(\"key\") pour obtenir le texte dans la langue active.",
          en: "This React context provides the bilingual system to the entire application. The t() function is optimized with useCallback to avoid unnecessary re-renders. The TranslationKey typing ensures all translation keys exist at compile time. Components simply call t(\"key\") to get text in the active language."
        }
      },
      {
        title: { fr: "Animations staggered avec Framer Motion", en: "Staggered Animations with Framer Motion" },
        code: `<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
  <Link href={\`/projects/\${project.slug}\`}>
    <div className="group relative bg-surface border border-border
         rounded-xl overflow-hidden hover:border-accent/50
         transition-all duration-300">
      {/* Project card content */}
    </div>
  </Link>
</motion.div>`,
        language: "typescript",
        explanation: {
          fr: "Chaque carte de projet utilise Framer Motion avec whileInView pour declencher l'animation uniquement quand l'element entre dans le viewport. Le delay base sur l'index (index * 0.1) cree un effet cascade ou les cartes apparaissent les unes apres les autres. Le margin de -50px anticipe l'animation pour une UX plus fluide. once: true empeche la re-animation au scroll inverse.",
          en: "Each project card uses Framer Motion with whileInView to trigger animation only when the element enters the viewport. The index-based delay (index * 0.1) creates a cascade effect where cards appear one after another. The -50px margin anticipates the animation for smoother UX. once: true prevents re-animation on reverse scroll."
        }
      }
    ],
    results: {
      fr: `Le portfolio v2 est le site que vous consultez actuellement. Il remplace entierement l'ancienne version HTML/CSS avec une experience bien plus riche :

- **Systeme bilingue complet** FR/EN avec basculement instantane
- **11 projets documentes** en profondeur avec contexte, approche technique, code highlights et reflexions
- **Animations fluides** au scroll avec Framer Motion
- **Design responsive** adapte a tous les ecrans
- **Boutons de liens** vers GitHub, demos live, videos, rapports techniques et Discord pour chaque projet`,
      en: `The v2 portfolio is the site you are currently viewing. It completely replaces the old HTML/CSS version with a much richer experience:

- **Complete bilingual system** FR/EN with instant switching
- **11 projects documented** in depth with context, technical approach, code highlights and reflections
- **Smooth scroll animations** with Framer Motion
- **Responsive design** adapted to all screens
- **Link buttons** to GitHub, live demos, videos, technical reports and Discord for each project`
    },
    reflection: {
      fr: `Ce portfolio v2 est bien plus qu'une vitrine : c'est un exercice de conception complet. Passer de HTML/CSS vanilla a Next.js/React/TypeScript m'a fait prendre conscience de la puissance des frameworks modernes pour structurer une application web.

Le systeme bilingue m'a appris a penser l'internationalisation des le depart plutot qu'en afterthought. Le typage TypeScript des traductions et des projets m'a evite de nombreuses erreurs et rend le code maintenable meme avec 11 projets detailles.

Ce projet demontre aussi ma capacite a documenter et communiquer sur mon travail, une competence aussi importante que le code lui-meme.`,
      en: `This v2 portfolio is much more than a showcase: it's a complete design exercise. Going from vanilla HTML/CSS to Next.js/React/TypeScript made me realize the power of modern frameworks for structuring a web application.

The bilingual system taught me to think about internationalization from the start rather than as an afterthought. TypeScript typing of translations and projects prevented many errors and keeps the code maintainable even with 11 detailed projects.

This project also demonstrates my ability to document and communicate about my work, a skill as important as the code itself.`
    },
    thumbnail: "/images/portfoliov2.webp",
    images: [],
    links: { github: "https://github.com/killianrms/portfoliov2", live: "https://killianrms.com" }
  },
  {
    slug: "site-ecommerce-parfum",
    title: "Site E-commerce de Parfums",
    category: "university",
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap", "MVC"],
    duration: { fr: "Janvier - Mars 2024 (Projet universitaire)", en: "January - March 2024 (University project)" },
    team: { fr: "Groupe de 4 étudiants", en: "Group of 4 students" },
    role: { fr: "Développeur Back-End - Architecture MVC et base de données", en: "Back-End Developer - MVC Architecture and database" },
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
    thumbnail: "/images/site-ecom_resize.webp",
    images: ["/images/E-Commerce0.webp", "/images/E-Commerce1.webp", "/images/E-Commerce2.webp", "/images/E-Commerce3.webp", "/images/E-Commerce4.webp"],
    links: { github: "https://github.com/killianrms/ecommerce-parfum" }
  },
  {
    slug: "code-game-jam-2026",
    title: "Code Game Jam 2026 - Scroll Party",
    category: "competition",
    technologies: ["Unity", "C#", "Game Design", "Sound Design", "Trello"],
    duration: { fr: "22 - 24 Janvier 2026 (48h)", en: "January 22 - 24, 2026 (48h)" },
    team: { fr: "Équipe Golem Gang - 5 étudiants", en: "Golem Gang Team - 5 students" },
    role: { fr: "Développeur - Game Design et développement Unity", en: "Developer - Game Design and Unity development" },
    shortDescription: {
      fr: "Jeu vidéo développé en 48h sur Unity lors de la Code Game Jam 2026. Thème : \"Fête des Clics\". Scroll Party est un jeu de sensibilisation à l'addiction aux réseaux sociaux où le joueur doit résister au scroll pendant une soirée.",
      en: "Video game developed in 48h on Unity during the Code Game Jam 2026. Theme: \"Fête des Clics\" (Click Party). Scroll Party is an awareness game about social media addiction where the player must resist scrolling during a party."
    },
    context: {
      fr: `La Code Game Jam est une compétition nationale de développement de jeux vidéo. L'édition 2026 s'est déroulée du 22 au 24 janvier 2026 (48h non-stop). Le sujet a été révélé en direct sur Twitch et le brainstorming d'équipe s'est fait sur Discord.

Le thème était "FÊTE DES CLICS". Notre équipe Golem Gang (5 membres) a créé **Scroll Party**, un jeu développé sur Unity qui joue sur le double sens du thème : la fête (une soirée) et les clics (le scroll sur un téléphone, façon TikTok).

Le concept : le joueur est à une soirée et scroll sur son téléphone comme sur TikTok. Des PNJ viennent régulièrement lui parler. Le joueur a le choix : poser son téléphone pour répondre (augmenter sa jauge de sociabilisation) ou continuer à scroller (augmenter sa jauge de likes). Le jeu explore le thème de l'addiction aux réseaux sociaux de manière ludique et immersive.`,
      en: `The Code Game Jam is a national video game development competition. The 2026 edition took place from January 22 to 24, 2026 (48h non-stop). The subject was revealed live on Twitch and team brainstorming was done on Discord.

The theme was "FÊTE DES CLICS" (Click Party). Our Golem Gang team (5 members) created **Scroll Party**, a game developed on Unity that plays on the double meaning of the theme: the party (a social event) and the clicks (scrolling on a phone, TikTok-style).

The concept: the player is at a party and scrolls on their phone like on TikTok. NPCs regularly come to talk to them. The player has a choice: put down their phone to respond (increase their socialization gauge) or keep scrolling (increase their likes gauge). The game explores the theme of social media addiction in a fun and immersive way.`
    },
    objectives: {
      fr: `1. **Développer un jeu complet en 48h** sur Unity autour du thème "Fête des Clics"
2. **Mécaniques de jeu à double jauge** : jauge de likes (scroll/addiction) vs jauge de sociabilisation (interactions avec les PNJ)
3. **Sensibilisation à l'addiction** : montrer les effets du scroll compulsif (voix dans la tête, encouragements à continuer) vs le "déclic" de poser son téléphone
4. **Ambiance sonore immersive** : création de musiques originales pour le jeu, publiées sur SoundCloud`,
      en: `1. **Develop a complete game in 48h** on Unity around the "Fête des Clics" theme
2. **Dual gauge game mechanics**: likes gauge (scroll/addiction) vs socialization gauge (NPC interactions)
3. **Addiction awareness**: show the effects of compulsive scrolling (voices in the head, encouragement to continue) vs the "click moment" of putting down the phone
4. **Immersive sound design**: creation of original music for the game, published on SoundCloud`
    },
    approach: {
      fr: `Le jeu a été développé sur Unity en C#. L'organisation de l'équipe s'est faite via Trello pour répartir les tâches sur les 48h.

**Mécaniques de jeu :**
- Le joueur est à une soirée et tient son téléphone, scrollant un fil façon TikTok avec des contenus qui défilent.
- Des PNJ viennent régulièrement lui parler. Le joueur peut choisir de poser son téléphone pour répondre ou d'ignorer et continuer à scroller.
- **Jauge de likes** : si le joueur continue à scroller sans écouter les PNJ, cette jauge augmente. Des voix dans sa tête l'encouragent ("wow c'est trop bien", "continue") pour conforter l'addiction. Si elle atteint 100%, le joueur perd - il est complètement absorbé par son écran.
- **Jauge de sociabilisation** : si le joueur pose son téléphone pour parler aux PNJ, cette jauge augmente. L'écran commence à trembler, la vision devient floue - simulant le manque et l'addiction. Si elle atteint 100%, le joueur a le **DÉCLIC** (jeu de mots avec "des clics" du thème) : il réalise ce qu'il fait, pose définitivement son téléphone, et profite de sa soirée. Il gagne !

Le jeu utilise ces mécaniques inversées pour créer une expérience de sensibilisation : gagner demande de résister à l'envie de scroller, ce qui reproduit la difficulté réelle de décrocher de son téléphone.`,
      en: `The game was developed on Unity in C#. Team organization was done via Trello to distribute tasks over the 48h.

**Game mechanics:**
- The player is at a party holding their phone, scrolling a TikTok-style feed with content flowing by.
- NPCs regularly come to talk to them. The player can choose to put down their phone to respond or ignore them and keep scrolling.
- **Likes gauge**: if the player keeps scrolling without listening to NPCs, this gauge increases. Voices in their head encourage them ("wow this is amazing", "keep going") to reinforce addiction. If it reaches 100%, the player loses - completely absorbed by their screen.
- **Socialization gauge**: if the player puts down their phone to talk to NPCs, this gauge increases. The screen starts shaking, vision becomes blurry - simulating withdrawal and addiction. If it reaches 100%, the player has the **DÉCLIC** (wordplay with "des clics"/clicks from the theme): they realize what they're doing, permanently put down their phone, and enjoy their party. They win!

The game uses these inverted mechanics to create an awareness experience: winning requires resisting the urge to scroll, which reproduces the real difficulty of putting down one's phone.`
    },
    architecture: {
      fr: `Jeu Unity développé en 48h :
- **Moteur** : Unity avec scripts C#
- **Mécaniques** : Système de double jauge (likes vs sociabilisation), PNJ interactifs, effets visuels d'addiction (tremblement, flou)
- **Audio** : Musiques originales créées pour le jeu (publiées sur SoundCloud), voix intérieures encourageant le scroll
- **Organisation** : Trello pour la gestion des tâches en équipe sur 48h`,
      en: `Unity game developed in 48h:
- **Engine**: Unity with C# scripts
- **Mechanics**: Dual gauge system (likes vs socialization), interactive NPCs, addiction visual effects (shaking, blur)
- **Audio**: Original music created for the game (published on SoundCloud), inner voices encouraging scrolling
- **Organization**: Trello for team task management over 48h`
    },
    skills: [
      {
        name: { fr: "Développement Unity / C#", en: "Unity / C# Development" },
        description: { fr: "Développement d'un jeu complet sur Unity en C# en 48h : mécaniques de gameplay, système de jauges, effets visuels, intégration audio.", en: "Development of a complete Unity game in C# in 48h: gameplay mechanics, gauge system, visual effects, audio integration." }
      },
      {
        name: { fr: "Game Design & Narration", en: "Game Design & Storytelling" },
        description: { fr: "Conception de mécaniques de jeu à double jauge pour sensibiliser à l'addiction aux réseaux sociaux, avec un twist narratif (le \"déclic\") lié au thème de la compétition.", en: "Design of dual-gauge game mechanics to raise awareness about social media addiction, with a narrative twist (the \"click moment\") linked to the competition theme." }
      },
      {
        name: { fr: "Travail d'équipe en 48h", en: "48h Teamwork" },
        description: { fr: "Coordination d'une équipe de 5 sur 48h avec Trello, répartition efficace des tâches (développement, game design, sound design, graphisme).", en: "Coordination of a 5-person team over 48h with Trello, efficient task distribution (development, game design, sound design, graphics)." }
      }
    ],
    codeHighlights: [],
    results: {
      fr: `Le jeu Scroll Party a été livré fonctionnel à la fin des 48h :

- **Jeu complet et jouable** avec les deux mécaniques de jauge fonctionnelles, les PNJ interactifs, et les deux fins (victoire par déclic / défaite par addiction)
- **Effets immersifs** : voix intérieures lors du scroll, tremblements et vision floue lors de la sociabilisation pour simuler l'addiction
- **Bande-son originale** publiée sur SoundCloud avec les musiques du jeu
- **Gestion de projet** via Trello avec une répartition claire des tâches sur les 48h

Le concept du double sens "Fête des Clics" → fête + déclic a été le fil rouge du jeu, mêlant gameplay addictif et message de sensibilisation.`,
      en: `The Scroll Party game was delivered functional at the end of the 48h:

- **Complete and playable game** with both gauge mechanics functional, interactive NPCs, and two endings (victory by realization / defeat by addiction)
- **Immersive effects**: inner voices during scrolling, shaking and blurred vision during socialization to simulate addiction
- **Original soundtrack** published on SoundCloud with game music
- **Project management** via Trello with clear task distribution over the 48h

The "Fête des Clics" double meaning concept → party + click moment was the game's common thread, combining addictive gameplay with an awareness message.`
    },
    reflection: {
      fr: `La Code Game Jam 2026 m'a appris à développer un jeu vidéo complet en un temps très limité. Contrairement au développement web, le game development sur Unity impose de penser en termes de game loop, de physique, d'animations et de sound design - des compétences très différentes de mon quotidien.

Le plus grand défi a été de transformer le thème "Fête des Clics" en une expérience de jeu significative. Le concept du déclic - où gagner consiste à arrêter de jouer avec son téléphone - crée un paradoxe intéressant qui fait réfléchir le joueur sur ses propres habitudes numériques.

Travailler à 5 sur 48h avec Trello nous a appris à prioriser ce qui compte vraiment dans un jeu : les mécaniques de base doivent fonctionner avant de s'attaquer au polish visuel ou sonore.`,
      en: `The Code Game Jam 2026 taught me to develop a complete video game in very limited time. Unlike web development, game development on Unity requires thinking in terms of game loops, physics, animations, and sound design - very different skills from my daily routine.

The biggest challenge was transforming the "Fête des Clics" theme into a meaningful game experience. The "click moment" concept - where winning consists of stopping phone use - creates an interesting paradox that makes the player reflect on their own digital habits.

Working as a team of 5 over 48h with Trello taught us to prioritize what truly matters in a game: core mechanics must work before tackling visual or audio polish.`
    },
    thumbnail: "/images/ndi25.webp",
    images: [],
    links: { video: "https://youtu.be/LyqimFqbW04" }
  },
  {
    slug: "nuit-info-2025",
    title: "Nuit de l'Info 2025",
    category: "competition",
    technologies: ["TypeScript", "HTML/CSS", "Chrome Extension (Manifest V3)", "DeepSeek API", "GitHub Pages"],
    duration: { fr: "Décembre 2025 (1 nuit)", en: "December 2025 (1 night)" },
    team: { fr: "Équipe Golem Gang - 7 étudiants", en: "Golem Gang Team - 7 students" },
    role: { fr: "Développeur - Participation aux 3 défis", en: "Developer - Participation in all 3 challenges" },
    shortDescription: {
      fr: "Compétition nationale de développement en une nuit. Sujet principal : \"Comment les établissements scolaires peuvent tenir tête aux Big Tech ?\". 3 défis relevés : extension de sécurité Chrome, chatbot IA et jeu d'ergonomie frustrante.",
      en: "National one-night development competition. Main subject: \"How can schools stand up to Big Tech?\". 3 challenges completed: Chrome security extension, AI chatbot, and frustrating ergonomics game."
    },
    context: {
      fr: `La Nuit de l'Info est une compétition nationale annuelle qui rassemble des étudiants en informatique de toute la France pendant une nuit entière. L'objectif est de faire travailler ensemble les étudiants autour de défis informatiques portant sur des thématiques d'actualité, en utilisant des technologies modernes.

L'édition 2025 portait sur le sujet : "Comment les établissements scolaires peuvent tenir tête aux Big Tech ?", nous invitant à réfléchir au numérique responsable et à l'indépendance numérique des écoles. En parallèle du défi principal, nous avons participé à 3 défis connexes proposés par les partenaires de l'événement.

Notre équipe "Golem Gang" était composée de 7 étudiants. Nous nous sommes organisés rapidement pour livrer un site web interactif et 3 défis complémentaires en une seule nuit. Le site est développé en TypeScript et déployé sur GitHub Pages.`,
      en: `The Nuit de l'Info is an annual national competition that brings together computer science students from all over France for an entire night. The goal is to have students work together on IT challenges around current topics, using modern technologies.

The 2025 edition focused on the topic: "How can schools stand up to Big Tech?", inviting us to reflect on responsible digital and schools' digital independence. Alongside the main challenge, we participated in 3 related challenges proposed by event partners.

Our "Golem Gang" team consisted of 7 students. We organized quickly to deliver an interactive website and 3 complementary challenges in a single night. The site is developed in TypeScript and deployed on GitHub Pages.`
    },
    objectives: {
      fr: `1. **Défi principal** : Développer un site interactif sur le numérique responsable avec simulateur d'empreinte numérique, quiz de connaissances et système de badges
2. **Défi "La Ligue des Extensions"** : Créer SafeLinks, une extension Chrome (Manifest V3) open source qui détecte la sécurité des liens avant de cliquer
3. **Défi "Simplifier pour mieux vivre"** : Concevoir le Password Game, un champ de saisie volontairement frustrant avec des règles absurdes - un bouton esthétique mais délibérément compliqué à utiliser
4. **Défi Chatbot "Chat'bruti"** : Développer un chatbot IA drôle et inutilement philosophique, intégré au site`,
      en: `1. **Main challenge**: Develop an interactive site about responsible digital with digital footprint simulator, knowledge quiz, and badge system
2. **"La Ligue des Extensions" challenge**: Create SafeLinks, an open source Chrome extension (Manifest V3) that detects link safety before clicking
3. **"Simplifier pour mieux vivre" challenge**: Design the Password Game, a deliberately frustrating input field with absurd rules - an aesthetic but deliberately complicated button to use
4. **Chatbot challenge "Chat'bruti"**: Develop a funny and unnecessarily philosophical AI chatbot, integrated into the site`
    },
    approach: {
      fr: `Le site principal est développé en TypeScript et déployé sur GitHub Pages. Il propose une plateforme interactive sur le numérique responsable avec plusieurs modules :

- **Simulateur d'empreinte numérique** : Calcul de l'impact numérique de l'utilisateur avec un système de badges à débloquer.
- **Quiz de connaissances** : Test sur le numérique responsable et la cybersécurité.
- **Password Game** : Un jeu d'ergonomie volontairement frustrant où l'utilisateur doit créer un mot de passe en suivant des règles de plus en plus absurdes - le bouton est esthétique mais délibérément compliqué à utiliser.

Pour le défi extension, nous avons développé **SafeLinks**, une extension Chrome Manifest V3 qui analyse la sécurité des liens avant que l'utilisateur ne clique dessus. Le code est open source sur GitHub.

Pour le défi chatbot, nous avons créé **Chat'bruti**, un chatbot IA accessible via un bouton en bas à droite du site, conçu pour être drôle et inutilement philosophique dans ses réponses.`,
      en: `The main site is developed in TypeScript and deployed on GitHub Pages. It offers an interactive platform about responsible digital with several modules:

- **Digital footprint simulator**: Calculation of the user's digital impact with a badge system to unlock.
- **Knowledge quiz**: Test on responsible digital and cybersecurity.
- **Password Game**: A deliberately frustrating ergonomics game where the user must create a password following increasingly absurd rules - the button is aesthetic but deliberately complicated to use.

For the extension challenge, we developed **SafeLinks**, a Chrome Manifest V3 extension that analyzes link safety before the user clicks. The code is open source on GitHub.

For the chatbot challenge, we created **Chat'bruti**, an AI chatbot accessible via a button in the bottom right of the site, designed to be funny and unnecessarily philosophical in its responses.`
    },
    architecture: {
      fr: `Projet multi-composants développé en une nuit :
- **Site principal** : TypeScript, HTML/CSS, déployé sur GitHub Pages - modules interactifs (simulateur, quiz, Password Game)
- **Extension Chrome SafeLinks** : Manifest V3, détection de la sécurité des liens
- **Chatbot Chat'bruti** : IA intégrée au site, personnalité humoristique et philosophique
- **Hébergement** : GitHub Pages`,
      en: `Multi-component project developed in one night:
- **Main site**: TypeScript, HTML/CSS, deployed on GitHub Pages - interactive modules (simulator, quiz, Password Game)
- **SafeLinks Chrome Extension**: Manifest V3, link safety detection
- **Chat'bruti Chatbot**: AI integrated into the site, humorous and philosophical personality
- **Hosting**: GitHub Pages`
    },
    skills: [
      {
        name: { fr: "Développement sous pression", en: "Development Under Pressure" },
        description: { fr: "Capacité à produire du code de qualité dans un temps très limité (une nuit), à prendre des décisions techniques rapides et à livrer 3 défis complémentaires en parallèle.", en: "Ability to produce quality code in very limited time (one night), make quick technical decisions, and deliver 3 complementary challenges in parallel." }
      },
      {
        name: { fr: "Travail d'équipe intensif", en: "Intensive Teamwork" },
        description: { fr: "Coordination efficace au sein d'une équipe de 7 personnes, répartition rapide des tâches sur 3 défis simultanés, communication constante et résolution rapide des conflits.", en: "Efficient coordination within a 7-person team, quick task distribution across 3 simultaneous challenges, constant communication and quick conflict resolution." }
      },
      {
        name: { fr: "Extension Chrome (Manifest V3)", en: "Chrome Extension (Manifest V3)" },
        description: { fr: "Développement d'une extension Chrome open source avec le nouveau format Manifest V3 pour la détection de sécurité des liens.", en: "Development of an open source Chrome extension with the new Manifest V3 format for link safety detection." }
      }
    ],
    codeHighlights: [],
    results: {
      fr: `Le site et les 3 défis ont été livrés fonctionnels à la fin de la nuit :

- **Site principal** déployé sur GitHub Pages avec le simulateur d'empreinte numérique, le quiz et le système de badges
- **SafeLinks** : extension Chrome fonctionnelle détectant la sécurité des liens, code open source publié sur GitHub
- **Password Game** : jeu d'ergonomie volontairement frustrant avec un bouton esthétique mais compliqué - le défi d'ergonomie inversée est réussi
- **Chat'bruti** : chatbot IA humoristique intégré au site, accessible en bas à droite

Cette expérience m'a appris la valeur du prototypage rapide et de la priorisation des fonctionnalités essentielles (MVP) lorsque le temps est limité.`,
      en: `The site and all 3 challenges were delivered functional by the end of the night:

- **Main site** deployed on GitHub Pages with the digital footprint simulator, quiz, and badge system
- **SafeLinks**: functional Chrome extension detecting link safety, open source code published on GitHub
- **Password Game**: deliberately frustrating ergonomics game with an aesthetic but complicated button - the reverse ergonomics challenge is successful
- **Chat'bruti**: humorous AI chatbot integrated into the site, accessible in the bottom right

This experience taught me the value of rapid prototyping and prioritizing essential features (MVP) when time is limited.`
    },
    reflection: {
      fr: `La Nuit de l'Info 2025 a été une expérience unique qui m'a appris énormément sur la gestion de projet en conditions extrêmes. En seulement une nuit, il faut savoir identifier les priorités, se répartir efficacement les tâches à 7, et se concentrer sur un MVP fonctionnel pour chaque défi.

La particularité de cette édition était la diversité des défis : passer d'une extension Chrome à un chatbot IA en passant par un jeu d'ergonomie frustrante demande une grande adaptabilité technique. C'est cette polyvalence et cette capacité à livrer rapidement qui font la valeur de cette compétition.`,
      en: `The Nuit de l'Info 2025 was a unique experience that taught me a lot about project management under extreme conditions. In just one night, you need to identify priorities, efficiently distribute tasks among 7 people, and focus on a functional MVP for each challenge.

The specificity of this edition was the diversity of challenges: going from a Chrome extension to an AI chatbot to a frustrating ergonomics game requires great technical adaptability. It's this versatility and ability to deliver quickly that make this competition valuable.`
    },
    thumbnail: "/images/ndi2025.webp",
    images: [],
    links: { live: "https://killianrms.github.io/NDI2025/" }
  },
  {
    slug: "autotweetvideouploader",
    title: "AutoTweetVideoUploader",
    category: "personal",
    technologies: ["Python", "Twitter API v2", "OAuth 1.0a", "FFmpeg", "Web Scraping", "Cron", "Linux"],
    duration: { fr: "Projet personnel (2024)", en: "Personal project (2024)" },
    team: { fr: "Projet individuel", en: "Individual project" },
    role: { fr: "Développeur unique", en: "Sole Developer" },
    shortDescription: {
      fr: "Outil open source d'automatisation de publication de vidéos et photos sur Twitter/X - alternative gratuite à la fonctionnalité payante de planification de Twitter. Scraping ou planification manuelle avec fichier de configuration.",
      en: "Open source automation tool for publishing videos and photos on Twitter/X - free alternative to Twitter's paid scheduling feature. Scraping or manual scheduling with configuration file."
    },
    context: {
      fr: `La planification de publications sur Twitter/X est une fonctionnalité payante (Twitter Premium). J'ai développé AutoTweetVideoUploader comme une alternative open source et gratuite pour automatiser la publication de contenu sur Twitter.

L'outil propose deux modes de fonctionnement :
- **Mode scraping** : récupère automatiquement des vidéos d'autres utilisateurs et les reposte de manière planifiée.
- **Mode manuel** : l'utilisateur place ses photos/vidéos dans un dossier, configure les dates et heures de publication dans un fichier de configuration, et le bot publie automatiquement aux moments définis.

Le bot utilise l'API Twitter v2 avec authentification OAuth 1.0a, FFmpeg pour la conversion et l'optimisation des vidéos, et le système cron de Linux pour la planification. Le projet est open source sur GitHub.`,
      en: `Scheduling posts on Twitter/X is a paid feature (Twitter Premium). I developed AutoTweetVideoUploader as a free, open source alternative to automate content publishing on Twitter.

The tool offers two operating modes:
- **Scraping mode**: automatically retrieves videos from other users and reposts them on a schedule.
- **Manual mode**: the user places their photos/videos in a folder, configures publication dates and times in a configuration file, and the bot automatically publishes at the defined times.

The bot uses the Twitter v2 API with OAuth 1.0a authentication, FFmpeg for video conversion and optimization, and Linux's cron system for scheduling. The project is open source on GitHub.`
    },
    objectives: {
      fr: `1. **Alternative gratuite** à la planification payante de Twitter/X
2. **Deux modes** : scraping automatique de vidéos d'autres utilisateurs ou planification manuelle via fichier de configuration
3. Gérer la conversion vidéo avec FFmpeg (codec, résolution, taille)
4. Respecter les limites de l'API Twitter (rate limiting)
5. Publier automatiquement via cron aux dates/heures configurées`,
      en: `1. **Free alternative** to Twitter/X paid scheduling
2. **Two modes**: automatic video scraping from other users or manual scheduling via configuration file
3. Handle video conversion with FFmpeg (codec, resolution, size)
4. Respect Twitter API limits (rate limiting)
5. Automatically publish via cron at configured dates/times`
    },
    approach: {
      fr: `Le bot suit un pipeline en plusieurs étapes :

**Mode scraping :**
1. **Récupération** : Scraping de vidéos depuis des comptes Twitter ciblés.
2. **Conversion** : Utilisation de FFmpeg pour convertir au format MP4 H.264 compatible Twitter.
3. **Publication planifiée** : Publication automatique via cron à des heures configurées.

**Mode manuel :**
1. **Configuration** : L'utilisateur place ses photos/vidéos dans un dossier et renseigne dans un fichier de configuration les dates, heures et textes associés.
2. **Conversion** : FFmpeg optimise le contenu pour Twitter.
3. **Publication** : Le bot publie automatiquement aux moments définis.

Le tout est orchestré par un script Python exécuté via cron, avec gestion du rate limiting et retry en cas d'erreur.`,
      en: `The bot follows a multi-step pipeline:

**Scraping mode:**
1. **Retrieval**: Scraping videos from targeted Twitter accounts.
2. **Conversion**: Using FFmpeg to convert to Twitter-compatible MP4 H.264 format.
3. **Scheduled publication**: Automatic publication via cron at configured times.

**Manual mode:**
1. **Configuration**: The user places their photos/videos in a folder and fills in a configuration file with dates, times, and associated text.
2. **Conversion**: FFmpeg optimizes content for Twitter.
3. **Publication**: The bot automatically publishes at the defined times.

Everything is orchestrated by a Python script executed via cron, with rate limiting management and retry on error.`
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
      fr: `Le bot fonctionne de manière autonome et offre une alternative gratuite et open source à la fonctionnalité payante de Twitter. Il gère correctement les deux modes (scraping et planification manuelle), les erreurs d'API, les vidéos trop volumineuses (compression automatique via FFmpeg), et les limites de publication. Le code est open source sur GitHub.`,
      en: `The bot runs autonomously and offers a free, open source alternative to Twitter's paid feature. It correctly handles both modes (scraping and manual scheduling), API errors, oversized videos (automatic compression via FFmpeg), and publication limits. The code is open source on GitHub.`
    },
    reflection: {
      fr: `Ce projet m'a appris la réalité de l'automatisation : un bot qui fonctionne « la plupart du temps » n'est pas suffisant. La gestion robuste des erreurs, le logging détaillé, et les mécanismes de retry sont essentiels pour un système autonome fiable.

L'idée de proposer en open source une fonctionnalité que Twitter fait payer m'a motivé à rendre le code propre et documenté pour que d'autres puissent l'utiliser. C'est aussi un bon exemple de projet où le scraping et l'API officielle cohabitent dans un même outil.`,
      en: `This project taught me the reality of automation: a bot that works "most of the time" is not enough. Robust error handling, detailed logging, and retry mechanisms are essential for a reliable autonomous system.

The idea of offering as open source a feature that Twitter charges for motivated me to keep the code clean and documented so others could use it. It's also a good example of a project where scraping and the official API coexist in the same tool.`
    },
    thumbnail: "/images/tweet.webp",
    images: [],
    links: { github: "https://github.com/killianrms/AutoTweetVideoUploader" }
  },
  {
    slug: "ancien-portfolio",
    title: "Ancien Portfolio",
    category: "personal",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    duration: { fr: "Projet personnel (2024)", en: "Personal project (2024)" },
    team: { fr: "Projet individuel", en: "Individual project" },
    role: { fr: "Développeur & Designer", en: "Developer & Designer" },
    shortDescription: {
      fr: "Première version de mon portfolio personnel, développé en HTML/CSS/JS vanilla. Remplacé par la version actuelle en Next.js/React/TypeScript.",
      en: "First version of my personal portfolio, developed in vanilla HTML/CSS/JS. Replaced by the current Next.js/React/TypeScript version."
    },
    context: {
      fr: `Ce portfolio (v1) a été mon premier projet de vitrine personnelle en ligne. Développé en HTML, CSS et JavaScript sans framework, il m'a permis d'apprendre les fondamentaux du développement web front-end et les principes du responsive design.

Il a depuis été remplacé par la version actuelle (v2) développée avec Next.js, React et TypeScript, qui intègre des animations avancées, un système bilingue, et des analyses de projets détaillées. L'ancienne version reste accessible sur old.killianrms.com.`,
      en: `This portfolio (v1) was my first personal online showcase project. Developed in HTML, CSS, and JavaScript without a framework, it allowed me to learn the fundamentals of front-end web development and responsive design principles.

It has since been replaced by the current version (v2) developed with Next.js, React and TypeScript, which integrates advanced animations, a bilingual system, and detailed project analyses. The old version remains accessible at old.killianrms.com.`
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
      fr: `Le portfolio v1 a rempli son rôle de vitrine en ligne pendant un an, me permettant de partager mes projets avec des recruteurs et des pairs. Son principal défaut était le manque de profondeur dans les analyses de projets, ce qui a motivé la création de la v2 (le site actuel).`,
      en: `The v1 portfolio served its purpose as an online showcase for a year, allowing me to share my projects with recruiters and peers. Its main drawback was the lack of depth in project analyses, which motivated the creation of v2 (the current site).`
    },
    reflection: {
      fr: `Ce premier portfolio m'a appris l'importance de la présentation dans la carrière d'un développeur. Au-delà du code, savoir communiquer sur son travail est une compétence essentielle. La v2 (le site actuel) représente une évolution naturelle, avec plus de profondeur analytique et une meilleure expérience utilisateur.`,
      en: `This first portfolio taught me the importance of presentation in a developer's career. Beyond code, knowing how to communicate about your work is an essential skill. V2 (the current site) represents a natural evolution, with more analytical depth and better user experience.`
    },
    thumbnail: "/images/portfolio.webp",
    images: [],
    links: { github: "https://github.com/killianrms/portfolio", live: "https://old.killianrms.com" }
  },
  {
    slug: "nuit-info-2024",
    title: "Nuit de l'Info 2024",
    category: "competition",
    technologies: ["HTML", "CSS", "JavaScript", "Replit"],
    duration: { fr: "Décembre 2024 (1 nuit)", en: "December 2024 (1 night)" },
    team: { fr: "Équipe Le Buff Chinois", en: "Le Buff Chinois Team" },
    role: { fr: "Développeur", en: "Developer" },
    shortDescription: {
      fr: "Compétition nationale de développement web en une nuit. Thème : le changement climatique (GIEC). Création d'un site web de sensibilisation aux enjeux climatiques avec l'équipe Le Buff Chinois.",
      en: "National one-night web development competition. Theme: climate change (IPCC). Creation of a climate awareness website with the Le Buff Chinois team."
    },
    context: {
      fr: `La Nuit de l'Info 2024 est ma deuxième participation à cette compétition nationale annuelle. Le thème de cette édition était le changement climatique, une problématique soulevée par le GIEC (Groupe d'experts intergouvernemental sur l'évolution du climat).

Notre équipe "Le Buff Chinois" devait créer un site web innovant et pertinent pour sensibiliser aux enjeux climatiques et encourager l'action pour un avenir durable. Nous avons choisi une stack simple HTML/CSS/JavaScript, hébergée sur Replit, pour pouvoir itérer rapidement pendant la nuit.`,
      en: `The Nuit de l'Info 2024 was my second participation in this annual national competition. The theme of this edition was climate change, a concern raised by the IPCC (Intergovernmental Panel on Climate Change).

Our "Le Buff Chinois" team had to create an innovative and relevant website to raise awareness about climate issues and encourage action for a sustainable future. We chose a simple HTML/CSS/JavaScript stack, hosted on Replit, to iterate quickly during the night.`
    },
    objectives: {
      fr: `1. Créer un site web de sensibilisation au changement climatique en une nuit
2. Présenter de manière claire et engageante les impacts du changement climatique
3. Proposer des solutions concrètes pour réduire l'empreinte carbone
4. Concevoir un design interactif pour capter l'attention des utilisateurs`,
      en: `1. Create a climate change awareness website in one night
2. Present climate change impacts in a clear and engaging way
3. Propose concrete solutions to reduce carbon footprint
4. Design an interactive layout to capture user attention`
    },
    approach: {
      fr: `Le site a été développé en HTML, CSS et JavaScript, hébergé sur Replit pour un déploiement instantané. L'approche était pragmatique : utiliser des technologies maîtrisées par toute l'équipe pour maximiser la vitesse de développement.

Le contenu du site couvrait les impacts du changement climatique avec des données du GIEC, et proposait des solutions concrètes pour s'adapter et réduire son empreinte carbone. Le design interactif visait à rendre le sujet accessible et engageant.`,
      en: `The site was developed in HTML, CSS, and JavaScript, hosted on Replit for instant deployment. The approach was pragmatic: use technologies mastered by the entire team to maximize development speed.

The site's content covered climate change impacts with IPCC data, and proposed concrete solutions to adapt and reduce carbon footprint. The interactive design aimed to make the subject accessible and engaging.`
    },
    architecture: {
      fr: `Site web statique :
- **Frontend** : HTML, CSS, JavaScript
- **Hébergement** : Replit
- **Contenu** : Données GIEC, impacts climatiques, solutions concrètes`,
      en: `Static website:
- **Frontend**: HTML, CSS, JavaScript
- **Hosting**: Replit
- **Content**: IPCC data, climate impacts, concrete solutions`
    },
    skills: [
      {
        name: { fr: "Développement web sous pression", en: "Web Development Under Pressure" },
        description: { fr: "Livraison d'un site web fonctionnel et pertinent en une seule nuit, avec priorisation des fonctionnalités essentielles.", en: "Delivery of a functional and relevant website in a single night, with prioritization of essential features." }
      },
      {
        name: { fr: "Travail d'équipe en hackathon", en: "Hackathon Teamwork" },
        description: { fr: "Coordination efficace de l'équipe Le Buff Chinois sous pression, gestion du temps et répartition des tâches dans un délai extrêmement restreint.", en: "Efficient coordination of the Le Buff Chinois team under pressure, time management and task distribution within an extremely tight deadline." }
      }
    ],
    codeHighlights: [],
    results: {
      fr: `Le site a été livré fonctionnel à la fin de la nuit avec une présentation claire des impacts du changement climatique, des solutions proposées, et un design interactif. Par rapport à ma première participation en 2023, cette édition montre une nette progression dans l'organisation et la qualité du livrable.`,
      en: `The site was delivered functional at the end of the night with a clear presentation of climate change impacts, proposed solutions, and an interactive design. Compared to my first participation in 2023, this edition shows clear progression in organization and deliverable quality.`
    },
    reflection: {
      fr: `Cette deuxième Nuit de l'Info confirme l'importance de choisir des technologies maîtrisées lors d'un hackathon. En optant pour HTML/CSS/JS sur Replit, nous avons pu nous concentrer sur le contenu et le design plutôt que sur des problèmes techniques.

La thématique du changement climatique nous a poussés à aller au-delà du simple développement technique pour réfléchir à l'impact et au message que nous voulions transmettre.`,
      en: `This second Nuit de l'Info confirms the importance of choosing mastered technologies during a hackathon. By opting for HTML/CSS/JS on Replit, we could focus on content and design rather than technical problems.

The climate change theme pushed us beyond simple technical development to think about the impact and message we wanted to convey.`
    },
    thumbnail: "/images/project-5.webp",
    images: [],
    links: {}
  },
  {
    slug: "code-game-jam-2024",
    title: "Code Game Jam 2024 - Shadow Of Memory",
    category: "competition",
    technologies: ["Unreal Engine 5", "Blueprints", "Game Design", "3D Environment", "Sound Design"],
    duration: { fr: "Janvier 2024 (30h)", en: "January 2024 (30h)" },
    team: { fr: "Équipe de 4 étudiants", en: "Team of 4 students" },
    role: { fr: "Développeur - Game Design et développement Unreal Engine 5", en: "Developer - Game Design and Unreal Engine 5 development" },
    shortDescription: {
      fr: "Jeu vidéo \"Shadow Of Memory\" développé en 30h sur Unreal Engine 5 lors de la Code Game Jam 2024. Première expérience de développement sur un moteur de jeu AAA avec création d'environnements 3D.",
      en: "\"Shadow Of Memory\" video game developed in 30h on Unreal Engine 5 during the Code Game Jam 2024. First development experience on an AAA game engine with 3D environment creation."
    },
    context: {
      fr: `La Code Game Jam 2024 est une compétition nationale de développement de jeux vidéo sur 30 heures. Notre équipe de 4 étudiants en première année de BUT Informatique a relevé le défi de créer un jeu vidéo complet en utilisant Unreal Engine 5.

Nous avons créé "Shadow Of Memory", un jeu développé sur UE5. C'était ma première expérience avec un moteur de jeu AAA, ce qui a représenté un défi technique important en si peu de temps.`,
      en: `The Code Game Jam 2024 is a national 30-hour video game development competition. Our team of 4 first-year Computer Science students took on the challenge of creating a complete video game using Unreal Engine 5.

We created "Shadow Of Memory", a game developed on UE5. It was my first experience with an AAA game engine, which represented a significant technical challenge in such a short time.`
    },
    objectives: {
      fr: `1. **Créer un jeu complet en 30h** sur Unreal Engine 5
2. **Apprendre UE5 en conditions réelles** : Blueprints, environnements 3D, système de caméra
3. **Concevoir un gameplay cohérent** autour du thème imposé
4. **Collaborer efficacement à 4** sous forte contrainte de temps`,
      en: `1. **Create a complete game in 30h** on Unreal Engine 5
2. **Learn UE5 in real conditions**: Blueprints, 3D environments, camera system
3. **Design coherent gameplay** around the imposed theme
4. **Collaborate effectively as a team of 4** under tight time constraints`
    },
    approach: {
      fr: `Le jeu a été développé entièrement sur Unreal Engine 5. C'était un défi ambitieux pour des étudiants de première année : apprendre à utiliser un moteur de jeu professionnel en même temps que développer un jeu complet en 30h.

Nous avons réparti les tâches entre game design, création d'environnements 3D, programmation via les Blueprints d'Unreal, et sound design. La coordination était essentielle car UE5 impose des contraintes de travail collaboratif spécifiques (gestion des assets, compilation).`,
      en: `The game was developed entirely on Unreal Engine 5. It was an ambitious challenge for first-year students: learning to use a professional game engine while developing a complete game in 30h.

We distributed tasks between game design, 3D environment creation, programming via Unreal Blueprints, and sound design. Coordination was essential as UE5 imposes specific collaborative work constraints (asset management, compilation).`
    },
    architecture: {
      fr: `Jeu Unreal Engine 5 :
- **Moteur** : Unreal Engine 5 avec Blueprints
- **Environnements** : Création de scènes 3D et level design
- **Gameplay** : Logique de jeu via Blueprints
- **Audio** : Sound design intégré au moteur`,
      en: `Unreal Engine 5 Game:
- **Engine**: Unreal Engine 5 with Blueprints
- **Environments**: 3D scene creation and level design
- **Gameplay**: Game logic via Blueprints
- **Audio**: Sound design integrated into the engine`
    },
    skills: [
      {
        name: { fr: "Unreal Engine 5", en: "Unreal Engine 5" },
        description: { fr: "Première expérience avec un moteur de jeu AAA : utilisation des Blueprints, création d'environnements 3D, gestion des assets et compilation.", en: "First experience with an AAA game engine: Blueprints usage, 3D environment creation, asset management and compilation." }
      },
      {
        name: { fr: "Game Design", en: "Game Design" },
        description: { fr: "Conception du gameplay, des mécaniques de jeu et du level design dans un temps très contraint de 30h.", en: "Gameplay design, game mechanics and level design within a very tight 30h timeframe." }
      },
      {
        name: { fr: "Travail d'équipe sous contrainte", en: "Teamwork Under Constraints" },
        description: { fr: "Collaboration efficace à 4 étudiants sur 30h avec répartition des rôles (game design, 3D, programmation, audio) et gestion des contraintes d'UE5.", en: "Effective collaboration of 4 students over 30h with role distribution (game design, 3D, programming, audio) and UE5 constraints management." }
      }
    ],
    codeHighlights: [],
    results: {
      fr: `Shadow Of Memory a été livré fonctionnel et jouable à la fin des 30 heures. Le jeu comprenait des environnements 3D, un gameplay cohérent, et une ambiance sonore immersive. C'était notre première expérience sur Unreal Engine 5, ce qui rend le résultat d'autant plus satisfaisant.

Cette compétition m'a donné une première expérience concrète en développement de jeux vidéo sur un moteur professionnel, compétence que j'ai pu réutiliser lors de la Code Game Jam 2026 (cette fois sur Unity).`,
      en: `Shadow Of Memory was delivered functional and playable at the end of the 30 hours. The game included 3D environments, coherent gameplay, and an immersive sound atmosphere. It was our first experience on Unreal Engine 5, making the result all the more satisfying.

This competition gave me a first concrete experience in video game development on a professional engine, a skill I was able to reuse during the Code Game Jam 2026 (this time on Unity).`
    },
    reflection: {
      fr: `La Code Game Jam 2024 a été ma première immersion dans le développement de jeux vidéo. Passer directement à Unreal Engine 5 - un moteur AAA utilisé par les studios professionnels - était ambitieux pour des étudiants de première année, mais c'est cette ambition qui a rendu l'expérience si formatrice.

J'ai appris la conception d'environnements 3D, la programmation via Blueprints, et surtout la gestion de projet en conditions extrêmes. Cette expérience m'a donné le goût du game development, que j'ai poursuivi avec la Code Game Jam 2026 sur Unity.`,
      en: `The Code Game Jam 2024 was my first immersion in video game development. Going directly to Unreal Engine 5 - an AAA engine used by professional studios - was ambitious for first-year students, but it's this ambition that made the experience so formative.

I learned 3D environment design, Blueprint programming, and above all project management under extreme conditions. This experience gave me a taste for game development, which I continued with the Code Game Jam 2026 on Unity.`
    },
    thumbnail: "/images/project-4.webp",
    images: [],
    links: { video: "https://www.youtube.com/watch?v=OoIJkiQOXEQ" }
  }
];
