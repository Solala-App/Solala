import { useNavigation } from "@react-navigation/native";
import { signOut, getAuth } from "firebase/auth";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Pressable,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Defs, Use, Path } from "react-native-svg";

import * as Favicon from "../../assets/favicons_js";
import { theme } from "../constants";

const { colorPalette, text, light, size } = theme;

const SvgSun = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 268" {...props}>
    <Path
      fill="#e1ad01"
      d="M9.4 0h246.3C472.6 0 502.4.2 505 1.5c1.6.8 3.9 2.7 5 4.3 1.7 2.2 2.1 4.2 2 11.7 0 4.9-.7 14.6-1.5 21.5-.9 6.9-2.7 18.1-4.1 25-1.5 6.9-4.4 18.1-6.6 25-2.2 6.9-6.3 17.7-9 24-2.7 6.3-7.4 16-10.5 21.5-3 5.5-8.6 14.5-12.4 20-3.7 5.5-9.9 13.8-13.6 18.5-3.7 4.7-11.5 13.2-17.3 19.1-5.8 5.8-15 14.1-20.5 18.5s-14.5 10.9-20 14.6c-5.5 3.6-14.7 9.1-20.5 12.1-5.8 3.1-15.2 7.6-21 10-5.8 2.4-15 5.9-20.5 7.6-5.5 1.8-14.5 4.3-20 5.6-5.5 1.3-14.7 3-20.5 3.9-5.8.8-15.5 2-21.5 2.7-6.1.6-16 .9-22 .6-6.1-.3-16.6-1.2-23.5-2.1-6.9-.8-18.1-2.7-25-4.1-6.9-1.5-18.4-4.6-25.5-7-7.2-2.3-18.6-6.8-25.5-9.9-6.9-3-18.4-9.1-25.5-13.3-7.2-4.3-17.3-11.1-22.5-15-5.2-3.9-13.6-10.9-18.7-15.5-5-4.6-12.5-11.9-16.4-16.3-4-4.4-10-11.4-13.2-15.5-3.3-4.1-8.6-11.3-11.7-16-3.1-4.7-8.3-13.2-11.4-19-3.1-5.8-7.4-14.3-9.5-19-2.1-4.7-5.6-13.7-7.9-20C12 88.7 9 78.6 7.5 72.5 6 66.4 3.7 54.1 2.4 45 1.1 35.9 0 24.2 0 19 0 13.5.5 8.5 1.3 7 1.9 5.7 4 3.6 5.9 2.3z"
    />
  </Svg>
);

const SvgSunMobile = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2355 619" {...props}>
    <Defs>
      <Image
        id="a"
        width={2355}
        height={619}
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACTMAAAJrAQMAAAAMYAdfAAAAAXNSR0IB2cksfwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAADISURBVHic7cGBAAAAAMOg+VNf4QBVAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwG/L1gAB+btjVQAAAABJRU5ErkJggg=="
      />
    </Defs>
    <Use href="#a" />
    <Path
      fill="#e1ad01"
      d="M0 0h2354.9l-.4 323.5-18 11.3c-9.9 6.2-27 16.5-38 22.9-11 6.4-27.9 16-37.5 21.2-9.6 5.2-31.9 16.5-49.5 25.2-17.6 8.6-41.9 20.1-54 25.4-12.1 5.3-30.8 13.3-41.5 17.7-10.7 4.5-27.6 11.2-37.5 15-9.9 3.9-28.8 10.9-42 15.8-13.2 4.8-33.7 11.9-45.5 15.8-11.8 3.9-31 10-42.5 13.6-11.6 3.6-32 9.6-45.5 13.5-13.5 3.8-38.7 10.6-56 15-17.3 4.4-43.9 10.9-59 14.5-15.1 3.5-37.4 8.5-49.5 11-12.1 2.5-32.6 6.6-45.5 9-12.9 2.5-36.8 6.7-53 9.5-16.2 2.8-41.7 6.8-56.5 9-14.8 2.2-39.4 5.6-54.5 7.5-15.1 1.9-38.1 4.7-51 6-12.9 1.4-33.2 3.4-45 4.5-11.8 1.1-33.7 3-48.5 4.1-14.8 1.1-38.3 2.7-52 3.5-13.8.8-41.2 2.2-61 3-24.5 1-62.5 1.5-118.5 1.5s-94-.5-118.5-1.5c-19.8-.8-47.3-2.2-61-3-13.8-.8-37.2-2.4-52-3.5-14.9-1.1-36.7-3-48.5-4.1-11.8-1.1-32.1-3.1-45-4.5-12.9-1.3-35.9-4.1-51-6-15.1-1.9-39.7-5.3-54.5-7.5-14.9-2.2-40.3-6.2-56.5-9-16.2-2.8-40.1-7-53-9.5-12.9-2.4-33.4-6.5-45.5-9-12.1-2.5-34.4-7.5-49.5-11-15.1-3.6-41.7-10.1-59-14.5-17.3-4.4-42.5-11.2-56-15-13.5-3.9-34-9.9-45.5-13.5-11.6-3.6-30.7-9.7-42.5-13.6-11.8-3.9-32.3-11-45.5-15.8-13.2-4.9-32.1-11.9-42-15.8-9.9-3.8-26.8-10.5-37.5-15-10.7-4.4-29.4-12.4-41.5-17.7-12.1-5.3-35.5-16.3-52-24.4-16.5-8.1-37-18.4-45.5-23-8.5-4.6-23.5-12.9-51-28.6V176.7z"
    />
  </Svg>
);

