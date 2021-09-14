import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const myOrder = ({ icon, name, onPress, iconright }) => (
  <View style={styles.itemContainer}>
    <Icon style={styles.icon} name={icon} size={30} color="#8D6E63" />
    <Text style={styles.itemText}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({

  //ProfileItem
  itemContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    paddingVertical: 10,
    justifyContent: 'flex-start'
  },
  icon: {
    marginLeft: 18,
    margin: 10,
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
    fontSize: 16,
    marginBottom: 20,
  },
})

export default myOrder;