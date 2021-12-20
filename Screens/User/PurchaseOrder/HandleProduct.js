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
  const [checkorder, setcheckorder] = useState([]);
  useFocusEffect(
    useCallback(() => {
      axios
        .get(`${baseURL}orders/get/userorders/` + profile._id)
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

  useEffect(() => {
    const checkorderList = orderList.filter(item => {
      if (item.status == "1") {
        return item
      } else {
        console.log("Ko tim thay order")
      }
    })
    setcheckorder(checkorderList)
  }, [orderList]);

  console.log("check HandleProduct list", checkorder)

  const renderOrder = ({ item }) => {
    let tl1 = ""
    let textGiaoHang = ""
    let textbtn = ""

    let onClickOrder = () => {
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
                  source={{ uri: item ? item.imageSp : ' ' }}
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
                  {e.product ? e.product.gia.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.') : ' '}  đ
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
            <TouchableOpacity style={[styles.Tou, styles.marginLeft]} onPress={onClickOrder}>
              <Text style={styles.texttou}> {textbtn}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {checkorder.length !== 0 ? (
        <>
          <FlatList
            data={checkorder}
            keyExtractor={item => item._id}
            renderItem={renderOrder}
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
export default HandleProduct;