import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import prayerContext from "../context/PrayerContext";
import StreakTrack from "../svgs/StreakTrack";
function StreakScreen() {
    let Prayers = useContext(prayerContext)
    let [streak, setStreak] = useState()
    useEffect(() => {
        setStreak(streakCountFun(sortPrayerHistory()))

    }, [Prayers.prayerHistory])
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
    function streakCountFun(anArray) {
        let streakCount = 0
        if (anArray[0][0] === new Date().toLocaleDateString("en-ca")) {
            if (anArray.length === 1) {
                for (let j = anArray[0][1].length - 1; j >= 0; j--) {
                    if (anArray[0][1][j]['singleIsChecked'] === true || anArray[0][1][j]['groupIsChecked'] === true) {

                        streakCount++


                    }
                    else {
                        if (streakCount > 0) {
                            break
                        }
                    }

                }
            }

            else {
                for (let j = anArray[0][1].length - 1; j >= 0; j--) {
                    if (anArray[0][1][j]['singleIsChecked'] === true || anArray[0][1][j]['groupIsChecked'] === true) {

                        streakCount++


                    }
                    else {
                        if (streakCount > 0) {
                            return streakCount
                        }
                    }

                }

                for (let i = 1; i < anArray.length; i++) {

                    for (let j = anArray[i][1].length - 1; j >= 0; j--) {
                        if (anArray[i][1][j]['singleIsChecked'] === true || anArray[i][1][j]['groupIsChecked'] === true) {
                            streakCount++
                        }
                        else {
                            return streakCount
                        }
                    }

                }
            }

        }
        return streakCount
    }
    return (
        <View style={styles.container}>
            <View style={{ height: 250, width: 250, elevation: 20, borderRadius: 20, backgroundColor: "#fff", marginTop: 50, justifyContent: "center", alignItems: "center" }}>
                <StreakTrack height={200} width={200} elevation={20} streak={streak}/>
            </View>
           
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "flex-start"

    },
});

export default StreakScreen