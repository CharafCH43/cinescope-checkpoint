import React from 'react';
import { FilmIcon, SearchIcon, BookmarkIcon, UserIcon, SparklesIcon, CloseIcon } from './Icons';

export default function Navbar({
  searchTerm,
  onSearchChange,
  activeTab,
  onTabChange,
  watchlistCount,
  user
}) {
  return (
    <header className="navbar-root">
      <div className="navbar-container">
        {/* Brand */}
        <div className="navbar-brand-section">
          <button className="brand-button" onClick={() => onTabChange('catalog')}>
            <div className="brand-icon-box">
              <FilmIcon size={22} />
            </div>
            <div className="brand-text-block">
              <h1 className="brand-title">CinéScope</h1>
              <span className="brand-tagline">Explorateur Cinéma & Sélections de Charf</span>
            </div>
          </button>
        </div>

        {/* Global Search Bar */}
        <div className="navbar-search-wrapper">
          <SearchIcon size={16} className="search-field-icon" />
          <input
            type="text"
            className="search-field-input"
            placeholder="Rechercher un film, un réalisateur, un acteur (Nolan, Dune, DiCaprio...)"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchTerm && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => onSearchChange('')}
              title="Effacer la recherche"
            >
              <CloseIcon size={13} />
            </button>
          )}
        </div>

        {/* Navigation Tabs */}
        <nav className="navbar-nav-group">
          <button
            type="button"
            className={`nav-link-btn ${activeTab === 'catalog' ? 'is-active' : ''}`}
            onClick={() => onTabChange('catalog')}
          >
            <FilmIcon size={15} />
            <span>Catalogue</span>
          </button>

          <button
            type="button"
            className={`nav-link-btn ${activeTab === 'watchlist' ? 'is-active' : ''}`}
            onClick={() => onTabChange('watchlist')}
          >
            <BookmarkIcon size={15} />
            <span>À Voir</span>
            <span className="nav-badge">{watchlistCount}</span>
          </button>

          <button
            type="button"
            className={`nav-link-btn ${activeTab === 'club' ? 'is-active' : ''}`}
            onClick={() => onTabChange('club')}
          >
            <UserIcon size={15} />
            <span>Ciné-Club Mila</span>
          </button>

          <button
            type="button"
            className={`nav-link-btn btn-specs ${activeTab === 'specs' ? 'is-active' : ''}`}
            onClick={() => onTabChange('specs')}
          >
            <SparklesIcon size={15} />
            <span>Spécification & IA</span>
          </button>
        </nav>

        {/* User Chip */}
        <div
          className="navbar-user-chip"
          onClick={() => onTabChange('club')}
          role="button"
          tabIndex={0}
          title="Profil cinéphile de Charf Eddine"
        >
          <div className="user-avatar-initials">{user.initials}</div>
          <div className="user-chip-text">
            <span className="user-chip-name">{user.name}</span>
            <span className="user-chip-city">{user.city}, {user.country}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

