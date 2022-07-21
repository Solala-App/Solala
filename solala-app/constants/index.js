import { RFValue } from "react-native-responsive-fontsize";

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

const fonts = {
  title: "'Courgette', sans-serif",
  body: "'Monsterrat_Alt_Regular', sans-serif",
  h1: "'Monsterrat_Alt_Black', sans-serif",
};

export const theme = {
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
    borderRadius: 30,
    textBoxRadius: 30,
    icon_size_sm: RFValue(20),
  },
  text: {
    title: {
      fontSize: RFValue(18),
      fontFamily: fonts.title,
    },
    h1: {
      fontSize: RFValue(18),
      fontFamily: fonts.h1,
    },
    body: {
      fontSize: RFValue(14),
      fontFamily: fonts.body,
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
