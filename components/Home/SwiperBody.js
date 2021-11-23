import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
const {height, width} = Dimensions.get('window');

// thể loại
const SwiperBody = () => {
  return (
    <View style={styles.bannerGif}>
      <Swiper autoplay autoplayTimeout={2.0} horizontal={true}>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/Banner/banner4.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/Banner/banner5.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/Banner/banner6.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  bannerGif: {
    height: height / 6,
    resizeMode: 'contain',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    marginTop: 10,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
export default SwiperBody;
