import React from "react";
import { View, Text } from "react-native";

export default function Homepage() {
    return (
        <View>
            <View style={styles.header}></View>
            <View style={styles.mainView}>
                <View style={styles.eventView}>
                    <View style={styles.card}></View>
                    <Text>Hello WOOORRRLLLDDDD</Text>
                    <View style={styles.card}></View>
                </View>
                <View style={styles.solalaView}></View>

                <View style={styles.healthView}>
                    <View style={styles.card}></View>
                    <View style={styles.card}></View>
                </View>
            </View>
            <View style={styles.footer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        JustifyContent: "space-between",
        backgroundColor: "#EFC8C3",
        alignItems: "center",
        width: "100%",
    },
    mainView: {
        display: "flex",
        flexDirection: "row",
        JustifyContent: "space-between",
        backgroundColor: "#E3FFEB",
        alignItems: "center",
        width: "100%",
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        JustifyContent: "space-between",
        backgroundColor: "#CB7236",

        width: "100%",
    },
    eventView: {
        display: "flex",
        flexDirection: "column",
        JustifyContent: "space-between",
        backgroundColor: "#CB7236",
        alignItems: "center",
    },
    solalaView: {
        display: "flex",
        flexDirection: "column",
        JustifyContent: "space-between",
        backgroundColor: "#CB7236",
        alignItems: "center",
    },
    healthView: {
        display: "flex",
        flexDirection: "column",
        JustifyContent: "space-between",
        backgroundColor: "#CB7236",
        alignItems: "center",
    },
});
