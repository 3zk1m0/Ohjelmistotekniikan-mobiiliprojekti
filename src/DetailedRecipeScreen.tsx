import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { IconButton, Card } from "react-native-paper";
import Markdown from "react-native-markdown-display";
import { useTheme } from "@react-navigation/native";

import { RecipeType } from "./types/recipe";
import { storeTypes } from "./types/store";
import { AppActions } from "./types/actions";

import { toggleBookmark } from "./actions/bookmarkActions";
import DetailedRecipeCard from "./components/DetailedRecipeCard";

import { recipes } from "./data/recipes";

import { appendRecent } from "./actions/recentActions"

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

@connect((store: storeTypes, nav:any) => {
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
    this.props.dispatch(appendRecent(this.props.id))
  }

  render() {
    return (
      
      <ScrollView>
        <DetailedRecipeCard
          {...this.props}
        />
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
