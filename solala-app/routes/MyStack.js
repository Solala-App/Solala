import { createStackNavigator } from "@react-navigation/stack";
import * as Website from "../screens/website";
import * as App from "../screens/app";
import React from "react";
import { HeaderWeb } from "../components";

const Stack = createStackNavigator();
const Login = false;

const MyStack = () => {
  if (Login === true) {
    return (
      <Stack.Navigator
        initialRouteName="Homepage"
        screenOptions={{
          header: (props) => <Header {...props} />,
        }}
      >
        <Stack.Screen name="Homepage" component={App.Homepage} />
        <Stack.Screen name="Calender" component={App.Calendar} />
        <Stack.Screen name="Todo" component={App.Todo} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          header: (props) => <HeaderWeb {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={Website.Home} />
        <Stack.Screen name="About" component={Website.About} />
        <Stack.Screen name="Login" component={App.Login} />
      </Stack.Navigator>
    );
  }
};

export default MyStack;
