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
const Calendar = ["None", "Daily", "Weekly", "Monthly"];

//use props title {name of button} and data {which data to use}
//To add other kinds, create a new Data felid above,
//and in the function below add a repeat index and case for it's associated data prop

export default function SelectionButton(props) {
  const [repeatIndexDate, setRepeatIndexDate] = React.useState(0);
  const [repeatIndexToDoView, setRepeatIndexToDoView] = React.useState(0);
  const [repeatIndexMonth, setRepeatIndexMonth] = React.useState(0);
  const [repeatIndexCalendar, setRepeatIndexCalendar] = React.useState(0);

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
    case "calendar":
      dataType = Calendar;
      repeatIndex = repeatIndexCalendar;
      setRepeatIndex = setRepeatIndexCalendar;
      break;

    default:
      dataType = Dates;
      repeatIndex = repeatIndexDate;
      setRepeatIndex = setRepeatIndexDate;
      break;
  }
  let buttonStyle = styles.buttonLight;
  let textStyle = styles.textStyleLight;
  if (Platform.OS === "ios" || Platform.OS === "android") {
    switch (props.color) {
      case "dark":
        buttonStyle = styles.buttonDark;
        textStyle = styles.textStyleDarkMobile;
        break;
      case "accent":
        buttonStyle = styles.buttonAccent;
        textStyle = styles.textStyleAccentMobile;
        break;
      case "terracotta":
        buttonStyle = styles.buttonTerracotta;
        textStyle = styles.textStyleLightMobile;
        break;    

      default:
        buttonStyle = styles.buttonLight;
        textStyle = styles.textStyleLightMobile;
        break;
    }
  } else {
    switch (props.color) {
      case "dark":
        buttonStyle = styles.buttonDark;
        textStyle = styles.textStyleDark;
        break;
      case "accent":
        buttonStyle = styles.buttonAccent;
        textStyle = styles.textStyleAccent;
        break;
      case "terracotta":
        buttonStyle = styles.buttonTerracotta;
        textStyle = styles.textStyleLight;
        break;    

      default:
        buttonStyle = styles.buttonLight;
        textStyle = styles.textStyleLight;
        break;
    }
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
        <Favicon.ScrollLeft style={{ width: RFValue(5) }} />
        {(Platform.OS === "ios" || Platform.OS === "android") && (
          <ScrollLeft width={RFValue(5)} height={RFValue(5)} />
        )}
      </Pressable>

      <View style={styles.text}>
        <Text style={styles.text}>
          {" "}
          {props.title} {dataType[repeatIndex]}{" "}
        </Text>
      </View>
      <Pressable onPress={scrollRight}>
        <Favicon.ScrollRight style={{ width: RFValue(5) }} />
        {(Platform.OS === "ios" || Platform.OS === "android") && (
          <ScrollRight width={RFValue(5)} height={RFValue(5)} />
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
  buttonTerracotta: {
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
  buttonDark: {
    padding: size.innerPadding,
    marginHorizontal: size.margin,
    marginBottom: size.margin,
    backgroundColor: colorPalette.white,
    borderRadius: size.borderRadius,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    opacity: 0.7,
  },
  textStyleDark: {
    ...text.body,
    color: colorPalette.forest,
    textAlign: "center",
  },
  textStyleDarkMobile: {
    ...text.bodyMobile,
    color: colorPalette.forest,
    textAlign: "center",
  },
  buttonLight: {
    padding: size.innerPadding,
    marginHorizontal: size.margin,
    marginBottom: size.margin,
    backgroundColor: colorPalette.forest,
    borderRadius: size.borderRadius,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    opacity: 0.7,
  },
  textStyleLight: {
    ...text.body,
    color: colorPalette.white,
    textAlign: "center",
  },
  textStyleLightMobile: {
    ...text.bodyMobile,
    color: colorPalette.white,
    textAlign: "center",
  },
  buttonAccent: {
    padding: size.innerPadding,
    marginHorizontal: size.margin,
    marginBottom: size.margin,
    backgroundColor: colorPalette.jade,
    borderRadius: size.borderRadius,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    opacity: 0.7,
  },
  textStyleAccent: {
    ...text.body,
    color: colorPalette.forest,
    textAlign: "center",
  },
  textStyleAccentMobile: {
    ...text.bodyMobile,
    color: colorPalette.forest,
    textAlign: "center",
  },
});
