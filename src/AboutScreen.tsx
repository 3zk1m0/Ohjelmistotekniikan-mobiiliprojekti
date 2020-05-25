import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { IconButton, Card } from "react-native-paper";
import Markdown from "react-native-markdown-display";

const text = `

# About

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ligula nunc. Morbi tincidunt erat est, vel imperdiet ante auctor ac. Phasellus mauris ante, lobortis ac ante vitae, pretium finibus tortor. Quisque molestie ex id laoreet auctor. Aenean quam odio, rutrum ut imperdiet eget, pretium cursus nibh. Donec feugiat dapibus malesuada. Aenean commodo nibh eu quam suscipit gravida.

Aliquam erat volutpat. Nullam in viverra elit. Nunc ipsum purus, malesuada vel ante in, eleifend euismod nibh. Aenean vehicula sem risus, et porta leo gravida sit amet. Vivamus bibendum vel dui sit amet malesuada. Duis sed rhoncus dui. Fusce rutrum magna in interdum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sed elit et justo egestas rutrum venenatis ac mauris.


`




interface Props {}

interface State {}

export default class AboutScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
 
    const content = text.split(/\r?\n/).map(row => row.trim()).join('\n');
    return (
      <ScrollView>
        <Card style={styles.container}>
          <Card.Content>
            <Markdown>
              {content}
            </Markdown>
          </Card.Content>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
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
