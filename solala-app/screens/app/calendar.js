import React from "react";
import { View, StyleSheet, Dimensions, Platform, Button } from "react-native";
import { Titles } from "../../components/Card";

import * as Components from "../../components";
import { theme } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
const { light, size } = theme;
export default function Calendar() {
  const [viewDate, setViewDate] = React.useState(new Date());

  function addDays(days) {
    const date = new Date(viewDate);
    date.setDate(viewDate.getDate() + days);
    return date;
  }

  if (Platform.OS === "ios" || Platform.OS === "android") {
    return (
      <View style={styles.container}>
        <View style={styles.mainViewMobile}>
          <View style={styles.row}>
            <View style={styles.card}>
              <Components.Card title={Titles.TodayEvent} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.card}>
              <Components.Card title={Titles.TodayEvent} />
            </View>
            <View style={styles.card}>
              <Components.Card title={Titles.TodayEvent} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.card}>
              <Components.Card title={Titles.TodayEvent} />
            </View>
          </View>
        </View>
        <Components.Footer />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View style={[styles.row, { flex: 0.2 }]}>
            <View style={{ alignItems: "flex-end", flex: 1 }}>
              <Components.SelectionButton
                title="Date:"
                data={viewDate}
                updateVariable={setViewDate}
                numCards={5}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.card}>
              <Components.Card title={Titles.TodayEvent} day={addDays(0)} />
            </View>
            <View style={styles.card}>
              <Components.Card title={Titles.TodayEvent} day={addDays(1)} />
            </View>
            <View style={styles.card}>
              <Components.Card title={Titles.TodayEvent} day={addDays(2)} />
            </View>
            <View style={styles.card}>
              <Components.Card title={Titles.TodayEvent} day={addDays(3)} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.card}>
              <Components.Card title={Titles.TodayEvent} day={addDays(4)} />
            </View>
            <View style={styles.card}>
              <Components.Card title={Titles.TodayEvent} day={addDays(5)} />
            </View>
            <View style={styles.card}>
              <Components.Card title={Titles.Upcoming} />
            </View>
            <View style={styles.card}>
              <Components.Card title={Titles.Past} />
            </View>
          </View>
        </View>
        <Components.Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: light.primary,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - RFValue(25),
  },
  mainViewMobile: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: size.padding,
    paddingRight: size.padding,
    paddingTop: size.padding,
    paddingBottom: size.padding,
  },
  mainView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: size.padding,
    paddingRight: size.padding,
    paddingTop: size.padding,
    paddingBottom: size.padding,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  column: {
    flexDirection: "column",
    alignSelf: "stretch",
    flex: 1,
  },
  card: {
    flex: 1,
    margin: size.margin,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
});
