// In App.js in a new project

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";

import TopNav from "./components/TopNav";
import DetailedRecipeScreen from "./DetailedRecipeScreen";
import FilterScreen from "./FilterScreen";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="screen"
    screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const title = !previous ? "OResepti" : ""
          return (
            <TopNav title={title} navigation={navigation} previous={previous}/>
          );
        },
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Detailed" component={DetailedRecipeScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
};
