import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";


const dynamicStyles = (index: number) => {
  return StyleSheet.create({
    container: {
        flex:1,
        height: 200,
        width: 200,
        marginLeft: index > 0 ? 10 : 0,
        marginRight: index == 9 ? 18 :0,
        borderRadius: 10,   
    },
    
  })
}

export default dynamicStyles
  
