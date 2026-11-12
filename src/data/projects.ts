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

export interface ProjectCover {
  /** Short name set in large type. */
  word: { fr: string; en: string };
  /** One striking fact, and what it measures. */
  metric: { fr: string; en: string };
  caption: { fr: string; en: string };
  /** "accent" is reserved for the main project. */
  tone?: "accent";
}

export interface Project {
  slug: string;
  year: string;
  featured?: boolean;
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
  /** Typographic cover shown on the home page and, without a visual, on the project page. */
  cover: ProjectCover;
  /** Main visual of the project page (screenshot). */
  thumbnail?: string;
  images: string[];
  poster?: string;
  links?: { github?: string; live?: string; video?: string; report?: string; discord?: string; download?: string; event?: string };
}

export const projects: Project[] = [
  {
    slug: "itesoft-assistant-ingenieur",
    year: "2025",
    featured: true,
    title: { fr: "AutoInit et Streamline for Invoices chez ITESOFT", en: "AutoInit and Streamline for Invoices at ITESOFT" },
    category: "professional",
    technologies: ["n8n", "Docker", "Azure DevOps", "Node.js", "Java", "AngularJS", "PostgreSQL", "SSH / SFTP", "Grafana", "Git"],
    duration: { fr: "Septembre 2025 à aujourd'hui (alternance)", en: "September 2025 to present (work-study)" },
    team: { fr: "Équipe Delivery de Streamline for Invoices (32 personnes)", en: "Streamline for Invoices Delivery team (32 people)" },
    role: { fr: "Assistant ingénieur développement et projet : créateur d'AutoInit, customisation, support et diagnostic en production", en: "Assistant development & project engineer: creator of AutoInit, customization, support and production diagnosis" },
    shortDescription: {
      fr: "AutoInit est un workflow n8n que j'ai créé pour initialiser les plateformes clientes de bout en bout : environ 2 heures de manipulations sur cinq outils sont devenues un formulaire d'une minute, utilisé par toute l'équipe. Je fais aussi de la customisation et du support en production sur Streamline for Invoices, pour des grands comptes.",
      en: "AutoInit is an n8n workflow I built to set up client platforms end to end: about 2 hours of manual work across five tools became a one-minute form, used by the whole team. I also customize Streamline for Invoices and support it in production for large companies."
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
    cover: {
      word: { fr: "AutoInit", en: "AutoInit" },
      metric: { fr: "2 h → 1 min", en: "2 h → 1 min" },
      caption: { fr: "pour initialiser une plateforme client", en: "to set up a client platform" },
      tone: "accent",
    },
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
    role: { fr: "Développeur full-stack : conception, développement et mise en ligne de l'application", en: "Full-stack developer: design, development and deployment of the application" },
    shortDescription: {
      fr: "Tableau de bord statistique conçu seul pendant mon stage chez TamaBox, loueur de box de stockage à Draguignan : données de location, personas clients et prévisions. Le taux d'occupation est passé de 75-82 % à 100 %.",
      en: "A statistics dashboard I built alone during my internship at TamaBox, a storage box rental company in Draguignan: rental data, customer personas and forecasts. The occupancy rate went from 75-82% to 100%."
    },
    context: {
      fr: `TamaStat est un tableau de bord statistique que j'ai conçu et développé pendant mon stage de deuxième année de BUT Informatique, de janvier à avril 2025, chez TamaBox, une entreprise de location de box de stockage à Draguignan (Var).

C'était ma première expérience professionnelle. J'étais seul avec le gérant : pas d'équipe technique, pas de développeur senior. Il m'a expliqué son activité, ses données et ce qu'il voulait comprendre, puis m'a laissé carte blanche sur la conception, le développement et la mise en ligne.

TamaBox loue des box de différentes tailles. Le gérant avait des données brutes sur son activité (entrées et sorties de locataires, répartition par taille de box, taux d'occupation, chiffre d'affaires, surface louée) mais aucun outil pour les lire. Son taux d'occupation oscillait entre 75 et 82 %, et il visait 100 %.

Nous faisions un point chaque semaine : je présentais l'avancement, il me faisait ses retours. Le reste du temps, je travaillais en autonomie.`,
      en: `TamaStat is a statistics dashboard I designed and built during the internship of my second year of BUT in Computer Science, from January to April 2025, at TamaBox, a storage box rental company in Draguignan, in the south of France.

It was my first professional experience. I worked alone with the owner: no technical team, no senior developer. He explained his business, his data and what he wanted to understand, then gave me free rein on design, development and deployment.

TamaBox rents out boxes of different sizes. The owner had raw data about his business (tenants moving in and out, breakdown by box size, occupancy rate, revenue, rented surface) but no tool to read it. His occupancy rate hovered between 75 and 82%, and he was aiming for 100%.

We met once a week: I showed my progress and he gave me feedback. The rest of the time I worked on my own.`
    },
    objectives: {
      fr: `1. **Tableau de bord** : montrer en un coup d'œil l'état de l'activité, avec les entrées et sorties de locataires, la répartition par taille de box, la part de box louées, l'évolution du chiffre d'affaires et la surface totale louée.

2. **Personas marketing** : dégager des profils types de clients à partir des données, pour que le gérant cible mieux ses publicités.

3. **Prévisions** : projeter le taux d'occupation et le chiffre d'affaires sur les mois suivants.

4. **Tout mener seul** : de l'analyse du besoin à la mise en production.`,
      en: `1. **Dashboard**: show the state of the business at a glance, with tenants moving in and out, the breakdown by box size, the share of rented boxes, revenue over time and the total rented surface.

2. **Marketing personas**: derive typical customer profiles from the data so the owner can target his advertising better.

3. **Forecasts**: project the occupancy rate and revenue over the following months.

4. **Handle everything alone**: from understanding the need to going live.`
    },
    approach: {
      fr: `Je n'avais jamais fait de JavaScript : je l'ai appris pendant le stage. J'ai choisi une application purement front-end, en JavaScript avec Chart.js pour les graphiques, parce qu'elle se déploie simplement sur Vercel.

Pour chaque fonctionnalité, je partais des données brutes fournies par le gérant, que je structurais avant de les transformer en graphiques :
- **Entrées et sorties** : mouvements de locataires dans le temps.
- **Répartition par taille** : box louées selon leur superficie.
- **Taux d'occupation** : part de box louées et disponibles, et son évolution.
- **Chiffre d'affaires** : évolution des revenus, ventilée par type de box.
- **Surface louée** : total en m².

Pour les personas, j'ai analysé les données clients et identifié des profils types (particuliers en déménagement, entreprises en stockage long terme, étudiants), avec leurs habitudes de location. Le gérant s'en est servi pour cibler ses publicités.

Le module de prévision prolonge les tendances passées pour estimer le taux d'occupation et le chiffre d'affaires des mois suivants.`,
      en: `I had never written JavaScript before: I learned it during the internship. I chose a purely front-end application, in JavaScript with Chart.js for the charts, because it is simple to deploy on Vercel.

For each feature I started from the raw data the owner gave me, structured it, then turned it into charts:
- **Moving in and out**: tenant movements over time.
- **Breakdown by size**: rented boxes by surface area.
- **Occupancy rate**: share of rented and available boxes, and how it changes.
- **Revenue**: income over time, split by box type.
- **Rented surface**: total in m².

For the personas, I analyzed customer data and identified typical profiles (individuals moving house, companies storing long term, students) with their rental habits. The owner used them to target his advertising.

The forecasting module extends past trends to estimate the occupancy rate and revenue for the following months.`
    },
    architecture: {
      fr: `Application front-end hébergée sur Vercel :
- **Données** : fichiers structurés à partir des exports bruts du gérant.
- **Graphiques** : Chart.js (barres, courbes, camemberts, graphiques combinés) avec infobulles et légendes.
- **Personas** : profils types de clients, leurs habitudes de location et des pistes de ciblage publicitaire.
- **Prévisions** : projection de l'occupation et du chiffre d'affaires à partir des tendances passées.
- **Déploiement** : mise en ligne continue depuis Git.`,
      en: `Front-end application hosted on Vercel:
- **Data**: files structured from the owner's raw exports.
- **Charts**: Chart.js (bars, lines, pies, combined charts) with tooltips and legends.
- **Personas**: typical customer profiles, their rental habits and advertising targeting ideas.
- **Forecasts**: projection of occupancy and revenue from past trends.
- **Deployment**: continuous deployment from Git.`
    },
    skills: [
      {
        name: { fr: "JavaScript, appris pendant le stage", en: "JavaScript, learned on the job" },
        description: { fr: "Premier projet en JavaScript : manipulation du DOM, événements et asynchrone, appris en développant l'application.", en: "My first JavaScript project: DOM manipulation, events and asynchronous code, learned while building the application." }
      },
      {
        name: { fr: "Visualisation de données avec Chart.js", en: "Data visualization with Chart.js" },
        description: { fr: "Barres empilées, courbes d'évolution et camemberts de répartition, avec infobulles, couleurs et animations personnalisées.", en: "Stacked bars, trend lines and pie charts, with custom tooltips, colors and animations." }
      },
      {
        name: { fr: "Analyse de données et personas", en: "Data analysis and personas" },
        description: { fr: "Analyse des données clients pour dégager des segments types, puis des personas dont le gérant s'est servi pour ses campagnes.", en: "Analyzing customer data to identify typical segments, then personas the owner used for his campaigns." }
      },
      {
        name: { fr: "Autonomie et gestion de projet", en: "Autonomy and project management" },
        description: { fr: "Un projet mené seul : analyse du besoin, conception, développement, mise en ligne et point hebdomadaire avec le gérant.", en: "A project handled alone: understanding the need, design, development, deployment and a weekly meeting with the owner." }
      },
    ],
    codeHighlights: [
     {
        title: { fr: "Graphique d'évolution avec Chart.js", en: "Trend chart with Chart.js" },
        code: `// TamaStat : Graphique d'évolution du taux d'occupation
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
          fr: "Configuration du graphique Chart.js qui trace l'évolution du taux d'occupation des box, de 75 % à 100 %.",
          en: "Configuration of the Chart.js chart that plots the box occupancy rate over time, from 75% to 100%."
        }
      }
    ],
    results: {
      fr: "Le taux d'occupation de TamaBox est passé de 75-82 % à 100 %. Le gérant s'est appuyé sur le tableau de bord et sur les personas pour décider où faire de la publicité, et pour qui.",
      en: "TamaBox's occupancy rate went from 75-82% to 100%. The owner relied on the dashboard and the personas to decide where to advertise, and to whom."
    },
    reflection: {
      fr: "Ce stage m'a appris à travailler seul sans perdre le client de vue. Présenter l'avancement chaque semaine m'obligeait à structurer mon travail et à commencer par ce qui lui était le plus utile. C'est aussi là que j'ai appris JavaScript, directement sur un projet réel.",
      en: "This internship taught me to work alone without losing sight of the client. Presenting my progress every week forced me to structure my work and to start with what was most useful to him. It is also where I learned JavaScript, directly on a real project."
    },
    cover: {
      word: { fr: "TamaStat", en: "TamaStat" },
      metric: { fr: "100 %", en: "100%" },
      caption: { fr: "de taux d'occupation, contre 75-82 % avant", en: "occupancy rate, up from 75-82%" },
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
    duration: { fr: "Projet personnel, depuis 2020", en: "Personal project, since 2020" },
    team: { fr: "Projet individuel, communauté de plus de 8 500 membres sur Discord", en: "Solo project, community of more than 8,500 members on Discord" },
    role: { fr: "Seul développeur : conception, développement, maintenance et animation de la communauté", en: "Sole developer: design, development, maintenance and community management" },
    shortDescription: {
      fr: "Des bots Fortnite que les joueurs ajoutent en ami pour prévisualiser skins et danses, pilotés par un bot Discord central et un dashboard web temps réel. Commencé à 16 ans pendant le confinement, le projet réunit aujourd'hui plus de 8 500 membres sur Discord.",
      en: "Fortnite bots that players add as friends to preview skins and emotes, run from a central Discord bot with a real-time web dashboard. Started at 16 during lockdown, the project now has a Discord community of more than 8,500 members."
    },
    context: {
      fr: `LobbyBot 2.0 est mon plus gros projet personnel. Je l'ai commencé en 2020, pendant le confinement, à 16 ans. Au départ, c'étaient de simples bots Fortnite en Python qui permettaient aux joueurs de voir tous les skins et toutes les danses du jeu. Le projet se finançait grâce à mon code créateur Epic Games, qui me reverse 10 % des achats de mes soutiens sur la boutique.

Les joueurs ajoutaient les bots en ami pour prévisualiser les skins et les danses à venir, mais aussi pour jouer avec eux, ce qui facilitait leur progression et leur évitait de tomber contre des adversaires trop forts. J'ai échangé à plusieurs reprises avec Epic Games, qui m'a autorisé à faire tourner ces bots.

Le projet existe toujours. Sa communauté compte plus de 8 500 membres sur Discord, et le code a beaucoup changé : le script Python est devenu un bot Discord central en Node.js, un dashboard web temps réel et une base PostgreSQL, le tout dans des conteneurs Docker.

Les évolutions qui comptent le plus : un nouveau bot est créé automatiquement quand un bot atteint sa limite d'amis, les bots redémarrent seuls après un crash ou un redémarrage du serveur, et chaque nouvel ami est dirigé vers le bot le moins chargé.`,
      en: `LobbyBot 2.0 is my biggest personal project. I started it in 2020, during lockdown, at 16. At first it was just Fortnite bots written in Python that let players see every skin and emote in the game. The project was funded by my Epic Games creator code, which pays me 10% of what my supporters spend in the store.

Players added the bots as friends to preview upcoming skins and emotes, and also to play with them, which made progressing easier and kept them away from much stronger opponents. I talked with Epic Games several times, and they allowed me to run these bots.

The project is still running. Its community has more than 8,500 members on Discord, and the code has changed a lot: the Python script became a central Discord bot in Node.js, a real-time web dashboard and a PostgreSQL database, all in Docker containers.

The changes that matter most: a new bot is created automatically when one reaches its friend limit, bots restart on their own after a crash or a server reboot, and each new friend is sent to the least loaded bot.`
    },
    objectives: {
      fr: `1. **Plusieurs bots en parallèle** : faire tourner autant de bots Fortnite que nécessaire, avec une répartition de charge et un seuil de 900 amis par bot.
2. **Bot Discord central** : permettre aux membres de piloter les bots depuis Discord (/add, /login, /list, /shop, /locker).
3. **Dashboard web temps réel** : voir l'état des bots et de leurs amis, et agir dessus (kick, promote, privacy) via Socket.IO.
4. **Automatisation** : création des bots, redémarrage après un crash et gestion des listes d'amis sans intervention.
5. **Quatre langues** : français, anglais, espagnol et allemand, pour une communauté internationale.`,
      en: `1. **Several bots in parallel**: run as many Fortnite bots as needed, with load balancing and a threshold of 900 friends per bot.
2. **Central Discord bot**: let members drive the bots from Discord (/add, /login, /list, /shop, /locker).
3. **Real-time web dashboard**: see the state of the bots and their friends, and act on them (kick, promote, privacy) through Socket.IO.
4. **Automation**: bot creation, restart after a crash and friend list management with no manual action.
5. **Four languages**: French, English, Spanish and German, for an international community.`
    },
    approach: {
      fr: `Le projet est passé d'un script Python à une architecture en plusieurs services :

- **2020** : des bots Python qui utilisent les API non documentées d'Epic Games, avec authentification OAuth2 et une gestion simple des amis et des skins.
- **Ensuite** : un bot Discord central en Node.js, avec Discord.js pour les commandes de la communauté.
- **Aujourd'hui, LobbyBot 2.0** : trois composants dans Docker.

1. **Discord Manager** (Node.js) : le cœur du système. Il gère tous les bots, la répartition de charge, les commandes Discord et les échanges avec PostgreSQL.
2. **Dashboard web** (Node.js, Express, Socket.IO) : interface de contrôle en temps réel, reliée au Manager par Socket.IO.
3. **PostgreSQL** : comptes des bots, utilisateurs, préférences de langue et statistiques.

Pour chaque demande d'ajout, le système choisit le bot qui a le moins d'amis parmi ceux qui en ont moins de 900. Si tous sont pleins, il en crée un nouveau.`,
      en: `The project grew from a Python script into an architecture made of several services:

- **2020**: Python bots using Epic Games' undocumented APIs, with OAuth2 authentication and basic friend and skin management.
- **Then**: a central Discord bot in Node.js, with Discord.js for the community's commands.
- **Today, LobbyBot 2.0**: three components in Docker.

1. **Discord Manager** (Node.js): the core of the system. It handles all the bots, load balancing, Discord commands and exchanges with PostgreSQL.
2. **Web dashboard** (Node.js, Express, Socket.IO): a real-time control interface, connected to the Manager through Socket.IO.
3. **PostgreSQL**: bot accounts, users, language preferences and statistics.

For each friend request, the system picks the bot with the fewest friends among those under 900. If they are all full, it creates a new one.`
    },
    architecture: {
      fr: `Trois services orchestrés par Docker Compose :

- **lobbybot2.0-discord** (Node.js) : le Manager central.
  - 'src/managers/' : gestionnaires (Bots, Database, User, API, Discord)
  - 'src/commands/' : commandes Discord (/login, /add, /list, /shop, /locker, /admin)
  - 'src/actions/' : actions Fortnite (Skin, Party, Friends)
  - 'src/utils/' : utilitaires (traductions, helpers)
- **lobbybot2.0-website** (Node.js, Express) : le dashboard web.
  - Serveur Express et Socket.IO pour le temps réel
  - Interface en HTML, CSS et JavaScript, sur un thème spatial
  - État des bots, amis et actions (Kick, Promote, Privacy)
- **PostgreSQL** : base partagée (comptes, utilisateurs, préférences).`,
      en: `Three services orchestrated by Docker Compose:

- **lobbybot2.0-discord** (Node.js): the central Manager.
  - 'src/managers/': managers (Bots, Database, User, API, Discord)
  - 'src/commands/': Discord commands (/login, /add, /list, /shop, /locker, /admin)
  - 'src/actions/': Fortnite actions (Skin, Party, Friends)
  - 'src/utils/': utilities (translations, helpers)
- **lobbybot2.0-website** (Node.js, Express): the web dashboard.
  - Express server and Socket.IO for real time
  - Interface in HTML, CSS and JavaScript, with a space theme
  - Bot status, friends and actions (Kick, Promote, Privacy)
- **PostgreSQL**: shared database (accounts, users, preferences).`
    },
    skills: [
      {
        name: { fr: "Architecture multi-services et Docker", en: "Multi-service architecture and Docker" },
        description: { fr: "Trois services (Manager Node.js, dashboard web, PostgreSQL) déployés avec Docker Compose et reliés en temps réel.", en: "Three services (Node.js Manager, web dashboard, PostgreSQL) deployed with Docker Compose and connected in real time." }
      },
      {
        name: { fr: "Communauté et produit", en: "Community and product" },
        description: { fr: "Animation d'une communauté de plus de 8 500 membres, prise en compte des retours, évolution du produit sur plus de cinq ans et financement par le code créateur Epic Games.", en: "Running a community of more than 8,500 members, acting on feedback, evolving the product for more than five years and funding it through the Epic Games creator code." }
      },
      {
        name: { fr: "Temps réel avec Socket.IO", en: "Real time with Socket.IO" },
        description: { fr: "Communication bidirectionnelle entre le dashboard et le Manager pour piloter les bots instantanément.", en: "Two-way communication between the dashboard and the Manager to control the bots instantly." }
      },
      {
        name: { fr: "Automatisation et répartition de charge", en: "Automation and load balancing" },
        description: { fr: "Répartition des amis entre les bots, création automatique de nouveaux bots et redémarrage après un crash ou un redémarrage du serveur.", en: "Spreading friends across bots, creating new bots automatically and restarting after a crash or a server reboot." }
      },
    ],
    codeHighlights: [
      {
        title: { fr: "Répartition de charge entre les bots", en: "Load balancing between bots" },
        code: `// LobbyBot 2.0 : Bot Manager avec load balancing
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
          fr: "La méthode selectOptimalBot() garde les bots qui ont moins de 900 amis, les trie par nombre d'amis et renvoie le moins chargé. Si tous sont pleins, un nouveau bot est créé à partir des comptes disponibles dans PostgreSQL.",
          en: "The selectOptimalBot() method keeps the bots with fewer than 900 friends, sorts them by friend count and returns the least loaded one. If they are all full, a new bot is created from the accounts available in PostgreSQL."
        }
      },
      {
        title: { fr: "Temps réel entre le dashboard et le Manager", en: "Real time between the dashboard and the Manager" },
        code: `// LobbyBot 2.0 : Dashboard Socket.IO Server
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
          fr: "Le serveur du dashboard écoute les connexions, envoie l'état initial des bots, diffuse les mises à jour en direct et transmet les actions de l'utilisateur (kick, changement de skin).",
          en: "The dashboard server listens for connections, sends the initial state of the bots, broadcasts live updates and forwards the user's actions (kick, skin change)."
        }
      }
    ],
    results: {
      fr: `- **Plus de 8 500 membres sur Discord**, qui utilisent les bots au quotidien.
- **Plusieurs bots en parallèle**, avec répartition de charge et création automatique de nouveaux bots.
- **Un dashboard web temps réel** pour surveiller et piloter tous les bots.
- **L'autorisation d'Epic Games**, obtenue après plusieurs échanges directs.
- **Un projet qui se finance seul** grâce au code créateur Epic Games (10 % de commission).
- **Plus de cinq ans de maintenance**, avec deux refontes : de Python à Node.js, puis de scripts isolés à une architecture Docker.
- **Quatre langues** : français, anglais, espagnol et allemand.`,
      en: `- **More than 8,500 members on Discord**, who use the bots every day.
- **Several bots in parallel**, with load balancing and automatic creation of new bots.
- **A real-time web dashboard** to monitor and control all the bots.
- **Epic Games' authorization**, obtained after several direct exchanges.
- **A self-funded project** thanks to the Epic Games creator code (10% commission).
- **More than five years of maintenance**, with two rewrites: from Python to Node.js, then from standalone scripts to a Docker architecture.
- **Four languages**: French, English, Spanish and German.`
    },
    reflection: {
      fr: `C'est le projet qui m'a le plus appris en dehors des cours :

1. **Cinq ans d'évolution technique.** Chaque refonte répondait à un problème concret : Node.js pour les performances, PostgreSQL pour conserver les données, Socket.IO pour le temps réel, Docker pour le déploiement.
2. **Une communauté de plus de 8 500 membres.** J'ai appris à communiquer, à gérer les attentes, à choisir quoi développer d'après les retours, et à assumer un service que des gens utilisent tous les jours.
3. **Les échanges avec Epic Games.** Présenter mon projet à une grande entreprise et respecter ses conditions d'utilisation.
4. **La maintenance dans la durée.** Les API changent, les serveurs tombent, les besoins évoluent. C'est ce qui m'a donné le goût de l'automatisation : redémarrage automatique, répartition de charge, documentation.`,
      en: `This is the project that taught me the most outside school:

1. **Five years of technical change.** Each rewrite answered a concrete problem: Node.js for performance, PostgreSQL to keep data, Socket.IO for real time, Docker for deployment.
2. **A community of more than 8,500 members.** I learned to communicate, manage expectations, choose what to build from feedback, and take responsibility for a service people use every day.
3. **Talking with Epic Games.** Presenting my project to a large company and complying with its terms of use.
4. **Maintenance over time.** APIs change, servers go down, needs evolve. That is where my taste for automation comes from: automatic restarts, load balancing, documentation.`
    },
    cover: {
      word: { fr: "LobbyBot 2.0", en: "LobbyBot 2.0" },
      metric: { fr: "8 500+", en: "8,500+" },
      caption: { fr: "membres sur Discord", en: "Discord members" },
    },
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
    duration: { fr: "Deuxième année de BUT, sur toute l'année universitaire", en: "Second year of BUT, over the full academic year" },
    team: { fr: "Équipe de 4 étudiants", en: "Team of 4 students" },
    role: { fr: "Product Owner et développeur cryptographie : chiffrement ElGamal, preuve Zero Knowledge, chatbot et sécurisation des sockets", en: "Product Owner and cryptography developer: ElGamal encryption, zero-knowledge proof, chatbot and socket security" },
    shortDescription: {
      fr: "Application de vote sécurisée en Java et JavaFX, développée à quatre sur une année universitaire en Scrum. J'étais Product Owner et responsable de la cryptographie : chiffrement ElGamal et preuve Zero Knowledge non interactive.",
      en: "A secure voting application in Java and JavaFX, built by a team of four over a full academic year in Scrum. I was Product Owner and in charge of the cryptography: ElGamal encryption and a non-interactive zero-knowledge proof."
    },
    context: {
      fr: `Referendum est le projet de fin de deuxième année du BUT Informatique. Il a duré toute l'année universitaire et s'est déroulé en Scrum, dans des conditions proches de celles d'une entreprise.

Le sujet : une entreprise fictive veut faire voter ses employés de façon sécurisée. Nous devions concevoir une application de vote qui garantit la confidentialité des votes, l'intégrité des résultats et l'authentification des votants.

Nous étions quatre, et j'étais Product Owner : je tenais le backlog, je priorisais les fonctionnalités et je faisais le lien entre les besoins du client, joué par les enseignants, et l'équipe. J'avais aussi la partie cryptographie : le chiffrement ElGamal, imposé par le sujet, la sécurisation des échanges par sockets, la preuve Zero Knowledge non interactive qui vérifie les votes, et un chatbot de FAQ qui s'appuie sur l'API DeepSeek.

Le projet avançait par phases : des sprints avec des rendus réguliers, puis un nouveau contrat qui demandait d'améliorer l'application, puis de nouveaux sprints. Chaque phase comprenait une présentation orale devant le client, un dossier technique et une soutenance.`,
      en: `Referendum is the end-of-second-year project of the BUT in Computer Science. It lasted the whole academic year and was run in Scrum, in conditions close to those of a company.

The brief: a fictional company wants its employees to vote securely. We had to design a voting application that guarantees the confidentiality of votes, the integrity of results and the authentication of voters.

There were four of us, and I was Product Owner: I kept the backlog, prioritized features and was the link between the needs of the client, played by our teachers, and the team. I was also in charge of the cryptography: ElGamal encryption, required by the brief, securing socket communication, the non-interactive zero-knowledge proof that checks votes, and an FAQ chatbot built on the DeepSeek API.

The project moved in phases: sprints with regular deliveries, then a new contract asking us to improve the application, then more sprints. Each phase included an oral presentation to the client, a technical report and a defense.`
    },
    objectives: {
      fr: `1. **Application de vote** : créer des scrutins, voter de façon confidentielle et consulter les résultats, en Java avec une interface JavaFX.

2. **Chiffrement ElGamal** : garantir la confidentialité des votes avec le protocole imposé par le sujet. C'était ma partie principale.

3. **Preuve Zero Knowledge non interactive** : garantir que chaque vote vaut 0 ou 1 (oui ou non) sans révéler lequel. createZKProof crée la preuve côté client, verifyZKProof la vérifie côté serveur, en un seul échange.

4. **Chatbot de FAQ** : répondre aux questions fréquentes des utilisateurs. L'API DeepSeek sert uniquement à comprendre la question, pour renvoyer la réponse la plus proche parmi des réponses préparées à l'avance.

5. **Sockets sécurisés** : chiffrer les échanges entre le client et le serveur pour empêcher l'interception ou la modification des votes.

6. **Scrum** : sprints, rendus réguliers, rétrospectives, backlog priorisé et présentations au client.

7. **Documentation** : un dossier technique à chaque phase (architecture, choix techniques, diagrammes UML, tests).`,
      en: `1. **Voting application**: create ballots, vote confidentially and view results, in Java with a JavaFX interface.

2. **ElGamal encryption**: guarantee the confidentiality of votes with the protocol required by the brief. This was my main part.

3. **Non-interactive zero-knowledge proof**: guarantee that each vote is 0 or 1 (yes or no) without revealing which. createZKProof builds the proof on the client, verifyZKProof checks it on the server, in a single exchange.

4. **FAQ chatbot**: answer users' frequent questions. The DeepSeek API is only used to understand the question, so the application can return the closest answer among ones written in advance.

5. **Secure sockets**: encrypt exchanges between client and server to prevent votes from being intercepted or altered.

6. **Scrum**: sprints, regular deliveries, retrospectives, a prioritized backlog and presentations to the client.

7. **Documentation**: a technical report at each phase (architecture, technical choices, UML diagrams, tests).`
    },
    approach: {
      fr: `Le projet s'est déroulé en Scrum sur toute l'année. Comme Product Owner, j'organisais les sprint plannings, je tenais le backlog et je présentais la démo au client à la fin de chaque sprint. À la fin de chaque cycle, un nouveau contrat ajoutait des exigences, comme le ferait un vrai client.

L'application est écrite en Java avec une interface JavaFX. Ma partie principale était le chiffrement ElGamal, un système de cryptographie asymétrique. Chaque vote est chiffré avec la clé publique du scrutin avant d'être envoyé au serveur, et seul le détenteur de la clé privée peut déchiffrer les votes à la clôture. Personne, pas même le serveur, ne peut lire un vote avant la fin du scrutin.

**Preuve Zero Knowledge non interactive.** Elle prouve au serveur que le vote d'un client vaut bien 0 ou 1, sans révéler lequel. Un vote invalide, par exemple 10 ou un nombre négatif, est rejeté. Un seul échange suffit : la preuve part avec le message chiffré. Côté client, createZKProof génère deux preuves, une vraie et une simulée, à partir d'engagements cryptographiques, d'un haché SHA-256 et d'arithmétique modulaire. Côté serveur, verifyZKProof recalcule les valeurs et vérifie que la somme des challenges correspond au haché.

**Chatbot de FAQ.** J'ai intégré l'API DeepSeek pour comprendre la question de l'utilisateur. La réponse, elle, vient toujours d'une liste préparée à l'avance et limitée à l'application.

**Sockets.** Les échanges entre le client et le serveur sont chiffrés, pour empêcher une interception de type man-in-the-middle ou une modification des données en transit.

Le reste de l'équipe travaillait sur l'interface JavaFX, la gestion des utilisateurs, la base de données et la logique des scrutins. Nous relisions régulièrement le code des autres et tout passait par Git.`,
      en: `The project ran in Scrum for the whole year. As Product Owner, I organized sprint plannings, kept the backlog and presented the demo to the client at the end of each sprint. At the end of each cycle, a new contract added requirements, as a real client would.

The application is written in Java with a JavaFX interface. My main part was ElGamal encryption, an asymmetric cryptosystem. Each vote is encrypted with the ballot's public key before being sent to the server, and only the holder of the private key can decrypt the votes when the ballot closes. Nobody, not even the server, can read a vote before the end.

**Non-interactive zero-knowledge proof.** It proves to the server that a client's vote is indeed 0 or 1, without revealing which. An invalid vote, for example 10 or a negative number, is rejected. A single exchange is enough: the proof travels with the encrypted message. On the client, createZKProof generates two proofs, one real and one simulated, from cryptographic commitments, a SHA-256 hash and modular arithmetic. On the server, verifyZKProof recomputes the values and checks that the sum of the challenges matches the hash.

**FAQ chatbot.** I integrated the DeepSeek API to understand the user's question. The answer itself always comes from a list written in advance and limited to the application.

**Sockets.** Exchanges between client and server are encrypted, to prevent man-in-the-middle interception or changes to data in transit.

The rest of the team worked on the JavaFX interface, user management, the database and the ballot logic. We reviewed each other's code regularly and everything went through Git.`
    },
    architecture: {
      fr: `Application Java client-serveur :
- **Client JavaFX** : création de scrutins, vote et consultation des résultats.
- **Serveur Java** : gestion des scrutins, stockage des votes chiffrés, déchiffrement à la clôture.
- **ElGamal** : génération des clés, chiffrement côté client, déchiffrement côté serveur à la clôture.
- **Preuve Zero Knowledge** : createZKProof côté client et verifyZKProof côté serveur, dans la bibliothèque cryptographique.
- **Chatbot de FAQ** : compréhension de la question par l'API DeepSeek, réponses préparées à l'avance.
- **Sockets sécurisés** : échanges chiffrés entre le client et le serveur.`,
      en: `Client-server Java application:
- **JavaFX client**: creating ballots, voting and viewing results.
- **Java server**: ballot management, storage of encrypted votes, decryption at closing.
- **ElGamal**: key generation, encryption on the client, decryption on the server at closing.
- **Zero-knowledge proof**: createZKProof on the client and verifyZKProof on the server, in the cryptographic library.
- **FAQ chatbot**: question understood by the DeepSeek API, answers written in advance.
- **Secure sockets**: encrypted exchanges between client and server.`
    },
    skills: [
      {
        name: { fr: "Cryptographie ElGamal", en: "ElGamal cryptography" },
        description: { fr: "Génération de clés asymétriques, chiffrement et déchiffrement des votes, avec les bases mathématiques nécessaires (logarithme discret, arithmétique modulaire).", en: "Asymmetric key generation, encryption and decryption of votes, with the underlying mathematics (discrete logarithm, modular arithmetic)." }
      },
      {
        name: { fr: "Preuve Zero Knowledge non interactive", en: "Non-interactive zero-knowledge proof" },
        description: { fr: "Vérifier qu'un vote vaut 0 ou 1 sans révéler sa valeur, en un seul échange : engagements cryptographiques, haché SHA-256 et arithmétique modulaire.", en: "Checking that a vote is 0 or 1 without revealing its value, in a single exchange: cryptographic commitments, SHA-256 hash and modular arithmetic." }
      },
      {
        name: { fr: "Chatbot avec l'API DeepSeek", en: "Chatbot with the DeepSeek API" },
        description: { fr: "Chatbot de FAQ qui utilise l'API pour comprendre la question et répond à partir de réponses préparées, limitées à l'application.", en: "An FAQ chatbot that uses the API to understand the question and answers from prepared responses limited to the application." }
      },
      {
        name: { fr: "Sécurisation des sockets", en: "Socket security" },
        description: { fr: "Échanges client-serveur chiffrés via des sockets Java, contre l'interception et la modification des données en transit.", en: "Encrypted client-server exchanges over Java sockets, against interception and tampering in transit." }
      },
      {
        name: { fr: "Product Owner (Scrum)", en: "Product Owner (Scrum)" },
        description: { fr: "Backlog, priorisation, organisation des sprints, présentations au client et dossiers techniques. Le lien entre le besoin et l'équipe.", en: "Backlog, prioritization, sprint organization, client presentations and technical reports. The link between the need and the team." }
      },
      {
        name: { fr: "Java et JavaFX", en: "Java and JavaFX" },
        description: { fr: "Application de bureau en Java avec interface JavaFX, gestion d'événements et architecture client-serveur.", en: "A desktop application in Java with a JavaFX interface, event handling and a client-server architecture." }
      },
    ],
    codeHighlights: [
      {
        title: { fr: "Chiffrement ElGamal avec de grands nombres", en: "ElGamal encryption with large numbers" },
        code: `// Referendum : Chiffrement ElGamal en Java
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
          fr: "Chiffrement ElGamal en Java avec BigInteger. La génération de clés utilise un nombre premier p d'au moins 512 bits, un générateur g, une clé privée x aléatoire et une clé publique h = g^x mod p. Le chiffrement tire un k éphémère puis calcule c1 = g^k et c2 = m * h^k. La sécurité repose sur la difficulté du logarithme discret.",
          en: "ElGamal encryption in Java with BigInteger. Key generation uses a prime p of at least 512 bits, a generator g, a random private key x and a public key h = g^x mod p. Encryption draws an ephemeral k, then computes c1 = g^k and c2 = m * h^k. Security rests on the hardness of the discrete logarithm."
        }
      },
      {
        title: { fr: "Contrôleur JavaFX du vote chiffré", en: "JavaFX controller for encrypted voting" },
        code: `// Referendum : Controlleur JavaFX pour vote chiffre
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
          fr: "Ce contrôleur gère l'écran de vote. Le choix de l'utilisateur est converti en BigInteger puis chiffré avec ElGamal. Le texte chiffré (c1, c2) est affiché en hexadécimal et enregistré en base. Seul l'administrateur, qui détient la clé privée, peut déchiffrer les résultats.",
          en: "This controller handles the voting screen. The user's choice is converted to a BigInteger, then encrypted with ElGamal. The ciphertext (c1, c2) is displayed in hexadecimal and stored in the database. Only the administrator, who holds the private key, can decrypt the results."
        }
      }
    ],
    results: {
      fr: `- **Une application de vote qui fonctionne de bout en bout** : création de scrutins, vote confidentiel, résultats disponibles après la clôture.
- **Des votes illisibles en transit comme en base**, déchiffrés uniquement à la clôture du scrutin.
- **Une preuve Zero Knowledge en un seul échange** : le serveur rejette tout vote qui ne vaut pas 0 ou 1, sans jamais connaître sa valeur.
- **Un chatbot de FAQ** intégré à l'application.
- **Des échanges client-serveur chiffrés.**
- **Un projet tenu en Scrum toute l'année** : sprints, rendus, nouveaux contrats, présentations orales et dossiers techniques à chaque phase.`,
      en: `- **A voting application that works end to end**: creating ballots, confidential voting, results available after closing.
- **Votes unreadable in transit and in the database**, decrypted only when the ballot closes.
- **A zero-knowledge proof in a single exchange**: the server rejects any vote that is not 0 or 1, without ever knowing its value.
- **An FAQ chatbot** built into the application.
- **Encrypted client-server exchanges.**
- **A project run in Scrum all year**: sprints, deliveries, new contracts, oral presentations and technical reports at each phase.`
    },
    reflection: {
      fr: `C'est le projet de ma formation qui m'a le plus préparé au travail en entreprise :

1. **Product Owner.** Tenir un backlog, prioriser selon la valeur pour le client et présenter un produit : je n'aurais pas appris cela en restant seulement développeur.
2. **Cryptographie.** Je ne connaissais pas du tout le domaine. Comprendre les mathématiques (logarithme discret, arithmétique modulaire, SHA-256), implémenter un chiffrement asymétrique et concevoir une preuve non interactive m'a donné le goût de la sécurité et de la rigueur qu'elle demande.
3. **API d'IA.** J'ai appris à limiter le modèle à une tâche précise, comprendre la question, et à garder la main sur les réponses.
4. **La durée.** Sur une année, il faut entretenir la motivation, gérer la dette technique et s'adapter aux changements de périmètre à chaque contrat. Rien à voir avec un projet de quelques semaines.
5. **L'oral et l'écrit.** Les présentations et les dossiers m'ont appris à expliquer simplement des notions compliquées.`,
      en: `Of all my school projects, this is the one that prepared me best for working in a company:

1. **Product Owner.** Keeping a backlog, prioritizing by value for the client and presenting a product: I would not have learned that by staying a developer only.
2. **Cryptography.** I knew nothing about the field. Understanding the mathematics (discrete logarithm, modular arithmetic, SHA-256), implementing asymmetric encryption and designing a non-interactive proof gave me a taste for security and the rigor it requires.
3. **AI APIs.** I learned to limit the model to one precise task, understanding the question, and to keep control of the answers.
4. **Duration.** Over a year you have to keep motivation up, manage technical debt and adapt to scope changes with each contract. Nothing like a project of a few weeks.
5. **Speaking and writing.** The presentations and reports taught me to explain complicated ideas simply.`
    },
    cover: {
      word: { fr: "Referendum", en: "Referendum" },
      metric: { fr: "ElGamal + ZKP", en: "ElGamal + ZKP" },
      caption: { fr: "votes chiffrés et preuve Zero Knowledge", en: "encrypted votes and a zero-knowledge proof" },
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
      fr: "Jeu Unity réalisé en 48 heures à cinq pour la Code Game Jam 2026, sur le thème « Fête des Clics ». Le joueur est en soirée, téléphone en main, et gagne en résistant à l'envie de scroller.",
      en: "A Unity game made in 48 hours by a team of five for Code Game Jam 2026, on the theme \"Fête des Clics\" (Click Party). You are at a party, phone in hand, and you win by resisting the urge to scroll."
    },
    context: {
      fr: `La Code Game Jam est une compétition nationale de création de jeux vidéo. L'édition 2026 a duré 48 heures, du 22 au 24 janvier. Le sujet a été révélé en direct sur Twitch et notre équipe a fait son brainstorming sur Discord.

Le thème était « Fête des Clics ». Avec Golem Gang, notre équipe de cinq, nous avons créé **Scroll Party**, un jeu Unity qui joue sur les deux sens du thème : la fête, une soirée, et les clics, le scroll sur un téléphone façon TikTok.

Le joueur est en soirée et scrolle sur son téléphone. Des personnages viennent régulièrement lui parler. Il peut poser son téléphone pour répondre, ce qui remplit sa jauge de sociabilisation, ou continuer à scroller, ce qui remplit sa jauge de likes. Le jeu parle de l'addiction aux réseaux sociaux.`,
      en: `Code Game Jam is a national video game creation competition. The 2026 edition lasted 48 hours, from January 22 to 24. The theme was revealed live on Twitch and our team brainstormed on Discord.

The theme was "Fête des Clics" (Click Party). With Golem Gang, our team of five, we made **Scroll Party**, a Unity game that plays on both meanings of the theme: the party, an evening out, and the clicks, scrolling on a phone TikTok-style.

The player is at a party, scrolling on their phone. Characters regularly come up to talk. The player can put the phone down to answer, which fills the socializing gauge, or keep scrolling, which fills the likes gauge. The game is about social media addiction.`
    },
    objectives: {
      fr: `1. **Livrer un jeu jouable en 48 heures** sur Unity, autour du thème « Fête des Clics ».
2. **Deux jauges opposées** : les likes, quand on scrolle, et la sociabilisation, quand on parle aux personnages.
3. **Faire ressentir l'addiction** : des voix encouragent à continuer de scroller, jusqu'au « déclic » de poser son téléphone.
4. **Une ambiance sonore** : des musiques originales, publiées sur SoundCloud.`,
      en: `1. **Ship a playable game in 48 hours** on Unity, around the theme "Fête des Clics".
2. **Two opposing gauges**: likes, when you scroll, and socializing, when you talk to the characters.
3. **Make addiction felt**: voices urge you to keep scrolling, until the "déclic", the moment you put the phone down.
4. **A sound atmosphere**: original music, published on SoundCloud.`
    },
    approach: {
      fr: `Le jeu est développé sur Unity en C#. Nous nous sommes réparti les tâches sur Trello pour les 48 heures.

**Les mécaniques :**
- Le joueur est en soirée, téléphone en main, et fait défiler un fil façon TikTok.
- Des personnages viennent lui parler. Il peut poser son téléphone pour répondre, ou les ignorer et continuer.
- **Jauge de likes** : elle monte quand le joueur scrolle sans écouter. Des voix dans sa tête l'encouragent (« wow c'est trop bien », « continue »). À 100 %, il a perdu : son écran l'a complètement absorbé.
- **Jauge de sociabilisation** : elle monte quand le joueur pose son téléphone pour parler. L'écran se met à trembler et la vision devient floue, comme un manque. À 100 %, le joueur a le **déclic**, jeu de mots avec les « clics » du thème : il pose son téléphone pour de bon et profite de sa soirée. Il a gagné.

Pour gagner, il faut donc résister à l'envie de scroller, et c'est difficile, comme dans la vraie vie.`,
      en: `The game is built on Unity in C#. We split the tasks on Trello for the 48 hours.

**The mechanics:**
- The player is at a party, phone in hand, scrolling a TikTok-style feed.
- Characters come up to talk. The player can put the phone down to answer, or ignore them and carry on.
- **Likes gauge**: it rises when the player scrolls without listening. Voices in their head cheer them on ("wow, this is great", "keep going"). At 100%, the game is lost: the screen has swallowed them completely.
- **Socializing gauge**: it rises when the player puts the phone down to talk. The screen starts shaking and vision blurs, like withdrawal. At 100%, the player has the **déclic**, a French pun on the theme's "clics": they put the phone away for good and enjoy the party. They win.

So winning means resisting the urge to scroll, and that is hard, as it is in real life.`
    },
    architecture: {
      fr: `Jeu Unity réalisé en 48 heures :
- **Moteur** : Unity, scripts en C#.
- **Mécaniques** : deux jauges (likes et sociabilisation), personnages interactifs, effets visuels du manque (tremblement, flou).
- **Audio** : musiques originales publiées sur SoundCloud, voix intérieures qui poussent à scroller.
- **Organisation** : Trello pour répartir les tâches.`,
      en: `Unity game made in 48 hours:
- **Engine**: Unity, C# scripts.
- **Mechanics**: two gauges (likes and socializing), interactive characters, visual effects of withdrawal (shaking, blur).
- **Audio**: original music published on SoundCloud, inner voices pushing you to scroll.
- **Organization**: Trello to split the tasks.`
    },
    skills: [
      {
        name: { fr: "Unity et C#", en: "Unity and C#" },
        description: { fr: "Un jeu développé en 48 heures : mécaniques, système de jauges, effets visuels et intégration du son.", en: "A game built in 48 hours: mechanics, gauge system, visual effects and sound integration." }
      },
      {
        name: { fr: "Game design", en: "Game design" },
        description: { fr: "Deux jauges opposées pour parler de l'addiction aux réseaux sociaux, et une fin, le déclic, tirée du thème de la compétition.", en: "Two opposing gauges to talk about social media addiction, and an ending, the déclic, drawn from the competition's theme." }
      },
      {
        name: { fr: "Travail d'équipe en 48 heures", en: "Teamwork in 48 hours" },
        description: { fr: "À cinq, avec Trello pour répartir développement, game design, son et graphisme.", en: "Five of us, with Trello to split development, game design, sound and graphics." }
      },
    ],
    codeHighlights: [
      {
        title: { fr: "Les deux jauges de Scroll Party", en: "Scroll Party's two gauges" },
        code: `// Scroll Party : Systeme de jauges Unity C#
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
          fr: "Les jauges de sociabilisation et de likes évoluent selon les choix du joueur : parler aux personnages remplit la première, scroller remplit la seconde. Les deux redescendent toutes seules avec le temps, ce qui oblige à choisir en permanence. Quand une jauge atteint son maximum, la fin correspondante se déclenche.",
          en: "The socializing and likes gauges change with the player's choices: talking to characters fills the first, scrolling fills the second. Both drain over time, which forces constant choices. When a gauge reaches its maximum, the matching ending is triggered."
        }
      }
    ],
    results: {
      fr: `Scroll Party était jouable à la fin des 48 heures :

- **Les deux jauges, les personnages et les deux fins** : victoire par le déclic, défaite par l'addiction.
- **Les effets** : voix intérieures pendant le scroll, tremblements et vision floue quand on pose le téléphone.
- **Une bande-son originale**, publiée sur SoundCloud.

Le double sens du thème, la fête et le déclic, a servi de fil rouge du début à la fin.`,
      en: `Scroll Party was playable at the end of the 48 hours:

- **Both gauges, the characters and the two endings**: winning through the déclic, losing to addiction.
- **The effects**: inner voices while scrolling, shaking and blurred vision when the phone is put down.
- **An original soundtrack**, published on SoundCloud.

The double meaning of the theme, the party and the déclic, ran through the whole game.`
    },
    reflection: {
      fr: `C'était mon premier jeu vidéo. Sur Unity, il faut penser en boucle de jeu, en physique, en animations et en son, loin de ce que je fais d'habitude.

Le plus difficile a été de tirer une vraie idée de jeu du thème. Le déclic, où l'on gagne en arrêtant de jouer avec son téléphone, retourne la logique habituelle d'un jeu.

À cinq sur 48 heures, nous avons aussi appris à faire marcher les mécaniques de base avant de soigner l'image et le son.`,
      en: `It was my first video game. On Unity you have to think in terms of game loop, physics, animation and sound, far from what I usually do.

The hardest part was getting a real game idea out of the theme. The déclic, where you win by no longer playing with your phone, turns the usual logic of a game around.

With five of us and 48 hours, we also learned to get the core mechanics working before polishing visuals and sound.`
    },
    cover: {
      word: { fr: "Scroll Party", en: "Scroll Party" },
      metric: { fr: "48 h", en: "48 h" },
      caption: { fr: "pour créer un jeu Unity à cinq", en: "to build a Unity game as a team of five" },
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
    duration: { fr: "Décembre 2025 (une nuit)", en: "December 2025 (one night)" },
    team: { fr: "Équipe Golem Gang, 7 étudiants", en: "Golem Gang team, 7 students" },
    role: { fr: "Développeur : participation aux trois défis", en: "Developer: took part in all three challenges" },
    shortDescription: {
      fr: "Compétition nationale de développement en une nuit, sur le sujet « Comment les établissements scolaires peuvent tenir tête aux Big Tech ? ». À sept, nous avons livré un site sur le numérique responsable et trois défis : une extension Chrome de sécurité, un chatbot et un jeu à l'ergonomie volontairement frustrante.",
      en: "A national overnight development competition on the subject \"How can schools stand up to Big Tech?\". As a team of seven, we shipped a website about responsible digital technology and three challenges: a Chrome security extension, a chatbot and a deliberately frustrating usability game."
    },
    context: {
      fr: `La Nuit de l'Info est une compétition nationale qui réunit chaque année des étudiants en informatique de toute la France pendant une nuit entière, autour de défis proposés par des partenaires.

Le sujet de l'édition 2025 : « Comment les établissements scolaires peuvent tenir tête aux Big Tech ? ». Il invitait à réfléchir au numérique responsable et à l'indépendance numérique des écoles. En plus du sujet principal, nous avons relevé trois défis de partenaires.

Notre équipe, Golem Gang, comptait sept étudiants. En une nuit, nous avons livré un site interactif et les trois défis. Le site est écrit en TypeScript et hébergé sur GitHub Pages.`,
      en: `Nuit de l'Info is a national competition that brings together computer science students from all over France every year for a whole night, around challenges set by partners.

The 2025 subject: "How can schools stand up to Big Tech?". It invited us to think about responsible digital technology and the digital independence of schools. On top of the main subject, we took on three partner challenges.

Our team, Golem Gang, had seven students. In one night we shipped an interactive website and the three challenges. The site is written in TypeScript and hosted on GitHub Pages.`
    },
    objectives: {
      fr: `1. **Sujet principal** : un site interactif sur le numérique responsable, avec un simulateur d'empreinte numérique, un quiz et des badges à débloquer.
2. **Défi « La Ligue des Extensions »** : SafeLinks, une extension Chrome (Manifest V3) open source qui évalue la sécurité d'un lien avant le clic.
3. **Défi « Simplifier pour mieux vivre »** : le Password Game, un champ de saisie aux règles absurdes, joli mais volontairement pénible à utiliser.
4. **Défi chatbot « Chat'bruti »** : un chatbot drôle et inutilement philosophique, intégré au site.`,
      en: `1. **Main subject**: an interactive website about responsible digital technology, with a digital footprint simulator, a quiz and badges to unlock.
2. **"La Ligue des Extensions" challenge**: SafeLinks, an open source Chrome extension (Manifest V3) that assesses a link's safety before you click.
3. **"Simplifier pour mieux vivre" challenge**: the Password Game, an input field with absurd rules, pretty but deliberately painful to use.
4. **"Chat'bruti" chatbot challenge**: a funny and pointlessly philosophical chatbot, built into the site.`
    },
    approach: {
      fr: `Le site principal est écrit en TypeScript et hébergé sur GitHub Pages. Il regroupe plusieurs modules :

- **Simulateur d'empreinte numérique** : il calcule l'impact numérique de l'utilisateur et débloque des badges.
- **Quiz** : des questions sur le numérique responsable et la cybersécurité.
- **Password Game** : il faut créer un mot de passe en suivant des règles de plus en plus absurdes.

Pour le défi extension, nous avons développé **SafeLinks**, une extension Chrome Manifest V3 qui analyse les liens d'une page avant que l'utilisateur ne clique. Le code est public sur GitHub.

Pour le défi chatbot, nous avons créé **Chat'bruti**, accessible par un bouton en bas à droite du site.`,
      en: `The main site is written in TypeScript and hosted on GitHub Pages. It brings several modules together:

- **Digital footprint simulator**: it computes the user's digital impact and unlocks badges.
- **Quiz**: questions about responsible digital technology and cybersecurity.
- **Password Game**: you have to create a password by following increasingly absurd rules.

For the extension challenge we built **SafeLinks**, a Manifest V3 Chrome extension that analyzes the links on a page before the user clicks. The code is public on GitHub.

For the chatbot challenge we made **Chat'bruti**, reachable through a button at the bottom right of the site.`
    },
    architecture: {
      fr: `Plusieurs composants livrés en une nuit :
- **Site principal** : TypeScript, HTML et CSS, avec le simulateur, le quiz et le Password Game.
- **Extension Chrome SafeLinks** : Manifest V3, analyse de la sécurité des liens.
- **Chatbot Chat'bruti** : intégré au site.
- **Hébergement** : GitHub Pages.`,
      en: `Several components shipped in one night:
- **Main site**: TypeScript, HTML and CSS, with the simulator, the quiz and the Password Game.
- **SafeLinks Chrome extension**: Manifest V3, link safety analysis.
- **Chat'bruti chatbot**: built into the site.
- **Hosting**: GitHub Pages.`
    },
    skills: [
      {
        name: { fr: "Développer sous contrainte de temps", en: "Developing against the clock" },
        description: { fr: "Livrer en une nuit, prendre des décisions techniques rapides et avancer sur trois défis en parallèle.", en: "Shipping in one night, making quick technical decisions and moving forward on three challenges in parallel." }
      },
      {
        name: { fr: "Travail d'équipe intensif", en: "Intensive teamwork" },
        description: { fr: "À sept, répartition rapide des tâches sur trois défis et communication constante.", en: "Seven of us, tasks split quickly across three challenges and constant communication." }
      },
      {
        name: { fr: "Extension Chrome (Manifest V3)", en: "Chrome extension (Manifest V3)" },
        description: { fr: "Une extension open source au format Manifest V3 qui évalue la sécurité des liens.", en: "An open source extension in the Manifest V3 format that assesses the safety of links." }
      },
    ],
    codeHighlights: [
      {
        title: { fr: "SafeLinks : analyse de la sécurité des liens", en: "SafeLinks: link safety analysis" },
        code: `// SafeLinks : Chrome Extension Manifest V3
// content-script.ts : Analyse des liens sur la page

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
          fr: "Le content script de l'extension inspecte tous les liens de la page : présence du HTTPS, domaines suspects (motifs d'hameçonnage, extensions douteuses, adresses qui ressemblent à une IP) et URL anormalement longues. Les liens dangereux sont surlignés en rouge, avec une infobulle qui explique pourquoi.",
          en: "The extension's content script inspects every link on the page: HTTPS, suspicious domains (phishing patterns, dubious TLDs, IP-like addresses) and abnormally long URLs. Dangerous links are highlighted in red, with a tooltip explaining why."
        }
      }
    ],
    results: {
      fr: `Le site et les trois défis étaient en ligne à la fin de la nuit :

- **Le site principal** sur GitHub Pages, avec le simulateur d'empreinte numérique, le quiz et les badges.
- **SafeLinks**, l'extension Chrome, avec son code public sur GitHub.
- **Le Password Game**, joli et pénible à la fois, comme le demandait le défi.
- **Chat'bruti**, le chatbot, en bas à droite du site.`,
      en: `The site and the three challenges were online by the end of the night:

- **The main site** on GitHub Pages, with the digital footprint simulator, the quiz and the badges.
- **SafeLinks**, the Chrome extension, with its code public on GitHub.
- **The Password Game**, pretty and painful at once, as the challenge required.
- **Chat'bruti**, the chatbot, at the bottom right of the site.`
    },
    reflection: {
      fr: `En une nuit, il faut décider vite : repérer ce qui compte, se répartir le travail à sept et viser une première version qui marche pour chaque défi avant de l'améliorer.

Cette édition demandait aussi de changer de sujet sans cesse, d'une extension Chrome à un chatbot puis à un jeu d'ergonomie. J'y ai appris à entrer rapidement dans une technologie que je ne connaissais pas la veille.`,
      en: `In one night you have to decide fast: spot what matters, split the work between seven people and aim for a first working version of each challenge before improving it.

This edition also meant switching subjects constantly, from a Chrome extension to a chatbot to a usability game. I learned to get into a technology quickly that I did not know the day before.`
    },
    cover: {
      word: { fr: "Nuit de l'Info", en: "Nuit de l'Info" },
      metric: { fr: "1 nuit", en: "1 night" },
      caption: { fr: "un site et trois défis, à sept", en: "one website and three challenges, team of seven" },
    },
    thumbnail: "/images/ndi2025.webp",
    images: [],
    links: { live: "https://killianrms.github.io/NDI2025/", event: "https://www.nuitdelinfo.com" }
  },
  {
    slug: "application-sauvegarde",
    year: "2025",
    title: { fr: "Application de sauvegarde", en: "Backup application" },
    category: "university",
    shortDescription: {
      fr: "Système de sauvegarde automatique client-serveur en Python : versions conservées 30 jours, chiffrement AES-256-GCM, déduplication et interface web Flask pour restaurer un fichier.",
      en: "An automated client-server backup system in Python: versions kept for 30 days, AES-256-GCM encryption, deduplication and a Flask web interface to restore a file."
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
      fr: "Développeur principal : architecture, gestion des versions, chiffrement et interface web",
      en: "Lead developer: architecture, version management, encryption and web interface"
    },
    context: {
      fr: "Projet de BUT Informatique mené à quatre pendant trois mois. L'objectif : un système de sauvegarde qui protège les données contre les ransomwares et les erreurs de manipulation, avec 30 jours de rétention.",
      en: "A BUT in Computer Science project carried out by four students over three months. The goal: a backup system that protects data against ransomware and user mistakes, with 30 days of retention."
    },
    objectives: {
      fr: "Sauvegarder automatiquement les fichiers d'un poste vers un serveur, par SSH, en conservant leurs versions. Chaque fichier est compressé avec gzip (environ 70 % de réduction), dédupliqué grâce à son empreinte SHA-256 et chiffré en AES-256-GCM.",
      en: "Automatically back up a workstation's files to a server over SSH, keeping their versions. Each file is compressed with gzip (about 70% smaller), deduplicated using its SHA-256 hash and encrypted with AES-256-GCM."
    },
    approach: {
      fr: "Sur le client, un daemon surveille les fichiers avec watchdog et les envoie au serveur en SSH/SCP. Le serveur compresse, chiffre et déduplique chaque fichier, puis enregistre ses métadonnées dans SQLite. Une interface web Flask permet de suivre les sauvegardes et de restaurer une version.",
      en: "On the client, a daemon watches files with watchdog and sends them to the server over SSH/SCP. The server compresses, encrypts and deduplicates each file, then stores its metadata in SQLite. A Flask web interface lets you follow backups and restore a version."
    },
    architecture: {
      fr: `- **Client** : daemon watchdog, transferts SSH/SCP avec Paramiko.
- **Traitement** : process_file.py reçoit les fichiers, version_manager.py gère les versions et la déduplication, encryption.py le chiffrement AES-256-GCM.
- **Interface** : app.py (Flask) pour le tableau de bord, la restauration et l'API REST.
- **Stockage** : SQLite pour les métadonnées.
- **Exploitation** : un service systemd lance le tout automatiquement.`,
      en: `- **Client**: watchdog daemon, SSH/SCP transfers with Paramiko.
- **Processing**: process_file.py receives the files, version_manager.py handles versions and deduplication, encryption.py the AES-256-GCM encryption.
- **Interface**: app.py (Flask) for the dashboard, restoring and the REST API.
- **Storage**: SQLite for metadata.
- **Operation**: a systemd service starts everything automatically.`
    },
    skills: [
      {
        name: { fr: "Python et architecture système", en: "Python and system architecture" },
        description: { fr: "Architecture client-serveur avec un daemon watchdog, des transferts SSH/SCP via Paramiko et un service systemd.", en: "Client-server architecture with a watchdog daemon, SSH/SCP transfers through Paramiko and a systemd service." }
      },
      {
        name: { fr: "Cryptographie et sécurité", en: "Cryptography and security" },
        description: { fr: "Chiffrement AES-256-GCM avec dérivation de clé PBKDF2, compression gzip et déduplication par empreinte SHA-256.", en: "AES-256-GCM encryption with PBKDF2 key derivation, gzip compression and deduplication by SHA-256 hash." }
      },
      {
        name: { fr: "Flask et API REST", en: "Flask and REST API" },
        description: { fr: "Interface web avec tableau de bord en temps réel, API REST pour consulter et restaurer les versions, authentification.", en: "Web interface with a real-time dashboard, a REST API to browse and restore versions, authentication." }
      },
      {
        name: { fr: "SQLite", en: "SQLite" },
        description: { fr: "Métadonnées des versions avec horodatage et gestion de la rétention de 30 jours.", en: "Version metadata with timestamps and 30-day retention management." }
      },
    ],
    codeHighlights: [
      {
        title: { fr: "Gestion des versions : compression, chiffrement, déduplication", en: "Version management: compression, encryption, deduplication" },
        code: `# daemon-sauvegarde : Version Manager avec deduplication
class VersionManager:
    def save_version(self, file_path, relative_path, action='modified'):
        # 1. Calcul hash SHA256 du fichier
        file_hash = self._calculate_hash(file_path)
        file_size = os.path.getsize(file_path)

        # 2. Verification changement (compare avec version actuelle)
        current_hash = self._get_current_hash(relative_path)
        if current_hash == file_hash:
            return  # Fichier inchange, pas de nouvelle version

        # 3. Deduplication : verifier si hash existe deja
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
          fr: "Chaque fichier est haché en SHA-256 et comparé à la version courante, puis compressé avec gzip, chiffré en AES-256-GCM et stocké une seule fois : si la même empreinte existe déjà, le fichier est réutilisé. Les métadonnées sont enregistrées dans SQLite avec un horodatage, pour la rétention de 30 jours.",
          en: "Each file is hashed with SHA-256 and compared with the current version, then compressed with gzip, encrypted with AES-256-GCM and stored only once: if the same hash already exists, the file is reused. Metadata is recorded in SQLite with a timestamp, for the 30-day retention."
        }
      },
      {
        title: { fr: "API Flask de restauration", en: "Flask restore API" },
        code: `# daemon-sauvegarde : Flask Web Interface API
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
          fr: "GET /api/files/<path>/versions renvoie toutes les versions d'un fichier avec leurs métadonnées (horodatage, tailles, empreinte). POST /api/restore fait la restauration : lecture dans le stockage dédupliqué, déchiffrement AES-256-GCM, décompression gzip et écriture du fichier. L'interface web s'appuie sur ces deux routes pour restaurer un fichier à une date donnée.",
          en: "GET /api/files/<path>/versions returns every version of a file with its metadata (timestamp, sizes, hash). POST /api/restore does the restoring: reading from the deduplicated store, AES-256-GCM decryption, gzip decompression and writing the file. The web interface relies on these two routes to restore a file as it was at a given date."
        }
      }
    ],
    results: {
      fr: "Le système réduit l'espace disque de 80 à 90 % grâce à la compression gzip et à la déduplication. Il comprend un tableau de bord web en temps réel, une API REST, des tests automatiques d'intégrité et de restauration, et une rétention de 30 jours.",
      en: "The system cuts disk usage by 80 to 90% through gzip compression and deduplication. It includes a real-time web dashboard, a REST API, automated integrity and restore tests, and 30 days of retention."
    },
    reflection: {
      fr: "Ce projet m'a fait travailler l'architecture système, la sécurité (SSH, chiffrement) et l'optimisation du stockage. La gestion des versions avec rétention m'a surtout appris à penser à la restauration dès la conception, et à la tester.",
      en: "This project had me work on system architecture, security (SSH, encryption) and storage optimization. Managing versions with retention mostly taught me to think about restoring from the design stage, and to test it."
    },
    cover: {
      word: { fr: "Sauvegarde", en: "Backup" },
      metric: { fr: "80-90 %", en: "80-90%" },
      caption: { fr: "d'espace disque économisé", en: "of disk space saved" },
    },
    thumbnail: "/images/daemon-sauvegarde.webp",
    images: [],
    links: { github: "https://github.com/IUT-Blagnac/sae-3-01-devapp-2024-2025-g2a8" }
  },
];


/** What the home page list needs. Keeps the full write-ups out of the home bundle. */
export type ProjectSummary = Pick<
  Project,
  "slug" | "year" | "featured" | "title" | "category" | "technologies" | "shortDescription" | "cover"
>;

export const summarizeProject = ({ slug, year, featured, title, category, technologies, shortDescription, cover }: Project): ProjectSummary => ({
  slug,
  year,
  featured,
  title,
  category,
  technologies,
  shortDescription,
  cover,
});
