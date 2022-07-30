import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Components from "../../components";
import { theme } from "../../constants";
const { light, size, text, colorPalette } = theme;

export default function Todo() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.row}></View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Components.Card />
          </View>
          <View style={styles.card}>
            <Components.Card />
          </View>
          <View style={styles.card}>
            <Components.Card />
          </View>
          <View style={styles.card}>
            <Components.Card />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Components.Card />
          </View>
          <View style={styles.card}>
            <Components.Card />
          </View>
          <View style={styles.card}>
            <Components.Card />
          </View>
          <View style={styles.card}>
            <Components.Card />
          </View>
        </View>
      </View>
      <Components.Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.primary,
  },
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: size.padding,
    paddingRight: size.padding,
    paddingTop: size.padding,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  card: {
    flex: 1,
    margin: size.margin,
  },
  text: {
    ...text.body,
    color: colorPalette.white,
  },
  textBubble: {
    padding: size.innerPadding,
    marginHorizontal: size.margin,
    marginBottom: size.margin,
    backgroundColor: colorPalette.terracotta,
    borderRadius: size.borderRadius,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    opacity: 0.7,
  },
});
