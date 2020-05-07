import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { RecipeType } from "./types/recipe";
import { storeTypes } from "./types/store";
import { AppActions } from "./types/actions";

import RecipeCard from "./components/RecipeCard";

import { toggleBookmark } from "./actions/bookmarkActions";

interface Props {
  recipes: RecipeType[];
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
export default class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const bookmarks = this.props.bookmarks;
    return (
      <RecipeCard
        title={"title"}
        bookmarked={bookmarks.includes(1)}
        toggleBookmark={() => console.log("bookmark")}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
