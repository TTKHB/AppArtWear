import React, {useState, useCallback} from 'react';
import {View, FlatList,Text, StyleSheet, ScrollView, Dimensions,SafeAreaView,  RefreshControl} from 'react-native';
import ProductFlashSale from '../../components/Home/ProductFlashSale';
import CountDown from '../../components/Home/CountDown';
// API
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import Gift from '../../components/Profile/ProfileItem/Gift';
const {height, width} = Dimensions.get('window');
// menu flash sale
import LoaderMenuFlashSale from'../../components/Home/Loader/LoaderMenuFlashSale';
const MenuFlashSale = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

 

  
  const onRefresh = React.useCallback(() => {
    setLoading(true);
    getMenuFlashSale();
    setRefreshing(false);
  }, []);
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      // Products
      getMenuFlashSale();
      return () => {
        setProducts([]);

      };
    }, []),
  );
  const getMenuFlashSale=() => {
      // Products
      axios
        .get(`${baseURL}products`)
        .then(res => {
          setProducts(res.data);
          if (loading) {
            setLoading(false)};
        })
        .catch(error => {
          console.log('Api call error');
        });
  };
  return (
    <SafeAreaView>
    {loading ? (
      <LoaderMenuFlashSale />
    ) : (
    <ScrollView showsVerticalScrollIndicator={false} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <View style={styles.container}>
        <View style={{marginTop: 15,alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold',color:'red'}}>KẾT THÚC</Text>
          <CountDown />
        </View>
        <View style={styles.contentGif}>
          <Gift textHeader="Shop vui vẻ, rinh quà rẻ" iconGif="gift" />
        </View>
        <View style={{marginTop: 15,alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold',color:'red',fontSize: 20}}>GỢI Ý SẢN PHẨM</Text>
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
    )}
    </SafeAreaView>
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
    elevation: 2,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    height: height / 3.6,
  },
});
export default MenuFlashSale;
