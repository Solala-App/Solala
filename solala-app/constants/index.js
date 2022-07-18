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
    },
    light: {
      primary: colorPalette.mint,
      secondary: colorPalette.jade,
      accent: colorPalette.forest,
    },
  },
  size: {
    padding: RFValue(19),
    borderRadius: 30,
    textBoxRadius: 30,
  },
  text: {
    h1: {
      fontSize: RFValue(30),
      fontFamily: fonts.Montserrat_Alt_Bold,
    },
  },
};
