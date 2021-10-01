import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
ScrollView,
SafeAreaView,
  FlatList,
  SectionList,
  Image,
  Dimensions,
} from 'react-native';
import Star from '../../components/ProductMenu/Star';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import {clothes} from '../../assets/data/products';
import COLORS from '../../assets/data/colors';
const {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchHangDau from '../../Screens/Products/SearchHangDau';
import ProductComponent from '../../components/ProductMenu/ProductsComponents';
import Animated from 'react-native-reanimated';
const FavoriteScreen = ({navigation, i}) => {
  const renderItemFavorite = ({item, index}) => {
    return (
      <View style={styles.view}>
        <View style={styles.iconContainer}>
          <Icon name="favorite" color="red" size={20} />
        </View>
        <View style={{flex: 2}}>
          <Image
            style={{flex: 1, width: null, height: null, resizeMode: 'stretch'}}
            source={item.image}
          />
        </View>
        <View style={{top: -4, marginLeft: 5}}>
          <Text style={{fontSize: 18}}>{item.name}</Text>
          <View style={styles.rate}>
            <Star
              ratings={4}
              reviews={100}
            />
          </View>
          <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.iconAddCart}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/icon/addcart.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 16, color: 'red'}}>{item.price}</Text>
        </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.iconHeader}>
            {/* <Image style={{width:20,height:20}}
                source={require('../../assets/icon/back.png')}
              /> */}
          </View>
          <View style={{marginRight: 20, top: 10}}>
            <IconCart name="handbag" color="white" size={25} />
          </View>
        </View>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 150,
            top: -16,
          }}>
          Yêu thích
        </Text>
      </View>

      {/* Body */}    
       <SafeAreaView style={styles.bodyContainer}>
            <ScrollView>
          
      
            <FlatList
          showsVerticalScrollIndicator={false}
          data={clothes}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={renderItemFavorite}
        />
       
      <View><Text style={{
            fontSize: 25,
            color: 'black',
            marginLeft:5,
            marginTop:25,
            fontWeight: 'bold',
      
          }}>Sản phẩm đề xuất</Text>
    
    <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={clothes}
                  numColumns={2}
                  keyExtractor={item => item.id}
                  renderItem={renderItemFavorite} />
                 
              
          
</View>
        
</ScrollView>
  
        
                 </SafeAreaView>
      </View>
   
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Header Style
  headerContainer: {
    height: 50,
    backgroundColor: '#8D6E63',
    borderColor: '#F5F5F5',
  },
  iconHeader: {
    marginLeft: 2,
    top: 10,
  },
  iconContainer: {
    height: 30,
    width: 30,
    position: 'absolute',
    marginLeft: 143,
    top: 2,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Body Style
  bodyContainer: { 
    flex: 1,
  },
  view: {
    flex: 1,
    margin: 8,
    backgroundColor: COLORS.white,
    height: 270,
    width: 180,
    borderColor: 'black',
    borderWidth: 0.3,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 2,
  },
  wrap: {
    flex: 1,
    padding: 10,
  },
  iconAddCart: {
    height: 40,
    width: 40,
    position: 'absolute',
    marginLeft: 124,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top:-20
  },
});

export default FavoriteScreen;
