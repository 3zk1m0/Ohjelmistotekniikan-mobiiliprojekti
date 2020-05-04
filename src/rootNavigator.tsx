import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Button } from "react-native-paper";

//import TopBar from "./components/TopBar";

import App from './app';

const RootNavigator = () => {
  return (
    <App/>
  );
};

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RootNavigator;
