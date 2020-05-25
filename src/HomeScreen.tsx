import React from "react";
import { ScrollView, View, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Text } from "react-native-paper";

import { RecipeType } from "./types/recipe";
import { storeTypes } from "./types/store";
import { AppActions } from "./types/actions";

import RecipeCard from "./components/RecipeCard";

import RecipeCarousel from "./components/RecipeCarousel";

import { toggleBookmark } from "./actions/bookmarkActions";

import { recipes } from "./data/recipes";

const EmptyScreen = () => {
  return (
    <View style={styles.centerContainer}>
      <Text>
        No Recent Recipes
      </Text>
    </View>
  );
};


interface Props {
  recipes: RecipeType[];
  bookmarks: number[];
  recent: number[];
  tagList: string[];
  dispatch: (action: AppActions) => void;
}

interface State {}

@connect((store: storeTypes) => {
  return {
    bookmarks: store.bookmarks,
    recent: store.recent,
    tagList: store.preferences.tagList
  };
})
export default class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  handleToggle = (id: number) => {
    this.props.dispatch(toggleBookmark(id));
  };

  render() {
    const { bookmarks, recent, tagList } = this.props;

    let recentRecipes:RecipeType[] = [];
    recent.forEach(id => {
      if (id != 0) recentRecipes.push(recipes[recipes.findIndex((x) => x.id == id)])
    });

    let newRecipes = [...recipes].filter((recipe) => tagList.every((tag) => recipe.tags.includes(tag)))
    newRecipes.reverse().slice(0, 5);

    return (
        <FlatList
          data={recentRecipes}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={({ item }) => (
            <View style={styles.list}>
            <RecipeCard
              id={item.id}
              title={item.title}
              image={item.image}
              bookmarked={bookmarks.includes(item.id)}
              toggleBookmark={() => this.handleToggle(item.id)}
            />
            </View>
          )}
          ListHeaderComponent={
            <>
              <Text style={styles.topicText}>New</Text>
              <RecipeCarousel
                data={newRecipes}
                bookmarks={bookmarks}
                toggleBookmark={this.handleToggle}
              />
              <Text style={styles.topicText}>Recent</Text>
            </>
          }
          keyExtractor={(item) =>
            item.id.toString() + Math.random().toString(36).substring(7)
          }
          ListEmptyComponent={EmptyScreen()}
        />
    );
  }
}

const styles = StyleSheet.create({
  topicText: {
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 20,
    paddingHorizontal: 15,
  },
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
    paddingHorizontal: 15,
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
