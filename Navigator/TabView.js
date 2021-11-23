import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//Screen
import WaitPayment from '../Screens/User/PurchaseOrder/WaitPayment';
import HandleProduct from '../Screens/User/PurchaseOrder/HandleProduct';
import TransPort from '../Screens/User/PurchaseOrder/TransPort';
import StarRatingOrder from '../Screens/User/PurchaseOrder/StarRatingOrder';
import CancelOrder from '../Screens/User/PurchaseOrder/CancelOrder';
import AllOder from '../Screens/User/PurchaseOrder/AllOder';
import OderDetail from '../Screens/User/PurchaseOrder/OderDetail';

const Tab = createMaterialTopTabNavigator();
const TabView = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                //Mau text khi bam vao
                tabBarActiveTintColor: 'brown',
                tabBarStyle: {
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                    margin: 0,
                    fontWeight: 'bold',
                    width:150,
                },
                // mau text mac dinh
                tabBarInactiveTintColor: 'black',
                // khi bam vao text hien khung mau
                tabBarPressColor: 'brown',
                // Hỗ trợ scroll trượt
                tabBarScrollEnabled: true,
                 // Màu bottom line của tabview
                tabBarIndicatorStyle:{
                    backgroundColor:"brown",
                    height:4,
                }
            }}
        >
             <Tab.Screen
                component={AllOder}
                name='Tất cả đơn hàng'
            />
            <Tab.Screen
                component={WaitPayment}
                name='Chờ thanh toán'
            />
            <Tab.Screen
                component={HandleProduct}
                name='Xử lý hàng'
            />
            <Tab.Screen
                component={TransPort}
                name='Đang vận chuyển'
            />
            <Tab.Screen
                component={StarRatingOrder}
                name='Đã giao'
            />
            <Tab.Screen
                component={CancelOrder}
                name='Huỷ đơn hàng'
            />
                
            

        </Tab.Navigator>
    );
};

export default TabView;



