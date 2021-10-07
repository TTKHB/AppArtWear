import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import COLORS from '../../assets/data/colors';
const {height, width} = Dimensions.get('window');
import Star from '../../components/ProductMenu/Star';


// Tất cả Tìm kiếm hàng đầu
const ProductComponent = ({item, navigation}) => {
    console.log('item cua thang search top',item);
    return (
      <TouchableOpacity 
        onPress={() => navigation.navigate('HomeNavigator', {  screen: 'Product Detail',params: {a: item}
          })
        }>
        <View style={styles.card}>
          <Image
            source={{uri:item.ThumbImg ? item.ThumbImg : null}}
            style={{height: 170, width: '100%'}}
          />
          <View style={{marginLeft: 5}}>
            <Text style={styles.cardName}>{item.ten}</Text>
            <View style={styles.rate}>
              <Star ratings={4} reviews={10} />
            </View>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.price}>{item.gia} vnđ</Text>
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
      fontSize: 16,
      color: COLORS.black,
      fontWeight: 'bold',
    },
    price: {
      color: COLORS.black,
      fontSize: 14,
    },
    rate: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingBottom: 2,
    },
  });

export default ProductComponent;
