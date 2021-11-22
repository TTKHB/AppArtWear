import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} 
from 'react-native';

import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../../assets/common/baseUrl';

import { useLogin } from '../../../Context/LoginProvider';

import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

const AllOder = ({ navigation }) => {
  const { isLoggedIn, profile } = useLogin();
  const [orderList, setorderList] = useState([]);

  // get all cart bang id user
  useFocusEffect(
    useCallback(() => {
      // Products
      axios
        .get(`${baseURL}orders/get/userorderss/` + profile._id)
        .then(res => {
          setorderList(res.data);
          console.log(res.data)
        })
        .catch(error => {
          console.log('Api call error nha');
        });

      return () => {
        setorderList([]);
      };
    }, []),
  );

  const renderOrder = ({ item }) => {
    let tl1 = ""
    let textGiaoHang = ""
    let textbtn = ""

    let abcd = () => {
      if (item.status == 5) {
        navigation.navigate('CartNavigator', { screen: 'Cart' })
      }
      if (item.status >= 1 && item.status < 5) {
        console.log("theo doi")
      }
    }
    if (item.status == 1) {
      tl1 = "warning",
        textGiaoHang = "Đơn hàng đang xử lý"
      textbtn = "Theo dõi"
    }
    if (item.status == 2) {
      tl1 = "primary"
      textGiaoHang = "Đơn hàng đã xác nhận"
      textbtn = "Theo dõi"
    }
    if (item.status == 3) {
      tl1 = "primary"
      textGiaoHang = "Đang vận chuyển"
      textbtn = "Theo dõi"
    }
    if (item.status == 4) {
      tl1 = "success"
      textGiaoHang = "Đã giao"
      textbtn = "Mua lại"
    }
    if (item.status == 5) {
      tl1 = "error"
      textGiaoHang = "Đã huỷ"
      textbtn = "Mua lại"
    }
    return (
      <View style={styles.container1} key={item._id}>
        <View style={styles.container2}>
          <Text style={{ fontSize: 18, fontWeight: '300', marginTop: 5 }}>{textGiaoHang}</Text>
          <Badge badgeStyle={{ height: 15, width: 15, borderRadius: 15 }} containerStyle={{ marginTop: 10, marginLeft: 5 }} status={tl1} />
        </View>
        {item.orderitems.map(e => (
          <View style={styles.container3} key={e._id}>
            <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.imageFlat}
                source={{ uri: e.product ? e.product.ThumbImg : ' ' }}
              />
            </View>
            <View style={{ width: '70%' }}>
              <Text style={{ fontSize: 18, marginTop: '2%', fontWeight: 'bold' }}>
                {e.product ? e.product.ten : ' '}
              </Text>
              <Text style={styles.textSoLuong}>
                x {e.quantity}
              </Text>
              <Text style={styles.textFlat}>
                {e.product ? e.product.gia.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.') : ' '}  VNĐ
              </Text>
            </View>
          </View>
        ))}
        <View style={styles.container4}>
          <TouchableOpacity onPress={() => navigation.navigate('UserNavigator', {
            screen: 'OderDetail',
            params:
            {
              DetailOrder: item._id,
            }
          })}
            style={styles.Tou}>
            <Text style={styles.texttou}> Xem chi tiết
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Tou, styles.marginLeft]} onPress={abcd}>
            <Text style={styles.texttou}> {textbtn}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
  return (
    <View style={styles.container}>
      {orderList.length == "" ? (
        <>
          <View style={styles.ViewRong}>
            <Image style={styles.images} source={{
              uri: 'https://www.trangmall.com/Client/upload/News/User_1/2018/12/3/6P2SHv.png',
            }} />
            <Text style={styles.welcome}>
              Rỗng
            </Text>
          </View>
        </>
      ) : (
        <>
          <FlatList
            data={orderList}
            keyExtractor={item => item._id}
            renderItem={renderOrder}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  images: {
    width: 100,
    height: 100,
  },
  container1: {
    width: '100%',
    height: 190,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center'

  },
  container2: {
    width: '93%',
    height: '18%',
    borderBottomWidth: 0.3,
    flexDirection: 'row'
  },
  container3: {
    width: '93%',
    height: '50%',
    flexDirection: 'row'
  },
  container4: {
    width: '93%',
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center', justifyContent: 'center'
  },
  imageFlat: {
    width: '80%',
    height: '80%'
  },
  textSoLuong: {
    fontSize: 14,
    marginTop: 5,
    color: 'black'
  },
  textFlat: {
    fontSize: 16,
    marginTop: 5,
    color: 'red',
    fontWeight: 'bold'
  },
  marginLeft: {
    marginLeft: 10
  },
  Tou: {
    width: '47%',
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  texttou: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  ViewRong: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  images: {
    width: 100,
    height: 100,
  }
});

export default AllOder;