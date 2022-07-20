import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import React from "react";
import { Text, View } from "react-native";
import Homepage from "./solala-app/screens/homepage.js";
import { Card } from "./solala-app/components";
import { theme } from "./solala-app/constants";

const { fonts } = theme;

export default function App() {
  let [fontsLoaded] = useFonts({
    Courgette: require("./assets/fonts/Courgette-Regular.ttf"),
    Montserrat_Alt_Black: require("./assets/fonts/MontserratAlternates-Black.ttf"),
    Montserrat_Alt_Bold: require("./assets/fonts/MontserratAlternates-Bold.ttf"),
    Montserrat_Alt_Medium: require("./assets/fonts/MontserratAlternates-Medium.ttf"),
    Montserrat_Alt_Regular: require("./assets/fonts/MontserratAlternates-Regular.ttf"),
    Montserrat_Alt_Light: require("./assets/fonts/MontserratAlternates-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //add a splashscreen
  return <Homepage />;
}
