import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const InfomationArtWear = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={{
                        height: 300,
                        width: 500,
                        marginTop: -50
                    }}
                    source={require('../../assets/images/Banner/LogoArtWear.jpg')}
                />
            </View>
            <View style={styles.viewTextOne}>
                <Text style={styles.textOne}>Phiên bản v2.76.40.5.14.15</Text>
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
        marginTop: -50
    },
    textOne: {
        fontSize: 24,
        color: '#8E6E62',
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

export default InfomationArtWear;