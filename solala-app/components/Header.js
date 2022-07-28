import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../constants";
import { RFValue } from "react-native-responsive-fontsize";
import * as Favicon from "../../assets/favicons_js";
import * as Weather from "../../assets/favicons_weather";
import Rain from "../../assets/favicons_weather/rain.png";

const { colorPalette, size, text } = theme;

const SvgSun = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 268" {...props}>
    <Path
      fill="#e1ad01"
      d="M9.4 0h246.3C472.6 0 502.4.2 505 1.5c1.6.8 3.9 2.7 5 4.3 1.7 2.2 2.1 4.2 2 11.7 0 4.9-.7 14.6-1.5 21.5-.9 6.9-2.7 18.1-4.1 25-1.5 6.9-4.4 18.1-6.6 25-2.2 6.9-6.3 17.7-9 24-2.7 6.3-7.4 16-10.5 21.5-3 5.5-8.6 14.5-12.4 20-3.7 5.5-9.9 13.8-13.6 18.5-3.7 4.7-11.5 13.2-17.3 19.1-5.8 5.8-15 14.1-20.5 18.5s-14.5 10.9-20 14.6c-5.5 3.6-14.7 9.1-20.5 12.1-5.8 3.1-15.2 7.6-21 10-5.8 2.4-15 5.9-20.5 7.6-5.5 1.8-14.5 4.3-20 5.6-5.5 1.3-14.7 3-20.5 3.9-5.8.8-15.5 2-21.5 2.7-6.1.6-16 .9-22 .6-6.1-.3-16.6-1.2-23.5-2.1-6.9-.8-18.1-2.7-25-4.1-6.9-1.5-18.4-4.6-25.5-7-7.2-2.3-18.6-6.8-25.5-9.9-6.9-3-18.4-9.1-25.5-13.3-7.2-4.3-17.3-11.1-22.5-15-5.2-3.9-13.6-10.9-18.7-15.5-5-4.6-12.5-11.9-16.4-16.3-4-4.4-10-11.4-13.2-15.5-3.3-4.1-8.6-11.3-11.7-16-3.1-4.7-8.3-13.2-11.4-19-3.1-5.8-7.4-14.3-9.5-19-2.1-4.7-5.6-13.7-7.9-20C12 88.7 9 78.6 7.5 72.5 6 66.4 3.7 54.1 2.4 45 1.1 35.9 0 24.2 0 19 0 13.5.5 8.5 1.3 7 1.9 5.7 4 3.6 5.9 2.3z"
    />
  </Svg>
);

const Header = (props) => {
  const navigation = useNavigation();

  const CalendarPressEvent = () => {
    navigation.navigate("Calendar");
  };
  const ToDoPressEvent = () => {
    navigation.navigate("Todo");
  };
  return (
    <View style={styles.headerBox}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={CalendarPressEvent}>
          <Favicon.Calendar style={styles.placeholder} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerCenter}>
        <View style={styles.headerSun}>
          <SvgSun></SvgSun>
          <View
            style={{
              position: "absolute",
              top: RFValue(48),
              alignItems: "center",
              width: "100%",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <Text style={styles.textBubble}>
              {props.greeting}
              <Image source={Rain} style={styles.placeholderWeather} />
            </Text>
          </View>
          <Text style={styles.announcement}>{props.announcement}</Text>
        </View>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={ToDoPressEvent}>
          <Favicon.ToDoList style={styles.placeholder} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBack: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colorPalette.pink,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: RFValue(30),
  },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colorPalette.pink,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: RFValue(30),
  },
  headerCenter: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colorPalette.pink,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: RFValue(30),
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colorPalette.pink,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: RFValue(30),
  },
  headerSun: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    position: "absolute",
  },
  headerBox: {
    height: RFValue(25),
    width: "100%",
    flexDirection: "row",
  },
  textBubble: {
    flexWrap: "wrap",
    ...text.title,
    position: "absolute",
    alignSelf: "flex-start",
  },
  announcement: {
    paddingTop: RFValue(75),
    ...text.body,
    position: "absolute",
  },

  placeholderWeather: {
    width: RFValue(20),
    height: RFValue(20),
    marginLeft: RFValue(15),
    alignSelf: "flex-end",
    position: "absolute",
  },

  placeholder: {
    width: RFValue(20),
    height: RFValue(20),
    alignSelf: "center",
  },
});

export default Header;
