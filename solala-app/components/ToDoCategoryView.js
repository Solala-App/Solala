import React from "react";
import { View, StyleSheet } from "react-native";

import { theme } from "../constants";
import ToDoCard from "./ToDoCard";
const { size } = theme;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Category",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Category",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Category",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Fourth Category",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Fifth Category",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e20d74",
    title: "Sixth Category",
  },
  {
    id: "1",
    title: "Seventh Category",
  },
  {
    id: "13",
    title: "Eighth Category",
  },
  {
    id: "122",
    title: "Ninth Category",
  },
];

const ToDoDateView = (props) => {
  return (
    <View style={styles.mainView}>
      <View style={[styles.row]}>
        <View style={styles.card}>
          <ToDoCard title="Today's Priorities" />
        </View>
        <View style={styles.card}>
          <ToDoCard title={DATA} />
        </View>
        <View style={styles.card}>
          <ToDoCard title={DATA} />
        </View>
        <View style={styles.card}>
          <ToDoCard title={DATA} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <ToDoCard title={DATA} />
        </View>
        <View style={styles.card}>
          <ToDoCard title={DATA} />
        </View>
        <View style={styles.card}>
          <ToDoCard title={DATA} />
        </View>
        <View style={styles.card}>
          <ToDoCard title="Next Week" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
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
export default ToDoDateView;
