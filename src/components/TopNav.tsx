import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Paragraph, Menu, Divider, Provider } from "react-native-paper";

interface Props {
  title: string;
  navigation: DrawerNavigationProp<any>;
  previous?: any;
}

class MenuBar extends React.Component {
  state = {
    visible: false,
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    return (
      <Menu
        visible={this.state.visible}
        onDismiss={this._closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" onPress={this._openMenu} />}
      >
        <Menu.Item onPress={() => {}} title="Help / FAQ" />
        <Menu.Item onPress={() => {}} title="About Us" />
        <Menu.Item onPress={() => {}} title="Preferences" />
      </Menu>
    );
  }
}

export default class TopNav extends React.Component<Props, {}> {
  render() {
    const previous = this.props.previous;
    const title = this.props.title;
    return (
      <Appbar.Header>
        {previous ? 
        <Appbar.BackAction
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        :
        <Appbar.Action
          icon="menu"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />}
        <Appbar.Content title={title} />
        <MenuBar />
      </Appbar.Header>
    );
  }
}