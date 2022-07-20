import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Platform
} from "react-native";

import GreenHouse from '../../assets/favicons_light/greenhouse.svg';
import Calendar from '../../assets/favicons_light/calendar.svg'
import ToDoList from '../../assets/favicons_light/to-do-list.svg'
const Footer = () => {
    
    const handleGreenHousePress = () => {
        console.log("Navigate to Green House Page")
        //this.props.navigation.navigate('GreenHousePage');
    }
    const handleCalendarPress = () => {
        console.log("Navigate to Calendar Page");
    }
    const handleToDoPress = () => {
        console.log("Navigate to Reminders Page");
    }

    return (
        <View style={styles.box}>

            {(Platform.OS === 'android' || Platform.OS === 'ios')&&
                <>
                <TouchableOpacity onPress={handleGreenHousePress}>
                    <GreenHouse width={icon_size} height={icon_size} style={styles.button} />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleCalendarPress}>
                    <Calendar width={icon_size} height={icon_size} style={styles.button} />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleToDoPress}>
                    <ToDoList width={icon_size} height={icon_size} style={styles.button} />
                </TouchableOpacity>
                </>}
               
        </View>
        
        
    );
};

const icon_size = 75;
const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        top: 10,
        position: 'relative',
        width: "75",
        height:"75"
    }
});

export default Footer;