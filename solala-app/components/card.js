import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../constants";

const { colors, size, text, shadowProp } = theme;

/* green bubble for menus */
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.secondary,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: size.borderRadius,
    opacity: 70,
    flex: 1,
    paddingBottom: size.padding,
    ...shadowProp,
  },

  cardHeader: {
    flex: 1,
    ...text.h1,
    fontColor: colors.light.textPrimary,
    borderRadius: size.borderRadius,
    backgroundColor: colors.light.primary,
    opacity: 70,
    justifyContent: "center",
  },

  cardItem: {
    flex: 1,
    paddingVertical: size.innerPadding,
    paddingRight: size.innerPadding,
    marginHorizontal: size.margin,
    marginTop: size.margin,
    backgroundColor: colors.light.primary,
    borderRadius: size.borderRadius,
    padding: size.padding,
    ...text.h1,
    fontColor: colors.light.textPrimary,
  },

  button: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: RFValue(70),
  },

  cardObjectLeft: {
    /*checkbox bubble, time, reset, ect */
    flex: 1,
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  scrollDown: {
    flex: 1,
    alignContent: "center",
    paddingTop: RFValue(10),
    paddingRight: RFValue(15),
  },
});

export default function card() {
  return (
    <View style={styles.card}>
      //Card Header
      <View style={styles.cardHeader}>
        //left margin
        <View
          style={{
            flex: 1,
          }}
        />
        //textbox
        <View
          style={{
            flex: 10,
          }}
        />
        //add items or right margin
        <View
          style={{
            flex: 1,
          }}
        />
      </View>
      //Items for Card
      <View style={styles.cardItem}>
        //checkbox/time/reset....
        <View style={styles.cardObjectLeft} />
        //text
        <View
          style={{
            flex: 10,
          }}
        />
      </View>
      //arrow to scroll
      <View
        style={{
          justifyContent: "center",
          position: "absolute",
          bottom: 10,
        }}
      />
    </View>
  );
}
