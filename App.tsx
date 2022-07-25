import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Screens from "./solala-app/screens";
import { View, Text } from "react-native";
import fonts from "./solala-app/constants";

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFontsAndRestoreToken = async () => {
    await fonts();
  };

  if (!IsReady) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  //add a splashscreen
  return <Screens.App.Homepage />;
}
