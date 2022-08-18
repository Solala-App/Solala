import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { getAuth } from "firebase/auth";

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Platform,
  Image,
} from "react-native";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  child,
  update,
  remove,
} from "firebase/database";

import { RFValue } from "react-native-responsive-fontsize";

import * as IconsDark from "../../assets/favicons_dark";
import * as Favicon from "../../assets/favicons_js";
import * as IconsLight from "../../assets/favicons_light";
import { theme } from "../constants";
import Calendar from "./Calendar";
import { Titles } from "./Card";
import { format } from "date-fns";

const { light, size, text, colorPalette, shadowProp } = theme;

// cmds
// npm install @react-native-community/slider --save
// yarn add react-native-element-dropdown
function storeTask(task) {
  const user = getAuth().currentUser;
  //console.log(user.uid);

  if (user != null) {
    const database = getDatabase();

    const newTaskKey = push(child(ref(database), "users")).key;
    const taskData = {
      priority: task.priority,
      complexity: task.complexity,
      category: task.category,
      notes: task.notes,
      repeat: task.repeat,
      date: task.date,
      id: newTaskKey,
    };
    const updates = {};
    updates["/users/" + user.uid + "/tasks/" + newTaskKey] = taskData;
    return update(ref(database), updates);
    //remove(child(ref(database), "users/" + user.uid));
  }
}

