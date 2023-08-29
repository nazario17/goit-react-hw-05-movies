import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c97607d6a7ff13e25d14023836e4d703';

export async function fetchApi() {
  const response = await axios.get(
    `trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchApiMovie(movieId) {
  const response = await axios.get(
    `movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchApiMovieActors(movieId) {
  const response = await axios.get(
    `movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchApiMovieReviews(movieId) {
  const response = await axios.get(
    `movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchApiMovieSearch(query) {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  return response.data;
}
