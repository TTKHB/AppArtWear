import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';

//Screens
import MenuScreens from '../Screens/Menu/MenuScreens';

//Icon
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import IconSearch from 'react-native-vector-icons/Octicons';

const Stack = createStackNavigator();

const MenuNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreens}
        options={{
          title: 'Art Wear Mall',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1
          },
          headerTintColor: '#8D6E63',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 28,
          },
          headerTitleAlign: 'center',
          headerLeft: ({ color }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginLeft: 15
              }}>
              <IconSearch
                name="search"
                size={24}
                style={{
                  marginTop: 2
                }}
                onPress={() => navigation.navigate('UserNavigator', { screen: 'SearchScreen' })}
              />
            </TouchableOpacity>
          ),
          headerRight: ({ color }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginRight: 15
              }}>
              <IconCart name="handbag" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuNavigator;
