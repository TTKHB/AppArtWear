import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import HotScreen from '../Screens/Hot/HotScreen';

const HotNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HotScreen"
        component={HotScreen}
        // options={{
        //   headerShown: false,
        // }
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: "#dbb98f" }}>HOT ArtWear</Text>
            // <Image source={logo} resizeMode="contain" style={{width: 135, height: 50}}/>
          ),
          headerLeft: () => (
            <Feather name="camera" style={{ marginLeft: 15 }} size={25} color={"#000"} />
          ),
          headerRight: () => (
            <Ionicons name="paper-plane-outline" style={{ marginRight: 15 }} size={25} color={"#545454"} />
          )
        }}
      />
    </Stack.Navigator>
  );
};

export default HotNavigator;
