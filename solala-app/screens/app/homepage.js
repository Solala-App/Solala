import React from "react";
import { View, StyleSheet, Dimensions, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Components from "../../components";
import { Titles } from "../../components/Card.js";
import { theme } from "../../constants";
import { useAuthentication } from "../utils/hooks/useAuthentication";
const { light, size } = theme;

export default function Homepage() {
  const { user } = useAuthentication();
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Components.Card title={Titles.TodayEvent} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Components.Card title={Titles.HighPriority} />
          </View>
          <View style={styles.card}>
            <Components.Card title={Titles.Upcoming} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Components.Card title={Titles.BodyCheck} />
          </View>
        </View>
      </View>
      <Components.Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: light.primary,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - RFValue(25),
  },
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: size.padding,
    paddingRight: size.padding,
    paddingTop: size.padding,
    paddingBottom: size.padding,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  card: {
    flex: 1,
    margin: size.margin,
  },
});
