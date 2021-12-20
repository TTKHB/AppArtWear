import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
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
      if (item.status == "2") {
        return item
      }else{
        console.log("Ko tim thay order")
      }
    })
    setcheckorder(checkorderList)
  }, [orderList]);

  console.log("checkorder list", checkorder)

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
            <View >
              <Text>Ngày mua hàng:</Text>
              <Text>{item.dateOrdered}</Text>
              <Text>Dự kiến giao hàng 3-7 ngày</Text>
            </View>

            <TouchableOpacity
              style={styles.btnMuaLai}>
              <Text style={{ color: 'white' }}>Theo dõi</Text>
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
           <Image style={styles.images} source={require("../../../assets/icon/browser.jpg")} />
            <Text style={styles.welcome}>
              Rỗng
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default WaitPayment;