import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
const CheckOutSuccess = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View >
                <Image style={{ height: 300, width: 300, marginTop: -100 }} source={require('../../../assets/images/users/success.jpg')} />
            </View>
            <View style={styles.viewTextOne}>
                <Text style={styles.textOne}>Tuyệt vời! Bạn đã thanh toán</Text>
                <Text style={styles.textOne}>thành công</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textTwo}>ArtWear sẽ đồng hành cùng bạn mua sắm</Text>
                <Text style={styles.textTwo}> tiện lợi và dễ dàng</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Main')}
            >
                <View style={styles.btn}>
                    <Icon
                        name="navigate-next"
                        size={35}
                        color="#fff"
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            padding: 5,
                        }}
                    />
                </View>
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:5 }}>
                <Text style={styles.textTwo}>Quay lại</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    viewTextOne: {
        marginVertical: 10,
        alignItems:'center'
    },
    textOne: {
        fontSize: 26,
        color: 'black',
        fontWeight: 'bold'
    },
    textTwo: {
        fontSize: 18,
        color: '#808080',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 15,
        borderRadius: 50,
        height: 50,
        width: 50,
    }

})

export default CheckOutSuccess;