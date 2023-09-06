import { StyleSheet } from "react-native";

import { COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        width: "100%",
    },
    image: {
        flex: 1
    },
    backContainer: {
        position: 'absolute',
        top: 55,
        ustifyContent: 'center'
    },
    recipeContainer: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        top: 200,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center'

    },
    gestureContainer: {
        height: 30,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gestureIcon: {
        height: 4,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.grayDark,
        borderRadius: 25,
        marginVertical: 8
    },
    textTopButtons: {
        fontFamily: FONT.medium,
        color: COLORS.black,
        fontSize: 12
    },
    title: {
        fontSize: 20,
        fontFamily: FONT.extraBold,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },


});

export default styles;
