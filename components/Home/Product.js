import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import COLORS from '../../assets/data/colors';
const { width } = Dimensions.get('screen');

// flash sale

const Product = ({ furniture, navigation }) => {
  return (
    <TouchableOpacity>
      <View style={style.card}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={furniture.image}
            style={{ height: 140, width: '100%', borderRadius: 10 }}
          />
          <View style={{ marginLeft: -30, marginTop: -4 }}>
            <Image
              style={style.iconContainer}
              source={require('../../assets/icon/sale.png')} />
          </View>
        </View>


        <Text style={style.cardName}>{furniture.name}</Text>
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={style.price}>{furniture.price}</Text>
        </View>
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={style.price1}>{furniture.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
  },
  card: {
    height: 250,
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
    fontSize: 18,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  price: { 
    color: COLORS.red, 
    fontSize: 16,
    fontWeight:'bold' 
  },
  price1: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    paddingHorizontal: 20 
  },
});
export default Product;
