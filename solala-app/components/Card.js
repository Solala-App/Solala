import { format } from "date-fns";
import { getAuth } from "firebase/auth";
import { get, getDatabase, onValue, ref } from "firebase/database";
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
  Platform,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";
import Plus from "../../assets/favicons_light/Plus.png";
import { theme } from "../constants";
import CheckBoxComponent from "./CheckBoxComponent";
import EventPopup from "./EventPopup.js";
import TaskPopup from "./TaskPopup.js";
import Zoom from "./Zoom.js";

const { light, size, text, shadowProp } = theme;

export const Titles = {
  BodyCheck: "Body Check",
  Upcoming: "Upcoming",
  TodayEvent: "Today's Events",
  HighPriority: "Priorities",
};

const Item = ({ title, type, zoom }) => (
  <View style={cardStyles.cardItem}>
    <View style={cardStyles.cardObjectLeft}>
      {type === Titles.HighPriority && (
        <CheckBoxComponent
          onChange={(checked) => {
            // do stuff with checked
            console.log(
              `Todo ${title} is ${checked ? "complete" : "incomplete"}`
            );
          }}
        />
      )}
      {type === Titles.TodayEvent && (
        <Text style={cardStyles.cardObjectText}>8 AM</Text>
      )}
    </View>
    <View style={cardStyles.cardObjectRight}>
      <Pressable onPress={zoom}>
        <Text style={cardStyles.cardObjectText}>{title}</Text>
      </Pressable>
    </View>
  </View>
);

const itemSeparator = () => {
  return (
    <View style={{ height: size.margin, backgroundColor: light.secondary }} />
  );
};
/* green bubble for menus */

const Card = (props) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} type={props.title} zoom={handleZoomVisible} />
  );
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isZoomVisible, setZoomVisible] = React.useState(false);
  const [scrollDownIndex, setScrollDownIndex] = React.useState(0);
  const [scrollUpIndex, setScrollUpIndex] = React.useState(0);
  const [displayScrollUp, setDisplayScrollUp] = React.useState(false);
  const [DATA, setDATA] = React.useState([]);

  const flatList = useRef();

  useEffect(() => {
    const userId = getAuth().currentUser.uid;
    const db = getDatabase();
    const reference = ref(db, "users/" + userId + "/events");
    let data = [];

    return onValue(reference, (snapshot) => {
      const value = snapshot.val();
      data = [];
      for (const n in value) {
        if (
          value[n]["date"] === format(new Date(), "yyy-MM-dd") &&
          props.title === Titles.TodayEvent
        ) {
          data.push({ id: n, title: value[n]["notes"] });
        } else if (props.title === Titles.HighPriority) {
        } else if (props.title === Titles.Upcoming) {
        }
      }
      setDATA(data);
    });
  }, []);
  const handleZoomVisible = () => {
    setZoomVisible(() => !isZoomVisible);
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
      console.log(viewableItems.viewableItems[0].index);
      if (viewableItems.viewableItems[0].index === 0) {
        setDisplayScrollUp(false);
      } else {
        setDisplayScrollUp(true);
      }
    }
  });
  return (
    <SafeAreaView
      style={[
        cardStyles.card,
        { flex: props.title === Titles.BodyCheck ? -1 : 1 },
      ]}>
      <View style={cardStyles.cardHeader}>
        <View style={cardStyles.cardHeaderLeft} />

        <View style={cardStyles.centeredView}>
          <Text style={cardStyles.cardHeaderText}>{props.title}</Text>
        </View>
        <View style={cardStyles.cardHeaderRight}>
          {(props.title === Titles.TodayEvent ||
            props.title === Titles.HighPriority) && (
            <>
              <Pressable onPress={handleAddObject}>
                <Image
                  style={{
                    width: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                    height: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                  }}
                  source={Plus}
                />
              </Pressable>

              <Modal visible={isModalVisible} transparent>
                {props.title === Titles.TodayEvent && (
                  <EventPopup isModalVisible={handleAddObject} />
                )}
                {props.title === Titles.HighPriority && (
                  <TaskPopup isModalVisible={handleAddObject} />
                )}
              </Modal>
            </>
          )}
        </View>
      </View>
      {!(props.title === Titles.BodyCheck) && (
        <View
          style={{
            alignSelf: "stretch",
            flex: 1,
          }}>
          <FlatList
            data={DATA}
            ref={flatList}
            initialScrollIndex={0}
            onViewableItemsChanged={onViewRef.current}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={itemSeparator}
          />
        </View>
      )}
      {!(props.title === Titles.BodyCheck) && (
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
      )}
      <View style={{ flexDirection: "row", width: "100%" }}>
        {props.title === Titles.BodyCheck && (
          <View
            style={{
              flex: 1,
              marginStart: size.margin,
              paddingBottom: size.margin,
            }}>
            <FlatList
              data={DATA}
              ref={flatList}
              horizontal
              initialScrollIndex={0}
              onViewableItemsChanged={onViewRef.current}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={itemSeparator}
            />
          </View>
        )}

        <View>
          {props.title === Titles.BodyCheck && (
            <View style={{ margin: size.innerPadding, flex: 1 }}>
              <Pressable onPress={scrollsDown}>
                <Favicon.ScrollRight
                  iconColor="light"
                  style={cardStyles.scrollButton}
                />
              </Pressable>
            </View>
          )}
        </View>
      </View>
      {isZoomVisible === true && <Zoom zoom={handleZoomVisible} />}
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
    ...Platform.select({
      web: {
        ...text.title,
      },
      default: {
        ...text.mobileHeader,
      },
    }),
    color: light.textPrimary,
    padding: size.innerPadding,
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
