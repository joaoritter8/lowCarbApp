import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";


const dynamicStyles = (isSelected: boolean, index: number) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      height: 90,
      width: 60,
      marginLeft: index > 0 ? 10 : 0,
      marginRight: index == 5 ? 18 : 0
    },
    buttonWrapper: {
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      backgroundColor: isSelected ? COLORS.greenDark : COLORS.greenLight
    },
    text: {
      fontFamily: FONT.regular,
      fontSize: 12,
      color: COLORS.greenDark,
      textAlign: 'center'
    }
  })
}

export default dynamicStyles

