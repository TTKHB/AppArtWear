import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
const DialogCart = () => {
    return (
        <View>
            <TouchableOpacity
                disabled={true}
                style={styles.container}
            >
                <LottieView
                    source={require('../../assets/icon/Loader/66433-loader.json')}
                    autoPlay loop
                    style={styles.imageLoader}
                />
             
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50%'
    },
    imageLoader: {
        height: 125,
        width: 125,
    }

});

export default DialogCart;