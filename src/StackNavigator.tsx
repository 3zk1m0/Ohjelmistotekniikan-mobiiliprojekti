import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";

import TopNav from "./components/TopNav";
import DetailedRecipeScreen from "./DetailedRecipeScreen";
import FilterScreen from "./FilterScreen";
import HelpScreen from "./HelpScreen";
import AboutScreen from "./AboutScreen";
import PreferencesScreen from "./PrefedencesScreen";
import SearchScreen from "./SearchScreen";

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
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Preferences" component={PreferencesScreen} />

    </Stack.Navigator>
  );
};
