import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform } from "react-native";

import { HeaderWeb, Header, Footer, Sun } from "../components";
import * as App from "../screens/app";
import * as Website from "../screens/website";

const Login = true;

const SolalaAppMobile = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      tabBar={(props) => <Footer {...props} />}
      screenOptions={{
        header: () => (
          <Sun greeting="Good Morning!" announcement="Meet Solala" />
        ),
      }}>
      <Tab.Screen name="Homepage" component={App.Homepage} />
      <Tab.Screen name="Calendar" component={App.Calendar} />
      <Tab.Screen name="Todo" component={App.Todo} />
    </Tab.Navigator>
  );
};

const SolalaApp = () => {
  const AppStack = createStackNavigator();
  return (
    <AppStack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        header: () => (
          <Header greeting="Good Morning!" announcement="Meet Solala" />
        ),
      }}>
      <AppStack.Screen name="Homepage" component={App.Homepage} />
      <AppStack.Screen name="Calendar" component={App.Calendar} />
      <AppStack.Screen name="Todo" component={App.Todo} />
    </AppStack.Navigator>
  );
};

const SolalaWebsite = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: (props) => <HeaderWeb {...props} />,
      }}>
      <Stack.Screen name="Home" component={Website.Home} />
      <Stack.Screen name="About" component={Website.Profile} />
      <Stack.Screen name="Login" component={App.Login} />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  if (Login === true && (Platform.OS === "android" || Platform.OS === "ios")) {
    return <SolalaAppMobile />;
  } else if (Login === true) {
    return <SolalaApp />;
  } else {
    return <SolalaWebsite />;
  }
};

export default MyStack;
