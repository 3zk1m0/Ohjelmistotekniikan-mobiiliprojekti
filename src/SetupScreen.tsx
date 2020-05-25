import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { connect } from "react-redux";
import { Chip, Card, Switch, Text, Button } from "react-native-paper";

import { storeTypes } from "./types/store";
import { AppActions } from "./types/actions";

import { toggleDarkMode, toggleToggleTag } from "./actions/preferencesActions";

import { tags } from "./data/tags";

import TopNav from "./components/TopNav";

interface Props {
  darkMode: boolean;
  tagList: string[];
  dispatch: (action: AppActions) => void;
}

interface State {}

@connect((store: storeTypes, nav: any) => {
  return {
    darkMode: store.preferences.darkMode,
    tagList: store.preferences.tagList,
  };
})
export default class DetailedScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  _onToggleDarkMode = () => this.props.dispatch(toggleDarkMode());

  render() {
    return (
      <ScrollView style={styles.cardholder}>
        <TopNav title={"Setup"} />
        <Card style={styles.container}>
          <Card.Title title="Preferences" />
          <Card.Content>
            <Text>DarkMode</Text>
            <Switch
              value={this.props.darkMode}
              onValueChange={this._onToggleDarkMode}
            />
          </Card.Content>
        </Card>
        <Card style={styles.container}>
          <Card.Content>
            <Card.Title title="Prefered Tags" />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 10,
              }}
            >
              {tags.map((tag) => {
                if (tag.name == "All Recipes") return;
                return (
                  <Chip
                    key={tag.name}
                    style={styles.chip}
                    icon={tag.icon}
                    selected={this.props.tagList.includes(tag.name)}
                    onPress={() =>
                      this.props.dispatch(toggleToggleTag(tag.name))
                    }
                  >
                    {tag.name}
                  </Chip>
                );
              })}
            </View>
          </Card.Content>
        </Card>
        <Button
          style={{marginHorizontal: 15}}
          icon="check"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Save
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardholder: {},
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
  chip: {
    margin: 5,
  },
  list: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  separator: {
    height: 15,
  },
});
