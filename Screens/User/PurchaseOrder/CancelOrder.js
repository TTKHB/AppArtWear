import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
export const top = require('../../../assets/images/huyen.jpg');
export const tt = require('../../../assets/images/protect.jpg');
const product = [
  {
    id: 1,
    image: top,
    title: 'MOTF PREMIUM Đầm Thắt lưng Cao thấp màu trơn Giải trí',
    SL: '1',
    price: '300.000',
  },
  {
    id: 2,
    image: top,
    title: 'SHEIN PETITE Đầm viền lá sen Xù màu trơn Thanh lịch',
    SL: '1',
    price: '300.000',
  },
];
const CancelOder = () => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.images} source={{
        uri: 'https://www.trangmall.com/Client/upload/News/User_1/2018/12/3/6P2SHv.png',
      }} />
      <Text style={styles.welcome}>
        Chờ thanh toán
      </Text> */}

      <FlatList
        data={product}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.container2}>
              <View style={styles.view1}>
                <View
                  style={{
                    width: 100,
                    height: 23,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 7,
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    ArtWear Mall
                  </Text>
                </View>
                <Text style={{color: 'black', marginLeft: 10, fontSize: 15}}>
                  unilevervn_beauty
                </Text>
                <TouchableOpacity style={{marginLeft: '18%'}}>
                  <Text
                    style={{fontSize: 17, fontWeight: 'bold', color: 'red'}}>
                    Đã hủy
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.view2}>
                <View style={styles.view21}>
                  <Image
                    style={{width: '85%', height: '85%'}}
                    source={item.image}
                  />
                </View>
                <View style={styles.view22}>
                  <View style={{width: '100%', height: '60%'}}>
                    <Text style={{fontSize: 18}}>{item.title}</Text>
                  </View>
                  <View style={{width: '100%', height: '40%', marginTop: '2%'}}>
                    <Text style={[styles.textSize, styles.color]}>
                      269.000đ
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.view3}>
                <View style={styles.view31} />
                <View style={styles.view32}>
                  <Image style={{width: 23, height: 23}} source={tt} />
                  <Text style={{fontSize: 15}}>Thành tiền: {item.price}đ</Text>
                </View>
              </View>
              <View style={styles.view4}>
                <View style={styles.view31}>
                  <Text>Đơn hàng đã hủy bởi bạn</Text>
                </View>
                <View style={styles.view321}>
                  <TouchableOpacity
                    style={{
                      width: '80%',
                      height: '80%',
                      backgroundColor: 'red',
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white'}}>Mua lại</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#DDDDDD',
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
  container2: {
    width: '100%',
    height: 220,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center',
  },
  view1: {
    backgroundColor: 'white',
    width: '96%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  view2: {
    backgroundColor: 'white',
    width: '96%',
    height: '40%',
    flexDirection: 'row',
    borderBottomWidth: 0.2,
  },
  view3: {
    width: '96%',
    height: '20%',
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    borderBottomColor: 'gray',
  },
  view4: {
    width: '96%',
    height: '20%',
    flexDirection: 'row',
  },
  view21: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view22: {
    width: '75%',
    height: '100%',
    marginTop: 2,
  },
  view31: {
    width: '55%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  view32: {
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view321: {
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textSize: {
    fontSize: 16,
  },
  color: {
    color: 'red',
  },
});

export default CancelOder;
