import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoaderAuthen = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      {/* Ảnh LottieView dạng json (Giống ảnh Gif) */}
      <LottieView
        source={require('../../../assets/icon/Loader/68800-loader-icon.json')}
        autoPlay loop
        style={styles.imageLoader}
      />
    </View>
  );
};

export default LoaderAuthen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1
  },
  imageLoader: {
    height: 125,
    width: 125,
  }
});