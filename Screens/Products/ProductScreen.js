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
  Alert
} from 'react-native';
import COLORS from '../../assets/data/colors';
import Swiper from 'react-native-swiper';
import SearchBar from '../../components/Home/SearchBar';
import Category from '../../components/Home/Category';
import furnitures from '../../assets/data/furnitures';
import Product from '../../components/Home/Product';
import SeacrchProduct from '../../components/Home/SeacrchProduct';
import PopularItemCard from '../../components/Home/PopularItemCard';
import Danhmuc from '../../components/Home/Danhmuc';
import CountDown from '../../components/Home/CountDown';

// trang home

const ProductScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>

        <ScrollView style={styles.wrap} showsVerticalScrollIndicator={true}>
          {/* thể loại */}
          <Category />
          {/* banner */}
          <View style={styles.slideConainer}>
            <Swiper autoplay horizontal={true}>
              <View style={styles.slide}>
                <Image
                  source={require('../../assets/data/banner1.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('../../assets/data/banner2.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('../../assets/data/banner3.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
            </Swiper>
          </View>

          {/* Flash Sales */}
          <View style={styles.flashing}>
            <Text style={styles.flashingTitle}>Flash Sales</Text>
            <CountDown />
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
            >
              <Text style={styles.flashingSubTitle}>Tất cả</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20 }}
            data={furnitures}
            horizontal
            renderItem={({ item }) => <Product furniture={item}
            />}
          />

          {/* Tìm kiếm hàng đầu */}
          <View style={styles.flashing}>
            <Text style={styles.flashingTitlee}>Tìm kiếm hàng đầu</Text>
            <TouchableOpacity>
              <Text style={styles.flashingSubTitle}>Tất cả</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20 }}
            data={furnitures}
            horizontal
            renderItem={({ item }) => <SeacrchProduct furniture={item} navigation={navigation} />}
          />


          {/* Tim kiem pho bien */}
          <View style={styles.flashing}>
            <Text style={styles.flashingTitlee}>Tìm kiếm phổ biến</Text>
          </View>

          <FlatList
            numColumns={2}
            data={furnitures}
            renderItem={({ item }) => <PopularItemCard furniture={item} />}
          />
          {/* Danh muc  */}
          <Danhmuc />
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
    padding: 14,
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

  //baner
  slideConainer: {
    height: 190,
    width: '100%',
    marginTop: 7,
    justifyContent: 'center',
    borderRadius: 2,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  listItemType: {
    flexDirection: 'row',
  },

  flashing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flashingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.red,
  },
  flashingTitlee: {
    fontSize: 20,
    color: COLORS.red,
  },
  flashingSubTitle: {
    fontSize: 15,
    // fontWeight: 'bold',
  },
});

export default ProductScreen;