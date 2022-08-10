import * as WebBrowser from "expo-web-browser";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  Image,
  Text,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import Vine from "../../../assets/graphics/Vine.png";
import * as Graphics from "../../../assets/graphics_js";
import LogoMobile from "../../../assets/logo/SolalaLogoLg.png";
import * as Logo from "../../../assets/logo_js";
import * as Components from "../../components";
import { theme } from "../../constants";

const { light, size, text, colorPalette, shadowProp } = theme;
const auth = getAuth();
WebBrowser.maybeCompleteAuthSession();

export default function Login({ navigation }) {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signUp() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Sign In");
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  const [isLoggingIn, setLoggingIn] = React.useState(false);
  const [isNewUser, setNewUser] = React.useState(false);
  const [isCreatingAccount, setCreatingAccount] = React.useState(false);
  const [isLoggingIntoAccount, setLoggingIntoAccount] = React.useState(false);

  console.log({ isNewUser, isLoggingIn, isCreatingAccount });

  if (Platform.OS === "android" || Platform.OS === "ios") {
    return (
      <View style={styles.container}>
        <View style={styles.vine}>
          <Image
            style={{
              width: RFPercentage(75),
              height: RFPercentage(10),
              alignSelf: "center",
            }}
            source={Vine}
          />
        </View>
        <View style={styles.mainView}>
          <View style={styles.column2}>
            <Image
              style={{
                height: RFValue(75),
                width: RFValue(168),
                alignSelf: "center",
              }}
              source={LogoMobile}
            />
            {!!value.error && (
              <View style={styles.error}>
                <Text>{value.error}</Text>
              </View>
            )}
            {!isLoggingIn && !isNewUser && (
              <View>
                <Components.Button
                  title="Get Started"
                  color="light"
                  onClick={() => setNewUser(!isNewUser)}
                />
                <Components.Button
                  title="Login"
                  color="dark"
                  onClick={() => setLoggingIn(!isLoggingIn)}
                />
              </View>
            )}
            {isNewUser && (
              <View>
                <Components.TextInputField
                  placeholder="Create Password"
                  color="accent"
                  textContentType="password"
                />
                <Components.Button
                  title="Create Account"
                  color="light"
                  onClick={() => setCreatingAccount(!isCreatingAccount)}
                />
              </View>
            )}
            {isLoggingIn && (
              <View>
                <Components.TextInputField
                  placeholder="Username"
                  color="accent"
                  textContentType="username"
                />
                <Components.TextInputField
                  placeholder="Password"
                  color="accent"
                  textContentType="password"
                />
                <Components.Button
                  title="Login"
                  color="light"
                  onClick={() => setLoggingIntoAccount(!isLoggingIntoAccount)}
                />
              </View>
            )}
          </View>
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
          <View style={styles.column1} />
          <View style={styles.column2}>
            <Logo.SolalaLogoLg
              style={{ width: RFValue(100), alignSelf: "center" }}
            />
            {!isLoggingIn && !isNewUser && (
              <View>
                <Components.Button
                  title="Get Started"
                  color="light"
                  onClick={() => setNewUser(!isNewUser)}
                />
                <Components.Button
                  title="Login"
                  color="dark"
                  onClick={() => setLoggingIn(!isLoggingIn)}
                />
              </View>
            )}
            {isNewUser && (
              <View>
                <View style={styles.textInput}>
                  <TextInput
                    onChangeText={(text) => setValue({ ...value, email: text })}
                    value={value.email}
                    placeholder="Email"
                    placeholderTextColor={colorPalette.forest}
                  />
                </View>
                <View style={styles.textInput}>
                  <TextInput
                    onChangeText={(text) =>
                      setValue({ ...value, password: text })
                    }
                    value={value.password}
                    secureTextEntry
                    placeholder="Create Password"
                    placeholderTextColor={colorPalette.forest}
                  />
                </View>
                <Components.Button
                  title="Create Account"
                  color="light"
                  onClick={() => signUp()}
                />
              </View>
            )}
            {isLoggingIn && (
              <View>
                <View style={styles.textInput}>
                  <TextInput
                    onChangeText={(text) => setValue({ ...value, email: text })}
                    value={value.email}
                    placeholder="Email"
                    placeholderTextColor={colorPalette.forest}
                  />
                </View>
                <View style={styles.textInput}>
                  <TextInput
                    onChangeText={(text) =>
                      setValue({ ...value, password: text })
                    }
                    value={value.password}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor={colorPalette.forest}
                  />
                </View>
                <Components.Button
                  title="Login"
                  color="light"
                  onClick={() => signIn()}
                />
              </View>
            )}
          </View>
          <View style={styles.column3} />
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
  textInput: {
    padding: size.innerPadding,
    margin: size.margin,
    backgroundColor: colorPalette.jade,
    borderRadius: size.borderRadius,
    alignSelf: "stretch",
    ...shadowProp,
  },
});
