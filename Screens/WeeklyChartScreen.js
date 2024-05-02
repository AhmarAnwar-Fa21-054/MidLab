import React, { useContext, useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { VictoryChart, VictoryBar, VictoryAxis } from "victory-native/src";
import prayerContext from "../context/PrayerContext";

function WeeklyChartScreen() {
    let Prayers = useContext(prayerContext)
    let [countFajr, setFajrCount] = useState(1)
    let [countZuhr, setZuhrCount] = useState(2)
    let [countAsr, setAsrCount] = useState(3)
    let [countMaghrib, setMaghribCount] = useState(3)
    let [countIsha, setIshaCount] = useState(6)
    let [data, setData] = useState([])
    useEffect(() => {
        let anArray = sortPrayerHistory()
        let fajrCount = 0
        let zuhrCount = 0
        let asrCount = 0
        let maghribCount = 0
        let ishaCount = 0
        let sevenDaysBackDate = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toLocaleDateString("en-ca")
        let currentDate = new Date().toLocaleDateString("en-ca")
        anArray.slice(0, 7).forEach((element) => {
            if (sevenDaysBackDate <= element[0] && element[0] <= currentDate) {
                element[1].forEach((Object) => {
                    if (Object["name"] === "فجر" && (Object["singleIsChecked"] === true || Object["groupIsChecked"] === true)) {
                        fajrCount++
                    }
                    if (Object["name"] === "ظہر" && (Object["singleIsChecked"] === true || Object["groupIsChecked"] === true)) {
                        zuhrCount++
                    }
                    if (Object["name"] === "عصر" && (Object["singleIsChecked"] === true || Object["groupIsChecked"] === true)) {
                        asrCount++
                    }
                    if (Object["name"] === "مغرب" && (Object["singleIsChecked"] === true || Object["groupIsChecked"] === true)) {
                        maghribCount++
                    }
                    if (Object["name"] === "عشاء" && (Object["singleIsChecked"] === true || Object["groupIsChecked"] === true)) {
                        ishaCount++
                    }
                })
            }
        })
        setFajrCount(fajrCount); setZuhrCount(zuhrCount); setAsrCount(asrCount); setMaghribCount(maghribCount); setIshaCount(ishaCount)
    }, [Prayers.prayerHistory])
    useEffect(() => {

        setData([{ Namaz: "Fajr", Count: countFajr },
        { Namaz: "Zuhr", Count: countZuhr },
        { Namaz: "Asr", Count: countAsr },
        { Namaz: "Maghrib", Count: countMaghrib },
        { Namaz: "Isha", Count: countIsha },]
        )
    }, [countFajr, countZuhr, countAsr, countMaghrib, countIsha])
    function sortPrayerHistory() {
        let anArray = Object.entries(Prayers.prayerHistory)
        anArray.sort((a, b) => {
            if (a[0] > b[0])
                return -2
            if (a[0] < b[0])
                return 2
            return 0
        })

        return anArray
    }
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "#fff", height: 450, width: 320, justifyContent: "center", alignItems: "center", elevation: 20, borderRadius: 15, paddingBottom: 21 }}>
                <VictoryChart width={350} height={450} domainPadding={{ x: 20, y: 30 }}  >
                    <VictoryAxis style={{
                        tickLabels: {
                            fontWeight: "bold"
                        }
                    }} ></VictoryAxis>
                    <VictoryAxis tickValues={Array(7).fill(0).map((item, index) => ++index)} dependentAxis style={{
                        tickLabels: {
                            fontWeight: "bold",

                        }
                    }}></VictoryAxis>
                    <VictoryBar animate={{ duration: 500 }} data={data} x="Namaz" y="Count"
                        style={{
                            data: {
                                width: 25,
                                fill: "#005390",
                            }
                        }}
                    ></VictoryBar>
                </VictoryChart>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center"

    },
});
export default WeeklyChartScreen