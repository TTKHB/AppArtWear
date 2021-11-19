import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  Modal,
} from 'react-native';
import { Header, Icon, Avatar, Badge, withBadge } from 'react-native-elements';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import CheckOutItem from '../../components/Checkout/CheckOutItem';
import MyCheckOut from '../../components/Checkout/myCheckOut';
import IconFavorite from 'react-native-vector-icons/MaterialIcons';

import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import { useLogin } from '../../Context/LoginProvider';

import { styles } from '../../components/Cart/ItemCart';

import DialogCart from '../../components/Cart/DialogCart';

const CartScreen = ({ navigation }) => {
  const { isLoggedIn, profile } = useLogin();
  const [cartList, setcartList] = useState([]);
  const itemsPrice = cartList.reduce((a, c) => a + c.amount * c.product_id.gia, 0,);

  const [products, setProducts] = useState([]);

  // get all cart bang id user
  useFocusEffect(
    useCallback(() => {
      // Products
      axios
        .get(`${baseURL}carts/user/` + profile._id)
        .then(res => {
          setcartList(res.data);
        })
        .catch(error => {
          console.log('Api call error');
        });

      return () => {
        setcartList([]);
      };
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      // Products
      axios
        .get(`${baseURL}products`)
        .then(res => {
          setProducts(res.data);
        })
        .catch(error => {
          console.log('Api call error');
        });

      return () => {
        setProducts([]);
      };
    }, []),
  );

  //Diglog onClick
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  }

  //RenderItem Cart
  const renderItem = ({ item }) => {
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
            onPress: () => DeleteCart(item._id),
          },
        ],
      );
    };
    // Delete Cart
    const DeleteCart = _id => {
      //delete an item from state array
      changeModalVisible(true)
      let filterArray = cartList.filter((val, i) => {
        if (val._id !== _id) {
          return val;
        }
      });
      axios
        .delete(`${baseURL}carts/` + item._id)
        .then(function (response) {
          console.log(response);
          if (response) {
            setTimeout(() => {
              changeModalVisible(false)
              setcartList(filterArray);
            }, 3000)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const onChangeQual = (item, type) => {
      const dataCar = item._id;
      if (type) {
        const congSoLuong = cartList.map(item => {
          if (item._id == dataCar) {
            item.amount += 1;
            return item;
          }
          return item;
        });
        fetch(`${baseURL}carts/` + item._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: item.amount,
          }),
        })
          .then(res => res.json())
          .then(data => {
            setcartList(congSoLuong);
            console.log('is Update successffly!!', data.amount);
          })
          .catch(err => {
            console.log('error', err);
          });
      } else if (type == false) {
        const truSoLuong = cartList.map(item => {
          if (item._id == dataCar) {
            item.amount -= 1;
            if (item.amount < 1) {
              console.log('end game');
              item.amount = 1;
              showConfirmDialog();
            }
            return item;
          }
          return item;
        });
        fetch(`${baseURL}carts/` + item._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: item.amount,
          }),
        })
          .then(res => res.json())
          .then(data => {
            setcartList(truSoLuong);
            console.log('is Update successffly!!', data.amount);
          })
          .catch(err => {
            console.log('error', err);
          });
      }
    };

    return (
      <View style={styles.FlatListStyle} key={item._id}>
        <View style={styles.viewCart}>
          <Image
            style={styles.imageCart}
            source={{ uri: item.product_id ? item.product_id.ThumbImg : ' ' }}
          />
          {/* Item name, price,... */}
          <View style={styles.itemCart}>
            <Text style={styles.textItemName}>
              {item.product_id ? item.product_id.ten : ' '}
            </Text>
            <Text style={styles.textItemPrice}>
              {item.product_id ? item.product_id.gia.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.') : ' '} VNĐ
            </Text>
            {/* + - */}
            <View style={styles.itemAmount}>
              <TouchableOpacity onPress={() => onChangeQual(item, false)}>
                <Text style={styles.textItemAmount}>-</Text>
              </TouchableOpacity>
              <Text>{item.amount}</Text>
              <TouchableOpacity onPress={() => onChangeQual(item, true)}>
                <Text style={styles.textItemAmount}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Delete Cart */}
        <TouchableOpacity
          style={styles.btnDeleteCart}
          onPress={showConfirmDialog}>
          <Image source={require('../../assets/icon/bin.jpg')} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderSanphamQuanTam = ({ item }) => {
    return (
      <View
        style={styles.viewSpQuanTam}
        key={item._id}
      >
        <TouchableOpacity style={styles.boxSpQuanTam}>
          <Image
            style={styles.imageSpQuanTam}
            source={{ uri: item.ThumbImg ? item.ThumbImg : null }}
          />
          <Text style={styles.priceSp}>
            {item.gia} VNĐ
          </Text>
          <Text
            style={styles.priceSale}>
            {item.giacu} VNĐ
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.Container}
        centerComponent={{
          text: 'Giỏ hàng của tôi',
          style: {
            color: '#8D6E63', textAlign: 'center',
            alignSelf: 'center',
            fontSize: 25,
            fontWeight: 'bold'
          }
        }
        }
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name="angle-left"
              size={25}
              type="font-awesome"
              color="#000000"
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        }
        rightComponent={
          <View
            style={styles.rightComponent}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UserNavigator', { screen: 'FavoriteScreen' })
              }>
              <IconFavorite
                name="favorite-outline"
                size={28}
                style={styles.IconFavorite}
              />
            </TouchableOpacity>
            {isLoggedIn ? (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CartNavigator', { screen: 'Cart' })
                  }>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 0 }}>
                      <IconCart name="handbag" size={24} />
                    </View>
                    {cartList.length ? (
                      <>
                        <View style={{ marginLeft: -10 }}>
                          <Badge value={cartList.length} status="error" />
                        </View>
                      </>
                    ) : null}
                  </View>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UserNavigator', { screen: 'Login' })
                  }>
                  <IconCart name="handbag" size={24} />
                </TouchableOpacity>
              </>
            )}
          </View>
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Diglog when delete cart success */}
        <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          nRequestClose={() => changeModalVisible(false)}
        >
          <DialogCart />
        </Modal>


        {/* Thêm địa chỉ*/}
        <CheckOutItem
          icon="truck-outline"
          color="#00008B"
          name="Mua thêm để tận hưởng vận chuyển miễn phí"
          iconright="angle-right"
        />

        <View style={styles.content}>
          {/* Sản phẩm thanh toán của tôi */}
          <MyCheckOut icon="shop" name="Art Wear" />
          {/* View san pham */}
          <View
            style={{
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* Check cart rỗng */}
            {cartList.length === 0 && (
              <View style={styles.viewCartEmpty}>
                <Image
                  style={styles.imageCartEmpty}
                  source={require('../../assets/images/Error/ShoppingCart.jpg')}
                />
                <Text style={styles.textCartEmptyOne}>
                  Không có gì trong giỏ hàng
                </Text>
                <Text style={styles.textCartEmptyTwo}>
                  Lướt Art Wear và mua sắm nào!
                </Text>
                <TouchableOpacity
                  style={styles.viewShoppingNow}
                  onPress={() => navigation.navigate('Main')}>
                  <Text style={styles.textShoppingNow}>Mua sắm nào</Text>
                </TouchableOpacity>
              </View>
            )}
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              <FlatList
                data={cartList}
                renderItem={renderItem}
                keyExtractor={item => item._id}
              />
            </ScrollView>
          </View>
          {/* View san pham goi ý*/}
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              elevation: 2,
            }}>
            {/* Line gạch ngang */}
            <View style={styles.divider} />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Sản phẩm có thể bạn đang tìm kiếm
            </Text>
            <FlatList
              data={products}
              renderItem={renderSanphamQuanTam}
              keyExtractor={item => item._id}
              horizontal
            />
          </View>
        </View>
      </ScrollView>
      {/*Footer Button Xác nhận thanh toán ngay bây giờ */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.texttong}>Tổng thanh toán:</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* <Text style={styles.tongprice}>184.000 đ</Text> */}
          <Text style={styles.tongprice}>
            {itemsPrice.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')} VNĐ
          </Text>
          <View style={styles.btnItemOne}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CartNavigator',
                {
                  screen: 'Checkout',
                  params:
                  {
                    tongPrice: itemsPrice,
                    spGioHang: cartList,
                  }
                }
              )}>
              <Text style={styles.textItemOne}>Mua hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
