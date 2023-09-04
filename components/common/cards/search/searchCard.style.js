import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (index) => ({    
    height: 287,
    width: "100%",
    marginTop: index > 0 ? 15 : 0,
    justifyContent:'space-between',
    backgroundColor: COLORS.black,
    borderRadius: 10,    
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer:{
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,   
    justifyContent: "center",
    height:"50%",
    alignItems: "center",
  },
  cardImage: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: "100%",
    width: "100%", 
  },
  detailContainer:{
    flex: 1, 
    padding:9, 
    
  },
  title:{
    fontFamily:FONT.bold, 
    color: COLORS.greenLight, 
    fontSize:16
  },
  infoText:{
    fontFamily:FONT.regular, 
    color: COLORS.lightWhite, 
    fontSize:12, 
    paddingLeft:5
  },
  infoContainer:{
    flexDirection: 'row', 
    backgroundColor: COLORS.greenLight,
    borderRadius: 30,
    paddingHorizontal: 9,
    alignItems:'center',
    justifyContent:'center',
    minWidth: 80,
    marginLeft: 6
  },
  descriptionText:{
    marginTop: 4,
    fontFamily: FONT.regular,
    fontSize: 13,
    color: COLORS.lightWhite
  },
  
});

export default styles;
