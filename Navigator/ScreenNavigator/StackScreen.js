import React, { useState, useEffect } from 'react';
import { View, Image, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Splasscreen from '../../Screens/SplashScreen/SplashScreen'
import Main from '../Main';
import UserNavigator from '../StackScreen/UserNavigator';
import HomeNavigator from '../HomeNavigator';
import CartNavigator from '../CartNavigator';
import ProductMenu from '../../Screens/Menu/ProductMenu';

//Icon
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import IconFavorite from 'react-native-vector-icons/MaterialIcons';
import IconSearch from 'react-native-vector-icons/Octicons';
import IconNotification from 'react-native-vector-icons/AntDesign';
import DrawerNavigator from '../DrawerNavigator';
import DetailMenu from '../../Screens/Menu/DetailMenu';

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
            <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="DetailMenu"
                component={DetailMenu}
                options={{ 
                    headerBackTitleVisible: false,
                    title:null,
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerTitle:false,                   
                }}
            />
        </Stack.Navigator>
    );
};

export default StackScreen;