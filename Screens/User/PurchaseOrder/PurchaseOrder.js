import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import { Appbar } from 'react-native-paper';


const Page = ({ label }) => (
    <View style={styles.container}>
        <Image style={styles.images} source={{
            uri: 'https://www.trangmall.com/Client/upload/News/User_1/2018/12/3/6P2SHv.png',
        }} />
        <Text style={styles.welcome}>
            {label}
        </Text>
    </View>
);

function PurchaseOrder() {
    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                <Appbar.BackAction />
                <Appbar.Content screenOptions={{ backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }} title="Đơn mua" />
                <Appbar.Action icon="magnify" />
                <Appbar.Action icon="shopping" />
            </Appbar.Header>
            <View style={styles.container}>
                <ScrollableTabView
                    tabBarActiveTextColor="#53ac49"
                    renderTabBar={() => <TabBar underlineColor="#53ac49" />}>
                    <Page tabLabel={{ label: "Chờ thanh toán" }} label="Chờ thanh toán" />
                    <Page tabLabel={{ label: "Xử lí hàng", badge: 3 }} label="Xử lí hàng" />
                    <Page tabLabel={{ label: "Đang vận chuyển" }} label="Đang vận chuyển" />
                    <Page tabLabel={{ label: "Đánh Giá" }} label="Đánh Giá" />
                </ScrollableTabView>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 28,
    },
    images:{
        width: 100,
        height: 100,
    }
});
export default PurchaseOrder;