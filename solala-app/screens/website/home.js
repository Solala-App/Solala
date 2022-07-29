import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Components from "../../components";
import * as Solala from "../../../assets/solala_js";

import { theme } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
const { light, size, text } = theme;

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.heroSection}>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
          >
            <Text style={styles.heroSectionBody}>
              Solala is a mental health management tool, designed to help
              develop emotional intelligence skills, track moods and stress
              levels, and encourage valuable tools to maintain work-life balance
              and prevent burn out.
            </Text>
            <Text style={styles.heroSectionBody}>
              Key features in the app help you to manage more than your day to
              day tasks list, they help you prioritize self care, work to find
              ways to balance your personal goals with your day to day needs,
              and help you to communicate in work, school, or life.
            </Text>
          </View>
          <View style={styles.heroSectionImage}>
            <Solala.Happy style={{ height: RFValue(200) }} />
            <Components.Button
              navigateTo="Login"
              title="Meet Solala"
              color="light"
            />
          </View>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
          >
            <Text style={styles.heroSectionBody}>
              Solala is built by a committed team of students from University of
              Washington's Paul G. Allen School of Computer Science, with a
              little extra help from our biggest supporters. App Features were
              decided based on the research provided by our team, making Solala
              a science-backed way to help you grow.
            </Text>
            <Text style={styles.heroSectionBody}>
              App Features were decided based on the research provided by our
              team, making Solala a science-backed way to help you grow.
            </Text>
          </View>
        </View>
        <View style={styles.appFeatures}>
          <View style={styles.column1}>
            <View style={styles.card}>
              <Components.Features
                title="Responsive Task Prioritization"
                body="Like a personal assistant for your health, Solala helps you with everything from remembering medication schedules to brushing your teeth. They will create reminders that work for you to promote better habit building, and with our unique task sorting algorithm you can find time to tackle all your projects big and small."
              />
            </View>
            <View style={styles.card}>
              <Components.Features
                title="Growth Mindset"
                body="Help name and grow your own little Solala plant! Solala is able to respond and help track your emotional and social needs. They are here to interact with you, cheer you on, and be your biggest supporter as you tackle a busy day!"
              />
            </View>
          </View>
          <View style={styles.column2}>
            <View style={styles.card}>
              <Components.Features
                title="Calender Integration"
                body="Solala works with your already existing calenders to help you find time by reviewing your daily schedule. Your Solala schedule includes scientifically recommends rest time. Keep booking meetings over lunch? Solala will ask if you want to mark yourself as busy in the future to make sure you take a needed break."
              />
            </View>
            <View style={styles.card}>
              <Components.Features
                title="Stress Tracking"
                body="Solala can help you track stress responses like muscle tightness, fatigue, or headaches to help you find patterns in your schedule or habits that increase stress levels. Over time Solala can use this data to help you reduce daily stress."
              />
            </View>
          </View>
        </View>
      </View>
      <Components.FooterWeb />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.primary,
  },
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: size.padding,
  },
  heroSection: { flex: 1, flexDirection: "row", alignItems: "center" },
  heroSectionHeader: {
    ...text.title,
    color: light.accent,
    textAlign: "center",
  },
  heroSectionBody: {
    flex: 1,
    ...text.body,
    color: light.accent,
    flexWrap: "wrap",
    padding: size.padding,
    textAlign: "center",
  },
  heroSectionImage: {
    flex: 1,
    padding: size.padding,
  },
  appFeatures: { flexDirection: "row" },
  column1: {
    flex: 1,
    flexDirection: "column",
    marginRight: size.margin,
  },
  column2: {
    flex: 1,
    flexDirection: "column",
  },
  card: {
    flex: 1,
    paddingBottom: size.padding,
  },
});
