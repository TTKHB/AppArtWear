import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
export const ao7 = require('../../../assets/images/huyen.jpg');
export const car = require('../../../assets/images/car1.jpg');
const Product = [
  {
    id: 1,
    images: ao7,
    title: 'Vũ Thị Khánh Huyền',
    price: '21.000đ',
    SL: '1',
  },
];

const StarRatingOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.images} source={{
                uri: 'https://www.trangmall.com/Client/upload/News/User_1/2018/12/3/6P2SHv.png',
            }} />
            <Text style={styles.welcome}>
                Đánh giá
            </Text> */}
      <FlatList
        data={Product}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.container1}>
              <View style={styles.container2}>
                <View style={styles.left}>
                  <View style={styles.giua}>
                    <Image style={styles.images} source={item.images} />
                  </View>
                </View>
                <View style={styles.right}>
                  <Text style={styles.textFlat}>{item.title}</Text>
                  <Text style={styles.textFlat1}>Số lương: X{item.SL}</Text>
                  <Text style={styles.textFlat1}>{item.price}</Text>
                </View>
              </View>
              <View style={styles.container3}>
                <Image style={styles.icon} source={car} />
                <Text style={{fontSize: 17, color: '#06AB7D', marginLeft: 10}}>
                  Giao hàng thành công
                </Text>
              </View>

              <View style={styles.container5}>
                <View style={styles.left1}>
                  <Text style={{fontSize: 16, marginTop: 5}}>
                    Đánh giá và nhận xét tại đây, trước ngày 24-04-2021
                  </Text>
                  <Text style={{color: 'red'}}>
                    Đánh giá và nhận 200 kim cương
                  </Text>
                </View>
                <View style={styles.right1}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('UserNavigator', {screen: 'Rating'})
                    }
                    style={{
                      width: '85%',
                      height: '70%',
                      backgroundColor: 'red',
                      borderRadius: 7,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Đánh giá
                    </Text>
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
  container1: {
    width: '100%',
    height: 222,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center',
  },
  container2: {
    width: '97%',
    height: 110,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
  },
  left: {
    width: '27%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    width: '70%',
    height: '100%',
  },
  giua: {
    width: '83%',
    height: '80%',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
  },
  textFlat: {
    fontSize: 19,
    padding: 7,
    fontWeight: 'bold',
  },
  marrgin: {
    marginTop: 15,
  },
  textFlat1: {
    fontSize: 19,
    textAlign: 'right',
  },
  container3: {
    width: '97%',
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  container5: {
    width: '97%',
    height: 70,
    flexDirection: 'row',
  },
  left1: {
    width: '55%',
    height: '100%',
    backgroundColor: 'white',
  },
  right1: {
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StarRatingOrder;
