import * as React from "react";
import { TextInput, StyleSheet, View } from "react-native";

import { theme } from "../constants";

const { colorPalette, shadowProp, size } = theme;

const TextInputField = (props) => {
  const [text, onChangeText] = React.useState(null);

  let cardStyle = styles.cardLight;
  let textStyle = styles.textStyleLight;
  switch (props.color) {
    case "dark":
      cardStyle = styles.cardDark;
      textStyle = colorPalette.forest;
      break;
    case "accent":
      cardStyle = styles.cardAccent;
      textStyle = colorPalette.forest;
      break;

    default:
      cardStyle = styles.cardLight;
      textStyle = colorPalette.white;
      break;
  }

  if (props.multiline) {
    return (
      <View style={cardStyle}>
        <TextInput
          multiline
          onChangeText={onChangeText}
          value={text}
          placeholder="useless placeholder"
          numberOfLines={props.numberOfLines}
          placeholderTextColor={textStyle}
        />
      </View>
    );
  } else {
    return (
      <View style={cardStyle}>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder={props.placeholder}
          placeholderTextColor={textStyle}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  cardDark: {
    padding: size.innerPadding,
    margin: size.margin,
    backgroundColor: colorPalette.white,
    borderRadius: size.borderRadius,
    alignSelf: "stretch",
    ...shadowProp,
  },
  cardLight: {
    padding: size.innerPadding,
    margin: size.margin,
    backgroundColor: colorPalette.forest,
    borderRadius: size.borderRadius,
    alignSelf: "stretch",
    ...shadowProp,
  },
  cardAccent: {
    padding: size.innerPadding,
    margin: size.margin,
    backgroundColor: colorPalette.jade,
    borderRadius: size.borderRadius,
    alignSelf: "stretch",
    ...shadowProp,
  },
});

export default TextInputField;
