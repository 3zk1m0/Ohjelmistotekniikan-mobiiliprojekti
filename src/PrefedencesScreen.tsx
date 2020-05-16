import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { IconButton, Card, Switch } from "react-native-paper";

import { storeTypes } from "./types/store";
import { AppActions } from "./types/actions";

import { toggleDarkMode } from "./actions/preferencesActions"


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

  _onToggleDarkMode = () => this.props.dispatch(toggleDarkMode());

  render() {
    return (
      <ScrollView>
        <Card style={styles.container}>
          <Card.Title
            title={"Preferences"}
          />
          <Card.Content>
            <Text>DarkMode</Text>
          <Switch
        value={this.props.darkMode}
        onValueChange={this._onToggleDarkMode}
      />
          </Card.Content>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  list: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  separator: {
    height: 15,
  },
});
