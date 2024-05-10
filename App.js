import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CalenderScreen from './Screens/CalendarScreen';
import PrayerInfo from './context/PrayerInfo';
import Tabs from './Screens/Tabs';
const Stack = createNativeStackNavigator()
 function App() {
  return (
    
   <NavigationContainer>
    <PrayerInfo>
    <Stack.Navigator screenOptions={{headerTintColor:"#005390", headerTitleAlign:"center",headerTitleStyle:{fontSize:40,fontWeight:"700"}}}>
      <Stack.Screen name='CalenderScreen' component={CalenderScreen} options={{headerTintColor:"#005390", headerTitleAlign:"center",headerTitleStyle:{fontSize:40,fontWeight:"700"},title:"صلاح ٹریکر"}}></Stack.Screen>
      <Stack.Screen name='Tabs' component={Tabs} options={{title:"صلاح ٹریک",headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
    </PrayerInfo>
   </NavigationContainer>
   
  );
}

export default App