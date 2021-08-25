import React from 'react';
import { View,Text,FlatList,StyleSheet,ScrollView,TouchableOpacity,Dimensions,Image} from 'react-native';
import COLORS from '../../assets/data/colors';

import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');

 // tim kiem phổ biến
const PopularItemCard = ({furniture}) => {
  return (
    <View style={styles.popularItemCard}>
      <Image
        source={furniture.image}
        style={{
          width: 60,
          height: '100%',
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 10,
          marginRight: 10,
        }}
      />
      <View style={{paddingVertical: 15, justifyContent: 'center'}}>
        <Text style={styles.cardName}>{furniture.name}</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
    cardName: {
      marginTop: 10,
      fontSize: 12,
      color: COLORS.black,
      fontWeight: 'bold',
    },
    price: { color: COLORS.black, fontSize: 10},
    title: {fontSize: 18, fontWeight: 'bold', paddingHorizontal: 12},
    
      popularItemCard: {
        height: 60,
        width: width - 220,
        // borderWidth: 1,
        backgroundColor: COLORS.grey,

        marginVertical: 10,
        marginRight: 20,
        borderRadius: 5,
        flexDirection: 'row',
      },
})
export default PopularItemCard;