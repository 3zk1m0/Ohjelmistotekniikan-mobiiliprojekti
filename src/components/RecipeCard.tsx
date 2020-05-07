import React from "react";
import { ReactElement } from "react";
import { IconButton, Button, Card } from "react-native-paper";

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
  title: string;
  bookmarked: boolean;
  toggleBookmark: Function;
}
export default (props: Props): ReactElement => {
  return (
    <Card
      onPress= {() => console.log("Open Recipe " + props.title)}
    >
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
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

/*
export default (props:Props):ReactElement => {
    if (props.bookmarked) {
        return (
            <Button
              icon={"bookmark"}
              mode="contained"
              onPress={() => props.toggleBookmark()}
            >
              Bookmark
            </Button>
        )
    } else {
        return (
            <Button
              icon={"bookmark-outline"}
              mode="contained"
              onPress={() => props.toggleBookmark()}
            >
              Bookmark
            </Button>
        )
    }
}*/
