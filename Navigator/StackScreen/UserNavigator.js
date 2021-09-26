import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../../Screens/User/Register/RegisterScreen';
import LoginScreen from '../../Screens/User/Login/LoginScreen';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import LoginScreenSMS from '../../Screens/User/Login/LoginScreenSMS';
import SettingScreen from '../../Screens/Profile/SettingScreen';
import MyOrDerScreen from '../../Screens/User/MyOrDer/MyOrDerScreen';
import UuDaiUser from '../../Screens/User/UuDai/uudaiUser';
import SearchScreen from '../../Screens/Products/SearchScreen';
import Notification from '../../Screens/Notification/Notification';
import ProductFoundScreen from '../../Screens/Products/ProductFoundScreen';
import PurchaseOrder from '../../Screens/User/PurchaseOrder/PurchaseOrder';

const Stack = createStackNavigator();

const UserNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    // headerShown: false,
                    title: 'Đăng Nhập',
                    headerStyle: {
                        backgroundColor: '#fff',
                        borderColor: '#F5F5F5',
                        borderWidth: 1
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        textAlign: 'center',
                        alignSelf: 'center',
                    },
                    headerTitleAlign: 'center',
                    headerRight: ({ color }) => (
                        <IconCart />
                    ),
                }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    // headerShown: false,
                    title: 'Đăng Ký',
                    headerStyle: {
                        backgroundColor: '#fff',
                        borderColor: '#F5F5F5',
                        borderWidth: 1
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        textAlign: 'center',
                        alignSelf: 'center',
                    },
                    headerTitleAlign: 'center',
                    headerRight: ({ color }) => (
                        <IconCart />
                    ),
                }}
            />
            <Stack.Screen
                name="SMS"
                component={LoginScreenSMS}
                options={{
                    // headerShown: false,
                    title: '',
                    headerStyle: {
                        backgroundColor: '#fff',
                        borderColor: '#F5F5F5',
                        borderWidth: 1
                    },
                }}
            />
            <Stack.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    // headerShown: false,
                    title: 'Cài đặt',
                    headerStyle: {
                        backgroundColor: '#fff',
                        borderColor: '#F5F5F5',
                        borderWidth: 1
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        textAlign: 'center',
                        alignSelf: 'center',
                    },
                    headerTitleAlign: 'center',
                    headerRight: ({ color }) => (
                        <IconCart />
                    ),
                }}
            />
            <Stack.Screen
                name="uudaiUser"
                component={UuDaiUser}
                options={{
                    // headerShown: false,
                    title: 'Ưu đãi hấp dẫn',
                    headerStyle: {
                        backgroundColor: '#fff',
                        borderColor: '#F5F5F5',
                        borderWidth: 1
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        textAlign: 'center',
                        alignSelf: 'center',
                    },
                    headerTitleAlign: 'center',
                    headerRight: ({ color }) => (
                        <IconCart />
                    ),
                }}
            />
            <Stack.Screen
                name="PurchaseOrder"
                component={PurchaseOrder}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MyOrDer"
                component={MyOrDerScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ProductFoundScreen"
                component={ProductFoundScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Notification"
                component={Notification}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default UserNavigator;