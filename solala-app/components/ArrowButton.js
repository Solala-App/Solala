import React, { useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    FlatList,
    SafeAreaView,
    Modal,
    Platform,
    Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";


import Plus from "../../assets/favicons_light/Plus.png";
import ScrollDown from "../../assets/favicons_light/ScrollDown.png";
import ScrollRight from "../../assets/favicons_light/ScrollRight.png";
import { theme } from "../constants";
import CheckBoxComponent from "./CheckBoxComponent";
import EventPopup from "./EventPopup.js";
import TaskPopup from "./TaskPopup.js";



//showsVerticalScrollIndicator={false} ref={scrollRef} scrollEventThrottle={1} onScroll={(e) => setScrollPos(e.nativeEvent.contentOffset.y)}
/* green bubble for menus */
const Button = (props) => {


    if (props.direction == "right") {

        return (

            <Favicon.ScrollRight style={{
                width: RFValue(12),
                backgroundColor: "black",
            }} />

        );
    } else {

        return (

            <Favicon.ScrollLeft style={{
                width: RFValue(12),
                backgroundColor: "black",
            }} />

        );

    }
};

export const cardStyles = StyleSheet.create({

});

export default Button;
