import { StyleSheet, useColorScheme } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES, THEME } from "../../../../constants";


const dynamicStyles = (index: number) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      height: 200,
      width: 200,
      marginLeft: index > 0 ? 10 : 0,
      marginRight: index == 9 ? 18 : 0,
      borderRadius: 10,
    },
    logoContainer: {
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      height: '65%'
    },
    cardImage: {
      borderRadius: 10,
      height: "100%",
      width: "100%",
    },
    detailContainer: {
      flex: 1,
      width: 200,
      padding: 6,
      paddingTop: 4,
      justifyContent: 'space-between',
    },
    title: {
      fontFamily: FONT.bold,
      fontSize: 16
    },
    infoText: {
      fontFamily: FONT.regular,
      color: COLORS.greenLight,
      fontSize: 14,
      paddingLeft: 5
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 2
    }
  })

};

export default dynamicStyles;
