import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

export const car = require('../../../assets/images/car1.jpg');
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../../assets/common/baseUrl';
import { useLogin } from '../../../Context/LoginProvider';

const StarRatingOrder = ({ navigation }) => {
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
      if (item.status == "4") {
        return item
      } else {
        console.log("Ko tim thay order")
      }
    })
    setcheckorder(checkorderList)
  }, [orderList]);

  console.log("check StarRatingOrder list", checkorder)

  const renderOrder = ({ item }) => {
    return (
      <View key={item._id}>
        {item.orderitems.map(e => (
          <View style={styles.container1} key={e._id}>
            <View style={styles.container2}>
              <View style={styles.left}>
                <View style={styles.giua}>
                  <Image style={styles.images}
                    source={{ uri: item ? item.imageSp : ' ' }}
                  />
                </View>
              </View>
              <View style={styles.right}>
                <Text style={styles.textFlat}>
                  {e.product ? e.product.ten : ' '}
                </Text>
                <Text style={styles.textFlat1}>
                  Số lương: x {e.quantity}
                </Text>
                <Text style={styles.textFlat1}>
                  {e.product ? e.product.gia.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.') : ' '} đ
                </Text>
                <Text style={styles.textFlat2}>
                  Tổng: {e.product ? e.product.gia.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.') : ' '} đ
                </Text>
              </View>
            </View>
            <View style={styles.container3}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={styles.icon} source={car} />
                  <Text style={{ fontSize: 17, color: '#06AB7D', marginLeft: 10 }}>
                    Giao hàng thành công
                  </Text>
                </View>
                <TouchableOpacity
                  style={{ marginRight: 6 }}
                  onPress={() => navigation.navigate('CartNavigator', { screen: 'Cart' })}
                >
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#FF6347" }}>Mua lại</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container5}>
              <View>
                <Text style={styles.textFooter}>Cảm ơn bạn đã mua hàng {"\n"}của Art Wear</Text>
              </View>

              <TouchableOpacity
                style={styles.btnDanhGia}
                onPress={() =>
                  navigation.navigate('UserNavigator', {
                    screen: 'Rating',
                    params:
                    {
                      item: item._id
                    }
                  })}>
                <Text style={styles.textDanhGia}>Đánh giá</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
            renderItem={renderOrder}
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
    height: 222,
    backgroundColor: 'white',
    marginTop: 10,
  },
  container2: {
    height: 110,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
  },
  left: {
    width: '27%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    width: '70%',
    height: '100%',
    marginVertical: 5
  },
  giua: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
  },
  textFlat: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  marrgin: {
    marginTop: 15,
  },
  textFlat1: {
    fontSize: 18,
    marginLeft: 10
  },
  textFlat2: {
    fontSize: 20,
    marginLeft: 10,
    textAlign: 'right',
    marginRight: 5,
    fontWeight: 'bold'
  },
  container3: {
    height: 40,
    borderBottomWidth: 0.5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  icon: {
    width: 25,
    height: 25,
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginVertical: 10
  },
  left1: {
    backgroundColor: 'white',
  },
  right1: {
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDanhGia: {
    backgroundColor: 'red',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textDanhGia: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  textFooter: {
    fontSize: 16
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
  },
});

export default StarRatingOrder;
