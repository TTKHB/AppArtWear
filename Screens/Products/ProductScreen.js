import React, { useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  RefreshControl,
} from 'react-native';
import { format } from '../../utils/Methods';
//API
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import LoaderHome from '../../components/Home/Loader/LoaderHome';
import ProductFlashSale from '../../components/Home/ProductFlashSale';
import SearchHangDau from '../../components/Home/SearchHangDau';
import SearchPhoBien from '../../components/Home/SearchPhoBien';
import CountDown from '../../components/Home/CountDown';
import IconRight from 'react-native-vector-icons/Entypo';
import SwiperHeader from '../../components/Home/SwiperHeader';
import SwiperBody from '../../components/Home/SwiperBody';
import SwiperItemBody from '../../components/Home/SwiperItemBody';
import Carousel from 'react-native-snap-carousel';
import { DataQuangCao } from '../../components/Home/ItemHome';
const SLIDER_WIDTH = Dimensions.get('window').width + 10;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const { height, width } = Dimensions.get('window');

// trang home
const ProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [flashsales, setFlashsales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    getAllProduct();
    setRefreshing(false);
  }, []);
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      // Products
      getAllProduct();
      getAllProductFlashSale();
      return () => {
        setProducts([]);

      };
    }, []),
  );

  const getAllProduct = () => {
    axios
      .get(`${baseURL}products`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Api call error');
      });
  };
  const getAllProductFlashSale = () => {
    axios
      .get(`${baseURL}products`)
      .then(res => {
        setFlashsales(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Api call error');
      });
  };

  const renderItemImage = ({ item, index }) => {
    return (
      <View style={{ marginLeft: '-17%' }}>
        <View style={styles.viewPop}>
          <View style={{ flex: 1 }}>
            <Image
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'cover',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              source={item.image}
            />
          </View>
          <View style={{ margin: 7 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ fontSize: 16 }}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        {loading ? (
          <LoaderHome />
        ) : (
          <ScrollView
            style={styles.wrap}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            
            {/* banner Header */}
            <SwiperHeader />
            {/* Flash Sales */}
            <View style={styles.contentGif}>
              {/* Gift Header */}
              <View style={styles.viewBody}>
                <View style={styles.itemBody}>
                  <View style={styles.itemHeader}>
                    <Text style={styles.itemTextHeader}>Flash Sales</Text>
                  </View>
                </View>
                {/* Giờ giảm giá */}
                <View style={{ marginLeft: '18%' }}>
                  <CountDown />
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('HomeNavigator', {
                      screen: 'MenuFlashSale',
                    })
                  }>
                  <IconRight
                    style={{ marginTop: 8 }}
                    name="chevron-small-right"
                    size={24}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.itemContainer}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingLeft: 5 }}
                  data={flashsales}
                  horizontal
                  renderItem={({ item }) => (
                    <ProductFlashSale item={item} navigation={navigation} />
                  )}
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{ fontSize: 20, color: 'gray' }}>#</Text>
              <Text style={{ fontSize: 20, fontWeight: '200', fontStyle: 'normal' }}>
                Thương hiệu ArtWear
              </Text>
            </View>
            {/* banner Body */}
            <View style={styles.bannerGif}>
              <SwiperBody />
            </View>
            {/* banner Body TWO */}
            <View style={styles.bannerGifTwo}>
              <SwiperItemBody />
            </View>
            {/* Tìm kiếm hàng đầu */}
            <View
              style={{
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.flashingTitlee}>Tìm kiếm hàng đầu</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('HomeNavigator', {
                    screen: 'MenuSearchHangDau',
                  })
                }>
                <Text style={styles.flashingSubTitle}>Tất cả</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 5 }}
              data={products.sort(function (a, b) { return b.viewer - a.viewer })}
              horizontal
              renderItem={({ item }) => (
                <SearchHangDau item={item} navigation={navigation} />
              )}
            />
            {/* Tim kiem pho bien */}
            <View style={styles.flashing}>
              <Text style={styles.flashingTitlee}>Tìm kiếm phổ biến</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('HomeNavigator', {
                    screen: 'MenuSearchPhoBien',
                  })
                }>
                <Text style={styles.allPopularSearch}>Tất cả</Text>
              </TouchableOpacity>
            </View>
         
              <View style={{ marginTop: 5 }}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={products}
                  horizontal
                  keyExtractor={item => item._id}
                  renderItem={({ item }) => (
                    <SearchPhoBien item={item} navigation={navigation} />
                  )}
                />
              </View>
       
            {/* Có thể bạn quan tâm */}
            <View style={{ height: 280, marginTop: 5 }}>
              <View>
                <Text style={styles.textBox}>Có thể bạn quan tâm</Text>
              </View>
              <View>
                <Carousel
                  data={DataQuangCao}
                  renderItem={renderItemImage}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                />
              </View>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrap: {
    flex: 1,
    padding: 10,
  },
  headerTitle: {
    width: '70%',
  },
  headerCart: {},
  heading: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
  },

  buttonCart: {
    backgroundColor: '#FfFFFF',
    padding: 12,
    height: 50,
    width: 50,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  listItemType: {
    flexDirection: 'row',
  },
  flashing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  flashingTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 37,
    marginLeft: 4,
    color: '#8D6E63',
  },
  flashingTitlee: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 4,
    color: '#8D6E63',
  },
  flashingSubTitle: {
    fontSize: 15,
    color: 'black',
    marginTop: 0,
    marginRight: 10,
  },
  contentGif: {
    borderRadius: 15,
    marginTop: 15,
  },
  itemContainer: {
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    marginTop: -10,
  },
  itemTextHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 4,
    color: '#8D6E63',
  },
  bannerGif: {
    height: height / 6,
    resizeMode: 'contain',
  },
  bannerGifTwo: {
    height: height / 6,
    resizeMode: 'contain',
    marginTop: 10,
  },
  imageGif: {
    width: width,
    height: height / 3,
  },
  allPopularSearch: {
    fontSize: 15,
    color: 'black',
    marginTop: 8,
    marginRight: 14,
  },

  textBox: {
    marginLeft: 20,
    marginTop: 10,
    color: '#384F7D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewPopSearch: {
    height: 250,
    backgroundColor: "white",
    elevation: 2,
    width: width / 2.24,
    marginVertical: 5,
    marginHorizontal:5
  },
  viewPop: {
    height: height / 4.8,
    width: width / 1.5,
    elevation: 5,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  textBox: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 10,
    color: '#8D6E63',
  },
  viewBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ProductScreen;
