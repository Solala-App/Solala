import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../constants";

const { colors, size, text, shadowProp } = theme;

/* green bubble for menus */
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.secondary,
    padding: RFValue(20),
    width: "100%",
    marginVertical: RFValue(10),
    flexDirection: "column",
    alignItems: "center",
    borderRadius: size.borderRadius,
    opacity: 70,
    display: "flex",
    ...shadowProp,
  },
});

export default function homepage() {
  return <View style={styles.card}></View>;
}
