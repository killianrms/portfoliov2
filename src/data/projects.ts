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
  year: string;
  featured?: boolean;
  archived?: boolean;
  title: { fr: string; en: string };
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
  poster?: string;
  links?: { github?: string; live?: string; video?: string; report?: string; discord?: string; download?: string; event?: string };
}

export const projects: Project[] = [
  {
    slug: "itesoft-assistant-ingenieur",
    year: "2025",
    featured: true,
    title: { fr: "AutoInit et customisation de Streamline for Invoices chez ITESOFT", en: "AutoInit and Streamline for Invoices customization at ITESOFT" },
    category: "professional",
    technologies: ["n8n", "Docker", "Azure DevOps", "Node.js", "Java", "AngularJS", "PostgreSQL", "SSH / SFTP", "Grafana", "Git"],
    duration: { fr: "Septembre 2025 à aujourd'hui (alternance)", en: "September 2025 to present (work-study)" },
    team: { fr: "Équipe Delivery de Streamline for Invoices (32 personnes)", en: "Streamline for Invoices Delivery team (32 people)" },
    role: { fr: "Assistant ingénieur développement et projet : créateur d'AutoInit, customisation, support et diagnostic en production", en: "Assistant development & project engineer: creator of AutoInit, customization, support and production diagnosis" },
    shortDescription: {
      fr: "J'ai créé AutoInit, un workflow n8n qui automatise de bout en bout l'initialisation des plateformes clientes : environ 2 heures de manipulations sur cinq outils remplacées par un formulaire d'une minute, adopté par toute l'équipe. En parallèle, customisation et support en production de Streamline for Invoices pour des grands comptes.",
      en: "I built AutoInit, an n8n workflow that fully automates client platform setup: about 2 hours of manual work across five tools replaced by a one-minute form, adopted by the whole team. Alongside, customization and production support of Streamline for Invoices for large enterprises."
    },
    context: {
      fr: `ITESOFT est un éditeur de logiciels français spécialisé dans l'automatisation et la dématérialisation des processus métiers. Sa solution Streamline for Invoices automatise le traitement des factures fournisseurs de grands comptes, de la capture jusqu'à l'intégration dans l'ERP, en passant par le rapprochement avec les commandes et les circuits d'approbation.

J'y suis en alternance depuis septembre 2025 dans l'équipe Delivery, d'abord pendant ma dernière année de BUT Informatique (parcours DACS), puis dans le cadre de mon cycle ingénieur spécialité DevOps à Polytech Montpellier. Le rôle de l'équipe : adapter la solution standard aux besoins de chaque client, la déployer et en assurer le support.

Le contexte est exigeant. La réforme de la facturation électronique, en vigueur au 1er septembre 2026, multiplie les projets de déploiement, et l'entreprise est certifiée **ISO 27001** : accès nominatifs aux environnements clients, bastion SSH audité, comptes de service à permissions limitées. Toutes mes réalisations ont dû s'inscrire dans ce cadre.

Ces travaux sont confidentiels. Je ne peux pas montrer le code, les écrans ni entrer davantage dans le détail ici, mais je suis ouvert à la discussion sur le sujet et j'en parle volontiers en entretien.`,
      en: `ITESOFT is a French software company specializing in business process automation and digitization. Its Streamline for Invoices solution automates supplier invoice processing for large enterprises, from capture to ERP integration, including matching with purchase orders and approval workflows.

I have been a work-study student in the Delivery team since September 2025, first during the final year of my BUT in Computer Science (DACS track), then as part of my DevOps engineering degree at Polytech Montpellier. The team's job: adapt the standard product to each client's needs, deploy it and support it.

The context is demanding. France's e-invoicing reform, effective September 1, 2026, multiplies deployment projects, and the company is **ISO 27001** certified: named access to client environments, audited SSH bastion, least-privilege service accounts. Everything I built had to fit within that framework.

This work is confidential. I can't show the code or screens or go into more detail here, but I'm happy to discuss it in an interview.`
    },
    objectives: {
      fr: `Mon alternance s'articule autour de deux projets :

1. **AutoInit, automatiser l'initialisation des plateformes** : créer une nouvelle plateforme client demandait environ deux heures de manipulations réparties sur cinq outils (dépôt Git créé depuis l'archétype, branches et fichiers de configuration, pipeline de build, installation sur la machine virtuelle, déploiement, frontal web, transmission des accès), avec à chaque étape un risque d'erreur. L'objectif, que je me suis fixé moi-même : réduire tout cela à la saisie d'un formulaire.

2. **Customisation et support de Streamline for Invoices** : faire entrer les règles de gestion propres à chaque grand compte dans un produit standard sans casser la compatibilité avec ses évolutions, et diagnostiquer les incidents de production.`,
      en: `My work-study revolves around two projects:

1. **AutoInit, automating platform setup**: creating a new client platform took about two hours of manual steps across five tools (Git repository from the template, branches and config files, build pipeline, installation on the virtual machine, deployment, web front end, sharing access), each step a chance for error. The goal, which I set myself: reduce all of it to filling in a form.

2. **Streamline for Invoices customization and support**: fit each large client's business rules into a standard product without breaking compatibility with its updates, and diagnose production incidents.`
    },
    approach: {
      fr: `**AutoInit : un workflow n8n de bout en bout.** Le projet est né d'une initiative personnelle, après avoir fait plusieurs initialisations à la main. Sans cahier des charges, j'ai formalisé moi-même les besoins : un formulaire (client, alias DNS, environnement, modules), puis la création et la configuration du dépôt Git du client, la construction du livrable, l'installation et le déploiement sur la machine virtuelle, l'exposition sur le frontal web, et enfin la notification de l'équipe avec les accès.

J'ai choisi **n8n**, hébergé en interne dans Docker, plutôt que de simples scripts : il apporte un formulaire web, un historique visuel de chaque exécution et des notifications. Le workflow enchaîne une dizaine d'étapes. Côté Azure DevOps, il reproduit fidèlement le processus de l'équipe : branche dédiée et merge requests fusionnées par un compte de service, pour garder l'historique et les garde-fous du git flow. Comme la machine virtuelle cliente et le serveur Azure DevOps ne peuvent pas communiquer, n8n sert aussi de pont : il récupère l'artefact de build par l'API puis le pousse en SFTP à travers le bastion.

**Des choix guidés par la fiabilité.** Les connexions SSH passent par une librairie (node-ssh) appelée dans des nœuds de code, car l'utilisateur change selon le client. Le déroulement est volontairement séquentiel : plus lent d'une dizaine de minutes, mais stable. Et le workflow ne se fie pas aux codes de retour des scripts d'installation : il vérifie l'état réel de la plateforme en comptant les conteneurs Docker démarrés.

**Customisation de Streamline for Invoices.** Chaque projet client est un dépôt Git qui ajoute une surcouche à un archétype standard : règles métier en JavaScript exécutées par un moteur de règles Node.js, règles Java côté backend, scripts SQL, connecteurs SFTP et tâches cron. Exemple : une facture pouvait être validée sans ses axes analytiques obligatoires. En croisant la spécification contractuelle et le code d'une règle voisine, j'ai trouvé la cause racine (l'état d'attente existait mais aucune règle n'y menait) et ajouté une règle de routage qui interroge le référentiel en RSQL, appliquée de façon homogène sur les six versions concernées de l'archétype.

**Diagnostic en production.** Face à un rapprochement de facture bloqué, je suis reparti des données brutes plutôt que du symptôme décrit : la quantité n'était pas nulle mais négative, et les métadonnées de la réception prouvaient que la valeur aberrante venait de l'import. Les plateformes tournent sous forme de dizaines de conteneurs Docker, supervisées avec Grafana et des outils internes.`,
      en: `**AutoInit: an end-to-end n8n workflow.** The project started as a personal initiative, after doing several setups by hand. With no specification, I wrote the requirements myself: a form (client, DNS alias, environment, modules), then creating and configuring the client's Git repository, building the release, installing and deploying it on the virtual machine, exposing it on the web front end, and finally notifying the team with the access details.

I chose **n8n**, self-hosted in Docker, over plain scripts: it provides a web form, a visual history of every run and notifications. The workflow chains about ten steps. On the Azure DevOps side it mirrors the team's process: a dedicated branch and merge requests merged by a service account, keeping the history and safeguards of the git flow. Because the client VM and the Azure DevOps server cannot reach each other, n8n also acts as the bridge: it downloads the build artifact through the API and pushes it over SFTP through the bastion.

**Reliability-driven choices.** SSH connections use a library (node-ssh) called from code nodes, because the user changes with each client. Steps run sequentially on purpose: about ten minutes slower, but stable. And the workflow doesn't trust the install scripts' exit codes: it checks the platform's real state by counting the running Docker containers.

**Streamline for Invoices customization.** Each client project is a Git repository adding a layer on top of a standard template: JavaScript business rules run by a Node.js rules engine, Java rules on the backend, SQL scripts, SFTP connectors and cron jobs. Example: an invoice could be approved without its mandatory analytical axes. By cross-checking the contractual specification with the code of a similar rule, I found the root cause (the waiting state existed but no rule led to it) and added a routing rule that queries the reference data with RSQL, applied consistently across the six affected template versions.

**Production diagnosis.** Faced with an invoice that could no longer be matched, I went back to the raw data instead of the reported symptom: the quantity wasn't zero but negative, and the receipt's metadata proved the bad value came from the import. Platforms run as dozens of Docker containers, monitored with Grafana and internal tools.`
    },
    architecture: {
      fr: `**AutoInit**
- **Entrée** : un formulaire n8n (client, alias DNS, environnement, modules).
- **Orchestrateur** : n8n dans un conteneur Docker sur un serveur interne, seul point qui accède à la fois à Azure DevOps et aux machines virtuelles clientes.
- **Azure DevOps** : création du dépôt depuis l'archétype, branche de configuration, merge requests fusionnées par un compte de service, déclenchement du pipeline de build, récupération de l'artefact par l'API REST.
- **Machine virtuelle cliente (Azure)** : dépôt de l'artefact en SFTP, installation et déploiement en SSH, le tout à travers un bastion qui authentifie et journalise chaque session.
- **Vérification** : comptage des conteneurs Docker réellement démarrés, puis configuration du frontal web.
- **Notifications** : accès envoyés à l'équipe, et un workflow d'erreur dédié publie une alerte dans Teams avec l'étape et le message en cas d'échec.

**Plateforme Streamline for Invoices** : frontend AngularJS, backend Java (API REST, moteur de workflow BPMN), moteur de règles Node.js pour les customisations, base PostgreSQL, échanges de fichiers en SFTP, le tout en conteneurs Docker sur une machine virtuelle dédiée par client. Cycle de livraison : développement, merge request relue, staging pour la recette client, production.`,
      en: `**AutoInit**
- **Input**: an n8n form (client, DNS alias, environment, modules).
- **Orchestrator**: n8n in a Docker container on an internal server, the only machine that can reach both Azure DevOps and the client VMs.
- **Azure DevOps**: repository created from the template, configuration branch, merge requests merged by a service account, build pipeline triggered, artifact downloaded through the REST API.
- **Client virtual machine (Azure)**: artifact uploaded over SFTP, installation and deployment over SSH, all through a bastion that authenticates and logs every session.
- **Verification**: counting the Docker containers actually running, then configuring the web front end.
- **Notifications**: access details sent to the team, and a dedicated error workflow posts a Teams alert with the failed step and its message.

**Streamline for Invoices platform**: AngularJS front end, Java back end (REST API, BPMN workflow engine), Node.js rules engine for customizations, PostgreSQL, SFTP file exchanges, all running as Docker containers on a dedicated VM per client. Delivery cycle: development, reviewed merge request, staging for client acceptance, production.`
    },
    skills: [
      {
        name: { fr: "Automatisation et orchestration (n8n)", en: "Automation & orchestration (n8n)" },
        description: { fr: "Conception d'un workflow n8n de bout en bout avec nœuds de code JavaScript, gestion d'erreur explicite, workflow d'alerte et configuration du serveur n8n en Docker (variables d'environnement, délais d'exécution, modules autorisés).", en: "Designed an end-to-end n8n workflow with JavaScript code nodes, explicit error handling, an alerting workflow, and configured the n8n server in Docker (environment variables, execution timeouts, allowed modules)." }
      },
      {
        name: { fr: "Chaîne de build et de déploiement", en: "Build & deployment pipeline" },
        description: { fr: "Rétro-ingénierie d'une chaîne non documentée à partir d'un pipeline existant, pilotage d'Azure DevOps par API (dépôts, merge requests, pipelines, artefacts), déploiement SSH/SFTP à travers un bastion.", en: "Reverse-engineered an undocumented build chain from an existing pipeline, drove Azure DevOps through its API (repositories, merge requests, pipelines, artifacts), deployed over SSH/SFTP through a bastion." }
      },
      {
        name: { fr: "Customisation d'un produit standard", en: "Customizing a standard product" },
        description: { fr: "Règles métier JavaScript et Java, requêtes RSQL sur les référentiels, scripts SQL et tâches cron, sans casser la compatibilité avec les évolutions du standard.", en: "JavaScript and Java business rules, RSQL queries on reference data, SQL scripts and cron jobs, without breaking compatibility with the standard product's updates." }
      },
      {
        name: { fr: "Diagnostic en production", en: "Production diagnosis" },
        description: { fr: "Investigation dans les conteneurs Docker, les journaux (Grafana), les bases PostgreSQL et les flux SFTP, en raisonnant sur les données plutôt que sur le symptôme décrit.", en: "Investigating Docker containers, logs (Grafana), PostgreSQL databases and SFTP flows, reasoning from data rather than from the reported symptom." }
      },
      {
        name: { fr: "Sécurité ISO 27001", en: "ISO 27001 security" },
        description: { fr: "Moindre privilège appliqué à l'automatisation : aucun compte personnel, compte de service limité aux projets concernés, sessions SSH authentifiées et journalisées par le bastion.", en: "Least privilege applied to automation: no personal accounts, a service account scoped to the relevant projects, SSH sessions authenticated and logged by the bastion." }
      },
      {
        name: { fr: "Git flow et revue de code", en: "Git flow & code review" },
        description: { fr: "Branches feature, release et hotfix, merge requests systématiquement relues, convention de commits, et rôle de relecteur pour décharger les seniors des erreurs évidentes.", en: "Feature, release and hotfix branches, every merge request reviewed, commit conventions, and a reviewer role catching obvious issues to save seniors' time." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Utilitaire SSH d'AutoInit dans un nœud de code n8n (simplifié)", en: "AutoInit's SSH helper in an n8n code node (simplified)" },
        code: `// Exécute une commande sur la VM cible et échoue clairement si le résultat
// n'est pas celui attendu. L'utilisateur SSH est construit à chaque appel,
// car il dépend du client et de l'environnement.
const { NodeSSH } = require("node-ssh");

async function run(target, command, { expectCode = 0 } = {}) {
  const ssh = new NodeSSH();
  await ssh.connect({
    host: target.bastionHost,
    username: \`\${target.user}@\${target.vm}\`,
    privateKey: target.privateKey,
  });
  try {
    const res = await ssh.execCommand(command);
    if (res.code !== expectCode) {
      throw new Error(
        \`[\${target.vm}] "\${command}" a renvoyé \${res.code}\\n\${res.stdout}\\n\${res.stderr}\`
      );
    }
    return res.stdout;
  } finally {
    ssh.dispose();
  }
}

// On ne se fie pas au code retour de l'installation : on vérifie l'état réel.
const running = await run(target, "docker ps -q | wc -l");
if (Number(running) < target.expectedContainers) {
  throw new Error(\`Seulement \${running} conteneurs démarrés\`);
}`,
        language: "javascript",
        explanation: {
          fr: "Ce petit utilitaire a mis fin aux étapes « faussement réussies ». Ma deuxième version modifiait les identifiants SSH de n8n en cours d'exécution, mais n8n les met en cache au démarrage de chaque nœud : le workflow se connectait parfois au mauvais serveur. Construire l'utilisateur à chaque appel et lever une erreur explicite avec toute la sortie a rendu chaque échec visible et compréhensible.",
          en: "This small helper put an end to steps that looked successful but weren't. My second version changed n8n's SSH credentials during execution, but n8n caches them when each node starts, so the workflow sometimes connected to the wrong server. Building the user on every call and throwing an explicit error with the full output made every failure visible and understandable."
        }
      }
    ],
    results: {
      fr: `- **Environ 2 heures de manipulations remplacées par un formulaire d'une minute**, suivi de 40 à 45 minutes d'exécution automatique qui ne mobilisent plus personne.
- **Adopté immédiatement** : dès le lendemain de la mise en service, l'équipe m'a demandé d'initialiser des projets avec, et une vingtaine de plateformes ont été initialisées par AutoInit depuis, par moi comme par mes collègues.
- **Validé de bout en bout** sur les environnements de développement et de staging, du formulaire jusqu'à la plateforme accessible sur son adresse publique. Une version suivante a supprimé la dernière action manuelle grâce à l'API du bastion.
- **Repris par l'entreprise** : l'outil continue d'évoluer (démarrage automatique de la VM, stockage des identifiants dans un coffre-fort).
- **Customisations en production** chez de nombreux clients, qui traitent des factures réelles chaque jour. Certains clients ont même rouvert un ticket simplement pour remercier du travail livré.`,
      en: `- **About 2 hours of manual work replaced by a one-minute form**, followed by 40 to 45 minutes of automated execution that no longer ties anyone up.
- **Adopted immediately**: the day after it went live, the team asked me to set up projects with it, and about twenty platforms have been initialized through AutoInit since, by me and by my colleagues.
- **Validated end to end** on development and staging environments, from the form to a platform reachable at its public address. A later version removed the last manual action using the bastion's API.
- **Taken over by the company**: the tool keeps evolving (automatic VM start, credentials stored in a vault).
- **Customizations in production** for many clients, processing real invoices every day. Some clients even reopened a ticket just to say thanks for the work delivered.`
    },
    reflection: {
      fr: `AutoInit est ce qui m'a fait choisir le DevOps. Ce que j'ai préféré cette année, l'automatisation, les pipelines, Docker et le travail au contact des plateformes de production, correspond exactement à ce champ, d'où ma poursuite en cycle ingénieur spécialité DevOps, toujours chez ITESOFT.

Les leçons que je garde :

1. **Après une opération asynchrone, vérifier l'état obtenu plutôt que la réponse de l'appel.** La fusion d'une merge request par API est asynchrone : en enchaînant trop vite, le workflow construisait parfois le livrable du mauvais client.
2. **Préférer la fiabilité à la vitesse.** Paralléliser aurait fait gagner dix minutes mais rendait les exécutions instables.
3. **Partir de ce qui marche quand rien n'est documenté.** Analyser le pipeline de migration existant a corrigé plusieurs hypothèses fausses de mes premières versions.
4. **Identifier un irritant, proposer, construire proprement et faire adopter.** C'est ce que l'équipe attend d'un ingénieur au-delà des tickets, et c'est la démarche que je veux continuer à développer.`,
      en: `AutoInit is what made me choose DevOps. What I enjoyed most this year, automation, pipelines, Docker and working close to production platforms, is exactly that field, hence my DevOps engineering degree, still at ITESOFT.

The lessons I keep:

1. **After an asynchronous operation, check the resulting state rather than the call's response.** Merging a merge request through the API is asynchronous: chaining too fast, the workflow sometimes built the wrong client's release.
2. **Prefer reliability over speed.** Parallelizing would have saved ten minutes but made runs unstable.
3. **Start from what works when nothing is documented.** Analyzing the existing migration pipeline corrected several wrong assumptions in my first versions.
4. **Spot a pain point, propose, build it properly and get it adopted.** That's what the team expects from an engineer beyond tickets, and it's the approach I want to keep developing.`
    },
    thumbnail: "/images/autoinit.webp",
    images: [],
    links: {}
  },
  {
    slug: "tamastat",
    year: "2025",
    title: { fr: "TamaStat pour TamaBox", en: "TamaStat for TamaBox" },
    category: "professional",
    technologies: ["JavaScript", "Chart.js", "HTML/CSS", "Vercel", "Git"],
    duration: { fr: "Janvier à avril 2025 (stage)", en: "January to April 2025 (internship)" },
    team: { fr: "Seul avec le gérant de l'entreprise", en: "Solo with the company owner" },
    role: { fr: "Développeur Full-Stack : conception, développement et déploiement complet de l'application", en: "Full-Stack Developer: complete design, development and deployment of the application" },
    shortDescription: {
      fr: "Outil de visualisation statistique développé pour TamaBox (Draguignan, 83) : analyse des données de location de box de stockage, personas marketing et outil de prévision.",
      en: "Statistical visualization tool developed for TamaBox (Draguignan, France): storage box rental data analysis, marketing personas and forecasting tool."
    },
    context: {
      fr: `TamaStat est un outil de visualisation statistique que j'ai conçu et développé dans le cadre de mon stage de deuxième année de BUT Informatique, réalisé chez TamaBox, une entreprise de location de box de stockage située à Draguignan dans le Var (83), de janvier à avril 2025.

C'était ma toute première expérience professionnelle. J'étais seul avec le gérant de l'entreprise, pas d'équipe technique, pas de développeur senior pour me guider. Le gérant m'a donné carte blanche : il m'a expliqué son activité, ses données, et ce qu'il voulait comprendre à travers un tableau de bord. À partir de là, j'ai eu une autonomie totale sur la conception, le développement et le déploiement de l'outil.

Le contexte métier était le suivant : TamaBox propose des box de stockage de différentes tailles à la location. Le gérant disposait de données brutes sur son activité (entrées/sorties de locataires, répartition par taille de box, taux d'occupation, chiffre d'affaires, surface totale louée) mais n'avait aucun outil pour les visualiser et les analyser. Son taux d'occupation oscillait entre 75% et 82%, et il souhaitait atteindre les 100%.

Nos échanges se faisaient lors de réunions hebdomadaires où je présentais l'avancement et où il me faisait ses retours. Le reste du temps, je travaillais en totale autonomie.`,
      en: `TamaStat is a statistical visualization tool that I designed and developed during my second-year Computer Science internship at TamaBox, a storage box rental company located in Draguignan, Var (83), France, from January to April 2025.

This was my very first professional experience. I was alone with the company owner, no technical team, no senior developer to guide me. The owner gave me full creative freedom: he explained his business, his data, and what he wanted to understand through a dashboard. From there, I had complete autonomy over the design, development, and deployment of the tool.

The business context was as follows: TamaBox offers storage boxes of various sizes for rent. The owner had raw data about his business (tenant entries/exits, box size distribution, occupancy rates, revenue, total rented surface area) but had no tool to visualize and analyze it. His occupancy rate fluctuated between 75% and 82%, and he wanted to reach 100%.

Our exchanges took place during weekly meetings where I presented progress and he gave his feedback. The rest of the time, I worked with complete autonomy.`
    },
    objectives: {
      fr: `1. **Tableau de bord statistique** : Créer un outil de visualisation complet permettant au gérant de comprendre en un coup d'œil l'état de son activité, entrées/sorties de locataires, répartition par taille de box, taux de boxes louées vs non louées, évolution du chiffre d'affaires, et surface totale louée.

2. **Personas marketing** : Concevoir des profils types de clients (personas) à partir de l'analyse des données, afin de permettre au gérant de cibler ses campagnes publicitaires vers les bons segments de clientèle.

3. **Outil de prévision (forecasting)** : Développer un module de projection permettant d'anticiper l'évolution du taux d'occupation et du chiffre d'affaires sur les mois à venir.

4. **Autonomie complète** : Gérer l'intégralité du projet seul, de la conception à la mise en production, en tant que première expérience professionnelle.`,
      en: `1. **Statistical dashboard**: Create a comprehensive visualization tool allowing the owner to understand his business at a glance, tenant entries/exits, box size distribution, rented vs unrented box rates, revenue evolution, and total rented surface area.

2. **Marketing personas**: Design typical customer profiles (personas) from data analysis, enabling the owner to target his advertising campaigns towards the right customer segments.

3. **Forecasting tool**: Develop a projection module to anticipate the evolution of occupancy rates and revenue in the coming months.

4. **Complete autonomy**: Manage the entire project solo, from design to production deployment, as a first professional experience.`
    },
    approach: {
      fr: `C'était la première fois que je faisais du JavaScript, je l'ai appris sur le tas pendant le stage. J'ai choisi une approche front-end pure avec JavaScript et Chart.js pour les visualisations, ce qui permettait un déploiement simple et rapide sur Vercel.

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
      en: `This was the first time I ever worked with JavaScript, I learned it on the job during the internship. I chose a pure front-end approach with JavaScript and Chart.js for visualizations, which allowed simple and fast deployment on Vercel.

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
        title: { fr: "Visualisation dynamique Chart.js", en: "Dynamic Chart.js Visualization" },
        code: `// TamaStat - Graphique d'évolution du taux d'occupation
const occupancyData = {
  labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin'],
  datasets: [{
    label: 'Taux d'occupation (%)',
    data: [75, 78, 82, 79, 85, 100],
    borderColor: 'rgb(75, 192, 192)',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    tension: 0.4
  }]
};

function renderChart(data) {
  const ctx = document.getElementById('occupancyChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: { y: { beginAtZero: true, max: 100 } }
    }
  });
}`,
        language: "javascript",
        explanation: {
          fr: "Configuration d'un graphique Chart.js pour visualiser l'évolution du taux d'occupation des box. Le dataset montre la progression de 75 % à 100 % grâce à l'outil TamaStat.",
          en: "Chart.js configuration to visualize storage box occupancy rate evolution. The dataset shows progression from 75% to 100% thanks to the TamaStat tool."
        }
      }
    ],
    results: {
      fr: `Le projet TamaStat a eu un impact direct et mesurable : le taux d'occupation du client est passé de 75-82 % à 100 %. L'outil de visualisation statistique a permis au gérant de prendre des décisions marketing éclairées, basées sur des données concrètes.`,
      en: `The TamaStat project had a direct and measurable impact: the client's occupancy rate went from 75-82% to 100%. The statistical visualization tool allowed the owner to make informed marketing decisions based on concrete data.`
    },
    reflection: {
      fr: `Ce stage m'a appris l'importance de l'autonomie et de la communication dans un projet professionnel. Présenter chaque semaine l'avancement au gérant m'a forcé à structurer mon travail et à prioriser les fonctionnalités à forte valeur ajoutée.`,
      en: `This internship taught me the importance of autonomy and communication in a professional project. Presenting weekly progress to the owner forced me to structure my work and prioritize high-value features.`
    },
    thumbnail: "/images/tamastat.webp",
    images: [],
    links: { live: "https://tamastat.alwaysdata.net" }
  },
  {
    slug: "lobbybot-fortnite",
    year: "2020",
    featured: true,
    title: { fr: "LobbyBot 2.0, bots Fortnite", en: "LobbyBot 2.0, Fortnite bots" },
    category: "personal",
    technologies: ["Node.js", "Python", "Discord.js", "Express", "Socket.IO", "PostgreSQL", "Docker", "OAuth2", "WebSocket", "Asyncio"],
    duration: { fr: "Projet personnel continu, depuis 2020", en: "Ongoing personal project, since 2020" },
    team: { fr: "Projet individuel, communauté de plus de 8 500 membres Discord", en: "Individual project, community of 8,500+ Discord members" },
    role: { fr: "Développeur unique : conception, développement, maintenance et gestion de communauté", en: "Sole Developer: design, development, maintenance and community management" },
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
- **Phase 3 (actuelle, LobbyBot 2.0)** : Architecture complète avec trois composants principaux orchestrés par Docker :

  1. **Discord Manager** (Node.js) : Le cœur du système. Gère tous les bots simultanément, le load balancing, les commandes Discord, et la communication avec la base de données PostgreSQL.
  2. **Dashboard Web** (Node.js/Express/Socket.IO) : Interface de contrôle en temps réel avec un design "Space/Starfield". Communication instantanée avec le Manager via Socket.IO.
  3. **Base de données PostgreSQL** : Stockage des comptes bots, utilisateurs, préférences de langue, et statistiques.

Le système de load balancing sélectionne automatiquement le bot ayant le moins d'amis (< 900) pour chaque nouvelle demande d'ajout. Si tous les bots sont pleins, un nouveau bot est créé automatiquement.`,
      en: `The project evolved from a simple Python script to a complete distributed architecture:

- **Phase 1 (2020)**: Simple Python bots using Epic Games' undocumented APIs, with OAuth2 authentication and basic friend/skin management.
- **Phase 2 (evolution)**: Migration to Node.js architecture for the central Discord bot, using Discord.js to handle community commands.
- **Phase 3 (current, LobbyBot 2.0)**: Complete architecture with three main components orchestrated by Docker:

  1. **Discord Manager** (Node.js): The system's core. Manages all bots simultaneously, load balancing, Discord commands, and PostgreSQL database communication.
  2. **Web Dashboard** (Node.js/Express/Socket.IO): Real-time control interface with a "Space/Starfield" design. Instant communication with the Manager via Socket.IO.
  3. **PostgreSQL Database**: Storage for bot accounts, users, language preferences, and statistics.

The load balancing system automatically selects the bot with the fewest friends (< 900) for each new friend request. If all bots are full, a new bot is automatically created.`
    },
    architecture: {
      fr: `Architecture distribuée Docker multi-services :

- **lobbybot2.0-discord/** (Node.js) : Manager central
  - 'src/managers/' : Gestionnaires principaux (Bots, Database, User, API, Discord)
  - 'src/commands/' : Commandes Discord (/login, /add, /list, /shop, /locker, /admin...)
  - 'src/actions/' : Logique des actions Fortnite (Skin, Party, Friends)
  - 'src/utils/' : Utilitaires (Locales i18n, helpers)

- **lobbybot2.0-website/** (Node.js/Express) : Dashboard web
  - Backend Express + Socket.IO pour la communication temps réel
  - Frontend HTML5/CSS3/Vanilla JS avec design "Space/Starfield"
  - Affichage de l'état des bots, amis, contrôles (Kick, Promote, Privacy)

- **PostgreSQL** : Base de données partagée (comptes, utilisateurs, préférences)
- **Docker Compose** : Orchestration des trois services`,
      en: `Distributed multi-service Docker architecture:

- **lobbybot2.0-discord/** (Node.js): Central Manager
  - 'src/managers/': Main managers (Bots, Database, User, API, Discord)
  - 'src/commands/': Discord commands (/login, /add, /list, /shop, /locker, /admin...)
  - 'src/actions/': Fortnite action logic (Skin, Party, Friends)
  - 'src/utils/': Utilities (i18n Locales, helpers)

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
        title: { fr: "Load Balancing intelligent des bots", en: "Intelligent bot load balancing" },
        code: `// LobbyBot 2.0 - Bot Manager avec load balancing
class BotManager {
  constructor() {
    this.bots = new Map();  // Map<botId, BotInstance>
    this.FRIEND_LIMIT = 900;
  }

  async selectOptimalBot() {
    // 1. Filtrer les bots disponibles (< 900 amis)
    const availableBots = Array.from(this.bots.values())
      .filter(bot => bot.isReady && bot.friendCount < this.FRIEND_LIMIT)
      .sort((a, b) => a.friendCount - b.friendCount);

    if (availableBots.length > 0) {
      // 2. Retourner le bot avec le moins d'amis
      const selectedBot = availableBots[0];
      return selectedBot;
    }

    // 3. Si tous les bots sont pleins, creer automatiquement un nouveau bot
    const newBot = await this.createNewBot();
    return newBot;
  }

  async addFriend(epicUsername) {
    const bot = await this.selectOptimalBot();

    try {
      await bot.addFriend(epicUsername);
      bot.friendCount++;

      // Sauvegarder en base de donnees PostgreSQL
      await db.query(
        'UPDATE bots SET friend_count = $1 WHERE account_id = $2',
        [bot.friendCount, bot.accountId]
      );

      return { success: true, bot: bot.displayName };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}`,
        language: "javascript",
        explanation: {
          fr: "Ce code implémente le système de load balancing du Bot Manager. La méthode selectOptimalBot() filtre les bots disponibles (< 900 amis), les trie par nombre d'amis croissant, et retourne le moins chargé. Si tous les bots sont pleins, un nouveau bot est automatiquement créé depuis le pool PostgreSQL.",
          en: "This code implements the Bot Manager's load balancing system. The selectOptimalBot() method filters available bots (< 900 friends), sorts them by ascending friend count, and returns the least loaded one. If all bots are full, a new bot is automatically created from the PostgreSQL pool."
        }
      },
      {
        title: { fr: "Communication temps réel Socket.IO Dashboard", en: "Socket.IO real-time Dashboard communication" },
        code: `// LobbyBot 2.0 - Dashboard Socket.IO Server
const express = require('express');
const socketIo = require('socket.io');
const server = require('http').createServer(express());
const io = socketIo(server);

// Connexion au Discord Manager via Socket.IO
const managerSocket = require('socket.io-client')('http://localhost:3001');

io.on('connection', (clientSocket) => {
  // 1. Envoyer etat initial des bots au client
  managerSocket.emit('get_all_bots_status', (botsData) => {
    clientSocket.emit('initial_state', {
      bots: botsData.bots,
      totalFriends: botsData.totalFriends,
      activeBots: botsData.activeBots
    });
  });

  // 2. Ecouter les mises a jour en temps reel du Manager
  managerSocket.on('bot_status_update', (data) => {
    io.emit('bot_update', {
      botId: data.botId,
      displayName: data.displayName,
      friendCount: data.friendCount,
      status: data.status
    });
  });

  // 3. Actions depuis le dashboard vers le Manager
  clientSocket.on('kick_friend', async (data) => {
    managerSocket.emit('kick_friend', {
      botId: data.botId,
      friendId: data.friendId
    }, (response) => {
      clientSocket.emit('kick_response', response);
    });
  });
});`,
        language: "javascript",
        explanation: {
          fr: "Ce code gère la communication temps réel entre le Dashboard web et le Discord Manager via Socket.IO. Le serveur Dashboard écoute les connexions clients, envoie l'état initial des bots, propage les mises à jour en temps réel et gère les actions utilisateur (kick, changement de skin).",
          en: "This code handles real-time communication between the Web Dashboard and Discord Manager via Socket.IO. The Dashboard server listens for client connections, sends initial bot state, propagates real-time updates and handles user actions (kick, skin change)."
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
    year: "2024",
    featured: true,
    title: { fr: "Referendum, application de vote sécurisée", en: "Referendum, a secure voting app" },
    category: "university",
    technologies: ["Java", "JavaFX", "ElGamal", "Zero Knowledge Proof", "DeepSeek API", "Cryptographie", "Sockets", "Scrum", "Git"],
    duration: { fr: "Toute la deuxième année de BUT 2 (Projet de fin d'année)", en: "Full second year of CS degree (Year-end project)" },
    team: { fr: "Groupe de 4 étudiants", en: "Group of 4 students" },
    role: { fr: "Product Owner & Développeur Cryptographie : chiffrement ElGamal, Preuve Zero Knowledge, ChatBot IA et sécurisation des sockets", en: "Product Owner & Cryptography Developer: ElGamal encryption, Zero Knowledge Proof, AI ChatBot and socket security" },
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

Côté technique, l'application est développée en Java avec une interface JavaFX. Mon rôle technique principal était le chiffrement ElGamal, un système de cryptographie asymétrique à clé publique. Le principe : chaque vote est chiffré avec la clé publique du scrutin avant d'être envoyé au serveur. Seul le détenteur de la clé privée peut déchiffrer les votes à la clôture du scrutin. Cela garantit que personne, pas même le serveur, ne peut lire un vote individuel avant la fin du scrutin.

**Preuve Zero Knowledge non-interactive** : Pour garantir l'intégrité des votes, le projet intègre une preuve Zero Knowledge. L'objectif est de prouver côté serveur que le vote d'un client est bien "oui" ou "non" (0 ou 1), sans révéler lequel. Si un utilisateur tente de voter une valeur invalide (par exemple 10 ou un nombre négatif), le vote est rejeté. La preuve est non-interactive : un seul échange entre le client et le serveur suffit, l'envoi de la preuve avec le message chiffré. Côté client, la fonction createZKProof génère deux preuves (une vraie, une simulée) via des engagements cryptographiques, un haché SHA-256 et de l'arithmétique modulaire. Côté serveur, verifyZKProof recalcule les valeurs et vérifie que la somme des challenges correspond au haché. Si c'est le cas, la preuve est valide, le vote est bien 0 ou 1, sans que le serveur ne sache lequel.

**ChatBot FAQ (DeepSeek API)** : J'ai implémenté un chatbot FAQ intégré à l'application dont le but est de répondre aux questions fréquentes des utilisateurs. J'ai intégré l'API DeepSeek qui sert uniquement à comprendre la question de l'utilisateur pour lui fournir la réponse la plus pertinente parmi des réponses spécifiques pré-préparées, limitées aux questions relatives à l'application.

J'ai également sécurisé les communications par sockets entre le client et le serveur. Les échanges sont chiffrés pour empêcher toute interception (man-in-the-middle) ou manipulation des données en transit.

Le reste de l'équipe travaillait sur l'interface JavaFX, la gestion des utilisateurs, la base de données et la logique métier des scrutins. Nous faisions des revues de code régulières et utilisions Git pour la gestion du code source.`,
      en: `The project followed Scrum methodology throughout the year. As Product Owner, I organized sprint plannings, maintained the backlog, and presented demos to the "client" (instructors) at each sprint end. At the end of each cycle, we received a new contract with additional requirements, simulating the evolving needs of a real client.

On the technical side, the application is developed in Java with a JavaFX interface. My main technical role was ElGamal encryption, an asymmetric public-key cryptography system. The principle: each vote is encrypted with the poll's public key before being sent to the server. Only the private key holder can decrypt votes when the poll closes. This ensures that nobody, not even the server, can read an individual vote before the poll ends.

**Non-interactive Zero Knowledge Proof**: To guarantee vote integrity, the project integrates a Zero Knowledge Proof. The goal is to prove server-side that a client's vote is indeed "yes" or "no" (0 or 1), without revealing which one. If a user attempts to vote an invalid value (e.g., 10 or a negative number), the vote is rejected. The proof is non-interactive: a single exchange between client and server suffices, sending the proof along with the encrypted message. Client-side, the createZKProof function generates two proofs (one real, one simulated) via cryptographic commitments, a SHA-256 hash, and modular arithmetic. Server-side, verifyZKProof recalculates values and verifies that the sum of challenges matches the hash. If so, the proof is valid, the vote is indeed 0 or 1, without the server knowing which.

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
        name: { fr: "Cryptographie ElGamal", en: "ElGamal cryptography" },
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
        title: { fr: "Chiffrement ElGamal avec grands nombres", en: "ElGamal encryption with big numbers" },
        code: `// Referendum - Chiffrement ElGamal en Java
import java.math.BigInteger;
import java.security.SecureRandom;

public class ElGamalEncryption {
    private BigInteger p;  // Nombre premier grand
    private BigInteger g;  // Generateur
    private BigInteger publicKey;   // Cle publique (g^x mod p)
    private BigInteger privateKey;  // Cle privee (x)

    public ElGamalEncryption(int bitLength) {
        SecureRandom random = new SecureRandom();
        // 1. Generer nombre premier p de taille bitLength
        this.p = BigInteger.probablePrime(bitLength, random);
        // 2. Trouver generateur g du groupe multiplicatif Z*p
        this.g = findGenerator(p, random);
        // 3. Generer cle privee x (aleatoire dans [1, p-2])
        this.privateKey = new BigInteger(bitLength - 1, random);
        // 4. Calculer cle publique: h = g^x mod p
        this.publicKey = g.modPow(privateKey, p);
    }

    public ElGamalCiphertext encrypt(BigInteger message) {
        SecureRandom random = new SecureRandom();
        // 1. Generer k aleatoire (ephemere) dans [1, p-2]
        BigInteger k = new BigInteger(p.bitLength() - 1, random);
        // 2. Calculer c1 = g^k mod p
        BigInteger c1 = g.modPow(k, p);
        // 3. Calculer s = h^k mod p (secret partage)
        BigInteger s = publicKey.modPow(k, p);
        // 4. Calculer c2 = m * s mod p
        BigInteger c2 = message.multiply(s).mod(p);
        return new ElGamalCiphertext(c1, c2);
    }

    public BigInteger decrypt(ElGamalCiphertext ciphertext) {
        BigInteger s = ciphertext.c1.modPow(privateKey, p);
        BigInteger sInverse = s.modInverse(p);
        return ciphertext.c2.multiply(sInverse).mod(p);
    }
}`,
        language: "java",
        explanation: {
          fr: "Implémentation du chiffrement asymétrique ElGamal en Java avec BigInteger pour les grands nombres. La génération de clés utilise un nombre premier p de 512+ bits, un générateur g, une clé privée x aléatoire et une clé publique h = g^x mod p. Le chiffrement génère un k éphémère, calcule c1 = g^k et c2 = m * h^k, garantissant la sécurité par la difficulté du logarithme discret.",
          en: "ElGamal asymmetric encryption implementation in Java with BigInteger for large numbers. Key generation uses a 512+ bit prime p, generator g, random private key x and public key h = g^x mod p. Encryption generates ephemeral k, computes c1 = g^k and c2 = m * h^k, ensuring security through discrete logarithm hardness."
        }
      },
      {
        title: { fr: "Interface JavaFX avec gestion votes chiffrés", en: "JavaFX interface with encrypted votes management" },
        code: `// Referendum - Controlleur JavaFX pour vote chiffre
public class VoteController {
    @FXML private ListView<String> candidateListView;
    @FXML private TextArea encryptedVoteArea;
    @FXML private Label statusLabel;
    private ElGamalEncryption elGamal;

    @FXML
    private void handleVote() {
        String selected = candidateListView.getSelectionModel().getSelectedItem();
        if (selected == null) {
            statusLabel.setText("Erreur: Selectionnez un candidat!");
            return;
        }

        // 1. Convertir choix en BigInteger (A=1, B=2, C=3, Blanc=0)
        int index = candidateListView.getItems().indexOf(selected);
        BigInteger voteValue = BigInteger.valueOf(index);

        // 2. Chiffrer le vote avec ElGamal
        ElGamalCiphertext encrypted = elGamal.encrypt(voteValue);

        // 3. Afficher vote chiffre en hexadecimal
        encryptedVoteArea.setText(String.format(
            "c1 = %s\\nc2 = %s",
            encrypted.c1.toString(16),
            encrypted.c2.toString(16)
        ));

        // 4. Enregistrer et confirmer
        database.saveEncryptedVote(encrypted);
        statusLabel.setText("Vote enregistre! (Chiffre ElGamal)");
        voteButton.setDisable(true);
    }
}`,
        language: "java",
        explanation: {
          fr: "Ce contrôleur JavaFX gère l'interface de vote chiffré. L'utilisateur sélectionne un candidat, le vote est converti en BigInteger puis chiffré avec ElGamal. Le texte chiffré (c1, c2) est affiché en hexadécimal et stocké en base de données. Seul l'administrateur avec la clé privée peut déchiffrer les résultats.",
          en: "This JavaFX controller manages the encrypted voting interface. User selects a candidate, vote is converted to BigInteger then encrypted with ElGamal. Ciphertext (c1, c2) is displayed in hexadecimal and stored in database. Only the administrator with the private key can decrypt results."
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

1. **Le rôle de Product Owner** m'a appris à voir un projet au-delà du code. Gérer un backlog, prioriser les fonctionnalités en fonction de la valeur métier, et présenter un produit à un client, ce sont des compétences que je n'aurais pas développées en restant uniquement développeur.

2. **La cryptographie ElGamal et la Preuve Zero Knowledge** m'ont confronté à un domaine que je ne connaissais pas du tout. Comprendre les fondements mathématiques (logarithme discret, arithmétique modulaire, SHA-256), implémenter un protocole de chiffrement asymétrique, et concevoir une preuve non-interactive garantissant l'intégrité des votes sans compromettre leur confidentialité m'a donné une vraie sensibilité à la cybersécurité et à la rigueur qu'elle exige.

3. **Le chatbot IA avec DeepSeek** m'a permis d'explorer l'intégration d'API d'intelligence artificielle dans une application concrète, en limitant l'IA à la compréhension de la question pour fournir des réponses pré-préparées pertinentes.

4. **La durée du projet** (toute l'année) m'a appris la gestion sur le long terme : maintenir la motivation, gérer la dette technique, et s'adapter aux changements de périmètre à chaque nouveau contrat. C'est très différent d'un projet de quelques semaines.

5. **Les présentations orales et dossiers techniques** m'ont forcé à structurer ma pensée et à expliquer des concepts complexes de manière accessible. C'est une compétence essentielle que le code seul ne développe pas.`,
      en: `The Referendum project taught me the most on a professional level during my studies:

1. **The Product Owner role** taught me to see a project beyond the code. Managing a backlog, prioritizing features based on business value, and presenting a product to a client, these are skills I wouldn't have developed by staying purely a developer.

2. **ElGamal cryptography and Zero Knowledge Proof** confronted me with a domain I knew nothing about. Understanding the mathematical foundations (discrete logarithm, modular arithmetic, SHA-256), implementing an asymmetric encryption protocol, and designing a non-interactive proof guaranteeing vote integrity without compromising confidentiality gave me a genuine sensitivity to cybersecurity and the rigor it demands.

3. **The AI chatbot with DeepSeek** allowed me to explore integrating artificial intelligence APIs into a concrete application, limiting the AI to question understanding to provide relevant pre-prepared answers.

4. **The project duration** (the full year) taught me long-term management: maintaining motivation, managing technical debt, and adapting to scope changes with each new contract. It's very different from a project lasting just a few weeks.

5. **Oral presentations and technical documents** forced me to structure my thinking and explain complex concepts in an accessible way. It's an essential skill that code alone doesn't develop.`
    },
    thumbnail: "/images/referendum1.webp",
    images: ["/images/referendum1.webp", "/images/referendum2.webp", "/images/referendum3.webp", "/images/referendum4.webp", "/images/referendum5.webp"],
    links: { github: "https://github.com/killianrms/referendum", video: "https://youtu.be/F3I_4daMcuk", report: "https://docs.google.com/document/d/11MfYwfZin0VpMzFhqWLSZ3Y3LzQwRpnDo-VK7oX6jJ8/edit?usp=sharing" }
  },
  {
    slug: "code-game-jam-2026",
    year: "2026",
    title: { fr: "Scroll Party (Code Game Jam 2026)", en: "Scroll Party (Code Game Jam 2026)" },
    category: "competition",
    technologies: ["Unity", "C#", "Game Design", "Sound Design", "Trello"],
    duration: { fr: "Du 22 au 24 janvier 2026 (48 h)", en: "January 22 to 24, 2026 (48 hours)" },
    team: { fr: "Équipe Golem Gang, 5 étudiants", en: "Golem Gang team, 5 students" },
    role: { fr: "Développeur : game design et développement Unity", en: "Developer: game design and Unity development" },
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
- **Jauge de likes** : si le joueur continue à scroller sans écouter les PNJ, cette jauge augmente. Des voix dans sa tête l'encouragent ("wow c'est trop bien", "continue") pour conforter l'addiction. Si elle atteint 100%, le joueur perd, il est complètement absorbé par son écran.
- **Jauge de sociabilisation** : si le joueur pose son téléphone pour parler aux PNJ, cette jauge augmente. L'écran commence à trembler, la vision devient floue, simulant le manque et l'addiction. Si elle atteint 100%, le joueur a le **DÉCLIC** (jeu de mots avec "des clics" du thème) : il réalise ce qu'il fait, pose définitivement son téléphone, et profite de sa soirée. Il gagne !

Le jeu utilise ces mécaniques inversées pour créer une expérience de sensibilisation : gagner demande de résister à l'envie de scroller, ce qui reproduit la difficulté réelle de décrocher de son téléphone.`,
      en: `The game was developed on Unity in C#. Team organization was done via Trello to distribute tasks over the 48h.

**Game mechanics:**
- The player is at a party holding their phone, scrolling a TikTok-style feed with content flowing by.
- NPCs regularly come to talk to them. The player can choose to put down their phone to respond or ignore them and keep scrolling.
- **Likes gauge**: if the player keeps scrolling without listening to NPCs, this gauge increases. Voices in their head encourage them ("wow this is amazing", "keep going") to reinforce addiction. If it reaches 100%, the player loses, completely absorbed by their screen.
- **Socialization gauge**: if the player puts down their phone to talk to NPCs, this gauge increases. The screen starts shaking, vision becomes blurry, simulating withdrawal and addiction. If it reaches 100%, the player has the **DÉCLIC** (wordplay with "des clics"/clicks from the theme): they realize what they're doing, permanently put down their phone, and enjoy their party. They win!

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
    codeHighlights: [
      {
        title: { fr: "Système de double jauge de Scroll Party", en: "Scroll Party's dual gauge system" },
        code: `// Scroll Party - Systeme de jauges Unity C#
using UnityEngine;
using UnityEngine.UI;

public class GaugeManager : MonoBehaviour
{
    [SerializeField] private Slider socializationGauge;
    [SerializeField] private Slider likesGauge;
    [SerializeField] private float decayRate = 0.02f;

    private float socialization = 0.5f;
    private float likes = 0.5f;

    void Update()
    {
        // Decay naturel : les deux jauges diminuent avec le temps
        socialization -= decayRate * Time.deltaTime;
        likes -= decayRate * Time.deltaTime;

        // Clamp entre 0 et 1
        socialization = Mathf.Clamp01(socialization);
        likes = Mathf.Clamp01(likes);

        // Mise a jour UI
        socializationGauge.value = socialization;
        likesGauge.value = likes;

        CheckEndConditions();
    }

    public void OnNPCInteraction()
    {
        // Le joueur pose son telephone pour parler au PNJ
        socialization += 0.15f;
        likes -= 0.05f;  // Penalite : moins de scroll
    }

    public void OnScroll()
    {
        // Le joueur continue de scroller
        likes += 0.1f;
        socialization -= 0.08f;  // Penalite : ignore le PNJ
    }

    private void CheckEndConditions()
    {
        if (socialization >= 1f)
            GameManager.Instance.TriggerEnding("declic");
        if (likes >= 1f)
            GameManager.Instance.TriggerEnding("addiction");
    }
}`,
        language: "csharp",
        explanation: {
          fr: "Ce système de double jauge est le coeur du gameplay de Scroll Party. Les jauges de sociabilisation et de likes évoluent en fonction des choix du joueur : interagir avec les PNJ augmente la sociabilisation, scroller augmente les likes. Le decay naturel force le joueur à faire des choix constants. Atteindre le maximum d'une jauge déclenche la fin correspondante.",
          en: "This dual gauge system is the core gameplay of Scroll Party. The socialization and likes gauges evolve based on player choices: interacting with NPCs increases socialization, scrolling increases likes. Natural decay forces the player to make constant choices. Reaching the maximum of a gauge triggers the corresponding ending."
        }
      }
    ],
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
      fr: `La Code Game Jam 2026 m'a appris à développer un jeu vidéo complet en un temps très limité. Contrairement au développement web, le game development sur Unity impose de penser en termes de game loop, de physique, d'animations et de sound design, des compétences très différentes de mon quotidien.

Le plus grand défi a été de transformer le thème "Fête des Clics" en une expérience de jeu significative. Le concept du déclic, où gagner consiste à arrêter de jouer avec son téléphone, crée un paradoxe intéressant qui fait réfléchir le joueur sur ses propres habitudes numériques.

Travailler à 5 sur 48h avec Trello nous a appris à prioriser ce qui compte vraiment dans un jeu : les mécaniques de base doivent fonctionner avant de s'attaquer au polish visuel ou sonore.`,
      en: `The Code Game Jam 2026 taught me to develop a complete video game in very limited time. Unlike web development, game development on Unity requires thinking in terms of game loops, physics, animations, and sound design, very different skills from my daily routine.

The biggest challenge was transforming the "Fête des Clics" theme into a meaningful game experience. The "click moment" concept, where winning consists of stopping phone use, creates an interesting paradox that makes the player reflect on their own digital habits.

Working as a team of 5 over 48h with Trello taught us to prioritize what truly matters in a game: core mechanics must work before tackling visual or audio polish.`
    },
    thumbnail: "/images/codegamejam2026.webp",
    images: [],
    poster: "/images/codegamejam2025.webp",
    links: { video: "https://youtu.be/LyqimFqbW04" }
  },
  {
    slug: "nuit-info-2025",
    year: "2025",
    title: { fr: "Nuit de l'Info 2025", en: "Nuit de l'Info 2025" },
    category: "competition",
    technologies: ["TypeScript", "HTML/CSS", "Chrome Extension (Manifest V3)", "DeepSeek API", "GitHub Pages"],
    duration: { fr: "Décembre 2025 (1 nuit)", en: "December 2025 (1 night)" },
    team: { fr: "Équipe Golem Gang, 7 étudiants", en: "Golem Gang team, 7 students" },
    role: { fr: "Développeur : participation aux 3 défis", en: "Developer: participation in all 3 challenges" },
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
3. **Défi "Simplifier pour mieux vivre"** : Concevoir le Password Game, un champ de saisie volontairement frustrant avec des règles absurdes, un bouton esthétique mais délibérément compliqué à utiliser
4. **Défi Chatbot "Chat'bruti"** : Développer un chatbot IA drôle et inutilement philosophique, intégré au site`,
      en: `1. **Main challenge**: Develop an interactive site about responsible digital with digital footprint simulator, knowledge quiz, and badge system
2. **"La Ligue des Extensions" challenge**: Create SafeLinks, an open source Chrome extension (Manifest V3) that detects link safety before clicking
3. **"Simplifier pour mieux vivre" challenge**: Design the Password Game, a deliberately frustrating input field with absurd rules, an aesthetic but deliberately complicated button to use
4. **Chatbot challenge "Chat'bruti"**: Develop a funny and unnecessarily philosophical AI chatbot, integrated into the site`
    },
    approach: {
      fr: `Le site principal est développé en TypeScript et déployé sur GitHub Pages. Il propose une plateforme interactive sur le numérique responsable avec plusieurs modules :

- **Simulateur d'empreinte numérique** : Calcul de l'impact numérique de l'utilisateur avec un système de badges à débloquer.
- **Quiz de connaissances** : Test sur le numérique responsable et la cybersécurité.
- **Password Game** : Un jeu d'ergonomie volontairement frustrant où l'utilisateur doit créer un mot de passe en suivant des règles de plus en plus absurdes, le bouton est esthétique mais délibérément compliqué à utiliser.

Pour le défi extension, nous avons développé **SafeLinks**, une extension Chrome Manifest V3 qui analyse la sécurité des liens avant que l'utilisateur ne clique dessus. Le code est open source sur GitHub.

Pour le défi chatbot, nous avons créé **Chat'bruti**, un chatbot IA accessible via un bouton en bas à droite du site, conçu pour être drôle et inutilement philosophique dans ses réponses.`,
      en: `The main site is developed in TypeScript and deployed on GitHub Pages. It offers an interactive platform about responsible digital with several modules:

- **Digital footprint simulator**: Calculation of the user's digital impact with a badge system to unlock.
- **Knowledge quiz**: Test on responsible digital and cybersecurity.
- **Password Game**: A deliberately frustrating ergonomics game where the user must create a password following increasingly absurd rules, the button is aesthetic but deliberately complicated to use.

For the extension challenge, we developed **SafeLinks**, a Chrome Manifest V3 extension that analyzes link safety before the user clicks. The code is open source on GitHub.

For the chatbot challenge, we created **Chat'bruti**, an AI chatbot accessible via a button in the bottom right of the site, designed to be funny and unnecessarily philosophical in its responses.`
    },
    architecture: {
      fr: `Projet multi-composants développé en une nuit :
- **Site principal** : TypeScript, HTML/CSS, déployé sur GitHub Pages, modules interactifs (simulateur, quiz, Password Game)
- **Extension Chrome SafeLinks** : Manifest V3, détection de la sécurité des liens
- **Chatbot Chat'bruti** : IA intégrée au site, personnalité humoristique et philosophique
- **Hébergement** : GitHub Pages`,
      en: `Multi-component project developed in one night:
- **Main site**: TypeScript, HTML/CSS, deployed on GitHub Pages, interactive modules (simulator, quiz, Password Game)
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
    codeHighlights: [
      {
        title: { fr: "Extension Chrome SafeLinks : analyse de sécurité des liens", en: "SafeLinks Chrome extension: link safety analysis" },
        code: `// SafeLinks - Chrome Extension Manifest V3
// content-script.ts - Analyse des liens sur la page

interface LinkAnalysis {
  url: string;
  isHTTPS: boolean;
  domain: string;
  isSuspicious: boolean;
  reasons: string[];
}

function analyzeLinkSafety(url: string): LinkAnalysis {
  const parsed = new URL(url);
  const reasons: string[] = [];

  // 1. Verifier HTTPS
  const isHTTPS = parsed.protocol === 'https:';
  if (!isHTTPS) reasons.push('Connection non securisee (HTTP)');

  // 2. Detecter domaines suspects
  const suspiciousPatterns = [
    /\\d{4,}/,           // IP-like domains
    /-{2,}/,             // Multiple hyphens
    /\\.(xyz|tk|ml|ga)$/, // TLDs suspects
    /login|signin|verify|secure/i  // Phishing keywords
  ];

  const isSuspicious = suspiciousPatterns.some(p => p.test(parsed.hostname));
  if (isSuspicious) reasons.push('Domaine suspect detecte');

  // 3. Verifier longueur URL excessive
  if (url.length > 200) reasons.push('URL anormalement longue');

  return {
    url, isHTTPS, domain: parsed.hostname,
    isSuspicious: !isHTTPS || isSuspicious,
    reasons
  };
}

// Injecter indicateurs visuels sur tous les liens
document.querySelectorAll('a[href]').forEach(link => {
  const analysis = analyzeLinkSafety(link.getAttribute('href')!);
  if (analysis.isSuspicious) {
    link.style.outline = '2px solid red';
    link.title = 'SafeLinks: ' + analysis.reasons.join(', ');
  }
});`,
        language: "typescript",
        explanation: {
          fr: "Cette extension Chrome (Manifest V3) analyse la sécurité des liens sur chaque page visitée. Le content script inspecte tous les liens : vérification HTTPS, détection de domaines suspects (patterns de phishing, TLDs douteux, IP-like), et URLs anormalement longues. Les liens dangereux sont surlignés en rouge avec un tooltip explicatif.",
          en: "This Chrome extension (Manifest V3) analyzes link safety on every visited page. The content script inspects all links: HTTPS verification, suspicious domain detection (phishing patterns, dubious TLDs, IP-like), and abnormally long URLs. Dangerous links are highlighted in red with an explanatory tooltip."
        }
      }
    ],
    results: {
      fr: `Le site et les 3 défis ont été livrés fonctionnels à la fin de la nuit :

- **Site principal** déployé sur GitHub Pages avec le simulateur d'empreinte numérique, le quiz et le système de badges
- **SafeLinks** : extension Chrome fonctionnelle détectant la sécurité des liens, code open source publié sur GitHub
- **Password Game** : jeu d'ergonomie volontairement frustrant avec un bouton esthétique mais compliqué, le défi d'ergonomie inversée est réussi
- **Chat'bruti** : chatbot IA humoristique intégré au site, accessible en bas à droite

Cette expérience m'a appris la valeur du prototypage rapide et de la priorisation des fonctionnalités essentielles (MVP) lorsque le temps est limité.`,
      en: `The site and all 3 challenges were delivered functional by the end of the night:

- **Main site** deployed on GitHub Pages with the digital footprint simulator, quiz, and badge system
- **SafeLinks**: functional Chrome extension detecting link safety, open source code published on GitHub
- **Password Game**: deliberately frustrating ergonomics game with an aesthetic but complicated button, the reverse ergonomics challenge is successful
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
    links: { live: "https://killianrms.github.io/NDI2025/", event: "https://www.nuitdelinfo.com" }
  },
  {
    slug: "application-sauvegarde",
    year: "2025",
    title: { fr: "Application de Sauvegarde", en: "Backup Application" },
    category: "university",
    shortDescription: {
      fr: "Système de sauvegarde automatique client-serveur avec gestion de versions, chiffrement AES-256-GCM et interface web Flask",
      en: "Automated client-server backup system with version management, AES-256-GCM encryption and Flask web interface"
    },
    technologies: [
      "Python",
      "SSH/Paramiko",
      "SCP",
      "Flask",
      "SQLite",
      "Cryptography (AES-256-GCM)",
      "Gzip",
      "Watchdog"
    ],
    duration: { fr: "3 mois", en: "3 months" },
    team: { fr: "Projet universitaire, équipe de 4 étudiants", en: "University project, team of 4 students" },
    role: {
      fr: "Développeur principal : architecture système, gestion des versions, chiffrement, interface web",
      en: "Lead Developer, System architecture, version management, encryption, web interface"
    },
    context: {
      fr: "Projet de BUT Informatique visant à créer un système de sauvegarde robuste pour protéger les données contre les ransomwares et les erreurs utilisateur, avec une rétention de 30 jours.",
      en: "Computer Science degree project aimed at creating a robust backup system to protect data against ransomware and user errors, with 30-day retention."
    },
    objectives: {
      fr: "Développer un système de sauvegarde automatique, sécurisé via SSH, avec gestion intelligente des versions, compression gzip (70 % de réduction), déduplication par hash SHA-256 et chiffrement AES-256-GCM.",
      en: "Develop an automated backup system, secured via SSH, with intelligent version management, gzip compression (70% reduction), SHA256 hash deduplication and AES-256-GCM encryption."
    },
    approach: {
      fr: "Architecture client-serveur avec un daemon de surveillance (watchdog) sur le client, transfert SSH/SCP sécurisé, traitement côté serveur (compression + chiffrement + déduplication), stockage des métadonnées dans SQLite et interface web Flask pour le monitoring et la restauration.",
      en: "Client-server architecture with client-side monitoring daemon (watchdog), secure SSH/SCP transfer, server-side processing (compression + encryption + deduplication), SQLite metadata storage and Flask web interface for monitoring and restoration."
    },
    architecture: {
      fr: "Client : daemon watchdog, SSH/SCP via Paramiko. Serveur : process_file.py pour le traitement, version_manager.py pour la gestion des versions et la déduplication, encryption.py pour AES-256-GCM, app.py (Flask) pour l'interface web (dashboard, restauration, API REST), SQLite pour les métadonnées, service systemd pour l'automatisation.",
      en: "Client: watchdog daemon, SSH/SCP via Paramiko. Server: process_file.py for processing, version_manager.py for version/deduplication management, encryption.py for AES-256-GCM, Flask app.py for web interface (dashboard, restore, REST API), SQLite for metadata, systemd service for automation."
    },
    skills: [
      {
        name: { fr: "Python avancé & Architecture système", en: "Advanced Python & System Architecture" },
        description: { fr: "Architecture client-serveur avec daemon watchdog, transferts SSH/SCP via Paramiko, et automatisation systemd.", en: "Client-server architecture with watchdog daemon, SSH/SCP transfers via Paramiko, and systemd automation." }
      },
      {
        name: { fr: "Cryptographie & Sécurité", en: "Cryptography & Security" },
        description: { fr: "Chiffrement AES-256-GCM avec dérivation PBKDF2, compression gzip (70% réduction), et déduplication par hash SHA256.", en: "AES-256-GCM encryption with PBKDF2 key derivation, gzip compression (70% reduction), and SHA256 hash deduplication." }
      },
      {
        name: { fr: "Flask & API REST", en: "Flask & REST API" },
        description: { fr: "Interface web Flask avec dashboard temps réel, API REST pour consultation et restauration de versions, authentification intégrée.", en: "Flask web interface with real-time dashboard, REST API for version browsing and restoration, integrated authentication." }
      },
      {
        name: { fr: "Base de données SQLite", en: "SQLite Database" },
        description: { fr: "Stockage des métadonnées de versions avec timestamps, gestion de la rétention 30 jours, et requêtes optimisées.", en: "Version metadata storage with timestamps, 30-day retention management, and optimized queries." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Gestion de versions avec compression et chiffrement", en: "Version management with compression and encryption" },
        code: `# daemon-sauvegarde - Version Manager avec deduplication
class VersionManager:
    def save_version(self, file_path, relative_path, action='modified'):
        # 1. Calcul hash SHA256 du fichier
        file_hash = self._calculate_hash(file_path)
        file_size = os.path.getsize(file_path)

        # 2. Verification changement (compare avec version actuelle)
        current_hash = self._get_current_hash(relative_path)
        if current_hash == file_hash:
            return  # Fichier inchange, pas de nouvelle version

        # 3. Deduplication - verifier si hash existe deja
        dedup_info = self._check_deduplication(file_hash)

        if dedup_info:
            # Reutiliser fichier existant (incrementer ref_count)
            self._increment_ref_count(file_hash)
            compressed_size = dedup_info['compressed_size']
            dedup_ref = dedup_info['dedup_path']
        else:
            # 4. Compression gzip (niveau 6, ~70% reduction)
            temp_compressed = f"{file_path}.gz"
            with open(file_path, 'rb') as f_in:
                with gzip.open(temp_compressed, 'wb', compresslevel=6) as f_out:
                    shutil.copyfileobj(f_in, f_out)

            # 5. Chiffrement AES-256-GCM
            encrypted_path = f"{temp_compressed}.enc"
            self.encryption_manager.encrypt_file(temp_compressed, encrypted_path)

            # 6. Stockage deduplication (hash-based path)
            dedup_ref = self._store_deduplicated(file_hash, encrypted_path)
            compressed_size = os.path.getsize(encrypted_path)

        # 7. Enregistrement version dans SQLite
        timestamp = datetime.now().strftime('%Y-%m-%d_%H-%M-%S-%f')
        self.cursor.execute("""
            INSERT INTO file_versions
            (file_path, version_timestamp, file_size, compressed_size,
             file_hash, dedup_ref, is_compressed, is_encrypted, action)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (relative_path, timestamp, file_size, compressed_size,
              file_hash, dedup_ref, True, True, action))

        self.conn.commit()`,
        language: "python",
        explanation: {
          fr: "Ce code implémente la gestion de versions avec déduplication intelligente. Chaque fichier est haché (SHA-256), comparé à la version actuelle, puis compressé (gzip, 70 %), chiffré (AES-256-GCM) et stocké de manière dédupliquée. Si le même hash existe déjà, le fichier est réutilisé (économie d'espace). Les métadonnées sont enregistrées dans SQLite avec un horodatage pour la rétention de 30 jours.",
          en: "This code implements version management with intelligent deduplication. Each file is hashed (SHA256), compared to current version, then compressed (gzip 70%), encrypted (AES-256-GCM) and stored in deduplicated manner. If same hash already exists, file is reused (space saving). Metadata is recorded in SQLite with timestamp for 30-day retention."
        }
      },
      {
        title: { fr: "API Flask pour restauration de versions", en: "Flask API for version restoration" },
        code: `# daemon-sauvegarde - Flask Web Interface API
@app.route('/api/files/<path:file_path>/versions', methods=['GET'])
@auth.login_required
def get_file_versions(file_path):
    """Recupere toutes les versions d'un fichier"""
    versions = vm.cursor.execute("""
        SELECT version_timestamp, file_size, compressed_size,
               file_hash, action, created_at
        FROM file_versions
        WHERE file_path = ?
        ORDER BY version_timestamp DESC
    """, (file_path,)).fetchall()

    return jsonify({
        'file_path': file_path,
        'versions': [{
            'timestamp': v[0],
            'size': v[1],
            'compressed_size': v[2],
            'hash': v[3],
            'action': v[4],
            'created_at': v[5]
        } for v in versions]
    })

@app.route('/api/restore', methods=['POST'])
@auth.login_required
def restore_file():
    """Restaure une version specifique d'un fichier"""
    data = request.json
    file_path = data.get('file_path')
    timestamp = data.get('timestamp')

    # 1. Recuperer infos version depuis SQLite
    version = vm.cursor.execute("""
        SELECT dedup_ref, is_compressed, is_encrypted
        FROM file_versions
        WHERE file_path = ? AND version_timestamp = ?
    """, (file_path, timestamp)).fetchone()

    if not version:
        return jsonify({'error': 'Version not found'}), 404

    dedup_ref, is_compressed, is_encrypted = version

    # 2. Charger fichier depuis dedup_store
    stored_file = os.path.join(vm.backup_path, dedup_ref)

    # 3. Dechiffrement AES-256-GCM
    decrypted_file = f"{stored_file}.dec"
    vm.encryption_manager.decrypt_file(stored_file, decrypted_file)

    # 4. Decompression gzip
    restored_file = os.path.join('./restored', file_path)
    os.makedirs(os.path.dirname(restored_file), exist_ok=True)
    with gzip.open(decrypted_file, 'rb') as f_in:
        with open(restored_file, 'wb') as f_out:
            shutil.copyfileobj(f_in, f_out)

    # 5. Nettoyage temporaires
    os.remove(decrypted_file)

    return jsonify({
        'success': True,
        'restored_path': restored_file,
        'download_url': f'/api/download/{file_path}'
    })`,
        language: "python",
        explanation: {
          fr: "Cette API Flask expose des endpoints REST pour consulter l'historique des versions et restaurer des fichiers. GET /api/files/<path>/versions retourne toutes les versions avec leurs métadonnées (horodatage, tailles, hash). POST /api/restore gère la restauration complète : récupération depuis dedup_store, déchiffrement AES-256-GCM, décompression gzip et écriture du fichier restauré. L'interface web utilise ces endpoints pour permettre une restauration à un instant donné.",
          en: "This Flask API exposes REST endpoints to consult version history and restore files. GET /api/files/<path>/versions returns all versions with metadata (timestamp, sizes, hash). POST /api/restore handles complete restoration: retrieval from dedup_store, AES-256-GCM decryption, gzip decompression and writing of restored file. The web interface uses these endpoints to enable point-in-time restoration."
        }
      }
    ],
    results: {
      fr: "Système prêt pour la production avec 80 à 90 % de réduction d'espace disque (compression gzip 70 % + déduplication), interface web fonctionnelle avec dashboard en temps réel, API REST complète, tests automatiques d'intégrité et de restauration, rétention de 30 jours.",
      en: "Production-ready system with 80-90% disk space reduction (70% gzip compression + deduplication), functional web interface with real-time dashboard, complete REST API, automated integrity and restore tests, 30-day retention."
    },
    reflection: {
      fr: "Projet enrichissant qui m'a permis d'approfondir mes compétences en architecture système, sécurité (SSH, chiffrement), optimisation (compression + déduplication) et développement web. La gestion de versions avec rétention m'a particulièrement formé aux problématiques de stockage et de récupération de données.",
      en: "Enriching project that allowed me to deepen my skills in system architecture, security (SSH, encryption), optimization (compression + deduplication) and web development. Version management with retention particularly trained me in data storage and recovery challenges."
    },
    thumbnail: "/images/daemon-sauvegarde.webp",
    images: [],
    links: { github: "https://github.com/IUT-Blagnac/sae-3-01-devapp-2024-2025-g2a8" }
  },
];

export const getProjectCount = (): number => projects.filter(p => !p.archived).length;

/** What the home page list needs. Keeps the full write-ups out of the home bundle. */
export type ProjectSummary = Pick<
  Project,
  "slug" | "year" | "featured" | "archived" | "title" | "category" | "technologies" | "shortDescription" | "thumbnail"
>;

export const summarizeProject = ({ slug, year, featured, archived, title, category, technologies, shortDescription, thumbnail }: Project): ProjectSummary => ({
  slug,
  year,
  featured,
  archived,
  title,
  category,
  technologies,
  shortDescription,
  thumbnail,
});
