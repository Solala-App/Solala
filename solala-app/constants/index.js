import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

const colorPalette = {
  mint: "#E3FFEB",
  jade: "#7AB9A1",
  forest: "#126760",
  goldenrod: "#E1AD01",
  pink: "#EFC8C3",
  terracotta: "#CB7236",
  teal: "#29E0CC",
  darkBlue: "#1b7f95",
  black: "#141414",
  white: "#FFFFFF",
};

const fonts = async () => {
  await Font.loadAsync({
    Courgette: require("../../assets/fonts/Courgette-Regular.ttf"),
    MontserratAltBlack: require("../../assets/fonts/MontserratAlternates-Black.ttf"),
    MontserratAltBold: require("../../assets/fonts/MontserratAlternates-Bold.ttf"),
    MontserratAltMedium: require("../../assets/fonts/MontserratAlternates-Medium.ttf"),
    MontserratAltRegular: require("../../assets/fonts/MontserratAlternates-Regular.ttf"),
    MontserratAltLight: require("../../assets/fonts/MontserratAlternates-Light.ttf"),
  });
};

export default fonts;

export const theme = {
  fonts,
  colorPalette,
  fonts,
  dark: {
    primary: colorPalette.forest,
    secondary: colorPalette.jade,
    accent: colorPalette.mint,
    textPrimary: colorPalette.forest,
    textSecondary: colorPalette.white,
    hyperlink: colorPalette.teal,
    hyperlinkClicked: colorPalette.darkBlue,
  },
  light: {
    primary: colorPalette.mint,
    secondary: colorPalette.jade,
    accent: colorPalette.forest,
    textPrimary: colorPalette.white,
    textSecondary: colorPalette.forest,
  },
  size: {
    padding: RFValue(19),
    innerPadding: RFValue(4),
    margin: RFValue(10),
    borderRadius: RFValue(10),
    textBoxRadius: RFValue(30),
    icon_size_sm: RFValue(20),
  },
  text: {
    title: {
      fontSize: RFValue(14),
      fontFamily: "Courgette",
    },
    h1: {
      fontSize: RFValue(14),
      fontFamily: "MontserratAltBlack",
    },
    h2: {
      fontSize: RFValue(12),
      fontFamily: "MontserratAltBold",
    },
    body: {
      fontSize: RFValue(10),
      fontFamily: "MontserratAltRegular",
    },
    mobileGreeting: {
      fontSize: RFValue(25),
      fontFamily: "Courgette",
    },
    mobileAnnouncment: {
      fontSize: RFValue(20),
      fontFamily: "MontserratAltRegular",
    },
  },

  shadowProp: {
    /* Apply to add a shadow to an object */
    shadowColor: "#141414",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
};
