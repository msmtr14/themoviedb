import Axios from 'axios';
const API_KEY = `cad71db99d5fa5c6eff648eb6338115e`;
const BASE_URL = `https://api.themoviedb.org/3/movie/`;

 const getAllMoviesUrl = `upcoming?api_key=${API_KEY}`;
const getMovieDetailsUrl = `?api_key=${API_KEY}`;




const IMAGE_BASE_PATH = `https://image.tmdb.org/t/p/w200`;
const IMAGE_BASE_PATH_FOR_ORIGINAL = `https://image.tmdb.org/t/p/original`;
const apiConfig = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'Application/json',
  },
});

interface apiParamsConfig {
  language?: string
  page?: string
}

export { API_KEY, BASE_URL, getAllMoviesUrl, apiConfig,IMAGE_BASE_PATH, getMovieDetailsUrl,IMAGE_BASE_PATH_FOR_ORIGINAL };  
export type { apiParamsConfig };

