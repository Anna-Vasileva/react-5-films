import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "a92e1c28ff5839246667e5b68c28f141";

export const getTrendingMovies = () =>
  axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);

export const getSearchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);

export const getMoviesById = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};
export const getMovieCredits = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
};
export const getMoviesReviews = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
};
