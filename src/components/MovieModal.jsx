import React from 'react';
import { CloseIcon, StarIcon, BookmarkIcon, ClockIcon, PlayIcon, UserIcon } from './Icons';

export default function MovieModal({
  movie,
  isOpen,
  onClose,
  isInWatchlist,
  onToggleWatchlist
}) {
  if (!isOpen || !movie) return null;

  return (
    <div className="movie-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="movie-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Backdrop Banner */}
        <div className="modal-hero-banner">
          <img
            src={movie.backdrop || movie.poster}
            alt={movie.title}
            className="modal-backdrop-img"
          />
          <div className="modal-banner-gradient" />
          <button
            type="button"
            className="modal-dismiss-btn"
            onClick={onClose}
            aria-label="Fermer"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-body-container">
          <div className="modal-header-section">
            <div className="modal-title-col">
              <div className="modal-genres-list">
                {movie.genres.map((g) => (
                  <span key={g} className="modal-genre-badge">{g}</span>
                ))}
                <span className="modal-meta-dot">•</span>
                <span className="modal-meta-year">{movie.year}</span>
                <span className="modal-meta-dot">•</span>
                <span className="modal-meta-duration">{movie.duration} min</span>
              </div>

              <h2 className="modal-main-title">{movie.title}</h2>
              {movie.originalTitle !== movie.title && (
                <p className="modal-original-title">Titre original : <em>{movie.originalTitle}</em></p>
              )}
              <p className="modal-director-line">Réalisé par <strong>{movie.director}</strong></p>
            </div>

            <div className="modal-actions-box">
              <div className="modal-global-score">
                <StarIcon size={18} filled />
                <span className="score-number">{movie.rating}</span>
                <span className="score-max">/10</span>
              </div>

              <button
                type="button"
                className={`btn-modal-watchlist ${isInWatchlist ? 'is-in-list' : ''}`}
                onClick={() => onToggleWatchlist(movie.id)}
              >
                <BookmarkIcon size={16} filled={isInWatchlist} />
                <span>{isInWatchlist ? 'Dans votre liste' : 'Ajouter à ma liste'}</span>
              </button>
            </div>
          </div>

          {/* Synopsis */}
          <div className="modal-text-block">
            <h3>Synopsis</h3>
            <p className="modal-synopsis-text">{movie.synopsis}</p>
          </div>

          {/* Cast */}
          <div className="modal-text-block">
            <h3>Distribution principale</h3>
            <div className="modal-cast-chips">
              {movie.cast.map((actor) => (
                <span key={actor} className="cast-chip">{actor}</span>
              ))}
            </div>
          </div>

          {/* Charf's Review Box */}
          {movie.charfReview && (
            <div className="modal-charf-review-card">
              <div className="review-card-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">CE</div>
                  <div>
                    <h4 className="reviewer-name">Chronique de Charf Eddine</h4>
                    <span className="reviewer-location">Ciné-Club de Mila, Algérie</span>
                  </div>
                </div>

                {movie.charfRating && (
                  <div className="charf-score-tag">
                    <StarIcon size={14} filled />
                    <span>Coup de cœur : <strong>{movie.charfRating}/10</strong></span>
                  </div>
                )}
              </div>

              <p className="reviewer-critique">« {movie.charfReview} »</p>
            </div>
          )}

          {/* Trailer Player Section */}
          {movie.trailerVideoId && (
            <div className="modal-trailer-section">
              <div className="trailer-header">
                <PlayIcon size={16} />
                <h3>Bande-annonce officielle</h3>
              </div>
              <div className="video-embed-responsive">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${movie.trailerVideoId}?rel=0`}
                  title={`Bande-annonce de ${movie.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
