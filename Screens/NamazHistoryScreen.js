import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, Pressable } from 'react-native'
import MultiplePersons from "../svgs/MultiplePersons";
import SinglePerson from "../svgs/SinglePerson";
import CheckBox from "react-native-check-box";
import prayerContext from "../context/PrayerContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
function NamazHistoryScreen({ route }) {
    let Prayers = useContext(prayerContext)

    let [fiveNamaz, setFiveNamaz] = useState(Prayers.prayerHistory[route.params.dateKey] || [{ key: "111", name: "فجر", singleIsChecked: false, groupIsChecked: false }, { key: "222", name: "ظہر", singleIsChecked: false, groupIsChecked: false }, { key: "333", name: "عصر", singleIsChecked: false, groupIsChecked: false }, { key: "444", name: "مغرب", singleIsChecked: false, groupIsChecked: false }, { key: "555", name: "عشاء", singleIsChecked: false, groupIsChecked: false }])
    return (
        <View style={styles.container}>
            <NamazCards fiveNamaz={fiveNamaz} setFiveNamaz={setFiveNamaz} route={route} Prayers={Prayers} />
        </View>
    )
}
function NamazCards({ fiveNamaz, setFiveNamaz, route, Prayers }) {

    useEffect(() => {
        Prayers.setPrayerHistory({ ...Prayers.prayerHistory, [route.params.dateKey]: fiveNamaz })
        setData()
    }, [fiveNamaz])
    async function setData() {
        await AsyncStorage.setItem(route.params.dateKey, JSON.stringify(fiveNamaz))
    }
    // useEffect(()=>{
    //     console.log(Prayers.prayerHistory);
    // },[])
    const singleCheckHandle = (Item) => { Item.singleIsChecked ? setFiveNamaz(fiveNamaz.map(item => item.key === Item.key ? { ...item, singleIsChecked: false } : item)) : setFiveNamaz(fiveNamaz.map(item => item.key === Item.key ? { ...item, singleIsChecked: true, groupIsChecked: false } : item)) }
    const groupCheckHandle = (Item) => { Item.groupIsChecked ? setFiveNamaz(fiveNamaz.map(item => item.key === Item.key ? { ...item, groupIsChecked: false } : item)) : setFiveNamaz(fiveNamaz.map(item => item.key === Item.key ? { ...item, singleIsChecked: false, groupIsChecked: true } : item)) }

    return (
        <>
            <FlatList data={fiveNamaz}
                renderItem={({ item }) => {

                    return (
                        <View style={{ width: 300, margin: 10, backgroundColor: "#fff", borderRadius: 15, elevation: 5, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                            <View style={{ height: 50, width: 90, justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 40, fontWeight: "800" }}>{item.name}</Text></View>

                            <CheckBox isChecked={item.singleIsChecked} checkedCheckBoxColor="#005390" onClick={() => {
                                singleCheckHandle(item)
                            }}
                            />
                            <Pressable onPress={() => {
                                singleCheckHandle(item)
                            }}>
                                <SinglePerson width={50} height={80} marginLeft={-20} />
                            </Pressable>
                            <CheckBox isChecked={item.groupIsChecked} checkedCheckBoxColor="#005390" onClick={() => {
                                groupCheckHandle(item)
                            }} />
                            <Pressable onPress={() => {
                                groupCheckHandle(item)
                            }}>
                                <MultiplePersons width={50} height={50} marginLeft={-10} />
                            </Pressable>

                        </View>
                    )
                }}>

            </FlatList>
        </>
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
export default NamazHistoryScreen