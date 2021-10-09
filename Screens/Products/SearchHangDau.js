import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
// import product component
import ProductComponent from '../../components/ProductMenu/ProductsComponents';

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
    
    // Body Style
    bodyContainer: {
        flex: 1,
        marginTop: 20,
    }
})

export default SearchHangDau;
   // const renderItemComment = ({item})=>{
        //   return (
        //   <View style={styles.container}>
        //   <Image style={styles.image} source={{uri: item.image}} />
        //   <View style={styles.content}>
        //     <View style={styles.contentHeader}>
        //       <Text style={styles.name}>{item.name}</Text>
        //       <Text style={styles.time}>9:58 am</Text>
        //     </View>
        //     <View style={styles.rate}>
        //       <Star ratings={4} reviews={4} />
        //     </View>
        //     <Text>{item.comment}</Text>
        //   </View>
        // </View>
        //   );
        // };



        // const styles = StyleSheet.create({
//   container: {
//     paddingRight: 16,
//     paddingVertical: 12,
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
//   content: {
//     marginLeft: 16,
//     flex: 1,
//   },
//   contentHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 6,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#CCCCCC',
//   },
//   image: {
//     width: 45,
//     height: 45,
//     borderRadius: 20,
//     marginLeft: 20,
//   },
//   time: {
//     fontSize: 11,
//     color: '#808080',
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   rate: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     paddingBottom: 2,
//   },
// });