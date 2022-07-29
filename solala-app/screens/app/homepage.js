import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Components from "../../components";

import { theme } from "../../constants";
const { light, size } = theme;

export default function Homepage() {
  if (Platform.OS === "android" || Platform.OS === "IOS") {
    return (
      <View style={styles.container}>
        <View style={styles.mainViewMobile}>
          <View style={styles.row1}>
            <View style={styles.card}>
              <Components.Card />
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.card}>
              <Components.Card />
            </View>
            <View style={styles.card}>
              <Components.Card />
            </View>
          </View>
          <View style={styles.row3}>
            <View style={styles.card}>
              <Components.Card />
            </View>
          </View>
        </View>
      </View>
    );
  } else {
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
}
//<Components.Temp greeting="Good Morning!" announcement="Meet Solala" />

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
  mainViewMobile: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
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
  row1: {
    flexDirection: "row",
  },
  row2: {
    flexDirection: "row",
  },
  row3: {
    flexDirection: "row",
  },
  card: { flex: 1, height: "100%", marginBottom: size.margin },
});
