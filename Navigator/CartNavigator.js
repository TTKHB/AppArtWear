import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import CartScreen from '../Screens/Cart/CartScreen';
import CheckoutScreen from '../Screens/User/Checkout/CheckoutScreen';

const Stack = createStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
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
            flexGrow: 1,
            alignSelf: 'center',
          },
          headerRight: ({ color }) => (
            <IconCart />
          ),
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          // headerShown: false,
          title: 'Thanh toán',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            textAlign: 'center',
            flexGrow: 1,
            alignSelf: 'center',
          },
          headerRight: ({ color }) => (
            <IconCart />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;