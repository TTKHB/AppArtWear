import React, { useState, useEffect, useCallback } from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    TouchableOpacity,
    TextInput
} from 'react-native';

import { Header, Icon, Avatar, Badge, withBadge } from 'react-native-elements';

import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../../assets/common/baseUrl';

const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const VoucherScreen = ({ navigation, route }) => {
    const [voucher, setVoucher] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [filterVoucher, setfilterVoucher] = useState([]);
    const [search, setSearch] = useState('');
    const Yscroll = React.useRef(new Animated.Value(0)).current;

    const tongPrice = route.params.tongPrice;

    const spGioHang = route.params.spGioHang;

    useFocusEffect(
        useCallback(() => {
            // Products
            axios
                .get(`${baseURL}voucher`)
                .then(res => {
                    setfilterVoucher(res.data);
                    setVoucher(res.data);
                    setIsloading(false);
                })
                .catch(error => {
                    console.log('Api call error');
                });

            return () => {
                setVoucher([]);
            };
        }, []),
    );

    const searchFilter = (text) => {
        if (text) {
            const newData = filterVoucher.filter((item) => {
                const itemData = item.ten ? item.ten.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            console.log(newData)
            setVoucher(newData)
            setSearch(text)
        }
        else {
            setVoucher(filterVoucher)
            setSearch(text)
        }
    }

    const renderVoucher = ({ item, index }) => {
        const scale = Yscroll.interpolate({
            inputRange: [
                -1, 0,
                sizeOfItem * index,
                sizeOfItem * (index + 2)
            ],
            outputRange: [1, 1, 1, 0]
        });

        const onChangeQual = (item, type) => {
            const dataVoucher = item._id;
            if (type) {
                const itemVoucher = voucher.map(item => {
                    if (item._id == dataVoucher) {
                        item.sudung = false;
                        return item;
                    }
                    return item;
                });
                fetch(`${baseURL}voucher/` + item._id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        sudung: item.sudung,
                    }),
                })
                    .then(res => res.json())
                    .then(data => {
                        setVoucher(itemVoucher);
                        console.log('is Update successffly!!');
                        navigation.navigate('CartNavigator',
                            {
                                screen: 'Checkout',
                                params: {
                                    IdVoucher: item.sotiengiam,
                                    tongPrice: tongPrice,
                                    spGioHang: spGioHang,
                                    codeVoucher: item.code,
                                }
                            })
                    })
                    .catch(err => {
                        console.log('error', err);
                    });
            }
        };

        return (
            <View>

                {item.sudung == false ? (
                    <>
                        <Animated.View style={
                            [styles.itemFalse,
                            {
                                transform: [{ scale }]
                            }
                            ]
                        }>
                            <View style={[styles.chamtron, { marginTop: 3 }]}>
                            </View>
                            <View style={[styles.chamtron, { marginTop: 23 }]}>
                            </View>
                            <View style={[styles.chamtron, { marginTop: 43 }]}>
                            </View>
                            <View style={[styles.chamtron, { marginTop: 63 }]}>
                            </View>
                            <View style={[styles.chamtron, { marginTop: 83 }]}>
                            </View>
                            <Image
                                style={styles.image}
                                source={{ uri: item.image }}
                                resizeMode='contain'
                                contentContainerStyle={{ padding: 20 }}
                            />

                            <View style={styles.ItemText}>
                                <View style={styles.wrapText}>
                                    <Text style={styles.fontSizeTen}>{item.ten}</Text>
                                </View>
                                <View style={styles.wrapText}>
                                    <Text style={styles.fontSizeTitle}>{item.title}</Text>
                                </View>

                                <View style={styles.wrapText}>
                                    <Text style={styles.fontSizeMa}>Mã: {item.code}</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.wrapText}>
                                        <Text style={styles.fontSizeHSD}>{item.dateEnd}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.btnSuDung}>
                                        <Text style={styles.fontSizeSuDungFalse}>Hết hạn</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Animated.View>
                    </>
                ) : (
                    <>
                        <Animated.View style={
                            [styles.item,
                            {
                                transform: [{ scale }]
                            }
                            ]
                        }>
                            <View style={[styles.chamtron, { marginTop: 3 }]}>
                            </View>
                            <View style={[styles.chamtron, { marginTop: 23 }]}>
                            </View>
                            <View style={[styles.chamtron, { marginTop: 43 }]}>
                            </View>
                            <View style={[styles.chamtron, { marginTop: 63 }]}>
                            </View>
                            <View style={[styles.chamtron, { marginTop: 83 }]}>
                            </View>
                            <Image
                                style={styles.image}
                                source={{ uri: item.image }}
                                resizeMode='contain'
                                contentContainerStyle={{ padding: 20 }}
                            />

                            <View style={styles.ItemText}>
                                <View style={styles.wrapText}>
                                    <Text style={styles.fontSizeTen}>{item.ten}</Text>
                                </View>
                                <View style={styles.wrapText}>
                                    <Text style={styles.fontSizeTitle}>{item.title}</Text>
                                </View>

                                <View style={styles.wrapText}>
                                    <Text style={styles.fontSizeMa}>Mã: {item.code}</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.wrapText}>
                                        <Text style={styles.fontSizeHSD}>{item.dateEnd}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.btnSuDung}>
                                        <Text style={styles.fontSizeSuDung} onPress={() => onChangeQual(item, true)}>Sử Dụng</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Animated.View>
                    </>
                )}
            </View>
        )

    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                containerStyle={styles.Container}
                centerComponent={{
                    text: 'Voucher',
                    style: {
                        color: 'black', textAlign: 'center',
                        alignSelf: 'center',
                        fontSize: 25,
                        fontWeight: 'bold'
                    }
                }}
                leftComponent={
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}>
                        <Icon
                            name="angle-left"
                            size={25}
                            type="font-awesome"
                            color="#000000"
                            style={{ marginLeft: 5 }}
                        />
                    </TouchableOpacity>
                }
            />
            <TextInput
                style={styles.textInputStyle}
                placeholder="Tìm kiếm voucher"
                value={search}
                underlineColorAndroid="transparent"
                onChangeText={(text) => searchFilter(text)}
            />
            {
                isLoading ? <ActivityIndicator /> : (
                    <Animated.FlatList
                        data={voucher}
                        keyExtractor={item => `key-${item._id}`}
                        renderItem={renderVoucher}
                        contentContainerStyle={{
                            padding: 20
                        }}
                        onScroll={
                            Animated.event(
                                [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
                                { useNativeDriver: true }
                            )}
                    />
                )
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    fontSizeTen: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF4500'
    },
    fontSizeTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    fontSizeMa: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    fontSizeHSD: {
        fontSize: 12
    },
    fontSizeSuDung: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3CADCC'
    },
    fontSizeSuDungFalse: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'red'
    },
    image: {
        width: 100,
        height: imgHeight,
        marginLeft: 10
    },
    wrapText: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    item: {
        flexDirection: 'row',
        marginBottom: marginBottomItem,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 30,
        padding: paddingItem,
        elevation: 1
    },
    itemFalse: {
        flexDirection: 'row',
        marginBottom: marginBottomItem,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 30,
        padding: paddingItem,
        elevation: 1,
        opacity: 0.5,
    },
    ItemText: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1
    },
    Container: {
        backgroundColor: '#ffffff',
    },
    chamtron: {
        height: 15,
        width: 15,
        borderRadius: 15,
        backgroundColor: '#F2F2F2',
        marginLeft: -15
    },
    textInputStyle: {
        height: 50,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white'
    },
    btnSuDung: {
        marginLeft: 15
    },

});

export default VoucherScreen;