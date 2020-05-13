// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';

import { DrawerContent } from "./drawerContent";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Stack" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Stack" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}