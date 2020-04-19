import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { RecipeCard } from './recipeCard';

type props = {
  data: object;
};

const sliderWidth = Dimensions.get('window').width;

const horizontalMargin = 2;
const slideWidth = sliderWidth * 0.85;

const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

export default class Caro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  _renderItem({ item, index }) {
    return <RecipeCard {...item} />;
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Carousel
          layout={'default'}
          ref={ref => (this.carousel = ref)}
          data={this.props.data}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ activeIndex: index })}
        />
      </View>
    );
  }
}
