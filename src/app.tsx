import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";

import { addBookmark, removeBookmark } from "./actions/bookmarkActions";
import { AppActions } from "./types/actions";
import { storeTypes } from "./types/store";

const id = 2;

interface Props {
  bookmarks: number[];
  dispatch: (action:AppActions) => void;
}

interface State {}

@connect((store:storeTypes) => {
  return {
    bookmarks: store.bookmarks,
  };
})
export default class App extends React.Component<Props,State> {
  render() {
    const bookmarks = this.props.bookmarks;
    return (
      <View style={styleSheet.container}>
        {bookmarks.includes(id) ? (
          <Button
            icon={"bookmark"}
            mode="contained"
            onPress={() => this.props.dispatch(removeBookmark(id))}
          >
            Bookmark
          </Button>
        ) : (
          <Button
            icon={"bookmark-outline"}
            mode="contained"
            onPress={() => this.props.dispatch(addBookmark(id))}
          >
            Bookmark
          </Button>
        )}
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
