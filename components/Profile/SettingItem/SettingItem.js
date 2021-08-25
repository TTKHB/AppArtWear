import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SettingItem = ({name }) => (
  <View style={styles.itemContainer}>
    {/* <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" /> */}
    <Text style={styles.itemText}>{name}</Text>
    <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
  </View>
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
        fontSize:18
      },
  })

  export default SettingItem;