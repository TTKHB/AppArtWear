import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
// import product component
import SearchHangDau from '../../components/Home/SearchHangDau';

// API
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';

// Menu tìm kiếm hàng đầu
const MenuSearchHangDau = ({ navigation }) => {
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
            {/* Header */}
            <View style={styles.headerContainer}>

            </View>
            {/* Body */}
            <View style={styles.bodyContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={products}
                    numColumns={2}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => {
                        return (
                            <SearchHangDau item={item} navigation={navigation} />
                        )
                    }}
                />
            </View>
        </View>

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
    
    // Body Style
    bodyContainer: {
        flex: 1,
        marginTop: 20,
    }
})

export default MenuSearchHangDau;
