import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
const DialogRating = () => {
    return (
        <View>
            <TouchableOpacity
                disabled={true}
                style={styles.container}
            >
                <LottieView
                    source={require('../../assets/icon/Loader/85744-success.json')}
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
    },
    imageLoader: {
        height: "100%",
        width: "100%",
    }

});

export default DialogRating;