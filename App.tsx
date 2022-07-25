import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Screens from "./solala-app/screens";
import { View, Text } from "react-native";
import fonts from "./solala-app/constants";
import AppLoading from "expo-app-loading";

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFontsAndRestoreToken = async () => {
    await fonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFontsAndRestoreToken}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  //add a splashscreen
  return <Screens.App.Homepage />;
}
