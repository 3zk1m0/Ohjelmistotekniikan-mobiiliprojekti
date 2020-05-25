import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { RecipeType } from "./types/recipe";
import { storeTypes } from "./types/store";
import { AppActions } from "./types/actions";



import { toggleBookmark } from "./actions/bookmarkActions";

import { recipes } from "./data/recipes";

import Search from "./components/Search";

interface Props {
  recipes: RecipeType[];
  bookmarks: number[];
  dispatch: (action: AppActions) => void;
}

interface State {}

@connect((store: storeTypes, nav: any) => {
  return {
    bookmarks: store.bookmarks,
    recipes: recipes,
  };
})
export default class FilterScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  handleBookmark  = (id:number): void => {
    console.log(id);
    //this.props.dispatch(toggleBookmark(id))
  }

  render() {
    const bookmarks = this.props.bookmarks;
    const recipes = this.props.recipes;
    return (
      <View style={{flexGrow: 1}}>
        <Search recipes={recipes} bookmarks={bookmarks} action={this.handleBookmark}/>

      </View>
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
