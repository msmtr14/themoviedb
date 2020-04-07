import {createStackNavigator, createAppContainer} from 'react-navigation';
import {MoviesListScreen, MovieDetailsScreen} from './screens';

const Navigator = createStackNavigator(
  {
    MoviesListScreen: MoviesListScreen,
    MovieDetailsScreen: MovieDetailsScreen,
  },
  {
    initialRouteName: 'MoviesListScreen',
    headerMode: 'none',
  },
);

export const AppContainer = createAppContainer(Navigator);
