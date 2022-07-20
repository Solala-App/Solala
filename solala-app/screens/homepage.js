import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer from "../components/Footer.js"

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

              <View style={styles.healthView}>
                  <View style={styles.card}></View>
                  <View style={styles.card}></View>
              </View>
          </View>
          <View style={styles.footer}><Footer/></View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      height:400  
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
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: 100,
        bottom: 0,
        position: 'absolute',
        backgroundColor: "#CB7236"
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
