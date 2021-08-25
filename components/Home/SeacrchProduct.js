import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import COLORS from '../../assets/data/colors';

import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('screen');

// tim kiếm hàng đầu
const Seacrh_Product = ({ furniture, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('HomeNavigator', { screen: 'Menuu' })}
    >
      <View style={style.card}>
        <Image
          source={furniture.image}
          style={{ height: 140, width: '100%', borderRadius: 10 }}
        />
        <Text style={style.cardName}>{furniture.name}</Text>
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={style.price}>{furniture.price}</Text>
        </View>

      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,

    position: 'absolute',
    elevation: 2,
    right: 4,


  },
  card: {
    height: 220,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width / 2.5,
    marginRight: 20,

    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
  cardName: {
    marginTop: 10,
    fontSize: 12,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  price: { color: COLORS.black, fontSize: 12, },

  title: { fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20 },
})
export default Seacrh_Product;