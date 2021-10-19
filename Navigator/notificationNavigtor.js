import React, { useContext, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import MessagScreen from '../Screens/Notification/MessagScreen'
import NotifiScreen from "../Screens/Notification/NotifiScreen";
import SaleScreen from "../Screens/Notification/SaleScreen";
import ActivityScreen from "../Screens/Notification/ActivityScreen";
import Detail from "../Screens/Notification/Detail/Detail";

const Stack = createNativeStackNavigator();

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Mess" component={MessagScreen}/>
                <Stack.Screen name="Notifi" component={NotifiScreen} />
                <Stack.Screen name="Sale" component={SaleScreen} />
                <Stack.Screen name="Activity" component={ActivityScreen} />
                <Stack.Screen name="Detail ne" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigators;