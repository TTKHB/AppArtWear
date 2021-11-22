import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  SectionList,
} from 'react-native';
export const Back = require('../../assets/images/back.jpg');
export const banner1 = require('../../assets/images/banner1.jpg');
export const banner2 = require('../../assets/images/banner2.jpg');
export const banner3 = require('../../assets/images/banner3.jpg');
export const banner4 = require('../../assets/images/banner4.jpg');
export const banner5 = require('../../assets/images/banner5.jpg');

const List = [
  {
    id: 1,
    Image: banner1,
    title: 'RA MẮT NGÀY 25/05/2021 ',
    theme: '#Bộ sưu tập thời trang nam',
    date: '25/05/2021',
  },
  {
    id: 2,
    Image: banner2,
    title: 'SĂN SALE THẢ GA',
    theme: '#Ưu đải cực sốc lên đến 50%',
    date: '25/05/2021',
  },
  {
    id: 3,
    Image: banner3,
    title: 'BẮT ĐẦU TỪ NGÀY 1 THÁNG 10',
    theme: '#Đảo sale 25% cho đơn hàng từ 500.00đ',
    date: '25/05/2021',
  },
  {
    id: 4,
    Image: banner4.jpg,
    title: 'ƯU ĐÃI BẤT NGỜ CUỐI THÁNG NÀY',
    theme: '#Big Sale cuối năm dành cho người dùng',
    date: '25/05/2021',
  },
  {
    id: 5,
    Image: banner5,
    title: '1000 SẢN PHẨM ĐẦU TIÊN',
    theme: '#Giảm giá kỹ lục',
    date: '25/05/2021',
  },
];

const SaleScreen = ({ navigation }) => {
  return (
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      {/* header----------------------------------------------------------- */}
      <View style={Styles.Header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Styles.TouHeader}>
          <Image source={Back} style={Styles.ImageHeader} />
        </TouchableOpacity>
        <View style={Styles.ViewText}>
          <Text style={Styles.TextHeader}>Khuyến mãi</Text>
        </View>
        <View style={Styles.TouHeader}></View>
      </View>
      {/* body--------------------------------------------------------------- */}
      <View>
        <FlatList
          style={{ marginBottom: 65 }}
          data={List}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text>{item.date}</Text>
                <View style={Styles.FlatView}>
                  <View
                    style={{
                      width: '100%',
                      height: '65%',
                      backgroundColor: 'white',
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'stretch',
                      }}
                      source={item.Image}
                    />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '35%',
                      justifyContent: 'center',
                    }}>
                    <Text style={Styles.TextFlat1}>{item.theme}</Text>
                    <Text style={Styles.TextFlat2}>{item.title}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SaleScreen;

export const Styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 10,
  },
  TouHeader: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ImageHeader: {
    width: 20,
    height: 20,
  },
  ViewText: { alignItems: 'center', justifyContent: 'center', width: '80%' },
  //----------------------------------------------
  Body: {
    width: '100%',
    height: '92%',
  },
  FlatView: {
    width: '95%',
    height: 190,
    backgroundColor: 'white',
    marginTop: 5,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5.84,
    elevation: 5,
  },
  TextFlat1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  TextFlat2: {
    fontSize: 13,
    marginLeft: 10,
  },
});
