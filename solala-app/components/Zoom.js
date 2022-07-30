import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";
import * as Weather from "../../assets/favicons_weather_js";
import { theme, fonts } from "../constants";

const { colorPalette } = theme;

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
    backgroundColor: theme.colorPalette.black,
    opacity: "70%",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "90%",
    height: "90%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: RFValue(40),
  },

  textBox: {
    fontFamily: theme.fonts.body,
    fontSize: RFValue(24),
    color: theme.colorPalette.white,
  },
});

export default Zoom;
