import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NamazHistoryScreen from "./NamazHistoryScreen";
import StreakScreen from "./StreakScreen";
import WeeklyChartScreen from "./WeeklyChartScreen";
import { AntDesign,FontAwesome,MaterialIcons } from "@expo/vector-icons";
import ChartTabScreen from "./ChartTabScreen";



const Tab = createBottomTabNavigator()
function Tabs({route}){
  
    return(
      
       <Tab.Navigator screenOptions={{tabBarShowLabel:false,headerTintColor:"#005390", headerTitleAlign:"center"}}>
        <Tab.Screen name="NamazHistoryScreen" component={NamazHistoryScreen} options={{headerTitleStyle:{fontSize:40,fontWeight:"700"},title:"صلاح ٹریک",tabBarIcon:({color})=><AntDesign color={color} size={30} name="checksquare"/>}} initialParams={route.params}/>
        <Tab.Screen name="StreakScreen" component={StreakScreen} options={{headerTitleStyle:{fontSize:35,fontWeight:"700"},title:"اسٹریک",tabBarIcon:({color})=><MaterialIcons name="stairs" size={30} color={color} />}}/>
        <Tab.Screen name="ChartTabScreen" component={ChartTabScreen} options={{headerTitleStyle:{fontSize:35,fontWeight:"700"},tabBarShowLabel:false,headerShown:false,tabBarIcon:({color})=> <FontAwesome name="bar-chart" size={30} color={color}/>}} initialParams={route.params}/>
      
       </Tab.Navigator>
 
    )
}

export default Tabs

