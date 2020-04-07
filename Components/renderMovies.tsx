import React, {memo, FunctionComponent} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import * as STYLE from './styles';
import * as color from '../Theme';
import {withNavigation} from 'react-navigation';
import {IMAGE_BASE_PATH} from '../redux/config';

MaterialIcon.loadFont();

interface RenderMoviesProps {
  data: any;
  navigation?: any;
}

const RenderMovies: FunctionComponent<RenderMoviesProps> = memo(
  ({data, navigation}) => {
    const _showDetails = () => {
      navigation.navigate('MovieDetailsScreen', {data});
    };
    const uri = data.backdrop_path
      ? `${IMAGE_BASE_PATH + data.backdrop_path}`
      : 'https://getdrawings.com/free-icon-bw/photo-gallery-icon-png-16.png';
    return (
      <TouchableOpacity
        style={{...STYLE.CARD_BODY}}
        activeOpacity={0.5}
        onPress={() => _showDetails()}>
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
        <View style={{...STYLE.BOTTOM_VIEW}}>
          <View style={{...STYLE.BOTTOM_UPPER_DETAILS}}>
            <View style={{...STYLE.BOTTOM_TITLE_VIEW}}>
              <Text numberOfLines={1} style={{...STYLE.BOTTOM_TITLE_TEXT}}>
                {data.title}
              </Text>
            </View>
            <View style={{...STYLE.BOTTOM_RATING_VIEW}}>
              <MaterialIcon name={'star-border'} color={color.grey} size={15} />
              <Text numberOfLines={1} style={{...STYLE.BOTTOM_RATING_TEXT}}>
                {data.vote_average}
              </Text>
            </View>
          </View>
          <View style={{...STYLE.BOTTOM_LOWER_DETAILS}}>
            <Text numberOfLines={2} style={{...STYLE.BOTTOM_DESC_TEXT}}>
              {data.overview}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

export default withNavigation(RenderMovies);
