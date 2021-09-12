import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
  SafeAreaView,
} from 'react-native';
import GiamGiaForm from '../../../components/Profile/UuDai/GiamGiaForm';
import VoucherForm from '../../../components/Profile/UuDai/VoucherForm';
import VoucherHeader from '../../../components/Profile/UuDai/VoucherHeader';
import VoucherSelectorBtn from '../../../components/Profile/UuDai/VoucherSelectorBtn';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const UuDaiUser = ({ navigation }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();
  const voucherHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],

  })
  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 100],
  });

  const giamgiaHeadingTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -50],
  });

  const voucherHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });

  const VoucherColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)'],
  });
  const GiamGiaColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)'],
  });
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SafeAreaView style={styles.headerWrapper}>
        <View style={styles.splash}>
          <VoucherHeader
            leftHeading="Chọn"
            voucherHeading=" phiếu mua hàng"
            giamgiaHeading=" các sản phẩm giảm giá"
            voucherHeaderOpacity={voucherHeaderOpacity}
            leftHeaderTranslateX={leftHeaderTranslateX}
            voucherHeaderTranslateY={voucherHeaderTranslateY}
            giamgiaHeadingTranslateX={giamgiaHeadingTranslateX}
          />
        </View>
      </SafeAreaView>

      <View style={styles.SelectorBtn}>
        <View style={{ flexDirection: 'row', padding: 15 }}>
          <VoucherSelectorBtn style={styles.borderLeft}
            backgroundColor={VoucherColorInterpolate}
            title="Phiếu mua hàng"
            onPress={() => scrollView.current.scrollTo({ x: 0 })} />
          <VoucherSelectorBtn style={styles.borderRight}
            backgroundColor={GiamGiaColorInterpolate}
            title="Giảm giá độc"
            onPress={() => scrollView.current.scrollTo({ x: width })} />
        </View>
        <View style={styles.close}>
          <View>
            <LottieView style={styles.LottieViewVoucher}
              source={require('../../../assets/icon/9750-gift.json')}
              autoPlay loop
            />
          </View>
          <View>
            <LottieView style={styles.LottieViewGiamGia}
              source={require('../../../assets/icon/39226-cart.json')}
              autoPlay loop
            />
          </View>
        </View>
      </View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: animation } } }], { useNativeDriver: false })}
      >
        <VoucherForm />
        <GiamGiaForm />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  borderLeft: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  borderRight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },

  SelectorBtn: {
    marginTop: -40,
    margin: 5,
  },
  cover: {
    flex: 1,
    borderRadius: 5
  },
  close: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: 220
  },

  LottieViewVoucher: {
    margin: 5,
    position: "absolute",
    width: 70,
    height: 70,
    marginTop: -55,
  },

  LottieViewGiamGia: {
    margin: 5,
    position: "absolute",
    width: 70,
    height: 70,
    marginTop: -55,
    marginLeft: 75
  },

  headerWrapper: {
    backgroundColor: '#FFFCF2',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  splash: {
    paddingTop: 50,
    paddingBottom: 80,

  },
})
export default UuDaiUser;




