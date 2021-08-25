import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
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

const product = [
  {
    id: 1,
    image: nu3,
    name: 'Trần Ngọc Tuyền Girl 2003',
    price: '184.000đ',
  },

];
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
  renderItem = ({ item }) => {
    return (
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '95%',
            backgroundColor: 'white',
            height: 120,
            marginTop: 10,
            alignContent: 'center',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              marginTop: 7.5,
              marginLeft: 7.5,
            }}
          >
            {/* Image */}
            <Image
              style={{
                width: 100,
                height: 100,
              }}
              source={item.image}
            />
          </View>

          {/* Tensp, price */}
          <View
            style={{
              marginLeft: 10,
              marginTop: 2.5,
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'red',
                fontWeight: 'bold',
              }}
            >
              {item.price}
            </Text>
          </View>

          {/* Size */}
          <View
            style={{
              marginTop: 75,
              marginLeft: -207,
              flexDirection: 'row',
            }}
          >
            {/* Text Size */}
            <TouchableOpacity
              style={{
                width: 50,
                backgroundColor: '#FFFCF2',
                height: 35,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 0.2
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                }}
              >
                Size
              </Text>
            </TouchableOpacity>

            {/* + - */}
            <View
              style={{
                width: 120,
                backgroundColor: '#FFFCF2',
                height: 35,
                marginLeft: 160,
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {/* - */}
              <TouchableOpacity style={{
                width: 35,
                height: 35,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                backgroundColor: '#FFFCF2',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 0.2
              }}>
                <Text style={{
                  fontSize: 24,
                  fontWeight: 'bold'
                }}>-</Text>
              </TouchableOpacity>

              {/* 1 */}
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 35,
                backgroundColor: '#FFFCF2',
                borderWidth: 0.2
              }}>
                <Text style={{
                  fontSize: 20
                }}>1</Text>
              </View>

              {/* + */}
              <TouchableOpacity style={{
                width: 35,
                height: 35,
                backgroundColor: '#FFFCF2',
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 0.2
              }}>
                <Text style={{
                  fontSize: 24,
                  fontWeight: 'bold'
                }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  renderSanpham = ({ item }) => {
    return (
      <View style={{
        marginTop: 10
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
      {/* Thêm địa chỉ*/}
      <CheckOutItem
        icon="truck-outline"
        color="#00008B"
        name="Mua thêm để tận hưởng vận chuyển miễn phí"
        iconright="angle-right" />
      <View style={styles.content}>
        {/* Sản phẩm thanh toán của tôi */}
        <MyCheckOut icon="shop" name="Art Wear" />
        {/* View san pham */}
        <View>
          <FlatList
            data={product}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        {/* View san pham goi ý*/}
        <View style={{
          marginHorizontal: 10,
          marginLeft: 10,
          backgroundColor: 'white',
          padding: 10
        }}>
          {/* Line gạch ngang */}
          <View style={styles.divider} />
          <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Sản phẩm có thể bạn đang tìm kiếm</Text>
          <FlatList
            data={sanpham}
            renderItem={renderSanpham}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
      </View>
      {/*Footer Button Xác nhận thanh toán ngay bây giờ */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.texttong}>Tổng thanh toán:</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.tongprice}>184.000 đ</Text>
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
})
export default CartScreen;
