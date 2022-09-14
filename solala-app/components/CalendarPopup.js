import DateTimePicker from "@react-native-community/datetimepicker";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { format } from "date-fns";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, child, update } from "firebase/database";
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
  Alert,
  Button,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as IconsDark from "../../assets/favicons_dark";
import * as Favicon from "../../assets/favicons_js";
import * as IconsLight from "../../assets/favicons_light";
import { theme } from "../constants";
import Calendar from "./Calendar";
import TimePickerWeb from "./TimePickerWeb";
import * as Utils from "../utils/CalendarUtil";
const { light, size, text, colorPalette, shadowProp } = theme;

const CATEGORIES = [
  { label: "Cateogry One", value: "key0" },
  { label: "Cateogry Two", value: "key1" },
  { label: "Cateogry Three", value: "key2" },
];
function storeTask(task) {
  const user = getAuth().currentUser;

  if (user != null) {
    const database = getDatabase();

    const newTaskKey = push(child(ref(database), "users")).key;
    const taskData = {
      priority: task.priority,
      complexity: task.complexity,
      category: task.category,
      notes: task.notes,
      repeat: task.repeat,
      dateTime: task.dateTime,
      id: newTaskKey,
      title: task.title,
    };
    const updates = {};
    updates["/users/" + user.uid + "/tasks/" + newTaskKey] = taskData;
    return update(ref(database), updates);
    //remove(child(ref(database), "users/" + user.uid));
  }
}

