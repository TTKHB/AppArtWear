import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { styles } from '../../../components/MyOrder/styles/WaitPaymentStyles';

import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../../assets/common/baseUrl';

import { useLogin } from '../../../Context/LoginProvider';

export const tt = require('../../../assets/images/protect.jpg');

const WaitPayment = ({ navigation }) => {
  const { profile } = useLogin();
  const [orderList, setorderList] = useState([]);

  useFocusEffect(
    useCallback(() => {
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

  const renderCancel = ({ item }) => {
    return (
      <View>
        {item.status == "2" ? (
          <>
            <View style={styles.container2} key={item._id}>
              <View style={styles.view1}>
                <View
                  style={styles.HeaderItem}>
                  <Text style={styles.ArtWearMall}>
                    ArtWear Mall
                  </Text>
                </View>
                <TouchableOpacity >
                  <Text
                    style={styles.textCancel}>
                    Chờ thanh toán
                  </Text>
                </TouchableOpacity>
              </View>
              {item.orderitems.map(e => (
                <View style={styles.view2} key={e._id}>
                  <View style={styles.view21}>
                    <Image
                      style={styles.styleImage}
                      source={{ uri: e.product ? e.product.ThumbImg : ' ' }}
                    />
                  </View>
                  <View style={styles.view22}>
                    <View >
                      <Text style={{ fontSize: 18 }}>
                        {e.product ? e.product.ten : ' '}
                      </Text>
                    </View>
                    <View >
                      <Text style={{ fontSize: 18 }}>
                        x {e.quantity}
                      </Text>
                    </View>
                    <View >
                      <Text style={[styles.textSize, styles.color]}>
                        {e.product ? e.product.gia.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.') : ' '}  VNĐ
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
              <View style={styles.view32}>
                <Image style={{ width: 23, height: 23, marginRight: 5 }} source={tt} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.totalFinalPrice.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')} VNĐ</Text>
              </View>
              <View style={styles.viewFooter}>
                <View >
                  <Text>Ngày mua hàng:</Text>
                  <Text>{item.dateOrdered}</Text>
                  <Text>Dự kiến giao hàng 3-7 ngày</Text>
                </View>

                <TouchableOpacity
                  onPress={() => navigation.navigate('CartNavigator', { screen: 'Cart' })}
                  style={styles.btnMuaLai}>
                  <Text style={{ color: 'white' }}>Theo dõi</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : null}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={orderList}
        keyExtractor={item => item._id}
        renderItem={renderCancel}
      />
    </View>
  );
};

export default WaitPayment;