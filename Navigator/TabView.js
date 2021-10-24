import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//Screen
import WaitPayment from '../Screens/User/PurchaseOrder/WaitPayment';
import HandleProduct from '../Screens/User/PurchaseOrder/HandleProduct';
import TransPort from '../Screens/User/PurchaseOrder/TransPort';
import StarRatingOrder from '../Screens/User/PurchaseOrder/StarRatingOrder';

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
                },
                // mau text mac dinh
                tabBarInactiveTintColor: 'black',
                // khi bam vao text hien khung mau
                tabBarPressColor: 'brown',
            }}
        >
            <Tab.Screen
                options={{
                }}
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
                name='Đánh giá'
            />
        </Tab.Navigator>
    );
};

export default TabView;



