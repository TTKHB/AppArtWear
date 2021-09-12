import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView, Button, FlatList } from 'react-native'
import IconSearch from 'react-native-vector-icons/Ionicons';
import IconLove from 'react-native-vector-icons/AntDesign';
import IconBack from 'react-native-vector-icons/Ionicons';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import IconFilter from 'react-native-vector-icons/AntDesign';

import { List, } from 'react-native-paper';

const { height, width } = Dimensions.get('window');
const numColumns = 2;
import { DATA } from '../../assets/data/PopularSearch';

const ProductMenu = ({ navigation }) => {
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate('DetailMenu')}>
                <View style={styles.viewPopSearch}>
                    <View style={{ flex: 2 }}>
                        <Image
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                            source={item.image} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>{item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.navHeader}>
                    <IconBack
                        name="chevron-back"
                        size={28}
                        onPress={() => navigation.goBack()}
                    />
                    <IconSearch
                        name="md-search-outline"
                        size={28}
                        style={{ marginRight: 30 }}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sản phẩm tiện ích</Text>
                    <IconLove
                        name="hearto"
                        size={28}
                        style={{ marginLeft: 30 }}
                    />
                    <IconCart
                        name="handbag"
                        size={28} />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    <View style={styles.viewBody}>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <View style={styles.itemBody}>
                                <Text style={styles.itemText}>Sàng lọc</Text>
                                <IconFilter
                                    name="filter"
                                    size={28}
                                    style={{ marginLeft: 10 }}
                                />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ width: 140, marginTop: -8 }}>
                                <List.Section>
                                    <List.Accordion
                                        title="Tình trạng"
                                        titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 14, }}
                                        style={{ backgroundColor: '#fff' }}
                                    >
                                    </List.Accordion>
                                </List.Section>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ width: 140, marginTop: -8 }}>
                                <List.Section >
                                    <List.Accordion
                                        title="Kiểu dáng"
                                        titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 14, }}
                                        style={{ backgroundColor: '#fff' }}
                                    >
                                    </List.Accordion>
                                </List.Section>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.viewDeXuat}>
                        <ScrollView
                            horizontal
                        >
                            <FlatList
                                numColumns={numColumns} // numColumns 2 nam ngang
                                pagingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                data={DATA} //set Data
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </ScrollView>
                        <View style={{ marginLeft: 4 }}>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>

                </View>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F1FF',
    },
    header: {
        backgroundColor: '#fff',
        width: width,
        height: '5%',
        justifyContent: 'center'
    },
    navHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    footer: {
        height: '10%'
    },
    textBox: {
        marginLeft: 15,
        marginTop: 10,
        color: '#384F7D',
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: 10,
    },
    itemBody: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#C0C0C0',
        height: height / 17.0
    },
    itemText: {
        fontSize: 16,
        fontStyle: 'normal',
        color: '#000000',
        fontWeight: 'bold'
    },
    viewDeXuat: {
        marginVertical: 5,
        backgroundColor: '#fff',
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    viewPopSearch: {
        margin: 10,
        height: 300,
        borderColor: '#C0C0C0',
        borderWidth: 0.3,
        width: width / 2.2,
    }
});

export default ProductMenu;