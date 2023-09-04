import { StyleSheet } from "react-native";

import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginVertical: 8,
  },
  inputWrapper:{
    width:'100%',
    flexDirection:'row',
    backgroundColor:COLORS.white, 
    paddingHorizontal: 11, 
    borderRadius: 10
  },
  labelText:{
    paddingLeft: 11, 
    paddingBottom: 5, 
    fontFamily:FONT.semiBold, 
    color:COLORS.black
  },
  inputText:{
    flex: 1,
    backgroundColor:COLORS.white, 
    height: 60, 
    width: "100%", 
    paddingLeft: 13, 
    fontFamily: FONT.regular, 
    borderRadius: 10,
    paddingRight: -10
  },
  icon:{
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    
       
        
  },
});

export default styles;
