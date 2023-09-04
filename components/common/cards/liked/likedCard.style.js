import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (index) => ({
    height: 100,
    width: "100%",
    flexDirection:'row',
    marginTop: index > 0 ? 10 : 0,
    backgroundColor: COLORS.white,
    borderRadius: 10,    
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  detailWrapper:{
    
    padding:5,
    width: "63%", 
    justifyContent:'space-between'
  },
  title:{
    fontFamily:FONT.bold, 
    color: COLORS.black, 
    fontSize: 14
  },
  timeContainer:{
    flexDirection:'row', 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius: 10, 
    backgroundColor:COLORS.greenLight, 
    paddingVertical: 3
  },
  timeText:{
    fontFamily:FONT.regular, 
    color: COLORS.lightWhite, 
    fontSize:12, 
    paddingLeft:5
  },
  logoContainer:{
    borderRadius:10,
    height:"100%",
    width: 100,
    alignItems: "center",
  },
  cardImage: {
    borderRadius:10,
    height: "100%",
    width: "100%", 
  },
  descriptionText:{
    fontFamily: FONT.regular,
    fontSize: 10,
    color: COLORS.black
  },
  infoContainer:{
    flexDirection: 'row', 
    alignItems:'center', 
    marginTop: 2
  },
  infoText:{
    fontFamily:FONT.regular, 
    color: COLORS.greenLight, 
    fontSize:14, 
    paddingLeft:5
  },
   
});

export default styles;
