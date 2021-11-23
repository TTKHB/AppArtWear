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
import { styles } from '../../../components/MyOrder/styles/AllOrderStyles';

const HandleProduct = ({ navigation }) => {
  const { profile } = useLogin();
  const [orderList, setorderList] = useState([]);

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`${baseURL}orders/get/userorderss/` + profile._id)
        .then(res => {
          setorderList(res.data);
          console.log(res.data);
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
    return (
      <View>
        {item.status == "1" ? (
          <>
        <View style={styles.container1} key={item._id}>
          <View style={styles.container2}>
            <Text style={styles.textGiaoHang}>{textGiaoHang}</Text>
            <Badge
              badgeStyle={styles.badge}
              containerStyle={{ marginTop: 10, marginLeft: 5 }}
              status={tl1}
            />
          </View>
          {item.orderitems.map(e => (
            <View style={styles.container3} key={e._id}>
              <View style={styles.viewImage}>
                <Image style={styles.imageFlat}
                  source={{ uri: e.product ? e.product.ThumbImg : ' ' }}
                />
              </View>
              <View style={styles.viewItem}>
                <Text style={styles.textName}>
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
        </>
        ) : null}
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={orderList}
        keyExtractor={item => item._id}
        renderItem={renderOrder}
      />
    </View>
  );
};
export default HandleProduct;