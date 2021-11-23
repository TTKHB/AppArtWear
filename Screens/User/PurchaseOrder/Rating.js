import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  FlatList,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../../assets/common/baseUrl';
import { useLogin } from '../../../Context/LoginProvider';

export const Back = require('../../../assets/images/back.jpg');
export const Tim = require('../../../assets/images/timtim.jpg');
export const tuyen = require('../../../assets/images/ao7.jpg');

const Rating = ({ navigation, route }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';


  const idOrder = route.params.item;
  console.log("id order", idOrder)

  const [orderDetail, setorderDetail] = useState([]);
  const [orderItem, setOrderItem] = useState([]);

  const [cmtDanhGia, setcmtDanhGia] = useState('');

  const { profile } = useLogin();

  useFocusEffect(
    useCallback(() => {
      // Products
      axios
        .get(`${baseURL}orders/` + idOrder)
        .then(res => {
          setorderDetail(res.data);
          console.log("Chi tiet order", res.data);
          setOrderItem(res.data.orderitems);
          console.log("Item trong order", res.data.orderitems);
        })
        .catch(error => {
          console.log('Api call error');
        });
      return () => {
        setorderDetail([]);
        setOrderItem([]);
      };
    }, []),
  );

  const DanhGia = async () => {
    {
      orderItem.map(e => (
        fetch(`${baseURL}reviews`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ratingvalue: defaultRating,
            review: cmtDanhGia,
            userid: profile._id,
            product_id: e.product ? e.product._id : ' '
          })
        }).then(res => res.json())
          .then(data => {
            console.log("is Update successffly!!"),
              console.log(data)
          }).catch(err => {
            console.log("error", err)
          })
      ))
    }
  }


  const CustomRatingBar = () => {
    return (
      <View style={Styles.Rating}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setdefaultRating(item)}
              key={item}>
              <Image
                style={Styles.ImageRating}
                source={
                  item <= defaultRating
                    ? { uri: starImgFilled }
                    : { uri: starImgCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  console.log("ngoisao", defaultRating)

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      {/* heder---------------------------------------------------------------- */}
      <View style={[Styles.Header, Styles.Shadow]}>
        <TouchableOpacity
          style={Styles.TouHeader}
          onPress={() => navigation.goBack()}
        >
          <Image style={Styles.ImageHeader} source={Back} />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '70%',
          }}>
          <Text style={Styles.Text}>Đánh giá sản phẩm</Text>
        </View>
      </View>
      {/* body------------------------------------------------------------------------- */}
      <View style={Styles.Body}>
        {/* View1------------------------------------------------------------- */}
        <View style={Styles.View1}>
          <Image style={Styles.ImageBody} source={Tim} />
          <Text style={Styles.TextBody}>
            Hãy nêu cảm nhận của bạn về sản phẩm!!
          </Text>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            height: 410,
            width: '95%',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          {/* View2------------------------------------------------ */}
          {orderItem.map(item => (
            <View style={Styles.View2} key={item._id}>
              <View style={{ height: '100%', width: '25%' }}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    marginLeft: 10,
                  }}
                  source={{ uri: item.product ? item.product.ThumbImg : ' ' }}
                />
              </View>
              <View style={{ height: '100%', width: '75%' }}>
                <Text
                  style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 15 }}>
                  {item.product ? item.product.ten : ' '}
                </Text>
                <CustomRatingBar />
              </View>
            </View>
          ))}
          {/* View3------------------------------------------------------- */}
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              height: 220,
              marginTop: 10,
            }}>
            <Text style={Styles.TextBody}>Ghi chú</Text>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Ghi đánh giá tại đây"
              numberOfLines={10}
              multiline={true}
              style={[Styles.TextIp]}
              onChangeText={text => setcmtDanhGia(text)}
              value={cmtDanhGia}
            />
          </View>

          <TouchableOpacity
            style={{
              width: '95%',
              height: 30,
              backgroundColor: '#3DB2FF',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              alignSelf: 'center',
            }}
            onPress={() => DanhGia()}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
              Gửi
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[Styles.View3]}>
          <View style={{ width: '85%', height: 60 }}>
            <Text style={{ fontSize: 20, marginLeft: 7 }}>Đánh giá ẩn danh</Text>
            <Text style={Styles.TextBody}>
              Tên tài khoản của bản sẽ không hiển thị
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Switch
              trackColor={{ false: '#767577', true: 'blue' }}
              thumbColor={isEnabled ? 'yellow' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Rating;
export const Styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
  },
  Shadow: {
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  ImageHeader: {
    width: 20,
    height: 20,
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  TouHeader: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //----------------------------------------------------
  Body: {
    width: '100%',
    height: '93%',
    backgroundColor: 'white',
  },
  View1: {
    width: '100%',
    height: 50,
    backgroundColor: '#FDF5CA',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  View2: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
  },
  View3: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'white',
  },
  ImageBody: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  TextBody: {
    fontSize: 16,
    marginLeft: 7,
  },
  Rating: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 7,
    marginLeft: -20,
  },
  ImageRating: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginLeft: 10,
  },
  TextIp: {
    width: '95%',
    textAlignVertical: 'top',
    height: 200,
    backgroundColor: 'white',
    borderWidth: 0.3,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 7,
  },
});
