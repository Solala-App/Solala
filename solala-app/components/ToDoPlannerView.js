import { format } from "date-fns";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Pressable,
  Text,
  Modal,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";
import { theme } from "../constants";
import { cardStyles } from "./CalendarPopup";
import ToDoCard from "./ToDoCard";
import Zoom from "./Zoom";
const { size, light, text } = theme;

function Item({ cardData }) {
  const [isZoomVisible, setZoomVisible] = React.useState(false);
  const handleZoomVisible = () => {
    setZoomVisible(() => !isZoomVisible);
  };
  return (
    <View style={styles.cardItem}>
      <Pressable onPress={handleZoomVisible}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[styles.cardObjectText, { textAlign: "flex-start" }]}>
            {cardData.title}
          </Text>
          <Text style={styles.cardObjectText}>{cardData.priority}</Text>
          <Text style={styles.cardObjectText}>{cardData.complexity}</Text>
          <Text style={styles.cardObjectText}>{cardData.category}</Text>
          <Text style={styles.cardObjectText}>
            {cardData.notes === "" ? "none" : cardData.notes}
          </Text>
        </View>
      </Pressable>
      <Modal visible={isZoomVisible} transparent>
        <Zoom zoom={handleZoomVisible} cardData={cardData} type={"Task"} />
      </Modal>
    </View>
  );
}
const itemSeparator = () => {
  return (
    <View style={{ height: RFValue(1), backgroundColor: light.secondary }} />
  );
};

const ToDoPlannerView = (props) => {
  const [scrollDownIndex, setScrollDownIndex] = React.useState(0);
  const [scrollUpIndex, setScrollUpIndex] = React.useState(0);
  const [DATA, setDATA] = React.useState([]);
  const [displayScrollUp, setDisplayScrollUp] = React.useState(false);
  const flatList = useRef();
  const renderItem = ({ item }) => <Item cardData={item.cardData} />;

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
        <View
          style={{ flex: 0.15, flexDirection: "row", marginLeft: size.margin }}>
          <Text style={styles.headerText}>Title</Text>
          <Text style={styles.headerText}>Priority</Text>
          <Text style={styles.headerText}>Complexity</Text>
          <Text style={styles.headerText}>Category</Text>
          <Text style={styles.headerText}>Notes</Text>
        </View>
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
    flex: 1,
    textAlign: "center",
  },
  headerText: {
    flex: 1,
    ...text.title,
    textAlign: "center",
    color: light.secondary,
  },
});
export default ToDoPlannerView;
