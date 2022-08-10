import { signOut, getAuth } from "firebase/auth";
import React from "react";
import { View, StyleSheet, Platform, Pressable, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Icons from "../../assets/favicons_light";
import { theme } from "../constants";

const { colorPalette } = theme;
const auth = getAuth();

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
  const handleSignOut = () => {
    signOut(auth);
  };

  if (Platform.OS === "ios" || Platform.OS === "android") {
    return (
      <View style={footerStyles.boxMobile}>
        <Pressable onPress={handleGreenHousePress}>
          <Image style={footerStyles.button} source={Icons.Greenhouse} />
        </Pressable>

        <Pressable onPress={handleCalendarPress}>
          <Image style={footerStyles.button} source={Icons.Calendar} />
        </Pressable>

        <Pressable onPress={handleToDoPress}>
          <Image style={footerStyles.button} source={Icons.ToDoList} />
        </Pressable>

        <Pressable onPress={handleSignOut}>
          <Image style={footerStyles.button} source={Icons.LogOut} />
        </Pressable>
      </View>
    );
  }
  return <View style={footerStyles.box} />;
};

const icon_size = RFValue(50);
export const footerStyles = StyleSheet.create({
  box: {
    backgroundColor: colorPalette.terracotta,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: RFValue(20),
    bottom: 0,
    position: "absolute",
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
    height: RFValue(50),
    width: icon_size,
  },
});

export default Footer;
