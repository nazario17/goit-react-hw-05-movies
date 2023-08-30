import { useRef } from 'react';
import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchApiMovie } from 'services/fetchApi';
import css from './MovieDetails.module.css'
// import { useSearchParams } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function fetchData() {
      try {
        const details = await fetchApiMovie(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }
    fetchData();
  }, [movieId]);

  // const backButtonLink = location.state?.from === 'movies' ? '/movies' : '/';
  return (
    <div>
      <Link className={css.button} to={backLinkHref.current}>
        Back
      </Link>

      <div className={css.card}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      </div>
      <div>
        <h1>{movieDetails.title}</h1>
        <p>User rating: {movieDetails.vote_average}</p>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h2>Genres</h2>
        <p>{movieDetails.genres?.map(genre => genre.name).join(', ')}</p>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <Link className={css.link} to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default MovieDetails;
