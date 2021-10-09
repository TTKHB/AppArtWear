import React, {useState, useCallback} from 'react';
import {View, FlatList, StyleSheet, ScrollView, Dimensions} from 'react-native';
import ProductFlashSale from '../../components/Home/ProductFlashSale';
// API
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';

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
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          numColumns={2}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return <ProductFlashSale item={item} navigation={navigation} />;
          }}
        />
      </View>
    </View>
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
});
export default MenuFlashSale;
