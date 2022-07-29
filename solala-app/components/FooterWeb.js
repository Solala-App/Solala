import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../constants";

const { colorPalette } = theme;

const Footer = () => {
  return <View style={footerStyles.box}></View>;
};

export const footerStyles = StyleSheet.create({
  box: {
    backgroundColor: colorPalette.terracotta,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 100,
    bottom: 0,
    position: "absolute",
  },
});

export default Footer;
