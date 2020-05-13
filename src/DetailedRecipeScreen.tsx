import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { IconButton, Card } from "react-native-paper";
import Markdown from "react-native-markdown-display";

import { RecipeType } from "./types/recipe";
import { storeTypes } from "./types/store";
import { AppActions } from "./types/actions";

import { toggleBookmark } from "./actions/bookmarkActions";

import { recipes } from "./data/recipes";

interface ButtonProps {
  bookmarked: boolean;
  toggleBookmark: Function;
}

const BookmarkButton = (props: ButtonProps) => {
  return (
    <IconButton
      icon={props.bookmarked ? "bookmark" : "bookmark-outline"}
      size={20}
      onPress={() => props.toggleBookmark()}
    >
      Bookmark
    </IconButton>
  );
};

interface Props {
  recipes: RecipeType[];
  bookmarks: number[];
  dispatch: (action: AppActions) => void;
  route: any;
  navigation: any;
  id: number;
  recipe: RecipeType;
}

interface State {}

@connect((store: storeTypes, nav: any) => {
  return {
    bookmarks: store.bookmarks,
    recent: store.recent,
    id: nav.route.params.id,
    recipe: recipes[recipes.findIndex((i) => i.id === nav.route.params.id)],
  };
})
export default class DetailedScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const bookmarks = this.props.bookmarks;
    const recipe = this.props.recipe;
    const content = recipe.content.split(/\r?\n/).map(row => row.trim()).join('\n');
    return (
      <View style={styles.container}>
        <Card>
          <Card.Cover source={{ uri: recipe.image }} />
          <Card.Title
            title={recipe.title}
            right={() => (
              <BookmarkButton
                bookmarked={bookmarks.includes(this.props.id)}
                toggleBookmark={() =>
                  this.props.dispatch(toggleBookmark(recipe.id))
                }
              />
            )}
          />
          <Card.Content>
            <Markdown>
              {content}
            </Markdown>
          </Card.Content>
        </Card>
      </View>
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
