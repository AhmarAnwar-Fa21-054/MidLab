import React, { useContext, useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryStack, VictoryPie } from "victory-native/src";
import prayerContext from "../context/PrayerContext";

function DailyChartScreen({ route }) {
    let Prayers = useContext(prayerContext)
    let [countFajr, setFajrCount] = useState(0)
    let [countZuhr, setZuhrCount] = useState(0)
    let [countAsr, setAsrCount] = useState(0)
    let [countMaghrib, setMaghribCount] = useState(0)
    let [countIsha, setIshaCount] = useState(0)
    let [data, setData] = useState([])
    useEffect(() => {

        let fajrCount = 0
        let zuhrCount = 0
        let asrCount = 0
        let maghribCount = 0
        let ishaCount = 0

        Prayers.prayerHistory[route.params.dateKey].forEach((Object) => {
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
        setFajrCount(fajrCount); setZuhrCount(zuhrCount); setAsrCount(asrCount); setMaghribCount(maghribCount); setIshaCount(ishaCount)
    }, [Prayers.prayerHistory])
    useEffect(() => {


        setData([{ x: "Fajr", y: countFajr },
        { x: "Zuhr", y: countZuhr },
        { x: "Asr", y: countAsr },
        { x: "Maghrib", y: countMaghrib },
        { x: "Isha", y: countIsha },].filter((item) => {
            return item.y != 0
        }))
    }, [countFajr, countZuhr, countAsr, countMaghrib, countIsha])
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "#fff", height: 450, width: 320, justifyContent: "center", alignItems: "center", elevation: 20, borderRadius: 15, paddingBottom: 21 }}>
                <VictoryPie labelRadius={110} labelPlacement={"perpendicular"} data={data} innerRadius={85} width={300}
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    style={{
                        labels: {
                            fontSize: 15,
                            fontWeight: "bold",


                        }
                    }}
                ></VictoryPie>

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
export default DailyChartScreen