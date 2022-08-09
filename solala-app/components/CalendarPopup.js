import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
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
import { RFValue } from "react-native-responsive-fontsize";

import * as IconsDark from "../../assets/favicons_dark";
import * as Favicon from "../../assets/favicons_js";
import * as IconsLight from "../../assets/favicons_light";
import { theme } from "../constants";
import Calendar from "./Calendar";
const { light, size, text } = theme;

// npm install @react-native-community/slider --save
// yarn add react-native-element-dropdown

const CalendarPopup = (props) => {
  const [priorityValue, setPriorityValue] = React.useState(15);
  const [complexityValue, setComplexityValue] = React.useState(15);
  const [repeatIndex, setRepeatIndex] = React.useState(0);
  const [tempNotes, setTempNotes] = React.useState("");
  const [notes, setNotes] = React.useState("");

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
          <View style={cardStyles.popupLabel}>
            <View style={cardStyles.centeredView}>
              <Text style={cardStyles.popupLabelText}> Date: </Text>
            </View>
          </View>
          <View style={cardStyles.calendar}>
            <Calendar />
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
                  style={{ color: "green" }}
                  placeholder="No Notes"
                  onChangeText={(newText) => setTempNotes(newText)}
                  defaultValue={tempNotes}
                />
              </View>
              <View style={cardStyles.popupAddNote}>
                <Pressable onPress={() => setNotes(tempNotes)}>
                  <Favicon.Plus style={{ width: 22 }} />
                  {(Platform.OS === "ios" || Platform.OS === "android") && (
                    <Image source={IconsDark.Plus} width={20} height={20} />
                  )}
                </Pressable>
              </View>
            </View>
          )}
          <View style={cardStyles.popupCheck}>
            <Pressable
              onPress={() => {
                props.isModalVisible();
                console.log("priority: ", priorityValue);
                console.log("complexity: ", complexityValue);
                console.log("category: ", category);
                console.log("Notes: ", notes);
                console.log("Repeat: ", repeatOptions[repeatIndex]);
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  modalView: {
    marginTop: RFValue(30),
    backgroundColor: light.secondary,
    borderRadius: 17,
    alignItems: "center",
    width: RFValue(250),
    elevation: 5,
  },
  popupHeader: {
    backgroundColor: light.accent,
    borderRadius: size.borderRadius,
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "stretch",
  },
  calendar: {
    marginTop: 10,
    backgroundColor: "blue",
    height: 400,
    width: "100%",
  },
  popupHeaderText: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 15,
    color: "white",
    ...text.title,
  },
  popupLabel: {
    marginHorizontal: size.margin,
    marginTop: 10,
    backgroundColor: light.primary,
    borderRadius: size.borderRadius,
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "stretch",
    paddingEnd: size.margin,
  },
  popupLabelText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    color: light.textSecondary,
  },
  popupCheck: {
    marginTop: 10,
    marginBottom: 10,
  },
  popupAddNote: {
    alignContent: "center",
    position: "absolute",
    right: 10,
    margin: 2,
  },
  dropdown: {
    backgroundColor: "white",
    borderBottomColor: "black",
    borderWidth: 1,
  },
  repeatText: {
    width: "50%",
  },
  slider: {
    width: "100%",
  },
  cardHeaderLeft: {
    flex: 1,
  },

  cardHeaderCenter: {
    flex: 10,
  },
});

export default CalendarPopup;
