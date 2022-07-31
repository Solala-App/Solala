import React from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";
import ScrollLeft from "../../assets/favicons_light/ScrollLeft.png";
import ScrollRight from "../../assets/favicons_light/ScrollRight.png";
import { theme } from "../constants";
const { size, text, colorPalette } = theme;

const Dates = ["7/31-8/6", "8/7-8/13", "8/14-8/20", "8/21-8/27"];
const ToDoView = ["Planner", "Category", "Date"];
const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//use props title {name of button} and data {which data to use}
//To add other kinds, create a new Data felid above,
//and in the function below add a repeat index and case for it's associated data prop

export default function SelectionButton(props) {
  const [repeatIndexDate, setRepeatIndexDate] = React.useState(0);
  const [repeatIndexToDoView, setRepeatIndexToDoView] = React.useState(0);
  const [repeatIndexMonth, setRepeatIndexMonth] = React.useState(0);

  let repeatIndex = repeatIndexDate;
  let setRepeatIndex = setRepeatIndexDate;
  let dataType = Dates;
  switch (props.data) {
    case "todo view":
      dataType = ToDoView;
      repeatIndex = repeatIndexToDoView;
      setRepeatIndex = setRepeatIndexToDoView;
      break;
    case "month":
      dataType = Month;
      repeatIndex = repeatIndexMonth;
      setRepeatIndex = setRepeatIndexMonth;
      break;

    default:
      dataType = Dates;
      repeatIndex = repeatIndexDate;
      setRepeatIndex = setRepeatIndexDate;
      break;
  }

  const scrollLeft = () => {
    if (repeatIndex === 0) {
      setRepeatIndex(dataType.length - 1);
    } else {
      setRepeatIndex(() => repeatIndex - 1);
    }
  };

  const scrollRight = () => {
    if (repeatIndex === dataType.length - 1) {
      setRepeatIndex(0);
    } else {
      setRepeatIndex(() => repeatIndex + 1);
    }
  };

  return (
    <View style={styles.textBubble}>
      <Pressable onPress={scrollLeft}>
        <Favicon.ScrollLeft style={{ width: RFValue(10) }} />
        {(Platform.OS === "ios" || Platform.OS === "android") && (
          <ScrollLeft width={RFValue(15)} height={RFValue(15)} />
        )}
      </Pressable>

      <View style={styles.text}>
        <Text style={styles.text}>
          {" "}
          {props.title} {dataType[repeatIndex]}{" "}
        </Text>
      </View>
      <Pressable onPress={scrollRight}>
        <Favicon.ScrollRight style={{ width: RFValue(10) }} />
        {(Platform.OS === "ios" || Platform.OS === "android") && (
          <ScrollRight width={RFValue(15)} height={RFValue(15)} />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...text.body,
    color: colorPalette.white,
  },
  textBubble: {
    padding: size.innerPadding,
    marginHorizontal: size.margin,
    marginBottom: size.margin,
    backgroundColor: colorPalette.terracotta,
    borderRadius: size.borderRadius,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    opacity: 0.7,
  },
});
