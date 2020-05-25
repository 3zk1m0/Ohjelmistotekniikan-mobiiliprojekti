import React from "react";
import { ReactElement } from "react";
import { IconButton, Button, Card } from "react-native-paper";

import { useNavigation } from '@react-navigation/native';

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
  id: number;
  title: string;
  image: string;
  bookmarked: boolean;
  toggleBookmark: Function;
}

export default (props: Props): ReactElement => {
  const navigation = useNavigation();
  return (
    <Card
      onPress= {() => navigation.navigate("Detailed", {id: props.id})}
    >
      <Card.Cover source={{ uri: props.image }} />
      <Card.Title
        title={props.title}
        right={() => (
          <BookmarkButton
            bookmarked={props.bookmarked}
            toggleBookmark={props.toggleBookmark}
          />
        )}
      />
    </Card>
  );
};


