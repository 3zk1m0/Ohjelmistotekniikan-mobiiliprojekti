
import * as React from 'react';
import { connect } from "react-redux";
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { storeTypes } from "./types/store";
import { AppActions } from "./types/actions";

import StackNavigator from './StackNavigator';

import { DrawerContent } from "./drawerContent";

const Drawer = createDrawerNavigator();

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
  }
}

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
  }
}


interface Props {
  darkMode: boolean;
  dispatch: (action: AppActions) => void;
}

interface State {}

@connect((store: storeTypes, nav: any) => {
  return {
    darkMode: store.preferences.darkMode,
  };
})
export default class DetailedScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const theme = this.props.darkMode ? CustomDarkTheme : CustomDefaultTheme;
    return (
      <PaperProvider
            theme={theme}
            settings={{
              icon: (props) => <MaterialCommunityIcons {...props} />,
            }}
          >
      <NavigationContainer theme={theme}>
        <Drawer.Navigator initialRouteName="Stack" drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Stack" component={StackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
      </PaperProvider>
    );
  }
}


/* export default function App2() {
  return (
    <PaperProvider
          theme={PaperDarkTheme}
          settings={{
            icon: (props) => <MaterialCommunityIcons {...props} />,
          }}
        >
    <NavigationContainer theme={NavigationDarkTheme}>
      <Drawer.Navigator initialRouteName="Stack" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Stack" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
} */