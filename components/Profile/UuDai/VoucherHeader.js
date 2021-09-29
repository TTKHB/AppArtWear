import React from 'react';
import {
  View,
  StyleSheet,
  Animated
} from 'react-native';

const VoucherHeader = ({
  leftHeading,
  voucherHeading,
  giamgiaHeading,
  leftHeaderTranslateX = 40,
  voucherHeaderTranslateY = -20,
  voucherHeaderOpacity = 0,
  giamgiaHeadingTranslateX = 40,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.heading,
            { transform: [{ translateX: leftHeaderTranslateX }] },
          ]}
        >
          {leftHeading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity: voucherHeaderOpacity,
              transform: [{ translateY: voucherHeaderTranslateY }],
            },
          ]}
        >
          {voucherHeading}
        </Animated.Text>


        <Animated.Text
          style={[
            styles.heading,
            { transform: [{ translateX: giamgiaHeadingTranslateX }] },
          ]}
        >
          {giamgiaHeading}
        </Animated.Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black'
  },
});

export default VoucherHeader;