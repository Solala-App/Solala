import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Platform } from "react-native";

import { Header, Footer } from "../components";
import * as App from "../screens/app";
import { useWeather } from "../utils/hooks/useWeather";

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

const SolalaAppMobile = () => {
  const { weatherIcon } = useWeather();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Homepage"
        tabBar={(props) => <Footer {...props} />}
        screenOptions={{
          header: () => (
            <Header
              greeting="Good Morning!"
              icon={weatherIcon}
              announcement="Meet Solala"
            />
          ),
        }}>
        <Tab.Screen name="Homepage" component={App.Homepage} />
        <Tab.Screen name="Calendar" component={App.Calendar} />
        <Tab.Screen name="Todo" component={App.Todo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const SolalaApp = () => {
  const { weatherIcon } = useWeather();
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Homepage"
        screenOptions={{
          header: () => (
            <Header
              greeting="Good Morning!"
              icon={weatherIcon}
              announcement="Meet Solala"
            />
          ),
        }}>
        <AppStack.Screen name="Homepage" component={App.Homepage} />
        <AppStack.Screen name="Calendar" component={App.Calendar} />
        <AppStack.Screen name="Todo" component={App.Todo} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default function UserStack() {
  if (Platform.OS === "android" || Platform.OS === "ios") {
    return <SolalaAppMobile />;
  } else {
    return <SolalaApp />;
  }
}
