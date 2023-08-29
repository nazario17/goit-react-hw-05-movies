import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchApiMovieSearch } from 'services/fetchApi';

function Movies() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const results = await fetchApiMovieSearch(query);
      setSearchResults(results.results);
    } catch (error) {
        console.error('Error fetching search results:', error);
        setError(error)
    }
  };

  if (error) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
