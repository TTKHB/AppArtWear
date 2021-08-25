import React from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import HotScreen from '../Screens/Hot/HotScreen';

const HotNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hot"
        component={HotScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HotNavigator;
