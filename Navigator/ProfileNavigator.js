import React, { useContext, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import HelpScreen from '../Screens/User/Help/HelpScreen';
import FeedbackScreens from '../Screens/User/Help/FeedbackScreens';
import FavoriteScreen from'../Screens/Profile/FavoriteScreen';
import OderDetail from '../Screens/User/PurchaseOrder/OderDetail';
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
      <Stack.Screen
      name="Help Screen"
      component={HelpScreen}
      options={{
        headerShown: false,
      }}
    />
      <Stack.Screen
      name="Phan hoi"
      component={FeedbackScreens}
      options={{
        headerShown: false,
      }}
    />
       <Stack.Screen
      name="FavoriteScreen"
      component={FavoriteScreen}
      options={{
        headerShown: false,
      }}
    />
    
    </Stack.Navigator>
  );
};



export default ProfileNavigator;


