import React from "react";
import { View, Text, StyleSheet, Platform, Pressable } from "react-native";
import * as Components from "../../components";
import * as Logo from "../../../assets/logo_js";
import * as Graphics from "../../../assets/graphics_js";

import { theme } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
const { light, size, text, colorPalette, shadowProp } = theme;

export default function Login() {
  const [isLoggingIn, setLoggingIn] = React.useState(false);
  const [isNewUser, setNewUser] = React.useState(false);
  const [isCreatingAccount, setCreatingAccount] = React.useState(false);

  const GetStartedButton = () => {
    setNewUser(() => !isNewUser);
  };
  const LoginButton = () => {
    setLoggingIn(() => !isLoggingIn);
  };
  const CreateAccount = () => {
    setCreatingAccount(() => !isCreatingAccount);
  };

  if (Platform.OS === "android" || Platform.OS === "ios") {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.column1}></View>
          <View style={styles.column2}>
            <Logo.SolalaLogoLg />
          </View>
          <View style={styles.column3}></View>
        </View>
        <Components.FooterWeb />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.vine}>
          <Graphics.Vine />
        </View>
        <View style={styles.mainView}>
          <View style={styles.column1}></View>
          <View style={styles.column2}>
            <Logo.SolalaLogoLg
              style={{ width: RFValue(100), alignSelf: "center" }}
            />
            {!isLoggingIn && !isNewUser && (
              <View>
                <Pressable
                  style={styles.textBubbleLight}
                  onPress={GetStartedButton}
                >
                  <Text style={styles.textStyleLight}>Get Started</Text>
                </Pressable>
                <Pressable style={styles.textBubbleDark} onPress={LoginButton}>
                  <Text style={styles.textStyleDark}>Login</Text>
                </Pressable>
              </View>
            )}
            {isNewUser && (
              <View>
                <Pressable
                  style={styles.textBubbleAccent}
                  onPress={GetStartedButton}
                >
                  <Text style={styles.textStyleAccent}>Create Username</Text>
                </Pressable>
                <Pressable
                  style={styles.textBubbleAccent}
                  onPress={LoginButton}
                >
                  <Text style={styles.textStyleAccent}>Create Password</Text>
                </Pressable>
                <Pressable
                  style={styles.textBubbleDark}
                  onPress={CreateAccount}
                >
                  <Text style={styles.textStyleDark}>Sign Up</Text>
                </Pressable>
              </View>
            )}
            {isLoggingIn && (
              <View>
                <Pressable
                  style={styles.textBubbleAccent}
                  onPress={GetStartedButton}
                >
                  <Text style={styles.textStyleAccent}>Username</Text>
                </Pressable>
                <Pressable
                  style={styles.textBubbleAccent}
                  onPress={LoginButton}
                >
                  <Text style={styles.textStyleAccent}>Password</Text>
                </Pressable>
                <Pressable
                  style={styles.textBubbleDark}
                  onPress={CreateAccount}
                >
                  <Text style={styles.textStyleDark}>Log In</Text>
                </Pressable>
              </View>
            )}
          </View>
          <View style={styles.column3}></View>
        </View>
        <Components.FooterWeb />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.primary,
  },
  mainView: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: size.padding,
    paddingRight: size.padding,
    paddingBottom: size.padding,
  },
  textBubbleDark: {
    padding: size.innerPadding,
    margin: size.margin,
    backgroundColor: colorPalette.white,
    borderRadius: size.borderRadius,
    alignSelf: "stretch",
    textAlign: "center",
    ...shadowProp,
  },
  textStyleDark: {
    ...text.body,
    color: colorPalette.forest,
  },
  textBubbleLight: {
    padding: size.innerPadding,
    margin: size.margin,
    backgroundColor: colorPalette.forest,
    borderRadius: size.borderRadius,
    alignSelf: "stretch",
    textAlign: "center",
    ...shadowProp,
  },
  textStyleLight: {
    ...text.body,
    color: colorPalette.white,
  },
  textBubbleAccent: {
    padding: size.innerPadding,
    margin: size.margin,
    backgroundColor: colorPalette.jade,
    borderRadius: size.borderRadius,
    alignSelf: "stretch",
    textAlign: "center",
    ...shadowProp,
  },
  textStyleAccent: {
    ...text.body,
    color: colorPalette.forest,
  },
  vine: {
    flex: 1,
  },
  column1: {
    flex: 1,
    flexDirection: "column",
  },
  column2: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "flex-start",
    paddingTop: RFValue(15),
  },
  column3: {
    flex: 1,
    flexDirection: "column",
  },
  card: {
    flex: 1,
    marginBottom: size.margin,
  },
});
