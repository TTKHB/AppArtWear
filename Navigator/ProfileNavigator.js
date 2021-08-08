import React, {useContext, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import ProfileScreen from './../Screens/Profile/ProfileScreen';
import LoginScreen from '../Screens/User/Login/LoginScreen';
import RegisterScreen from '../Screens/User/Register/RegisterScreen';
import ProfileScreenTwo from '../Screens/Profile/ProfileScreenTwo';
import {useLogin} from '../Context/LoginProvider';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfile from '../Screens/Profile/EditProfile';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          // headerShown: false,
          title: 'Đăng Nhập',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            marginLeft: 88,
          },
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
            borderWidth: 1,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            marginLeft: 96,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const StackNavigatortwo = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileTwo"
        component={ProfileScreenTwo}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1,
          },
          headerLeft: () => (
            <View style={{marginLeft: 305}}>
              <MaterialCommunityIcons
                name="cog-outline"
                size={25}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
          headerRight: navigation => (
            <View style={{marginRight: 20}}>
              <MaterialCommunityIcons
                name="cart-outline"
                size={25}
                color={'black'}
                // onPress={() => navigation.navigate('')}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
  const {isLoggedIn} = useLogin();
  //Nếu chưa đăng nhập sẽ vào StackNavigator(Screen Profile chưa đăng nhập)
  //Nếu đã đăng nhập sẽ vào StackNavigatortwo(Screen Profile đã đăng nhập)
  return isLoggedIn ? <StackNavigatortwo /> : <StackNavigator />;
};

export default ProfileNavigator;
