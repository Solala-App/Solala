import { createStackNavigator } from "@react-navigation/stack";
import * as Website from "../screens/website";
import * as App from "../screens/app";
import React from "react";
import { HeaderWeb, Header } from "../components";

const Login = true;

const SolalaApp = () => {
  const AppStack = createStackNavigator();
  return (
    <AppStack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        header: () => (
          <Header greeting="Good Morning!" announcement="Meet Solala" />
        ),
      }}
    >
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
      }}
    >
      <Stack.Screen name="Home" component={Website.Home} />
      <Stack.Screen name="About" component={Website.Profile} />
      <Stack.Screen name="Login" component={App.Login} />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  if (Login === true) {
    return <SolalaApp />;
  } else {
    return <Website />;
  }
};

/*        screenOptions={{
          header: (props) => <Header {...props} />,
        }}*/

export default MyStack;
