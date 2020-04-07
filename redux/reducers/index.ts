import {combineReducers} from 'redux';
import moviesReducer from './moviesReducers';

const rootReducer = combineReducers({
  moviesReducer,
});
export default rootReducer;
