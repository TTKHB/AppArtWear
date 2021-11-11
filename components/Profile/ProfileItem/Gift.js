import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Dash from 'react-native-dash';
const ItemAoKhoac = require('../../../assets/images/Ao/AoKhoac/aokhoac1.jpg');
const iconGift = require('../../../assets/images/giftbox.jpg');
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
  };
  return (
    <View>
      {/* Gift */}
      <View style={styles.contentGif}>
        {/* <Gift textHeader="Shop vui vẻ, rinh quà rẻ" iconGif="gift" /> */}
        <TouchableOpacity style={styles.itemHeader} onPress={onSubmitVoucher}>
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
          <TouchableOpacity style={styles.itemSale} onPress={onSubmitVoucher}>
            <Image source={ItemAoKhoac} style={styles.imageItemSale} />
            <View style={styles.btnItemSale}>
              <Text style={styles.textItemSale}>-79%</Text>
            </View>
          </TouchableOpacity>
          {/* Item Two */}
          <TouchableOpacity style={styles.itemSale} onPress={onSubmitVoucher}>
            <Image source={ItemAoKhoac} style={styles.imageItemSale} />
            <View style={styles.btnItemSale}>
              <Text style={styles.textItemSale}>-29%</Text>
            </View>
          </TouchableOpacity>
          {/* Item Three (Piheu mua hang) */}
          <TouchableOpacity style={styles.itemPhieuMuaHang} onPress={onSubmitVoucher}>
            <View style={styles.containerPhieu}>
              <View style={styles.headerPhieu}>
                <Text style={styles.textPrice}>-đ 102,756</Text>
                <Text style={styles.textCoupons}>Phiếu mua hàng</Text>
              </View>
            </View>
            <View style={styles.viewItemPhieu}>
              <View style={styles.viewImageGift}>
                <Image source={iconGift} />
              </View>
              <TouchableOpacity
                style={styles.viewGetIt}
                onPress={onSubmitVoucher}>
                <Text style={styles.textGetIt}>Nhận Ngay</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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
    elevation: 2,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  iconHeader: {
    marginRight: 15,
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
    marginTop: '-7%',
  },
  textItemSale: {
    fontWeight: 'bold',
    color: '#fff',
  },
  imageItemSale: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  btnItemSale: {
    backgroundColor: '#000',
    borderRadius: 15,
    width: 70,
    height: 27,
    marginTop: -12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerPhieu: {
    alignItems: 'center',
  },
  textPrice: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textCoupons: {
    color: '#fff',
    fontSize: 12,
  },
  viewImageGift: {
    alignItems: 'center',
    marginTop: '-12%'
  },
  containerPhieu: {
    height: 20,
    width: '100%',
    borderRadius: 10,
    flex: 1
  },
  viewItemPhieu: {
    height: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
  },
  itemPhieuMuaHang: {
    backgroundColor: '#FD4545',
    height: '71%',
    width: '30%',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    marginTop: '-5%'
  },
  viewGetIt: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: '90%',
  },
  textGetIt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Gift;
