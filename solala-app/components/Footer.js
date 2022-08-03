import React from "react";
import { View, StyleSheet, Platform, Pressable, Image } from "react-native";
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

    if (Platform.OS === 'ios' || Platform.OS == 'android') {
        return (
            <View style={footerStyles.boxMobile}>
                <Pressable onPress={handleGreenHousePress}>
                    <Image style={footerStyles.button} source={Greenhouse} />
                </Pressable>

                <Pressable onPress={handleCalendarPress}>
                    <Image style={footerStyles.button} source={Calendar} />
                </Pressable>

                <Pressable onPress={handleToDoPress}>
                    <Image style={footerStyles.button} source={ToDoList} />
                </Pressable>
            </View>
        );
    }
    return <View style={footerStyles.box}/>
    
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
    position: "absolute",
  },
  boxMobile: {
    backgroundColor: colorPalette.terracotta,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: RFValue(70),
    bottom: RFValue(70),
  },
  button: {
    top: RFValue(10),
    position: "relative",
    height: RFValue(50),
    width: icon_size,
  },
});

export default Footer;
