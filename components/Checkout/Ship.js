import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconShip from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Ship = ({ icon, iconship, name, nameship, onPress, iconright }) => (
  <View style={styles.itemContainer}>
    <View style={{ flexDirection: 'row', }}>
      <Icon name={icon} size={30} color="#8D6E63" />
      <Text style={[styles.itemText, { marginLeft: icon ? 10 : 0 }]}>{name}</Text>
      <Text style={[styles.iconright, { marginRight: iconright ? 10 : 0, marginTop: 3 }]}>25.000 đ</Text>
      <FontAwesome name={iconright} size={26} color="#1e1e1e" onPress={onPress} />
    </View>
    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 2 }}>
      <IconShip name={iconship} size={26} color="#A9A9A9" />
      <Text style={[styles.itemTextShip, { marginLeft: iconship ? 10 : 0, marginLeft: 10 }]}>{nameship}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  //ProfileItem
  itemContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 1,
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5
  },
  iconright: {
    color: '#1e1e1e',
    fontSize: 16,
  },
  itemTextShip: {
    flex: 1,
    color: '#1e1e1e',
    fontSize: 15,
    marginTop: 3
  },
})

export default Ship;