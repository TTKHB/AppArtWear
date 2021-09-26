import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const myService = ({ icon, name }) => (
  <View style={styles.itemContainer}>
    <Icon name={icon} size={30} color="#00008B" />
    <Text style={[styles.itemText, { marginLeft: icon ? 10 : 0 }]}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  //ProfileItem
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: 'center',
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
})

export default myService;