import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';

const Toast = {
  showWithText: toast => {
    ToastAndroid.showWithGravityAndOffset(
      toast,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  },
};
export default Toast;
