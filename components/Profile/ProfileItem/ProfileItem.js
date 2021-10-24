import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
  TouchableOpacity
}
from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileItem = ({ icon, name, onPress, iconright }) => (
  <View style={styles.itemContainer}>
    <Icon name={icon} size={30} color="#00008B" />
    <Text style={[styles.itemText, { marginLeft: icon ? 10 : 0 }]}>{name}</Text>
    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={onPress}>
      <Text style={[styles.iconright, { marginRight: iconright ? 10 : 0 }]}>Xem tất cả</Text>
      <FontAwesome name={iconright} size={26} color="#1e1e1e" />
    </TouchableOpacity>
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
    marginTop: 2
  },
})

export default ProfileItem;