import React, { useState, useEffect } from 'react';
import { View, Image, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Splasscreen from '../../Screens/SplashScreen/SplashScreen'
import Main from '../Main';
import UserNavigator from '../UserNavigator';
import HomeNavigator from '../HomeNavigator';
import CartNavigator from '../CartNavigator';

const Stack = createStackNavigator();

const StackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                component={Splasscreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="UserNavigator"
                component={UserNavigator}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="HomeNavigator"
                component={HomeNavigator}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="CartNavigator"
                component={CartNavigator}
                options={{ header: () => null }}
            />
        </Stack.Navigator>
    );
};

export default StackScreen;