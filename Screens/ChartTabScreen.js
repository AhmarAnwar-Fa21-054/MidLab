import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DailyChartScreen from "./DailyChartScreen";
import WeeklyChartScreen from "./WeeklyChartScreen";
import { FontAwesome } from "@expo/vector-icons";
import { View,Text } from "react-native";
import MonthlyChartScreen from "./MonthlyChartScreen";
const Tab = createBottomTabNavigator()
function ChartTabScreen({ route }) {
    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerTintColor: "#005390", headerTitleAlign: "center"}}>
            <Tab.Screen name="DailyChartScreen" component={DailyChartScreen} options={{ headerTitleStyle: { fontSize: 35, fontWeight: "700" }, title: "ایک دن کا گراف", tabBarIcon: ({ color }) =><View style={{width:40,height:40,backgroundColor:"#fff",elevation:20,borderRadius:20,justifyContent:"center",alignItems:"center",backgroundColor:color}}><Text style={{fontSize:20,fontWeight:"bold"}}>D</Text></View> }} initialParams={route.params} />
            <Tab.Screen name="WeeklyChartScreen" component={WeeklyChartScreen} options={{headerTitleStyle: { fontSize: 35, fontWeight: "700" }, title: "ایک ہفتے کا گراف", tabBarIcon: ({ color }) => <View style={{width:40,height:40,backgroundColor:"#fff",elevation:20,borderRadius:20,justifyContent:"center",alignItems:"center",backgroundColor:color}}><Text style={{fontSize:20,fontWeight:"bold"}}>W</Text></View> }} />
            <Tab.Screen name="MonthlyChartScreen" component={MonthlyChartScreen} options={{headerTitleStyle: { fontSize: 35, fontWeight: "700" }, title: "ایک ماہ کا گراف", tabBarIcon: ({ color }) => <View style={{width:40,height:40,backgroundColor:"#fff",elevation:20,borderRadius:20,justifyContent:"center",alignItems:"center",backgroundColor:color}}><Text style={{fontSize:20,fontWeight:"bold"}}>M</Text></View> }}/>
      
        </Tab.Navigator>
    )
}

export default ChartTabScreen