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
  Alert,
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
            <View style={styles.itemContainer}>
              {/* Gift Header */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTextHeader} >Flash Sales</Text>
                </View>
                <View>
                  <CountDown />
                </View>
                <View>
                  <IconRight style={{ marginTop: 8 }} name="chevron-small-right" size={24} />
                </View>
              </View>
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
          <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
            <View style={{ marginTop: 10 }}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal>
                <FlatList
                  numColumns={DATA.length / 2} // numColumns 2 nam ngang
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  data={DATA} //set Data
                  renderItem={renderItemPhoBien}
                  keyExtractor={(item, index) => index.toString()}
                />
              </ScrollView>
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
    marginTop: 10,
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
    height: height / 1.7,
    width: 500,
    backgroundColor: '#fff',
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
  }
});
export default ProductScreen;