import * as React from "react";
import { Text, View, StyleSheet, Platform, Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

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
      <View style={styles.headerBox}>
        <View style={styles.header}>
          <View style={styles.headerCenter}>
            <Pressable onPress={HomePressEvent}>
              <Text style={styles.navBar}>Home</Text>
            </Pressable>
            <Pressable onPress={AppPressEvent}>
              <Logos.SolalaLogo style={{ height: RFValue(28) }} />
            </Pressable>
            <Pressable onPress={AboutPressEvent}>
              <Text style={styles.navBar}>About</Text>
            </Pressable>
          </View>
        </View>
      </View>
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
            <Logos.SolalaLogoText style={{ height: RFValue(28) }} />
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
  headerLeft: {
    flex: 2,
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
  headerFlower: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colorPalette.pink,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: RFValue(30),
  },
  headerBox: {
    height: RFValue(25),
    width: "100%",
    flexDirection: "row",
  },
  navBarLogo: {
    width: RFValue(45),
    height: RFValue(20),
    marginLeft: RFValue(15),
    position: "absolute",
  },
  navBar: {
    ...text.h2,
  },
});

export default Header;
