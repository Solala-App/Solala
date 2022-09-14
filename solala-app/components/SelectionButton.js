import { format, set } from "date-fns";
import { getAuth } from "firebase/auth";
import { child, getDatabase, push, ref, update } from "firebase/database";
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
  const [repeatIndex, setRepeatIndex] = React.useState(0);

  const getButtonData = () => {
    switch (props.title) {
      case "Sort:":
        return ToDoView[repeatIndex];
      case "Date:":
        const endDate = new Date(props.data);
        endDate.setDate(props.data.getDate() + props.numCards);
        return format(props.data, "MM/dd") + " - " + format(endDate, "MM/dd");
      default:
        return;
    }
  };

  const scrollLeft = () => {
    switch (props.title) {
      case "Sort:":
        if (repeatIndex === 0) {
          setRepeatIndex(ToDoView.length - 1);
        } else {
          setRepeatIndex(() => repeatIndex - 1);
        }
        break;
      case "Date:":
        const startDate = new Date(props.data);
        startDate.setDate(startDate.getDate() - props.numCards);
        props.updateVariable(startDate);
        break;
      default:
    }
  };

  const scrollRight = () => {
    switch (props.title) {
      case "Sort:":
        if (repeatIndex === ToDoView.length - 1) {
          setRepeatIndex(0);
        } else {
          setRepeatIndex(() => repeatIndex + 1);
        }
        break;
      case "Date:":
        const startDate = new Date(props.data);
        startDate.setDate(startDate.getDate() + props.numCards);
        props.updateVariable(startDate);
        break;
      default:
    }
  };

  return (
    <View style={styles.textBubble}>
      <Pressable onPress={scrollLeft}>
        <Favicon.ScrollLeft
          iconColor="light"
          style={{ width: RFValue(10), height: RFValue(10) }}
        />
      </Pressable>

      <View style={styles.text}>
        <Text style={styles.text}>
          {props.title} {getButtonData()}{" "}
        </Text>
      </View>
      <Pressable onPress={scrollRight}>
        <Favicon.ScrollRight
          iconColor="light"
          style={{ width: RFValue(10), height: RFValue(10) }}
        />
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
