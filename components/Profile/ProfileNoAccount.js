import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import IconSetting from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileItem from './ProfileItem/ProfileItem';
import FormOrder from './ProfileItem/myOrder';
import {
    Avatar,
} from 'react-native-paper';
import Gift from './ProfileItem/Gift';
import { signOut } from '../../assets/data/user';
import { useLogin } from '../../Context/LoginProvider';
import Service from './ServiceItem/Service';
import MyService from './ServiceItem/myService';
import InfomationArtWear from './ProfileItem/infomationArtWear';
const artwear = require('../../assets/images/Banner/SplashScreen.png');


const abc = () => {
    Alert.alert("Hello")
}

const ProfileNoAccount = props => {
    const { setIsLoggedIn, profile } = useLogin();
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row' }}>
                        <IconCart name="handbag" size={24} style={styles.iconCart} />
                    </View>
                </View>
                {/* Information */}
                <SafeAreaView style={styles.headerWrapper}>
                    <View style={styles.splash}>
                        <View style={styles.userInfoSection}>
                            <View style={styles.row}>
                                <Avatar.Image
                                    source={{
                                        uri:
                                            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
                                    }}
                                    size={90}
                                />
                                <View style={styles.userText} >
                                    <Text style={styles.userName}>Chào mừng bạn đến với Art Wear</Text>
                                    <View style={{flexDirection:'row',marginTop:10}}>
                                    <TouchableOpacity 
                                    onPress={() => 
                                        // props.navigation.navigate('Login')}
                                        props.navigation.navigate('UserNavigator', {screen: 'Login'})}
                                        >
                                        <Text style={{fontSize:18}}>Đăng nhập/</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                    onPress={() => 
                                        // props.navigation.navigate('Register')} 
                                        props.navigation.navigate('UserNavigator', {screen: 'Register'})}
                                    >
                                        <Text style={{marginLeft:2,fontSize:18}}>Đăng ký</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>

                {/* MyOrder */}
                <View style={styles.content}>
                    {/* Đơn hàng của tôi */}
                    <ProfileItem icon="form-select" name="Đơn hàng của tôi" iconright="angle-right" onPress={abc} />
                    {/* Line gạch ngang */}
                    <View style={styles.divider} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* Chờ thanh toán */}
                        <FormOrder icon="wallet"
                            name={`Chờ thanh \n     toán`}
                        />
                        {/* Xử lý hàng */}
                        <FormOrder icon="cube-outline"
                            name={`Xử lý hàng`}
                        />
                        {/* Đang vận chuyển */}
                        <FormOrder icon="truck-fast-outline"
                            name={` Đang vận \n   chuyển`}
                        />
                        {/* Đánh giá */}
                        <FormOrder icon="emoticon-excited-outline"
                            name={` Đánh giá`}
                        />
                    </View>
                </View>

                {/* Gift */}
                <View style={styles.contentGif}>
                    <Gift textHeader="Shop vui vẻ, rinh quà rẻ" iconGif="gift" />
                </View>

                {/* Dịch vụ của tôi */}
                <View style={styles.Service}>
                    <MyService icon="charity" name="Dịch vụ của tôi" />
                    {/* hàng 1 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Service icon="help-circle-outline"
                            name={`  Trợ giúp `}
                        />
                        <Service icon="brightness-percent"
                            name={`   Voucher`}
                        />
                        <Service icon="wallet-outline"
                            name={`    Ví tiền `}
                        />
                        <Service icon="cash-usd-outline"
                            name={`   Nạp thẻ `}
                        />
                        <Service icon="card-text-outline"
                            name={`  Đánh giá `}
                        />
                    </View>

                    {/* hàng 2 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Service icon="assistant"
                            name={`    Ưu đãi `}
                        />
                        <Service icon="diamond-stone"
                            name={`   Săn kim\n    cương`}
                        />
                        <Service icon="headphones"
                            name={` Chăm sóc`}
                        />
                        <Service icon="form-select"
                            name={`  Bán cùng\n   ArtWear `}
                        />
                        <Service icon="share-variant"
                            name={`   Chia sẻ `}
                        />
                    </View>

                </View>

                {/* Thông tin về Art Wear */}
                <View style={styles.contentArtWear}>
                    <InfomationArtWear img={artwear} name="Thông tin về Art Wear" iconright="angle-right" />
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',

    },
    headerWrapper: {
        backgroundColor: '#FFFCF2',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    header: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFFCF2',
    },
    iconCart: {
        color: '#000',
    },
    iconSetting: {
        color: '#000',
        marginRight: 15
    },
    headerText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
    },
    userText: {
        marginLeft: 104,
        marginTop: -70,
    },
    userName: {
        color: "#8D6E63",
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: -18,
    },
    userEmail: {
        color: "#000",
        fontSize: 18,
    },
    splash: {
        paddingTop: 60,
        paddingBottom: 120,

    },
    content: {
        marginHorizontal: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: -100,
        borderWidth: 0.5,
        borderColor: '#E0E0E0'
    },
    contentGif: {
        marginHorizontal: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFEFEA',
        borderRadius: 15,
        marginTop: 15,
        borderWidth: 0.5,
        borderColor: '#E0E0E0'
    },
    contentArtWear: {
        marginHorizontal: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 15,
        borderWidth: 0.5,
        borderColor: '#E0E0E0',
    },
    Service: {
        marginHorizontal: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 15,
        borderWidth: 0.5,
        borderColor: '#E0E0E0',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#2d2d2d',
        paddingVertical: 20,
    },
    //Information User
    userInfoSection: {
        paddingHorizontal: 10,
        marginTop: -40
    },
    row: {
        marginVertical: 20,
        marginTop: -20
    },
    //Line gạch ngang
    divider: {
        height: 1,
        backgroundColor: '#E8E8E8',
        marginLeft: 1,
        margin: 5
    },
})

export default ProfileNoAccount;
