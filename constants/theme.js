import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

import { useTheme } from '@react-navigation/native';

import { useColorScheme } from 'react-native'


const COLORS = {
  greenDark: "#6C733D",
  greenLight: "#9CA65D",
  black: "#202427",
  blackLight: "#30393F",
  grayDark: "#8C8D88",
  grayLight: "#D9D9D9",


  white: "#FFF",
  lightWhite: "#F2F2F2",
};

const FONT = {
  light: "MSLight",
  regular: "MSRegular",
  medium: "DMMedium",
  semiBold: "MSSemiBold",
  bold: "MSBold",
  extraBold: "MSExtraBold"
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const THEME = useColorScheme() ?? "light"

export { COLORS, FONT, SIZES, SHADOWS, THEME };
