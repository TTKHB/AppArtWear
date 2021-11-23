import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../../assets/common/baseUrl';
import { useLogin } from '../../../Context/LoginProvider';
import DialogRating from '../../../components/MyOrder/DialogRating';
import Dialog from 'react-native-dialog';
import { styles } from '../../../components/MyOrder/styles/RatingStyles';

export const Back = require('../../../assets/images/back.jpg');
export const Tim = require('../../../assets/images/timtim.jpg');

const Rating = ({ navigation, route }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  //Lay id order params lay ve
  const idOrder = route.params.item;
  console.log("id order", idOrder)

  const [orderDetail, setorderDetail] = useState([]);
  const [orderItem, setOrderItem] = useState([]);
  const [cmtDanhGia, setcmtDanhGia] = useState('');
  const { profile } = useLogin();

  //Diglog onClick
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  }

  //Diglog onClick
  const [visible, setVisible] = useState(false);
  const showDialog = () => {
    setVisible(true);
  };
  const handleContinue = () => {
    setVisible(false);
  };
  const handleHome = () => {
    navigation.navigate('Main', { screen: 'Home' })
    setVisible(false);
  };

  useFocusEffect(
    useCallback(() => {
      // order find by id
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
  //biến danh gia san pham
  const DanhGia = async () => {
    changeModalVisible(true)
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
            setTimeout(() => {
              changeModalVisible(false)
              showDialog();
            }, 5000)
          }).catch(err => {
            console.log("error", err)
          })
      ))
    }
  }
  //biến ngoi sao 
  const CustomRatingBar = () => {
    return (
      <View style={styles.Rating}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setdefaultRating(item)}
              key={item}>
              <Image
                style={styles.ImageRating}
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
  //test gia tri ngoi sao
  console.log("ngoisao", defaultRating)

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      {/* heder---------------------------------------------------------------- */}
      <View style={[styles.Header, styles.Shadow]}>
        <TouchableOpacity
          style={styles.TouHeader}
          onPress={() => navigation.goBack()}
        >
          <Image style={styles.ImageHeader} source={Back} />
        </TouchableOpacity>
        <View
          style={styles.headerText}>
          <Text style={styles.Text}>Đánh giá sản phẩm</Text>
        </View>
      </View>
      {/* body------------------------------------------------------------------------- */}
      <View style={styles.Body}>
        {/* Modal chúc mừng bằng pháo hoa */}
        <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          nRequestClose={() => changeModalVisible(false)}
        >
          <DialogRating />
        </Modal>
        {/* Dia log thanh cong */}
        <Dialog.Container
          visible={visible}
          contentStyle={styles.headerDialog}>
          <Dialog.Title style={{ fontSize: 24, fontWeight: 'bold' }}>
            Đánh giá thành công{' '}
            <Image
              style={{ height: 25, width: 25 }}
              source={require('../../../assets/icon/checked.jpg')}
            />
          </Dialog.Title>
          <Dialog.Description style={{ fontSize: 18 }}>
            Art Wear rất hân hạnh được phục vụ khách hàng
          </Dialog.Description>
          <Dialog.Button
            style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}
            label="Về trang chủ"
            onPress={handleHome}
          />
          <Dialog.Button
            style={{ color: '#FF8C00', fontWeight: 'bold', fontSize: 18 }}
            label="Tiếp tục"
            onPress={handleContinue}
          />
        </Dialog.Container>
        {/* View1------------------------------------------------------------- */}
        <View style={styles.View1}>
          <Image style={styles.ImageBody} source={Tim} />
          <Text style={styles.TextBody}>
            Hãy nêu cảm nhận của bạn về sản phẩm!!
          </Text>
        </View>
        <View
          style={styles.viewRating}>
          {/* View2------------------------------------------------ */}
          {orderItem.map(item => (
            <View style={styles.View2} key={item._id}>
              <View style={{ height: '100%', width: '25%' }}>
                <Image
                  style={styles.imageRating}
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
            <Text style={styles.TextBody}>Ghi chú</Text>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Ghi đánh giá tại đây"
              numberOfLines={10}
              multiline={true}
              style={[styles.TextIp]}
              onChangeText={text => setcmtDanhGia(text)}
              value={cmtDanhGia}
            />
          </View>

          <TouchableOpacity
            style={styles.btnDanhGia}
            onPress={() => DanhGia()}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
              Gửi
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.View3]}>
          <View style={{ width: '85%', height: 60 }}>
            <Text style={{ fontSize: 20, marginLeft: 7 }}>Đánh giá ẩn danh</Text>
            <Text style={styles.TextBody}>
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

