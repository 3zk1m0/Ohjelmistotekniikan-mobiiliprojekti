import * as React from "react";
import { Text, View, Dimensions } from "react-native";

import Carousel from "react-native-snap-carousel";

import RecipeCard from "./RecipeCard";

const sliderWidth = Dimensions.get("window").width;

const horizontalMargin = 10;
const slideWidth = sliderWidth * 0.8;

const itemWidth = slideWidth + horizontalMargin * 2;


interface Props {
  data: object;
  bookmarks: number[];
  toggleBookmark: Function;
}

interface State {
  activeIndex: number;
}

export default class Caro extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    
  }

  _renderItem = ({ item, index }: { item: object; index: number }) => {
    return (
      <RecipeCard
        id={item.id}
        title={item.title}
        image={item.image}
        bookmarked={this.props.bookmarks.includes(item.id)}
        toggleBookmark={() => this.props.toggleBookmark(item.id)}
      />
    );
  }

  render() {
    return (
        <Carousel
          layout={"default"}
          ref={(ref) => (this.carousel = ref)}
          data={this.props.data}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
        />
    );
  }
}
