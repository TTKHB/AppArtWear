import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Service = ({ icon, name, onPress ,iconright}) => (
    <View style={styles.itemContainer}>

      {/* <Icon  style={styles.icon} name={icon} size={30} color="#8D6E63" /> */}
      {/* <Text style={styles.itemText}>{name}</Text> */}

      <View style={styles.btnItemOne}>
      <Icon  style={styles.icon} name={icon} size={30} color="#8D6E63" />
        </View>
              <Text style={styles.itemText}>{name}</Text>
    </View>
  );

  
  const styles = StyleSheet.create({

      //ProfileItem
    itemContainer: {
      backgroundColor: '#fff',
      paddingHorizontal: 0,
      paddingVertical: 10,
      width:80,
    },
    icon:{
        margin:10,
        borderRadius: 15
    },
    itemText: {
      flex: 1,
      color: '#1e1e1e',
      fontSize: 16,
      marginTop:5
    },
    btnItemOne: {
        backgroundColor: '#E3D5D0',
        borderRadius: 15,
        width: 50,
        height: 50,
        marginLeft: 15,
      },
  })

  export default Service;