import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Components from "../../components";

import { theme } from "../../constants";
const { light, size } = theme;

export default function Homepage() {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.column1}>
          <View style={styles.card}>
            <Components.Card />
          </View>
          <View style={styles.card}>
            <Components.Card />
          </View>
        </View>
        <View style={styles.column2} />
        <View style={styles.column3}>
          <View style={styles.card}>
            <Components.Card />
          </View>
          <View style={styles.card}>
            <Components.Card />
          </View>
        </View>
      </View>
      <Components.FooterWeb />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.primary,
  },
  mainView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: size.padding,
  },
  column1: {
    flex: 1,
    flexDirection: "column",
  },
  column2: {
    flex: 1,
    flexDirection: "column",
  },
  column3: {
    flex: 1,
    flexDirection: "column",
  },
  card: {
    flex: 1,
    marginBottom: size.margin,
  },
});
