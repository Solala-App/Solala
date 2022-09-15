import React, { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  Platform,
  View,
  Image,
  Modal,
<<<<<<< HEAD
=======
  TouchableOpacity,
>>>>>>> 60e9a5e17d31e6c1980b328516cf4fe04cfebb5f
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Icons from "../../assets/favicons_light";

import * as BodyIcons from "../../assets/emotions";
import { theme } from "../constants";
<<<<<<< HEAD
import BodyGraphs from "./BodyGraphs";
=======
import { cardStyles } from "./CalendarPopup";
import BodyButtonPopup from "./BodyButtonPopup";
>>>>>>> 60e9a5e17d31e6c1980b328516cf4fe04cfebb5f

const { colorPalette, text, size } = theme;

const BodyButton = (props) => {
<<<<<<< HEAD
  const [pressed, setPressed] = useState(!pressed);
  const [modalVisible, setModalVisible] = useState(false);
=======
  const [pressed, setPressed] = useState(false);
  const [longPressed, setLongPressed] = useState(false);
>>>>>>> 60e9a5e17d31e6c1980b328516cf4fe04cfebb5f

  if (Platform.OS === "ios" || Platform.OS === "android") {
    let buttonColor = colorPalette.forest;
    let buttonIcon = BodyIcons.Emotions;
    switch (props.title) {
      case "Joyful":
        buttonColor = colorPalette.forest;
        buttonIcon = BodyIcons.Joyful;
        break;
      case "Powerful":
        buttonColor = colorPalette.forest;
        buttonIcon = BodyIcons.Powerful;
        break;
      case "Peaceful":
        buttonColor = colorPalette.forest;
        buttonIcon = BodyIcons.Peaceful;
        break;
      case "Sad":
        buttonColor = colorPalette.forest;
        buttonIcon = BodyIcons.Sad;
        break;
      case "Mad":
        buttonColor = colorPalette.forest;
        buttonIcon = BodyIcons.Mad;
        break;
      case "Scared":
        buttonColor = colorPalette.forest;
        buttonIcon = BodyIcons.Scared;
        break;

      default:
        buttonColor = colorPalette.forest;
        buttonIcon = BodyIcons.Emotions;
        break;
    }

    return (
<<<<<<< HEAD
      <View>
        {" "}
        <Modal visible={modalVisible}>
          {" "}
          <BodyGraphs />
        </Modal>
=======
      <>
>>>>>>> 60e9a5e17d31e6c1980b328516cf4fe04cfebb5f
        <Pressable
          style={{
            padding: size.innerPadding,
            margin: size.margin,
            backgroundColor: buttonColor,
            borderRadius: "100%",
          }}
<<<<<<< HEAD
          onPress={setPressed}
          onLongPress={setModalVisible}>
          <Image width={RFValue(50)} source={buttonIcon} />
        </Pressable>
      </View>
=======
          onLongPress={() => setLongPressed(true)}
          onPressOut={() => setLongPressed(false)}>
          <Image
            style={{ width: RFValue(25), height: RFValue(25) }}
            source={buttonIcon}
          />
        </Pressable>
        <Modal visible={longPressed} transparent>
          <BodyButtonPopup />
        </Modal>
      </>
>>>>>>> 60e9a5e17d31e6c1980b328516cf4fe04cfebb5f
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
        <Modal visible={modalVisible}>
          {" "}
          <BodyGraphs />
        </Modal>
        <Pressable
          style={{
            width: RFValue(20),
            height: RFValue(20),
            padding: size.innerPadding,
            backgroundColor: buttonColor,
            borderRadius: "100%",
          }}
          onPress={setPressed}
<<<<<<< HEAD
          onLongPress={setModalVisible}>
=======
          onLongPress={() => setLongPressed(true)}
          /*onMouseLeave={() => setLongPressed(false)}*/
        >
>>>>>>> 60e9a5e17d31e6c1980b328516cf4fe04cfebb5f
          {buttonIcon}
        </Pressable>
        <Text style={styles.textStyle}>{props.title}</Text>
        <Modal visible={longPressed} transparent>
          <BodyButtonPopup />
        </Modal>
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
