import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
const {height, width} = Dimensions.get('window');

// thể loại
const SwiperItemBody = () => {
  return (
    <View style={styles.bannerGifTwo}>
      <Swiper autoplay autoplayTimeout={2.5} horizontal={true}>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/Banner/banner7.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/Banner/banner8.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/Banner/banner9.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  bannerGifTwo: {
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
export default SwiperItemBody;
