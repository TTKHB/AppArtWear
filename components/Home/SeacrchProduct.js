import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import COLORS from '../../assets/data/colors';

const { width } = Dimensions.get('screen');
import Star from'../../components/ProductMenu/Star';


// tim kiếm hàng đầu
const SeacrhProduct = ({ item, navigation }) => {

  return (
    <TouchableOpacity onPress={()=> navigation.navigate('HomeNavigator', {screen: 'Product Detail',params: {a:item}})}>
      <View style={styles.card}>
        <Image
            source={{uri:item.ThumbImg}}
          style={{ height: 170, width: '100%'}}
        /> 
        <View style={{marginLeft:5}}>
        <Text style={styles.cardName}>{item.ten}</Text>
         <View style={styles.rate}>
                  <Star
                    ratings={4}
                    reviews={10}
                  />
                </View>
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.price}>{item.gia} vnđ</Text>
         </View> 
      </View>
        </View>
        
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 7,
    width: width / 2.5,
    marginRight: 20,
    marginVertical: 10,
  },
  cardName: {
    marginTop: 10,
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  price: { 
    color: COLORS.black,
     fontSize: 14, 
    },
  rate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 2,
  },
})
export default SeacrhProduct;