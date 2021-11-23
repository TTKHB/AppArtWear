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
import { styles } from '../../../components/MyOrder/styles/CancelStyles';

import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../../assets/common/baseUrl';

import { useLogin } from '../../../Context/LoginProvider';

export const tt = require('../../../assets/images/protect.jpg');

const CancelOder = ({ navigation }) => {
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
        {item.status == "5" ? (
          <>
            <View style={styles.container2} key={item._id}>
              <View style={styles.view1}>
                <View
                  style={styles.HeaderItem}>
                  <Text style={styles.ArtWearMall}>
                    ArtWear Mall
                  </Text>
                </View>
                <Text style={styles.textTitleHeader}>
                  unilevervn_beauty
                </Text>
                <TouchableOpacity >
                  <Text
                    style={styles.textCancel}>
                    Đã hủy
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
                <View style={{ marginVertical: 15 }}>
                  <Text>Đơn hàng đã hủy bởi bạn</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('CartNavigator', { screen: 'Cart' })}
                  style={styles.btnMuaLai}>
                  <Text style={{ color: 'white' }}>Mua lại</Text>
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

export default CancelOder;