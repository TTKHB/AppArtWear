import React, {useState, useCallback} from 'react';
import {View, FlatList, StyleSheet, ScrollView, Dimensions} from 'react-native';
import ProductFlashSale from '../../components/Home/ProductFlashSale';
// API
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import Gift from '../../components/Profile/ProfileItem/Gift';
const { height, width } = Dimensions.get('window');
// menu flash sale

const MenuFlashSale = ({navigation}) => {
  const [products, setProducts] = useState([]);
  useFocusEffect(
    useCallback(() => {
      // Products
      axios
        .get(`${baseURL}products`)
        .then(res => {
          setProducts(res.data);
        })
        .catch(error => {
          console.log('Api call error');
        });
      return () => {
        setProducts([]);
      };
    }, []),
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
       <View style={styles.contentGif}>
                    <Gift textHeader="Shop vui vẻ, rinh quà rẻ" iconGif="gift" />
                </View>
      <View style={styles.bodyContainer}>
        <ScrollView showsVerticalScrollIndicator={false} horizontal>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          numColumns={2}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return <ProductFlashSale item={item} navigation={navigation} />;
          }}
        />
        </ScrollView>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 1,
    marginTop: 15,
  },
  contentGif: {
    backgroundColor: '#fff',
    elevation:2,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    height: height / 3.6
},
});
export default MenuFlashSale;
