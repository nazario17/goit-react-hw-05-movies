import React, { useState, useEffect } from 'react';
import { fetchApi } from 'services/fetchApi';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => { 
        async function fetchData() { 
            try {
                const data = await fetchApi();
                setTrendingMovies(data.results)
            } catch (error) { 
                console.error('Error fetching data:', error);
            }
        }

        fetchData()
    }, [])

    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    );
};

export default Home;