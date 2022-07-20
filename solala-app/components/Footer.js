import React from "react";
import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";

import GreenHouse from "../../assets/favicons_light/greenhouse.svg";
import Calendar from "../../assets/favicons_light/calendar.svg";
import ToDoList from "../../assets/favicons_light/to-do-list.svg";
import { theme } from "../constants";

const { colorPalette } = theme;

const Footer = () => {
  const handleGreenHousePress = () => {
    console.log("Navigate to Green House Page");
    //this.props.navigation.navigate('GreenHousePage');
  };
  const handleCalendarPress = () => {
    console.log("Navigate to Calendar Page");
  };
  const handleToDoPress = () => {
    console.log("Navigate to Reminders Page");
  };

  return (
    <View style={footerStyles.box}>
      {(Platform.OS === "android" || Platform.OS === "ios") && (
        <>
          <TouchableOpacity onPress={handleGreenHousePress}>
            <GreenHouse
              width={icon_size}
              height={icon_size}
              style={footerStyles.button}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCalendarPress}>
            <Calendar
              width={icon_size}
              height={icon_size}
              style={footerStyles.button}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToDoPress}>
            <ToDoList
              width={icon_size}
              height={icon_size}
              style={footerStyles.button}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const icon_size = 75;
export const footerStyles = StyleSheet.create({
  box: {
    backgroundColor: colorPalette.terracotta,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 100,
    bottom: 0,
    position: "absolute",
  },
  button: {
    top: 10,
    position: "relative",
    width: "75",
    height: "75",
  },
});

export default Footer;
