import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
}
from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Dash from 'react-native-dash';
const ItemAoKhoac = require('../../../assets/images/Ao/AoKhoac/aokhoac1.png');
const iconGift = require('../../../assets/images/giftbox.png');
const { height, width } = Dimensions.get('window');
import { useLogin } from '../../../Context/LoginProvider';
const Gift = ({ navigation }) => {
  const { isLoggedIn } = useLogin();
  const onSubmitVoucher = () => {
    if (!isLoggedIn) {
      navigation.navigate('UserNavigator', { screen: 'Login' });
    } else {
      navigation.navigate('UserNavigator', { screen: 'uudaiUser' });
    }
  }
  return (
    <View>
      {/* Gift */}
      <View style={styles.contentGif}>
        {/* <Gift textHeader="Shop vui vẻ, rinh quà rẻ" iconGif="gift" /> */}
        <TouchableOpacity style={styles.itemHeader}
          onPress={onSubmitVoucher}>
          <Icon
            name="gift"
            size={30}
            color="#E93B39"
            style={styles.iconHeader}
          />
          <Text style={styles.itemTextHeader}>Shop vui vẻ, rinh quà rẻ</Text>
        </TouchableOpacity>
        {/* Box */}
        <View style={styles.box}>
          {/* Item One */}
          <TouchableOpacity style={styles.itemSale}
            onPress={onSubmitVoucher}>
            <Image
              source={ItemAoKhoac}
              style={styles.imageItemSale}
            />
            <View style={styles.btnItemSale}>
              <Text style={styles.textItemSale}>-79%</Text>
            </View>
          </TouchableOpacity>
          {/* Item Two */}
          <TouchableOpacity style={styles.itemSale}
            onPress={onSubmitVoucher}>
            <Image source={ItemAoKhoac} style={styles.imageItemSale} />
            <View style={styles.btnItemSale}>
              <Text style={styles.textItemSale}>-29%</Text>
            </View>
          </TouchableOpacity>
          {/* Item Three (Piheu mua hang) */}
          <View style={styles.viewPhieuMuaHang}>
            <View style={styles.headerPhieu} >
              <Text style={styles.textPrice}>-đ 102,756</Text>
              <Text style={styles.textCoupons}>Phiếu mua hàng</Text>
            </View>
            <View style={styles.viewDash}>
              <View style={styles.viewImageGift} >
                <Image source={iconGift} />
              </View>
              {/* đường line dạng dot ---- */}
              <Dash dashLength={5} dashColor="#FFFCF2" />
              <TouchableOpacity style={styles.viewGetIt}
                onPress={onSubmitVoucher}>
                <Text style={styles.textGetIt}>Nhận ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  contentGif: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    height: height / 3.0,
    elevation:2
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  iconHeader: {
    marginRight: 15
  },
  itemTextHeader: {
    color: '#E93B39',
    fontWeight: 'bold',
    fontSize: 22,
  },
  box: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    width: width / 1.1,
    paddingHorizontal: 10,
    flex: 1,
    borderRadius: 15,
  },
  itemSale: {
    backgroundColor: '#A790C8',
    height: '65%',
    width: '30%',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    marginTop: '-7%'
  },
  textItemSale: {
    fontWeight: 'bold',
    color: '#fff',
  },
  imageItemSale: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  btnItemSale: {
    backgroundColor: '#000',
    borderRadius: 15,
    width: 70,
    height: 27,
    marginTop: -12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewPhieuMuaHang: {
    backgroundColor: '#FD4545',
    height: '71%',
    width: '34%',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: '-4%'
  },
  headerPhieu: {
    alignItems: 'center'
  },
  textPrice: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCoupons: {
    color: '#fff',
    fontSize: 14,
  },
  viewImageGift: {
    alignItems: 'center'
  },
  viewDash: {
    flex: 1,
    marginTop: 5
  },
  viewGetIt: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: '11%',
    marginHorizontal: 15,
    alignItems: 'center'
  },
  textGetIt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
})

export default Gift;