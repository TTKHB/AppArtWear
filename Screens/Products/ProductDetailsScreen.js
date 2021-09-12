import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Animated from 'react-native-reanimated'
import SeacrchProduct from '../../components/Home/SeacrchProduct';
import DropDownItem from "react-native-drop-down-item";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../assets/data/colors';
import Danhgia from '../../components/ProductMenu/Danhgia';
import furnitures from '../../assets/data/furnitures';
import { LogBox } from 'react-native';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
//  detail
const ProductDetailsScreen = ({ item, navigation }) => {
  const background = item.background;

  LogBox.ignoreAllLogs();

  Animated.timing(new Animated.Value(0), {
    toValue: 1,
    duration: 500,
    useNativeDriver: true, // Add this line
  }).start();

  return (
    <View style={[styles.container, { backgroundColor: COLORS.white }]}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Icon name="keyboard-arrow-left" size={30} color={COLORS.black} />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconCart name="handbag" size={30} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <Animated.ScrollView style={{ alignSelf: 'stretch' }}
      >

        <View style={styles.imgContainer}>
          <Image source={item.image} style={{ width: 220, height: 220 }} />
        </View>

        <View style={styles.detailsContainer}>

          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>{item.price}vnđ</Text>

          {/* đánh giá */}
          <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            top: -45
          }}
            onPress={() => navigation.navigate('Star_rating')}
          >
            <Danhgia />
            <Danhgia />
            <Danhgia />
            <Danhgia />
            <Danhgia />

          </TouchableOpacity>

          <View style={styles.flashing}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Màu </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, left: -30 }}>
              Kích cỡ
            </Text>
          </View>


          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.colorContainer}>
              <View
                style={[
                  styles.sizeCircleContainer,
                  { backgroundColor: COLORS.red },
                ]}></View>
              <View
                style={[
                  styles.sizeCircleContainer,
                  { backgroundColor: COLORS.black },
                ]}></View>
              <View
                style={[
                  styles.sizeCircleContainer,
                  { backgroundColor: COLORS.grey },
                ]}></View>
            </View>

            <View style={styles.sizesContainer}>
              <View
                style={[
                  styles.sizeCircleContainer,
                  { backgroundColor: COLORS.light },
                ]}>
                <Text style={{ fontWeight: 'bold' }}>S</Text>
              </View>
              <View style={styles.sizeCircleContainer}>
                <Text style={{ fontWeight: 'bold' }}>M</Text>
              </View>
              <View style={styles.sizeCircleContainer}>
                <Text style={{ fontWeight: 'bold' }}>L</Text>
              </View>
            </View>
          </View>

          <DropDownItem
            key={item}
            style={styles.dropDownItem}
            contentVisible={false}
            header={
              <Text style={styles.mota}>Mô tả</Text>
            }
          >
            <Text style={styles.descriptionText}>{item.description}</Text>
          </DropDownItem>
          <Text style={styles.mota}>Sản phẩm </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 5 }}
            data={furnitures}
            horizontal
            renderItem={({ item }) => <SeacrchProduct furniture={item} navigation={navigation} />}
          />
        </View>
      </Animated.ScrollView>


      {/* Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={[
            styles.btnContainer,
            { marginRight: 10, borderColor: background },
          ]}>
          <Icon name="favorite" size={30} color={COLORS.red} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnContainer,
            { flex: 1, backgroundColor: background, borderColor: background },
          ]}>
          <Text style={styles.btnText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>

    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flashing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    height: 80,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  badgeContainer: {
    top: -4,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: COLORS.white,
  },
  badgeText: {
    color: COLORS.black,
  },
  imgContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white,
    borderWidth: 0.2,
    borderTopColor: COLORS.black,
  },
  colorContainer: {
    flexDirection: 'row',
    top: 2,
  },
  sizesContainer: {
    flexDirection: 'row',
    marginLeft: 110,
    top: 2,
  },
  sizeCircleContainer: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.black,
    fontWeight: 'bold',
    borderWidth: 0.2,
    backgroundColor: COLORS.white,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  priceText: {
    fontSize: 15,
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 15,
    color: '#708090',
  },
  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  btnContainer: {
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  mota: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5
  },
});

export default ProductDetailsScreen;
