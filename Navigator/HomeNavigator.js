import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
//screen
import ProductScreen from './../Screens/Products/ProductScreen';
import ProductDetailsScreen from './../Screens/Products/ProductDetailsScreen';
import Menu from '../Screens/Products/Menu';
import Star_rating from '../components/ProductMenu/Star_rating';
//Icon
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import IconFavorite from 'react-native-vector-icons/MaterialIcons';
import IconSearch from 'react-native-vector-icons/Octicons';
import IconNotification from 'react-native-vector-icons/AntDesign';
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
          title: 'Art Wear',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1
          },
          headerTintColor: '#8D6E63',
          headerTitleStyle: {
            textAlign: 'center',
            flexGrow: 1,
            alignSelf: 'center',
            fontSize: 28,
            fontWeight: 'bold'
          },
          headerLeft: ({ color }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginLeft: 10
              }}>
              <IconNotification
                name="notification"
                size={24}
                style={{
                  marginRight: 10
                }}
              />
              <IconSearch
                name="search"
                size={24}
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
                marginRight: 10
              }}>
              <IconFavorite
                name="favorite-outline"
                size={28}
                style={{
                  marginRight: 10
                }} />
              <IconCart name="handbag" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Product Detail"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menuu"
        component={Menu}
        options={{
          title: 'Menu',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1
          },
          headerTintColor: '#8D6E63',
          headerTitleStyle: {
            textAlign: 'center',
            flexGrow: 1,
            alignSelf: 'center',
            fontSize: 28,
            fontWeight: 'bold'
          },
          headerRight: ({ color }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginRight: 15
              }}>
              <IconFavorite
                name="favorite-outline"
                size={28}
                style={{
                  marginRight: 10
                }} />
              <IconCart name="handbag" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Star_rating"
        component={Star_rating}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};
export default function HomeNavigator() {
  return <MyStack />;
}
