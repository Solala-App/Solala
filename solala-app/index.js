import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import MyStack from "./routes/MyStack";

const SolalaApp = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default SolalaApp;
