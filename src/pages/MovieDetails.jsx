import React, { useState, useEffect, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApiMovie } from 'services/fetchApi';



function MovieDetails() {
    const { movieId } = useParams();
    console.log(movieId);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const details = await fetchApiMovie(movieId);
          setMovieDetails(details);
          console.log(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
        />
      </div>
      <div>
        <h1>{movieDetails.title}</h1>
      </div>
    </div>
  );
}

export default MovieDetails;