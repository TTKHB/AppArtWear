import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ProfileItem = ({ icon, name, onPress ,iconright}) => (
    <View style={styles.itemContainer}>
      <Icon name={icon} size={30} color="#00008B" />
      <Text style={[styles.itemText, { marginLeft: icon ? 10 : 0 }]}>{name}</Text>
      <Text style={[styles.iconright, { marginRight: iconright? 10 : 0 }]}>Xem tất cả</Text>
      <FontAwesome  name={iconright} size={26} color="#1e1e1e" onPress={onPress} />
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
      fontWeight:'bold',
      fontSize: 22,
    },
    iconright: {
      color: '#1e1e1e',
      fontSize: 16,
    },
  })

  export default ProfileItem;