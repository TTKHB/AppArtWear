import React, {useState, useEffect} from 'react';
import {View, Image, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Splasscreen from '../../Screens/SplashScreen/SplashScreen';
import Main from '../Main';
import UserNavigator from '../StackScreen/UserNavigator';
import HomeNavigator from '../HomeNavigator';
import CartNavigator from '../CartNavigator';
import ProductMenu from '../../Screens/Menu/ProductMenu';
import PaymentNavigator from '../PaymentNavigator';
import ChatNavigator from '../ChatNavigator';

//Icon
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import IconFavorite from 'react-native-vector-icons/MaterialIcons';
import IconSearch from 'react-native-vector-icons/Octicons';
import IconNotification from 'react-native-vector-icons/AntDesign';
import DrawerNavigator from '../DrawerNavigator';
import DetailMenu from '../../Screens/Menu/DetailMenu';
import TabView from '../TabView';
import {useLogin} from '../../Context/LoginProvider';
import {useNavigation} from '@react-navigation/native';
import useNotificationHot from './../../hooks/Notification/NotificationType/useNotificationHot';
import {NotificationAndroid} from './../../Shared/Notification/NotificationAndroid';

const Stack = createStackNavigator();

const StackScreen = () => {
  const {loading} = useLogin();
  const {NotificationHot, getAllNotificationHot} = useNotificationHot();
  const navigation = useNavigation();

  useEffect(() => {}, []);

  useEffect(() => {
    NotificationAndroid.createChannel({});
    NotificationAndroid.initNotification({navigation});

    // NotificationAndroid.initNotification({navigation});
  }, []);

  return (
    <Stack.Navigator>
      {!loading ? (
        <Stack.Screen
          name="SplashScreen"
          component={Splasscreen}
          options={{header: () => null}}
        />
      ) : null}

      <Stack.Screen
        name="Main"
        component={Main}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="UserNavigator"
        component={UserNavigator}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="CartNavigator"
        component={CartNavigator}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="DetailMenu"
        component={DetailMenu}
        options={{
          headerBackTitleVisible: false,
          title: null,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitle: false,
        }}
      />
      <Stack.Screen
        name="TabView"
        component={TabView}
        options={{
          title: 'Đơn hàng của tôi',
          headerStyle: {
            backgroundColor: 'white',
            borderColor: '#F5F5F5',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="PaymentNavigator"
        component={PaymentNavigator}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="ChatNavigator"
        component={ChatNavigator}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
