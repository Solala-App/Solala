import { format } from "date-fns";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  SafeAreaView,
  Modal,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";
import Plus from "../../assets/favicons_light/Plus.png";
import { theme } from "../constants";
import { Titles } from "./Card";
import CheckBoxComponent from "./CheckBoxComponent";
import TaskPopup from "./TaskPopup.js";
import Zoom from "./Zoom.js";

const { light, size, text, shadowProp } = theme;

function Item({ data, handleZoom }) {
  const [isZoomVisible, setZoomVisible] = React.useState(false);
  const handleZoomVisible = () => {
    setZoomVisible(() => !isZoomVisible);
  };
  return (
    <View style={cardStyles.cardItem}>
      <View style={cardStyles.cardObjectLeft}>
        <CheckBoxComponent
          onChange={(checked) => {
            // do stuff with checked
            console.log(
              `Todo ${data.title} is ${checked ? "complete" : "incomplete"}`
            );
          }}
        />
      </View>
      <View style={cardStyles.cardObjectRight}>
        <Pressable onPress={handleZoomVisible}>
          <Text style={cardStyles.cardObjectText}>{data.title}</Text>
        </Pressable>
      </View>
      <Modal visible={isZoomVisible} transparent>
        <Zoom zoom={handleZoomVisible} cardData={data} type={"Task"} />
      </Modal>
    </View>
  );
}

const itemSeparator = () => {
  return (
    <View style={{ height: size.margin, backgroundColor: light.secondary }} />
  );
};
/* green bubble for menus */

const Card = (props) => {
  const renderItem = ({ item }) => <Item data={item.cardData} />;
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [scrollDownIndex, setScrollDownIndex] = React.useState(0);
  const [scrollUpIndex, setScrollUpIndex] = React.useState(0);
  const [displayScrollUp, setDisplayScrollUp] = React.useState(false);
  const [DATA, setDATA] = React.useState([]);

  const flatList = useRef();
  useEffect(() => {
    const userId = getAuth().currentUser.uid;
    const db = getDatabase();
    const reference = ref(db, "users/" + userId + "/tasks");
    let data = [];

    return onValue(reference, (snapshot) => {
      const value = snapshot.val();
      data = [];
      for (const n in value) {
        data.push({ id: n, cardData: value[n] });
      }
      setDATA(data);
    });
  }, []);

  const getFilteredTasks = () => {
    const data = [];
    DATA.map((item) => {
      if (props.title === Titles.HighPriority) {
        if (item.cardData.priority > 50) {
          data.push(item);
        }
      } else {
        if (
          props.day.getDate() === new Date(item.cardData.dateTime).getDate()
        ) {
          data.push(item);
        }
      }
    });
    return data;
  };
  const handleAddObject = () => {
    setIsModalVisible(() => !isModalVisible);
  };

  const scrollsDown = () => {
    if (scrollDownIndex < DATA.length) {
      setScrollDownIndex(scrollDownIndex + 1);
      flatList.current.scrollToIndex({ index: scrollDownIndex });
    }
  };
  const scrollUp = () => {
    if (scrollUpIndex >= 0) {
      setScrollUpIndex(scrollUpIndex - 1);
      flatList.current.scrollToIndex({ index: scrollUpIndex });
    }
  };

  const onViewRef = React.useRef((viewableItems) => {
    if (
      typeof viewableItems.viewableItems[
        viewableItems.viewableItems.length - 1
      ] !== "undefined"
    ) {
      setScrollDownIndex(
        viewableItems.viewableItems[viewableItems.viewableItems.length - 1]
          .index
      );
      setScrollUpIndex(viewableItems.viewableItems[0].index - 1);
      //console.log(viewableItems.viewableItems[0].index);
      if (viewableItems.viewableItems[0].index === 0) {
        setDisplayScrollUp(false);
      } else {
        setDisplayScrollUp(true);
      }
    }
  });
  return (
    <SafeAreaView style={cardStyles.card}>
      <View style={cardStyles.cardHeader}>
        <View style={cardStyles.cardHeaderLeft} />

        <View style={cardStyles.centeredView}>
          <Text style={cardStyles.cardHeaderText}>{props.title}</Text>
        </View>
        <View style={cardStyles.cardHeaderRight}>
          <Pressable onPress={handleAddObject}>
            <Image
              style={{ width: RFValue(11), height: RFValue(11) }}
              source={Plus}
            />
          </Pressable>

          <Modal visible={isModalVisible} transparent>
            <TaskPopup
              isModalVisible={handleAddObject}
              currentDay={props.day}
            />
          </Modal>
        </View>
      </View>
      <View
        style={{
          alignSelf: "stretch",
          flex: 1,
        }}>
        <FlatList
          data={getFilteredTasks()}
          ref={flatList}
          initialScrollIndex={0}
          onViewableItemsChanged={onViewRef.current}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={itemSeparator}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={scrollsDown}>
          <Favicon.ScrollDown
            iconColor="light"
            style={cardStyles.scrollButton}
          />
        </Pressable>
        {displayScrollUp === true && (
          <Pressable onPress={scrollUp}>
            <Favicon.ScrollUp
              iconColor="light"
              style={cardStyles.scrollButton}
            />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: light.secondary,
    flexDirection: "column",
    borderRadius: size.borderRadius,
    opacity: 0.7,
    paddingBottom: size.innerPadding,
    alignItems: "center",
    ...shadowProp,
    flex: 1,
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
    flex: 0.1,
  },

  cardHeaderCenter: {
    flex: 10,
  },

  cardHeaderRight: {
    flex: 0.1,
    paddingTop: size.innerPadding,
    paddingBottom: size.innerPadding,
    paddingRight: size.innerPadding,
    alignItems: "flex-end",
  },

  cardHeaderText: {
    ...text.title,
    color: light.textPrimary,
  },

  cardItem: {
    padding: size.innerPadding,
    marginHorizontal: size.margin,

    backgroundColor: light.primary,
    borderRadius: size.borderRadius,
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "stretch",
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
    color: light.textSecondary,
    flexDirection: "row",
  },

  scrollDown: {
    alignSelf: "flex-end",
    justifyContent: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollButton: {
    width: RFValue(12),
    height: RFValue(12),
    marginEnd: size.margin,
  },
});

export default Card;
