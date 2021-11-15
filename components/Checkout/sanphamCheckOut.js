import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
  Image
}
  from 'react-native';

const sanphamCheckOut = ({ img, name, size, price, textright }) => (
  <View style={styles.itemContainer}>
    <Image source={img} style={{ height: 80, width: 80, borderColor: '#8D6E63', borderWidth: 0.5 }} />
    <View style={{ flexDirection: 'column' }}>
      <Text style={[styles.itemText, { marginLeft: img ? 10 : 0 }]}>{name}</Text>
      <Text style={[styles.itemTextSize, { marginLeft: img ? 10 : 0, marginTop: name ? 5 : 0 }]}>{size}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={[styles.itemTextPrice, { marginLeft: img ? 10 : 0, marginTop: name ? 5 : 0 }]}>{price}</Text>
        <Text style={[styles.itemTextAmount, { marginLeft: img ? 10 : 0, marginTop: name ? 5 : 0 }]}>{textright}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  //ProfileItem
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemText: {
    color: '#1e1e1e',
    fontSize: 16,
    marginTop: -5
  },
  itemTextSize: {
    color: '#1e1e1e',
    fontSize: 16,
  },
  itemTextPrice: {
    color: '#1e1e1e',
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemTextAmount: {
    color: '#1e1e1e',
    fontSize: 16,
    fontWeight: 'bold'
  },
})

export default sanphamCheckOut;