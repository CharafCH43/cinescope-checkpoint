# CinéScope — Studio de Projet Final (Checkpoint GMC)

> **Application d'exploration cinématographique moderne, développée et déployée avec l'assistance d'outils d'Intelligence Artificielle.**

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vitejs.dev/)
[![Design](https://img.shields.io/badge/Design-Light%20Mode%20%7C%20Full%20Screen-059669.svg)](#principes-de-conception)
[![Localisation](https://img.shields.io/badge/Curateur-Charf%20Eddine%20%7C%20Mila%2C%20Alg%C3%A9rie-1e3a8a.svg)](#profil-utilisateur)

---

## Liens de Soumission du Checkpoint

- **Dépôt GitHub :** `https://github.com/<votre-nom-utilisateur>/cinescope`
- **Application Déployée (GitHub Pages) :** `https://<votre-nom-utilisateur>.github.io/cinescope/`

*(Remplacez `<votre-nom-utilisateur>` par votre identifiant GitHub après publication)*

---

## 1. À Propos du Projet

**CinéScope** est le projet final du parcours GMC, démontrant la capacité à concevoir, prototyper, coder, documenter et déployer une application web complète en exploitant la puissance des assistants d'IA générative.

L'application permet d'explorer un catalogue de films majeurs du cinéma contemporain, de visionner leurs bandes-annonces officielles en haute définition, de gérer une liste de visionnage personnelle (*Watchlist*) persistante et de consulter les carnets critiques tenus par **Charf Eddine** depuis **Mila, Algérie**.

### Principes de Conception :
- **Mode Clair Exclusif (Light Mode) :** Conçu avec un fond blanc pur (`#ffffff`), des surfaces subtiles (`#f8fafc`) et des typographies ardoise contrastées (`#0f172a`), évitant le piège des interfaces sombres stéréotypées.
- **Plein Écran Fluide (Full-Screen Layout) :** Affichage edge-to-edge tirant parti de toute la largeur de votre moniteur ou écran mobile, sans conteneur bridé à 1200px.
- **Zéro Émoji & 100% Icônes Vectorielles :** Toutes les actions utilisent des SVG optimisés et responsives pour un rendu d'une grande finesse visuelle.
- **Données Réelles & Authentiques :** Filmographie documentée avec synopsis officiels, réalisateurs, distribution d'acteurs, durées exactes et identifiants YouTube officiels.

---

## 2. Fonctionnalités Principales

1. **Catalogue Interactif & Recherche Multi-Critères :**
   - Filtrage instantané par genres cinématographiques (Science-Fiction, Drame, Action, Thriller, Historique, Crime).
   - Tri dynamique par note IMDb décroissante ou par année de sortie.
   - Barre de recherche instantanée analysant titres, réalisateurs et acteurs.

2. **Fiche Détaillée & Bande-Annonce (Modale Immersive) :**
   - Lecteur vidéo YouTube intégré au ratio 16:9.
   - Détails de production (réalisateur, casting complet, durée, notes critiques).
   - Carnet critique personnel de Charf Eddine avec note sur 10.

3. **Liste de Visionnage (Watchlist) Synchronisée :**
   - Ajout et retrait en un clic avec bouton marque-page.
   - Persistance automatique dans le `localStorage` du navigateur.
   - Compteur temps réel d'éléments dans la barre de navigation.

4. **Ciné-Club de Mila (Espace Communautaire) :**
   - Profil de cinéphile de Charf Eddine (Mila, Algérie).
   - Statistiques de visionnage (heures totales, note moyenne).
   - Formulaire fonctionnel d'ajout d'une nouvelle critique cinématographique.

5. **Spécifications & Guide Déploiement Intégrés :**
   - Onglet dédié consultable directement depuis l'application expliquant l'architecture logicielle et les prompts d'IA utilisés.

---

## 3. Technologies Utilisées

- **Frontend :** [React 19](https://react.dev/) (Hooks: `useState`, `useEffect`, `useMemo`)
- **Outillage & Build :** [Vite 8](https://vitejs.dev/) avec configuration de chemin relatif (`base: './'`)
- **Styles :** CSS3 Vanilla avec Design System sur-mesure (Variables CSS, Flexbox, Grid)
- **Multimédia :** Intégration YouTube IFrame API réactive
- **Stockage Local :** Web Storage API (`localStorage`)
- **Hébergement & Déploiement :** GitHub Pages

---

## 4. Installation et Lancement Local

### Prérequis :
- Node.js (version 18+ recommandée)
- npm ou pnpm

### Instructions :

1. **Cloner ou ouvrir le dossier du projet :**
   ```bash
   cd "G:\GMC Chekpoints\cinescope-checkpoint"
   ```

2. **Installer les dépendances (si nécessaire) :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement Vite :**
   ```bash
   npm run dev
   ```
   L'application sera accessible localement sur `http://localhost:5173/`.

4. **Générer le build de production :**
   ```bash
   npm run build
   ```
   Les fichiers compilés et optimisés pour le déploiement sont générés dans le dossier `dist/`.

---

## 5. Guide de Déploiement sur GitHub Pages (Étape par Étape)

Le projet est préconfiguré pour un déploiement direct et sans erreur sur GitHub Pages grâce au paramètre `base: './'` dans `vite.config.js`.

### Étape 1 : Initialiser le dépôt Git
Depuis le dossier `cinescope-checkpoint` dans votre terminal :
```bash
git init
git add .
git commit -m "feat: Déploiement initial CinéScope pour Charf Eddine (Mila)"
```

### Étape 2 : Connecter votre dépôt GitHub distant
Créez un nouveau dépôt public sur GitHub (nommé par exemple `cinescope`), puis liez-le :
```bash
git remote add origin https://github.com/<votre-nom-utilisateur>/cinescope.git
git branch -M main
git push -u origin main
```

### Étape 3 : Déployer le dossier de production sur GitHub Pages
Installez et exécutez l'outil `gh-pages` :
```bash
# Générer le dossier de build optimisé
npm run build

# Pousser la branche gh-pages automatiquement
npx gh-pages -d dist
```

### Étape 4 : Activer GitHub Pages dans votre dépôt
1. Rendez-vous sur votre dépôt GitHub : `https://github.com/<votre-nom-utilisateur>/cinescope`.
2. Cliquez sur l'onglet **Settings** &rarr; section **Pages** (dans le menu de gauche).
3. Sous **Build and deployment** / **Branch**, sélectionnez la branche `gh-pages` et le dossier `/(root)`.
4. Cliquez sur **Save**.
5. Après environ 1 à 2 minutes, votre application sera accessible en ligne à l'adresse :
   ```
   https://<votre-nom-utilisateur>.github.io/cinescope/
   ```

---

## 6. Documentation des Prompts IA & Méthodologie

Ce projet a été structuré et codé en synergie avec des modèles de raisonnement IA avancés :

- **Architecture & Spécification :** Conception de la structure modulaire des composants et du modèle de données (`moviesData.js`).
- **Design System Lumineux :** Élaboration des règles CSS assurant une lisibilité maximale en Mode Clair, sans artéfacts visuels générés par IA.
- **Intégration Vidéo & Modale :** Traitement de l'incorporation fluide des bandes-annonces YouTube avec ratio adaptatif.
- **Optimisation Déploiement :** Configuration automatique de `vite.config.js` (`base: './'`) garantissant la résolution de tous les assets relatifs lors de l'hébergement statique.

La spécification détaillée complète est consultable dans le fichier [PROJECT_SPECIFICATION.md](./PROJECT_SPECIFICATION.md).

---

## 7. Auteur

- **Créateur & Curateur :** Charf Eddine
- **Ville & Pays :** Mila, Algérie
- **Certification :** GoMyCode — Spécialisation Développement Web & IA
