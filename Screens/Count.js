import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import prayerContext from "../context/PrayerContext";
import StreakTrack from "../svgs/StreakTrack";
function Count() {
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
                    if (anArray[i][0] === new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString("en-ca")) {
                        for (let j = anArray[i][1].length - 1; j >= 0; j--) {
                            if (anArray[i][1][j]['singleIsChecked'] === true || anArray[i][1][j]['groupIsChecked'] === true) {
                                streakCount++
                            }
                            else {
                                return streakCount
                            }
                        }

                    }
                    else {
                        return streakCount
                    }
                }
            }

        }
        if (anArray[0][0] === new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString("en-ca")) {
            for (let i = 0; i < anArray.length; i++) {
                if (anArray[i][0] === new Date(Date.now() - (i + 1) * 24 * 60 * 60 * 1000).toLocaleDateString("en-ca")) {
                    for (let j = anArray[i][1].length - 1; j >= 0; j--) {
                        if (anArray[i][1][j]['singleIsChecked'] === true || anArray[i][1][j]['groupIsChecked'] === true) {
                            streakCount++
                        }
                        else {
                            return streakCount
                        }
                    }
                }
                else {
                    return streakCount
                }
            }


        }
        return streakCount
    }
    return (
        <View style={{ height: 200, width: 220, elevation: 20, borderRadius: 20, backgroundColor: "#fff", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
            <StreakTrack height={180} width={180} elevation={20} streak={streak} />
        </View>
    )
}

export default Count