import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { RecipeType } from "./types/recipe";
import { storeTypes } from "./types/store";
import { AppActions } from "./types/actions";

import RecipeCard from "./components/RecipeCard";

import { toggleBookmark } from "./actions/bookmarkActions";

const DATA = [
  {
    id: 1,
    title: "First Item",
  },
  {
    id: 2,
    title: "Second Item",
  },
  {
    id: 3,
    title: "Third Item",
  },
  {
    id: 4,
    title: "Third Item",
  },
  {
    id: 5,
    title: "Third Item",
  },
  {
    id: 6,
    title: "Third Item",
  },
  {
    id: 7,
    title: "Third Item",
  },
  {
    id: 8,
    title: "Third Item",
  },
  {
    id: 9,
    title: "Third Item",
  },
  {
    id: 10,
    title: "Third Item",
  },
];

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
      <FlatList
        style={styles.list}
        data={DATA}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={({ item }) => (
          <RecipeCard
            title={item.title}
            bookmarked={bookmarks.includes(item.id)}
            toggleBookmark={() => this.props.dispatch(toggleBookmark(item.id))}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
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
