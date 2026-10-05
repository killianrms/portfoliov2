# Portfolio - Killian RAMUS

Portfolio personnel : élève-ingénieur DevOps à Polytech Montpellier, en alternance chez ITESOFT.

## Stack technique

- **Framework** : Next.js 16 (App Router), React 19
- **Langage** : TypeScript
- **Style** : Tailwind CSS 4, polices Archivo (variable, axe de largeur) et JetBrains Mono via `next/font`
- **Emails** : Resend (formulaire de contact)
- **Déploiement** : Vercel

## Fonctionnalités

- Bilingue : anglais sur `/`, français sur `/fr` (pages sous `src/app/[lang]`, les chemins racine sont réécrits vers `/en` dans `next.config.ts`), avec hreflang, canonical et sitemap bilingue
- Thème sombre/clair appliqué avant l'affichage (pas de flash, pas de remontage de l'app)
- Parcours présenté comme un pipeline CI/CD
- Pages projets pré-générées au build (`generateStaticParams`), code coloré côté serveur
- Image Open Graph générée au build (`src/app/opengraph-image.tsx`)
- Toutes les sections sont rendues côté serveur : rien n'attend un scroll pour s'afficher

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/           # Pages (App Router), API contact, image OG
  components/    # Sections et composants
  context/       # Langue, thème
  data/          # Projets, parcours, traductions
  lib/           # Utilitaires (âge, durée d'alternance)
public/
  images/        # Images des projets et photo
```

## CV

Les CV (`public/cv-en.pdf`, `public/cv-fr.pdf`, et `public/cv.pdf` = version anglaise) sont générés par `scripts/build_cv.py` (format simple lisible par les ATS). Modifier le contenu dans ce script puis :

```bash
pip install reportlab
python scripts/build_cv.py
```

## Contenu à mettre à jour

- `src/data/journey.ts` : formations (pipeline) et expériences
- `src/data/projects.ts` : fiches projets
- `src/data/translations.ts` : textes de l'interface

## Variables d'environnement (Vercel)

- `RESEND_API_KEY` : clé Resend pour le formulaire de contact
- `CONTACT_FROM` (optionnel) : expéditeur sur un domaine vérifié dans Resend, par ex. `Portfolio <contact@killianrms.com>`. Sans elle, l'adresse de test `onboarding@resend.dev` est utilisée.

## Déploiement

Déployé automatiquement sur Vercel : [killianrms.com](https://killianrms.com)
