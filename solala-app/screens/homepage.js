import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Components from "../components";

import { theme } from "../constants";
const { light } = theme;

export default function Homepage() {
  return (
    <View style={styles.container}>
              <Components.Header />
          
      <View style={styles.mainView}>
        <View style={styles.eventView}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>

        <View style={styles.solalaView}></View>
        <View style={styles.healthView}>
          <View style={styles.card}></View>
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
  header: {
    display: "flex",
    flexDirection: "row",
    JustifyContent: "space-between",
    backgroundColor: "#EFC8C3",
    alignItems: "center",
    width: "100%",
  },
  mainView: {
    display: "flex",
    flexDirection: "row",
    JustifyContent: "space-between",
    backgroundColor: "#E3FFEB",
    alignItems: "center",
    width: "100%",
  },
  eventView: {
    display: "flex",
    flexDirection: "column",
    JustifyContent: "space-between",
    backgroundColor: "#CB7236",
    alignItems: "center",
  },
  solalaView: {
    display: "flex",
    flexDirection: "column",
    JustifyContent: "space-between",
    backgroundColor: "#CB7236",
    alignItems: "center",
  },
  healthView: {
    display: "flex",
    flexDirection: "column",
    JustifyContent: "space-between",
    backgroundColor: "#CB7236",
    alignItems: "center",
  },
});
