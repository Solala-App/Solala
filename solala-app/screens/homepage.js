import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Components from "../components";

import { theme } from "../constants";
const { light, size } = theme;

export default function Homepage() {
  return (
      //Takes either a component or text as the header prop and displays that at the top of the component. Completion and congratulations props simply serve
      //as added input for describing what task was completed and a message.
      <View style={styles.container}>

          <Components.Zoom
              header={<Favicon.CheckLeaf style={{
                  width: RFValue(70),
                  height: RFValue(70),
                  opacity: "70%",
              }} />}

              completion="You Completed the Task Water Plants" congratulation="Great Job! You earned Vitamins for Bob!"
          />
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
