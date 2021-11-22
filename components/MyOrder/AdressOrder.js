import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView, TouchableOpacity } from 'react-native';
import IconAdress from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSale from 'react-native-vector-icons/Fontisto';
import IconDiamond from 'react-native-vector-icons/SimpleLineIcons';

const AdressOrder= ({
  iconAdress,
  iconUser,
  iconsale,
  iconDiamond,
  color,
  name,
  onPress,
  iconright,
  nameAdress,
  nameUser,
  Phone
}) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>

    <View style={styles.itemBody}>
      <IconAdress name={iconAdress} size={30} color={color} />
      <IconSale name={iconsale} size={30} color={color} />
      <IconDiamond name={iconDiamond} size={30} color={color} />
      <Text style={styles.itemTextTitle}>{name}</Text>
    </View>

    <View style={styles.itemAdress}>
      <Text style={styles.itemTextAdress}>{nameAdress}</Text>
    </View>

    <View style={styles.itemBody}>
      <IconUser name={iconUser} size={30} color={color} />
      <IconSale name={iconsale} size={30} color={color} />
      <IconDiamond name={iconDiamond} size={30} color={color} />
      <Text style={styles.itemTextTitle}>{nameUser}</Text>
      <Text style={styles.itemTextTitle}>{Phone}</Text>
    </View>

  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
  },
  itemBody: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemAdress: {
    paddingHorizontal: 40,
  },
  itemTextTitle: {
    color: '#1e1e1e',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  itemTextAdress: {
    color: '#1e1e1e',
    fontSize: 18,
    marginLeft: 10,
  },
})



export default AdressOrder;