import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import SettingItem from '../../components/Profile/SettingItem/SettingItem';
import { signOut } from '../../utils/user';
import { useLogin } from '../../Context/LoginProvider';

const SettingScreen = props => {
    const { setIsLoggedIn, setProfile } = useLogin();
    const renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Cảm ơn bạn đã ghé thăm Art Wear</Text>
                <Text style={styles.panelSubtitle}>Bạn muốn đăng xuất tài khoản?</Text>
            </View>
            <TouchableOpacity style={styles.panelButton}
                onPress={async () => {
                    const isLoggedOut = await signOut()
                    if (isLoggedOut) {
                        setIsLoggedIn(false)
                        setProfile(false)
                        props.navigation.navigate('Main');
                    }
                }
                    // setIsLoggedIn(false)
                }
            >
                <Text style={styles.panelButtonTitle}>Đăng xuất</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Huỷ bỏ</Text>
            </TouchableOpacity>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    );

    const bs = React.createRef();
    const fall = new Animated.Value(5);

    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bs}
                snapPoints={[330, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            <SettingItem name="Tài khoản của tôi" onPress={() => props.navigation.navigate('UserNavigator', { screen: 'Infomation' })}/>
            <SettingItem name="Địa chỉ" />
            <SettingItem name="Tuỳ chọn thanh toán của tôi" />
            <View style={styles.divider} />
            <SettingItem name="Lịch sử mua hàng" onPress={() => props.navigation.navigate('UserNavigator', { screen: 'MyOrDer' })} />
            <SettingItem name="Sản phẩm mua sau" />
            <SettingItem name="Sản phẩm đánh giá" />
            <Animated.View style={{
                margin: 20,
                opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
            }}>
                <TouchableOpacity style={styles.commandButton} onPress={() => bs.current.snapTo(0)}>
                    <Text style={styles.commandText}>Đăng xuất</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#8E6E62',
        alignItems: 'center',
        marginTop: 10,
    },
    commandText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 50
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
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    //
    divider: {
        height: 5,
        marginTop: 5

    },
});
