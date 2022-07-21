import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Platform } from "react-native";

import GreenHouse from "../../assets/favicons_light/greenhouse.svg";
import Calendar from "../../assets/favicons_light/calendar.svg";
import ToDoList from "../../assets/favicons_light/to-do-list.svg";
import { theme, fonts } from "../constants";
import { RFValue } from "react-native-responsive-fontsize";
import * as Favicon from "../../assets/favicons_js";
import * as Weather from "../../assets/favicons_weather";

const { colorPalette } = theme;

const Header = (props) => {


    
    const CalendarPressEvent = () => {
        console.log("Temp calendar navigation");
    };
    const ToDoPressEvent = () => {
        console.log("Temp TODO navigation");
    };



    if (Platform.OS === "android" || Platform.OS === "IOS") {

        return (
           
            <View style={styles.headerBox}>
                <View style={styles.header}>

                    <View style={styles.headerSun}>
                        <Text style={styles.textBubble}>{props.greeting}</Text>
                        <View style={styles.placeholderWeather}></View>
                        <Text style={styles.announcement}>{props.announcement}</Text>
                    </View>

                </View>
            </View>
                 );
       
    } else {
        return (

            <View style={styles.headerBox}>
                
                <View style={styles.header}>

                    <TouchableOpacity onPress={CalendarPressEvent}>
                        <View style={styles.placeholder}></View>
                    </TouchableOpacity>

                    <View style={styles.headerSun}>
                        <Text style={styles.textBubble}>{props.greeting}</Text>
                        <View style={styles.placeholderWeather}></View>
                        <Text style={styles.announcement}>{props.announcement}</Text>
                    </View>

                    <TouchableOpacity onPress={ToDoPressEvent}>
                        <View style={styles.placeholder}></View>
                    </TouchableOpacity>

                </View>
            </View>
         );
    }
};

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: theme.colorPalette.pink,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: RFValue(30),
    },
    headerSun: {
        display: "flex",
        flexDirection: "",
        backgroundColor: theme.colorPalette.goldenrod,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        width: RFValue(200),
        height: RFValue(200),
        borderRadius: "50%",
        bottom: RFValue(10),
    },
    headerBox: {
        height: RFValue(120),
        width: "100%",
    },
    textBubble: {
        width: RFValue(150),
        height: RFValue(100),
        fontSize: RFValue(10),
        flexWrap: "wrap",
        paddingTop: RFValue(100),
        paddingLeft: RFValue(10),
        fontFamily: theme.fonts.title,
    },
    announcement: {
        width: RFValue(200),
        height: RFValue(100),
        fontSize: RFValue(10),
        paddingTop: RFValue(40),
        paddingLeft: RFValue(15),
        fontFamily: theme.fonts.body,
    },

    placeholderWeather: {
        backgroundColor: theme.colorPalette.teal,
        width: RFValue(30),
        height: RFValue(30),
        top: 170,
    },

    placeholder: {
        backgroundColor: theme.colorPalette.teal,
        width: RFValue(30),
        height: RFValue(30),
    },

});

export default Header;
