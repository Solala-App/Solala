import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { theme } from "../constants";
const { light, size, text, shadowProp } = theme;

/* green bubble for menus */
const Features = (props) => {
  return (
    <SafeAreaView style={cardStyles.card}>
      <View style={cardStyles.cardHeader}>
        <Text style={cardStyles.cardHeaderText}>{props.title}</Text>
      </View>

      <View style={{ flexWrap: "wrap" }}>
        <View style={cardStyles.cardItem}>
          <Text style={cardStyles.cardObjectText}>{props.body}</Text>
          <View style={cardStyles.cardObjectPhoto}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: light.secondary,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: size.borderRadius,
    opacity: 0.7,
    paddingBottom: size.innerPadding,
    ...shadowProp,
  },

  cardHeader: {
    alignSelf: "stretch",
    borderRadius: size.borderRadius,
    backgroundColor: light.accent,
    opacity: 0.7,
    justifyContent: "center",
    textAlign: "center",
    marginBottom: size.margin,
  },

  cardHeaderText: {
    ...text.title,
    color: light.textPrimary,
  },

  cardItem: {
    padding: size.innerPadding,
    marginHorizontal: size.margin,
    marginBottom: size.margin,
    backgroundColor: light.primary,
    borderRadius: size.borderRadius,
    flex: 1,
    flexDirection: "row",
  },

  cardObjectText: {
    ...text.body,
    color: light.textSecondary,
    textAlign: "center",
    flex: 2,
  },

  cardObjectPhoto: {
    flex: 1,
  },
});

export default Features;
