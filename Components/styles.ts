import {ViewStyle, ImageStyle, TextStyle} from 'react-native';
import * as color from '../Theme';

const RADIUS = 14;

const CARD_BODY: ViewStyle = {
  width: '47%',
  height: 295,
  shadowColor: '#777',
  shadowOpacity: 0.8,
  shadowOffset: {
    width: 1,
    height: 1,
  },
  elevation: 1,
  marginLeft: '2%',
  borderRadius: RADIUS,
  marginTop: 15,
  borderWidth: 0.1,
  backgroundColor: color.bg,
  paddingBottom: 10,
};

const IMAGE_VIEW: ViewStyle = {
  flex: 3,
};

const IMAGE_STYLE: ImageStyle = {
  width: '100%',
  height: '100%',
  borderTopLeftRadius: RADIUS,
  borderTopRightRadius: RADIUS,
};

const BOTTOM_VIEW: ViewStyle = {
  flex: 1,
};

const BOTTOM_UPPER_DETAILS: ViewStyle = {
  flex: 1.5,
  flexDirection: 'row',
  paddingHorizontal: '3%',
};
const BOTTOM_LOWER_DETAILS: ViewStyle = {
  flex: 2,
  borderBottomRightRadius: RADIUS,
  borderBottomLeftRadius: RADIUS,
  paddingHorizontal: '3%',
};
const BOTTOM_TITLE_VIEW: ViewStyle = {
  flex: 4,
  justifyContent: 'center',
};
const BOTTOM_TITLE_TEXT: TextStyle = {
  maxWidth: '96%',
  marginLeft: '2%',
  fontSize: 14,
  fontWeight: '500',
  letterSpacing: 1.15,
  color: color.darkBlue,
};
const BOTTOM_RATING_VIEW: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
};

const BOTTOM_RATING_TEXT: TextStyle = {
  fontSize: 12,
  fontWeight: '500',
  color: color.grey,
};

const BOTTOM_DESC_TEXT: TextStyle = {
  maxWidth: '96%',
  marginLeft: '2%',
  fontSize: 12,
  fontWeight: '300',
  color: color.grey,
};

export {
  CARD_BODY,
  IMAGE_VIEW,
  BOTTOM_VIEW,
  IMAGE_STYLE,
  BOTTOM_LOWER_DETAILS,
  BOTTOM_UPPER_DETAILS,
  BOTTOM_RATING_VIEW,
  BOTTOM_TITLE_VIEW,
  BOTTOM_TITLE_TEXT,
  BOTTOM_RATING_TEXT,
  BOTTOM_DESC_TEXT,
};
