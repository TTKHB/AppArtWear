import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView,Image } from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const sanphamCheckOut = ({img, name,size,price,textright}) => (
      <View style={styles.itemContainer}>
      <Image source={img} style={{height:100,width:100,borderColor:'#8D6E63',borderWidth:0.5}}/>
      <View style={{flexDirection:'column'}}>
      <Text style={[styles.itemText, { marginLeft: img ? 10 : 0 }]}>{name}</Text>
       <Text style={[styles.itemTextSize, { marginLeft: img ? 10 : 0 ,marginTop: name ? 5: 0}]}>{size}</Text>
       <Text style={[styles.itemTextPrice, { marginLeft: img ? 10 : 0 ,marginTop: name ? 5: 0}]}>{price}</Text>
    </View>
    <View style={{marginLeft:-30,marginTop:50}}>
    <Text style={styles.itemTextAmount}>{textright}</Text>
    </View>
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
      color: '#1e1e1e',
      fontSize: 18,
      marginTop:-5
    },
    itemTextSize: {
      color: '#1e1e1e',
      fontSize: 16,
    },
    itemTextPrice: {
      color: '#1e1e1e',
      fontSize: 16,
      fontWeight:'bold'
    },
    itemTextAmount: {
      color: '#1e1e1e',
      fontSize: 16,
      fontWeight:'bold'
    },
  })

  export default sanphamCheckOut;