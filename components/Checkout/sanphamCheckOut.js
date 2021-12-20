import React from 'react';
import { 
  View, 
  Text,
  SafeAreaView, 
  StyleSheet, 
  StatusBar, 
  Alert, 
  ScrollView, 
  Image ,
  Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('window');
const sanphamCheckOut = ({ img, name, size, price, textright }) => (
  <View style={styles.itemContainer}>
    <Image source={img} style={{ height: 100, width:100, borderColor: '#8D6E63', borderWidth: 0.5 }} />
    <View style={{ flexDirection: 'column' }}>
      <Text style={[styles.itemText, { marginLeft: img ? 10 : 0 }]}>{name}</Text>
      <Text style={[styles.itemTextSize, { marginLeft: img ? 10 : 0, marginTop: name ? 5 : 0 }]}>Size {size}</Text>
      <Text style={[styles.itemTextPrice, { marginLeft: img ? 10 : 0, marginTop: name ? 5 : 0 }]}>{price} đ</Text>
      <Text style={[styles.itemTextAmount, { marginLeft: img ? 10 : 0, marginTop: name ? 5 : 0 }]}>x {textright}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  //ProfileItem
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: 'center',
    width:width,
    paddingHorizontal:20
  },
  itemText: {
    color: '#1e1e1e',
    fontSize: 16,
    marginTop: -5,
    fontWeight:'bold'
  },
  itemTextSize: {
    color: 'black',
    fontSize: 16,
  },
  itemTextPrice: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemTextAmount: {
    color: '#1e1e1e',
    fontSize: 16,
    fontWeight: 'bold'
  },
})

export default sanphamCheckOut;