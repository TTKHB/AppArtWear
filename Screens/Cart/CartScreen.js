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
  Dimensions
}
  from 'react-native';
import CheckOutItem from '../../components/Checkout/CheckOutItem';
import MyCheckOut from '../../components/Checkout/myCheckOut';
const artwear = require('../../assets/images/dragon.png');

export const ao = require('../../assets/images/Ao3.jpg');
export const back = require('../../assets/images/back.png');
export const ao2 = require('../../assets/images/Ao2.jpg');
export const close = require('../../assets/images/close.png');
export const coin = require('../../assets/images/coin.png');
export const money = require('../../assets/images/money.png');
export const cart = require('../../assets/images/cart.png');
export const aothun = require('../../assets/images/aothun.jpg');
export const aothun1 = require('../../assets/images/aothun1.jpg');
export const nu3 = require('../../assets/images/ngoctuyen.jpg');
export const nu4 = require('../../assets/images/Ao1.jpg');
export const nu5 = require('../../assets/images/Ao2.jpg');
export const nu6 = require('../../assets/images/Ao3.jpg');
export const nu7 = require('../../assets/images/aothun1.jpg');

import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import { useLogin } from '../../Context/LoginProvider';

import Dialog from "react-native-dialog";
const { height, width } = Dimensions.get('window');