const CalendarPopup = (props) => {
  const repeatOptions = ["None", "Daily", "Weekly", "Monthly"];

  const [priorityValue, setPriorityValue] = React.useState(
    props.presetData !== undefined ? props.presetData.priority : 15
  );
  const [complexityValue, setComplexityValue] = React.useState(
    props.presetData !== undefined ? props.presetData.complexity : 15
  );
  const [repeatIndex, setRepeatIndex] = React.useState(
    props.presetData !== undefined
      ? repeatOptions.indexOf(props.presetData.repeat)
      : 0
  );
  const [tempNotes, setTempNotes] = React.useState(
    props.presetData !== undefined ? props.presetData.notes : ""
  );
  const [notes, setNotes] = React.useState(
    props.presetData !== undefined ? props.presetData.notes : ""
  );
  const [title, setTitle] = React.useState(
    props.presetData !== undefined ? props.presetData.title : ""
  );
  const [selectedDate, setSelectedDate] = React.useState(
    props.presetData !== undefined
      ? format(new Date(props.presetData.dateTime), "yyy-MM-dd")
      : format(new Date(props.currentDay), "yyy-MM-dd")
  );
  const [selectedTime, setSelectedTime] = React.useState(
    props.presetData !== undefined && props.type === "Event"
      ? new Date(props.presetData.dateTime)
      : new Date()
  );
  const [category, setCategory] = React.useState(
    props.presetData !== undefined ? props.presetData.category : "key0"
  );

  const [displayError, setDisplayError] = React.useState(false);

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

  const submit = (e, task) => {
    console.log(task.dateTime);
    e.preventDefault(); //"2022-09-11T17:00:00-20:30"
    var event = {
      summary: task.title,
      description: task.notes,
      start: {
        dateTime: task.dateTime,
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: new Date(
          new Date(task.dateTime).getTime() + 30 * 60000
        ).toISOString(),
        timeZone: "America/Los_Angeles",
      },
      recurrence:
        task.repeat === "None"
          ? []
          : ["RRULE:FREQ=" + task.repeat.toUpperCase()],
      status: "confirmed",
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    };

    Utils.publishTheCalenderEvent(event);
  };
  return (
    <ScrollView>
      <View style={cardStyles.centeredView}>
        <View style={cardStyles.modalView}>
          <View style={cardStyles.popupHeader}>
            <View style={cardStyles.cardHeaderLeft} />
            <View style={cardStyles.centeredView}>
              <Text style={cardStyles.popupHeaderText}>
                Create {props.type}
              </Text>
            </View>
            <View style={cardStyles.cardHeaderRight}>
              <Pressable onPress={props.isModalVisible}>
                <Image
                  source={IconsLight.Cancel}
                  style={{
                    width: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                    height: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                  }}
                />
              </Pressable>
            </View>
          </View>
          <View style={cardStyles.calendar}>
            <Calendar changeDate={changeDate} currentDate={selectedDate} />
          </View>

          {displayError && (
            <Text style={{ color: "red" }}>{props.type} title required</Text>
          )}
          <View style={cardStyles.popupLabel}>
            <Text style={cardStyles.popupLabelText}> {props.type} Title: </Text>
            <View style={cardStyles.centeredView}>
              <TextInput
                style={{
                  color: light.accent,
                  flex: 1,
                  textAlign: "center",
                  ...text.body,
                }}
                placeholder="(required)"
                onChangeText={(newText) => {
                  setTitle(newText);
                  setDisplayError(false);
                }}
                defaultValue={title}
              />
            </View>
          </View>
          {props.type === "Event" && (
            <View style={cardStyles.popupLabel}>
              {Platform.OS === "web" && (
                <TimePickerWeb
                  changeTime={setSelectedTime}
                  currentTime={selectedTime}
                />
              )}
              <View style={cardStyles.centeredView}>
                <DateTimePicker
                  mode="time"
                  display="spinner"
                  textColor="black"
                  value={selectedTime}
                  style={{ flex: 1, height: 100 }}
                  onChange={(event, time) => {
                    setSelectedTime(time);
                  }}
                />
              </View>
            </View>
          )}
          {props.displayRepeat === true && (
            <View style={cardStyles.popupLabel}>
              <Text style={cardStyles.popupLabelText}> Repeat: </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}>
                <Pressable
                  onPress={scrollLeft}
                  style={{
                    flex: 0.5,
                    justifyContent: "center",
                  }}>
                  <Favicon.ScrollLeft style={{ height: 20 }} />
                </Pressable>

                <Text style={cardStyles.popupLabelText}>
                  {repeatOptions[repeatIndex]}
                </Text>
                <Pressable
                  onPress={scrollRight}
                  style={{
                    flex: 0.5,
                    justifyContent: "center",
                  }}>
                  <Favicon.ScrollRight style={{ height: 20 }} />
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
                  {CATEGORIES.map((item) => {
                    return (
                      <Picker.Item label={item.label} value={item.value} />
                    );
                  })}
                </Picker>
              </View>
            </View>
          )}
          {props.displayNotes === true && (
            <View style={cardStyles.popupLabel}>
              <Text style={cardStyles.popupLabelText}> Notes: </Text>
              <View style={cardStyles.centeredView}>
                <TextInput
                  style={[cardStyles.textBox, { flex: 1 }]}
                  placeholder="No Notes"
                  onChangeText={(newText) => setTempNotes(newText)}
                  defaultValue={tempNotes}
                />
              </View>
              <View>
                <Pressable onPress={() => setNotes(tempNotes)}>
                  <Image
                    source={IconsDark.Plus}
                    style={{
                      width: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                      height: Platform.OS === "web" ? RFValue(11) : RFValue(25),
                    }}
                  />
                </Pressable>
              </View>
            </View>
          )}
          <View style={cardStyles.popupCheck}>
            <Pressable
              onPress={(e) => {
                if (title === "") {
                  setDisplayError(true);
                } else {
                  const dateTime = new Date(selectedDate + "T12:00:00");
                  dateTime.setHours(selectedTime.getHours());
                  dateTime.setMinutes(selectedTime.getMinutes());

                  // dateTime.setMinutes(selectedTime.getMinutes());

                  const task = {
                    priority: priorityValue,
                    complexity: complexityValue,
                    category,
                    notes,
                    repeat: repeatOptions[repeatIndex],
                    title,
                    dateTime: dateTime.toISOString(),
                  };
                  if (props.type === "Task") {
                    storeTask(task);
                  } else {
                    submit(e, task);
                  }
                  if (props.edit != null) {
                    props.edit();
                  }
                  props.isModalVisible();
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
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  modalView: {
    marginTop: RFValue(30),
    backgroundColor: light.secondary,
    borderRadius: size.borderRadius,
    alignItems: "center",
    width: Platform.OS === "web" ? RFValue(250) : RFValue(300),
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
    ...Platform.select({
      web: {
        ...text.title,
      },
      default: {
        ...text.mobileHeader,
      },
    }),
  },
  popupLabel: {
    flex: 1,
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
    color: light.textSecondary,
    ...Platform.select({
      web: {
        ...text.body,
      },
      default: {
        ...text.mobileBody,
      },
    }),
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
  textBox: {
    color: light.accent,
    textAlign: "center",
    ...text.body,
  },
});

export default CalendarPopup;
