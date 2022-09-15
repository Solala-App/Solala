import { format, set } from "date-fns";
import React from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";

import { theme } from "../constants";
const { size, text, colorPalette } = theme;

//use props title {name of button} and data {which data to use}
//To add other kinds, create a new Data felid above,
//and in the function below add a repeat index and case for it's associated data prop

export default function SelectionButton(props) {
  const getButtonData = () => {
    switch (props.title) {
      case "Sort:":
        return props.sortTypes[props.data];
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
        if (props.data === 0) {
          props.updateVariable(props.sortTypes.length - 1);
        } else {
          props.updateVariable(() => props.data - 1);
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
        if (props.data === props.sortTypes.length - 1) {
          props.updateVariable(0);
        } else {
          props.updateVariable(props.data + 1);
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
