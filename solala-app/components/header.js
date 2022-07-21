import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Platform } from "react-native";

import GreenHouse from "../../assets/favicons_light/greenhouse.svg";
import Calendar from "../../assets/favicons_light/calendar.svg";
import ToDoList from "../../assets/favicons_light/to-do-list.svg";
import { theme } from "../constants";
import { RFValue } from "react-native-responsive-fontsize";



const { colorPalette } = theme;

const Header = () => {

    return (

        <View style={styles.header}>
            <View style={styles.placeholder}></View>

            <View style={styles.headerSun}>
                <Text style={styles.textBubble}>"Good Morning, Bring Your Umbrella Today!</Text>
                <View style={styles.placeholderWeather}></View>
                <Text style={styles.announcement}>It's Neha's birthday Today!</Text>

            </View>

            <View style={styles.placeholder}></View>

        </View>
    );
};

const icon_size = 75;
export const styles = StyleSheet.create({
    header: {
        flex: "1",
        flexDirection: "row",
        backgroundColor: "#EFC8C3",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: RFValue(30),
        position: "absolute",
    },


    headerSun: {
        display: "flex",
        flexDirection: "",
        backgroundColor: "#E1AD01",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        width: RFValue(250),
        height: RFValue(250),
        borderRadius: "50%",
        bottom: RFValue(10),
    },
    textBubble: {
        width: RFValue(150),
        height: RFValue(100),
        fontSize: RFValue(12),
        flexWrap: "wrap",
        paddingTop: RFValue(120),
        paddingLeft: RFValue(10),

    },
    announcement: {
        width: RFValue(200),
        height: RFValue(100),
        fontSize: RFValue(12),
        paddingTop: RFValue(40),
        paddingLeft: RFValue(30),

    },
    placeholderWeather: {
        backgroundColor: "black",
        width: RFValue(50),
        height: RFValue(50),
        top: RFValue(80),
    },
    placeholder: {
        backgroundColor: "black",
        width: RFValue(20),
        height: RFValue(20),

    }
});

export default Header;
