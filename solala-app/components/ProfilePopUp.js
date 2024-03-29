import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../constants";

const { colorPalette } = theme;

const ProfilePopUp = (props) => {
  return (
    <ScrollView style={styles.profileCard}>
      <View style={styles.profile}>
        <View style={styles.profileDescription}>
          <Text style={styles.header}>Meet {props.name}</Text>
          <View style={styles.profileInfo}>
            <Text style={{ fontSize: RFValue(12) }}>{props.position}</Text>
            <Text style={{ fontSize: RFValue(12) }}>
              Skills: {props.skills}
            </Text>
            <View style={styles.buttonMenu}>
              {props.buttons.map((item, key) => (
                <TouchableOpacity
                  key={key}
                  style={item?.style}
                  onPress={item?.pressEvent}
                />
              ))}
            </View>
          </View>
          <Text style={styles.mainText}>{props.about}</Text>
          <Text style={styles.mainText}>{props.whyHere}</Text>
        </View>
        <Image source={props.profileImage} style={styles.profileImage} />
      </View>
      <Text style={styles.contributionsHeader}>Key Project Contributions</Text>
      <View style={styles.accolade}>
        {props.cards.map((item, key) => (
          <View key={key} style={styles.contributionCard}>
            <View style={styles.placeholder}>{item?.image}</View>
            <Text style={styles.cardHeader}>{item?.accolade}</Text>
            <Text style={styles.cardText}>{item?.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileCard: {
    backgroundColor: colorPalette.white,
    marginLeft: RFValue(20),
    marginRight: RFValue(20),
    marginTop: RFValue(30),
    marginBottom: RFValue(120),
    height: "75%",
    shadowOpacity: 0.2,
    shadowOffset: { width: RFValue(2), height: RFValue(2) },
  },
  profileInfo: {
    paddingTop: RFValue(20),
    paddingBottom: RFValue(20),
  },
  header: {
    color: colorPalette.jade,
    fontSize: RFValue(24),
    fontWeight: "bold",
  },
  contributionsHeader: {
    color: colorPalette.jade,
    fontSize: RFValue(24),
    fontWeight: "bold",
    paddingLeft: RFValue(30),
    paddingTop: RFValue(50),
  },
  cardText: {
    color: "grey",
    fontSize: RFValue(8),
  },

  cardHeader: {
    fontWeight: "bold",
    fontSize: RFValue(9),
  },

  profile: {
    width: "100%",
    height: RFValue(500),
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  profileDescription: {
    width: "50%",
    height: "80%",
    paddingTop: RFValue(50),
    paddingLeft: RFValue(10),
    flexDirection: "column",
  },
  buttonMenu: {
    flexDirection: "row",
    width: RFValue(70),
    height: RFValue(10),
    justifyContent: "space-evenly",
  },

  mainText: {
    paddingBottom: RFValue(20),
    color: "grey",
    paddingRight: RFValue(15),
    fontSize: RFValue(12),
  },

  profileImage: {
    width: "50%",
    height: "100%",
    resizeMode: "cover",
  },

  accolade: {
    width: "100%",
    height: RFValue(200),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: RFValue(50),
    paddingRight: RFValue(20),
    paddingLeft: RFValue(50),
  },

  contributionCard: {
    height: RFValue(150),
    width: RFValue(100),
    backgroundColor: "white",
    shadowOpacity: 0.02,
    shadowOffset: { width: RFValue(2), height: RFValue(2) },
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: RFValue(25),
  },
  placeholder: {
    backgroundColor: theme.colorPalette.teal,
    width: RFValue(30),
    height: RFValue(30),
  },
});

export default ProfilePopUp;
