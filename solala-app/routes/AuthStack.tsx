import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { HeaderWeb } from "../components";
import * as Website from "../screens/website";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          header: (props) => <HeaderWeb {...props} />,
        }}>
        <Stack.Screen name="Home" component={Website.Home} />
        <Stack.Screen name="About" component={Website.Profile} />
        <Stack.Screen name="Login" component={Website.Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
