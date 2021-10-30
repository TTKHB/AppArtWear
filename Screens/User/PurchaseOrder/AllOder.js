import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
export const huyen = require ('../../../assets/images/ao7.jpg')
const Product = [
    {
        id: 1,
        title: 'Áo thun Dragon ball Goku super saiyan blue ',
        Sluong: '1 Sản phẩm',
        price: '46.000đ'
    },
    {
      id: 2,
      title: 'Áo thun Dragon ball Goku super saiyan blue ',
      Sluong: '1 Sản phẩm',
      price: '46.000đ'
  },
]

const AllOder = () => {
  return (
    <View style={Styles.container}>
      <FlatList 
      data={Product}
      keyExtractor = { item => item.id}
      renderItem ={({item}) => {
          return(
              <View style={Styles.container1}>
              <View style={Styles.container2}>
                <Text style={{fontSize: 18,fontWeight: '300', marginTop: 5}}>Đơn hàng</Text>
              </View>
              <View style={Styles.container3}>
                <View style={{width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                <Image style={Styles.imageFlat} source ={huyen} />
                </View>
                <View style={{width: '70%'}}>
                  <Text style={{fontSize: 18, marginTop: '2%'}}> 
                    {item.title}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={Styles.textFlat}>{item.Sluong}:</Text>
                    <Text style={[Styles.textFlat, Styles.marginLeft]}>{item.price}</Text>
                  </View>
                </View>
              </View>
              <View style={Styles.container4}>
                <TouchableOpacity style={Styles.Tou}>
                   <Text style={Styles.texttou}> Xem chi tiết
                   </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.Tou, Styles.marginLeft]}>
                <Text style={Styles.texttou}> Mua lại 
                   </Text>
</TouchableOpacity>
              </View>
              </View>
          )
      }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
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
    height: 190,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center'

  },
  container2: {
    width: '93%',
    height: '18%',
  borderBottomWidth: 0.3
  },
  container3: {
    width: '93%',
    height: '50%',
    flexDirection: 'row'
  },
  container4: {
    width: '93%',
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center', justifyContent: 'center'
  },
  imageFlat: {
 width: '80%',
 height: '80%'
  },
  textFlat: {
    fontSize: 15,
    marginTop: 5
  },
  marginLeft: {
    marginLeft: 10
  },
  Tou: {
    width: '47%',
    height: 40, 
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texttou: {
    fontSize: 16,
    color: 'blue'
  }
});

export default AllOder;