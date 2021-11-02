import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,Button
} from 'react-native';
export const back = require ('../../../assets/images/back.png');
export const ask = require ('../../../assets/images/ask.png');
export const cart = require ('../../../assets/images/card.png');
export const addres = require ('../../../assets/images/addres.png');
export const protect = require ('../../../assets/images/protect.png');
export const aothun = require ('../../../assets/images/ao7.jpg');

const OderDetail = () => {
  return (
    <View>
      {/* header------------------------------------------------------------------ */}
      <View style={Styles.header}>
        <TouchableOpacity style={Styles.header2}>
          <Image style={Styles.imageheader} source={back} />
        </TouchableOpacity>
        <View style={Styles.header1}>
          <Text style={{fontSize: 20}}>Thông tin đơn hàng </Text>
        </View>
        <TouchableOpacity style={Styles.header2}>
          <Image style={Styles.imageheader} source={ask} />
        </TouchableOpacity>
      </View>
      {/* body------------------------------------------------------------------ */}
      <ScrollView style={Styles.body}>
        {/* chờ thanh toán-------------------------------------------------------- */}
        <View style={Styles.view1}>
          <View style={Styles.Viewleft}>
            <Text style={Styles.textleft1}>
              Chờ thanh toán
            </Text>
            <Text style={{fontSize: 14, color: 'white', marginLeft: 10}}>
              Đang chờ hệ thống xác nhận đơn hàng. Trong thời gian này, bạn có thể liên hệ
              với người bán để xác nhận thông tin chi tiết đơn hàng nhé!!
            </Text>
          </View>
          <View style={Styles.ViewRight}>
            <Image style={Styles.imageview1} source={cart} />
          </View>
        </View>
        {/* địa chỉ nhận hàng------------------------------------------------------- */}
        <View style={Styles.view2}>
          <View style={Styles.view21}>
            <View style={{flexDirection: 'row', width: '70%'}}>
              <Image style={Styles.imageheader} source={addres} />
              <Text style={Styles.textTieude}>Địa chỉ nhận hàng</Text>
            </View>
            <TouchableOpacity>
              <Text style={{fontSize: 17, marginLeft: 10, color: '#1EAE98'}}>
                THAY ĐỔI
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: '7%'}}>
            <Text style={Styles.textaddres}>Cristiano Ronaldo</Text>
            <Text style={Styles.textaddres}>0384166110</Text>
            <Text style={Styles.textaddres}>
              99/3/3A, Trung Mỹ Tây, Quận 12, TP. Hồ Chí Minh
            </Text>
          </View>
        </View>
        {/* -------------------------- */}
        <View style={Styles.view3}>
          <View style={{flexDirection: 'row', marginLeft: 17, marginTop: 5}}>
            <Image style={Styles.imageheader} source={protect} />
            <Text style={Styles.textTieude}>Phương thức thanh toán</Text>
          </View>
        </View>
        <View style={Styles.view4}>
          {/* -------------------------- */}
          <View style={{flexDirection: 'row'}}>
            <View style={Styles.touyeuthich}>
              <Text style={{fontSize: 14, color: 'white'}}>Yêu thích</Text>
            </View>
            <TouchableOpacity style={{width: '75%'}}>
              <Text style={{fontSize: 14, textAlign: 'right', marginTop: 10}}>
                XEM SHOP
              </Text>
            </TouchableOpacity>
          </View>
          {/* --------------------------------- */}
          <View
            style={{
              width: '93%',
              height: 130,
              marginTop: 10,
              borderTopWidth: 0.5,
              borderBottomWidth: 0.5,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: '25%',
                  height: '70%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 0.5,
                }}
              >
                <Image
                  style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                  source={aothun}
                />
              </View>
              <View
                style={{
                  width: '70%',
                  height: '90%',
                  marginLeft: 10,
                  marginTop: '4%',
                }}
              >
                <Text style={{fontSize: 22}}>Áo thể thao đẹp free size</Text>
                <Text style={{fontSize: 18}}>Logo ManChester United</Text>
                <Text style={{fontSize: 18, textAlign: 'right', marginTop: 22}}>
                  32.000đ
                </Text>
              </View>
            </View>
          </View>
          {/* --------------------------------- */}
          <View
            style={{
              width: '93%',
              height: 50,
              flexDirection: 'row',
              borderBottomWidth: 0.5,
              alignItems: 'center',
            }}
          >
            <Text style={{fontSize: 20}}>Thành tiền:</Text>
            <Text style={{fontSize: 20, textAlign: 'right', width: '74%'}}>
              23.00đ
            </Text>
          </View>
          {/* --------------------------------- */}
          <View
            style={{
              flexDirection: 'row',
              width: '93%',
              height: 60,
              borderBottomWidth: 0.5,
            }}
          >
            <View style={{width: '40%', justifyContent: 'center'}}>
              <Text style={Styles.textleft}>Mã đơn hàng</Text>
              <Text style={Styles.textleft}>Thời gian đặt hàng</Text>
            </View>
            <View
              style={{
                width: '60%',
                justifyContent: 'center',
                textAlign: 'right',
              }}
            >
              <Text style={Styles.textright}>AGHDGJGADHAKDJ</Text>
              <Text style={Styles.textright}>25/05/2021</Text>
            </View>
          </View>
          <TouchableOpacity style={Styles.Tou21}>
            <Text style={{fontSize: 20}}>Liên hệ shop</Text>
          </TouchableOpacity>
          {/* --------------------------------------------------------------- */}
          <TouchableOpacity style={Styles.Tou21} >
            <Text style={{fontSize: 20}}>Hủy đơn hàng</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
       {/* --------------------------------------------------------------- */}
      <View style={{width: '100%', height: '13%',backgroundColor: 'white', }}>
        <View>
          <Text style={{textAlign: 'right', fontSize: 18, marginTop: '2%'}}>Tổng thanh toán: 24.000đ</Text>
          <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',width: '100%', height: 50,backgroundColor: '#8D6E63', marginTop: '3%'}}>
            <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Xác Nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default OderDetail;

export const Styles = StyleSheet.create ({
  //---------------------------------------------------------------
  header: {
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  header1: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header2: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageheader: {
    width: 25,
    height: 25,
  },
  //---------------------------------------------------------------
  body: {
    width: '100%',
    height: '80%',
  },
  view1: {
    backgroundColor: '#1EAE98',
    height: 130,
    width: '100%',
    flexDirection: 'row',
  },
  imageview1: {
    width: 70,
    height: 70,
  },
  Viewleft: {
    width: '70%',
  },
  ViewRight: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    width: '100%',
    height: 140,
    backgroundColor: 'white',
  },
  view21: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  textleft1: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
    marginTop: 10,
  },
  textaddres: {
    fontSize: 16,
  },
  view3: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    marginTop: 10,
  },
  textTieude: {fontSize: 17, marginLeft: 10},
  view4: {
    width: '100%',
    height: 480,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center',
  },
  touyeuthich: {
    width: 70,
    height: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 7,
  },
  textleft: {
    fontSize: 18,
  },
  textright: {
    fontSize: 18,
    textAlign: 'right',
  },
  Tou21: {
    width: '93%',
    height: 55,
    marginTop: 30,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
});
