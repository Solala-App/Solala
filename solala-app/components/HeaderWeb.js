import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Pressable,
  SafeAreaView,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import LogoText from "../../assets/logo/SolalaLogoB.png";
import Logo from "../../assets/logo/SolalaLogoLg.png";
import * as Logos from "../../assets/logo_js";
import { theme } from "../constants";

const { colorPalette, size, text } = theme;

const Header = ({ navigation }) => {
  const HomePressEvent = () => {
    navigation.navigate("Home");
  };
  const AboutPressEvent = () => {
    navigation.navigate("About");
  };
  const AppPressEvent = () => {
    navigation.navigate("Login");
  };

  if (Platform.OS === "android" || Platform.OS === "IOS") {
    return (
      <SafeAreaView style={styles.headerBoxMobile}>
        <View style={styles.headerLeftMobile}>
          <Pressable onPress={HomePressEvent}>
            <Text style={styles.navBar}>Home</Text>
          </Pressable>
        </View>
        <View style={styles.headerCenter}>
          <Pressable onPress={AppPressEvent}>
            <Image
              style={{ height: RFValue(28), width: RFValue(50) }}
              source={LogoText}
            />
          </Pressable>
        </View>
        <View style={styles.headerRight}>
          <Pressable onPress={AboutPressEvent}>
            <Text style={styles.navBar}>About</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.headerBox}>
        <View style={styles.headerLeft}>
          <Pressable onPress={HomePressEvent}>
            <Text style={styles.navBar}>Home</Text>
          </Pressable>
        </View>
        <View style={styles.headerCenter}>
          <Pressable onPress={AppPressEvent}>
            <Logos.SolalaLogoText style={{ height: RFValue(20) }} />
          </Pressable>
        </View>
        <View style={styles.headerRight}>
          <Pressable onPress={AboutPressEvent}>
            <Text style={styles.navBar}>About</Text>
          </Pressable>
        </View>
        <View style={styles.headerFlower}>
          <Logos.SolalaFlower />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerBoxMobile: {
    width: "100%",
    marginTop: RFValue(25),
    backgroundColor: colorPalette.pink,
    flexDirection: "row",
    height: RFValue(25),
  },
  headerLeftMobile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  headerLeft: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  headerCenter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  headerFlower: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: RFValue(30),
  },
  headerBox: {
    height: RFValue(25),
    width: "100%",
    flexDirection: "row",
    backgroundColor: colorPalette.pink,
  },
  navBar: {
    ...text.h2,
  },
});

export default Header;
