import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { theme } from "../constants";

const { colorPalette, size, text, light } = theme;

const Zoom = (props) => {
  let temp = null;

  if (React.isValidElement(props.header)) {
    temp = props.header;
  } else {
    temp = <Text style={styles.textBox}> {props.header} </Text>;
  }

  return (
    <View style={styles.zoomWindow}>
      {temp}
      <Text style={styles.textBox}>{props.completion}</Text>
      <Text style={styles.textBox}>{props.congratulation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  zoomWindow: {
    backgroundColor: light.accent,
    opacity: 0.7,
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "90%",
    height: "90%",
    position: "absolute",
    maxHeight: size.maxHeight,
    maxWidth: size.maxWidth,
    borderRadius: size.borderRadius,
  },

  textBox: {
    ...text.body,
    color: colorPalette.white,
  },
});

export default Zoom;
