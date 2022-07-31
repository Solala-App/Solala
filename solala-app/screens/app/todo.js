import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import * as Components from "../../components";
import { Titles } from "../../components/ToDoCard.js";
import { theme } from "../../constants";
const { light, size } = theme;
//<Components.SelectionButton title="Date:" data="Dates" />

export default function Todo() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.topBar} />

        <View style={styles.row}>
          <View style={styles.card}>
            <Components.ToDoCard title={Titles.Monday} />
          </View>
          <View style={styles.card}>
            <Components.ToDoCard title={Titles.Tuesday} />
          </View>
          <View style={styles.card}>
            <Components.ToDoCard title={Titles.Wednesday} />
          </View>
          <View style={styles.card}>
            <Components.ToDoCard title={Titles.Thursday} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Components.ToDoCard title={Titles.Friday} />
          </View>
          <View style={styles.card}>
            <Components.ToDoCard title={Titles.Saturday} />
          </View>
          <View style={styles.card}>
            <Components.ToDoCard title={Titles.Sunday} />
          </View>
          <View style={styles.card}>
            <Components.ToDoCard title={Titles.NextWeek} />
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
  topBar: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },
  card: {
    flex: 1,
    margin: size.margin,
  },
});
