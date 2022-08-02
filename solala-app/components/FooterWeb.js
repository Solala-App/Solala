import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../constants";

const { colorPalette } = theme;

const Footer = () => {
  if (Platform.OS === "android" || Platform.OS === "IOS") {
    return <View style={footerStyles.boxMobile} />;
  } else {
    return <View style={footerStyles.box} />;
  }
};

export const footerStyles = StyleSheet.create({
  box: {
    backgroundColor: colorPalette.terracotta,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: RFValue(25),
    bottom: 0,
    position: "absolute",
  },
  boxMobile: {
    backgroundColor: colorPalette.terracotta,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: RFValue(50),
    bottom: 0,
    position: "absolute",
  },
});

export default Footer;
