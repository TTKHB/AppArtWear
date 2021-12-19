import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import COLORS from '../../assets/data/colors';
const {width} = Dimensions.get('screen');
import {format} from '../../utils/Methods';
// flash sale
const ProductFlashSale = ({item, navigation}) => {
  console.log('item cua flash sale', item);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('HomeNavigator', {
          screen: 'Product Detail',
          params: {id: item._id},
        })
      }>
      <View style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item.ThumbImg ? item.ThumbImg : null}}
            style={{height: 180, width: '100%'}}
          />
          <View style={{marginLeft: -35, marginTop: -4}}>
            <Image
              style={styles.iconContainer}
              source={require('../../assets/icon/sale.jpg')}
            />
          </View>
        </View>

        <View style={{marginLeft: 4}}>
          <Text style={styles.cardName}>{item.ten}</Text>
          <Text style={styles.price}>{format(item.gia)} đ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
  },
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 2,
    width: width / 2.29,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 0.5,
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
});
export default ProductFlashSale;
