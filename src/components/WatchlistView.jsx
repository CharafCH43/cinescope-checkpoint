import React from 'react';
import MovieCard from './MovieCard';
import { BookmarkIcon, FilmIcon } from './Icons';

export default function WatchlistView({
  movies,
  watchlistIds,
  onToggleWatchlist,
  onOpenDetails,
  onNavigateToCatalog
}) {
  const watchlistMovies = movies.filter((m) => watchlistIds.includes(m.id));

  return (
    <div className="watchlist-view-layout">
      <div className="watchlist-header-bar">
        <div>
          <h2 className="view-title">Ma Liste de Visionnage (Watchlist)</h2>
          <p className="view-subtitle">
            Films enregistrés pour vos prochaines séances de cinéma ({watchlistMovies.length} film{watchlistMovies.length > 1 ? 's' : ''}).
          </p>
        </div>

        {watchlistMovies.length > 0 && (
          <button
            type="button"
            className="btn-discover-more"
            onClick={onNavigateToCatalog}
          >
            <FilmIcon size={15} />
            <span>Explorer d'autres films</span>
          </button>
        )}
      </div>

      {watchlistMovies.length === 0 ? (
        <div className="watchlist-empty-state">
          <div className="empty-bookmark-circle">
            <BookmarkIcon size={36} />
          </div>
          <h3>Votre liste de visionnage est vide</h3>
          <p>Parcourez le catalogue et cliquez sur l'icône de signet pour enregistrer vos films préférés.</p>
          <button
            type="button"
            className="btn-action-primary"
            onClick={onNavigateToCatalog}
          >
            <FilmIcon size={16} />
            <span>Découvrir le catalogue</span>
          </button>
        </div>
      ) : (
        <div className="movies-cards-grid">
          {watchlistMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isInWatchlist={true}
              onToggleWatchlist={onToggleWatchlist}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
}

