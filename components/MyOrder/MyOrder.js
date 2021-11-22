import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const MyOrder = ({ icon, name, onPress }) => (
  <View style={styles.itemContainer}>
    <Icon name={icon} size={30} color="#00008B" />
    <Text style={[styles.itemText, { marginLeft: icon ? 10 : 0 }]}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  //ProfileItem
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
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

export default MyOrder;