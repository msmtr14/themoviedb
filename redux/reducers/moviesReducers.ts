import {
  GET_ALL_UPCOMING_MOVIES,
  GET_MOVIE_DETAILS,
  GET_MOVIE_CASTS,
} from '../config';

const initialState: any = {};

function moviesReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case GET_ALL_UPCOMING_MOVIES:
      return {...state, movies: action.payload.results, data: action.payload};

    case GET_MOVIE_DETAILS:
      return {...state, movieDetail: action.payload};

    case GET_MOVIE_CASTS:
      return {...state, cast: action.payload};

    default:
      return state;
  }
}

export default moviesReducer;
