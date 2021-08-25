import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, onPress, Dimensions } from 'react-native';

export const cart = require('../../../assets/images/cart.png');
export const back = require('../../../assets/images/cart.png');
export const search = require('../../../assets/images/search.png');
export const nu1 = require('../../../assets/images/Ao1.jpg');
export const nu2 = require('../../../assets/images/tuyen.jpg');
export const nu3 = require('../../../assets/images/ngoctuyen.jpg');
export const star = require('../../../assets/images/star.png');
export const back1 = require('../../../assets/images/back.png')

const product = [
    {
        id: 0,
        image: nu1,
        title: 'Váy dạ hội xinh xắn',
        giagoc: ' 79.000 VNĐ',
        giamgia: ' 99.000 VNĐ',
        voucher: 'Vận chuyển miễn phí',
        sale: '59%',
        star: star,
        danhgia: '5.0',
        daban: '  7'
    },
    {
        id: 1,
        image: nu2,
        title: 'Áo thun trắng xinh xắn',
        giagoc: ' 59.000 VNĐ',
        giamgia: '  99.000 VNĐ',
        voucher: 'Vận chuyển miễn phí',
        sale: '59%',
        star: star,
        danhgia: '5.0',
        daban: '  7'
    },
    {
        id: 2,
        image: nu3,
        title: 'Áo thun nữ đen',
        giagoc: ' 49.000 VNĐ',
        giamgia: '  59.000 VNĐ',
        voucher: 'Vận chuyển miễn phí',
        sale: '59%',
        star: star,
        danhgia: '5.0',
        daban: '  7'
    },
    {
        id: 3,
        image: nu1,
        title: 'Bộ quần áo thể thao',
        giagoc: ' 33.000 VNĐ',
        giamgia: '  53.000 VNĐ',
        voucher: 'Vận chuyển miễn phí',
        sale: '59%',
        star: star,
        danhgia: '5.0',
        daban: '  7'
    },
    {
        id: 4,
        image: nu2,
        title: 'Áo thun trắng xinh xắn',
        giagoc: ' 14.000 VNĐ',
        giamgia: ' 34.000 VNĐ',
        voucher: 'Vận chuyển miễn phí',
        sale: '59%',
        star: star,
        danhgia: '5.0',
        daban: '  7'
    },
    {
        id: 5,
        image: nu3,
        title: 'Áo thun nữ đen',
        giagoc: ' 47.000 VNĐ',
        giamgia: '  57.000 VNĐ',
        voucher: 'Vận chuyển miễn phí',
        sale: '59%',
        star: star,
        danhgia: '5.0',
        daban: '  7'
    },

]
const nameProduct = [
    {
        id: 1,
        title: 'Tất cả'
    },
    {
        id: 2,
        title: 'Áo nam'
    },
    {
        id: 3,
        title: 'Áo nữ'
    },
    {
        id: 4,
        title: 'Giày dép'
    },
    {
        id: 5,
        title: 'Làm đẹp'
    },
    {
        id: 6,
        title: 'Xem thêm'
    },
]
const GiamGiaForm = () => {
    renderproduct = ({ item }) => {
        return (
            <View style={{
                width: 215,
                height: 280,
                backgroundColor: 'white',
                marginLeft: 12,
                marginTop: 10,
                borderRadius: 10
            }}>
                <TouchableOpacity>
                    <Image style={{
                        width: 215,
                        height: 170,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }} source={item.image} />
                </TouchableOpacity>
                {/* TenSP */}
                <Text style={{
                    fontSize: 20,
                    marginLeft: 10,
                    marginTop: 2,
                    fontWeight: 'bold'

                }}>{item.title}</Text>
                {/* Text van chuyen */}
                <TouchableOpacity style={{
                    width: 200,
                    height: 20,
                    backgroundColor: '#f7f7f7',
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginTop: 2,
                }}>
                    <Text style={{ fontSize: 14 }}>{item.voucher}</Text>


                </TouchableOpacity>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 10,

                }}>Giá:{item.giagoc}</Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: -4,
                }}>
                    <View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            marginLeft: 10,
                            textDecorationLine: 'line-through',
                            textDecorationStyle: 'dotted'
                        }}>
                            giá gốc:{item.giamgia}
                        </Text>
                    </View>
                    <View style={{
                        width: 35,
                        height: 20,
                        backgroundColor: 'red',
                        marginLeft: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5
                    }}>
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold'
                        }}>{item.sale}</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginLeft: 8
                }}>
                    <TouchableOpacity>
                        <Image style={{
                            width: 15,
                            height: 15,
                            marginTop: 1.5
                        }} source={item.star} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{
                        }}>{item.danhgia}</Text>
                    </TouchableOpacity>

                    <View>
                        <Text style={{
                            marginLeft: 104
                        }}>Đã bán:{item.daban}</Text>
                    </View>
                </View>
            </View>
        )
    }
    rendernameProduct = ({ item }) => {
        return (
            <View>
                <TouchableOpacity style={{
                    marginLeft: 10,
                    marginTop: 12,
                    borderWidth: 0.5,
                    backgroundColor: '#FB3640',
                    borderRadius: 7,
                    width: 85,
                    height: 25,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 17,
                        color: 'white'
                    }}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{
            width: Dimensions.get('window').width,
            padding: 5,
            backgroundColor: '#f7f7f7',
        }}>
            <View style={{
                backgroundColor: '#f7f7f7',

            }}>
                {/* FlatList */}
                <FlatList
                    numColumns={2}
                    data={product}
                    renderItem={renderproduct}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    );
};

export default GiamGiaForm;