import React, { useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import ChatScreen from '../Screens/User/Chat/ChatScreen';


const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};



export default ProfileNavigator;