const auth = getAuth();

const Header = (props) => {
  const navigation = useNavigation();

  const CalendarPressEvent = () => {
    navigation.navigate("Calendar");
  };
  const GreenhousePressEvent = () => {
    navigation.navigate("Homepage");
  };
  const ToDoPressEvent = () => {
    navigation.navigate("Todo");
  };
  const handleSignOut = () => {
    signOut(auth);
  };
  const WeatherIcon = props.icon;
  if (Platform.OS === "ios" || Platform.OS === "android") {
    return (
      <SafeAreaView style={styles.headerBoxMobile}>
        <View style={styles.headerSunMobile}>
          <SvgSunMobile />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            top: RFValue(15),
          }}>
          <View style={styles.greetingMobile}>
            <Text style={styles.textBubbleMobile}>{props.greeting}</Text>
            <Image source={props.icon} style={styles.weatherMobile} />
          </View>
          <Text style={styles.announcementMobile}>{props.announcement}</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.headerBox}>
        <View style={styles.headerLeft}>
          <Pressable onPress={CalendarPressEvent}>
            <Favicon.Calendar color="black" style={styles.placeholder} />
          </Pressable>
          <Pressable onPress={GreenhousePressEvent}>
            <Favicon.Greenhouse color="black" style={styles.placeholder} />
          </Pressable>
        </View>
        <View style={styles.headerCenter}>
          <View style={styles.headerSun}>
            <SvgSun />
            <View
              style={{
                position: "absolute",
                top: RFValue(48),
                alignItems: "center",
                width: "100%",
                justifyContent: "space-around",
                flexDirection: "row",
              }}>
              <Text style={styles.textBubble}>
                {props.greeting}
                <Image source={props.icon} style={styles.placeholderWeather} />
              </Text>
            </View>
            <Text style={styles.announcement}>{props.announcement}</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Pressable onPress={handleSignOut}>
            <Favicon.LogOut color="black" style={styles.placeholder} />
          </Pressable>
          <Pressable onPress={ToDoPressEvent}>
            <Favicon.ToDoList color="black" style={styles.placeholder} />
          </Pressable>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerBoxMobile: {
    width: "100%",
    height: RFValue(130),
    backgroundColor: light.primary,
  },
  headerSunMobile: {
    width: "100%",
    position: "absolute",
    top: RFValue(20),
    height: RFValue(120),
  },

  textBubbleMobile: {
    flexWrap: "wrap",
    ...text.mobileTitle,
  },

  weatherMobile: {
    margin: size.margin,
    width: RFValue(20),
    height: RFValue(20),
  },

  greetingMobile: {
    padding: size.innerPadding,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  announcementMobile: {
    padding: size.innerPadding,
    flex: 2,
    ...text.mobileBody,
  },

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
    margin: size.margin,
  },
});

export default Header;
