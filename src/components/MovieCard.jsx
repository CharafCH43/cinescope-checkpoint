import React, { useState } from 'react';
import { StarIcon, BookmarkIcon, ClockIcon, PlayIcon } from './Icons';

export default function MovieCard({
  movie,
  isInWatchlist,
  onToggleWatchlist,
  onOpenDetails
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="movie-card" data-movie-id={movie.id}>
      <div className="movie-poster-box" onClick={() => onOpenDetails(movie)}>
        {!imgError ? (
          <img
            src={movie.poster}
            alt={movie.title}
            className="movie-poster-img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="movie-poster-fallback">
            <span>{movie.title}</span>
          </div>
        )}

        <div className="poster-overlay">
          <button
            type="button"
            className="btn-play-preview"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(movie);
            }}
          >
            <PlayIcon size={18} />
            <span>Détails & Bande-annonce</span>
          </button>
        </div>

        {/* Rating Badge */}
        <div className="card-rating-badge">
          <StarIcon size={13} filled />
          <span>{movie.rating}</span>
        </div>

        {/* Watchlist Quick Button */}
        <button
          type="button"
          className={`card-bookmark-btn ${isInWatchlist ? 'is-bookmarked' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWatchlist(movie.id);
          }}
          title={isInWatchlist ? 'Retirer de la watchlist' : 'Ajouter à ma liste'}
        >
          <BookmarkIcon size={15} filled={isInWatchlist} />
        </button>
      </div>

      <div className="movie-info-block">
        <div className="movie-genres-row">
          {movie.genres.slice(0, 2).map((g) => (
            <span key={g} className="genre-pill">{g}</span>
          ))}
          <span className="movie-year-tag">{movie.year}</span>
        </div>

        <h3 className="movie-title" onClick={() => onOpenDetails(movie)}>
          {movie.title}
        </h3>

        <p className="movie-director">De {movie.director}</p>

        <div className="movie-card-footer">
          <div className="duration-meta">
            <ClockIcon size={13} />
            <span>{movie.duration} min</span>
          </div>

          {movie.charfRating && (
            <div className="charf-badge" title="Note attribuée par Charf Eddine">
              <span>Avis Charf : <strong>{movie.charfRating}/10</strong></span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

