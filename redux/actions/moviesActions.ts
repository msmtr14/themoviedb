import {
  GET_ALL_UPCOMING_MOVIES,
  apiConfig,
  getAllMoviesUrl,
  apiParamsConfig,
  getMovieDetailsUrl,
  GET_MOVIE_DETAILS,
  GET_MOVIE_CASTS,
} from '../config';

export async function getAllUpcomingMovies(params?: apiParamsConfig) {
  const config = {
    language: (params && params.language) || 'en-US',
    page: (params && params.page) || 1,
  };
  const response = apiConfig
    .get(`${getAllMoviesUrl}&language=${config.language}&page=${config.page}`)
    .then((res: any) => {
      return res.data;
    })
    .catch((err: any) => console.error(err));
  return {
    type: GET_ALL_UPCOMING_MOVIES,
    payload: response,
  };
}

export async function getMovieDetails(id: number, params?: apiParamsConfig) {
  const config = {
    language: (params && params.language) || 'en-US',
    page: (params && params.page) || 1,
  };
  const response = apiConfig
    .get(
      `${id + getMovieDetailsUrl}&language=${config.language}&page=${
        config.page
      }`,
    )
    .then((res: any) => {
      return res.data;
    })
    .catch((err: any) => console.error(err));
  return {
    type: GET_MOVIE_DETAILS,
    payload: response,
  };
}

export async function getMovieCasts(id: number, params?: apiParamsConfig) {
  const config = {
    language: (params && params.language) || 'en-US',
    page: (params && params.page) || 1,
  };
  const response = apiConfig
    .get(
      `${id + '/credits' + getMovieDetailsUrl}&language=${
        config.language
      }&page=${config.page}`,
    )
    .then((res: any) => {
      return res.data;
    })
    .catch((err: any) => console.error(err));
  return {
    type: GET_MOVIE_CASTS,
    payload: response,
  };
}
