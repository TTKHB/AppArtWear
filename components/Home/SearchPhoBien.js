import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import COLORS from '../../assets/data/colors';
import {format} from '../../utils/Methods';
const {height, width} = Dimensions.get('window');
// Component tìm kiếm phổ biến
const SearchPhoBien = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('HomeNavigator', {
          screen: 'Product Detail',
          params: {id: item._id},
        })
      }>
      <View style={styles.viewPopSearch}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item.ThumbImg ? item.ThumbImg : null}}
            style={{height: 180, width: '100%'}}
          />
        </View>
        <View style={{marginLeft: 4}}>
          <Text style={styles.cardName}>{item.ten}</Text>

          <Text style={styles.price}>{format(item.gia)} đ</Text>
        </View>
        <View></View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Header Style
  headerContainer: {
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Body Style
  bodyContainer: {
    flex: 1,
    marginTop: 20,
  },
  viewPopSearch: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 2,
    width: width / 2.29,
    marginVertical: 5,
    marginHorizontal: 5,
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
});

export default SearchPhoBien;
