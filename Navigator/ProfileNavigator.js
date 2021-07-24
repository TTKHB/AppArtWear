import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import ProfileScreen from './../Screens/Profile/ProfileScreen';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
