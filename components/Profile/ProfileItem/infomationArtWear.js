import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView,Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const infomationArtWear = ({img, name, onPress ,iconright}) => (
    <View style={styles.itemContainer}>
      <Image source={img} style={{height:80,width:80,marginTop:15}}/>
      <Text style={[styles.itemText, { marginLeft: img ? 0 : 0 }]}>{name}</Text>
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
      marginRight:10
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

  export default infomationArtWear;