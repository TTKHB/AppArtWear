import React from 'react';
import {View, Text} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {useNavigation} from '@react-navigation/native';

export const NotificationAndroid = {
  initNotification: ({navigation}) => {
    // Must be outside of any component LifeCycle (such as `componentDidMount`).
    PushNotification.configure({
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: async function (notification) {
        console.log('NOTIFICATION:', notification);
        // process the notification
        navigation.navigate('DrawerNavigator', {screen: 'ProductMenu'});

        // (required) Called when a remote is received or opened, or local notification is opened
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION ACTION:', notification);

        // process the action
      },

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: Platform.OS === 'ios',
    });
  },
  showNotifications: ({channelId, title, message, largeIconUrl}) => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'you clicked on ',
      message: 'tets city',
      largeIconUrl:
        'https://banner2.cleanpng.com/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg',
      // largeIcon: 'ic_test',
      // largeIcon: 'avatartest',
      // smallIcon: 'avatartest',
    });
  },
  createChannel: ({channelId, channelName}) => {
    PushNotification.createChannel(
      {
        channelId: 'test-channel', // (required)
        channelName: 'My channel', // (required)
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  },
};

export default NotificationAndroid;
