

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";



export default function Header(props) {
    let staticImage = require('./Rain.png');

    if (Platform.OS === 'web') {
        return (

            <View style={styles.header}>

                <TouchableOpacity>
                    <Image
                        style={{
                            width: RFValue(25),
                            height: RFValue(25),
                        }} source={require('./calendar.png')} />
                </TouchableOpacity>

                <View style={styles.headerSun}>
                    <Text style={styles.textBubble}>{props.time}</Text>

                    <Image
                        style={{
                            top: RFValue(75),
                            left: RFValue(25),
                            width: RFValue(50),
                            height: RFValue(50),
                        }} source={require('./Rain.png')} />

                    <Text style={styles.announcement}>{props.announcement}</Text>

                </View>

                <TouchableOpacity>
                    <Image
                        style={{
                            width: RFValue(25),
                            height: RFValue(25),
                        }} source={require('./TODO.png')} />
                </TouchableOpacity>

            </View>


        );
    } else if (Platform.OS === 'android') {
        <View style={styles.headerSun}>
            <Text style={styles.textBubble}>{props.time}</Text>

            <Image
                style={{
                    top: RFValue(75),
                    left: RFValue(25),
                    width: RFValue(50),
                    height: RFValue(50),
                }} source={require('./Rain.png')} />

            <Text style={styles.announcement}>{props.announcement}</Text>

        </View>
    }
}


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
});
