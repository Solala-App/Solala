import { format } from "date-fns";
import React, { useCallback, useMemo, useState } from "react";
import { Image, Platform, Pressable, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";
import * as Light from "../../assets/favicons_light";
import { theme } from "../constants";
import Button from "./Button";
import cardStyles from "./CalendarPopup";

const { colorPalette, light, fonts } = theme;

const getDate = new Date();
const INITIAL_DATE = format(getDate, "yyy-MM-dd");
//  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);
const CalendarComponent = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);

  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    console.log("selected date is ", selected);
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: colorPalette.terracotta,
        selectedTextColor: colorPalette.white,
      },
      /*['2022-07-22']: {
        dotColor: 'red',
        marked: true
      }*/
    };
  }, [selected]);

  LocaleConfig.locales["en"] = {
    formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
    // numbers: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'] // number localization example
  };
  LocaleConfig.defaultLocale = "en";

  const CalendarLeftNav = () => (
    <View style={cardStyles.centeredView}>
      <Pressable onPress={Calendar.onPressArrowLeft}>
        <Favicon.ScrollLeft color="light" style={{ width: 10 }} />
        {(Platform.OS === "ios" || Platform.OS === "android") && (
          <Image source={Light.ScrollLeft} style={{ width: 15, height: 15 }} />
        )}
      </Pressable>
    </View>
  );

  const CalendarRightNav = () => (
    <View style={cardStyles.centeredView}>
      <Pressable onPress={Calendar.onPressArrowRight}>
        <Favicon.ScrollRight color="light" style={{ width: 10 }} />
        {(Platform.OS === "ios" || Platform.OS === "android") && (
          <Image source={Light.ScrollRight} style={{ width: 15, height: 15 }} />
        )}
      </Pressable>
    </View>
  );

  if (Platform.OS === "android" || Platform.OS === "IOS") {
    return (
      <View>
        <Calendar
          style={{ flex: 1 }}
          theme={themeCalendar}
          // Initially visible month. Default = now
          initialDate="2022-01-01"
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate="2022-01-01"
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate="2099-12-31"
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat="MMMM yy"
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
      <View>
        <Calendar
          style={{ flex: 1 }}
          theme={themeCalendar}
          // Initially visible month. Default = now
          initialDate={INITIAL_DATE}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={INITIAL_DATE}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate="2099-05-30"
          // Handler which gets executed on day press. Default = undefined
          /*onDayPress={(day) => {
            console.log("selected day", day);
            onDateChange(day, 'START_DATE');
            console.log("new selected day", selectedStartDate);
          }}*/
          onDayPress={onDayPress}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat="MMMM yy"
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => {
            if (direction === "left") {
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
          /*renderHeader={(month) => {
            /*Return JSX*/
          /*return (
                <Text style={cardStyles.popupHeaderText}>{month.toLocaleString("en-US", { year: "numeric", month: "long" })}</Text>
            )
          }}*/
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths
          markedDates={marked}
        />
        <Button title="Add to calendar" color="dark" onClick="" />
      </View>
    );
  }
};

const themeCalendar = {
  backgroundColor: light.secondary,
  calendarBackground: light.secondary,
  textSectionTitleColor: colorPalette.white,
  textSectionTitleDisabledColor: "#d9e1e8",
  selectedDayBackgroundColor: light.accent,
  selectedDayTextColor: colorPalette.white,
  todayTextColor: light.accent,
  dayTextColor: colorPalette.black,
  textDisabledColor: light.primary,
  dotColor: light.accent,
  selectedDotColor: colorPalette.white,
  monthTextColor: colorPalette.white,
  indicatorColor: "blue",
  textDayFontFamily: theme.fonts.MontserratAltRegular,
  textMonthFontFamily: theme.fonts.Courgette,
  textDayHeaderFontFamily: theme.fonts.Courgette,
  textDayFontSize: RFValue(10),
  textMonthFontSize: RFValue(10),
  textDayHeaderFontSize: RFValue(10),
};

export default CalendarComponent;
