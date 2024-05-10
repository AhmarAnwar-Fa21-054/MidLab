import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Calendar } from "react-native-calendars";
import AsyncStorage from "@react-native-async-storage/async-storage";
import prayerContext from "../context/PrayerContext";
function CalenderScreen({ navigation }) {
    let [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString("en-ca"))
    let [minDate, setMinDate] = useState()
    let Prayer = useContext(prayerContext)
    useEffect(() => {
        AsyncStorage.getItem("minDate", (error, result) => {
            if (result == null) {
                AsyncStorage.setItem("minDate", new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toLocaleDateString("en-ca"), () => {
                    AsyncStorage.getItem("minDate", (error, result) => {
                        setMinDate(result)
                    })
                })
            }
            else {
                setMinDate(result)
            }

        })
        getAllData()
    }, [])
    async function getAllData() {
        let keys = await AsyncStorage.getAllKeys()
        let data = await AsyncStorage.multiGet(keys)
        let anObject = {}

        data.forEach((element) => {
            if (element[0] != "minDate") {
                anObject = { ...anObject, [element[0]]: JSON.parse(element[1]) }
            }
        })
        Prayer.setPrayerHistory(anObject)
    }
    return (
        <View style={styles.container}>

            <Calendar minDate={minDate} maxDate={new Date().toLocaleDateString("en-ca")} style={{ elevation: 20, marginTop: 20, width: 300 }} hideExtraDays markedDates={{ [selectedDate]: { selected: true, selectedColor: "#005390" } }}
                onDayPress={(date) => {
                    setSelectedDate(date.dateString)
                    navigation.navigate("Tabs", { dateKey: date.dateString })
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
});
export default CalenderScreen