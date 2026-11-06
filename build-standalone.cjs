const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

const htmlContent = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CinéScope — Explorateur de Films & Sélections de Charf Eddine</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='2'><rect x='2' y='2' width='20' height='20' rx='2.18' ry='2.18'></rect><line x1='7' y1='2' x2='7' y2='22'></line><line x1='17' y1='2' x2='17' y2='22'></line><line x1='2' y1='12' x2='22' y2='12'></line></svg>" />
  <style>
${cssContent}
  </style>
</head>
<body>
  <div class="app-shell" id="app">
    <!-- Navbar -->
    <header class="navbar-root">
      <div class="navbar-container">
        <!-- Brand -->
        <div class="navbar-brand-section">
          <button class="brand-button" id="brand-btn" title="Retour au Catalogue">
            <div class="brand-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="2" y1="7" x2="7" y2="7"></line>
                <line x1="2" y1="17" x2="7" y2="17"></line>
                <line x1="17" y1="17" x2="22" y2="17"></line>
                <line x1="17" y1="7" x2="22" y2="7"></line>
              </svg>
            </div>
            <div class="brand-text-block">
              <h1 class="brand-title">CinéScope</h1>
              <span class="brand-tagline">Explorateur Cinéma & Sélections de Charf</span>
            </div>
          </button>
        </div>

        <!-- Global Search -->
        <div class="navbar-search-wrapper">
          <svg class="search-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            id="search-input"
            class="search-field-input"
            placeholder="Rechercher un film, réalisateur, acteur (Nolan, Dune, DiCaprio...)"
          />
          <button type="button" id="clear-search-btn" class="search-clear-btn" style="display: none;" title="Effacer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Navigation Tabs -->
        <nav class="navbar-nav-group">
          <button type="button" class="nav-link-btn is-active" data-tab="catalog">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <line x1="7" y1="2" x2="7" y2="22"></line>
              <line x1="17" y1="2" x2="17" y2="22"></line>
              <line x1="2" y1="12" x2="22" y2="12"></line>
            </svg>
            <span>Catalogue</span>
          </button>
          <button type="button" class="nav-link-btn" data-tab="watchlist">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>À Voir</span>
            <span class="nav-badge" id="watchlist-nav-badge">3</span>
          </button>
          <button type="button" class="nav-link-btn" data-tab="club">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Ciné-Club Mila</span>
          </button>
          <button type="button" class="nav-link-btn btn-specs" data-tab="specs">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
            </svg>
            <span>Spécification & IA</span>
          </button>
        </nav>

        <!-- User Chip -->
        <div class="navbar-user-chip" id="user-chip-btn" role="button" tabindex="0" title="Profil de Charf Eddine (Mila)">
          <div class="user-avatar-initials">CE</div>
          <div class="user-chip-text">
            <span class="user-chip-name">Charf Eddine</span>
            <span class="user-chip-city">Mila, Algérie</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="app-main-content">
      <!-- TAB 1: CATALOGUE -->
      <div id="tab-catalog" class="tab-pane">
        <!-- Hero Strip -->
        <section class="catalog-hero-strip">
          <div class="hero-text-container">
            <div class="hero-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              </svg>
              <span>Sélection Cinéphile Exclusive</span>
            </div>
            <h1 class="hero-heading">Explorez les chefs-d'œuvre du cinéma contemporain</h1>
            <p class="hero-lead">
              Fiches analytiques complètes, bandes-annonces haute définition et carnet critique
              tenu par <strong>Charf Eddine</strong> depuis <strong>Mila, Algérie</strong>.
            </p>
          </div>
          <div class="hero-metrics-pill-group">
            <div class="metric-pill">
              <span class="metric-val" id="count-films">8</span>
              <span class="metric-txt">Films analysés</span>
            </div>
            <div class="metric-pill">
              <span class="metric-val">8.8/10</span>
              <span class="metric-txt">Score IMDb moyen</span>
            </div>
            <div class="metric-pill">
              <span class="metric-val" id="count-watchlist-hero">3</span>
              <span class="metric-txt">Dans votre liste</span>
            </div>
          </div>
        </section>

        <!-- Filters & Toolbar -->
        <div class="movie-grid-section">
          <div class="grid-filter-toolbar">
            <div class="genres-scroll-bar" id="genre-filters-bar">
              <button type="button" class="genre-filter-pill is-active" data-genre="Tous">Tous les genres</button>
              <button type="button" class="genre-filter-pill" data-genre="Science-Fiction">Science-Fiction</button>
              <button type="button" class="genre-filter-pill" data-genre="Drame">Drame</button>
              <button type="button" class="genre-filter-pill" data-genre="Thriller">Thriller</button>
              <button type="button" class="genre-filter-pill" data-genre="Historique">Historique</button>
              <button type="button" class="genre-filter-pill" data-genre="Aventure">Aventure</button>
              <button type="button" class="genre-filter-pill" data-genre="Action">Action</button>
              <button type="button" class="genre-filter-pill" data-genre="Policier">Policier</button>
            </div>
            <div class="sort-select-wrapper">
              <label for="sort-dropdown">Trier :</label>
              <select id="sort-dropdown" class="sort-select">
                <option value="rating_desc">Mieux notés (IMDb)</option>
                <option value="year_desc">Plus récents</option>
                <option value="duration_desc">Durée (Décroissante)</option>
              </select>
            </div>
          </div>

          <!-- Cards Grid -->
          <div class="cards-grid" id="movies-grid"></div>
        </div>
      </div>

      <!-- TAB 2: WATCHLIST -->
      <div id="tab-watchlist" class="tab-pane" style="display: none;">
        <div class="watchlist-view-layout">
          <div class="watchlist-header-bar">
            <div>
              <h2 class="view-title">Ma Liste de Visionnage (Watchlist)</h2>
              <p class="view-subtitle" id="watchlist-subtitle">Films enregistrés pour vos prochaines séances de cinéma.</p>
            </div>
            <button type="button" class="btn-discover-more" id="btn-watchlist-discover">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
              </svg>
              <span>Explorer le catalogue</span>
            </button>
          </div>
          <div class="cards-grid" id="watchlist-grid"></div>
          <div class="empty-watchlist-card" id="empty-watchlist-msg" style="display: none;">
            <div class="empty-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 class="empty-title">Votre liste de visionnage est vide</h3>
            <p class="empty-desc">Parcourez le catalogue et cliquez sur l'icône marque-page pour ajouter des films à votre sélection personnelle.</p>
            <button type="button" class="btn-primary" id="btn-empty-explore">Découvrir les films</button>
          </div>
        </div>
      </div>

      <!-- TAB 3: CINÉ-CLUB MILA -->
      <div id="tab-club" class="tab-pane" style="display: none;">
        <div class="charf-club-container">
          <!-- Profile Card -->
          <section class="profile-header-card">
            <div class="profile-avatar-wrapper">
              <div class="profile-avatar">CE</div>
              <div class="profile-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                </svg>
                <span>Fondateur Ciné-Club</span>
              </div>
            </div>
            <div class="profile-info-block">
              <div class="profile-name-row">
                <h1 class="profile-name">Charf Eddine</h1>
                <div class="profile-location-chip">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Mila, Algérie</span>
                </div>
              </div>
              <p class="profile-bio">
                Cinéphile passionné & explorateur d’œuvres contemporaines. Spécialiste de la narration visuelle,
                de la science-fiction réaliste et des thrillers d'investigation psychologique.
              </p>
              <div class="profile-tags-row">
                <span class="profile-genre-tag">Science-Fiction</span>
                <span class="profile-genre-tag">Drame & Biopic</span>
                <span class="profile-genre-tag">Thrillers Réalistes</span>
                <span class="profile-genre-tag">Cinéma International</span>
              </div>
            </div>
            <div class="profile-stats-grid">
              <div class="stat-box">
                <div class="stat-number">8</div>
                <div class="stat-label">Films au catalogue</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">9.4/10</div>
                <div class="stat-label">Note moyenne Charf</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">20h+</div>
                <div class="stat-label">Visionnage total</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">100%</div>
                <div class="stat-label">Sélection vérifiée</div>
              </div>
            </div>
          </section>

          <!-- Reviews Column + Form -->
          <div class="club-content-layout">
            <div class="club-reviews-column">
              <div class="section-title-bar">
                <h2 class="section-title">Les Carnets Critiques de Charf</h2>
                <p class="section-subtitle">Analyses détaillées et retours critiques sur la sélection 2024-2026</p>
              </div>
              <div class="reviews-list" id="reviews-list-container"></div>
            </div>
            <aside class="club-sidebar-column">
              <div class="manifesto-card">
                <h3 class="manifesto-title">Ligne Éditoriale du Club</h3>
                <p class="manifesto-text">
                  Ce ciné-club à <strong>Mila</strong> met en avant le cinéma exigeant : scénarios originaux,
                  absence d'artifices génériques, performances d'acteurs rigoureuses et direction artistique singulière.
                </p>
                <ul class="manifesto-points">
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Pas de complaisance : chaque note est justifiée</span>
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Fiches complètes avec bandes-annonces HD</span>
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Respect du format d'origine et de la colorimétrie</span>
                  </li>
                </ul>
              </div>
              <div class="submit-note-card">
                <h3 class="submit-note-title">Ajouter une Note Critique</h3>
                <p class="submit-note-desc">Partagez votre avis d'expert sur un film à ajouter au registre du club.</p>
                <div id="review-success-msg" class="alert-success" style="display: none;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Critique enregistrée avec succès dans le registre !</span>
                </div>
                <form id="add-review-form" class="submit-note-form">
                  <div class="form-group">
                    <label for="review-title">Titre du film</label>
                    <input type="text" id="review-title" class="input-field" placeholder="Ex : Sicario, Le Cercle Rouge..." required />
                  </div>
                  <div class="form-group">
                    <label for="review-rating">Note attribuée (/10)</label>
                    <select id="review-rating" class="input-field select-field">
                      <option value="10">10 / 10 - Chef d'œuvre intemporel</option>
                      <option value="9.5">9.5 / 10 - Magistral</option>
                      <option value="9.0" selected>9.0 / 10 - Excellent</option>
                      <option value="8.5">8.5 / 10 - Très bon film</option>
                      <option value="8.0">8.0 / 10 - Solide réalisation</option>
                      <option value="7.0">7.0 / 10 - Intéressant</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="review-comment">Analyse & critique</label>
                    <textarea id="review-comment" rows="4" class="input-field" placeholder="Précisez la mise en scène, le jeu d'acteurs et le rythme..." required></textarea>
                  </div>
                  <button type="submit" class="btn-primary w-full">Publier dans le Ciné-Club</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <!-- TAB 4: SPÉCIFICATIONS & IA -->
      <div id="tab-specs" class="tab-pane" style="display: none;">
        <div class="specs-container">
          <div class="specs-header-card">
            <div class="specs-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              </svg>
              <span>Checkpoint GMC — Studio de Projet Final</span>
            </div>
            <h1 class="specs-title">CinéScope : Architecture & Spécifications Projet</h1>
            <p class="specs-desc">
              Documentation complète de conception assistée par IA, de l'architecture logicielle
              et du protocole de déploiement automatique sur <strong>GitHub Pages</strong>.
            </p>
          </div>
          <div class="specs-grid">
            <div class="specs-col">
              <section class="specs-card">
                <h2 class="specs-section-title">1. Objectifs & Cahier des Charges</h2>
                <p class="specs-text">
                  Développer et déployer une application d'exploration cinématographique (« CinéScope »)
                  réalisée avec des outils d'intelligence artificielle, répondant aux contraintes ergonomiques strictes :
                </p>
                <ul class="specs-list">
                  <li><strong>Thème Clarté Totale (Light Mode) :</strong> Palette lumineuse (blanc pur, ardoise 50/100, bordures subtiles), éliminant les fonds sombres génériques.</li>
                  <li><strong>Plein Écran & Fluide :</strong> Disposition responsive à 100% de la largeur, optimisée pour moniteurs desktop et smartphones.</li>
                  <li><strong>Zéro Émoji & Iconographie Vectorielle :</strong> Composants SVG sur mesure pour une identité professionnelle sans look généré par IA.</li>
                  <li><strong>Données Réelles :</strong> Sélection cinématographique de référence et profil réel de <strong>Charf Eddine (Mila, Algérie)</strong>.</li>
                </ul>
              </section>
              <section class="specs-card">
                <h2 class="specs-section-title">2. Stack Technologique</h2>
                <div class="tech-tags-grid">
                  <div class="tech-pill">
                    <span class="tech-pill-name">Architecture Déclarative</span>
                    <span class="tech-pill-role">Composants réactifs et gestion d'état</span>
                  </div>
                  <div class="tech-pill">
                    <span class="tech-pill-name">Bundler Vite & Standalone</span>
                    <span class="tech-pill-role">Compatibilité GitHub Pages & ouverture locale directe</span>
                  </div>
                  <div class="tech-pill">
                    <span class="tech-pill-name">CSS3 Vanilla Pure</span>
                    <span class="tech-pill-role">Design System sur mesure sans framework lourd</span>
                  </div>
                  <div class="tech-pill">
                    <span class="tech-pill-name">YouTube IFrame API</span>
                    <span class="tech-pill-role">Intégration fluide de bandes-annonces HD 16:9</span>
                  </div>
                  <div class="tech-pill">
                    <span class="tech-pill-name">LocalStorage Sync</span>
                    <span class="tech-pill-role">Persistance locale de la Watchlist</span>
                  </div>
                  <div class="tech-pill">
                    <span class="tech-pill-name">GitHub Pages Ready</span>
                    <span class="tech-pill-role">Hébergement mondial sans erreur 404</span>
                  </div>
                </div>
              </section>
            </div>
            <div class="specs-col">
              <section class="specs-card highlight-card">
                <h2 class="specs-section-title">3. Procédure de Déploiement GitHub Pages</h2>
                <p class="specs-text">Commandes à exécuter dans le dossier <code>cinescope-checkpoint</code> pour publier en ligne :</p>
                <div class="deployment-step">
                  <div class="step-badge">Étape 1</div>
                  <div class="step-content">
                    <h4>Lier à votre dépôt GitHub distant</h4>
                    <pre class="code-block">git remote add origin https://github.com/&lt;votre-utilisateur&gt;/cinescope.git\ngit branch -M main\ngit push -u origin main</pre>
                  </div>
                </div>
                <div class="deployment-step">
                  <div class="step-badge">Étape 2</div>
                  <div class="step-content">
                    <h4>Déploiement sur GitHub Pages</h4>
                    <pre class="code-block">npx gh-pages -d dist</pre>
                  </div>
                </div>
                <div class="deployment-step">
                  <div class="step-badge">Étape 3</div>
                  <div class="step-content">
                    <h4>Accès en ligne</h4>
                    <div class="url-preview-box">
                      <span>URL finale de production :</span>
                      <code>https://&lt;votre-utilisateur&gt;.github.io/cinescope/</code>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal Movie Details & Trailer -->
    <div id="movie-modal" class="movie-modal-overlay" style="display: none;" role="dialog" aria-modal="true">
      <div class="movie-modal-card" id="modal-card">
        <div class="modal-hero-banner">
          <img id="modal-img" src="" alt="" class="modal-backdrop-img" />
          <div class="modal-banner-gradient"></div>
          <button type="button" class="modal-dismiss-btn" id="modal-close-btn" aria-label="Fermer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div class="modal-header-overlay">
            <div class="modal-tags-row" id="modal-genres"></div>
            <h2 class="modal-movie-title" id="modal-title"></h2>
            <p class="modal-movie-orig" id="modal-orig"></p>
          </div>
        </div>
        <div class="modal-content-body">
          <div class="modal-meta-grid">
            <div class="meta-item">
              <span class="meta-label">Note IMDb</span>
              <span class="meta-value meta-rating-val">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <strong id="modal-imdb"></strong>
              </span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Note Charf</span>
              <span class="meta-value" style="color: #059669;" id="modal-charf-score"></span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Durée</span>
              <span class="meta-value" id="modal-duration"></span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Année</span>
              <span class="meta-value" id="modal-year"></span>
            </div>
          </div>
          <div class="modal-actions-bar">
            <button type="button" class="btn-watchlist-action" id="modal-watchlist-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              <span id="modal-watchlist-txt">Ajouter à ma liste</span>
            </button>
          </div>
          <div>
            <h3 class="modal-section-title">Synopsis Officiel</h3>
            <p class="modal-synopsis-text" id="modal-synopsis"></p>
          </div>
          <div>
            <h3 class="modal-section-title">Réalisateur & Distribution</h3>
            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">Réalisé par <strong id="modal-director" style="color: #0f172a;"></strong></p>
            <div class="modal-cast-chips" id="modal-cast"></div>
          </div>
          <div>
            <h3 class="modal-section-title">Bande-Annonce Officielle HD</h3>
            <div class="trailer-embed-wrapper">
              <iframe id="modal-trailer-iframe" class="trailer-iframe" src="" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
          </div>
          <div class="modal-charf-critique-box">
            <div class="charf-critique-header">
              <div class="charf-critique-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Analyse Critique de Charf Eddine</span>
              </div>
              <span class="charf-critique-badge" id="modal-charf-badge"></span>
            </div>
            <p class="charf-critique-text" id="modal-charf-review"></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="footer-inner">
        <div class="footer-left">
          <div class="footer-brand">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>
            <span>CinéScope &bull; Studio de Projet Final</span>
          </div>
          <p class="footer-meta">Conçu avec rigueur et déployé pour <strong>Charf Eddine</strong> &bull; Mila, Algérie</p>
        </div>
        <div class="footer-center">
          <div class="footer-badges">
            <span class="badge-pill">Mode Clair 100%</span>
            <span class="badge-pill">Plein Écran Fluide</span>
            <span class="badge-pill">0 Émoji &bull; SVG Pur</span>
            <span class="badge-pill">Mila, Algérie</span>
          </div>
        </div>
        <div class="footer-right">
          <button type="button" class="footer-nav-btn" id="footer-specs-link">Guide Déploiement & Spécifications &rarr;</button>
        </div>
      </div>
    </footer>
  </div>

  <!-- Reactive Script (Zero External Modules, Zero CORS on file://) -->
  <script>
    (function() {
      const MOVIES = [
        {
          id: 'm-101',
          title: 'Oppenheimer',
          originalTitle: 'Oppenheimer',
          year: 2023,
          director: 'Christopher Nolan',
          genres: ['Historique', 'Drame', 'Biopic'],
          rating: 8.9,
          duration: 180,
          poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&auto=format&fit=crop&q=80',
          backdrop: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80',
          synopsis: 'L\\'histoire captivante du physicien J. Robert Oppenheimer et de son rôle déterminant à la tête du Projet Manhattan lors de la création de la première bombe atomique.',
          cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
          trailerVideoId: 'uYPbbksJxIg',
          charfRating: 9.5,
          charfReview: 'Chef-d\\'œuvre absolu de Nolan. Le montage alternant entre fission et fusion, le travail sonore assourdissant et l\\'interprétation de Cillian Murphy en font le plus grand film historique de la décennie.'
        },
        {
          id: 'm-102',
          title: 'Dune : Deuxième Partie',
          originalTitle: 'Dune: Part Two',
          year: 2024,
          director: 'Denis Villeneuve',
          genres: ['Science-Fiction', 'Aventure', 'Action'],
          rating: 8.8,
          duration: 166,
          poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
          backdrop: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&auto=format&fit=crop&q=80',
          synopsis: 'Paul Atréides s\\'unit à Chani et aux Fremen pour mener la révolte contre ceux qui ont anéanti sa famille. Hanté par de sombres prémonitions, il doit choisir entre l\\'amour de sa vie et le destin de l\\'univers.',
          cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Javier Bardem'],
          trailerVideoId: 'Way9Dexny3w',
          charfRating: 9.2,
          charfReview: 'Une fresque visuelle titanesque. Villeneuve prouve une nouvelle fois sa maîtrise des échelles monumentales et du désert d\\'Arrakis.'
        },
        {
          id: 'm-103',
          title: 'Interstellar',
          originalTitle: 'Interstellar',
          year: 2014,
          director: 'Christopher Nolan',
          genres: ['Science-Fiction', 'Drame', 'Aventure'],
          rating: 8.7,
          duration: 169,
          poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
          backdrop: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80',
          synopsis: 'Alors que la Terre se meurt, un groupe d\\'explorateurs utilise un trou de ver récemment découvert près de Saturne pour franchir les limites du voyage spatial humain et trouver une planète habitable.',
          cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
          trailerVideoId: 'zSWdZVtXT7E',
          charfRating: 9.8,
          charfReview: 'Mon film préféré de tous les temps. La musique d\\'Hans Zimmer sur l\\'orgue de l\\'église Temple Church et la scène de la planète Miller restent gravées à jamais.'
        },
        {
          id: 'm-104',
          title: 'Inception',
          originalTitle: 'Inception',
          year: 2010,
          director: 'Christopher Nolan',
          genres: ['Science-Fiction', 'Action', 'Thriller'],
          rating: 8.8,
          duration: 148,
          poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
          backdrop: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
          synopsis: 'Dom Cobb est un voleur expérimenté, le meilleur dans l\\'art périlleux de l\\'extraction : s\\'approprier les secrets précieux enfouis au plus profond du subconscient pendant la phase de sommeil.',
          cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page', 'Tom Hardy'],
          trailerVideoId: 'YoHD9XEInc0',
          charfRating: 9.4,
          charfReview: 'Un scénario d\\'une précision horlogère. L\\'architecture des rêves à plusieurs strates reste un modèle d\\'écriture cinématographique.'
        },
        {
          id: 'm-105',
          title: 'La Nuit du 12',
          originalTitle: 'La Nuit du 12',
          year: 2022,
          director: 'Dominik Moll',
          genres: ['Policier', 'Drame', 'Mystère'],
          rating: 8.2,
          duration: 114,
          poster: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&auto=format&fit=crop&q=80',
          backdrop: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=1200&auto=format&fit=crop&q=80',
          synopsis: 'À la PJ, chaque enquêteur tombe un jour ou l\\'autre sur un crime qui le hante. Pour Yohan, c\\'est le meurtre de Clara. Les interrogatoires se succèdent, les suspects ne manquent pas, et les doutes s\\'amplifient.',
          cast: ['Bastien Bouillon', 'Bouli Lanners', 'Anouk Grinberg', 'Lula Cotton-Frapier'],
          trailerVideoId: 'eCgWb2mZ6oE',
          charfRating: 8.8,
          charfReview: 'Un polar procédural remarquable, sombre et subtil sur l\\'obsession policière. César du meilleur film amplement mérité.'
        },
        {
          id: 'm-106',
          title: 'Blade Runner 2049',
          originalTitle: 'Blade Runner 2049',
          year: 2017,
          director: 'Denis Villeneuve',
          genres: ['Science-Fiction', 'Thriller', 'Drame'],
          rating: 8.5,
          duration: 164,
          poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80',
          backdrop: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&auto=format&fit=crop&q=80',
          synopsis: 'En 2049, la société est fragilisée par les tensions entre les humains et leurs esclaves créés par bioingénierie. L\\'officier K est un Blade Runner : il fait respecter l\\'ordre en traquant les réplicants renégats.',
          cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas', 'Sylvia Hoeks'],
          trailerVideoId: 'gCcx85zbxz4',
          charfRating: 9.1,
          charfReview: 'La photographie de Roger Deakins est à couper le souffle. Une suite qui respecte et transcende le film séminal de Ridley Scott.'
        },
        {
          id: 'm-107',
          title: 'Parasite',
          originalTitle: 'Gisaengchung',
          year: 2019,
          director: 'Bong Joon-ho',
          genres: ['Thriller', 'Comédie dramatique'],
          rating: 8.6,
          duration: 132,
          poster: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&auto=format&fit=crop&q=80',
          backdrop: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
          synopsis: 'Toute la famille de Ki-taek est au chômage et s\\'intéresse de près au train de vie de la richissime famille Park. Un jour, leur fils réussit à se faire embaucher pour donner des cours particuliers d\\'anglais chez les Park.',
          cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong', 'Choi Woo-shik'],
          trailerVideoId: '5xH0hhMBw38',
          charfRating: 9.3,
          charfReview: 'Palme d\\'Or et Oscar historiques. Une métaphore sociale féroce et imprévisible avec un sens du cadre chirurgical.'
        },
        {
          id: 'm-108',
          title: 'Le Parrain',
          originalTitle: 'The Godfather',
          year: 1972,
          director: 'Francis Ford Coppola',
          genres: ['Drame', 'Policier'],
          rating: 9.2,
          duration: 175,
          poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
          backdrop: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&auto=format&fit=crop&q=80',
          synopsis: 'En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone marie sa fille à un bookmaker. Sollozzo, "parrain" de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue.',
          cast: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Robert Duvall'],
          trailerVideoId: 'sY1S34973zA',
          charfRating: 9.7,
          charfReview: 'L\\'étalon-or du cinéma mondial. La transmission du pouvoir de Vito à Michael est d\\'une tragédie shakespearienne indépassable.'
        }
      ];

      let watchlist = ['m-101', 'm-102', 'm-106'];
      try {
        const saved = localStorage.getItem('cinescope_watchlist');
        if (saved) watchlist = JSON.parse(saved);
      } catch (e) {}

      let currentTab = 'catalog';
      let currentGenre = 'Tous';
      let currentSearch = '';
      let currentSort = 'rating_desc';
      let activeModalMovie = null;

      let clubReviews = [
        {
          id: 'rev-1',
          movieId: 'm-101',
          movieTitle: 'Oppenheimer',
          rating: 9.5,
          date: '2024-03-12',
          content: "Chef-d'œuvre absolu de Nolan. Le montage alternant entre fission et fusion, le travail sonore assourdissant et l'interprétation de Cillian Murphy en font le plus grand film historique de la décennie.",
          highlight: 'Prix de la mise en scène 2024'
        },
        {
          id: 'rev-2',
          movieId: 'm-102',
          movieTitle: 'Dune : Deuxième Partie',
          rating: 9.2,
          date: '2024-04-05',
          content: "Une fresque visuelle titanesque. Villeneuve prouve une nouvelle fois sa maîtrise des échelles monumentales et du désert d'Arrakis. La photographie de Greig Fraser est exemplaire.",
          highlight: 'Photographie d\\'exception'
        },
        {
          id: 'rev-3',
          movieId: 'm-103',
          movieTitle: 'Interstellar',
          rating: 9.8,
          date: '2024-01-20',
          content: "La bande originale de Hans Zimmer transcende chaque scène. La séquence d'amarrage est gravée dans l'histoire du cinéma de science-fiction.",
          highlight: 'Classique indémodable'
        },
        {
          id: 'rev-4',
          movieId: 'm-107',
          movieTitle: 'Parasite',
          rating: 9.4,
          date: '2024-02-18',
          content: "Une précision chirurgicale dans la scénarisation. Bong Joon-ho manie l'humour noir et la tension sociale avec une virtuosité rare.",
          highlight: 'Palme d\\'Or magistrale'
        }
      ];

      function saveWatchlist() {
        try {
          localStorage.setItem('cinescope_watchlist', JSON.stringify(watchlist));
        } catch (e) {}
        updateWatchlistBadges();
      }

      function updateWatchlistBadges() {
        document.getElementById('watchlist-nav-badge').textContent = watchlist.length;
        document.getElementById('count-watchlist-hero').textContent = watchlist.length;
      }

      function switchTab(tabId) {
        currentTab = tabId;
        document.querySelectorAll('.tab-pane').forEach(el => el.style.display = 'none');
        document.getElementById('tab-' + tabId).style.display = 'block';

        document.querySelectorAll('.nav-link-btn').forEach(btn => {
          if (btn.dataset.tab === tabId) {
            btn.classList.add('is-active');
          } else {
            btn.classList.remove('is-active');
          }
        });

        if (tabId === 'catalog') renderCatalog();
        if (tabId === 'watchlist') renderWatchlist();
        if (tabId === 'club') renderClubReviews();

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      function createMovieCard(movie, isWatchlistMode) {
        const isSaved = watchlist.includes(movie.id);
        const card = document.createElement('article');
        card.className = 'movie-card-root';
        card.innerHTML = \`
          <div class="movie-card-poster-box">
            <img src="\${movie.backdrop || movie.poster}" alt="\${movie.title}" class="movie-card-img" loading="lazy" />
            <div class="movie-card-overlay">
              <span class="btn-overlay-play">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                <span>Bande-annonce</span>
              </span>
            </div>
            <div class="card-rating-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>\${movie.rating.toFixed(1)}</span>
            </div>
            <button type="button" class="btn-watchlist-toggle \${isSaved ? 'is-active' : ''}" title="\${isSaved ? 'Retirer de la liste' : 'Ajouter à ma liste'}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="\${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            </button>
          </div>
          <div class="movie-card-body">
            <div class="movie-card-meta-row">
              <span>\${movie.year}</span>
              <span>\${movie.duration} min</span>
            </div>
            <h3 class="movie-card-title">\${movie.title}</h3>
            <p class="movie-card-director">Par <strong>\${movie.director}</strong></p>
            <div class="movie-card-genres">
              \${movie.genres.map(g => \`<span class="genre-chip">\${g}</span>\`).join('')}
            </div>
            <div class="movie-card-charf-note">
              <span class="charf-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Avis Charf :</span>
              </span>
              <span class="charf-score">\${movie.charfRating.toFixed(1)}/10</span>
            </div>
          </div>
        \`;

        // Poster click -> Open details modal
        card.querySelector('.movie-card-poster-box').addEventListener('click', (e) => {
          if (e.target.closest('.btn-watchlist-toggle')) return;
          openModal(movie);
        });

        // Title click -> Open details modal
        card.querySelector('.movie-card-title').addEventListener('click', () => {
          openModal(movie);
        });

        // Watchlist button
        const toggleBtn = card.querySelector('.btn-watchlist-toggle');
        toggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (watchlist.includes(movie.id)) {
            watchlist = watchlist.filter(id => id !== movie.id);
          } else {
            watchlist.push(movie.id);
          }
          saveWatchlist();
          if (isWatchlistMode) {
            renderWatchlist();
          } else {
            renderCatalog();
          }
        });

        return card;
      }

      function renderCatalog() {
        const grid = document.getElementById('movies-grid');
        grid.innerHTML = '';

        const search = currentSearch.toLowerCase().trim();
        let list = MOVIES.filter(m => {
          const matchGenre = currentGenre === 'Tous' || m.genres.includes(currentGenre);
          const matchSearch = !search ||
            m.title.toLowerCase().includes(search) ||
            m.originalTitle.toLowerCase().includes(search) ||
            m.director.toLowerCase().includes(search) ||
            m.cast.some(actor => actor.toLowerCase().includes(search));
          return matchGenre && matchSearch;
        });

        if (currentSort === 'rating_desc') list.sort((a, b) => b.rating - a.rating);
        if (currentSort === 'year_desc') list.sort((a, b) => b.year - a.year);
        if (currentSort === 'duration_desc') list.sort((a, b) => b.duration - a.duration);

        if (list.length === 0) {
          grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: #64748b;"><h3>Aucun film ne correspond à votre recherche.</h3></div>';
          return;
        }

        list.forEach(m => {
          grid.appendChild(createMovieCard(m, false));
        });
      }

      function renderWatchlist() {
        const grid = document.getElementById('watchlist-grid');
        const emptyMsg = document.getElementById('empty-watchlist-msg');
        grid.innerHTML = '';

        const savedMovies = MOVIES.filter(m => watchlist.includes(m.id));
        document.getElementById('watchlist-subtitle').textContent =
          \`Films enregistrés pour vos prochaines séances de cinéma (\${savedMovies.length} film\${savedMovies.length > 1 ? 's' : ''}).\`;

        if (savedMovies.length === 0) {
          emptyMsg.style.display = 'block';
          grid.style.display = 'none';
        } else {
          emptyMsg.style.display = 'none';
          grid.style.display = 'grid';
          savedMovies.forEach(m => {
            grid.appendChild(createMovieCard(m, true));
          });
        }
      }

      function renderClubReviews() {
        const container = document.getElementById('reviews-list-container');
        container.innerHTML = '';

        clubReviews.forEach(rev => {
          const matched = MOVIES.find(m => m.id === rev.movieId);
          const art = document.createElement('article');
          art.className = 'review-card';
          art.innerHTML = \`
            <div class="review-card-header">
              <div class="review-title-group">
                <h3 class="review-movie-title">\${rev.movieTitle}</h3>
                <span class="review-tag">\${rev.highlight}</span>
              </div>
              <div class="review-rating-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span class="review-score">\${Number(rev.rating).toFixed(1)}</span>
                <span class="review-max">/10</span>
              </div>
            </div>
            <p class="review-body">\${rev.content}</p>
            <div class="review-card-footer">
              <span class="review-date">Publié le \${rev.date} par Charf Eddine</span>
              \${matched ? '<button type="button" class="btn-link-action">Consulter la fiche & bande-annonce &rarr;</button>' : ''}
            </div>
          \`;

          if (matched) {
            art.querySelector('.btn-link-action').addEventListener('click', () => {
              openModal(matched);
            });
          }
          container.appendChild(art);
        });
      }

      function openModal(movie) {
        activeModalMovie = movie;
        document.getElementById('modal-img').src = movie.backdrop || movie.poster;
        document.getElementById('modal-title').textContent = movie.title;
        document.getElementById('modal-orig').textContent = \`Titre original : \${movie.originalTitle}\`;
        document.getElementById('modal-genres').innerHTML = movie.genres.map(g => \`<span class="modal-genre-tag">\${g}</span>\`).join('');
        document.getElementById('modal-imdb').textContent = \`\${movie.rating.toFixed(1)}/10\`;
        document.getElementById('modal-charf-score').textContent = \`\${movie.charfRating.toFixed(1)}/10\`;
        document.getElementById('modal-duration').textContent = \`\${movie.duration} min\`;
        document.getElementById('modal-year').textContent = movie.year;
        document.getElementById('modal-synopsis').textContent = movie.synopsis;
        document.getElementById('modal-director').textContent = movie.director;
        document.getElementById('modal-cast').innerHTML = movie.cast.map(c => \`<span class="cast-chip">\${c}</span>\`).join('');
        document.getElementById('modal-trailer-iframe').src = \`https://www.youtube-nocookie.com/embed/\${movie.trailerVideoId}?autoplay=0&rel=0\`;
        document.getElementById('modal-charf-badge').textContent = \`Note attribuée : \${movie.charfRating.toFixed(1)} / 10\`;
        document.getElementById('modal-charf-review').textContent = \`"\${movie.charfReview}"\`;

        updateModalWatchlistBtn();
        document.getElementById('movie-modal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        document.getElementById('movie-modal').style.display = 'none';
        document.getElementById('modal-trailer-iframe').src = '';
        document.body.style.overflow = 'auto';
        activeModalMovie = null;
      }

      function updateModalWatchlistBtn() {
        if (!activeModalMovie) return;
        const btn = document.getElementById('modal-watchlist-btn');
        const txt = document.getElementById('modal-watchlist-txt');
        const isSaved = watchlist.includes(activeModalMovie.id);
        if (isSaved) {
          btn.classList.add('is-in-watchlist');
          txt.textContent = 'Dans votre liste (Cliquer pour retirer)';
        } else {
          btn.classList.remove('is-in-watchlist');
          txt.textContent = 'Ajouter à ma liste de visionnage';
        }
      }

      // Event Listeners
      document.querySelectorAll('.nav-link-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
      });

      document.getElementById('brand-btn').addEventListener('click', () => switchTab('catalog'));
      document.getElementById('user-chip-btn').addEventListener('click', () => switchTab('club'));
      document.getElementById('btn-watchlist-discover').addEventListener('click', () => switchTab('catalog'));
      document.getElementById('btn-empty-explore').addEventListener('click', () => switchTab('catalog'));
      document.getElementById('footer-specs-link').addEventListener('click', () => switchTab('specs'));

      // Search input
      const searchInput = document.getElementById('search-input');
      const clearBtn = document.getElementById('clear-search-btn');
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        clearBtn.style.display = currentSearch ? 'flex' : 'none';
        if (currentTab !== 'catalog') switchTab('catalog');
        renderCatalog();
      });

      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        clearBtn.style.display = 'none';
        renderCatalog();
      });

      // Genre filter pills
      document.querySelectorAll('.genre-filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          document.querySelectorAll('.genre-filter-pill').forEach(p => p.classList.remove('is-active'));
          pill.classList.add('is-active');
          currentGenre = pill.dataset.genre;
          renderCatalog();
        });
      });

      // Sort dropdown
      document.getElementById('sort-dropdown').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderCatalog();
      });

      // Modal close events
      document.getElementById('modal-close-btn').addEventListener('click', closeModal);
      document.getElementById('movie-modal').addEventListener('click', (e) => {
        if (e.target.id === 'movie-modal') closeModal();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && activeModalMovie) closeModal();
      });

      // Modal Watchlist Toggle
      document.getElementById('modal-watchlist-btn').addEventListener('click', () => {
        if (!activeModalMovie) return;
        if (watchlist.includes(activeModalMovie.id)) {
          watchlist = watchlist.filter(id => id !== activeModalMovie.id);
        } else {
          watchlist.push(activeModalMovie.id);
        }
        saveWatchlist();
        updateModalWatchlistBtn();
        renderCatalog();
        if (currentTab === 'watchlist') renderWatchlist();
      });

      // Submit new review form
      document.getElementById('add-review-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('review-title').value.trim();
        const rating = parseFloat(document.getElementById('review-rating').value) || 8.5;
        const comment = document.getElementById('review-comment').value.trim();
        if (!title || !comment) return;

        const newRev = {
          id: 'rev-' + Date.now(),
          movieId: 'custom',
          movieTitle: title,
          rating: rating,
          date: new Date().toISOString().split('T')[0],
          content: comment,
          highlight: 'Nouvelle critique'
        };

        clubReviews.unshift(newRev);
        document.getElementById('review-title').value = '';
        document.getElementById('review-comment').value = '';
        const msg = document.getElementById('review-success-msg');
        msg.style.display = 'flex';
        setTimeout(() => msg.style.display = 'none', 3500);
        renderClubReviews();
      });

      // Initial Render
      updateWatchlistBadges();
      renderCatalog();
      renderClubReviews();
    })();
  </script>
</body>
</html>
`;

// Write to index.html and dist/index.html
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), htmlContent, 'utf8');

console.log('✅ index.html et dist/index.html générés avec succès (100% autonome, styles CSS intégrés, 0 dépendances externes).');
