import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import VoucherScreen from '../Screens/User/UuDai/VoucherScreen';
import CheckOutSuccess from '../Screens/User/Checkout/CheckOutSuccess';

const Stack = createStackNavigator();

const PaymentNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VoucherScreen"
        component={VoucherScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CheckOutSuccess"
        component={CheckOutSuccess}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PaymentNavigator;
