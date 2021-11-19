import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import VoucherScreen from '../Screens/User/UuDai/VoucherScreen';

const Stack = createStackNavigator();

const UserNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="VoucherScreen"
        component={VoucherScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
