import { format, set } from "date-fns";
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
  ScrollView,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";
import { theme } from "../constants";
import { cardStyles } from "./CalendarPopup";
import ToDoCard from "./ToDoCard";
import Zoom from "./Zoom";
import * as Utils from "../utils/CardSorting";
const { size, light, text } = theme;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ title: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};
const ToDoCategoryView = (props) => {
  const [CATEGORIES, setCategories] = React.useState([]);
  const NUM_COL = 4;

  function Item({ data }) {
    return (
      <View style={styles.card}>
        <ToDoCard title={"category"} category={data.value} day={new Date()} />
      </View>
    );
  }

  const renderItem = ({ item }) => {
    if (item.empty === true) {
      return <View style={[styles.card, styles.itemInvisible]} />;
    }
    return <Item data={item} />;
  };
  useEffect(() => {
    const userId = getAuth().currentUser.uid;
    const db = getDatabase();
    const reference = ref(db, "users/" + userId + "/categories");
    let data = [];

    return onValue(reference, (snapshot) => {
      data = [];
      const value = snapshot.val();
      for (const n in value) {
        data.push(value[n]);
      }
      data.push({ label: "Other", value: "None" });
      setCategories(data);
    });
  }, []);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{ width: "100%" }}>
      <View style={styles.mainView}>
        <FlatList
          data={formatData(CATEGORIES, NUM_COL)}
          style={styles.container}
          renderItem={renderItem}
          numColumns={NUM_COL}
          keyExtractor={(item) => item.id}
          listKey={(item) => item.id}
        />
      </View>
    </ScrollView>
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
  container: {
    flex: 1,
    width: "100%",
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  card: {
    flex: 1,
    margin: size.margin,
    height: RFValue(100),
    width: "100%",
    alignItems: "stretch",
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
  itemInvisible: {
    backgroundColor: "transparent",
  },
});
export default ToDoCategoryView;
