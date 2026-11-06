# Spécification de Projet : CinéScope

**Checkpoint GoMyCode** : *Studio de projet final – Créez et déployez avec l’IA*  
**Auteur & Administrateur** : Charf Eddine  
**Localisation** : Mila, Algérie  
**Projet sélectionné** : Application cinéma (Cartes interactives, Bandes-annonces & Ciné-Club)  
**Version** : 1.0.0 (Production)  

---

## 1. Vue d'Ensemble du Projet

**CinéScope** est une plateforme web moderne et épurée d'exploration cinématographique, conçue pour valoriser le cinéma contemporain, d'auteur et les œuvres majeures de science-fiction et de thriller.

L'application a été élaborée à l'aide d'outils d'intelligence artificielle générative pour concevoir l'architecture, formuler les composants React et élaborer une expérience utilisateur sur mesure, en rupture totale avec les designs génériques d'IA.

### Principes directeurs de l'UI/UX :
1. **Mode Clair Lumineux (Strict Light Theme) :** Finis les thèmes sombres interchangeables. L'interface utilise une palette blanche éclatante, des tons ardoise profonds (`#0f172a`), des bordures fines (`#e2e8f0`) et des accents saphir et ambre.
2. **Plein Écran Fluide (Full-Screen Edge-to-Edge) :** Aucun conteneur étroit arbitraire à 1200px. L'affichage s'étend naturellement sur toute la largeur de l'écran avec une grille adaptative.
3. **Zéro Émoji & Iconographie Vectorielle SVG :** Tous les marqueurs visuels sont assurés par des icônes SVG strictes, assurant une esthétique professionnelle et soignée.
4. **Données Authentiques :** Profil cinéphile réel de **Charf Eddine** basé à **Mila, Algérie**, avec ses notes personnelles, critiques rédigées et coups de cœur.

---

## 2. Fonctionnalités & Spécifications Métier

| Module | Fonctionnalités Clés | État |
| :--- | :--- | :--- |
| **Catalogue & Filtres** | Filtre instantané par genre (Tous, Sci-Fi, Drame, Action, Thriller, etc.), tri par note ou année, recherche multi-critères (titre, réalisateur, acteur). | Implémenté & Vérifié |
| **Fiches Détaillées (Modal)** | Affichage plein écran avec image d'arrière-plan, durée, note IMDb, note critique Charf, synopsis complet, liste des acteurs et lecteur vidéo YouTube intégré. | Implémenté & Vérifié |
| **Ma Liste (Watchlist)** | Ajout/retrait instantané d'un film en un clic, persistance locale automatique via `localStorage`, compteur d'articles dans la barre de navigation. | Implémenté & Vérifié |
| **Ciné-Club de Mila** | Espace communautaire et critique animé par Charf Eddine. Métriques de visionnage (heures totales, note moyenne), manifeste éditorial et formulaire d'ajout d'une note critique. | Implémenté & Vérifié |
| **Spécifications & Déploiement** | Onglet dédié intégré dans l'application avec le guide complet de déploiement GitHub Pages étape par étape. | Implémenté & Vérifié |

---

## 3. Architecture Logicielle & Choix Techniques

```
cinescope-checkpoint/
├── index.html                  # Point d'entrée HTML5
├── package.json                # Dépendances (React 19, Vite 8)
├── vite.config.js              # Configuration base relative: './' pour GitHub Pages
├── PROJECT_SPECIFICATION.md    # Cahier des charges & spécifications
├── README.md                   # Guide de démarrage et déploiement
└── src/
    ├── main.jsx                # Bootstrap React 19 StrictMode
    ├── App.jsx                 # État global, navigation et layout
    ├── index.css               # Design System complet Mode Clair
    ├── types/                  # Définitions des types métier
    ├── data/
    │   └── moviesData.js       # Données réelles, critiques et profil de Charf Eddine
    └── components/
        ├── Icons.jsx           # Composants vectoriels SVG (0 émoji)
        ├── Navbar.jsx          # Barre de recherche & navigation persistante
        ├── MovieCard.jsx       # Carte film avec micro-interactions
        ├── MovieGrid.jsx       # Grille responsive avec filtres et tris
        ├── MovieModal.jsx      # Modale immersive & lecteur bande-annonce
        ├── WatchlistView.jsx   # Vue liste de visionnage avec LocalStorage
        ├── CharfClubView.jsx   # Espace Ciné-Club Charf Eddine (Mila)
        └── ProjectSpecsView.jsx# Vue interactive des spécifications
```

### Justification de la Stack :
- **React 19 & Hooks :** Gestion d'état déclarative avec `useState`, `useEffect` et `useMemo` pour le filtrage en temps réel sans latence.
- **Vite 8 :** Compilation et bundling ultra-rapide (build statique en moins de 160ms).
- **CSS Vanilla Moderne :** Variables CSS, Flexbox et CSS Grid garantissant une absence totale de dépendances lourdes ou de classes CSS superflues.
- **Configuration `base: './'` :** Permet un déploiement direct et sans faille sur n'importe quel sous-dossier de GitHub Pages (`https://<username>.github.io/<repo>/`).

---

## 4. Journal de Prompting IA & Méthodologie

Le développement de ce projet a reposé sur une méthode itérative d'ingénierie de prompts en 4 phases :

### Phase 1 : Spécification & Modélisation
> **Prompt IA :** *"Génère une spécification de projet pour une application de cinéma React intitulée CinéScope. Le projet doit refléter le profil cinéphile de Charf Eddine, résidant à Mila en Algérie. Les données doivent inclure des films récents et acclamés (Oppenheimer, Dune 2, Interstellar...) avec critiques personnalisées et notes sur 10. Assure une compatibilité parfaite avec GitHub Pages."*

### Phase 2 : Design System & Expérience Utilisateur
> **Prompt IA :** *"Crée un Design System CSS complet en Mode Clair pur (Light Mode). Pas de fond noir. Pas d'émojis, uniquement des icônes SVG précises. Disposition fluide plein écran (full-screen fluid layout). Prévois des micro-interactions soignées (hover avec surélévation, badge de note, modale avec flou d'arrière-plan)."*

### Phase 3 : Logique Applicative & Persistance
> **Prompt IA :** *"Développe les composants React avec gestion d'état locale et synchronisation de la Watchlist dans le localStorage. Intègre un lecteur de bande-annonce YouTube réactif au ratio 16:9 sans blocage de navigation."*

### Phase 4 : Optimisation du Déploiement
> **Prompt IA :** *"Configure Vite avec `base: './'` pour que les chemins d'assets générés dans dist soient relatifs et s'affichent correctement sur GitHub Pages sans erreur 404 sur les scripts ou styles."*

---

## 5. Protocole de Validation & Tests

1. **Compilation Statique :** Exécution de `npx vite build` &rarr; Succès en 152 ms, 0 avertissements de bundle.
2. **Recherche & Filtrage :** Test de filtrage par genre (ex: 'Science-Fiction') et par mot-clé (ex: 'Nolan', 'Zendaya') &rarr; Filtrage instantané via `useMemo`.
3. **Persistance Watchlist :** Ajout d'un film &rarr; Rechargement de page &rarr; Le film reste présent dans la liste grâce à `localStorage`.
4. **Lecteur Vidéo :** Ouverture de la fiche Oppenheimer &rarr; La vidéo YouTube officielle se charge dans la modale réactive.
5. **Ergonomie Mobile & Desktop :** Adaptation fluide des colonnes de cartes de 1 à 4 colonnes selon la largeur du viewport.

