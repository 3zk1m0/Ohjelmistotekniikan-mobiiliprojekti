import React from "react";
import { ReactElement } from "react"
import { Button } from "react-native-paper"


interface Props {
    bookmarked: boolean;
    toggleBookmark: Function;
}

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
}