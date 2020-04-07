import React, {Component} from 'react';
import {View, ActivityIndicator, Text, ColorPropType} from 'react-native';
import {connect} from 'react-redux';
import {NavigationScreenProps} from 'react-navigation';
import {getAllUpcomingMovies} from '../redux/actions/moviesActions';
import RenderMovies from '../Components/renderMovies';
import * as STYLE from './styles';
import SearchInput, {createFilter} from 'react-native-search-filter';
import {ScrollView} from 'react-native-gesture-handler';
import {uuidV4} from '../utils/uniquesId';
interface IProps extends NavigationScreenProps {
  dispatch?: any;
  movies?: any[];
}
const KEYS_TO_FILTERS = ['original_title', 'title'];
export class MoviesListScreen extends Component<IProps> {
  state = {searchTerm: ''};

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getAllUpcomingMovies());
  }

  render() {
    const {movies} = this.props;
    const filteredMovies = (movies || []).filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS),
    );
    return (
      <View style={{...STYLE.CONTAINER}}>
        <Text style={{...STYLE.HEADER_TITLE}}>Upcoming Movies</Text>
        <View
          style={{
            ...STYLE.SEARCH_BAR_VIEW,
          }}>
          <SearchInput
            onChangeText={term => {
              this.setState({searchTerm: term});
            }}
            style={{
              ...STYLE.SEARCH_INPUT,
            }}
            placeholder=" Search Movies..."
          />
        </View>
        {filteredMovies.length <= 0 && (
          <Text
            style={{
              ...STYLE.TITLE_SUB_TXT,
              textAlign: 'center',
              marginTop: 30,
            }}>
            No Movies!
          </Text>
        )}
        <ScrollView style={{flex: 1}}>
          <View style={{...STYLE.CONTENT_VIEW}}>
            {movies ? (
              filteredMovies.map((item, i) => (
                <RenderMovies key={uuidV4()} data={item} />
              ))
            ) : (
              <ActivityIndicator size={'large'} />
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({movies: state.moviesReducer.movies});

export default connect(mapStateToProps)(MoviesListScreen);
