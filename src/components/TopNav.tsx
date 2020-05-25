import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Paragraph, Menu, Divider, Provider, Searchbar  } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
  navigation?: DrawerNavigationProp<any>;
  previous?: any;
}

class MenuBar extends React.Component <PropsMenu,{}> {
  state = {
    visible: false,
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  _navigate = ( screen:string ) => {
    this._closeMenu();
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <Menu
        visible={this.state.visible}
        onDismiss={this._closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" onPress={this._openMenu} />}
      >
        <Menu.Item onPress={() => this._navigate("Help")} title="Help / FAQ" />
        <Menu.Item onPress={() => this._navigate("About")} title="About Us" />
        <Menu.Item onPress={() => this._navigate("Preferences")} title="Preferences" />
      </Menu>
    );
  }
}

export default class TopNav extends React.Component<Props, {}> {

  _handleSearch = () => this.props.navigation.navigate("Search");

  render() {
    const previous = this.props.previous;
    const title = this.props.title;

    if (!this.props.navigation){
      return (
        <Appbar.Header>
          <Appbar.Content title={title} />
        </Appbar.Header>
      );
    }

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
        <Appbar.Action icon="magnify" onPress={this._handleSearch} />
        <MenuBar navigation={this.props.navigation}/>
      </Appbar.Header>
    );
  }
}