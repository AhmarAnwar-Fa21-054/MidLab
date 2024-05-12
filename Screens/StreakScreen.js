import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import prayerContext from "../context/PrayerContext";
import StreakTrack from "../svgs/StreakTrack";
import Streak from "./Streak";
import Count from "./Count";
function StreakScreen() {
    return (
        <View style={styles.container}>
            <Header text={"اسٹریک"} />
            <Streak />
            <Header text={"باقاعدہ نمازوں کی گنتی"} />
            <Count />
        </View>
    )
}

function Header({ text }) {
    return (
        <View style={{ height: 50, width: 220, elevation: 20, borderRadius: 20, backgroundColor: "#fff", marginTop: 20, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "#005390", fontWeight: "600" }}>{text}</Text>
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