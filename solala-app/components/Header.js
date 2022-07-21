import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Platform } from "react-native";

import GreenHouse from "../../assets/favicons_light/greenhouse.svg";
import Calendar from "../../assets/favicons_light/calendar.svg";
import ToDoList from "../../assets/favicons_light/to-do-list.svg";
import { theme } from "../constants";
import { RFValue } from "react-native-responsive-fontsize";
import * as Favicon from "../../assets/favicons_js";

const { colorPalette } = theme;

const Header = () => {


    return (
        <View style={styles.header}>

            <TouchableOpacity>
                <View style={styles.placeholder}></View>
            </TouchableOpacity>

            <View style={styles.headerSun}>
                <Text style={styles.textBubble}>"Good Morning, Bring Your Umbrella Today!</Text>
                <View style={styles.placeholderWeather}></View>
                <Text style={styles.announcement}> "It's Neha's Birthday Today!"</Text>
            </View>

            <TouchableOpacity>
                <View style={styles.placeholder}></View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#EFC8C3",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: RFValue(30),
    },
    headerSun: {
        display: "flex",
        flexDirection: "",
        backgroundColor: "#E1AD01",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        width: RFValue(200),
        height: RFValue(200),
        borderRadius: "50%",
        bottom: RFValue(10),
    },
    textBubble: {
        width: RFValue(150),
        height: RFValue(100),
        fontSize: RFValue(10),
        flexWrap: "wrap",
        paddingTop: RFValue(100),
        paddingLeft: RFValue(10),
    },
    announcement: {
        width: RFValue(200),
        height: RFValue(100),
        fontSize: RFValue(10),
        paddingTop: RFValue(40),
        paddingLeft: RFValue(30),
    },

    placeholderWeather: {

        backgroundColor: "#29E0CC",
        width: RFValue(30),
        height: RFValue(30),
        top: 170,

    },

    placeholder: {
        backgroundColor: "#29E0CC",
        width: RFValue(30),
        height: RFValue(30),
    },

});

export default Header;
