import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native';

const VoucherForm = ({ icon, name }) => (
    <View style={styles.container}>
        <Text style={{ fontSize: 50, color: "white", fontWeight: 'bold' }}>ggg</Text>
    </View>
);


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
        backgroundColor: 'red',
    }
})

export default VoucherForm;