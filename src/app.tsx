import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";

import {
  toggleBookmark,
} from "./actions/bookmarkActions";
import {
  appendRecent
} from "./actions/recentActions";
import { AppActions } from "./types/actions";
import { storeTypes } from "./types/store";

import RecipeCard from "./components/RecipeCard";

const _id = 2;

interface Props {
  bookmarks: number[];
  dispatch: (action: AppActions) => void;
}

interface State {}

@connect((store: storeTypes) => {
  return {
    bookmarks: store.bookmarks,
    recent: store.recent,
  };
})
export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const bookmarks = this.props.bookmarks;
    return (
      <View style={styleSheet.container}>
        <Button
          icon={"bookmark"}
          mode="contained"
          onPress={() => this.props.dispatch(appendRecent(1))}
        >
          Recent 1
        </Button>
        <Button
          icon={"bookmark"}
          mode="contained"
          onPress={() => this.props.dispatch(appendRecent(2))}
        >
          Recent 2
        </Button>
        <Text>{this.props.recent}</Text>
        <View style={{height: 20}}/>
        <RecipeCard
          bookmarked={bookmarks.includes(3)}
          toggleBookmark={() => this.props.dispatch(toggleBookmark(3))}
        />
        <RecipeCard
          bookmarked={bookmarks.includes(4)}
          toggleBookmark={() => this.props.dispatch(toggleBookmark(4))}
        />
        <RecipeCard
          bookmarked={bookmarks.includes(5)}
          toggleBookmark={() => this.props.dispatch(toggleBookmark(5))}
        />
        <Text>{this.props.bookmarks}</Text>
      </View>
    );
  }
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
