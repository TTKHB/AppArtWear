import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import COLORS from '../../assets/data/colors';
// import theme
import Icon from 'react-native-vector-icons/MaterialIcons';

// import product component
import ProductComponent from '../../components/ProductMenu/productsComponents';

// API
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';

// trang hàng đầu
const SearchHangDau = ({ navigation }) => {
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
                            <ProductComponent item={item} navigation={navigation} />
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
    badgeContainer: {
        top: -4,
        right: -4,
        width: 18,
        height: 18,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: COLORS.green
    },
    badgeText: {
        color: COLORS.light
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 25
    },
    subTitleText: {
        fontSize: 20,
        color: COLORS.gray
    },
    iconCaontainer: {
        padding: 10,
        borderRadius: 30,
        backgroundColor: COLORS.black
    },
    // Search Style
    searchContainer: {
        paddingLeft: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: COLORS.grey
    },
    textInputContainer: {
        flex: 1
    },
    // Body Style
    bodyContainer: {
        flex: 1,
        marginTop: 20,
    }
})

export default SearchHangDau;