import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import Star from '../../components/ProductMenu/Star';
import LoaderFavorite from '../../components/Home/Loader/LoaderFavorite';
import IconSearch from 'react-native-vector-icons/Ionicons';
import IconBack from 'react-native-vector-icons/Ionicons';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Feather';
import COLORS from '../../assets/data/colors';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import { DATA } from '../../assets/data/PopularSearch';
import { useLogin } from '../../Context/LoginProvider';
const { height, width } = Dimensions.get('window');
const numColumns = 2;
const FavoriteScreen = ({ navigation, i }) => {
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const { profile } = useLogin();
  useFocusEffect(
    useCallback(() => {
      axios
        .get(`${baseURL}favorite/user/` + profile._id)
        .then(res => {
          setFavorite(res.data);
          console.log(res);
          if (loading) {
            setLoading(false);
          }
          console.log('a:', res.data);
        })
        .catch(error => {
          console.log('Api call error');
        });
      return () => {
        setFavorite([]);
      };
    }, []),
  );

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('HomeNavigator', {
            screen: 'Product Detail',
            params: { id: item._id },
          })
        }>
        <View style={styles.viewPopSearch}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={item.image} style={{ height: 170, width: '100%' }} />
          </View>
          <View style={{ marginLeft: 4 }}>
            <Text style={styles.cardName}>{item.name}</Text>
            <View style={styles.rate}>
              <Star ratings={4} reviews={100} />
            </View>
            <Text style={styles.price}>{item.price} VNĐ</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItemFavorite = ({ item, index }) => {
    const showConfirmDialog = () => {
      return Alert.alert(
        'Bạn đã chắc chắn?',
        'Bạn có chắc chắn xoá sản phẩm này chứ?',
        [
          {
            text: 'Huỷ',
          },
          {
            text: 'Đồng ý',
            onPress: () => DeleteFavorite(item._id),
          },
        ],
      );
    };

    const DeleteFavorite = _id => {
      let filterArray = favorite.filter((val, i) => {
        if (val._id !== _id) {
          return val;
        }
      });
      axios
        .delete(`${baseURL}favorite/` + item._id)
        .then(function (response) {
          setFavorite(filterArray);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    return (
      <TouchableOpacity
        style={styles.viewPopSearch}
        onPress={() =>
          navigation.navigate('HomeNavigator', {
            screen: 'Product Detail',
            params: { id: item._id },
          })
        }>
        <View style={styles.container}>
          <Image
            resizeMode="cover"
            style={styles.cover}
            source={{ uri: item.product_id ? item.product_id.ThumbImg : ' ' }}
          />
          <TouchableOpacity style={styles.close} onPress={showConfirmDialog}>
            <Ionicons name="delete" size={25} color={'red'} />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 4 }}>
          <Text style={styles.cardName}>
            {' '}
            {item.product_id ? item.product_id.ten : ' '}
          </Text>
          <View style={styles.rate}>
            <Star ratings={4} reviews={100} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.price}>
                {' '}
                {item.product_id ? item.product_id.gia : ' '} VNĐ
              </Text>
            </View>
            <TouchableOpacity style={styles.iconAddCart}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require('../../assets/icon/addcart.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <IconBack
          name="chevron-back"
          size={28}
          onPress={() => navigation.goBack()}
        />
        <IconSearch
          name="md-search-outline"
          size={28}
          style={{ marginLeft: -85 }}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Yêu thích</Text>
        <IconCart name="handbag" size={28} />
      </View>

      <SafeAreaView>
        {loading ? (
          <LoaderFavorite />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.viewBody}>
              {favorite.length === 0 && (
                <View style={styles.viewCartEmpty}>
                  <Image
                    style={styles.imageCartEmpty}
                    source={require('../../assets/images/Error/heart.png')}
                  />
                  <Text style={styles.textCartEmptyOne}>
                    Mời bạn chọn sản phẩm yêu thích
                  </Text>
                  <Text style={styles.textCartEmptyTwo}>
                    Lướt Art Wear và mua sắm nào!
                  </Text>
                  <TouchableOpacity
                    style={styles.viewShoppingNow}
                    onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.textShoppingNow}>Yêu thích</Text>
                  </TouchableOpacity>
                </View>
              )}
              <ScrollView showsVerticalScrollIndicator={false} horizontal>
                <FlatList
                  data={favorite}
                  numColumns={2}
                  scrollEnabled={false}
                  keyExtractor={item => item.id}
                  renderItem={renderItemFavorite}
                />
              </ScrollView>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  color: 'black',
                  marginLeft: 17,
                  marginTop: 25,
                  fontWeight: 'bold',
                }}>
                Sản phẩm đề xuất
              </Text>
            </View>
            <View style={styles.viewBody}>
              <ScrollView showsVerticalScrollIndicator={false} horizontal>
                <FlatList
                  numColumns={numColumns} // numColumns 2 nam ngang
                  data={DATA} //set Data
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              </ScrollView>
            </View>
            <View style={{ height: 50, backgroundColor: 'white' }}></View>
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  // Header Style
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    margin: 10,
  },
  iconHeader: {
    marginLeft: 2,
    top: 10,
  },
  iconContainer: {
    height: 30,
    width: 30,
    position: 'relative',
    marginLeft: 143,
    top: 2,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Body Style
  bodyContainer: {
    flex: 1,
  },

  rate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 3.2,
  },
  wrap: {
    flex: 1,
    padding: 10,
  },
  iconAddCart: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 10,
    marginRight: 3
  },

  viewBody: {
    marginVertical: 10,
    paddingHorizontal: 5,
    marginHorizontal: 10,
  },

  viewPopSearch: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 2,
    width: width / 2.29,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  cardName: {
    marginTop: 10,
    fontSize: 18,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  price: {
    color: COLORS.red,
    fontSize: 20,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  cover: {
    flex: 1,
    borderRadius: 5,
  },
  close: {
    margin: 5,
    position: 'absolute',
    top: 0,
    right: 0,
    width: 25,
    height: 25,
    color: 'tomato',
  },
  viewCartEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  imageCartEmpty: {
    height: 150,
    width: 150,
  },
  textCartEmptyOne: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  textCartEmptyTwo: {
    fontSize: 18,
    color: '#505050',
    marginTop: 2,
  },
  viewShoppingNow: {
    height: 50,
    width: 150,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textShoppingNow: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },
});

export default FavoriteScreen;
