import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './../Main';
import LoginScreen from '../../Screens/User/Login/LoginScreen';
const Stack = createStackNavigator();
const StackScreen = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* muốn tạo screen không có bottom cứ code thêm stack.screen bên đưới  */}
      <Stack.Screen name="Main" component={Main} />

      <Stack.Screen name="Login" component={LoginScreen} />

      {/*Home  */}

      {/*Cart  */}

      {/*Profile  */}
    </Stack.Navigator>
  );
};

export default StackScreen;
