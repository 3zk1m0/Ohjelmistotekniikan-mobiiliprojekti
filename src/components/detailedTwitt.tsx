import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import {
  Surface,
  Title,
  Caption,
  Avatar,
  Subheading,
  useTheme,
  Card,
  Paragraph,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from 'color';

import Markdown from 'react-native-markdown-display';

type Props = {
  id: number;
  name: string;
  handle: string;
  date: string;
  title: string;
  content: string;
  image: string;
  avatar: string;
  comments: number;
  retweets: number;
  hearts: number;
};


export const DetailedTwitt = (props: Props) => {
  const theme = useTheme();

  const contentColor = color(theme.colors.text)
    .alpha(0.8)
    .rgb()
    .string();

  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();

  const LeftContent = propss => <Avatar.Image source={{ uri: props.avatar }} size={50} />;

  const content = props.content.split(/\r?\n/).map(row => row.trim()).join('\n');

  return (
    <ScrollView>
    <Card 
      style={{ marginLeft: 15, marginRight: 15, marginTop: 15 }}
    >
      <Card.Cover source={{ uri: props.image }} />
      <Card.Title
        title={props.title}
        subtitle={props.name}
        left={LeftContent}
      />
      <Card.Content>
        <Markdown
          style={{body: {color: contentColor}}}
        >{content}</Markdown>
      </Card.Content>

      {/*<Card.Actions style={{display: "flex", flexDirection: "row-reverse"}}>
        <Caption style={{margin: 5}}>{props.date}</Caption>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={12}
            //color={iconColor}
          />
          <Caption style={styles.iconDescription}>{props.hearts}</Caption>
        </View>
  </Card.Actions>*/}
    </Card>
    </ScrollView>
    /*
    <Surface style={styles.container}>
      <View style={styles.topRow}>
        <Avatar.Image
          style={styles.avatar}
          source={{ uri: props.avatar }}
          size={60}
        />
        <View>
          <Title>{props.name}</Title>
          <Caption style={styles.handle}>{props.handle}</Caption>
        </View>
      </View>
      <Subheading style={[styles.content, { color: contentColor }]}>
        {props.content}
      </Subheading>
      <Image
        source={{ uri: props.image }}
        style={[
          styles.image,
          {
            borderColor: imageBorderColor,
          },
        ]}
      />
    </Surface>*/
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatar: {
    marginRight: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  handle: {
    marginRight: 3,
    lineHeight: 12,
  },
  content: {
    marginTop: 25,
    fontSize: 20,
    lineHeight: 30,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 25,
    borderRadius: 20,
    width: '100%',
    height: 280,
  },
});
