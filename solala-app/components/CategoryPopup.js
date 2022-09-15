import { getAuth } from "firebase/auth";
import {
  child,
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  update,
} from "firebase/database";

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Platform,
  FlatList,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as IconsLight from "../../assets/favicons_light";
import * as IconsDark from "../../assets/favicons_dark";

import { theme } from "../constants";
import { cardStyles } from "./CalendarPopup";
import EventPopup from "./EventPopup";
import TaskPopup from "./TaskPopup";
import * as Utils from "../utils/CalendarUtil";

const { light, size, text, colorPalette, shadowProp } = theme;
function Item({ data }) {
  function deleteItem() {
    const user = getAuth().currentUser;
    if (user != null) {
      const database = getDatabase();
      remove(
        child(ref(database), "users/" + user.uid + "/categories/" + data.id)
      );
    }
  }
  return (
    <View style={styles.cardItem}>
      <View style={styles.cardObjectLeft} />
      <View style={styles.cardObjectRight}>
        <Text style={styles.cardObjectText}>{data.label}</Text>
      </View>
      <Pressable onPress={deleteItem}>
        <Image
          source={IconsDark.Minus}
          style={{
            width: Platform.OS === "web" ? RFValue(11) : RFValue(25),
            height: Platform.OS === "web" ? RFValue(11) : RFValue(25),
          }}
        />
      </Pressable>
    </View>
  );
}

const itemSeparator = () => {
  return (
    <View style={{ height: size.margin, backgroundColor: light.accent }} />
  );
};
const CategoryPopup = ({ closePopup, categories }) => {
  const renderItem = ({ item }) => <Item data={item} />;
  const [newCategoryText, setNewCategoryText] = React.useState("");

  function addCategory() {
    const user = getAuth().currentUser;

    if (user != null && newCategoryText != "") {
      const database = getDatabase();

      const newTaskKey = push(child(ref(database), "users")).key;

      const updates = {};
      updates["/users/" + user.uid + "/categories/" + newTaskKey] = {
        label: newCategoryText,
        value: newCategoryText,
        id: newTaskKey,
      };
      setNewCategoryText("");
      return update(ref(database), updates);
    }
  }

  return (
    <ScrollView>
      <View style={[cardStyles.centeredView]}>
        <View
          style={[
            styles.zoomWindow,
            { width: Platform.OS === "web" ? RFValue(150) : RFValue(200) },
          ]}>
          <View style={cardStyles.popupHeader}>
            <View style={cardStyles.cardHeaderLeft} />
            <View style={cardStyles.centeredView}>
              <Text style={cardStyles.popupHeaderText}> Categories </Text>
            </View>
            <Pressable style={cardStyles.cardHeaderRight} onPress={closePopup}>
              <Image
                source={IconsLight.Cancel}
                style={{
                  width: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                  height: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                }}
              />
            </Pressable>
          </View>
          <View style={cardStyles.popupLabel}>
            <View style={cardStyles.centeredView}>
              <TextInput
                style={[cardStyles.textBox, { flex: 1 }]}
                placeholder="Add Category"
                onChangeText={(newText) => setNewCategoryText(newText)}
                maxLength={20}
              />
            </View>
            <View>
              <Pressable onPress={addCategory}>
                <Image
                  source={IconsDark.Plus}
                  style={{
                    width: Platform.OS === "web" ? RFValue(12) : RFValue(25),
                    height: Platform.OS === "web" ? RFValue(12) : RFValue(25),
                  }}
                />
              </Pressable>
            </View>
          </View>
          <View
            style={[
              cardStyles.popupLabel,
              {
                backgroundColor: light.accent,
                flex: -1,
                height: RFValue(100),
                marginBottom: size.margin,
              },
            ]}>
            <FlatList
              data={categories}
              showsVerticalScrollIndicator
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={itemSeparator}
              listKey={(item) => "cat" + item.id}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  zoomWindow: {
    marginTop: RFValue(30),
    backgroundColor: light.secondary,
    borderRadius: size.borderRadius,
    elevation: RFValue(5),
    ...shadowProp,
    top: Platform.OS === "web" ? 0 : Dimensions.get("window").height / 4,
  },
  button: {
    flex: 1,
    marginBottom: size.margin,
  },
  cardItem: {
    padding: size.innerPadding,

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
});

export default CategoryPopup;
