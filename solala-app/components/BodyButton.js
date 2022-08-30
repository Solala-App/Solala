import React, { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  Platform,
  View,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as BodyIcons from "../../assets/emotions";
import { theme } from "../constants";

const { colorPalette, text, size } = theme;

const BodyButton = (props) => {
  const [pressed, setPressed] = useState(!pressed);
  const [longPressed, setLongPressed] = useState(!longPressed);

  if (Platform.OS === "ios" || Platform.OS === "android") {
    let buttonColor = colorPalette.forest;
    let buttonIcon = <BodyIcons.Emotions />;
    switch (props.title) {
      case "Joyful":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.Joyful />;
        break;
      case "Powerful":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.Powerful />;
        break;
      case "Peaceful":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.Peaceful />;
        break;
      case "Sad":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.Sad />;
        break;
      case "Mad":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.Mad />;
        break;
      case "Scared":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.Scared />;
        break;

      default:
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.Emotions />;
        break;
    }

    return (
      <Pressable
        style={{
          padding: size.innerPadding,
          margin: size.margin,
          backgroundColor: buttonColor,
          borderRadius: "100%",
        }}
        onPress={setPressed}
        onLongPress={setLongPressed}>
        <Image width={RFValue(50)} source={buttonIcon} />
      </Pressable>
    );
  } else {
    let buttonColor = colorPalette.forest;
    let buttonIcon = <BodyIcons.EmotionsSVG />;
    switch (props.title) {
      case "Joyful":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.JoyfulSVG />;
        break;
      case "Powerful":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.PowerfulSVG />;
        break;
      case "Peaceful":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.PeacefulSVG />;
        break;
      case "Sad":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.SadSVG />;
        break;
      case "Mad":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.MadSVG />;
        break;
      case "Scared":
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.ScaredSVG />;
        break;

      default:
        buttonColor = colorPalette.forest;
        buttonIcon = <BodyIcons.EmotionsSVG />;
        break;
    }
    return (
      <View>
        <Pressable
          style={{
            width: RFValue(20),
            height: RFValue(20),
            padding: size.innerPadding,
            backgroundColor: buttonColor,
            borderRadius: "100%",
          }}
          onPress={setPressed}
          onLongPress={setLongPressed}>
          {buttonIcon}
        </Pressable>
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  textStyle: {
    ...text.bodyButton,
    color: colorPalette.forest,
    textAlign: "center",
  },
});

export default BodyButton;
