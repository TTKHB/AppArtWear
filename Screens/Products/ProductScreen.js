import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Category from '../../components/Home/Category';
import furnitures from '../../assets/data/furnitures';
import Product from '../../components/Home/Product';
import SeacrchProduct from '../../components/Home/SeacrchProduct';
import CountDown from '../../components/Home/CountDown';
import IconRight from 'react-native-vector-icons/Entypo';
import { DATA } from '../../assets/data/PopularSearch';
import SwiperHeader from '../../components/Home/SwiperHeader';
import SwiperBody from '../../components/Home/SwiperBody';
import SwiperItemBody from '../../components/Home/SwiperItemBody';

import Carousel from 'react-native-snap-carousel';
import { DataQuangCao } from '../../components/Home/ItemHome';
const SLIDER_WIDTH = Dimensions.get('window').width + 10
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const { height, width } = Dimensions.get('window');

// trang home
const ProductScreen = ({ navigation }) => {
  const renderItemPhoBien = ({ item, index }) => {
    return (
      <View style={styles.viewPopSearch}>
        <View style={{ flex: 2 }}>
          <Image
            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            source={item.image} />
        </View>
        <View style={{}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'red' }}>{item.price}</Text>
        </View>
      </View>

    );
  }
  const renderItemImage = ({ item, index }) => {
    return (
      <View style={{ marginLeft: '-17%' }}>
        <View style={styles.viewPop}>
          <View style={{ flex: 1 }}>
            <Image
              style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
              source={item.image} />
          </View>
          <View style={{ margin: 7 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ fontSize: 16 }}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.wrap}>
          {/* thể loại */}
          <Category />
          {/* banner Header */}
          <SwiperHeader />
          {/* Flash Sales */}
          <View style={styles.contentGif}>
            {/* Gift Header */}
            <View style={styles.viewBody}>
              <View style={styles.itemBody}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTextHeader} >Flash Sales</Text>
                </View>
              </View>
              <View style={{ marginLeft: '18%' }}>
                <CountDown />
              </View>
              <View>
                <IconRight style={{ marginTop: 8 }} name="chevron-small-right" size={24} />
              </View>
            </View>
            <View style={styles.itemContainer}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 5 }}
                data={furnitures}
                horizontal
                renderItem={({ item }) => <Product furniture={item}
                />}
              />
            </View>
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
          <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.flashingTitlee}>Tìm kiếm hàng đầu</Text>
            <TouchableOpacity>
              <Text style={styles.flashingSubTitle}>Tất cả</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 5 }}
            data={furnitures}
            horizontal
            renderItem={({ item }) => <SeacrchProduct furniture={item} navigation={navigation} />}
          />
          {/* Tim kiem pho bien */}
          <View style={styles.flashing}>
            <Text style={styles.flashingTitlee}>Tìm kiếm phổ biến</Text>
            <TouchableOpacity>
              <Text style={styles.allPopularSearch}>Tất cả</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewDanhMuc}>
            <View style={{ marginTop: 5 }}>
              <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                data={DATA} //set Data
                renderItem={renderItemPhoBien}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
          {/* Có thể bạn quan tâm */}
          <View style={{ height: 280, marginTop: 5 }}>
            <View>
              <Text style={styles.textBox}>Có thể bạn quan tâm</Text>
            </View>
            <View >
              <Carousel
                data={DataQuangCao}
                renderItem={renderItemImage}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
              />
            </View>
          </View>
        </ScrollView>
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
    marginTop: 15
  },
  flashingTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 37,
    marginLeft: 4,
    color: '#8D6E63'
  },
  flashingTitlee: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 4,
    color: '#8D6E63'
  },
  flashingSubTitle: {
    fontSize: 15,
    color: 'black',
    marginTop: 0,
    marginRight: 10
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
  },
  itemTextHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 4,
    color: '#8D6E63'
  },
  bannerGif: {
    height: height / 6,
    resizeMode: 'contain',
  },
  bannerGifTwo: {
    height: height / 6,
    resizeMode: 'contain',
    marginTop: 10
  },
  imageGif: {
    width: width,
    height: height / 3,
  },
  allPopularSearch: {
    fontSize: 15,
    color: 'black',
    marginTop: 8,
    marginRight: 14
  },

  viewDanhMuc: {
    width: 500,
  },
  textBox: {
    marginLeft: 20,
    marginTop: 10,
    color: '#384F7D',
    fontSize: 20,
    fontWeight: 'bold'
  },
  viewPopSearch: {
    height: 250,
    width: 150,
    margin: 10,
  },
  viewPop: {
    height: height / 4.8,
    width: width / 1.5,
    elevation: 5,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#fff'
  },
  textBox: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 10,
    color: '#8D6E63'
  },
  viewBody: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
});
export default ProductScreen;