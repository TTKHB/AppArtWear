import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import COLORS from '../../assets/data/colors';
export const senddd = require('../../assets/images/eye.jpg');
import Star from '../ProductMenu/Star';
import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';
import {format} from '../../utils/Methods';
const { width } = Dimensions.get('screen');

// tim kiếm hàng đầu
const SearchHangDau = ({ item, navigation }) => {
  const UpdateView=(item)=>{
    axios.put(`${baseURL}products/increase_views/`+item,
          )
          .then(function (response) {
            console.log("view",response);
            
          })
          .catch(function (error) {
            console.log(error);
          })
   }
 
  return (
    
    <TouchableOpacity onPress={() => {UpdateView(item._id);navigation.navigate('HomeNavigator', { screen: 'Product Detail',params: {id: item._id}})}}>
      <View style={styles.card } >
        <Image
          source={{ uri: item.ThumbImg ? item.ThumbImg : null }}
          style={{ height: 170, width: '100%' }}
        />
        <View style={{ marginLeft: 5 }}>
          <Text style={styles.cardName}>{item.ten}</Text>
          <View style={styles.rate}>
            <Star
              ratings={4}
              reviews={10}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignContent: 'center'
            }}>
            <Text style={styles.price}>{format(item.gia)} đ</Text>
            <Image source={senddd} style={{width: 16, height: 16, marginLeft: 30, marginTop: 2.5}}/>
            <Text style={styles.viewer}>{item.viewer}</Text>
          </View>
          
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 2,
    width: width / 2.24,
    marginVertical: 5,
    marginHorizontal:5
  },
  cardName: {
    marginTop: 10,
    fontSize: 18,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  price: {
    color: COLORS.red,
    fontSize: 16,
    fontWeight: 'bold',
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 2,
  },
  viewer: {
    marginRight:15
  }
})
export default SearchHangDau;