import React from "react";
import { View, StyleSheet, Dimensions, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Solala from "../../../assets/solala_js";
import * as Components from "../../components";
import { Titles } from "../../components/Card.js";
import { theme } from "../../constants";
const { light, size } = theme;

export default function Homepage() {
  if (Platform.OS === "ios" || Platform.OS === "android") {
    return (
      <View style={styles.container}>
        <View style={styles.mainViewMobile}>
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
              <View style={{ position: "absolute" }}>
                <Components.AnimationManager
                  size={100}
                  faceType={Solala.Happy}
                  animateFloat
                  animateSpin
                  animateWave={false}
                />
              </View>
            </View>
          </View>
        </View>
        <Components.Footer />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.column}>
            <View style={styles.card}>
              <Components.Card title={Titles.TodayEvent} />
            </View>
            <View style={styles.card}>
              <Components.Card title={Titles.Upcoming} />
            </View>
          </View>
          <View style={styles.columnSolala}>
            <Components.AnimationManager
              faceType={Solala.Happy}
              animateFloat={false}
              animateSpin
              animateWave
            />
          </View>
          <View style={styles.column}>
            <View style={styles.card}>
              <Components.Card title={Titles.HighPriority} />
            </View>
            <View style={styles.card}>
              <Components.Card title={Titles.BodyCheck} />
            </View>
          </View>
        </View>
        <Components.Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: light.primary,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - RFValue(25),
  },
  mainViewMobile: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: size.padding,
    paddingRight: size.padding,
    paddingTop: size.padding,
    paddingBottom: size.padding,
  },
  mainView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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
  column: {
    flexDirection: "column",
    alignSelf: "stretch",
    flex: 1,
  },
  columnSolala: {
    flexDirection: "column",
    alignSelf: "flex-end",
    flex: 1,
  },
  card: {
    flex: 1,
    margin: size.margin,
  },
});
