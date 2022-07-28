import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import { theme } from "../constants";
import { RFValue } from "react-native-responsive-fontsize";
import Svg, { Defs, Image, Use, Path } from "react-native-svg";
import * as Weather from "../../assets/favicons_weather";
import Rain from "../../assets/favicons_weather/rain.png";

const { colorPalette, size, text, light } = theme;

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

const Header = (props) => {
  return (
    <View style={styles.headerBox}>
      <View style={styles.header}>
        <View style={styles.headerSun}>
          <SvgSunMobile />
          <View style={styles.greeting}>
            <Text style={styles.textBubble}>
              {props.greeting}
              <Weather.Rain />
            </Text>
            <Text style={styles.announcement}>{props.announcement}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    width: "100%",
    paddingBottom: RFValue(185),
    backgroundColor: light.primary,
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
  textBubble: {
    flexWrap: "wrap",
    ...text.mobileGreeting,
    alignSelf: "flex-start",
  },
  announcement: {
    paddingTop: RFValue(75),
    ...text.mobileAnnouncment,
    position: "absolute",
  },
  headerSun: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 0,
    height: RFValue(160),
  },
  greeting: {
    position: "absolute",
    top: RFValue(48),
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default Header;
