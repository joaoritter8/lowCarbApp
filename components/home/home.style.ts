import { StyleSheet, useColorScheme } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES, THEME } from "../../constants";

const styles = StyleSheet.create({
  containerWelcome: {
    width:"100%",    
    marginTop: 10, 
    alignItems:'center',      
    flexDirection:'row'   
  }, 
  containerIntro:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical: 26,
    paddingRight: 18
  },
  containerButton:{
    width: 40, 
    height: 40,     
    borderRadius:10, 
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor: THEME == 'light' ? "#D9D9D9" : "#30393F"
  },
  containerCategories:{
    flex: 1,
    justifyContent:'center'
  },
  profilePicture:{
    width: 50,
    height: 50,
    borderRadius: 1000,
  },
  textWelcome:{
    fontFamily: FONT.regular,
    color: THEME == 'light' ? COLORS.black : COLORS.lightWhite,
    fontSize: 13,
    paddingLeft: 6
  },
  textIntro:{
    fontFamily: FONT.semiBold,
    fontSize: 20,
    color: THEME == 'light' ? COLORS.black : COLORS.lightWhite 
  },
  label:{
    fontFamily: FONT.semiBold,
    fontSize: 16,
    color: THEME == 'light'? COLORS.black : COLORS.lightWhite,    
  }
  
   
});

export default styles;