function storeEvent(event) {
  const user = getAuth().currentUser;
  //console.log(user.uid);

  if (user != null) {
    const database = getDatabase();

    const newTaskKey = push(child(ref(database), "users")).key;
    const taskData = {
      notes: event.notes,
      repeat: event.repeat,
      date: event.date,
      id: newTaskKey,
    };
    const updates = {};
    updates["/users/" + user.uid + "/events/" + newTaskKey] = taskData;
    return update(ref(database), updates);
    //remove(child(ref(database), "users/" + user.uid + "/-N9_JnrCNMOet6P1HzO-"));
  }
}
const CalendarPopup = (props) => {
  const [priorityValue, setPriorityValue] = React.useState(15);
  const [complexityValue, setComplexityValue] = React.useState(15);
  const [repeatIndex, setRepeatIndex] = React.useState(0);
  const [tempNotes, setTempNotes] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    format(new Date(), "yyy-MM-dd")
  );

  const repeatOptions = ["None", "Daily", "Weekly", "Monthly"];
  const [category, setCategory] = React.useState("key0");

  const scrollLeft = () => {
    if (repeatIndex === 0) {
      setRepeatIndex(repeatOptions.length - 1);
    } else {
      setRepeatIndex(() => repeatIndex - 1);
    }
  };

  const scrollRight = () => {
    if (repeatIndex === repeatOptions.length - 1) {
      setRepeatIndex(0);
    } else {
      setRepeatIndex(() => repeatIndex + 1);
    }
  };

  const changeDate = (date) => {
    setSelectedDate(date);
  };
  return (
    <ScrollView>
      <View style={cardStyles.centeredView}>
        <View style={cardStyles.modalView}>
          <View style={cardStyles.popupHeader}>
            <View style={cardStyles.cardHeaderLeft} />
            <View style={cardStyles.cardHeaderCenter}>
              <Text style={cardStyles.popupHeaderText}>
                Create {props.type}
              </Text>
            </View>
            <View style={cardStyles.cardHeaderRight}>
              <Pressable onPress={props.isModalVisible}>
                <Image
                  source={IconsLight.Cancel}
                  style={{ width: RFValue(12), height: RFValue(12) }}
                />
              </Pressable>
            </View>
          </View>

          <View style={cardStyles.calendar}>
            <Calendar changeDate={changeDate} />
          </View>
          {props.displayRepeat === true && (
            <View style={cardStyles.popupLabel}>
              <Text style={cardStyles.popupLabelText}> Repeat </Text>
              <View style={cardStyles.centeredView}>
                <Pressable onPress={scrollLeft}>
                  <Favicon.ScrollLeft style={{ width: 10 }} />
                  {(Platform.OS === "ios" || Platform.OS === "android") && (
                    <Image
                      source={IconsDark.ScrollLeft}
                      style={{ width: 15, height: 15 }}
                    />
                  )}
                </Pressable>

                <View style={cardStyles.repeatText}>
                  <Text style={cardStyles.popupLabelText}>
                    {" "}
                    {repeatOptions[repeatIndex]}{" "}
                  </Text>
                </View>
                <Pressable onPress={scrollRight}>
                  <Favicon.ScrollRight style={{ width: 10 }} />
                  {(Platform.OS === "ios" || Platform.OS === "android") && (
                    <Image
                      source={IconsDark.ScrollRight}
                      style={{ width: 15, height: 15 }}
                    />
                  )}
                </Pressable>
              </View>
            </View>
          )}
          {props.displayPriority === true && (
            <View style={cardStyles.popupLabel}>
              <Text style={cardStyles.popupLabelText}> Priority: </Text>
              <View style={cardStyles.centeredView}>
                <View style={cardStyles.slider}>
                  <Slider
                    maximumValue={100}
                    minimumValue={0}
                    minimumTrackTintColor={light.textSecondary}
                    maximumTrackTintColor={light.textSecondary}
                    thumbTintColor="orange"
                    step={1}
                    value={priorityValue}
                    onValueChange={(priorityValue) =>
                      setPriorityValue(priorityValue)
                    }
                  />
                </View>
              </View>
            </View>
          )}
          {props.displayComplexity === true && (
            <View style={cardStyles.popupLabel}>
              <Text style={cardStyles.popupLabelText}> Complexity: </Text>
              <View style={cardStyles.centeredView}>
                <View style={cardStyles.slider}>
                  <Slider
                    maximumValue={100}
                    minimumValue={0}
                    minimumTrackTintColor={light.textSecondary}
                    maximumTrackTintColor={light.textSecondary}
                    thumbTintColor="orange"
                    step={1}
                    value={complexityValue}
                    onValueChange={(complexityValue) =>
                      setComplexityValue(complexityValue)
                    }
                  />
                </View>
              </View>
            </View>
          )}
          {props.displayCategory === true && (
            <View style={cardStyles.popupLabel}>
              <Text style={cardStyles.popupLabelText}> Category: </Text>

              <View style={cardStyles.centeredView}>
                <Picker
                  selectedValue={category}
                  style={{
                    height: "75%",
                    width: "75%",
                    textAlign: "center",
                  }}
                  onValueChange={(v) => setCategory(v)}
                  accessibilityLabel="Styled Picker Accessibility Label">
                  <Picker.Item label="Category One" value="key0" />
                  <Picker.Item label="Category Two" value="key1" />
                  <Picker.Item label="Category Three" value="key2" />
                </Picker>
              </View>
            </View>
          )}
          {props.displayNotes === true && (
            <View style={cardStyles.popupLabel}>
              <Text style={cardStyles.popupLabelText}> Notes: </Text>
              <View style={cardStyles.centeredView}>
                <TextInput
                  style={{ color: light.accent }}
                  placeholder="No Notes"
                  onChangeText={(newText) => setTempNotes(newText)}
                  defaultValue={tempNotes}
                />
              </View>
              <View>
                <Pressable onPress={() => setNotes(tempNotes)}>
                  <Favicon.Plus style={{ width: RFValue(12) }} />
                  {(Platform.OS === "ios" || Platform.OS === "android") && (
                    <Image
                      source={IconsDark.Plus}
                      style={{ width: RFValue(12), height: RFValue(12) }}
                    />
                  )}
                </Pressable>
              </View>
            </View>
          )}
          <View style={cardStyles.popupCheck}>
            <Pressable
              onPress={() => {
                props.isModalVisible();
                const task = {
                  priority: priorityValue,
                  complexity: complexityValue,
                  category: category,
                  notes: notes,
                  repeat: repeatOptions[repeatIndex],
                  date: selectedDate,
                };
                if (props.type === "Task") {
                  storeTask(task);
                } else {
                  storeEvent(task);
                }
              }}>
              <Image
                source={IconsDark.Check}
                style={{ width: RFValue(25), height: RFValue(25) }}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export const cardStyles = StyleSheet.create({
  cardHeaderRight: {
    flex: 1,
    paddingTop: size.innerPadding,
    paddingBottom: size.innerPadding,
    paddingRight: size.innerPadding,
    paddingLeft: size.innerPadding,
    alignItems: "flex-end",
  },
  cardHeaderCenter: {
    flex: 10,
  },
  cardHeaderLeft: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  modalView: {
    marginTop: RFValue(30),
    backgroundColor: light.secondary,
    borderRadius: size.borderRadius,
    alignItems: "center",
    width: RFValue(250),
    elevation: RFValue(5),
    ...shadowProp,
  },
  popupHeader: {
    backgroundColor: light.accent,
    borderRadius: size.borderRadius,
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "stretch",
  },
  calendar: {
    marginTop: size.margin,
    width: "100%",
  },
  popupHeaderText: {
    color: colorPalette.white,
    ...text.title,
  },
  popupLabel: {
    marginHorizontal: size.margin,
    marginTop: size.margin,
    padding: size.innerPadding,
    backgroundColor: light.primary,
    borderRadius: size.borderRadius,
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "stretch",
  },
  popupLabelText: {
    textAlign: "center",
    justifyContent: "center",
    ...text.body,
    color: light.textSecondary,
  },
  popupCheck: {
    marginTop: size.margin,
    marginBottom: size.margin,
  },
  dropdown: {
    backgroundColor: colorPalette.white,
    borderBottomColor: colorPalette.black,
    borderWidth: 1,
  },
  repeatText: {
    width: "50%",
  },
  slider: {
    width: "100%",
  },
});

export default CalendarPopup;
