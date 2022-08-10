import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { format } from "date-fns";
import React from "react";
import { Platform } from "react-native";

import { Header, Footer } from "../components";
import * as App from "../screens/app";
import { useWeather } from "../utils/hooks/useWeather";

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

const SolalaAppMobile = () => {
  const { weatherIcon, weatherAdvice } = useWeather();
  const currentTime = new Date();
  const formattedTime = format(currentTime, "H");

  let greet = "Nice to see you, ";
  switch (formattedTime) {
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
      greet = "Good Morning!, ";
      break;
    case "11":
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
      greet = "Good Afternoon, ";
      break;
    case "17":
    case "18":
    case "19":
    case "20":
    case "21":
      greet = "Good Evening, ";
      break;
    case "22":
    case "23":
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
      greet = "Hello Night Owl, ";
      break;

    default:
      greet = "Nice to see you, ";
      break;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Homepage"
        tabBar={(props) => <Footer {...props} />}
        screenOptions={{
          header: () => (
            <Header
              greeting={greet}
              weather={weatherAdvice}
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
  const { weatherIcon, weatherAdvice } = useWeather();
  const currentTime = new Date();
  const formattedTime = format(currentTime, "H");

  let greet = "Nice to see you, ";
  switch (formattedTime) {
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
      greet = "Good Morning!, ";
      break;
    case "11":
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
      greet = "Good Afternoon, ";
      break;
    case "17":
    case "18":
    case "19":
    case "20":
    case "21":
      greet = "Good Evening, ";
      break;
    case "22":
    case "23":
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
      greet = "Hello Night Owl, ";
      break;

    default:
      greet = "Nice to see you, ";
      break;
  }
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Homepage"
        screenOptions={{
          header: () => (
            <Header
              greeting={greet}
              weather={weatherAdvice}
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
