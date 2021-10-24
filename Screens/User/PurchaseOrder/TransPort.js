import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


const TransPort = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.images} source={{
                uri: 'https://www.trangmall.com/Client/upload/News/User_1/2018/12/3/6P2SHv.png',
            }} />
            <Text style={styles.welcome}>
                Đang vận chuyển
            </Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    images: {
        width: 100,
        height: 100,
    }
});

export default TransPort;