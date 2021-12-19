import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splasscreen from '../../Screens/SplashScreen/SplashScreen';
import Main from '../Main';
import UserNavigator from '../StackScreen/UserNavigator';
import HomeNavigator from '../HomeNavigator';
import CartNavigator from '../CartNavigator';
import PaymentNavigator from '../PaymentNavigator';
import ChatNavigator from '../ChatNavigator';

//Icon
import DrawerNavigator from '../DrawerNavigator';
import DetailMenu from '../../Screens/Menu/DetailMenu';
import TabView from '../TabView';
import {useLogin} from '../../Context/LoginProvider';
import {useNavigation} from '@react-navigation/native';
import useNotificationHot from './../../hooks/Notification/NotificationType/useNotificationHot';
import {NotificationAndroid} from './../../Shared/Notification/NotificationAndroid';
import PushNotification from 'react-native-push-notification';
import HotNavigator from './../HotNavigator';

const Stack = createStackNavigator();

const StackScreen = () => {
  const {loading} = useLogin();
  const {getNotificationByUser, getAllNotificationHotByUser} =
    useNotificationHot();
  const navigation = useNavigation();
  PushNotification.getChannels(function (channel_ids) {
    console.log(channel_ids); // ['channel_id_1']
  });

  setTimeout(() => {
    getAllNotificationHotByUser();
    console.log(
      '🚀 ~ file: StackScreen.js ~ line 37 ~ useEffect ~ NotificationHot',
      getNotificationByUser,
    );
    if (getNotificationByUser) {
      for (let i = 0; i < getNotificationByUser.length; i++) {
        const notifyChild = getNotificationByUser[i];

        PushNotification.channelExists(notifyChild._id, function (exists) {
          console.log('🚀 ~ file: StackScreen.js ~ line 50 ~ exists', exists);
          if (
            notifyChild.status == NotificationAndroid.Status.SENDING &&
            !exists
          ) {
            console.log('gogo');
            NotificationAndroid.createChannel({
              channelId: notifyChild._id,
              channelName: notifyChild.NotifyType_id.name,
            });
            const message =
              notifyChild.PeopleLiked && notifyChild.PeopleLiked != '0'
                ? notifyChild.wholiked.fullname +
                  ' và ' +
                  notifyChild.PeopleLiked +
                  notifyChild.NotifyType_id.content
                : notifyChild.wholiked.fullname +
                  ' ' +
                  notifyChild.NotifyType_id.content;

            NotificationAndroid.showNotifications({
              channelId: notifyChild._id,
              message: message,
              title: 'Thông báo mới',
              largeIconUrl: notifyChild.wholiked.avatar,
            });
          }
        });
      }
    }
  }, 10000);

  useEffect(() => {
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
        name="HotNavigator"
        component={HotNavigator}
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
