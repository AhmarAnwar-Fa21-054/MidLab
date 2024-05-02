import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Prayer from "../svgs/Prayer";
import { Calendar } from "react-native-calendars";
function CalenderScreen({ navigation }) {
    let [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString("en-ca"))


    return (
        <View style={styles.container}>

            <Calendar minDate={new Date(Date.now()-60*24*60*60*1000).toLocaleDateString("en-ca")} maxDate={new Date().toLocaleDateString("en-ca")} style={{ elevation: 20, marginTop: 20, width: 300 }} hideExtraDays  markedDates={{ [selectedDate]: { selected: true, selectedColor: "#005390" } }}
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