const sanpham = [
  {
    id: 1,
    image: nu3
  },
  {
    id: 2,
    image: nu4
  },
  {
    id: 3,
    image: nu5
  },
  {
    id: 4,
    image: nu6
  },
  {
    id: 5,
    image: nu7
  },
  {
    id: 6,
    image: nu3
  },
];
const CartScreen = ({ navigation }) => {
  const { isLoggedIn, profile } = useLogin();
  const [cartList, setcartList] = useState([]);
  const itemsPrice = cartList.reduce((a, c) => a + c.amount * c.product_id.gia, 0);
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

  //Diglog onClick
  const [visible, setVisible] = useState(false);
  const showDialog = () => {
    setVisible(true);
  };
  const handleContinue = () => {
    setVisible(false);
  };

  //RenderItem Cart
  const renderItem = ({ item }) => {
    const showConfirmDialog = () => {
      return Alert.alert(
        "Bạn đã chắc chắn?",
        "Bạn có chắc chắn xoá sản phẩm này chứ?",
        [
          {
            text: "Huỷ",
          },
          {
            text: "Đồng ý",
            onPress: () => DeleteCart(item._id)
          },
        ]
      );
    };
    // Delete Cart
    const DeleteCart = (_id) => {
      //delete an item from state array
      let filterArray = cartList.filter((val, i) => {
        if (val._id !== _id) {
          return val
        }
      })
      axios.delete(`${baseURL}carts/` + item._id)
        .then(function (response) {
          console.log(response);
          setcartList(filterArray)
          showDialog()
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    const onChangeQual = (item, type) => {
      const dataCar = item._id
      if (type) {
        const congSoLuong = cartList.map(item => {
          if (item._id == dataCar) {
            item.amount += 1;
            return item
          }
          return item;
        })
        fetch(`${baseURL}carts/` + item._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount: item.amount,
          })
        }).then(res => res.json())
          .then(data => {
            setcartList(congSoLuong)
            console.log('is Update successffly!!', data.amount)
          }).catch(err => {
            console.log("error", err)
          })
      }
      else if (type == false) {
        const truSoLuong = cartList.map(item => {
          if (item._id == dataCar) {
            item.amount -= 1;
            if (item.amount < 1) {
              console.log("end game")
              item.amount = 1
              showConfirmDialog()
            }
            return item
          }
          return item;
        })
        fetch(`${baseURL}carts/` + item._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount: item.amount,
          })
        }).then(res => res.json())
          .then(data => {
            setcartList(truSoLuong)
            console.log('is Update successffly!!')
          }).catch(err => {
            console.log("error", err)
          })
      }
    }

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
              {item.product_id ? item.product_id.gia : ' '} VNĐ
            </Text>
            {/* + - */}
            <View style={styles.itemAmount}>
              <TouchableOpacity onPress={() => onChangeQual(item, false)}>
                <Text style={styles.textItemAmount}>-</Text>
              </TouchableOpacity >
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
          onPress={showConfirmDialog}
        >
          <Image source={require('../../assets/icon/bin.png')} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderSanpham = ({ item }) => {
    return (
      <View style={{
        marginTop: 10,
      }}>
        <TouchableOpacity style={{
          width: 150,
          height: 220,
          backgroundColor: 'white',
          marginLeft: 5,

        }}>
          <Image style={{
            width: 150,
            height: 160,
          }} source={item.image} />
          <Text style={{
            fontSize: 18,
            marginTop: 5,
            fontWeight: 'bold',
            color: 'red'
          }}>199.000đ</Text>
          <Text style={{
            textDecorationLine: 'line-through'
          }}>249.000đ</Text>
        </TouchableOpacity>
      </View>
    )
  };
  return (
    <View style={styles.container}>
      {/* Diglog when delete cart success */}
      <Dialog.Container
        visible={visible}
        contentStyle={{ borderRadius: 10, borderColor: 'white', width: width / 1.09 }}>
        <Dialog.Title style={{ fontSize: 28, fontWeight: 'bold' }}>
          Xoá thành công {" "}
          <Image
            style={{ height: 25, width: 25 }}
            source={require('../../assets/icon/checked.png')}
          />
        </Dialog.Title>
        <Dialog.Button
          style={{ color: 'brown', fontWeight: 'bold', fontSize: 20 }}
          label="Tiếp tục"
          onPress={handleContinue}
        />
      </Dialog.Container>

      {/* Thêm địa chỉ*/}
      <CheckOutItem
        icon="truck-outline"
        color="#00008B"
        name="Mua thêm để tận hưởng vận chuyển miễn phí"
        iconright="angle-right" />
      <ScrollView>
        <View style={styles.content}>
          {/* Sản phẩm thanh toán của tôi */}
          <MyCheckOut icon="shop" name="Art Wear" />
          {/* View san pham */}
          <View style={{
            padding: 10,
            marginTop: 10,
          }}>
            {/* Check cart rỗng */}
            {cartList.length === 0 &&
              <View style={styles.viewCartEmpty}>
                <Image
                  style={styles.imageCartEmpty}
                  source={require('../../assets/images/Error/ShoppingCart.png')}
                />
                <Text style={styles.textCartEmptyOne}>Không có gì trong giỏ hàng</Text>
                <Text style={styles.textCartEmptyTwo}>Lướt Art Wear và mua sắm nào!</Text>
                <TouchableOpacity
                  style={styles.viewShoppingNow}
                  onPress={() => navigation.navigate('Main')}
                >
                  <Text style={styles.textShoppingNow}>Mua sắm nào</Text>
                </TouchableOpacity>
              </View>
            }
            <FlatList
              data={cartList}
              renderItem={renderItem}
              keyExtractor={item => item._id}
            />
          </View>
          {/* View san pham goi ý*/}
          <View style={{
            backgroundColor: 'white',
            padding: 10,
            elevation: 2
          }}>
            {/* Line gạch ngang */}
            <View style={styles.divider} />
            <Text style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold'
            }}>
              Sản phẩm có thể bạn đang tìm kiếm
            </Text>
            <FlatList
              data={sanpham}
              renderItem={renderSanpham}
              keyExtractor={item => item.id}
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
          <Text style={styles.tongprice}>{itemsPrice} VNĐ</Text>
          <View style={styles.btnItemOne}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CartNavigator', { screen: 'Checkout' })}>
              <Text style={styles.textItemOne}>Mua hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 5,
    marginTop: 10
  },
  content: {
    backgroundColor: '#f7f7f7',
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    flex: 1
  },
  sanpham: {
    backgroundColor: '#fff',
    marginLeft: 20
  },
  money: {
    backgroundColor: '#fff',
    marginLeft: 20
  },
  //Line gạch ngang
  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginLeft: 1,
    margin: 5
  },
  footer: {
    padding: 15,
    backgroundColor: '#FFFCF2',
  },
  texttong: {
    fontSize: 18,
  },
  tongprice: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  btnItemOne: {
    backgroundColor: '#8D6E63',
    borderRadius: 15,
    width: 220,
    height: 60,
    marginLeft: 30,
    marginTop: -27,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textItemOne: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  viewCartEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  imageCartEmpty: {
    height: 150,
    width: 150
  },
  textCartEmptyOne: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8
  },
  textCartEmptyTwo: {
    fontSize: 18,
    color: '#505050',
    marginTop: 2
  },
  viewShoppingNow: {
    height: 50,
    width: 150,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  textShoppingNow: {
    fontWeight: 'bold',
    fontSize: 20, color: 'red'
  },
  FlatListStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    elevation: 2,
  },
  viewCart: {
    flexDirection: 'row'
  },
  imageCart: {
    width: 100,
    height: 100,
  },
  itemCart: {
    marginLeft: 10
  },
  textItemName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  textItemPrice: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  itemAmount: {
    width: 95,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
    elevation: 5
  },
  textItemAmount: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  btnDeleteCart: {
    marginTop: 50,
    height: 45,
    width: 45,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

})
export default CartScreen;



