import React, { useContext, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import ProfileScreen from '../Screens/Profile/ProfileScreen';


const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};



export default ProfileNavigator;


