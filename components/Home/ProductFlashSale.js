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
const {width} = Dimensions.get('screen');

// flash sale

const ProductFlashSale = ({item, navigation}) => {
  return (
    <TouchableOpacity>
      <View style={style.card}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri:item.ThumbImg ? item.ThumbImg : null}}
            style={{height: 170, width: '100%'}}
          />
          <View style={{marginLeft: -30, marginTop: -4}}>
            <Image
              style={style.iconContainer}
              source={require('../../assets/icon/sale.png')}
            />
          </View>
        </View>

        <View style={{marginLeft: 4}}>
          <Text style={style.cardName}>{item.ten}</Text>
          <Text style={style.price}>{item.gia}</Text>
          <Text style={style.price1}>{item.gia}</Text>
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
    fontWeight: 'bold',
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
    paddingHorizontal: 20,
  },
});
export default ProductFlashSale;
