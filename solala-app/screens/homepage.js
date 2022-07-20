import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer, { footerStyles } from "../components/Footer.js";
import Card, { cardStyles } from "../components/Card.js";

export default function Homepage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.mainView}>
        <View style={styles.eventView}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>

        <View style={styles.solalaView}></View>
        <Card />
        <View style={styles.healthView}>
          <View style={styles.card}></View>
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    backgroundColor: "#E3FFEB",
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
