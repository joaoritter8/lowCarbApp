import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";


const dynamicStyles = (index: number) => {
  return StyleSheet.create({
    container: {         
        height: 150,
        width: 150,
        marginLeft: index > 0 ? 10 : 0,
        marginRight: index === 9 ? 18 : 0,
        backgroundColor: COLORS.greenLight,
        borderRadius: 10,                 
    },
    
  })
}

export default dynamicStyles
  
