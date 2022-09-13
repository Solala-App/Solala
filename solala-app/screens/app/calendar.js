import React from "react";
import { View, StyleSheet } from "react-native";

import * as Components from "../../components";
import { Titles } from "../../components/Card";
import { theme } from "../../constants";
const { light, size } = theme;

export default function Calendar() {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.column}>
          <View style={styles.card}>
            <Components.Card title={Titles.TodayEvent} />
          </View>
          <View style={styles.card}>
            <Components.Card title={Titles.TodayEvent} />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.card}>
            <Components.Card title={Titles.TodayEvent} />
          </View>
          <View style={styles.card}>
            <Components.Card title={Titles.TodayEvent} />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.card}>
            <Components.Card title={Titles.TodayEvent} />
          </View>
          <View style={styles.card}>
            <Components.Card title={Titles.TodayEvent} />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.card}>
            <Components.Card title={Titles.TodayEvent} />
          </View>
          <View style={styles.card}>
            <Components.Card title={Titles.TodayEvent} />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: size.padding,
    paddingRight: size.padding,
    paddingBottom: size.padding,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    margin: size.margin,
  },
  card: {
    flex: 1,
    marginBottom: size.margin,
  },
});
