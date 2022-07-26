import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Modal,
  ScrollView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Slider from '@react-native-community/slider';
import { Dropdown } from 'react-native-element-dropdown';
import * as Favicon from "../../assets/favicons_js";
import EventPopup from './EventPopup.js'
import TaskPopup from './TaskPopup.js'
import { theme } from "../constants";
const { light, size, text, shadowProp } = theme;


// npm install @react-native-community/slider --save
// yarn add react-native-select-dropdown

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
    const [isModalVisible, setIsModalVisible] = React.useState(false);


    const handleAddObject = () => {
        setIsModalVisible(() => !isModalVisible);      
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
                  <TouchableOpacity onPress={handleAddObject}>
                      <Favicon.Plus style={{ width: 44 }} />
              </TouchableOpacity>

                  <Modal visible={isModalVisible} transparent={true}>
                      <TaskPopup isModalVisible={handleAddObject} />
                </Modal>
          </View>
      </View>

      <View style={{ alignSelf: "stretch" }}>
        <FlatList
          data={DATA.slice(0, 2)}
          maxToRenderPerBatch={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View>
        <Pressable
          onPress={() => {
            scrollsDown;
          }}
        >
          <Favicon.ScrollDown style={{ width: 44 }} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: light.secondary,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: size.borderRadius,
    opacity: 0.7,
    paddingBottom: size.innerPadding,
    ...shadowProp,
  },

  cardHeader: {
    alignSelf: "stretch",
    borderRadius: size.borderRadius,
    backgroundColor: light.accent,
    opacity: 0.7,
    justifyContent: "space-between",
    flexDirection: "row",
    textAlign: "center",
    marginBottom: size.margin,
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
    padding: size.innerPadding,
    marginHorizontal: size.margin,

    marginBottom: size.margin,
    backgroundColor: light.primary,
    borderRadius: size.borderRadius,
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
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  cardObjectText: {
    ...text.body,
    fontColor: light.textSecondary,
  },

  scrollDown: {
    alignSelf: "flex-end",
    justifyContent: "center",
  },

  button: {
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Card;
