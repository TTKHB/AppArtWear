import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import CheckOutItem from '../../../components/Checkout/CheckOutItem';
import ChoosePayment from '../../../components/Checkout/ChoosePayment';
import Money from '../../../components/Checkout/Money';
import MyCheckOut from '../../../components/Checkout/myCheckOut';
import SanphamCheckOut from '../../../components/Checkout/sanphamCheckOut';
import Ship from '../../../components/Checkout/Ship';
const artwear = require('../../../assets/images/dragon.png');
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import FormInput from '../../../components/Checkout/FormInput';

const CheckoutScreen = ({ navigation }) => {
    {/* Biến lưu button,input nhập mã khuyến mãi khi click vào mã khuyến mãi trong thanh toán*/ }
    const renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Xin mời bạn nhập mã</Text>
            </View>
            {/* Import input nhập mã*/}
            <FormInput placeholder="Nhập mã ..." />
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Áp dụng</Text>
            </TouchableOpacity>
            {/* Cancel*/}
            <TouchableOpacity
                style={styles.panelButtonCancel}
                onPress={() => bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Huỷ bỏ</Text>
            </TouchableOpacity>
        </View>
    );
    {/* Biến custom header bottom sheet*/ }
    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    );
    {/* Animated*/ }
    const bs = React.createRef();
    const fall = new Animated.Value(5);
    return (
        <View style={styles.container}>
            {/* Sử dụng Bottom Sheet*/}
            <BottomSheet
                ref={bs}
                snapPoints={[330, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            <ScrollView>
                {/* Thêm địa chỉ*/}
                <CheckOutItem
                    icon="map-marker-radius-outline"
                    color="#00008B"
                    name="Thêm địa chỉ mới"
                    iconright="angle-right" />
                <View style={styles.content}>
                    {/* Sản phẩm thanh toán của tôi */}
                    <MyCheckOut icon="shop" name="Art Wear" />
                    <View style={styles.sanpham}>
                        <SanphamCheckOut
                            img={artwear}
                            name="DRAGON JAPAN BOMBER JACKET"
                            size="size L"
                            price="799.000 đ"
                            textright="Số lượng:1"
                        />
                    </View>
                    {/*Bấm vào khuyến mãi của shop ra bottom sheet cho người dùng nhập mã khuyến mãi*/}
                    <Animated.View style={{
                        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
                    }}>
                        <View>
                            <CheckOutItem
                                iconsale="shopping-sale"
                                color="red"
                                name="Khuyến mãi từ shop"
                                iconright="angle-right"
                                onPress={() => bs.current.snapTo(0)} />
                        </View>
                    </Animated.View>
                    {/* Custom đường kẻ ngang*/}
                    <View style={styles.divider} />
                    {/* Tổng tiền sản phẩm*/}
                    <View style={styles.money}>
                        <Money
                            tongphu="Tổng phụ:"
                            phivanchuyen="Phí vận chuyển:"
                            tong="Tổng:"
                            pricetongphu="799.000 đ"
                            pricephiship="35.000 đ"
                            pricetong="843.000 đ"
                        />
                    </View>
                    {/* Custom đường kẻ ngang*/}
                    <View style={styles.divider} />
                    {/* ArtWear Voucher và sử dụng kim cương*/}
                    <View>
                        <CheckOutItem
                            iconsale="shopping-sale"
                            color="red"
                            name="ArtWear Voucher"
                            iconright="angle-right" />
                    </View>
                    <View>
                        <CheckOutItem
                            iconDiamond="diamond"
                            color="#191970"
                            name="Sử dụng kim cương"
                            iconright="angle-right" />
                    </View>
                </View>


                <View style={styles.content}>
                    {/*Chọn đơn vị giao hàng (ví dụ giao hàng tiết kiệm) */}
                    <Ship icon="truck-fast-outline"
                        iconship="truck-check-outline"
                        name="Giao hàng tiêu chuẩn"
                        nameship="Nhận hàng trong vòng 1 -> 3 ngày"
                        iconright="angle-right" />

                </View>

                <View style={styles.content}>
                    {/* Phương thức thanh toán */}
                    <ChoosePayment
                        icon="credit-card"
                        name="Phương thức thanh toán"
                        nameship="(Khuyến khích thanh toán trả trước)"
                        iconright="angle-right" />
                </View>

                {/* Điều khoản Art Wear */}
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 18 }}>
                        Nhấn vào nút thanh toán đồng nghĩa bạn đồng ý
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, color: '#1E90FF' }}>
                            Điều khoản dịch vụ
                        </Text>
                        <Text style={{ fontSize: 18, color: '#000', marginLeft: 10 }}>
                            &
                        </Text>
                        <Text style={{ fontSize: 18, color: '#1E90FF', marginLeft: 10 }}>
                            Chính sách
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>
                            của
                        </Text>
                        <Text style={{ fontSize: 18, color: '#000', marginLeft: 10, fontWeight: 'bold' }}>
                            Art Wear
                        </Text>
                    </View>
                </View>
            </ScrollView>
            {/*Footer Button Xác nhận thanh toán ngay bây giờ */}
            <View style={styles.footer}>
                <View>
                    <Text style={styles.texttong}>Tổng thanh toán:</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.tongprice}>843.000 đ</Text>
                    <View style={styles.btnItemOne}>
                        <TouchableOpacity>
                            <Text style={styles.textItemOne}>Thanh toán ngay bây giờ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    divider: {
        height: 5,
        marginTop: 10
    },
    content: {
        backgroundColor: '#fff',
        marginTop: 15,
        borderWidth: 0.5,
        borderColor: '#E0E0E0',
        flex: 1
    },
    sanpham: {
        backgroundColor: '#fff',
        marginLeft: 20
    },
    money: {
        backgroundColor: '#fff',
        marginLeft: 20
    },
    //Line gạch ngang
    divider: {
        height: 1,
        backgroundColor: '#E8E8E8',
        marginLeft: 1,
        margin: 5
    },
    footer: {
        padding: 15,
        backgroundColor: '#FFFCF2',
    },
    texttong: {
        fontSize: 18,
    },
    tongprice: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    btnItemOne: {
        backgroundColor: '#8D6E63',
        borderRadius: 15,
        width: 220,
        height: 60,
        marginLeft: 30,
        marginTop: -27,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textItemOne: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.4,
        height: 400,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
        color: 'gray',
    },
    panelSubtitle: {
        fontSize: 18,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#8D6E63',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonCancel: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#DC143C',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default CheckoutScreen;
