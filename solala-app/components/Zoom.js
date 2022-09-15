import { getAuth } from "firebase/auth";
import { child, getDatabase, ref, remove } from "firebase/database";

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Platform,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as IconsLight from "../../assets/favicons_light";
import { theme } from "../constants";
import { cardStyles } from "./CalendarPopup";
import EventPopup from "./EventPopup";
import TaskPopup from "./TaskPopup";
import * as Utils from "../utils/CalendarUtil";

const { light, size, text, colorPalette, shadowProp } = theme;

const Zoom = ({ zoom, cardData, type }) => {
  function deleteItem() {
    Utils.deleteCalenderEvent(cardData.id);
    const user = getAuth().currentUser;
    if (user != null) {
      const database = getDatabase();
      if (type === "Event") {
        remove(
          child(ref(database), "users/" + user.uid + "/events/" + cardData.id)
        );
      } else {
        remove(
          child(ref(database), "users/" + user.uid + "/tasks/" + cardData.id)
        );
      }
    }
    Utils.deleteCalenderEvent(cardData.id);
  }
  const [showDeleteWarning, setShowDeleteWarning] = React.useState(false);
  const [showEditScreen, setShowEditScreen] = React.useState(false);

  function handleEdit() {
    setShowEditScreen(() => !showEditScreen);
  }

  function editRoutine() {
    zoom();
    deleteItem();
  }
  return (
    <ScrollView>
      <View style={[cardStyles.centeredView]}>
        <View
          style={[
            styles.zoomWindow,
            { width: Platform.OS === "web" ? RFValue(250) : RFValue(300) },
          ]}>
          <View style={cardStyles.popupHeader}>
            <View style={cardStyles.cardHeaderLeft} />
            <View style={cardStyles.centeredView}>
              <Text style={cardStyles.popupHeaderText}>{cardData.title}</Text>
            </View>
            <Pressable style={cardStyles.cardHeaderRight} onPress={zoom}>
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
            <Text style={cardStyles.popupLabelText}>
              Date/Time: {new Date(cardData.dateTime).toDateString()}
              {type === "Event"
                ? " at " +
                  new Date(cardData.dateTime).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : ""}
            </Text>
          </View>
          <View style={cardStyles.popupLabel}>
            <Text style={cardStyles.popupLabelText}>
              Repeat: {cardData.repeat}
            </Text>
          </View>
          {cardData.complexity !== undefined && (
            <View style={cardStyles.popupLabel}>
              <Text style={cardStyles.popupLabelText}>
                Complexity: {cardData.complexity}
              </Text>
            </View>
          )}

          {cardData.complexity !== undefined && (
            <View style={cardStyles.popupLabel}>
              <Text style={cardStyles.popupLabelText}>
                Priority: {cardData.priority}
              </Text>
            </View>
          )}

          {cardData.complexity !== undefined && (
            <View style={cardStyles.popupLabel}>
              <Text style={cardStyles.popupLabelText}>
                Category: {cardData.category}
              </Text>
            </View>
          )}

          <View style={cardStyles.popupLabel}>
            <Text style={cardStyles.popupLabelText}>
              Notes: {cardData.notes}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Pressable
              onPress={handleEdit}
              style={[
                cardStyles.popupLabel,
                styles.button,
                { backgroundColor: light.accent },
              ]}>
              <Text
                style={[
                  cardStyles.popupLabelText,
                  { flex: 1, color: "white" },
                ]}>
                Edit
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setShowDeleteWarning(true)}
              style={[
                cardStyles.popupLabel,
                styles.button,
                { backgroundColor: "red" },
              ]}>
              <Text
                style={[
                  cardStyles.popupLabelText,
                  {
                    flex: 1,
                    color: "white",
                  },
                ]}>
                Delete {type}
              </Text>
            </Pressable>
          </View>
        </View>
        <Modal visible={showDeleteWarning} transparent>
          <ScrollView>
            <View style={cardStyles.centeredView}>
              <View style={styles.zoomWindow}>
                <Text
                  style={[cardStyles.popupLabelText, { margin: size.margin }]}>
                  Delete {type}?
                </Text>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Pressable
                    onPress={() => setShowDeleteWarning(false)}
                    style={[
                      cardStyles.popupLabel,
                      styles.button,
                      { backgroundColor: light.accent },
                    ]}>
                    <Text
                      style={[
                        cardStyles.popupLabelText,
                        { flex: 1, color: "white" },
                      ]}>
                      Cancel
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      setShowDeleteWarning(false);
                      zoom();
                      deleteItem();
                    }}
                    style={[
                      cardStyles.popupLabel,
                      styles.button,
                      { backgroundColor: "red" },
                    ]}>
                    <Text
                      style={[
                        cardStyles.popupLabelText,
                        {
                          flex: 1,
                          color: "white",
                        },
                      ]}>
                      Delete
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ScrollView>
        </Modal>
        <Modal visible={showEditScreen} transparent>
          {type === "Event" && (
            <EventPopup
              isModalVisible={handleEdit}
              edit={() => editRoutine()}
              presetData={cardData}
            />
          )}
          {type === "Task" && (
            <TaskPopup
              isModalVisible={handleEdit}
              edit={() => editRoutine()}
              presetData={cardData}
            />
          )}
        </Modal>
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
});

export default Zoom;
