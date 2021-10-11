import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, FlatList,Image } from 'react-native'
import COLORS from '../../assets/data/colors';
// API
import SearchPhoBien from '../../components/Home/SearchPhoBien';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
const {height, width} = Dimensions.get('window');
// Menu tìm kiếm phổ biến
const MenuSearchPhoBien = ({ navigation }) => {
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
            <View style={styles.viewDanhMuc}>
            <View style={{ marginTop: 5 }}>
            <FlatList
                    showsVerticalScrollIndicator={false}
                    data={products}
                    numColumns={2}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => {
                        return (
                            <SearchPhoBien item={item} navigation={navigation} />
                        )
                    }}
                />
            </View>
          </View>
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
        alignItems: "center",
      
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
    },
    viewPopSearch: {
        height: 250,
        backgroundColor: COLORS.white,
        elevation: 2,
        width: width / 2.29,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 5,

      },
      cardName: {
        marginTop: 10,
        fontSize: 18,
        color: COLORS.black,
        fontWeight: 'bold',
      },
      price: {
        color: COLORS.red,
        fontSize: 16,
        fontWeight: 'bold',
      },
    
})

export default MenuSearchPhoBien;
