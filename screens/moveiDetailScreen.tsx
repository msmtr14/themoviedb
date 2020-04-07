import React, {Component} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import * as STYLE from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import * as color from '../Theme';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_PATH_FOR_ORIGINAL} from '../redux/config';
import {getMovieDetails, getMovieCasts} from '../redux/actions/moviesActions';
import {connect} from 'react-redux';
MaterialIcon.loadFont();

interface IProps {
  dispatch?: any;
}

type Props = IProps & NavigationScreenProps;

class MovieDetailsScreen extends Component<Props> {
  state: any = {
    data: null,
    posterPath: '',
    casts: null,
    director: 'Director',
  };
  componentDidMount() {
    const {navigation, dispatch} = this.props;
    const item = navigation.getParam('data', null);
    dispatch(getMovieDetails(item.id)).then((res: any) => {
      dispatch(getMovieCasts(item.id)).then((casts: any) => {
        const cast = casts.payload.cast;
        let flag = true;
        let director = 'Director';
        casts.payload.crew.forEach((element: any) => {
          if (flag && element.job === 'Director') {
            director = element.name;
            flag = false;
          }
        });
        this.setState({
          data: res.payload,
          posterPath: item.poster_path,
          casts: cast,
          director,
        });
      });
    });
  }

  _getYear = (date: string) => {
    const fullYear = new Date(`${date}`).getFullYear();
    return fullYear;
  };

  render() {
    const {data, posterPath, casts, director} = this.state;
    const uri =
      data && data.backdrop_path
        ? `${IMAGE_BASE_PATH_FOR_ORIGINAL + posterPath}`
        : 'https://getdrawings.com/free-icon-bw/photo-gallery-icon-png-16.png';
    return data ? (
      <View style={{...STYLE.FULL}}>
        <View style={{...STYLE.DETAIL_SCREEN_HEADER}}>
          <MaterialIcon
            onPress={() => this.props.navigation.goBack()}
            name={'arrow-back'}
            color={color.grey}
            size={27}
          />
          <Text style={{...STYLE.DETAIL_SCREEN_HEADER_TEXT}}>Back</Text>
        </View>
        <ScrollView style={{...STYLE.DETAILS_CONTAINER}}>
          <View style={{...STYLE.IMAGE_VIEW}}>
            <FastImage
              style={{...STYLE.IMAGE_STYLE}}
              source={{
                uri,
                headers: {Authorization: 'artists'},
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View style={{...STYLE.FULL}}>
            <View
              style={{
                ...STYLE.TITLE_VIEW,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  ...STYLE.TITLE_TXT,
                }}>
                {data.original_title}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...STYLE.RATING_TXT,
                }}>
                ({data.vote_average})
              </Text>
            </View>
            <View
              style={{
                ...STYLE.TITLE_VIEW,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  ...STYLE.TITLE_TXT2,
                }}>
                {this._getYear(`${data.release_date}`)}
              </Text>

              <Text
                numberOfLines={1}
                style={{
                  ...STYLE.TITLE_SUB_TXT,
                }}>
                |
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...STYLE.TITLE_TXT2,
                }}>
                {data.runtime} mins
              </Text>

              <Text
                numberOfLines={1}
                style={{
                  ...STYLE.TITLE_SUB_TXT,
                }}>
                |
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  ...STYLE.TITLE_TXT2,
                }}>
                {director}
              </Text>
            </View>

            <View
              style={{
                ...STYLE.TITLE_VIEW,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  ...STYLE.TITLE_TXT2,
                }}>
                Actor:{' '}
              </Text>
              <Text numberOfLines={1} style={{maxWidth: '80%'}}>
                {casts &&
                  casts.map((cast: any, i: number) => (
                    <Text
                      key={cast.id}
                      numberOfLines={1}
                      style={{
                        ...STYLE.TITLE_TXT2,
                      }}>
                      {cast.name}
                      {casts.length - 1 === i ? '' : ', '}
                      {}
                    </Text>
                  ))}
              </Text>
            </View>

            <View
              style={{
                ...STYLE.DESC_VIEW,
              }}>
              <Text
                style={{
                  ...STYLE.DESC_TEXT,
                }}>
                {data.overview}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    ) : (
      <ActivityIndicator size="large" color={color.grey} />
    );
  }
}

function mapStateToProps(state: any) {
  return state;
}

export default connect(mapStateToProps)(MovieDetailsScreen);
