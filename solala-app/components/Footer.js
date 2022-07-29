import React from "react";
import { View, StyleSheet, Platform, Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Favicon from "../../assets/favicons_js";
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
            <Favicon.Greenhouse style={footerStyles.button} />
          </Pressable>

          <Pressable onPress={handleCalendarPress}>
            <Favicon.Calendar style={footerStyles.button} />
          </Pressable>

          <Pressable onPress={handleToDoPress}>
            <Favicon.ToDoList style={footerStyles.button} />
          </Pressable>
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
    height: RFValue(70),
    bottom: 0,
    position: "absolute",
  },
  button: {
    top: RFValue(10),
    position: "relative",
    width: RFValue(50),
    height: RFValue(50),
  },
});

export default Footer;
