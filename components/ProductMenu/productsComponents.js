import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Danhgia from '../../components/ProductMenu/Danhgia';
import ProductDetailsScreen from '../../Screens/Products/ProductDetailsScreen';
import COLORS from '../../assets/data/colors';

const { height, width } = Dimensions.get('window').width;

// componet trang detail

const ProductComponent = ({ item, navigation }) => {
    const [productVisible, setProductVisible] = useState(false)

    const ToggleProductVisible = () => {
        setProductVisible(!productVisible)
    }
    return (
        <TouchableOpacity style={styles.view} onPress={() => ToggleProductVisible()}>
            <Modal
                animationType="slide"
                visible={productVisible}
                onRequestClose={() => ToggleProductVisible()}>
                <ProductDetailsScreen closeModal={() => ToggleProductVisible()} item={item} navigation={navigation} />
            </Modal>
            <View style={{ flex: 2 }}>
                <Image
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    source={item.image} />
            </View>
            <View style={{}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>{item.price} VND</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 10,
        margin: 5,
        backgroundColor: COLORS.white,
        height: 300,
        width: width,
        margin: 10,
        borderColor: '#C0C0C0',
        borderWidth: 0.3,
    }

})

export default ProductComponent