import React from 'react';
import { FlatList, View, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';

import { Twitt } from './components/twitt';
import { twitts } from './data';
import { StackNavigatorParamlist } from './types';

import Caro from './components/carousel';
import { RecipeCard } from './components/recipeCard';

type TwittProps = React.ComponentProps<typeof Twitt>;

const cardWith = Dimensions.get('window').width * 0.85;

function renderItem({ item }: { item: TwittProps }) {
  return (
    <View
      style= {{flexDirection: 'row', justifyContent: 'center'}}
    >
      <View
      style= {{width: cardWith}}
      >
      <RecipeCard {...item} />
      </View>
    </View>
  );
}

function keyExtractor(item: TwittProps) {
  return item.id.toString();
}

type Props = {
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
};

export const Feed = (props: Props) => {
  const theme = useTheme();

  const data = twitts.map(twittProps => ({
    ...twittProps,
    onPress: () =>
      props.navigation &&
      props.navigation.push('Details', {
        ...twittProps,
      }),
  }));

  return (
    <ScrollView>
      <Text style={styles.topicText}>New</Text>
      <Caro data={data} />
      <Text style={styles.topicText}>Recently Viewed</Text>
      <FlatList
        contentContainerStyle={{ backgroundColor: theme.colors.background}}
        style={{ backgroundColor: theme.colors.background }}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => (
          <View style={{ height: 20 }} />
        )}
      />
      <View style={{height: 20}}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topicText: {
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 20,
  },
});
