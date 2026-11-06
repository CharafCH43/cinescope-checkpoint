import React, { useState } from 'react';
import { StarIcon, MapPinIcon, ClockIcon, FilmIcon, SparklesIcon, CheckIcon } from './Icons';

export const CharfClubView = ({ movies, onSelectMovie }) => {
  const [reviews, setReviews] = useState([
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
      highlight: 'Photographie d\'exception'
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
      highlight: 'Palme d\'Or magistrale'
    }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newRating, setNewRating] = useState('9.0');
  const [newComment, setNewComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const totalMinutes = movies.reduce((acc, m) => acc + (m.duration || 0), 0);
  const totalHours = Math.round(totalMinutes / 60);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newComment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      movieId: 'custom',
      movieTitle: newTitle.trim(),
      rating: parseFloat(newRating) || 8.5,
      date: new Date().toISOString().split('T')[0],
      content: newComment.trim(),
      highlight: 'Critique récente'
    };

    setReviews([newRev, ...reviews]);
    setNewTitle('');
    setNewComment('');
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 4000);
  };

  return (
    <div className="charf-club-container">
      {/* Profile Header Card */}
      <section className="profile-header-card">
        <div className="profile-avatar-wrapper">
          <div className="profile-avatar">CE</div>
          <div className="profile-badge">
            <SparklesIcon size={14} className="text-amber-500" />
            <span>Fondateur Ciné-Club</span>
          </div>
        </div>

        <div className="profile-info-block">
          <div className="profile-name-row">
            <h1 className="profile-name">Charf Eddine</h1>
            <div className="profile-location-chip">
              <MapPinIcon size={14} />
              <span>Mila, Algérie</span>
            </div>
          </div>
          <p className="profile-bio">
            Cinéphile passionné & explorateur d’œuvres contemporaines. Spécialiste de la narration visuelle,
            de la science-fiction réaliste et des thrillers d'investigation psychologique.
          </p>
          <div className="profile-tags-row">
            <span className="profile-genre-tag">Science-Fiction</span>
            <span className="profile-genre-tag">Drame & Biopic</span>
            <span className="profile-genre-tag">Thrillers Réalistes</span>
            <span className="profile-genre-tag">Cinéma International</span>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="profile-stats-grid">
          <div className="stat-box">
            <div className="stat-number">8</div>
            <div className="stat-label">Films au catalogue</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">9.4/10</div>
            <div className="stat-label">Note moyenne Charf</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{totalHours}h+</div>
            <div className="stat-label">Visionnage total</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">100%</div>
            <div className="stat-label">Sélection vérifiée</div>
          </div>
        </div>
      </section>

      {/* Main Grid: Reviews List + Add Form */}
      <div className="club-content-layout">
        {/* Left Column: Curated Reviews */}
        <div className="club-reviews-column">
          <div className="section-title-bar">
            <div>
              <h2 className="section-title">Les Carnets Critiques de Charf</h2>
              <p className="section-subtitle">Analyses détaillées et retours critiques sur la sélection 2024-2026</p>
            </div>
          </div>

          <div className="reviews-list">
            {reviews.map((rev) => {
              const matchedMovie = movies.find(m => m.id === rev.movieId);
              return (
                <article key={rev.id} className="review-card">
                  <div className="review-card-header">
                    <div className="review-title-group">
                      <h3 className="review-movie-title">{rev.movieTitle}</h3>
                      <span className="review-tag">{rev.highlight}</span>
                    </div>
                    <div className="review-rating-badge">
                      <StarIcon size={15} filled={true} />
                      <span className="review-score">{rev.rating.toFixed(1)}</span>
                      <span className="review-max">/10</span>
                    </div>
                  </div>

                  <p className="review-body">{rev.content}</p>

                  <div className="review-card-footer">
                    <span className="review-date">Publié le {rev.date} par Charf Eddine</span>
                    {matchedMovie && (
                      <button
                        type="button"
                        onClick={() => onSelectMovie(matchedMovie)}
                        className="btn-link-action"
                      >
                        Consulter la fiche & bande-annonce &rarr;
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Right Column: Add Note & Curators Manifesto */}
        <aside className="club-sidebar-column">
          <div className="manifesto-card">
            <h3 className="manifesto-title">Ligne Éditoriale du Club</h3>
            <p className="manifesto-text">
              Ce ciné-club à <strong>Mila</strong> met en avant le cinéma exigeant : scénarios originaux,
              absence d'artifices génériques, performances d'acteurs rigoureuses et direction artistique singulière.
            </p>
            <ul className="manifesto-points">
              <li>
                <CheckIcon size={14} className="text-emerald-600" />
                <span>Pas de complaisance : chaque note est justifiée</span>
              </li>
              <li>
                <CheckIcon size={14} className="text-emerald-600" />
                <span>Fiches complètes avec bandes-annonces en haute définition</span>
              </li>
              <li>
                <CheckIcon size={14} className="text-emerald-600" />
                <span>Respect du format d'origine et du rythme cinématographique</span>
              </li>
            </ul>
          </div>

          <div className="submit-note-card">
            <h3 className="submit-note-title">Ajouter une Note Critique</h3>
            <p className="submit-note-desc">
              Partagez votre avis d'expert sur un film à ajouter au registre du club.
            </p>

            {submittedMessage && (
              <div className="alert-success">
                <CheckIcon size={16} />
                <span>Critique enregistrée avec succès dans le registre local !</span>
              </div>
            )}

            <form onSubmit={handleAddReview} className="submit-note-form">
              <div className="form-group">
                <label htmlFor="movie-title">Titre du film</label>
                <input
                  id="movie-title"
                  type="text"
                  placeholder="Ex : Le Cercle Rouge, Sicario..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="input-field"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="movie-score">Note attribuée (/10)</label>
                <select
                  id="movie-score"
                  value={newRating}
                  onChange={(e) => setNewRating(e.target.value)}
                  className="input-field select-field"
                >
                  <option value="10">10 / 10 - Chef d'œuvre intemporel</option>
                  <option value="9.5">9.5 / 10 - Magistral</option>
                  <option value="9.0">9.0 / 10 - Excellent</option>
                  <option value="8.5">8.5 / 10 - Très bon film</option>
                  <option value="8.0">8.0 / 10 - Solide réalisation</option>
                  <option value="7.0">7.0 / 10 - Intéressant</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="movie-critique">Analyse & critique</label>
                <textarea
                  id="movie-critique"
                  rows={4}
                  placeholder="Précisez la mise en scène, le jeu d'acteurs, le rythme et la portée du propos..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="input-field"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Publier dans le Ciné-Club
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
};
