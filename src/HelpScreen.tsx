import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { IconButton, Card } from "react-native-paper";
import Markdown from "react-native-markdown-display";

const text = `

# Help

Todo

# FAQ

* Todo
    * todo


`




interface Props {}

interface State {}

export default class HelpScreen extends React.Component<Props, State> {
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
