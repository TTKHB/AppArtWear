import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView, Image,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Dash from 'react-native-dash';
const logo = require('../../../assets/images/Ao/AoKhoac/aokhoac1.png');
const logotwo = require('../../../assets/images/Ao/VarsityJacket/varsity1.png');
const iconGift = require('../../../assets/images/giftbox.png');
const { height, width } = Dimensions.get('window');
const Gift = ({ textHeader, iconGif, onPress }) => (
  <View style={styles.itemContainer}>
    {/* Gift Header */}
    <View style={styles.itemHeader}>
      <Icon name={iconGif} size={30} color="#E93B39" style={styles.iconHeader} onPress={onPress} />
      <Text style={styles.itemTextHeader} onPress={onPress}>{textHeader}</Text>
    </View>
    {/* BOX */}
    <View style={styles.box}>
      {/* BOX Item One */}
      <View style={styles.itemmone}>
        <Image source={logo} style={styles.imageItemOne} onPress={onPress} />
        <View style={styles.btnItemOne}>
          <Text style={styles.textItemOne} onPress={onPress}>-79%</Text>
        </View>
      </View>
      {/* BOX Item Two */}
      <View style={styles.itemmtwo}>
        <Image source={logotwo} style={styles.imageItemTwo} onPress={onPress} />
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
    alignItems: 'center',
    justifyContent: 'center'
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width:width/1.2,
  },
  itemmone: {
    backgroundColor: '#A790C8',
    width: 100,
    height: 125,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center'
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
    width: 100,
    height: 125,
    marginLeft: 15,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center'
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
    marginTop:15,
    width: 100,
    height: 140,
    marginLeft: 15,
    borderRadius: 10,
    alignItems: 'center',
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
  },
  viewCustomOne: {
    marginTop: -7,
    marginRight: 97,
  },
  customborderTopOne: {
    backgroundColor: '#fff',
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
    marginLeft: 97,
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
    width: 80,
    height: 22,
    marginTop:7,
  },
  textGetIt: {
    textAlign: 'center',
    fontWeight: 'bold',
  }


})

export default Gift;