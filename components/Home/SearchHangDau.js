import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import COLORS from '../../assets/data/colors';

const { width } = Dimensions.get('screen');
import Star from '../ProductMenu/Star';


// tim kiếm hàng đầu
const SearchHangDau = ({ item, navigation }) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate('HomeNavigator', { screen: 'Product Detail', params: { a: item } })}>
      <View style={styles.card}>
        <Image
          // source={{uri:item.ThumbImg}}
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
            }}>
            <Text style={styles.price}>{item.gia} VNĐ</Text>
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
    color: COLORS.black,
    fontSize: 16,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 2,
  },
})
export default SearchHangDau;