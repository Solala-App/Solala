import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Pressable,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import RadarChart from "react-svg-radar-chart";

import * as IconsLight from "../../assets/favicons_light";
import { theme } from "../constants";
import "react-svg-radar-chart/build/css/index.css";

const { light, size, shadowProp, colorPalette, text } = theme;

//1 is equal to 100%
const data = [
  {
    data: {
      joyful: 1,
      sad: 0.7,
      powerful: 0,
      peaceful: 0.5,
      mad: 0.3,
      scared: 0.8,
    },
    meta: { color: colorPalette.forest },
  },
  {
    data: {
      joyful: 0.6,
      sad: 1,
      powerful: 0.2,
      peaceful: 0,
      mad: 0.1,
      scared: 0.5,
    },
    meta: { color: colorPalette.jade },
  },
];

const dataJoy = [
  {
    data: {
      excited: 1,
      fascinated: 0,
      energetic: 0.2,
      cheerful: 0.3,
      creative: 0,
      hopeful: 0.7,
    },
    meta: { color: colorPalette.goldenrod },
  },
];

const dataSad = [
  {
    data: {
      remorseful: 0,
      ashamed: 0,
      depressed: 1,
      lonely: 0,
      bored: 0.7,
      tired: 0,
    },
    meta: { color: colorPalette.darkBlue },
  },
];
const dataPowerful = [
  {
    data: {
      confident: 0.3,
      important: 0,
      appreciated: 0,
      respected: 0.4,
      proud: 0.9,
      surprised: 1,
    },
    meta: { color: colorPalette.forest },
  },
];
const dataPeaceful = [
  {
    data: {
      relaxed: 0.6,
      thoughtful: 1,
      responsive: 0,
      loving: 0,
      trusting: 0.2,
      nurturing: 0.5,
    },
    meta: { color: colorPalette.pink },
  },
];
const dataMad = [
  {
    data: {
      hurt: 1,
      sarcastic: 0,
      frustrated: 0,
      jealous: 0,
      irritated: 0,
      skeptical: 0,
    },
    meta: { color: colorPalette.terracotta },
  },
];
const dataScared = [
  {
    data: {
      confused: 0.8,
      rejected: 1,
      helpless: 0,
      inadequate: 0,
      embarrassed: 0,
      overwhelmed: 0,
    },
    meta: { color: colorPalette.terracotta },
  },
];

const captions = {
  // columns
  joyful: "Joyful",
  sad: "Sad",
  powerful: "Powerful",
  peaceful: "Peaceful",
  mad: "Mad",
  scared: "Scared",
};

const captionsJoyful = {
  // columns
  excited: "Excited",
  fascinated: "Fascinated",
  energetic: "Energetic",
  cheerful: "Cheerful",
  creative: "Creative",
  hopeful: "Hopeful",
};
const captionsSad = {
  // columns
  remorseful: "Remorseful",
  ashamed: "Ashamed",
  depressed: "Depressed",
  lonely: "Lonely",
  bored: "Bored",
  tired: "Tired",
};
const captionsPeaceful = {
  // columns
  relaxed: "Relaxed",
  thoughtful: "Thoughtful",
  responsive: "Responsive",
  loving: "Loving",
  trusting: "Trusting",
  nurturing: "Nurturing",
};
const captionsMad = {
  // columns
  hurt: "hurt",
  sarcastic: "Sarcastic",
  frustrated: "Frustrated",
  jealous: "Jealous",
  irritated: "Irritated",
  skeptical: "Skeptical",
};
const captionsScared = {
  // columns
  confused: "Confused",
  rejected: "Rejected",
  helpless: "Helpless",
  inadequate: "Inadequate",
  embarrassed: "Embarrassed",
  overwhelmed: "Overwhelmed",
};
const captionsPowerful = {
  // columns
  confident: "Confident",
  important: "Important",
  appreciated: "Appreciated",
  respected: "Respected",
  proud: "Proud",
  surprised: "Surprised",
};

const BodyButtonPopup = (props) => {
  return (
    <ScrollView>
      <View style={[styles.centeredView]}>
        <View
          style={[
            styles.zoomWindow,
            { width: Platform.OS === "web" ? RFValue(250) : RFValue(300) },
          ]}>
          <View style={styles.popupHeader}>
            <View style={styles.cardHeaderLeft} />
            <View style={styles.centeredView}>
              <Text style={styles.popupHeaderText}>Body Check</Text>
            </View>
            <View style={styles.cardHeaderRight}>
              <Pressable onPress={props.isModalVisible}>
                <Image
                  source={IconsLight.Cancel}
                  style={{
                    width: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                    height: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                  }}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.largeChart}>
            <RadarChart captions={captions} data={data} size={RFValue(160)} />
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={styles.smallChart}>
              <RadarChart
                captions={captionsJoyful}
                data={dataJoy}
                size={RFValue(80)}
              />
            </View>
            <View style={styles.smallChart}>
              <RadarChart
                captions={captionsPowerful}
                data={dataPowerful}
                size={RFValue(80)}
              />
            </View>
            <View style={styles.smallChart}>
              <RadarChart
                captions={captionsPeaceful}
                data={dataPeaceful}
                size={RFValue(80)}
              />
            </View>
            <View style={styles.smallChart}>
              <RadarChart
                captions={captionsSad}
                data={dataSad}
                size={RFValue(80)}
              />
            </View>
            <View style={styles.smallChart}>
              <RadarChart
                captions={captionsMad}
                data={dataMad}
                size={RFValue(80)}
              />
            </View>
            <View style={styles.smallChart}>
              <RadarChart
                captions={captionsScared}
                data={dataScared}
                size={RFValue(80)}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  zoomWindow: {
    margin: RFValue(30),
    backgroundColor: light.secondary,
    borderRadius: size.borderRadius,
    elevation: RFValue(5),
    ...shadowProp,
    top: Platform.OS === "web" ? 0 : Dimensions.get("window").height / 4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  largeChart: {
    flex: 1,
  },
  smallChart: {
    flex: 1,
    margin: size.margin,
  },
  cardHeaderRight: {
    flex: 1,
    paddingTop: size.innerPadding,
    paddingBottom: size.innerPadding,
    paddingRight: size.innerPadding,
    paddingLeft: size.innerPadding,
    alignItems: "flex-end",
  },
  cardHeaderCenter: {
    flex: 10,
  },
  cardHeaderLeft: {
    flex: 1,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  popupHeader: {
    backgroundColor: light.accent,
    borderRadius: size.borderRadius,
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "stretch",
  },
  popupHeaderText: {
    color: colorPalette.white,
    ...Platform.select({
      web: {
        ...text.title,
      },
      default: {
        ...text.mobileHeader,
      },
    }),
  },
  button: {
    flex: 1,
    marginBottom: size.margin,
  },
});

export default BodyButtonPopup;
