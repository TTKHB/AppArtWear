import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  TextInput
}
  from 'react-native';
import CheckOutItem from '../../../components/Checkout/CheckOutItem';
import ChoosePayment from '../../../components/Checkout/ChoosePayment';
import Money from '../../../components/Checkout/Money';
import MyCheckOut from '../../../components/Checkout/myCheckOut';
import SanphamCheckOut from '../../../components/Checkout/sanphamCheckOut';
import Ship from '../../../components/Checkout/Ship';
const artwear = require('../../../assets/images/dragon.jpg');
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import FormInput from '../../../components/Checkout/FormInput';

import { useLogin } from '../../../Context/LoginProvider';
import { styles } from '../../../components/Checkout/Styles/CheckOutStyles';
import { RadioButton } from 'react-native-paper';

import baseURL from '../../../assets/common/baseUrl';
import VoucherItem from '../../../components/Checkout/VoucherItem';

import { Header, Icon, Avatar, Badge, withBadge } from 'react-native-elements';
import ItemUser from '../../../components/Checkout/ItemUser';

const CheckoutScreen = ({ navigation, route }) => {
  const { profile } = useLogin();
  const [checked, setChecked] = useState('Thẻ tín dụng');
  const [ghichu, setGhiChu] = useState('');

  const spGioHang = route.params.spGioHang;
  const tongPrice = route.params.tongPrice;

  console.log('Tong tien:', tongPrice)

  const IdVoucher = route.params.IdVoucher;

  console.log("Voucher ne bro:", IdVoucher)

  const codeVoucher = route.params.codeVoucher;

  console.log("Code ne bro:", codeVoucher)

  const shippingPrice = tongPrice + 25;
  const totalPrice = shippingPrice;

  const tongcc = totalPrice - (totalPrice * IdVoucher)

  if (isNaN(tongcc)) {
    console.log('abc')
  }
  console.log("giam gia tu voucher:", tongcc);

  let PriceFinal = 0;
  let PriceTongPhu = 0;
  if (IdVoucher) {
    PriceFinal = tongcc
    console.log("kkk", PriceFinal)
    PriceTongPhu = PriceFinal
  } else {
    PriceFinal = totalPrice
    console.log("hehehe", PriceFinal)
    PriceTongPhu = tongPrice
  }

  const showConfirmDialog = () => {
    return Alert.alert(
      'Rất tiếc thao tác thất bại',
      'Bạn chưa nhập đủ thông tin giao hàng',
      [
        {
          text: 'Tiếp tục',
        },
      ],
    );
  };

  const OrderClick = async () => {
    if (profile.address == "" || profile.fullname == "" || profile.phone == "") {
      showConfirmDialog();
    } else {
      {
        spGioHang.map(e => (
          fetch(`${baseURL}orders`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              note: ghichu,
              Payment: checked,
              orderItems: [{
                "quantity": e.amount,
                "product": e.product_id ? e.product_id._id : ' '
              }],
              imageSp:e.imageSp,
              size:e.size,
              color:e.color,
              city: profile.address,
              status: "1",
              fullname: profile.fullname,
              phone: profile.phone,
              priceVoucher: IdVoucher,
              totalFinalPrice: PriceFinal,
              user_id: profile._id,
            })
          }).then(res => res.json())
            .then(data => {
              console.log("is Update successffly!!"),
                console.log(data)
              navigation.navigate('PaymentNavigator',
                {
                  screen: 'CheckOutSuccess'
                }
              )
            }).catch(err => {
              console.log("error", err)
            })
        ))
      }
    }
  }

  /* Biến lưu button,input nhập mã khuyến mãi khi click vào mã khuyến mãi trong thanh toán*/
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
  /* Biến custom header bottom sheet*/
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const renderPayment = () => (
    <View style={styles.panel}>
      <View style={styles.bottomPayment}>
        <Text style={styles.panelTitle}>Mời bạn chọn thanh toán</Text>
      </View>
      <View style={styles.viewRadio}>
        {/* RadioButton Thẻ tín dụng/ghi nợ*/}
        <View style={styles.btnOne}>
          <RadioButton
            value="Thẻ tín dụng"
            status={checked === 'Thẻ tín dụng' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Thẻ tín dụng')}
          />
          <View>
            <Image source={require('../../../assets/images/Payment/credit-card.jpg')} />
          </View>
          <View style={styles.theTinDung}>
            <Text style={styles.textRadio}>Thẻ tín dụng/ghi nợ</Text>
          </View>
        </View>
        <View style={styles.btnTwo}>
          <View>
            <Image style={styles.imageRadioTwo} source={require('../../../assets/images/Payment/visa.jpg')} />
          </View>
          <View style={styles.viewImageRadioTwo}>
            <Image style={styles.imageRadioTwo} source={require('../../../assets/images/Payment/maestro.jpg')} />
          </View>
          <View style={styles.viewImageRadioTwo}>
            <Image style={styles.imageRadioTwo} source={require('../../../assets/images/Payment/jcb.jpg')} />
          </View>
          <View style={styles.viewImageRadioTwo}>
            <Image style={styles.imageRadioTwo} source={require('../../../assets/images/Payment/citi.jpg')} />
          </View>
        </View>

        {/* Pay Pal*/}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="Pay Pal"
            status={checked === 'Pay Pal' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Pay Pal')}
          />
          <View>
            <Image source={require('../../../assets/images/Payment/paypal.jpg')} />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.textRadio}>Pay Pal</Text>
          </View>
        </View>

        {/*Thanh toán khi giao hàng*/}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="Thanh toán khi giao hàng"
            status={checked === 'Thanh toán khi giao hàng' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Thanh toán khi giao hàng')}
          />
          <View>
            <Image source={require('../../../assets/images/Payment/cod.jpg')} />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.textRadio}>Thanh toán khi giao hàng</Text>
          </View>
        </View>

      </View>

      <TouchableOpacity style={styles.panelButton}
        onPress={() => BottomPayment.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Áp dụng</Text>
      </TouchableOpacity>
      {/* Cancel*/}
      <TouchableOpacity
        style={styles.panelButtonCancel}
        onPress={() => BottomPayment.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Huỷ bỏ</Text>
      </TouchableOpacity>
    </View>
  );


  const PaymentList = ({ item }) => {
    return (
      <View key={item._id} >
        <SanphamCheckOut
          img={{ uri: item ? item.imageSp : ' ' }}
          name={item.product_id ? item.product_id.ten : ' '}
          size={item ? item.size : ' '}
          price={item.product_id ? item.product_id.gia.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.') : ' '}
          textright={item.amount}
        />
      </View>
    )
  };


  {
    /* Animated*/
  }
  const bs = React.useRef(null);
  const fall = new Animated.Value(5);

  const BottomPayment = React.useRef(null);
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.Container}
        centerComponent={{
          text: 'Thanh toán',
          style: {
            color: '#8D6E63', textAlign: 'center',
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
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        }
      />
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

      <BottomSheet
        ref={BottomPayment}
        snapPoints={[330, 0]}
        renderContent={renderPayment}
        renderHeader={renderHeader}
        initialSnap={1}
        // callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Thêm địa chỉ*/}
        {profile.address == '' ? (
          <>
            <CheckOutItem
              icon="map-marker-radius-outline"
              color="#00008B"
              name="Thêm địa chỉ mới"
              iconright="angle-right"
              onPress={() => navigation.navigate('UserNavigator', { screen: 'Infomation' })}
            />
          </>
        ) : (
          <>
            <CheckOutItem
              icon="map-marker-radius-outline"
              color="#00008B"
              name={profile.address}
              iconright="angle-right"
            />
          </>
        )}
        {/* Thêm Full name và số điện thoại*/}
        {profile.fullname == '' && profile.phone == '' ? (
          <>
            <ItemUser
              icon="account-circle"
              iconPhone="phone-call"
              color="#00008B"
              name="Họ và tên người mua hàng"
              phone="Số điện thoại"
              iconright="angle-right"
              onPress={() => navigation.navigate('UserNavigator', { screen: 'Infomation' })}
            />
          </>
        ) : (
          <>
            <ItemUser
              icon="account-circle"
              iconPhone="phone-call"
              color="#00008B"
              name={profile.fullname}
              phone={profile.phone}
              iconright="angle-right"
            />
          </>
        )}

        <View style={styles.content}>
          {/* Sản phẩm thanh toán của tôi */}
          <MyCheckOut icon="shop" name="Art Wear" />
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <FlatList
              data={spGioHang}
              renderItem={PaymentList}
              keyExtractor={item => item._id}
            />
          </ScrollView>
          {/*Bấm vào khuyến mãi của shop ra bottom sheet cho người dùng nhập mã khuyến mãi*/}
          <Animated.View
            style={{
              opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
            }}>
            {/* <View>
              <CheckOutItem
                iconsale="shopping-sale"
                color="red"
                name="Khuyến mãi từ shop"
                iconright="angle-right"
                onPress={() => bs.current.snapTo(0)}
              />
            </View> */}
          </Animated.View>
          {/* Custom đường kẻ ngang*/}
          <View style={styles.divider} />
          {/* Tổng tiền sản phẩm*/}
          <View style={styles.money}>
            <Money
              tongphu="Tổng phụ:"
              phivanchuyen="Phí vận chuyển:"
              tong="Tổng:"
              pricetongphu={PriceTongPhu.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}
              pricephiship="25.000"
              pricetong={PriceFinal.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}
            />
          </View>
          {/* Custom đường kẻ ngang*/}
          <View style={styles.divider} />
          {/* ArtWear Voucher và sử dụng kim cương*/}
          <View>
            <VoucherItem
              iconsale="shopping-sale"
              color="red"
              name="ArtWear Voucher"
              iconright="angle-right"
              nameVoucher={codeVoucher}
              onPress={() => navigation.navigate('PaymentNavigator', {
                screen: 'VoucherScreen',
                params: {
                  tongPrice: tongPrice,
                  spGioHang: spGioHang
                }
              })}
            />
          </View>
          <View>
            <CheckOutItem
              iconDiamond="diamond"
              color="#191970"
              name="Sử dụng kim cương"
              iconright="angle-right"
            />
          </View>
        </View>

        <View style={styles.content}>
          {/*Chọn đơn vị giao hàng (ví dụ giao hàng tiết kiệm) */}
          <Ship
            icon="truck-fast-outline"
            iconship="truck-check-outline"
            name="Giao hàng tiêu chuẩn"
            nameship="Nhận hàng trong vòng 1 -> 3 ngày"
            iconright="angle-right"
          />
        </View>
        {/* Phương thức thanh toán */}
        <View style={styles.content}>
          <ChoosePayment
            icon="credit-card"
            name="Phương thức thanh toán"
            nameship="(Khuyến khích thanh toán trả trước)"
            namePayment={checked}
            iconright="angle-right"
            onPress={() => BottomPayment.current.snapTo(0)}
          />
        </View>
        {/* Ghi chú */}
        <View style={styles.content}>
          <View style={styles.viewNote}>
            <Text style={styles.textNote}>Ghi chú</Text>
          </View>
          <TextInput
            placeholder="Ghi chú cho shop"
            autoCorrect={false}
            style={
              styles.textInput
            }
            onChangeText={text => setGhiChu(text)}
            value={ghichu}
          >
          </TextInput>
        </View>

        {/* Điều khoản Art Wear */}
        <View
          style={styles.viewDieuKhoan}>
          <Text style={styles.textDkOne}>
            Nhấn vào nút thanh toán đồng nghĩa bạn đồng ý
          </Text>
          <View style={styles.chinhSach}>
            <Text style={styles.textDichVu}>
              Điều khoản dịch vụ
            </Text>
            <Text style={styles.textChinhSachOne}>&</Text>
            <Text style={styles.textChinhSachTwo}>
              Chính sách
            </Text>
          </View>
          <View style={styles.viewArtWear}>
            <Text style={styles.textArtWearOne}>của</Text>
            <Text
              style={styles.textArtWear}>
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
          <Text style={styles.tongprice}>{PriceFinal.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')} đ</Text>
          <View style={styles.btnItemOne}>
            <TouchableOpacity>
              <Text style={styles.textItemOne} onPress={() => OrderClick()}>Thanh toán ngay bây giờ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckoutScreen;
