import React, {useState} from 'react'
import {  StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Danhgia from '../../components/ProductMenu/Danhgia';
import ProductDetailsScreen from '../../Screens/Products/ProductDetailsScreen'
import COLORS from '../../assets/data/colors';







// componet trang detail

const ProductComponent = ({item,navigation}) => {
    const [productVisible, setProductVisible] = useState(false)

    const ToggleProductVisible = () => {
        setProductVisible(!productVisible)
    }
    return(
        <TouchableOpacity 
            onPress={() => ToggleProductVisible()}
            style={styles.container}>

                <Modal 
                    animationType="slide" 
                    visible={productVisible}
                    onRequestClose={() => ToggleProductVisible()}>
                        <ProductDetailsScreen closeModal={() => ToggleProductVisible()} item={item}  navigation={navigation}   />
                </Modal>
                    <View style={styles.imgContainer}>
                        <Image source={item.image} style={{width: 165.3, height: 150}} />
                    </View>
                    <Text style={styles.title}>{item.name}</Text>
                    
                    <Text style={styles.subTitle}>{item.price} vnđ</Text>
        
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 5,

        backgroundColor:COLORS.white
    },
    title: {
    
        fontSize: 15,
        color: COLORS.black
    },
    subTitle: {
        fontSize: 12,
        color: COLORS.red
    },
    imgContainer: {
        left:-9.5,
        marginTop:-10,
        justifyContent: 'center'
    },

})

export default ProductComponent