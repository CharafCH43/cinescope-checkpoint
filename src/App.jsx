import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MovieGrid from './components/MovieGrid';
import WatchlistView from './components/WatchlistView';
import { CharfClubView } from './components/CharfClubView';
import { ProjectSpecsView } from './components/ProjectSpecsView';
import MovieModal from './components/MovieModal';
import { INITIAL_USER, MOVIES_DATA } from './data/moviesData';
import { FilmIcon, SparklesIcon, MapPinIcon } from './components/Icons';

export default function App() {
  const [movies] = useState(MOVIES_DATA);
  const [user] = useState(INITIAL_USER);
  const [activeTab, setActiveTab] = useState('catalog');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Persisted Watchlist in localStorage
  const [watchlistIds, setWatchlistIds] = useState(() => {
    try {
      const saved = localStorage.getItem('cinescope_watchlist');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('LocalStorage non accessible :', e);
    }
    // Default favorites
    return ['m-101', 'm-102', 'm-106'];
  });

  useEffect(() => {
    try {
      localStorage.setItem('cinescope_watchlist', JSON.stringify(watchlistIds));
    } catch (e) {
      console.warn('Erreur de sauvegarde Watchlist :', e);
    }
  }, [watchlistIds]);

  const handleToggleWatchlist = (movieId) => {
    setWatchlistIds((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  const handleOpenDetails = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-shell">
      {/* Top Navigation */}
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        watchlistCount={watchlistIds.length}
        user={user}
      />

      {/* Main Full-Screen Body */}
      <main className="app-main-content">
        {activeTab === 'catalog' && (
          <div className="catalog-tab-content">
            {/* Hero Banner for Light Mode */}
            <section className="catalog-hero-strip">
              <div className="hero-text-container">
                <div className="hero-tag">
                  <SparklesIcon size={14} />
                  <span>Sélection Cinéphile Exclusive</span>
                </div>
                <h1 className="hero-heading">Explorez les chefs-d'œuvre du cinéma contemporain</h1>
                <p className="hero-lead">
                  Fiches analytiques complètes, bandes-annonces haute définition et carnet critique
                  tenu par <strong>Charf Eddine</strong> depuis <strong>Mila, Algérie</strong>.
                </p>
              </div>

              <div className="hero-metrics-pill-group">
                <div className="metric-pill">
                  <span className="metric-val">{movies.length}</span>
                  <span className="metric-txt">Films analysés</span>
                </div>
                <div className="metric-pill">
                  <span className="metric-val">8.8/10</span>
                  <span className="metric-txt">Score IMDb moyen</span>
                </div>
                <div className="metric-pill">
                  <span className="metric-val">{watchlistIds.length}</span>
                  <span className="metric-txt">Dans votre liste</span>
                </div>
              </div>
            </section>

            {/* Movie Grid */}
            <MovieGrid
              movies={movies}
              searchTerm={searchTerm}
              watchlistIds={watchlistIds}
              onToggleWatchlist={handleToggleWatchlist}
              onOpenDetails={handleOpenDetails}
            />
          </div>
        )}

        {activeTab === 'watchlist' && (
          <WatchlistView
            movies={movies}
            watchlistIds={watchlistIds}
            onToggleWatchlist={handleToggleWatchlist}
            onOpenDetails={handleOpenDetails}
            onNavigateToCatalog={() => setActiveTab('catalog')}
          />
        )}

        {activeTab === 'club' && (
          <CharfClubView
            movies={movies}
            onSelectMovie={handleOpenDetails}
          />
        )}

        {activeTab === 'specs' && (
          <ProjectSpecsView />
        )}
      </main>

      {/* Movie Modal Details & Trailer */}
      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isInWatchlist={selectedMovie ? watchlistIds.includes(selectedMovie.id) : false}
        onToggleWatchlist={handleToggleWatchlist}
      />

      {/* Full-width Light Mode Footer */}
      <footer className="app-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-brand">
              <FilmIcon size={18} />
              <span>CinéScope &bull; Studio de Projet Final</span>
            </div>
            <p className="footer-meta">
              Conçu avec rigueur et déployé pour <strong>Charf Eddine</strong> &bull;{' '}
              <MapPinIcon size={13} className="inline-icon" /> Mila, Algérie
            </p>
          </div>

          <div className="footer-center">
            <div className="footer-badges">
              <span className="badge-pill">Mode Clair 100%</span>
              <span className="badge-pill">Plein Écran Fluide</span>
              <span className="badge-pill">0 Émoji &bull; SVG Pur</span>
              <span className="badge-pill">React 19 &bull; Vite 8</span>
            </div>
          </div>

          <div className="footer-right">
            <button
              type="button"
              className="footer-nav-btn"
              onClick={() => setActiveTab('specs')}
            >
              Guide Déploiement & Spécifications &rarr;
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
