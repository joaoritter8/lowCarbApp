import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES, THEME } from "../../../../constants";

const styles = StyleSheet.create({
  container: (index) => ({
    height: 90,
    width: 156,
    flexDirection: 'row',
    marginLeft: index > 0 ? 10 : 0,
    marginRight: index === 9 ? 18 : 0,
    borderRadius: 10,

  }),
  detailWrapper: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: 14,
    color: COLORS.lightWhite
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.greenLight,
    paddingVertical: 3
  },
  timeText: {
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
    fontSize: 12,
    paddingLeft: 5
  },
  logoContainer: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: "100%",
    width: 75,
    alignItems: "center",
  },
  cardImage: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: "100%",
    width: "100%",
  },

});

export default styles;
