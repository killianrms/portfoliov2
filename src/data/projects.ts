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
    title: "ITESOFT — Assistant Ingénieur Projet",
    category: "professional",
    technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "Jenkins", "PostgreSQL", "Git", "Jira", "SonarQube"],
    duration: { fr: "Septembre 2024 — Présent (Alternance)", en: "September 2024 — Present (Work-Study)" },
    team: { fr: "Équipe Projet de 8 personnes (développeurs, QA, chef de projet)", en: "Project team of 8 people (developers, QA, project manager)" },
    role: { fr: "Assistant Ingénieur Projet — Développement, tests et intégration continue", en: "Assistant Project Engineer — Development, testing and continuous integration" },
    shortDescription: {
      fr: "Alternance en tant qu'Assistant Ingénieur Projet dans une entreprise d'édition logicielle spécialisée dans la dématérialisation et l'automatisation des processus documentaires.",
      en: "Work-study program as Assistant Project Engineer in a software company specializing in dematerialization and document process automation."
    },
    context: {
      fr: `ITESOFT est un éditeur logiciel français leader dans le domaine de la dématérialisation et de l'automatisation des processus documentaires. L'entreprise propose des solutions de capture, de traitement et d'archivage de documents à destination des grandes entreprises et administrations publiques. Fondée en 1984, elle emploie plus de 200 collaborateurs et est cotée en bourse sur Euronext Growth.

Dans le cadre de mon alternance en BUT Informatique parcours « Réalisation d'applications : conception, développement, validation » à l'IUT de Montpellier-Sète, j'ai intégré l'équipe Projet en septembre 2024. Mon rôle consiste à participer activement au cycle de développement logiciel, de la conception à la mise en production, en passant par les phases de test et d'intégration continue.

L'environnement de travail est structuré autour de la méthodologie Agile Scrum, avec des sprints de deux semaines, des daily meetings quotidiens, et des rétrospectives régulières. Cette organisation m'a permis de comprendre les enjeux d'un développement logiciel professionnel à grande échelle, où la qualité du code, la traçabilité des modifications et la collaboration entre équipes sont primordiales.`,
      en: `ITESOFT is a leading French software company in the field of dematerialization and document process automation. The company offers document capture, processing, and archiving solutions for large enterprises and public administrations. Founded in 1984, it employs over 200 people and is listed on Euronext Growth.

As part of my work-study program in a Computer Science degree (specialization: "Application Development: Design, Development, Validation") at IUT Montpellier-Sète, I joined the Project team in September 2024. My role involves actively participating in the software development lifecycle, from design to production deployment, including testing and continuous integration phases.

The work environment is structured around Agile Scrum methodology, with two-week sprints, daily stand-up meetings, and regular retrospectives. This organization has allowed me to understand the challenges of large-scale professional software development, where code quality, change traceability, and cross-team collaboration are paramount.`
    },
    objectives: {
      fr: `Les objectifs principaux de ma mission chez ITESOFT sont multiples et s'articulent autour de trois axes :

1. **Développement et maintenance** : Contribuer au développement de nouvelles fonctionnalités et à la correction de bugs sur les produits existants, en respectant les normes de qualité et les conventions de code établies par l'équipe.

2. **Intégration et déploiement continus** : Participer à l'amélioration des pipelines CI/CD avec Jenkins, en automatisant les processus de build, de test et de déploiement sur les environnements Docker/Kubernetes.

3. **Assurance qualité** : Mettre en place et exécuter des tests unitaires et d'intégration, analyser la qualité du code avec SonarQube, et participer aux revues de code avec les développeurs seniors.`,
      en: `The main objectives of my mission at ITESOFT are multiple and revolve around three axes:

1. **Development and maintenance**: Contributing to the development of new features and bug fixes on existing products, following quality standards and code conventions established by the team.

2. **Continuous integration and deployment**: Participating in improving CI/CD pipelines with Jenkins, automating build, test, and deployment processes on Docker/Kubernetes environments.

3. **Quality assurance**: Setting up and executing unit and integration tests, analyzing code quality with SonarQube, and participating in code reviews with senior developers.`
    },
    approach: {
      fr: `L'approche technique adoptée chez ITESOFT repose sur une architecture microservices déployée sur Kubernetes. Chaque service est développé en Java avec le framework Spring Boot, ce qui permet une modularité et une scalabilité optimales.

Le workflow de développement suit un processus rigoureux : chaque fonctionnalité est développée sur une branche dédiée (feature branch), fait l'objet d'une pull request avec revue de code obligatoire par au moins un développeur senior, puis est intégrée dans la branche principale après validation des tests automatisés.

La conteneurisation avec Docker permet de garantir la reproductibilité des environnements de développement, de test et de production. Les images Docker sont construites automatiquement par Jenkins à chaque push sur le dépôt Git, puis déployées sur le cluster Kubernetes de staging pour validation avant mise en production.

J'ai également travaillé sur l'optimisation des requêtes PostgreSQL, en analysant les plans d'exécution et en mettant en place des index appropriés pour améliorer les performances des requêtes les plus critiques. Cette expérience m'a permis de comprendre l'importance de l'optimisation des bases de données dans un contexte de production à fort volume.`,
      en: `The technical approach at ITESOFT is based on a microservices architecture deployed on Kubernetes. Each service is developed in Java with the Spring Boot framework, enabling optimal modularity and scalability.

The development workflow follows a rigorous process: each feature is developed on a dedicated branch (feature branch), undergoes a pull request with mandatory code review by at least one senior developer, then is integrated into the main branch after automated test validation.

Containerization with Docker ensures reproducibility of development, test, and production environments. Docker images are automatically built by Jenkins on each push to the Git repository, then deployed to the Kubernetes staging cluster for validation before production deployment.

I also worked on PostgreSQL query optimization, analyzing execution plans and implementing appropriate indexes to improve the performance of the most critical queries. This experience helped me understand the importance of database optimization in a high-volume production context.`
    },
    architecture: {
      fr: `L'architecture globale du système ITESOFT suit le pattern microservices avec les composants suivants :

- **API Gateway** : Point d'entrée unique pour toutes les requêtes clients, gestion du routage et de l'authentification.
- **Services métier** : Chaque domaine fonctionnel (capture, traitement OCR, workflow, archivage) est encapsulé dans un microservice indépendant.
- **Message Broker** : Communication asynchrone entre services via un système de messaging (file d'attente).
- **Base de données** : Chaque service possède sa propre base PostgreSQL, garantissant l'isolation des données.
- **Orchestration** : Kubernetes gère le déploiement, la mise à l'échelle automatique et la haute disponibilité des services.

Cette architecture m'a permis de comprendre les avantages et les défis des systèmes distribués : la complexité de la gestion des transactions distribuées, l'importance du monitoring et de l'observabilité, ainsi que les stratégies de résilience (circuit breaker, retry, fallback).`,
      en: `The overall ITESOFT system architecture follows the microservices pattern with the following components:

- **API Gateway**: Single entry point for all client requests, handling routing and authentication.
- **Business Services**: Each functional domain (capture, OCR processing, workflow, archiving) is encapsulated in an independent microservice.
- **Message Broker**: Asynchronous communication between services via a messaging system (queue).
- **Database**: Each service has its own PostgreSQL database, ensuring data isolation.
- **Orchestration**: Kubernetes manages deployment, auto-scaling, and high availability of services.

This architecture allowed me to understand the advantages and challenges of distributed systems: the complexity of distributed transaction management, the importance of monitoring and observability, and resilience strategies (circuit breaker, retry, fallback).`
    },
    skills: [
      {
        name: { fr: "Développement Java / Spring Boot", en: "Java / Spring Boot Development" },
        description: { fr: "Conception et développement de services REST avec Spring Boot, utilisation des annotations, injection de dépendances, gestion des transactions et sécurité avec Spring Security.", en: "Design and development of REST services with Spring Boot, using annotations, dependency injection, transaction management, and security with Spring Security." }
      },
      {
        name: { fr: "DevOps & CI/CD", en: "DevOps & CI/CD" },
        description: { fr: "Mise en place et maintenance de pipelines Jenkins, écriture de Dockerfiles et manifestes Kubernetes, automatisation des tests et déploiements.", en: "Setup and maintenance of Jenkins pipelines, writing Dockerfiles and Kubernetes manifests, automating tests and deployments." }
      },
      {
        name: { fr: "Base de données & SQL", en: "Database & SQL" },
        description: { fr: "Optimisation de requêtes SQL complexes, analyse de plans d'exécution, création d'index, modélisation de données relationnelles avec PostgreSQL.", en: "Optimization of complex SQL queries, execution plan analysis, index creation, relational data modeling with PostgreSQL." }
      },
      {
        name: { fr: "Méthodologie Agile", en: "Agile Methodology" },
        description: { fr: "Participation active aux cérémonies Scrum (daily, sprint planning, rétrospective), utilisation de Jira pour le suivi des tâches et la gestion du backlog.", en: "Active participation in Scrum ceremonies (daily, sprint planning, retrospective), using Jira for task tracking and backlog management." }
      },
      {
        name: { fr: "Qualité logicielle", en: "Software Quality" },
        description: { fr: "Rédaction de tests unitaires et d'intégration, analyse statique avec SonarQube, revue de code, respect des principes SOLID et des design patterns.", en: "Writing unit and integration tests, static analysis with SonarQube, code review, adherence to SOLID principles and design patterns." }
      }
    ],
    codeHighlights: [
      {
        title: { fr: "Exemple de service REST Spring Boot", en: "Spring Boot REST Service Example" },
        code: `@RestController
@RequestMapping("/api/documents")
public class DocumentController {

    private final DocumentService documentService;

    @Autowired
    public DocumentController(DocumentService documentService) {
        this.documentService = documentService;
    }

    @PostMapping("/process")
    public ResponseEntity<ProcessingResult> processDocument(
            @RequestBody @Valid DocumentRequest request) {
        ProcessingResult result = documentService.process(request);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/{id}/status")
    public ResponseEntity<DocumentStatus> getStatus(
            @PathVariable Long id) {
        return documentService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}`,
        language: "java",
        explanation: {
          fr: "Ce contrôleur REST illustre l'architecture que j'ai mise en place pour le traitement des documents. L'injection de dépendances via @Autowired permet de découpler le contrôleur du service métier. La validation des requêtes est assurée par l'annotation @Valid, et la gestion des réponses HTTP suit les bonnes pratiques REST avec les codes de statut appropriés.",
          en: "This REST controller illustrates the architecture I implemented for document processing. Dependency injection via @Autowired decouples the controller from the business service. Request validation is ensured by the @Valid annotation, and HTTP response handling follows REST best practices with appropriate status codes."
        }
      },
      {
        title: { fr: "Pipeline Jenkins CI/CD", en: "Jenkins CI/CD Pipeline" },
        code: `pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
                junit 'target/surefire-reports/*.xml'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'mvn sonar:sonar'
                }
            }
        }
        stage('Docker Build & Push') {
            steps {
                script {
                    def image = docker.build("itesoft/service:\${env.BUILD_NUMBER}")
                    docker.withRegistry('https://registry.itesoft.com') {
                        image.push()
                        image.push('latest')
                    }
                }
            }
        }
        stage('Deploy to Staging') {
            steps {
                sh 'kubectl apply -f k8s/staging/'
            }
        }
    }
}`,
        language: "groovy",
        explanation: {
          fr: "Ce pipeline Jenkins que j'ai contribué à mettre en place automatise l'ensemble du cycle de livraison. Chaque commit déclenche automatiquement la compilation, l'exécution des tests, l'analyse de qualité SonarQube, la construction de l'image Docker et le déploiement sur l'environnement de staging. Cette automatisation a permis de réduire significativement les erreurs de déploiement et d'accélérer le cycle de livraison.",
          en: "This Jenkins pipeline I helped set up automates the entire delivery cycle. Each commit automatically triggers compilation, test execution, SonarQube quality analysis, Docker image building, and deployment to the staging environment. This automation significantly reduced deployment errors and accelerated the delivery cycle."
        }
      }
    ],
    results: {
      fr: `Mon expérience chez ITESOFT a été extrêmement formatrice et m'a permis d'atteindre des résultats concrets :

- **Amélioration des pipelines CI/CD** : Réduction du temps de build de 30% grâce à l'optimisation des étapes de compilation et à la mise en cache des dépendances Maven.
- **Qualité du code** : Contribution à l'augmentation de la couverture de tests de 65% à 78% sur les services dont j'avais la charge.
- **Optimisation base de données** : Amélioration des temps de réponse de certaines requêtes critiques de 40% grâce à l'ajout d'index et à la réécriture de requêtes SQL.
- **Documentation** : Rédaction de documentation technique pour les nouveaux arrivants, facilitant l'onboarding de deux nouveaux développeurs.

Cette alternance m'a permis de confronter mes connaissances théoriques acquises en formation avec la réalité du terrain professionnel. J'ai pu mesurer l'importance de la communication au sein d'une équipe de développement, la rigueur nécessaire dans la gestion du code source, et la valeur ajoutée de l'automatisation dans le processus de développement logiciel.`,
      en: `My experience at ITESOFT has been extremely educational and allowed me to achieve concrete results:

- **CI/CD pipeline improvement**: 30% reduction in build time through optimization of compilation steps and Maven dependency caching.
- **Code quality**: Contribution to increasing test coverage from 65% to 78% on the services I was responsible for.
- **Database optimization**: 40% improvement in response times for certain critical queries through index addition and SQL query rewriting.
- **Documentation**: Writing technical documentation for newcomers, facilitating the onboarding of two new developers.

This work-study program allowed me to confront theoretical knowledge acquired in training with professional reality. I was able to measure the importance of communication within a development team, the rigor required in source code management, and the added value of automation in the software development process.`
    },
    reflection: {
      fr: `Cette expérience professionnelle chez ITESOFT constitue un tournant majeur dans mon parcours de formation. Elle m'a permis de passer d'un niveau de compétence essentiellement académique à une véritable pratique professionnelle du développement logiciel.

Les principaux apprentissages que je retiens sont :

1. **La complexité des systèmes distribués** : Travailler sur une architecture microservices m'a fait comprendre que la distribution d'un système apporte certes de la flexibilité, mais aussi une complexité significative en termes de débogage, de monitoring et de gestion des erreurs.

2. **L'importance des bonnes pratiques** : Les revues de code, les conventions de nommage, la documentation du code — ces pratiques qui peuvent sembler contraignantes dans un contexte académique prennent tout leur sens lorsqu'on travaille à plusieurs sur un même projet pendant des mois.

3. **La communication technique** : Savoir expliquer un choix technique, argumenter sur une solution architecturale, ou documenter un processus sont des compétences tout aussi importantes que le code lui-même.

4. **La gestion du temps et des priorités** : Dans un contexte agile, il faut savoir estimer la complexité des tâches, communiquer sur les obstacles et adapter son travail aux priorités du sprint.

Si c'était à refaire, j'aurais aimé investir plus de temps dans la compréhension approfondie de Kubernetes dès le début de mon alternance, car c'est une technologie centrale dans l'infrastructure d'ITESOFT et sa maîtrise ouvre de nombreuses portes.`,
      en: `This professional experience at ITESOFT represents a major turning point in my educational journey. It allowed me to transition from an essentially academic skill level to genuine professional software development practice.

The main learnings I take away are:

1. **The complexity of distributed systems**: Working on a microservices architecture made me understand that system distribution brings flexibility but also significant complexity in terms of debugging, monitoring, and error management.

2. **The importance of best practices**: Code reviews, naming conventions, code documentation — these practices that may seem constraining in an academic context become fully meaningful when working as a team on the same project for months.

3. **Technical communication**: Knowing how to explain a technical choice, argue for an architectural solution, or document a process are skills just as important as the code itself.

4. **Time and priority management**: In an agile context, you need to know how to estimate task complexity, communicate about obstacles, and adapt your work to sprint priorities.

If I could do it over, I would have liked to invest more time in deeply understanding Kubernetes from the start of my work-study, as it's a central technology in ITESOFT's infrastructure and mastering it opens many doors.`
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
