import { format } from "date-fns";
import React from "react";
import { View, StyleSheet } from "react-native";

import { theme } from "../constants";
import ToDoCard from "./ToDoCard";
const { size } = theme;

const ToDoDateView = (props) => {
  const currentTime = new Date();
  const dayOfWeek = format(currentTime, "EEEE");
  let card2 = "Loading";
  let card3 = "Loading";
  let card4 = "Loading";
  let card5 = "Loading";
  let card6 = "Loading";
  let card7 = "Loading";

  switch (dayOfWeek) {
    case "Monday":
      card2 = "Tuesday";
      card3 = "Wednesday";
      card4 = "Thursday";
      card5 = "Friday";
      card6 = "Saturday";
      card7 = "Sunday";
      break;
    case "Tuesday":
      card2 = "Wednesday";
      card3 = "Thursday";
      card4 = "Friday";
      card5 = "Saturday";
      card6 = "Sunday";
      card7 = "Monday";
      break;
    case "Wednesday":
      card2 = "Thursday";
      card3 = "Friday";
      card4 = "Saturday";
      card5 = "Sunday";
      card6 = "Monday";
      card7 = "Tuesday";
      break;
    case "Thursday":
      card2 = "Friday";
      card3 = "Saturday";
      card4 = "Sunday";
      card5 = "Monday";
      card6 = "Tuesday";
      card7 = "Wednesday";
      break;
    case "Friday":
      card2 = "Saturday";
      card3 = "Sunday";
      card4 = "Monday";
      card5 = "Tuesday";
      card6 = "Wednesday";
      card7 = "Thursday";
      break;
    case "Saturday":
      card2 = "Sunday";
      card3 = "Monday";
      card4 = "Tuesday";
      card5 = "Wednesday";
      card6 = "Thursday";
      card7 = "Friday";
      break;
    case "Sunday":
      card2 = "Monday";
      card3 = "Tuesday";
      card4 = "Wednesday";
      card5 = "Thursday";
      card6 = "Friday";
      card7 = "Saturday";
      break;

    default:
      break;
  }
  return (
    <View style={styles.mainView}>
      <View style={[styles.row]}>
        <View style={styles.card}>
          <ToDoCard title="Today's Priorities" />
        </View>
        <View style={styles.card}>
          <ToDoCard title={card2} />
        </View>
        <View style={styles.card}>
          <ToDoCard title={card3} />
        </View>
        <View style={styles.card}>
          <ToDoCard title={card4} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <ToDoCard title={card5} />
        </View>
        <View style={styles.card}>
          <ToDoCard title={card6} />
        </View>
        <View style={styles.card}>
          <ToDoCard title={card7} />
        </View>
        <View style={styles.card}>
          <ToDoCard title="Next Week" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  card: {
    flex: 1,
    margin: size.margin,
  },
});
export default ToDoDateView;
