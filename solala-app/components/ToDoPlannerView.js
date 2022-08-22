import { format } from "date-fns";
import React, { useRef } from "react";
import { View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";
import { theme } from "../constants";
import ToDoCard from "./ToDoCard";
import Zoom from "./Zoom";
const { size, light, text } = theme;

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
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Fourth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Fifth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e20d74",
    title: "Sixth Item",
  },
  {
    id: "1",
    title: "qwertyuio",
  },
  {
    id: "13",
    title: "qwertyuio",
  },
  {
    id: "122",
    title: "qwertyuio",
  },
];

const Item = ({ title, zoom }) => (
  <View style={styles.cardItem}>
    <Pressable onPress={zoom}>
      <Text style={styles.cardObjectText}>{title}</Text>
    </Pressable>
  </View>
);
const itemSeparator = () => {
  return (
    <View style={{ height: RFValue(1), backgroundColor: light.secondary }} />
  );
};

const ToDoPlannerView = (props) => {
  const [isZoomVisible, setZoomVisible] = React.useState(false);
  const [scrollDownIndex, setScrollDownIndex] = React.useState(0);
  const [scrollUpIndex, setScrollUpIndex] = React.useState(0);
  const [displayScrollUp, setDisplayScrollUp] = React.useState(false);
  const flatList = useRef();
  const renderItem = ({ item }) => (
    <Item title={item.title} type={props.title} zoom={handleZoomVisible} />
  );
  const handleZoomVisible = () => {
    setZoomVisible(() => !isZoomVisible);
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
          .index + 1
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
  const currentTime = new Date();
  const dayOfWeek = format(currentTime, "EEEE");
  let card2 = "Loading";
  let card3 = "Loading";

  switch (dayOfWeek) {
    case "Monday":
      card2 = "Tuesday";
      card3 = "Wednesday";
      break;
    case "Tuesday":
      card2 = "Wednesday";
      card3 = "Thursday";
      break;
    case "Wednesday":
      card2 = "Thursday";
      card3 = "Friday";
      break;
    case "Thursday":
      card2 = "Friday";
      card3 = "Saturday";
      break;
    case "Friday":
      card2 = "Saturday";
      card3 = "Sunday";
      break;
    case "Saturday":
      card2 = "Sunday";
      card3 = "Monday";
      break;
    case "Sunday":
      card2 = "Monday";
      card3 = "Tuesday";
      break;

    default:
      break;
  }
  return (
    <View style={styles.mainView}>
      <View style={{ flex: 1, alignItems: "stretch", width: "100%" }}>
        {isZoomVisible === true && <Zoom />}
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
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Pressable onPress={scrollsDown}>
            <Favicon.ScrollDown iconColor="dark" style={styles.scrollButton} />
          </Pressable>
          {displayScrollUp === true && (
            <Pressable onPress={scrollUp}>
              <Favicon.ScrollUp iconColor="dark" style={styles.scrollButton} />
            </Pressable>
          )}
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <ToDoCard title="Today's Priorities" day={0} />
        </View>
        <View style={styles.card}>
          <ToDoCard title={card2} day={1} />
        </View>
        <View style={styles.card}>
          <ToDoCard title={card3} day={2} />
        </View>
        <View style={styles.card}>
          <ToDoCard title="Upcoming" day={3} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  card: {
    flex: 1,
    margin: size.margin,
  },
  cardItem: {
    flex: 1,
    margin: size.margin,
    alignItems: "stretch",
    width: "100%",
  },
  scrollButton: {
    width: RFValue(12),
    height: RFValue(12),
    marginEnd: size.margin,
  },
  cardObjectText: {
    ...text.body,
    color: light.textSecondary,
    flexDirection: "row",
  },
});
export default ToDoPlannerView;
