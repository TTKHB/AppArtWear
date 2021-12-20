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
  const [checkorder, setcheckorder] = useState([]);
  useFocusEffect(
    useCallback(() => {
      axios
        .get(`${baseURL}orders/get/userorders/` + profile._id)
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

  useEffect(() => {
    const checkorderList = orderList.filter(item => {
      if (item.status == "5") {
        return item
      } else {
        console.log("Ko tim thay order")
      }
    })
    setcheckorder(checkorderList)
  }, [orderList]);

  console.log("check CancelOder list", checkorder)

  const renderCancel = ({ item }) => {
    return (
      <View>
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
                  source={{ uri: item ? item.imageSp : ' ' }}
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
                    {e.product ? e.product.gia.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.') : ' '}  đ
                  </Text>
                </View>
              </View>
            </View>
          ))}
          <View style={styles.view32}>
            <Image style={{ width: 23, height: 23, marginRight: 5 }} source={tt} />
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.totalFinalPrice.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')} đ</Text>
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
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {checkorder.length !== 0 ? (
        <>
          <FlatList
            data={checkorder}
            keyExtractor={item => item._id}
            renderItem={renderCancel}
          />
        </>
      ) : (
        <>
          <View style={styles.ViewRong}>
          <Image style={styles.images} source={require("../../../assets/icon/browser.jpg")}/>
            <Text style={styles.welcome}>
              Rỗng
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default CancelOder;