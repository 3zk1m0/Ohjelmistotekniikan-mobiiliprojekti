import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { RecipeType } from "./types/recipe";
import { storeTypes } from "./types/store";
import { AppActions } from "./types/actions";

import RecipeCard from "./components/RecipeCard";

import { toggleBookmark } from "./actions/bookmarkActions";

import { recipes } from "./data/recipes"


interface Props {
  recipes: RecipeType[];
  bookmarks: number[];
  tags: string[];
  dispatch: (action: AppActions) => void;
}

interface State {}

@connect((store: storeTypes, nav: any) => {
  return {
    bookmarks: store.bookmarks,
    recipes: recipes.filter(recipe => !recipe.tags.includes(nav.route.params.tag.name)),
  };
})
export default class FilterScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const bookmarks = this.props.bookmarks;
    return (
      <FlatList
        style={styles.list}
        data={this.props.recipes}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={({ item }) => (
          <RecipeCard
            id={item.id}
            title={item.title}
            image={item.image}
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
