import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
//screen
import ProductScreen from './../Screens/Products/ProductScreen';
import ProductDetailsScreen from './../Screens/Products/ProductDetailsScreen';
import StarRating from '../components/ProductMenu/StarRating';
//Icon
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import IconFavorite from 'react-native-vector-icons/MaterialIcons';
import IconSearch from 'react-native-vector-icons/Octicons';
import IconNotification from 'react-native-vector-icons/AntDesign';
import Notification from '../Screens/Notification/Notification';
import MenuSearchHangDau from '../Screens/Products/MenuSearchHangDau';
import MenuFlashSale from '../Screens/Products/MenuFlashSaleScreen';
import MenuSearchPhoBien from '../Screens/Products/MenuSearchPhoBien';
/**
 * Muốn thêm màn hình ở home thì them stack.screen ở dưới
 *
 */
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../assets/common/baseUrl';
import { useLogin } from '../Context/LoginProvider';

const HomeNavigator = ({ navigation }) => {
  const { isLoggedIn, profile } = useLogin();
  const [cartItems, setCartItems] = useState([]);
  useFocusEffect(
    useCallback(() => {
      // Products
      axios
        .get(`${baseURL}carts/user/` + profile._id)
        .then(res => {
          setCartItems(res.data);
        })
        .catch(error => {
          console.log('Api call error');
        });

      return () => {
        setCartItems([]);
      };
    }, []),
  );

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
            alignSelf: 'center',
            fontSize: 28,
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
          headerLeft: ({ color }) => (
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10
              }}>
              <TouchableOpacity >
                <IconNotification
                  name="notification"
                  size={24}
                  onPress={() => navigation.navigate('UserNavigator', { screen: 'MessagScreen' })}
                  style={{
                    marginRight: 10
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => navigation.navigate('UserNavigator', { screen: 'SearchScreen' })}
              >
                <IconSearch
                  name="search"
                  size={24}
                  style={{
                    marginTop: 2
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
            headerRight: ({ color }) => (
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 10,
                }}>
              {isLoggedIn ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate('UserNavigator', { screen: 'FavoriteScreen' })}
                >
                  <IconFavorite
                    name="favorite-outline"
                    size={28}
  
                    style={{
                      marginRight: 10
                    }} />
               
                </TouchableOpacity>
                     ):(

                <TouchableOpacity
                  onPress={() => navigation.navigate('UserNavigator', { screen: 'Login' })}
                >
                  <IconFavorite
                    name="favorite-outline"
                    size={28}
  
                    style={{
                      marginRight: 10
                    }} />
                    </TouchableOpacity>
               )}
                {isLoggedIn ? (
                  <>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('CartNavigator', { screen: 'Cart' })}
                    >
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight: -8 }}>
                          <IconCart name="handbag" size={24} />
                        </View>
                        <View style={{
                          backgroundColor: 'red',
                          height: 20,
                          width: 20,
                          borderRadius: 20,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                          <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            {cartItems.length ? (
                              <Text >{cartItems.length}</Text>
                            ) : (
                              <Text>0</Text>
                            )}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('UserNavigator', { screen: 'Login' })}
                    >
                      <IconCart name="handbag" size={24} />
                    </TouchableOpacity>
                  </>
                )}
              </View>
            ),
          }}
      />
      <Stack.Screen
        name="Product Detail"
        component={ProductDetailsScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="MenuSearchHangDau"
        component={MenuSearchHangDau}
        options={{
          title: 'Tìm kiếm hàng đầu',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1
          },
          headerTintColor: '#8D6E63',
          headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 28,
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
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
                  marginRight: 5
                }} />
              <IconCart name="handbag" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="MenuSearchPhoBien"
        component={MenuSearchPhoBien}
        options={{
          title: 'Tìm kiếm phổ biến',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1
          },
          headerTintColor: '#8D6E63',
          headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 28,
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
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
                  marginRight: 5
                }} />
              <IconCart name="handbag" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="MenuFlashSale"
        component={MenuFlashSale}
        options={{
          title: 'Flash Sale',
          headerStyle: {
            backgroundColor: '#fff',
            borderColor: '#F5F5F5',
            borderWidth: 1
          },
          headerTintColor: '#8D6E63',
          headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 28,
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
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
                  marginRight: 5
                }} />
              <IconCart name="handbag" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="StarRating"
        component={StarRating}
       options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;