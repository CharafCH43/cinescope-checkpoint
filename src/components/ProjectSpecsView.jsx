import React from 'react';
import { FilmIcon, SparklesIcon, ExternalLinkIcon, CheckIcon } from './Icons';

export const ProjectSpecsView = () => {
  return (
    <div className="specs-container">
      {/* Header banner */}
      <div className="specs-header-card">
        <div className="specs-badge">
          <SparklesIcon size={16} />
          <span>Checkpoint GMC — Studio de Projet Final</span>
        </div>
        <h1 className="specs-title">CinéScope : Architecture & Spécifications Projet</h1>
        <p className="specs-desc">
          Documentation complète de conception assistée par IA, de l'architecture logicielle
          et du protocole de déploiement automatique sur <strong>GitHub Pages</strong>.
        </p>
      </div>

      <div className="specs-grid">
        {/* Column 1: Cahier des charges & Choix technologiques */}
        <div className="specs-col">
          <section className="specs-card">
            <h2 className="specs-section-title">1. Objectifs & Cahier des Charges</h2>
            <p className="specs-text">
              Développer et déployer une application d'exploration cinématographique immersive (« CinéScope »)
              réalisée avec des outils d'intelligence artificielle modernes, répondant aux contraintes ergonomiques strictes :
            </p>
            <ul className="specs-list">
              <li>
                <strong>Thème Clarté Totale (Light Mode) :</strong> Palette lumineuse (blanc pur, ardoise 50/100, bordures subtiles), éliminant les fonds sombres génériques.
              </li>
              <li>
                <strong>Plein Écran & Fluide :</strong> Disposition responsive à 100% de la largeur, optimisée pour moniteurs desktop et smartphones.
              </li>
              <li>
                <strong>Zéro Émoji & Iconographie Vectorielle :</strong> Composants SVG sur mesure pour une identité professionnelle sans look généré par IA.
              </li>
              <li>
                <strong>Données Réelles & Personnalisées :</strong> Sélection cinématographique de référence et profil réel de <strong>Charf Eddine (Mila, Algérie)</strong>.
              </li>
            </ul>
          </section>

          <section className="specs-card">
            <h2 className="specs-section-title">2. Stack Technologique</h2>
            <div className="tech-tags-grid">
              <div className="tech-pill">
                <span className="tech-pill-name">React 19</span>
                <span className="tech-pill-role">Composants déclaratifs & hooks</span>
              </div>
              <div className="tech-pill">
                <span className="tech-pill-name">Vite 8</span>
                <span className="tech-pill-role">Bundler ultra-rapide (&lt;200ms build)</span>
              </div>
              <div className="tech-pill">
                <span className="tech-pill-name">CSS3 Vanilla</span>
                <span className="tech-pill-role">Design System sur mesure sans overhead</span>
              </div>
              <div className="tech-pill">
                <span className="tech-pill-name">HTML5 / YouTube API</span>
                <span className="tech-pill-role">Intégration fluide de bandes-annonces</span>
              </div>
              <div className="tech-pill">
                <span className="tech-pill-name">LocalStorage</span>
                <span className="tech-pill-role">Persistance de la watchlist</span>
              </div>
              <div className="tech-pill">
                <span className="tech-pill-name">GitHub Pages</span>
                <span className="tech-pill-role">Hébergement statique mondial</span>
              </div>
            </div>
          </section>

          <section className="specs-card">
            <h2 className="specs-section-title">3. Prompts IA Utilisés (Journal de Conception)</h2>
            <div className="prompt-log-item">
              <div className="prompt-tag">Étape 1 : Architecture & Spécifications</div>
              <code className="prompt-code">
                "Conçois une application web React de cinéma moderne, claire, plein écran, sans aucun émoji, avec les données de Charf Eddine basé à Mila, Algérie. Prépare la configuration de déploiement GitHub Pages avec base relative."
              </code>
            </div>
            <div className="prompt-log-item">
              <div className="prompt-tag">Étape 2 : Design System & Accessibilité</div>
              <code className="prompt-code">
                "Génère un design system CSS lumineux, professionnel, avec des micro-interactions soignées (hover lift, modale fluide, badges avec note /10) et 100% vectoriel SVG."
              </code>
            </div>
            <div className="prompt-log-item">
              <div className="prompt-tag">Étape 3 : Intégration Multimédia & Watchlist</div>
              <code className="prompt-code">
                "Implémente la gestion d'état de la Watchlist avec synchronisation LocalStorage, lecteur vidéo YouTube responsive et modalité de consultation immersive."
              </code>
            </div>
          </section>
        </div>

        {/* Column 2: Guide de déploiement GitHub Pages */}
        <div className="specs-col">
          <section className="specs-card highlight-card">
            <h2 className="specs-section-title">4. Procédure de Déploiement GitHub Pages</h2>
            <p className="specs-text">
              Suivez ces étapes simples depuis le terminal dans le dossier <code>cinescope-checkpoint</code> pour publier en ligne :
            </p>

            <div className="deployment-step">
              <div className="step-badge">Étape A</div>
              <div className="step-content">
                <h4>Initialisation du dépôt Git local</h4>
                <pre className="code-block">
git init{'\n'}
git add .{'\n'}
git commit -m "feat: Studio projet final CinéScope pour Charf Eddine (Mila)"
                </pre>
              </div>
            </div>

            <div className="deployment-step">
              <div className="step-badge">Étape B</div>
              <div className="step-content">
                <h4>Création du dépôt distant sur GitHub</h4>
                <p>Créez un nouveau dépôt public sur GitHub nommé <code>cinescope</code>, puis liez votre local :</p>
                <pre className="code-block">
git remote add origin https://github.com/&lt;votre-utilisateur&gt;/cinescope.git{'\n'}
git branch -M main{'\n'}
git push -u origin main
                </pre>
              </div>
            </div>

            <div className="deployment-step">
              <div className="step-badge">Étape C</div>
              <div className="step-content">
                <h4>Build et déploiement direct (gh-pages)</h4>
                <p>Générez les fichiers statiques de production :</p>
                <pre className="code-block">
npm run build
                </pre>
                <p>Puis déployez le dossier <code>dist</code> via la commande :</p>
                <pre className="code-block">
npx gh-pages -d dist
                </pre>
              </div>
            </div>

            <div className="deployment-step">
              <div className="step-badge">Étape D</div>
              <div className="step-content">
                <h4>Activation de GitHub Pages dans les paramètres</h4>
                <p>
                  Dans votre dépôt GitHub &rarr; <strong>Settings</strong> &rarr; <strong>Pages</strong>, sélectionnez la branche <code>gh-pages</code> (dossier <code>/(root)</code>) et enregistrez.
                </p>
                <div className="url-preview-box">
                  <span>URL finale de production :</span>
                  <code>https://&lt;votre-utilisateur&gt;.github.io/cinescope/</code>
                </div>
              </div>
            </div>
          </section>

          <section className="specs-card">
            <h2 className="specs-section-title">5. Checklist de Validation du Checkpoint</h2>
            <ul className="checklist">
              <li className="check-item">
                <CheckIcon size={16} className="text-emerald-600" />
                <span>Choix de l'application cinéma avec cartes films interactives & synopsis</span>
              </li>
              <li className="check-item">
                <CheckIcon size={16} className="text-emerald-600" />
                <span>Spécification complète du projet générée et consultable</span>
              </li>
              <li className="check-item">
                <CheckIcon size={16} className="text-emerald-600" />
                <span>Documentation README.md professionnelle prête pour le jury GMC</span>
              </li>
              <li className="check-item">
                <CheckIcon size={16} className="text-emerald-600" />
                <span>Configuration Vite <code>base: './'</code> pour fonctionnement sans erreur de chemins</span>
              </li>
              <li className="check-item">
                <CheckIcon size={16} className="text-emerald-600" />
                <span>Design en Mode Clair, Fullscreen, Zéro Émoji, données Charf Eddine (Mila)</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
