import { Picker, PickerIOS } from "@react-native-picker/picker";

import React from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../constants";
const { light, size, text, colorPalette, shadowProp } = theme;

const TimePickerWeb = (props) => {
  const [am_pm, setAM_PM] = React.useState("0");
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
          placeholder={new Date().toLocaleTimeString().split(":")[0]}
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
          placeholder={new Date().getMinutes()}
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
export default TimePickerWeb;
