import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert
}
from 'react-native';
import AdressOrder from '../../../components/MyOrder/AdressOrder';
import OrderPayment from '../../../components/MyOrder/OrderPayment';
import MoneyOrder from '../../../components/MyOrder/MoneyOrder';
import MaOrder from '../../../components/MyOrder/MaOrder';
import MyOrder from '../../../components/MyOrder/MyOrder';
import SanphamOrder from '../../../components/MyOrder/SanphamOrder';
import ShipOrder from '../../../components/MyOrder/ShipOrder';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import { useLogin } from '../../../Context/LoginProvider';
import { styles } from '../../../components/MyOrder/styles/MyOrderStyles';
import { RadioButton } from 'react-native-paper';

import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../../assets/common/baseUrl';

const OderDetail = ({ navigation, route }) => {
  const { profile } = useLogin();
  const [checked, setChecked] = useState('notLike');
  const [orderDetail, setorderDetail] = useState([]);
  const DetailOrder = route.params.DetailOrder;
  const [orderItem, setOrderItem] = useState([]);
  const [user, setUser] = useState([]);

  useFocusEffect(
    useCallback(() => {
      // Products
      axios
        .get(`${baseURL}orders/` + DetailOrder)
        .then(res => {
          setorderDetail(res.data);
          console.log("Chi tiet order", res.data);
          setOrderItem(res.data.orderitems);
          console.log("Item trong order", res.data.orderitems);
        })
        .catch(error => {
          console.log('Api call error');
        });
      return () => {
        setorderDetail([]);
        setOrderItem([]);
      };
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`${baseURL}users/` + orderDetail.user_id)
        .then(res => {
          setUser(res.data);
          console.log(res.data)
        })
        .catch(error => {
          console.log('Api call error');
        });

      return () => {
        setUser([]);
      };
    }, []),
  );
  //Check dieu kien Price
  const tongphu = orderDetail ? orderDetail.totalPrice : '';
  const tongFinal = orderDetail ? orderDetail.totalFinalPrice : '';
  const priceVoucher = orderDetail ? orderDetail.priceVoucher : '';
  let PriceFinal = 0;
  let PriceTongPhu = 0;
  let PriceVoucher = 0;
  if (orderDetail) {
    PriceTongPhu = tongphu
    PriceFinal = tongFinal
    PriceVoucher = priceVoucher * 100
  } else {
    PriceVoucher = 0
  }
  //OnClick Huy Don hang va ly do
  const OrderCancel = async () => {
    bs.current.snapTo(1)
    fetch(`${baseURL}orders/cancel/` + DetailOrder, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: 5,
        lydohuy: checked
      })
    }).then(res => res.json())
      .then(data => {
        console.log("is Update successffly!!"),
          console.log(data)
        Alert.alert("Hu??? ????n h??ng th??nh c??ng")
      }).catch(err => {
        console.log("error", err)
      })
  }
  //Header cua bottom sheet
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  //Bien chua Item bottom sheet
  const renderOrder = () => (
    <View style={styles.panel}>
      <View style={styles.bottomPayment}>
        <Text style={styles.panelTitle}>B???n mu???n hu??? ????n h??ng</Text>
      </View>
      <View style={styles.viewRadio}>
        {/* T??i kh??ng th??ch n???a */}
        <View style={styles.btnOne}>
          <RadioButton
            value="notLike"
            status={checked === 'notLike' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('notLike')}
          />
          <View style={styles.theTinDung}>
            <Text style={styles.textRadio}>T??i kh??ng th??ch n???a</Text>
          </View>
        </View>
        {/* L???a ch???n th??m s???n ph???m kh??c */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="Change"
            status={checked === 'Change' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Change')}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.textRadio}>L???a ch???n th??m s???n ph???m kh??c</Text>
          </View>
        </View>
        {/* S???n ph???m ?????t v?? c???n suy ngh?? th??m */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="think"
            status={checked === 'think' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('think')}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.textRadio}>S???n ph???m ?????t v?? c???n suy ngh?? th??m</Text>
          </View>
        </View>
        {/* Kh??c */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="other"
            status={checked === 'other' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('other')}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.textRadio}>Kh??c</Text>
          </View>
        </View>
      </View>
      {/* ??p d???ng hu??? ????n */}
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => OrderCancel()}>
        <Text style={styles.panelButtonTitle}>??p d???ng</Text>
      </TouchableOpacity>
      {/* Cancel*/}
      <TouchableOpacity
        style={styles.panelButtonCancel}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Hu??? b???</Text>
      </TouchableOpacity>
    </View>
  );

  /* Animated*/
  const bs = React.useRef(null);
  const fall = new Animated.Value(5);
  return (
    <View style={styles.container}>
      {/* S??? d???ng Bottom Sheet*/}
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderOrder}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ?????a ch??? ng?????i nh???n */}
        <AdressOrder
          iconAdress="map-marker-radius-outline"
          color="#00008B"
          name="?????a ch??? ng?????i nh???n"
          iconright="angle-right"
          nameAdress={orderDetail.city}
          nameUser={orderDetail.fullname}
          Phone={orderDetail.phone}
          iconUser="account-circle"
        />
        {/* M?? ????n h??ng */}
        <View style={styles.content}>
          <MaOrder
            iconMaOrder="barcode"
            color="black"
            name="M?? ????n h??ng: "
            maorder={DetailOrder}
          />
        </View>
        {/* S???n ph???m thanh to??n v?? s??? ti???n */}
        <View style={styles.content}>
          {/* S???n ph???m thanh to??n c???a t??i */}
          <MyOrder icon="shop" name="Art Wear" />
          {orderItem.map(item => (
            <View key={item._id} style={{ paddingHorizontal: 10 }}>
              <SanphamOrder
                img={{ uri: orderDetail ? orderDetail.imageSp : ' ' }}
                name={item.product ? item.product.ten : ' '}
                size={orderDetail ? orderDetail.size : ' '}
                mota={item.product ? item.product.mota : ' '}
                price={item.product ? item.product.gia.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.') : ' '}
                textAmount={item.quantity}
              />
            </View>
          ))}
          <Animated.View
            style={{
              opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
            }}>
          </Animated.View>
          {/* Custom ???????ng k??? ngang*/}
          <View style={styles.divider} />
          {/* T???ng ti???n s???n ph???m*/}
          <View style={styles.money}>
            <MoneyOrder
              tongphu="T???ng ph???:"
              phivanchuyen="Ph?? v???n chuy???n:"
              phivoucher="S??? d???ng Voucher:"
              tong="T???ng:"
              pricetongphu={parseFloat(PriceTongPhu).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}
              pricephiship="25.000"
              pricetong={parseFloat(PriceFinal).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}
              priceVoucher={parseFloat(PriceVoucher)}
            />
          </View>
        </View>
        {/*Giao h??ng ti??u chu???n */}
        <View style={styles.content}>
          <ShipOrder
            icon="truck-fast-outline"
            iconship="truck-check-outline"
            name="Giao h??ng ti??u chu???n"
            nameship="Nh???n h??ng trong v??ng 1 -> 3 ng??y"
          />
        </View>
        {/* Ph????ng th???c thanh to??n */}
        <View style={styles.content}>
          <OrderPayment
            icon="credit-card"
            name="Ph????ng th???c thanh to??n"
            namePayment={orderDetail.Payment}
          />
        </View>
        {/* Button hu??? ????n h??ng */}
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
          <View style={styles.btnItemHuy}>
            <TouchableOpacity
              onPress={() => bs.current.snapTo(0)}>
              <Text style={styles.textItemHuy}>Hu??? ????n h??ng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/*Footer Button X??c nh???n */}
      <View style={styles.footer}>
        <View style={styles.btnItemXacNhan}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={styles.textItemXacNhan}>X??c nh???n</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OderDetail;
