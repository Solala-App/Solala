import React from "react";
import { View, StyleSheet, Platform, Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Calendar from "../../assets/favicons_light/Calendar.png";
import Greenhouse from "../../assets/favicons_light/Greenhouse.png";
import ToDoList from "../../assets/favicons_light/ToDoList.png";
import { theme } from "../constants";

const { colorPalette } = theme;

const Footer = ({ navigation }) => {
  const handleGreenHousePress = () => {
    navigation.navigate("Homepage");
  };
  const handleCalendarPress = () => {
    navigation.navigate("Calendar");
  };
  const handleToDoPress = () => {
    navigation.navigate("Todo");
  };

  if (Platform.OS === "android" || Platform.OS === "ios") {
    return (
      <View style={footerStyles.boxMobile}>
        <Pressable onPress={handleGreenHousePress}>
          <Greenhouse width={icon_size} style={footerStyles.button} />
        </Pressable>

        <Pressable onPress={handleCalendarPress}>
          <Calendar width={icon_size} style={footerStyles.button} />
        </Pressable>

        <Pressable onPress={handleToDoPress}>
          <ToDoList width={icon_size} style={footerStyles.button} />
        </Pressable>
      </View>
    );
  } else {
    return <View style={footerStyles.box} />;
  }
};

const icon_size = RFValue(50);
export const footerStyles = StyleSheet.create({
  box: {
    backgroundColor: colorPalette.terracotta,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: RFValue(25),
    bottom: 0,
  },
  boxMobile: {
    backgroundColor: colorPalette.terracotta,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: RFValue(70),
    bottom: 0,
  },
  button: {
    top: RFValue(10),
    position: "relative",
    width: RFValue(50),
    height: RFValue(50),
  },
});

export default Footer;
