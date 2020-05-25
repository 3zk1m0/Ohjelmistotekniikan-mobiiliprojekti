import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { IconButton, Card } from "react-native-paper";
import Markdown from "react-native-markdown-display";

import { RecipeType } from "./types/recipe";
import { storeTypes } from "./types/store";
import { AppActions } from "./types/actions";

import { toggleBookmark } from "./actions/bookmarkActions";

import RecipeCard from "./components/RecipeCard";

import { recipes } from "./data/recipes";

interface ButtonProps {
  bookmarked: boolean;
  toggleBookmark: Function;
}

const EmptyScreen = () => {
  return (
    <View>
      <Text style={styles.centerContainer}>
        No Bookmarks
      </Text>
    </View>
  );
};

interface Props {
  bookmarks: number[];
  recipes: RecipeType[];
  dispatch: (action: AppActions) => void;
  route: any;
  navigation: any;
}

interface State {}

@connect((store: storeTypes, nav: any) => {
  return {
    bookmarks: store.bookmarks,
    recipes: recipes.filter(recipe => store.bookmarks.includes(recipe.id))
  };
})
export default class BookmarkScreen extends React.Component<Props, State> {
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
        ListEmptyComponent={EmptyScreen()}
      />
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
  centerContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center' ,
  }
});
