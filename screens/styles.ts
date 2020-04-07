import {ViewStyle, TextStyle, Dimensions} from 'react-native';
import * as color from '../Theme';
import {lightGrey} from '../Theme';

const innerHeight = Dimensions.get('window').height;

const FULL: ViewStyle = {
  flex: 1,
};

const CONTAINER: ViewStyle = {
  ...FULL,
};

const HEADER_TITLE: TextStyle = {
  height: 35,
  fontSize: 20,
  fontWeight: '500',
  textAlign: 'center',
  color: color.grey,
  textDecorationLine: 'underline',
  letterSpacing: 1.75,
};

const LIST_CONTAINER: ViewStyle = {
  ...FULL,
};

const DETAIL_SCREEN_HEADER: ViewStyle = {
  width: '100%',
  height: 45,
  paddingHorizontal: '3%',
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: 5,
  borderBottomColor: lightGrey,
  borderBottomWidth: 0.3,
};

const DETAIL_SCREEN_HEADER_TEXT: TextStyle = {
  fontSize: 18,
  color: color.grey,
  marginLeft: 5,
};

const CONTENT_VIEW: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const DETAILS_CONTAINER: ViewStyle = {
  flex: 1,
};

const IMAGE_VIEW: ViewStyle = {
  width: '96%',
  height: innerHeight * 0.55,
  alignSelf: 'center',
  padding: 10,
};

const IMAGE_STYLE: ViewStyle = {
  width: '100%',
  height: '100%',
};

const TITLE_VIEW: ViewStyle = {
  height: 35,
  width: '100%',
  paddingHorizontal: '3%',
  alignItems: 'center',
  flexDirection: 'row',
};
const TITLE_TXT: TextStyle = {
  fontSize: 18,
  fontWeight: '500',
  color: color.grey,
};

const TITLE_TXT2: TextStyle = {
  fontSize: 18,
  fontWeight: '300',
  color: color.grey,
  maxWidth: '60%',
};

const TITLE_SUB_TXT: TextStyle = {
  fontSize: 19,
  fontWeight: '400',
  color: color.grey,
  marginHorizontal: 5,
};

const RATING_TXT: TextStyle = {
  fontSize: 15,
  fontWeight: '500',
  color: color.lightGrey,
  marginLeft: 10,
  textAlign: 'center',
};

const DESC_TEXT: TextStyle = {
  maxWidth: '96%',
  fontSize: 12,
  fontWeight: '300',
  color: color.grey,
  textAlign: 'justify',
  marginTop: 10,
};

const DESC_VIEW: ViewStyle = {
  width: '95%',
  alignSelf: 'center',
};

const SEARCH_BAR_VIEW: ViewStyle = {
  height: 35,
  width: '100%',
  backgroundColor: '#eee',
  justifyContent: 'center',
};

const SEARCH_INPUT: TextStyle & ViewStyle = {
  width: '94%',
  alignSelf: 'center',
  backgroundColor: '#fff',
  height: 30,
  borderWidth: 0.2,
  borderColor: '#777',
  textAlign: 'center',
  borderRadius: 10,
};

export {
  FULL,
  CONTAINER,
  HEADER_TITLE,
  CONTENT_VIEW,
  LIST_CONTAINER,
  DETAIL_SCREEN_HEADER,
  DETAIL_SCREEN_HEADER_TEXT,
  DETAILS_CONTAINER,
  IMAGE_STYLE,
  TITLE_VIEW,
  IMAGE_VIEW,
  TITLE_TXT,
  TITLE_SUB_TXT,
  RATING_TXT,
  TITLE_TXT2,
  DESC_TEXT,
  DESC_VIEW,
  SEARCH_BAR_VIEW,
  SEARCH_INPUT,
};
