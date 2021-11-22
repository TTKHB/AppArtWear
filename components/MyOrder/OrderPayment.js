import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconShip from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OrderPayment = ({ icon, name, nameship, onPress, iconright, namePayment }) => (
  <View style={styles.itemContainer}>
    <View style={{ flexDirection: 'row', }}>
      <Icon name={icon} size={30} color="#FF6600" />
      <Text style={[styles.itemText, { marginLeft: icon ? 10 : 0 }]}>{name}</Text>
      <FontAwesome name={iconright} size={26} color="#1e1e1e" onPress={onPress} style={{marginTop:4}} />
    </View>
    <View>
      <Text style={styles.itemTextPayment}>Thanh toán bằng: {namePayment}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  //ProfileItem
  itemContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
    fontWeight: 'bold',
    fontSize: 22,
  },
  iconright: {
    color: '#1e1e1e',
    fontSize: 16,
  },
  itemTextPayment: {
    flex: 1,
    color: '#1e1e1e',
    fontSize: 18,
  },
})

export default OrderPayment;