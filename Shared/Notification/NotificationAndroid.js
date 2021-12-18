import React from 'react';
import {View, Text} from 'react-native';
import PushNotification from 'react-native-push-notification';
import useNotificationHot from './../../hooks/Notification/NotificationType/useNotificationHot';

export const NotificationAndroid = {
  Status: {
    SENDING: 1,
    RECEIVED: 2,
    NORMAL: 3,
  },
  removeAllDeliveredNotifications: () => {
    PushNotification.removeAllDeliveredNotifications();
  },

  initNotification: ({navigation}) => {
    // Must be outside of any component LifeCycle (such as `componentDidMount`).
    PushNotification.configure({
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: async function (notification) {
        console.log('NOTIFICATION:', notification);

        // navigation.navigate('NotificationHotScreen');

        // process the notification
        navigation.navigate('UserNavigator', {
          screen: 'NotificationHotScreen',
        });

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
      channelId: channelId,
      title: title,
      message: message,
      largeIconUrl: largeIconUrl
        ? largeIconUrl
        : 'https://banner2.cleanpng.com/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg',
      smallIcon: 'ic_test',
      // largeIcon: 'ic_test',
      // largeIcon: 'avatartest',
    });
  },
  createChannel: ({channelId, channelName}) => {
    PushNotification.createChannel(
      {
        channelId: channelId, // (required)
        channelName: channelName, // (required)
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  },
  checkExists: ({channelId}) => {
    let isExist;
    PushNotification.channelExists(channelId, function (exists) {
      isExist = exists;
      console.log(
        '🚀 ~ file: NotificationAndroid.js ~ line 60 ~ exists',
        exists,
      );
    });

    return isExist;
  },
};

export default NotificationAndroid;
