import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
}
    from 'react-native';
import Swiper from 'react-native-swiper';
const { height, width } = Dimensions.get('window');

// thể loại
const SwiperBody = () => {
    return (
        <View style={styles.bannerGif}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, color: 'gray' }}>#</Text>
                <Text style={{ fontSize: 20, fontWeight: '200', fontStyle: 'normal' }}>Thương hiệu ArtWear</Text>
            </View>
            <Swiper autoplay horizontal={true}>
                <View style={styles.slide}>
                    <Image
                        source={require('../../assets/images/Banner/banner4.png')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../assets/images/Banner/banner5.png')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../../assets/images/Banner/banner6.png')}
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
        marginTop: 10
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
})
export default SwiperBody;