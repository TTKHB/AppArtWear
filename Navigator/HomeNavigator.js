import React from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

//screen
import ProductScreen from './../Screens/Products/ProductScreen';
import ProductDetailsScreen from './../Screens/Products/ProductDetailsScreen';

/**
 * Muốn thêm màn hình ở home thì them stack.screen ở dưới
 *
 */
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Product"
        component={ProductScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Product Detail"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* thêm màn hình ở dưới */}
    </Stack.Navigator>
  );
};

export default function HomeNavigator() {
  return <MyStack />;
}
