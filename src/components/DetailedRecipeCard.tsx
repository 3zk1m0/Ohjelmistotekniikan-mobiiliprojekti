import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { IconButton, Card } from "react-native-paper";
import Markdown from "react-native-markdown-display";
import { useTheme } from "@react-navigation/native";

import { RecipeType } from "../types/recipe";
import { storeTypes } from "../types/store";
import { AppActions } from "../types/actions";

import { toggleBookmark } from "../actions/bookmarkActions";

import { recipes } from "../data/recipes";


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
  theme: any;
}

interface State {}

export default (props:Props) =>  {

    const { colors } = useTheme();
    const bookmarks = props.bookmarks;
    const recipe = props.recipe;
    const content = recipe.content.split(/\r?\n/).map(row => row.trim()).join('\n');
    return (
      <ScrollView>
        <Card style={styles.container}>
          <Card.Cover source={{ uri: recipe.image }} />
          <Card.Title
            title={recipe.title}
            right={() => (
              <BookmarkButton
                bookmarked={bookmarks.includes(props.id)}
                toggleBookmark={() =>
                  props.dispatch(toggleBookmark(recipe.id))
                }
              />
            )}
          />
          <Card.Content>
            <Markdown style={{text: {color: colors.text}}}>
              {content}
            </Markdown>
          </Card.Content>
        </Card>
      </ScrollView>
    );
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
