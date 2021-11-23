import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconPhone from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ItemUser = ({ icon, iconPhone, color, name, phone, onPress, iconright }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.itemContainer}>
            <Icon name={icon} size={30} color={color} />
            <Text style={styles.itemText}>{name}</Text>
            <FontAwesome name={iconright} size={26} color="#1e1e1e" />
        </View>
        <View style={styles.itemContainer} onPress={onPress}>
            <IconPhone name={iconPhone} size={26} color={color} style={{ marginLeft: 4 }} />
            <Text style={styles.itemText}>{phone}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    itemText: {
        flex: 1,
        color: '#1e1e1e',
        fontSize: 18,
        marginLeft: 10
    },
})

export default ItemUser;