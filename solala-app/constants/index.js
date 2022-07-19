import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const colorPalette = {
  mint: "#E3FFEB",
  jade: "#7AB9A1",
  forest: "#126760",
  goldenrod: "#E1AD01",
  pink: "#EFC8C3",
  terracotta: "#CB7236",
  hyperlink: "#29E0CC",
  hyperlink_clicked: "#1b7f95",
  black: "#141414",
  white: "#FFFFFF",
};

const fonts = useFonts({
  Courgette: require("../../assets/fonts/Courgette-Regular.ttf"),
  Montserrat_Alt_Black: require("../../assets/fonts/MontserratAlternates-Black.ttf"),
  Montserrat_Alt_Bold: require("../../assets/fonts/MontserratAlternates-Bold.ttf"),
  Montserrat_Alt_Medium: require("../../assets/fonts/MontserratAlternates-Medium.ttf"),
  Montserrat_Alt_Regular: require("../../assets/fonts/MontserratAlternates-Regular.ttf"),
  Montserrat_Alt_Light: require("../../assets/fonts/MontserratAlternates-Light.ttf"),
});

export const theme = {
  colors: {
    dark: {
      primary: colorPalette.forest,
      secondary: colorPalette.jade,
      accent: colorPalette.mint,
      textPrimary: colorPalette.forest,
      textSecondary: colorPalette.white,
    },
    light: {
      primary: colorPalette.mint,
      secondary: colorPalette.jade,
      accent: colorPalette.forest,
      textPrimary: colorPalette.white,
      textSecondary: colorPalette.forest,
    },
  },
  size: {
    padding: RFValue(19),
    innerPadding: RFValue(5),
    margin: RFValue(20),
    borderRadius: 30,
    textBoxRadius: 30,
  },
  text: {
    h1: {
      fontSize: RFValue(30),
      fontFamily: fonts.Montserrat_Alt_Bold,
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
