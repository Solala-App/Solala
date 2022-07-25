import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import React from "react";
import * as Screens from "./solala-app/screens";
import { View, Text } from "react-native";

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
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  //add a splashscreen
  return <Screens.App.Homepage />;
}
