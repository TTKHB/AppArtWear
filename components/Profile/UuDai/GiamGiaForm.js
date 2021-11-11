import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  onPress,
  Dimensions,
  StyleSheet,
} from 'react-native';

export const cart = require('../../../assets/images/cart.jpg');
export const back = require('../../../assets/images/cart.jpg');
export const search = require('../../../assets/images/search.jpg');
export const nu1 = require('../../../assets/images/Ao1.jpg');
export const nu2 = require('../../../assets/images/tuyen.jpg');
export const nu3 = require('../../../assets/images/ngoctuyen.jpg');
export const star = require('../../../assets/images/star.jpg');
export const back1 = require('../../../assets/images/back.jpg');

const {height, width} = Dimensions.get('window');

const product = [
  {
    id: 0,
    image: nu1,
    title: 'Váy dạ hội',
    giagoc: ' 79.000 VNĐ',
    giamgia: ' 99.000 VNĐ',
    voucher: 'Vận chuyển miễn phí',
    sale: '59%',
    star: star,
    danhgia: '5.0',
    daban: '  7',
  },
  {
    id: 1,
    image: nu2,
    title: 'Áo thun trắng',
    giagoc: ' 59.000 VNĐ',
    giamgia: '  99.000 VNĐ',
    voucher: 'Vận chuyển miễn phí',
    sale: '59%',
    star: star,
    danhgia: '5.0',
    daban: '  7',
  },
  {
    id: 2,
    image: nu3,
    title: 'Áo thun nữ đen',
    giagoc: ' 49.000 VNĐ',
    giamgia: '  59.000 VNĐ',
    voucher: 'Vận chuyển miễn phí',
    sale: '59%',
    star: star,
    danhgia: '5.0',
    daban: '  7',
  },
  {
    id: 3,
    image: nu1,
    title: 'Bộ thể thao',
    giagoc: ' 33.000 VNĐ',
    giamgia: '  53.000 VNĐ',
    voucher: 'Vận chuyển miễn phí',
    sale: '59%',
    star: star,
    danhgia: '5.0',
    daban: '  7',
  },
  {
    id: 4,
    image: nu2,
    title: 'Áo thun trắng',
    giagoc: ' 14.000 VNĐ',
    giamgia: ' 34.000 VNĐ',
    voucher: 'Vận chuyển miễn phí',
    sale: '59%',
    star: star,
    danhgia: '5.0',
    daban: '  7',
  },
  {
    id: 5,
    image: nu3,
    title: 'Áo thun nữ đen',
    giagoc: ' 47.000 VNĐ',
    giamgia: '  57.000 VNĐ',
    voucher: 'Vận chuyển miễn phí',
    sale: '59%',
    star: star,
    danhgia: '5.0',
    daban: '  7',
  },
];

const GiamGiaForm = () => {
  renderproduct = ({item}) => {
    return (
      <TouchableOpacity key={item.id}>
        <View style={styles.viewSale}>
          {/* Image */}
          <View style={{flexDirection: 'row'}}>
            <Image source={item.image} style={styles.imageSale} />
          </View>
          {/* Item text, ... */}
          <View>
            {/* Item title */}
            <View style={styles.viewTitle}>
              <Text style={styles.textTitle}>{item.title}</Text>
            </View>
            {/* Van Chuyen */}
            <TouchableOpacity style={styles.viewVanChuyen}>
              <Text style={{fontSize: 14}}>{item.voucher}</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.textPrice}>Giá:{item.giagoc}</Text>
            </View>

            {/* Giam gia */}
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <Text style={styles.textGiamGia}>giá gốc:{item.giamgia}</Text>
              </View>
            </View>
            <View style={styles.viewFooterItem}>
              {/* Ngoi sao danh gia*/}
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 8,
                }}>
                <TouchableOpacity>
                  <Image style={styles.ngoisao} source={item.star} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{}}>{item.danhgia}</Text>
                </TouchableOpacity>
              </View>
              {/* Da ban*/}
              <View>
                <Text style={{}}>Đã bán:{item.daban}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        padding: 5,
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      {/* FlatList */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={product}
        renderItem={renderproduct}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewSale: {
    height: 300,
    backgroundColor: 'white',
    elevation: 4,
    width: width / 2.29,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  imageSale: {
    height: 170,
    width: '100%',
  },
  viewTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 20,
    marginTop: 2,
    fontWeight: 'bold',
  },
  viewVanChuyen: {
    height: 20,
    backgroundColor: '#f7f7f7',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  textPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textGiamGia: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'dotted',
  },
  viewFooterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  ngoisao: {
    width: 15,
    height: 15,
    marginTop: 1.5,
  },
  cardName: {
    marginTop: 10,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  price: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GiamGiaForm;
