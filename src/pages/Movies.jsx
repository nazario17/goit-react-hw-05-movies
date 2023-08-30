import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchApiMovieSearch } from 'services/fetchApi';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
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

      searchParams.set('query', query);
      setSearchParams(searchParams);
      
      localStorage.setItem('searchResults', JSON.stringify(results.results));
      localStorage.setItem('searchQuery', query);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError(error);
    }
  };

  useEffect(() => {
    const savedSearchResults = JSON.parse(
      localStorage.getItem('searchResults')
    );
    if (savedSearchResults) {
      setSearchResults(savedSearchResults);
    }

    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      setQuery(savedQuery);
    }

    
  }, []);

  useEffect(() => {
    localStorage.removeItem('searchResults');
    localStorage.removeItem('searchQuery');
  }, []);

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
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
