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

  cardHeader: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 30,
    fontFamily: "Montserrat Alternates",
    fontWeight: "bold",
    /*font-family: 'Courgette', cursive,*/
    color: "white",
    position: "absolute",
    borderRadius: 30,
    backgroundColor: "#126760",
    opacity: 70,
  },

  cardItem: {
    backgroundColor: "#E3FFEB",
    width: 400,
    borderRadius: 30,
    height: 20,
    padding: 20,
    fontSize: 24,
    color: "#126760",
    fontFamily: "Montserrat Alternates",
    fontWeight: "bold",
  },

  button: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    height: 220,
    width: 500,
    alignItems: "center",
    paddingTop: 70,
  },

  cardObjectLeft: {
    /*checkbox bubble, time, reset, ect */
    paddingRight: 50,
  },

  scrollDown: {
    height: 30,
    width: 50,
    alignContent: "center",
    paddingTop: 10,
    paddingRight: 15,
  },

  addButton: {
    height: 50,
    width: 50,
    position: "absolute",
    left: 430,
  },
});

export default function homepage() {
  return <View style={styles.card}></View>;
}
