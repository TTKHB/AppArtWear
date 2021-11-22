import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Alert,
    ScrollView,
    TouchableOpacity
}
    from 'react-native';

import IconMaOrder from 'react-native-vector-icons/FontAwesome5';

const MaOrder = ({
    iconMaOrder,
    color,
    name,
    onPress,
    maorder
}) => (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <IconMaOrder name={iconMaOrder} size={30} color={color} />
        <Text style={styles.itemText}>{name}</Text>
        <Text style={styles.itemTextMaOrder}>{maorder}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 10,
        alignItems: 'center',
    },
    itemText: {
        color: '#1e1e1e',
        fontSize: 18,
        marginLeft: 10,
        fontWeight:'bold'
    },
    itemTextMaOrder: {
        color: '#1e1e1e',
        fontSize: 14,
        marginTop: 4
    },
})

export default MaOrder;