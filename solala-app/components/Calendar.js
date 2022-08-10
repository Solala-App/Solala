import React, { useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { RFValue } from "react-native-responsive-fontsize";

import ScrollLeft from "../../assets/favicons_dark/ScrollLeft.png";
import ScrollRight from "../../assets/favicons_dark/ScrollRight.png";
import * as Favicon from "../../assets/favicons_js";
import { theme } from "../constants";
import Button from "./Button";
import cardStyles from "./CalendarPopup";

const { colorPalette } = theme;

const CalendarComponent = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate
    ? selectedStartDate.format("YYYY-MM-DD").toString()
    : "";

  const CalendarLeftNav = () => (
    <View style={cardStyles.centeredView}>
      <Pressable onPress={Calendar.onPressArrowLeft}>
        <Favicon.ScrollLeft style={{ width: 10 }} />
        {(Platform.OS === "ios" || Platform.OS === "android") && (
          <Image source={ScrollLeft} style={{ width: 15, height: 15 }} />
        )}
      </Pressable>
    </View>
  );

  const CalendarRightNav = () => (
    <View style={cardStyles.centeredView}>
      <Pressable onPress={Calendar.onPressArrowRight}>
        <Favicon.ScrollRight style={{ width: 10 }} />
        {(Platform.OS === "ios" || Platform.OS === "android") && (
          <Image source={ScrollRight} style={{ width: 15, height: 15 }} />
        )}
      </Pressable>
    </View>
  );

  if (Platform.OS === "android" || Platform.OS === "IOS") {
    return (
      <View style={styles.container}>
        <Calendar
          // Initially visible month. Default = now
          initialDate="2012-03-01"
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate="2012-05-10"
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate="2012-05-30"
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat="yyyy MM"
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          //renderArrow={(direction) => <Arrow />}
          renderArrow={(direction) => (direction === "left" ? "left" : "right")}
          // Do not show days of other months in month page. Default = false
          hideExtraDays
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames
          // Show week numbers to the left. Default = false
          showWeekNumbers
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={(addMonth) => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft
          // Disable right arrow. Default = false
          disableArrowRight
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays
          // Replace default month and year title with custom one. the function receive a date as parameter
          renderHeader={(date) => {
            /*Return JSX*/
          }}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths
        />
        <Button title="Add to calendar" color="dark" onClick="" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Calendar
          style={styles.container}
          // Initially visible month. Default = now
          initialDate="2022-08-01"
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate="2022-08-04"
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate="2099-05-30"
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat="yyyy MM"
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => {
            if (direction == "left") {
              return <CalendarLeftNav />;
            } else {
              return <CalendarRightNav />;
            }
          }}
          // Do not show days of other months in month page. Default = false
          hideExtraDays
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          firstDay={0}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={(addMonth) => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={false}
          // Disable right arrow. Default = false
          disableArrowRight={false}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays
          // Replace default month and year title with custom one. the function receive a date as parameter
          renderHeader={(date) => {
            /*Return JSX*/
          }}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths
        />
        <Button title="Add to calendar" color="dark" onClick="" />
      </View>
    );
  }
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.forest,
    flex: 1,
    //calendarBackground: colorPalette.jade,
    textSectionTitleColor: colorPalette.terracotta,
  },
  day: {
    backgroundColor: colorPalette.jade,
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  dateText: {
    margin: 16,
  },
});

export default CalendarComponent;