import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, View,Text, FlatList,Dimensions,ScrollView,SafeAreaView,RefreshControl } from 'react-native'
// import product component
import SearchHangDau from '../../components/Home/SearchHangDau';
import SwiperItemBody from '../../components/Home/SwiperItemBody';
import LoaderSearchHangDau from'../../components/Home/Loader/LoaderSearchHangDau';
// API
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
const {height, width} = Dimensions.get('window');
// Menu tìm kiếm hàng đầu dựa theo lượt viewer
const MenuSearchHangDau = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = React.useCallback(() => {
    setLoading(true);
    getAllMenuSearchHangDau();
    setRefreshing(false);
  }, []);
  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      // Products
      getAllMenuSearchHangDau();
      return () => {
        setProducts([]);
      };
    }, []),
  );
   const getAllMenuSearchHangDau=() => {
        // Products
        axios
          .get(`${baseURL}products`)
          .then(res => {
            setProducts(res.data);
            if (loading) {
              setLoading(false);
            }
           })
          .catch(error => {
            console.log('Api call error');
          });
        };
  
    return (
      <SafeAreaView>
      {loading ? (
        <LoaderSearchHangDau/>
      ) : (
      <ScrollView showsVerticalScrollIndicator={false}  refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }>
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
            <View style={styles.bannerGifTwo}>
            <SwiperItemBody />
          </View>
            </View>
            {/* Body */}
            <View style={styles.bodyContainer}>
            <ScrollView showsVerticalScrollIndicator={false} horizontal>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={products.sort(function(a, b){return b.viewer-a.viewer})}
                    numColumns={2}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => {
                        return (
                            <SearchHangDau item={item} navigation={navigation} />
                        )
                    }}
                />
                </ScrollView>
            </View>
        </View>
        </ScrollView>
      )}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    // Header Style
    headerContainer: {
        paddingTop: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bannerGifTwo: {
      height: height / 6,
      resizeMode: 'contain',
      marginTop: 10,
    },

    // Body Style
    bodyContainer: {
        flex: 1,
        marginTop: 20,
      
    }
})

export default MenuSearchHangDau;
