import React, { useState, useMemo } from 'react';
import MovieCard from './MovieCard';
import { GENRES_LIST } from '../data/moviesData';
import { SearchIcon, FilterIcon } from './Icons';

export default function MovieGrid({
  movies,
  searchTerm,
  watchlistIds,
  onToggleWatchlist,
  onOpenDetails
}) {
  const [selectedGenre, setSelectedGenre] = useState('Tous');
  const [sortBy, setSortBy] = useState('rating_desc');

  const filteredMovies = useMemo(() => {
    return movies
      .filter((m) => {
        const matchesGenre = selectedGenre === 'Tous' || m.genres.includes(selectedGenre);
        const search = searchTerm.toLowerCase();
        const matchesSearch =
          m.title.toLowerCase().includes(search) ||
          m.originalTitle.toLowerCase().includes(search) ||
          m.director.toLowerCase().includes(search) ||
          m.cast.some((actor) => actor.toLowerCase().includes(search));
        return matchesGenre && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'rating_desc') return b.rating - a.rating;
        if (sortBy === 'year_desc') return b.year - a.year;
        if (sortBy === 'duration_desc') return b.duration - a.duration;
        if (sortBy === 'title_asc') return a.title.localeCompare(b.title);
        return 0;
      });
  }, [movies, selectedGenre, searchTerm, sortBy]);

  return (
    <div className="movie-grid-view">
      {/* Category Pills & Sorting Bar */}
      <div className="catalog-toolbar-panel">
        <div className="genre-chips-scroll">
          {GENRES_LIST.map((genre) => (
            <button
              key={genre}
              type="button"
              className={`genre-chip-btn ${selectedGenre === genre ? 'is-active' : ''}`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="sorting-control-box">
          <FilterIcon size={14} className="sort-icon" />
          <select
            className="sort-select-input"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating_desc">Meilleures notes d'abord</option>
            <option value="year_desc">Plus récents d'abord</option>
            <option value="duration_desc">Durée la plus longue</option>
            <option value="title_asc">Ordre alphabétique (A-Z)</option>
          </select>
        </div>
      </div>

      <div className="catalog-status-line">
        <span className="results-counter">
          Affichage de <strong>{filteredMovies.length}</strong> film{filteredMovies.length > 1 ? 's' : ''}
          {selectedGenre !== 'Tous' && ` dans la catégorie « ${selectedGenre} »`}
        </span>
      </div>

      {/* Movies Grid */}
      {filteredMovies.length === 0 ? (
        <div className="catalog-empty-view">
          <SearchIcon size={36} className="empty-search-icon" />
          <h3>Aucun film ne correspond à votre recherche</h3>
          <p>Essayez un autre mot-clé ou réinitialisez le filtre de genre.</p>
          <button
            type="button"
            className="btn-reset-filters"
            onClick={() => setSelectedGenre('Tous')}
          >
            Afficher tous les films
          </button>
        </div>
      ) : (
        <div className="movies-cards-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isInWatchlist={watchlistIds.includes(movie.id)}
              onToggleWatchlist={onToggleWatchlist}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
}
