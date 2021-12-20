import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Alert,
    ScrollView,
    Image
}
from 'react-native';
const MoneyOrder = ({
    tongphu,
    phivanchuyen,
    phivoucher,
    tong,
    pricetongphu,
    pricephiship,
    pricetong,
    priceVoucher
}) => (
    <View style={styles.itemContainer}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text style={styles.itemtongphu}>{tongphu}</Text>
            <Text style={styles.itemTextPricetongphu}>{pricetongphu} đ</Text>
        </View>

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Text style={styles.itemTextShip}>{phivanchuyen}</Text>
            <Text style={styles.itemTextPricephiship}>{pricephiship} đ</Text>
        </View>

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Text style={styles.itemTextShip}>{phivoucher}</Text>
            <Text style={styles.itemTextPricephiship}>{priceVoucher} %</Text>
        </View>

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Text style={styles.itemTextTong}>{tong}</Text>
            <Text style={styles.itemTextPricetong}>{pricetong} đ</Text>
        </View>

    </View>
);

const styles = StyleSheet.create({
    //ProfileItem
    itemContainer: {
        paddingHorizontal: 5
    },
    itemtongphu: {
        color: '#1e1e1e',
        fontSize: 16,
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

export default MoneyOrder;