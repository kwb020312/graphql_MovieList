import axios from "axios";
import fetch from "node-fetch";

const API_URL = `https://yts.am/api/v2/list_movies.json`;
const DETAIL_URL = `https://yts.mx/api/v2/movie_details.json`;

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `?limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((res) => res.data.movies);
};

export const getMovie = (id) => {
  const movie = axios
    .get(`${DETAIL_URL}?movie_id=${id}`)
    .then((res) => res.data.data.movie);
  return movie;
};
