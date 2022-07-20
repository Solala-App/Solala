import React, { useState } from "react";
import { Text, View, TextInput, Button, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../constants";


const { colors, size, text, shadowProp } = theme;

export default function header() {

    if (Platform.OS === 'android') {
        //phone screen
        return (<View>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}/>
            <View style={styles.headerSun}>
                <Text>{this.props.timeOfDay} {this.props.message}</Text>
                <Text>{this.props.notification}</Text>
            </View>
        </View>);
    } else {
        //desktop screen

        return (<View style={styles.desktopHeader}>
            <View style={styles.headerSun}>
                <Text>{this.props.timeOfDay} {this.props.message}</Text>
                <Text>{this.props.notification}</Text>
            </View>
        </View>);
    }
}


const styles = StyleSheet.create({
    desktopHeader: {
        backgroundColor: colors.header.primary,
        width: "100%", 
        display: flex,
        alignItems: center,
        justifyContent: center,
        height: 75,


    },

    phoneHeader: {
        backgroundColor: colors.header.primary,
        width: "100%",
        display: flex,
        alignItems: center,
        justifyContent: center,
        height: 75,
    },

    headerSun: {

        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: colors.header.sun,
        fontSize: RFValue(18),

        //To display image as a circle using CSS, Set width and height properties for image
        //with same CSS length value.Refer CSS Length Units.Set border-radius property with a value of 50%.
    }

});