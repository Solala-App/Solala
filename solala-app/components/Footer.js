import React from "react";
import { View, StyleSheet, Platform, Pressable, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Greenhouse from "../../assets/favicons_light/greenhouse.png";
import Calendar from "../../assets/favicons_light/calendar.png";
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

  return (
    <View style={footerStyles.box}>
      {(Platform.OS === "android" || Platform.OS === "ios") && (
        <>
                  <Pressable onPress={handleGreenHousePress}>
                      <Image style={footerStyles.button} source={require("../../assets/favicons_light/greenhouse.png")}/>
          </Pressable>

          <Pressable onPress={handleCalendarPress}>
          </Pressable>

          <Pressable onPress={handleToDoPress}>
          </Pressable>
        </>
      )}
    </View>
  );
};

const icon_size = RFValue(50);
export const footerStyles = StyleSheet.create({
  box: {
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
      width: icon_size
  },
});

export default Footer;
