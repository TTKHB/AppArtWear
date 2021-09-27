import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SettingItem = ({ name, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
    </View>
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
    fontSize: 18
  },
})

export default SettingItem;