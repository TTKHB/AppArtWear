import React from 'react';
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
import SearchHangDau from '../Screens/Products/SearchHangDau';
/**
 * Muốn thêm màn hình ở home thì them stack.screen ở dưới
 *
 */



const HomeNavigator = ({ navigation }) => {
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
                  onPress={() => navigation.navigate('UserNavigator', { screen: 'Notification' })}
                  style={{
                    marginRight: 10
                  }}

                />
              </TouchableOpacity>
              <TouchableOpacity>
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
                marginRight: 10
              }}>
              <TouchableOpacity>
                <IconFavorite
                  name="favorite-outline"
                  size={28}
                  style={{
                    marginRight: 10
                  }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconCart name="handbag" size={24} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Product Detail"
        component={ProductDetailsScreen}
        options={{
          headerBackTitleVisible: false,
          title: null,
          headerTransparent: true,
          headerTintColor: 'black',
          headerTitle: false,

          headerRight: ({ color }) => (
            <View
              style={{
                flexDirection: 'row',
                marginRight: 10
              }}>
              <TouchableOpacity>
                <IconFavorite
                  name="favorite-outline"
                  size={28}
                  style={{
                    marginRight: 10
                  }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconCart name="handbag" size={24} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="SearchHangDau"
        component={SearchHangDau}
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
        name="StarRating"
        component={StarRating}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};
// export default function HomeNavigator({navigation}) {
//   return <MyStack />;
// }

export default HomeNavigator;