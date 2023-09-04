import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (index) => ({
    height: 156,
    width: 156,
    marginLeft: index > 0 ? 10 : 0,
    marginRight: index === 9 ? 18 : 0,
    borderRadius: 10,
  }),
  logoContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: "center",
    height: "50%",
    alignItems: "center",
  },
  cardImage: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: "100%",
    width: "100%",
  },
  detailContainer: {
    flex: 1,
    padding: 9,
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
    fontSize: 14
  },
  infoText: {
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
    fontSize: 12,
    paddingLeft: 5
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  }

});

export default styles;
