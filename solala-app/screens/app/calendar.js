import { React, useState, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import * as Components from "../../components";
import { theme } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize"; 
const { light, size, text } = theme;
export default function CalendarView() {

    const months = [{ month: "January" }, { month: "February" }, { month: "March" }, { month: "April" },
        { month: "May" }, { month: "June" }, { month: "July" }, { month: "August" }, { month: "September" },
        { month: "October" }, { month: "November" }, { day: "December" }    ]

    const [currentMonth, setCurrentMonth] = useState("January");
    const currentYear = ""
    const renderCalendarHeader=(date)=> {
        console.log(date);
    }
    
    return (
      <View style={styles.container}>

            <View style={{ alignItems: "center" }}>
                <View style={{ width: RFValue(250), height: RFValue(60), backgroundColor: "black", opacity: "50%", borderRadius: RFValue(20) }}>
                    <FlatList data={months}

                        contentContainerStyle={{
                            alignItems: "center",
                            width: RFValue(750),
                            justifyContent: "space-evenly",
                            }}

                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (


                            <TouchableOpacity
                                key={index}
                                style={{
                                    width: RFValue(50),
                                    height: RFValue(50),
                                    backgroundColor: "white",
                                    borderRadius: RFValue(15),
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                onPress={() => {
                                    setCurrentMonth(item?.month);
                                    console.log(currentMonth)
                                }}
                        >

                            <Text style={{ fontSize: RFValue(10)} }>{item?.month}</Text>


                        </TouchableOpacity>)}

                        horizontal={true}/>
                    </View>
                </View>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                }}
            >

                

                <View
                    style={{
                        flexDirection: "column",
                        height: RFValue(350),
                        justifyContent: "space-evenly",
                        paddingTop: RFValue(40),
                    }}

                >
                    <TouchableOpacity
                        style={{
                            opacity: "50%",
                            backgroundColor: "red",
                            width: RFValue(25),
                            height: RFValue(70),
                            borderBottomLeftRadius: RFValue(15),
                            borderTopLeftRadius: RFValue(15),
                            alignItems: "center",
                            justifyContent: "center",
                            
                        }}
                    >


                        <Text style={{

                            width: RFValue(40),
                            transform: [{ rotate: "270deg" }],
                       
                            color: "black",
                            opacity: "100%",
                        }}>Appointments</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            opacity: "50%",
                            backgroundColor: "green",
                            width: RFValue(25),
                            height: RFValue(70),
                            borderBottomLeftRadius: RFValue(15),
                            borderTopLeftRadius: RFValue(15),
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >

                        <Text style={{

                            width: RFValue(20),
                            transform: [{ rotate: "270deg" }],
                            color: "black",
                            opacity: "100%"

                        }}>Notes</Text>


                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            opacity: "50%",
                            backgroundColor: "blue",
                            width: RFValue(25),
                            height: RFValue(70),
                            borderBottomLeftRadius: RFValue(15),
                            borderTopLeftRadius: RFValue(15),
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >

                        <Text style={{

                            width: RFValue(30),
                            transform: [{ rotate: "270deg" }],
           
                            
                        }}>Important</Text>

                    </TouchableOpacity>



                </View>

                <Calendar

                    date={"1" + currentMonth + "2022"} 

                style={{
                    fontFamily: "Cochin",
                    width: RFValue(400),
                        height: RFValue(300),
                        borderTopLeftRadius: RFValue(15),
                        borderTopRightRadius: RFValue(15),
                }}

                
                
                onDayPress={(day) => { this.setDay(day) }}

                renderArrow={
                    (direction) => {

                        if (direction === 'left') return (<Components.ArrowButton direction="left" />);
                        if (direction === 'right') return (<Components.ArrowButton direction="right" />);
                    }
                }
                    enableSwipeMonths={true}

                    hideExtraDays={true}


                dayComponent={({ date, state }) => {
                    return (
                        <TouchableOpacity>
                            <Text
                                style={{
                                    textAlign: 'center', margin: RFValue(12), fontSize: RFValue(12),
                                }}
                            >
                            {date.day}
                            </Text>
                        </TouchableOpacity>
                            );
                    }}


                    theme={{
                    
                    backgroundColor: 'black',
                    calendarBackground: 'white',
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: 'blue',
                    indicatorColor: 'blue',
                    textDayFontFamily: text.h1.fontFamily,
                    textMonthFontFamily: text.h1.fontFamily,
                    textDayHeaderFontFamily: 'monospace',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: RFValue(12),
                        textDayHeaderFontSize: RFValue(12),

                        textMonthFontSize: RFValue(12),
                }}
            />
            </View>
            <Components.Footer />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: size.padding,
    paddingRight: size.padding,
    paddingBottom: size.padding,
  },
  
});
