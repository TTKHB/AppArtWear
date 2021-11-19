import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView, Image } from 'react-native';
const Money = ({ tongphu, phivanchuyen, tong, pricetongphu, pricephiship, pricetong }) => (
    <View style={styles.itemContainer}>
        <View style={{ flexDirection: 'column' }}>
            <Text style={styles.itemtongphu}>{tongphu}</Text>
            <Text style={[styles.itemTextShip, { marginTop: tongphu ? 5 : 0 }]}>{phivanchuyen}</Text>
            <Text style={[styles.itemTextTong, { marginTop: tongphu ? 5 : 0 }]}>{tong}</Text>
        </View>

        <View style={{ marginRight: 20 }}>
            <View style={{ marginTop: 0 }}>
                <Text style={styles.itemTextPricetongphu}>{pricetongphu} VNĐ</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.itemTextPricephiship}>{pricephiship} VNĐ</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.itemTextPricetong}>{pricetong} VNĐ</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    //ProfileItem
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 0,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemtongphu: {
        color: '#1e1e1e',
        fontSize: 16,
        marginTop: -5
    },
    itemTextShip: {
        color: '#1e1e1e',
        fontSize: 16,
    },
    itemTextTong: {
        color: '#1e1e1e',
        fontSize: 16,
        fontWeight: 'bold'
    },
    itemTextPricetongphu: {
        color: '#1e1e1e',
        fontSize: 16,
    },
    itemTextPricephiship: {
        color: '#1e1e1e',
        fontSize: 16,
        marginLeft: 10
    },
    itemTextPricetong: {
        color: '#1e1e1e',
        fontSize: 16,
        fontWeight: 'bold'
    },
})

export default Money;