import { Picker } from "@react-native-picker/picker";
import React from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";

import { theme } from "../constants";
const { light, text } = theme;

const TimePickerWeb = (props) => {
  const [am_pm, setAM_PM] = React.useState(
    props.currentTime.getHours() > 12 ? "1" : "0"
  );
  const [hour, setHour] = React.useState("");
  const [min, setMin] = React.useState("");
  function updateTime(newHour, newMin, newAM_PM) {
    if (newHour < 12 && newAM_PM === "1") {
      newHour = parseInt(newHour) + 12;
    } else if (newHour >= 12 && newAM_PM === "0") {
      newHour = parseInt(newHour) - 12;
    }
    const newTime = props.currentTime;
    newTime.setHours(newHour);
    newTime.setMinutes(newMin);
    props.changeTime(newTime);
  }
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
      }}>
      <Text style={[cardStyles.popupLabelText]}>Time:</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <TextInput
          style={[cardStyles.textBox, { width: "10%", textAlign: "right" }]}
          keyboardType="numeric"
          placeholder={props.currentTime.toLocaleTimeString().split(":")[0]}
          onChangeText={(newText) => {
            newText = newText.replace(/[^0-9]/, "");
            if (newText > 12) {
              newText = 12;
            }
            setHour(newText);
            updateTime(newText, min, am_pm);
          }}
          maxLength={2}
          value={hour}
        />
        <Text style={cardStyles.popupLabelText}> : </Text>
        <TextInput
          style={[
            cardStyles.textBox,
            {
              width: "10%",
              textAlign: "left",
            },
          ]}
          keyboardType="numeric"
          placeholder={props.currentTime
            .getMinutes()
            .toString()
            .padStart(2, "0")}
          onChangeText={(newText) => {
            newText = newText.replace(/[^0-9]/, "");
            if (newText > 59) {
              newText = 59;
            }
            setMin(newText);
            updateTime(hour, newText, am_pm);
          }}
          value={min}
          maxLength={2}
        />
        <Picker
          selectedValue={am_pm}
          style={[{ width: "20%" }, cardStyles.textBox]}
          onValueChange={(v) => {
            setAM_PM(v);
            updateTime(hour, min, v);
          }}
          accessibilityLabel="Styled Picker Accessibility Label">
          <Picker.Item label="AM" value="0" />
          <Picker.Item label="PM" value="1" />
        </Picker>
      </View>
    </View>
  );
};

export const cardStyles = StyleSheet.create({
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
  textBox: {
    color: light.accent,
    textAlign: "center",
    ...text.body,
  },
});
export default TimePickerWeb;
