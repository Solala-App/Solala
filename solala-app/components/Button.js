import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

import { theme } from "../constants";

const { colorPalette, text, shadowProp, size } = theme;

const NavButton = (props) => {
  const navigation = useNavigation();
  let buttonStyle = styles.buttonLight;
  let textStyle = styles.textStyleLight;
  switch (props.color) {
    case "dark":
      buttonStyle = styles.buttonDark;
      textStyle = styles.textStyleDark;
      break;
    case "accent":
      buttonStyle = styles.buttonAccent;
      textStyle = styles.textStyleAccent;
      break;

    default:
      buttonStyle = styles.buttonLight;
      textStyle = styles.textStyleLight;
      break;
  }

  const handleClick = (event) => {
    if (typeof props.onClick === "function") {
      props.onClick(event);
    }
    if (props.navigateTo) {
      navigation.navigate(props.navigateTo);
    }
  };
  return (
    <Pressable style={buttonStyle} onPress={handleClick}>
      <Text style={textStyle}>{props.title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonDark: {
    padding: size.innerPadding,
    margin: size.margin,
    backgroundColor: colorPalette.white,
    borderRadius: size.borderRadius,
    textAlign: "center",
    ...shadowProp,
  },
  textStyleDark: {
    ...text.body,
    color: colorPalette.forest,
  },
  buttonLight: {
    padding: size.innerPadding,
    margin: size.margin,
    backgroundColor: colorPalette.forest,
    borderRadius: size.borderRadius,
    textAlign: "center",
    ...shadowProp,
  },
  textStyleLight: {
    ...text.body,
    color: colorPalette.white,
  },
  buttonAccent: {
    padding: size.innerPadding,
    margin: size.margin,
    backgroundColor: colorPalette.jade,
    borderRadius: size.borderRadius,
    textAlign: "center",
    ...shadowProp,
  },
  textStyleAccent: {
    ...text.body,
    color: colorPalette.forest,
  },
});

export default NavButton;
