import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../../Screens/User/Register/RegisterScreen';
import LoginScreen from '../../Screens/User/Login/LoginScreen';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import LoginScreenSMS from '../../Screens/User/Login/LoginScreenSMS';
import SettingScreen from '../../Screens/Profile/SettingScreen';
import MyOrDerScreen from '../../Screens/User/MyOrDer/MyOrDerScreen';
import UuDaiUser from '../../Screens/User/UuDai/UuDaiUser';
import SearchScreen from '../../Screens/Products/SearchScreen';
import Notification from '../../Screens/Notification/Notification';
import ProductFoundScreen from '../../Screens/Products/ProductFoundScreen';
import PurchaseOrder from '../../Screens/User/PurchaseOrder/PurchaseOrder';
import SuccessScreen from '../../Screens/User/Register/SuccessScreen';
import InfomationArtWear from '../../Screens/Profile/InfomationArtWear';
import InfomationScreen from '../../Screens/Profile/InfomationScreen';
import ResetPassword from '../../Screens/User/ResetPassword/ResetPassword';
import FavoriteScreen from '../../Screens/Profile/FavoriteScreen';

import IconSearch from 'react-native-vector-icons/Octicons';
import IconBack from 'react-native-vector-icons/Ionicons';

import MessagScreen from '../../Screens/Notification/MessagScreen'
import NotifiScreen from '../../Screens/Notification/NotifiScreen'
import ActivityScreen from '../../Screens/Notification/ActivityScreen'
import SaleScreen from '../../Screens/Notification/SaleScreen'
import Detail from '../../Screens/Notification/Detail/Detail';
import OderDetail from '../../Screens/User/PurchaseOrder/OderDetail'
import Rating from '../../Screens/User/PurchaseOrder/Rating'
import NotificationHotScreen from '../../Screens/Notification/NotificationHotScreen';

const Stack = createStackNavigator();

const UserNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
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
            borderWidth: 1,
          },
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          // headerShown: false,
          title: 'Quên mật khẩu',
          headerStyle: {
            backgroundColor: '#FFFCF2',
            borderBottomColor: '#C0C0C0',
            borderBottomWidth: 0.2,
          },
          headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 21,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
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
            borderWidth: 1,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
          },
          headerTitleAlign: 'center',
          headerRight: ({ color }) => <IconCart />,
        }}
      />
      <Stack.Screen
        name="uudaiUser"
        component={UuDaiUser}
        options={{
          // headerShown: false,
          title: 'Ưu đãi hấp dẫn',
          headerStyle: {
            backgroundColor: '#FFFCF2',
          },
          headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 21,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
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
      <Stack.Screen
        name="Success"
        component={SuccessScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Infomation"
        component={InfomationScreen}
        options={{
          // headerShown: false,
          title: 'Thông tin cá nhân',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="InfomationArtWear"
        component={InfomationArtWear}
        options={{
          // headerShown: false,
          title: 'Giới thiệu',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ header: () => null }}
      />
       <Stack.Screen
        name="MessagScreen"
        component={MessagScreen}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="NotifiScreen"
        component={NotifiScreen}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NotificationHotScreen"
        component={NotificationHotScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SaleScreen"
        component={SaleScreen}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="OderDetail"
        component={OderDetail}
        options={{
          // headerShown: false,
          title: 'Thông tin đơn hàng',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            color:'black',
            fontWeight:'bold'
          },
          headerTitleAlign: 'center',
        }}
      />
        <Stack.Screen
        name="Rating"
        component={Rating}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
