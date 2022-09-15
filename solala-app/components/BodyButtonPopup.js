import { getAuth } from "firebase/auth";
import { child, getDatabase, ref, remove } from "firebase/database";

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Platform,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as IconsLight from "../../assets/favicons_light";
import { theme } from "../constants";
import { cardStyles } from "./CalendarPopup";
import EventPopup from "./EventPopup";
import TaskPopup from "./TaskPopup";

const { light, size, shadowProp } = theme;

const BodyButtonPopup = () => {
  return (
    <ScrollView>
      <View style={[cardStyles.centeredView]}>
        <View
          style={[
            styles.zoomWindow,
            { width: Platform.OS === "web" ? RFValue(250) : RFValue(300) },
          ]}>
          <View style={cardStyles.popupHeader}>
            <View style={cardStyles.cardHeaderLeft} />
            <View style={cardStyles.centeredView}>
              <Text style={cardStyles.popupHeaderText}>POPUP</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  zoomWindow: {
    marginTop: RFValue(30),
    backgroundColor: light.secondary,
    borderRadius: size.borderRadius,
    elevation: RFValue(5),
    ...shadowProp,
    top: Platform.OS === "web" ? 0 : Dimensions.get("window").height / 4,
  },
  button: {
    flex: 1,
    marginBottom: size.margin,
  },
});

export default BodyButtonPopup;
