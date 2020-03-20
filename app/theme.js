import { Dimensions, StyleSheet, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const scalingFactors = {
  max: 15,
  big: 20,
  small: 30,
  normal: 25,
  moneyTitle: 10
};
export const screenWidth = width;
export const screenHeight = height;

// letter spacing
export const letterSpacingNormal = 1;
export const letterSpacingBig = 2;
export const letterSpacingMax = 3;

// font weight
export const fontWeightBold = '600';

// scaling font size
export const fontSmall = width / scalingFactors.small;
export const fontNormal = width / scalingFactors.normal;
export const fontBig = width / scalingFactors.big;
export const fontMax = width / scalingFactors.max;

// colors
export const primaryColor = '#2495F2';
export const secondaryColor = '#65D9E4';
export const green = '#159588';
export const white = '#FFFFFF';
export const dark = '#353535';
export const red0 = '#ff0000';

export const opacity = 'rgba(225,225,225,0.2)';

export const colorIndicators = '#1696A5';
export const colorBody = '#f1f2f4';
export const colorTitle = '#353535';
export const colorHeaderScreen = '#2495F2';
export const colorHeaderMenu = '#FFF';


export const elevationHelper = (size) => (
  Platform.select({
    android: { elevation: size || 3 },
    ios: {
      shadowOpacity: (size / 3),
      shadowRadius: size,
      shadowOffset: {
        height: 0,
        width: 0
      }
    }
  })
);

export const themeStyle = StyleSheet.create({
  titleBodyCard: {
    color: colorTitle,
    fontSize: fontMax,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
    fontWeight: '400',
    marginBottom: 3,
    textAlignVertical: 'center'
  },
  title: {
    color: colorTitle,
    fontSize: fontMax,
    textAlign: 'center',
    marginTop: 11,
    fontWeight: '400',
    marginBottom: 11,
    textAlignVertical: 'center'
  },
  subtitle: {
    color: colorTitle,
    height: 60,
    fontSize: fontBig,
    textAlign: 'center',
    fontWeight: '600',
    textAlignVertical: 'center',
    lineHeight:28
  },
  paragraph: {
    color: colorTitle,
    height: 40,
    fontSize: fontNormal,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  titleScreen : {
    color: colorHeaderScreen,
    fontSize: fontNormal,
    marginTop: 15
  },
  content:{
    flex: 1,
    backgroundColor: primaryColor
  }
});

// margin
export const marginDefault = 10;
