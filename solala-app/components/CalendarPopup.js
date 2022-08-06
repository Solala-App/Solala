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
import Calendar from "./Calendar";
import SelectionButton from "./SelectionButton";

import Check from "../../assets/favicons_dark/Check.png";
import ScrollLeft from "../../assets/favicons_dark/ScrollLeft.png";
import ScrollRight from "../../assets/favicons_dark/ScrollRight.png";
import * as Favicon from "../../assets/favicons_js";
import Cancel from "../../assets/favicons_light/Cancel.png";
import Plus from "../../assets/favicons_light/Plus.png";
import { theme } from "../constants";
const { light, size, text, shadowProp } = theme;

// npm install @react-native-community/slider --save
// yarn add react-native-element-dropdown

const CalendarPopup = (props) => {
  const [priorityValue, setPriorityValue] = React.useState(15);
  const [complexityValue, setComplexityValue] = React.useState(15);
  const [tempNotes, setTempNotes] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const [category, setCategory] = React.useState("key0");

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
                  source={Cancel}
                  style={{ width: RFValue(12), height: RFValue(12) }}
                />
              </Pressable>
            </View>
          </View>
          <View style={cardStyles.calendar}>
            <Calendar />
          </View>
          {props.displayRepeat === true && (
            <View style={cardStyles.popupLabel}>
<SelectionButton data="calendar" title="repeat:" color="light" />
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
                    <Image width={20} height={20} />
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
              }}>
              <Image
                source={Check}
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  modalView: {
    marginTop: RFValue(30),
    backgroundColor: light.secondary,
    borderRadius: size.borderRadius,
    alignItems: "center",
    width: RFValue(250),
    elevation: RFValue(5),
    flex: 1,
    maxHeight: RFValue(667),
    maxWidth: RFValue(375),
  },
  popupHeader: {
    alignSelf: "stretch",
    borderRadius: size.borderRadius,
    backgroundColor: light.accent,
    opacity: 0.7,
    justifyContent: "space-between",
    flexDirection: "row",
    textAlign: "center",
    marginBottom: size.margin,
  },
  calendar: {
    marginTop: 10,
    marginBottom: 25,
    //backgroundColor: "blue",
    flex: 1, // unhiding this takes away the fixed 400 placeholder size.
    maxWidth: RFValue(375), // unhide later
    //height: 300, // remove this later
    width: "94%", // remove this later
  },
  popupHeaderText: {
    color: "white",
    ...text.title,
  },
  popupLabel: {
    padding: size.innerPadding,
    marginHorizontal: size.margin,
    marginBottom: size.margin,
    backgroundColor: light.primary,
    borderRadius: size.borderRadius,
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "stretch",
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
