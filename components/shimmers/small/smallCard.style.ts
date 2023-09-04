import { StyleSheet } from "react-native";

const dynamicStyles = (index: number) => {
  return StyleSheet.create({
    container: {         
      height: 90,
      width: 156,
      flexDirection:'row',
      marginLeft: index > 0 ? 10 : 0,
      marginRight: index === 9 ? 18 :0,      
      borderRadius: 10,                     
    },
    
  })
}

export default dynamicStyles
  
