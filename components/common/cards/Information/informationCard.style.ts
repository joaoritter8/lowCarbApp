import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES, THEME } from "../../../../constants";


const dynamicStyles = (index: number) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      width: 90,
      marginLeft: index > 0 ? 10 : 0,
      marginRight: index == 5 ? 18 : 0,
      backgroundColor: COLORS.greenLight,
      borderRadius: 10
    },

    infoText: {
      marginTop: 5,
      fontFamily: FONT.regular,
      fontSize: 12,
      color: COLORS.lightWhite,
      textAlign: 'center'
    }
  })
}

export default dynamicStyles
