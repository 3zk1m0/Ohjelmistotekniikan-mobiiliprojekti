import * as React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { Searchbar } from "react-native-paper";

import RecipeCard from "./RecipeCard";
import { RecipeType } from "../types/recipe";

interface Props {
    recipes: RecipeType[];
    bookmarks: number[];
    action: (id:number) => void;
  }


export default class MyComponent extends React.Component <Props> {
  state = {
    searchQuery: "",
  };

  _onChangeSearch = (query:string) => this.setState({ searchQuery: query });

  render() {
    const { searchQuery } = this.state;
    const { bookmarks} = this.props;
    const recipes = this.props.recipes.filter((item) => item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
    return (
      <View style={{flex: 1}}>
        <Searchbar
          placeholder="Search"
          onChangeText={this._onChangeSearch}
          value={searchQuery}
        />
        <FlatList
          style={styles.list}
          data={recipes}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={({ item }) => (
            <RecipeCard
              id={item.id}
              title={item.title}
              image={item.image}
              bookmarked={bookmarks.includes(item.id)}
              toggleBookmark={() =>
                this.props.action(item.id)
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={<View/>}
          ListFooterComponentStyle={{height: 25}}
        />
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
      paddingTop: 15,
      paddingHorizontal: 15,
    },
    separator: {
      height: 15,
    },
  });
