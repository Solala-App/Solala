import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";

import { theme } from "../constants";
const { light, size, text, shadowProp } = theme;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={cardStyles.cardItem}>
    <View style={cardStyles.cardObjectLeft}>
      <Text style={cardStyles.cardObjectText}>8 AM</Text>
    </View>
    <View style={cardStyles.cardObjectRight}>
      <Text style={cardStyles.cardObjectText}>{title}</Text>
    </View>
  </View>
);

/* green bubble for menus */
const Card = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  const handleAddObject = () => {
    console.log("Add todo or event");
  };

  //reaserch needed...we also need a scroll up...how do these arrows work with flatbox?
  const scrollsDown = () => {
    console.log("Scrolls Down");
  };

  return (
    <SafeAreaView style={cardStyles.card}>
      <View style={cardStyles.cardHeader}>
        <View style={cardStyles.cardHeaderLeft} />
        <View style={cardStyles.cardHeaderCenter}>
          <Text style={cardStyles.cardHeaderText}>Hello</Text>
        </View>
        <View style={cardStyles.cardHeaderRight}>
          <Pressable
            onPress={() => {
              handleAddObject;
            }}
          >
            <Favicon.Plus style={{ height: 88, width: 88 }} />
          </Pressable>
        </View>
      </View>

      <View style={{ alignSelf: "stretch" }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={cardStyles.scrollsDown}>
        <Pressable
          onPress={() => {
            scrollsDown;
          }}
        >
          <Favicon.ScrollDown style={{ height: 88, width: 88 }} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const icon_size = 75;
export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: light.secondary,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: size.borderRadius,
    opacity: 0.7,
    flex: 1,
    paddingBottom: size.padding,
    ...shadowProp,
    marginTop: StatusBar.currentHeight || 0,
  },

  cardHeader: {
    alignSelf: "stretch",
    borderRadius: size.borderRadius,
    backgroundColor: light.accent,
    opacity: 0.7,
    justifyContent: "space-between",
    flexDirection: "row",
    textAlign: "center",
  },

  cardHeaderLeft: {
    flex: 1,
  },

  cardHeaderCenter: {
    flex: 10,
  },

  cardHeaderRight: {
    flex: 1,
    paddingTop: size.innerPadding,
    paddingBottom: size.innerPadding,
    paddingRight: size.innerPadding,
    paddingLeft: size.innerPadding,
    alignItems: "flex-end",
  },

  cardHeaderText: {
    ...text.title,
    color: light.textPrimary,
  },

  cardItem: {
    paddingVertical: size.innerPadding,
    paddingRight: size.innerPadding,
    marginHorizontal: size.margin,
    marginTop: size.margin,
    backgroundColor: light.primary,
    borderRadius: size.borderRadius,
    padding: size.padding,
    justifyContent: "space-between",
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "stretch",
    flex: 1,
  },

  cardObjectLeft: {
    /*checkbox bubble, time, reset, ect */
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  cardObjectRight: {
    flex: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  cardObjectText: {
    ...text.body,
    fontColor: light.textSecondary,
  },

  scrollDown: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: size.padding,
  },

  button: {
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Card;
