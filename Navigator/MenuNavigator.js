import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import MenuScreens from '../Screens/Menu/MenuScreens';

const Stack = createStackNavigator();

const MenuNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={MenuScreens}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuNavigator;
