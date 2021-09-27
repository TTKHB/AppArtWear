import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';

//Screens
import MenuScreens from '../Screens/Menu/MenuScreens';

//Icon
import IconCart from 'react-native-vector-icons/Fontisto';
import IconSearch from 'react-native-vector-icons/Octicons';

const Stack = createStackNavigator();

const MenuNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreens}
        options={{
          title: 'Art Wear Mall',
          headerStyle: {
            backgroundColor: '#8D6E63',
            borderColor: '#F5F5F5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 28,
            fontWeight:'bold'
          },
          headerTitleAlign:'center',
          headerLeft: ({ color }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginLeft: 15
              }}
              onPress={() => navigation.navigate('UserNavigator', { screen: 'SearchScreen' })}
              >
              <IconSearch
                name="search"
                size={24}
                color="#fff"
                style={{
                  marginTop: 2
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: ({ color }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginRight: 15
              }}>
              <IconCart name="shopping-bag" size={24} color="#fff"  />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuNavigator;