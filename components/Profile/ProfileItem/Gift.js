import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Dash from 'react-native-dash';
const logo = require('../../../assets/images/Ao/AoKhoac/aokhoac1.png');
const logotwo = require('../../../assets/images/Ao/VarsityJacket/varsity1.png');
const iconGift = require('../../../assets/images/giftbox.png');

const Gift = ({ textHeader, iconGif,onPress }) => (
  <View style={styles.itemContainer}>
    {/* Gift Header */}
    <View style={styles.itemHeader}>
      <Icon name={iconGif} size={30} color="#E93B39" style={styles.iconHeader} onPress={onPress}/>
      <Text style={styles.itemTextHeader} onPress={onPress}>{textHeader}</Text>
    </View>
    {/* BOX */}
    <View style={styles.box}>
      {/* BOX Item One */}
      <View style={styles.itemmone}>
        <Image source={logo} style={styles.imageItemOne} onPress={onPress}/>
        <View style={styles.btnItemOne}>
          <Text style={styles.textItemOne} onPress={onPress}>-79%</Text>
        </View>
      </View>
      {/* BOX Item Two */}
      <View style={styles.itemmtwo}>
        <Image source={logotwo} style={styles.imageItemTwo} onPress={onPress}/>
        <View style={styles.btnItemTwo}>
          <Text style={styles.textItemTwo} onPress={onPress}>-99%</Text>
        </View>
      </View>
      {/* BOX Item Three */}
      <View style={styles.itemmthree}>
        <View style={styles.headerItemThree} >
          <Text style={styles.textPriceItemThree} onPress={onPress}>-đ 102,756</Text>
          <Text style={styles.textCouponsItemThree} onPress={onPress}>Phiếu mua hàng</Text>
          <Image source={iconGift} style={styles.iconGift} onPress={onPress} />
        </View>
        {/* Đường line bị đứt quảng (Dot) */}
        <View style={styles.viewDash}>
          <Dash dashLength={5} dashColor="#FFFCF2" />
        </View>

        {/*  Hình tròn bên trái bị cắt 1 nửa ngay đường line */}
        <View style={styles.viewCustomOne}>
          <View style={styles.customborderTopOne} />
          <View style={styles.customborderBottomOne} />
        </View>
        {/*  Hình tròn bên phải bị cắt 1 nửa ngay đường line */}
        <View style={styles.viewCustomTwo}>
          <View style={styles.customborderTopTwo} />
          <View style={styles.customborderBottomTwo} />
        </View>
        {/*  Get It */}
        <View style={styles.viewGetIt}>
          <Text style={styles.textGetIt} onPress={onPress}>Nhận ngay</Text>
        </View>
      </View>
    </View>
  </View>
);


const styles = StyleSheet.create({
  //ProfileItem
  itemContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemTextHeader: {
    color: '#E93B39',
    fontWeight: 'bold',
    fontSize: 22,
  },
  iconHeader: {
    marginRight: 15
  },
  box: {
    flexDirection: 'row'
  },
  itemmone: {
    backgroundColor: '#A790C8',
    marginVertical: 15,
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: 140,
    height: 130,
    borderRadius: 15,
    borderWidth:1,
  },
  imageItemOne: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  btnItemOne: {
    backgroundColor: '#000',
    borderRadius: 15,
    width: 80,
    height: 30,
    marginLeft: 32,
    marginTop: -12,
  },
  textItemOne: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5
  },
  itemmtwo: {
    backgroundColor: '#fff',
    marginVertical: 15,
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: 130,
    height: 130,
    marginLeft: 15,
    borderRadius: 15,
    borderWidth:1
  },
  imageItemTwo: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  btnItemTwo: {
    backgroundColor: '#000',
    borderRadius: 15,
    width: 80,
    height: 30,
    marginLeft: 27,
    marginTop: -12,
  },
  textItemTwo: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  itemmthree: {
    backgroundColor: '#FD4545',
    marginVertical: 15,
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: 120,
    height: 150,
    marginLeft: 15,
    borderRadius: 10,
  },
  headerItemThree: {
    alignItems: 'center',
    marginTop: 10
  },
  textPriceItemThree: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCouponsItemThree: {
    color: '#fff',
    fontSize: 12,
  },
  iconGift: {
    marginTop: 10
  },
  viewDash: {
    marginVertical: 0,
    marginLeft: -2,
  },
  viewCustomOne: {
    marginTop: -7
  },
  customborderTopOne: {
    backgroundColor: '#FFFCF2',
    height: 5,
    width: 5,
    borderTopRightRadius: 50
  },
  customborderBottomOne: {
    backgroundColor: '#FFFCF2',
    height: 5,
    width: 5,
    borderBottomRightRadius: 50,
  },
  viewCustomTwo: {
    marginTop: -9,
    marginLeft: 116,
  },
  customborderTopTwo: {
    backgroundColor: '#FFFCF2',
    height: 5,
    width: 5,
    borderTopLeftRadius: 50,
    justifyContent: 'flex-end'
  },
  customborderBottomTwo: {
    backgroundColor: '#FFFCF2',
    height: 5,
    width: 5,
    borderBottomLeftRadius: 50,
  },
  viewGetIt: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 100,
    height: 22,
    marginLeft: 10,
    marginTop: 15
  },
  textGetIt: {
    textAlign: 'center',
    fontWeight: 'bold',
  }


})

export default Gift;