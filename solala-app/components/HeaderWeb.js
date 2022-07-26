import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Components from "../components";

import { theme } from "../constants";
const { light, size, text } = theme;

export default function Home() {
  return (
    <View style={styles.container}>
      <Components.HeaderWeb />
      <View style={styles.mainView}>
        <View style={styles.heroSection}>
          <View style={styles.heroSectionHeader}>Stuff</View>
          <View style={styles.heroSectionBody}>Stuff</View>
        </View>
        <View style={styles.appFeatures}>
          <View style={styles.column1}>
            <View style={styles.card}>
              <Components.Card />
            </View>
            <View style={styles.card}>
              <Components.Card />
            </View>
          </View>

          <View style={styles.column2}>
            <View style={styles.card}>
              <Components.Card />
            </View>
            <View style={styles.card}>
              <Components.Card />
            </View>
          </View>
        </View>
      </View>
      <Components.Footer />
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
    flexDirection: "column",
    justifyContent: "space-between",
    padding: size.padding,
  },
  heroSection: { flex: 1, flexDirection: "column", alignItems: "center" },
  heroSectionHeader: { ...text.title, color: light.accent },
  heroSectionBody: { ...text.body, color: light.accent },
  appFeatures: { flexDirection: "row" },
  column1: {
    flex: 1,
    flexDirection: "column",
    marginRight: size.margin,
  },
  column2: {
    flex: 1,
    flexDirection: "column",
  },
  card: {
    flex: 1,
    paddingBottom: size.padding,
  },
});
