// In App.js in a new project

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";

import TopNav from "./components/TopNav";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="screen"
    screenOptions={{
        header: ({ scene, previous, navigation }) => {
          return (
            <TopNav title="Test" navigation={navigation} />
          );
        },
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};
