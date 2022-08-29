import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as IconsLight from "../../assets/favicons_light";
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
      <Text style={styles.textBox}>
        txt
        {props.completion}
      </Text>
      <Text style={styles.textBox}>t{props.congratulation}</Text>
      <Pressable onPress={props.zoom}>
        <Image
          source={IconsLight.Cancel}
          style={{ width: RFValue(12), height: RFValue(12) }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  zoomWindow: {
    backgroundColor: light.accent,
    opacity: 1,
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    flexDirection: "row",
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
