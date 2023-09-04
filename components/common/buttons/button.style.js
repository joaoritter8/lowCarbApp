import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    width: 221,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: SIZES.xSmall,
    backgroundColor: COLORS.greenDark,
  },
  containerCancel: {
    height: 60,
    width: 158,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: SIZES.xSmall,
    borderWidth: 2,
    borderColor: COLORS.grayDark,
  },
  icon: {
    justifyContent: 'center',
    height: 15,
    width: 15
  },
  name: {
    fontSize: 16,
    fontFamily: FONT.bold,
    color: COLORS.white,
  },
  nameApply: {
    fontSize: 16,
    fontFamily: FONT.semiBold,
    color: COLORS.white,
  },
  nameCancel: {
    fontSize: 16,
    fontFamily: FONT.semiBold,
    color: COLORS.grayDark,
  }

});

export default styles;
