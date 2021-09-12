import React from 'react';
import {
    View,
    StyleSheet,
    Image
}
    from 'react-native';
import Swiper from 'react-native-swiper';
// thể loại
const SwiperHeader = () => {
    return (
        <View style={styles.slideConainer}>
            <Swiper autoplay horizontal={true}>
                <View style={styles.slide}>
                    <Image
                        source={require('../../assets/images/Banner/banner1.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../assets/images/Banner/banner2.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../assets/images/Banner/banner3.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                    />
                </View>
            </Swiper>
        </View>
    );
};
const styles = StyleSheet.create({
    slideConainer: {
        height: 190,
        width: '100%',
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 2,
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
        marginTop: 10
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
})
export default SwiperHeader;