import * as React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { theme } from "../constants";

const { colorPalette, text, shadowProp, size } = theme;

const TextInputField = (props) => {
  const [text, onChangeText] = React.useState(null);
  const [isMultitext, setMultitext] = React.useState(false);

  let cardStyle = styles.cardLight;
  let textStyle = styles.textStyleLight;
  switch (props.color) {
    case "dark":
      cardStyle = styles.cardDark;
      textStyle = styles.textStyleDark;
      break;
    case "accent":
      cardStyle = styles.cardAccent;
      textStyle = styles.textStyleAccent;
      break;

    default:
      cardStyle = styles.cardLight;
      textStyle = styles.textStyleLight;
      break;
  }
  const handleText = () => {
    if (props.multiclick === "true") {
      props.multiclick;
    }
    if (props.navigateTo) {
      navigation.navigate(props.navigateTo);
    }
  };

  if (isMultitext) {
    return (
      <View style={cardStyle}>
        <TextInput
          multiline
          onChangeText={onChangeText}
          value={text}
          placeholder="useless placeholder"
          numberOfLines={props.numberOfLines}
        />
      </View>
    );
  } else {
    return (
      <View style={cardStyle}>
        <TextInput
          handleText
          onChangeText={onChangeText}
          value={text}
          placeholder={props.placeholder}
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
    textAlign: "center",
    ...shadowProp,
  },
  textStyleDark: {
    ...text.body,
    color: colorPalette.forest,
  },
  cardLight: {
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
  cardAccent: {
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

export default TextInputField;
