import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Switch,
  Text,
  Title,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import Animated from 'react-native-reanimated';

import { PreferencesContext } from './context/preferencesContext';


export function DrawerContent(props: any) {

  const translateX = Animated.interpolate(props.progress, {
    inputRange: [0, 0.5, 0.7, 0.8, 1],
    outputRange: [-100, -85, -70, -45, 0],
  });

  const tags = [
    {
      name: "All Recipes",
      icon: "silverware-fork-knife",
    },
    {
      name: "Cheap",
      icon: "currency-eur",
    },
    {
      name: "Meat",
      icon: "pig",
    },
    {
      name: "Vegan",
      icon: "carrot",
    },
    {
      name: "Mjölk",
      icon: "cow",
    },
  ]
  return (
    <DrawerContentScrollView {...props}>
      <Animated.View
        //@ts-ignore
        style={[
          styles.drawerContent,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <View 
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            marginVertical: 10,
          }}
        >
          <Image
            style={{width: 100, height: 100}}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/512px-Google_Material_Design_Logo.svg.png',
            }}
          />
        </View>
        <Drawer.Section 
          title="Tags"
          style={styles.drawerSection}
          >
            {tags.map( tag => {
              return(
                <DrawerItem
                  icon={({ color, size }) => (
                    <MaterialCommunityIcons
                      name={tag.icon}
                      color={color}
                      size={size}
                    />
                  )}
                  key={tag.name}
                  label={tag.name}
                  labelStyle={{fontFamily: 'Roboto'}}
                  onPress={() => {props.navigation.navigate("Filter", {tag})}}
                />
              )
            })}
        </Drawer.Section>
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 0,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
