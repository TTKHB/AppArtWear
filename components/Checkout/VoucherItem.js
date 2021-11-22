import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSale from 'react-native-vector-icons/Fontisto';
import IconDiamond from 'react-native-vector-icons/SimpleLineIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const VoucherItem = ({ icon, iconsale, iconDiamond, color, name, onPress, iconright, nameVoucher }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <Icon name={icon} size={30} color={color} />
    <IconSale name={iconsale} size={30} color={color} />
    <IconDiamond name={iconDiamond} size={30} color={color} />
    <Text style={styles.itemText}>{name}</Text>
    <Text style={[styles.iconright, { marginRight: iconright ? 4 : 0, marginTop: 0 }]} onPress={onPress}>{nameVoucher}</Text>
    <FontAwesome name={iconright} size={26} color="#1e1e1e" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
    fontSize: 18,
    marginLeft: 10
  },
  iconright: {
    fontSize: 16
  }
})

export default VoucherItem;