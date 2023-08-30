import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchApiMovie } from 'services/fetchApi';


function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation()
  const cameBack = location.state?.from ?? '/';

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

    return (
      <div>
        <Link to={cameBack}>Back</Link>

        <div>
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
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          <Outlet />
        </div>
      </div>
    );
}

export default MovieDetails;
