import React from 'react';
import { View, Text, SafeAreaView,Share,TouchableOpacity, StyleSheet, StatusBar, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Service = ({ icon, name, onPress, iconright }) => (
  <View style={styles.item}>
    <View  style={styles.btnItemOne}>
      <Icon name={icon} size={30} color="#8D6E63" />
    </View>
    <View>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  btnItemOne: {
    backgroundColor: '#E3D5D0',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    alignItems: 'center',
    flex: 1,
    margin: 2,
    marginVertical: 5,
  },
  itemText: {
    fontSize: 14,
    color: '#000',
    marginTop: 10
  },
})

export default Service;