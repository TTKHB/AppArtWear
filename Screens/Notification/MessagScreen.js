import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const MessagScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.headerContainer}>
                    <Ionicons
                        name="chevron-back-outline"
                        size={30}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.headerTitle}>Art Wear</Text>
                    <FontAwesome
                        name="paint-brush"
                        size={25}
                        onPress={() => navigation.goBack()}
                    />
                </View>
                <View style={styles.bodyContainer}>
                    <TouchableOpacity style={styles.bodyContainerCard} onPress={() => navigation.navigate('UserNavigator', { screen: 'NotifiScreen' })}>
                        <Image source={{ uri: "https://image.pngaaa.com/458/1963458-middle.png" }} style={styles.avatarBody} />
                        <View style={styles.textTitle}>
                            <Text style={styles.name}>Đơn đặt hàng</Text>
                            <Text style={styles.nameTitle}>Luôn cập nhật về tình trạng của đơn đặt hàng...</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bodyContainerCard} onPress={() => navigation.navigate('UserNavigator', { screen: 'NotifiScreen' })}>
                        <Image source={{ uri: "https://banner2.cleanpng.com/20180422/lwq/kisspng-loudspeaker-computer-icons-symbol-speaker-icon-5adcb20f06b281.2804426415244129430274.jpg" }} style={styles.avatarBody} />
                        <View style={styles.textTitle}>
                            <Text style={styles.name}>Tin mới nhất</Text>
                            <Text style={styles.nameTitle}>Hãy là người đầu tiên biết đến trang web / tài khoản...</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('NotificationHotScreen')}>
                        <View style={styles.userInfo}>
                            <View style={styles.userImgWrapper} >
                                <Image style={styles.userImg} source={{ uri: "https://thumbs.dreamstime.com/b/love-heart-fans-symbol-icon-vector-eps-heart-love-abstract-symbol-icon-vector-eps-183301440.jpg" }} />
                            </View>
                            <View style={styles.textSection} >
                                <View style={styles.userInfoText}>
                                    <Text style={styles.userName}>ArtWear</Text>
                                </View>
                                <Text style={styles.notificationText}>Lượt thích, bình luận và người hâm mộ mới.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('UserNavigator', { screen: 'ActivityScreen' })}>
                        <View style={styles.userInfo}>
                            <View style={styles.userImgWrapper} >
                                <Image style={styles.userImg} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8ymWEyrzuPwMcedI_uDxfmzyK2oWxn44pr2m9z-kD_I8GxF-31tkS8Ze6dkbN0LWpJI&usqp=CAU" }} />
                            </View>
                            <View style={styles.textSection} >
                                <View style={styles.userInfoText}>
                                    <Text style={styles.userName}>Hoạt động</Text>
                                    <Text style={styles.postTime}>04/10/2021</Text>
                                </View>
                                <Text style={styles.notificationText}>SẮP RA MẮT: 10/11 PTS</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SaleScreen')}>
                        <View style={styles.userInfo}>
                            <View style={styles.userImgWrapper} >
                                <Image style={styles.userImg} source={{ uri: "https://image.flaticon.com/icons/png/512/43/43916.png" }} />
                            </View>
                            <View style={styles.textSection} >
                                <View style={styles.userInfoText}>
                                    <Text style={styles.userName}>Khuyến mãi</Text>
                                    <Text style={styles.postTime}>04/10/2021</Text>
                                </View>
                                <Text style={styles.notificationText}>#ArtWear PRE SALE</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MessagScreen

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 4,
        paddingVertical: 15,
        borderColor: "#F8F8F8",
        paddingHorizontal: 20,
        backgroundColor: "#FFFFFF",
    },
    headerTitle: {
        fontSize: 25,
        width: 180,
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
    },
    bodyContainer: {
        padding: 10,
        borderColor: "#F8F8F8",
        backgroundColor: "#FFFFFF",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: -15,
        width: "100%"

    },
    bodyContainerCard: {
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        width: "50%",
        height: "100%",
        padding: 20,
        marginLeft: 10
    },
    avatarBody: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center'
    },
    textTitle: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: "center",
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',

    },
    nameTitle: {
        fontSize: 12,
        paddingHorizontal: 1,
    },

    container: {
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
    },
    card: {
        width: "100%",
        borderRadius: 20,
        borderColor: "#000000"
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userImgWrapper: {
        paddingTop: 15,
        paddingBottom: 15
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    userInfoText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
    },
    postTime: {
        fontSize: 12,
        color: "#666",
        fontFamily: 'Lato-Regular',
    },
    notificationText: {
        fontSize: 14,
        color: "#333333",
    }
})
