import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Slider from '@react-native-community/slider';
import { Dropdown } from 'react-native-element-dropdown';
import * as Favicon from "../../assets/favicons_js";

import { theme } from "../constants";
const { light, size, text, shadowProp } = theme;


// npm install @react-native-community/slider --save
// yarn add react-native-element-dropdown

const AddTaskPopup = (props) => {
    const [priorityValue, setPriorityValue] = React.useState(15);
    const [complexityValue, setComplexityValue] = React.useState(15);
    const [repeatIndex, setRepeatIndex] = React.useState(0);
    const [dropdown, setDropdown] = React.useState(null);
    const [tempNotes, setTempNotes] = React.useState('');
    const [notes, setNotes] = React.useState('');

    const categories = [
        { label: 'Category One'},
        { label: 'Category Two'},
        { label: 'Category Three'},
    ];

    const repeatOptions = ["None", "Daily", "Weekly", "Monthly"];

    const scrollLeft = () => {
        if (repeatIndex === 0) {
            setRepeatIndex(repeatOptions.length-1);
        } else {
            setRepeatIndex(() => repeatIndex-1);
        }
    }

    const scrollRight = () => {
        if (repeatIndex === repeatOptions.length-1) {
            setRepeatIndex(0);
        } else {
            setRepeatIndex(() => repeatIndex+1);
        }
    }
    return (
        <ScrollView>
            <View style={cardStyles.centeredView}>
                <View style={cardStyles.modalView}>
                    <View style={cardStyles.popupHeader}>
                        <View style={cardStyles.cardHeaderLeft} />
                        <View style={cardStyles.cardHeaderCenter}>
                            <Text style={cardStyles.popupHeaderText}> Create Task </Text>
                        </View>
                        <View style={cardStyles.cardHeaderRight}>
                            <TouchableOpacity onPress={props.isModalVisible}>
                                <Favicon.Cancel style={{ width: 35 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={cardStyles.popupLabel}>
                        <View style={cardStyles.cardHeaderCenter}>
                            <Text style={cardStyles.popupLabelText}> Date: </Text>
                        </View>
                    </View>
                    <View style={cardStyles.calendar}> </View>
                    <View style={cardStyles.popupLabel}>
                        <Text style={cardStyles.popupLabelText}> Repeat </Text>
                        <View style={cardStyles.centeredView}>
                            <TouchableOpacity onPress={scrollLeft}>
                                <Favicon.ScrollLeft style={{ width: 10 }} />

                            </TouchableOpacity>
                            <View style={cardStyles.repeatText}>
                                <Text style={cardStyles.popupLabelText}> {repeatOptions[repeatIndex]} </Text>
                            </View>
                            <TouchableOpacity onPress={scrollRight}>
                                <Favicon.ScrollRight style={{ width: 10}} />

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={cardStyles.popupLabel}>
                        <Text style={cardStyles.popupLabelText}> Priority: </Text>

                        <Slider
                            maximumValue={100}
                            minimumValue={0}
                            minimumTrackTintColor={light.textSecondary}
                            maximumTrackTintColor={light.textSecondary}
                            thumbTintColor="orange"
                            step={1}
                            value={priorityValue}
                            onValueChange={
                                (priorityValue) => setPriorityValue(priorityValue)
                            }
                        />
                    </View>
                    <View style={cardStyles.popupLabel}>
                        <Text style={cardStyles.popupLabelText}> Complexity: </Text>
                        <Slider
                            maximumValue={100}
                            minimumValue={0}
                            minimumTrackTintColor={light.textSecondary}
                            maximumTrackTintColor={light.textSecondary}
                            thumbTintColor="orange"
                            step={1}
                            value={complexityValue}
                            onValueChange={
                                (complexityValue) => setComplexityValue(complexityValue)
                            }
                        />

                    </View>
                    <View style={cardStyles.popupLabel}>
                        <Text style={cardStyles.popupLabelText}> Category: </Text>
                        <View style={cardStyles.centeredView}>
                            <Dropdown
                                style={cardStyles.dropdown}
                                data={categories}
                                labelField="label"
                                valueField="label"
                                label="Dropdown"
                                placeholder="Select Category"
                                value={dropdown}
                                onChange={item => {
                                    setDropdown(item.label);
                                }}
                            />
                        </View>
                    </View>
                    <View style={cardStyles.popupLabel}>
                        <Text style={cardStyles.popupLabelText}> Notes: </Text>
                        <View style={cardStyles.centeredView}>
                            <TextInput
                                style={{color:"green"} }
                                placeholder="No Notes"
                                onChangeText={newText => setTempNotes(newText)}
                                defaultValue={tempNotes}
                            />
                        </View>
                        <View style={cardStyles.popupAddNote}>
                            <TouchableOpacity
                                onPress={() => setNotes(tempNotes)}
                            >
                                <Favicon.Plus style={{ width: 22 }} />

                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={cardStyles.popupCheck}>
                        <TouchableOpacity
                            onPress={() => {
                                props.isModalVisible()
                                console.log("priority: ", priorityValue)
                                console.log("complexity: ", complexityValue)
                                console.log("category: ", dropdown)
                                console.log("Notes: ", notes)
                                console.log("Repeat: ", repeatOptions[repeatIndex])
                            }}
                        >
                            <Favicon.Check style={{ width: 44 }} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

export const cardStyles = StyleSheet.create({
    cardHeaderCenter: {
        flex: 10,
    },

    cardHeaderRight: {
        flex: 1,
        paddingTop: size.innerPadding,
        paddingBottom: size.innerPadding,
        paddingRight: size.innerPadding,
        paddingLeft: size.innerPadding,
        alignItems: "flex-end",
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row"
    },
    modalView: {
        backgroundColor: light.secondary,
        borderRadius: 13,
        alignItems: "center",
        width: 400,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        position: "absolute",
        top: 0
    },
    popupHeader: {
        alignSelf: "stretch",
        borderRadius: size.borderRadius,
        backgroundColor: light.accent,
        justifyContent: "space-between",
        flexDirection: "row",
        textAlign: "center",
    },
    calendar: {
        marginTop: 10,
        backgroundColor: "blue",
        height: 400,
        width: "100%"
    },
    popupHeaderText: {
        fontSize: 15,
        color: "white",
        ...text.title
    },
    popupLabel: {
        marginHorizontal: size.margin,
        marginTop: 10,
        backgroundColor: light.primary,
        borderRadius: size.borderRadius,
        flexDirection: "row",
        textAlign: "center",
        alignSelf: "stretch",
        paddingEnd: size.margin,
    },
    popupLabelText: {
        textAlign: "center",
        fontSize: 20,
        color: "green",
    },
    popupCheck: {
        marginTop: 10,
        marginBottom: 10
    },
    popupAddNote: {
        alignContent: "center",
        position: "absolute",
        right: 10,
        margin: 2
    },
    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderWidth: 1,
    },
    repeatText: {
        width:"40%"
    }
});


export default AddTaskPopup;