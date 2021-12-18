import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

const BottomSheetNotification = () => {
    return (
        <ScrollView contentContainerStyle={{  }}>

            <View style={styles.containerBottomShet}>
                <TouchableOpacity style={styles.card} onPress={() => { }}>
                    <View style={styles.userInfo}>
                        <View style={styles.userImgWrapper} >
                            <Image style={styles.userImg} source={{ uri: "https://icon-library.com/images/tick-box-icon/tick-box-icon-8.jpg" }} />
                        </View>
                        <View style={styles.textSection} >
                            <View style={styles.userInfoText}>
                                <Text style={styles.userName}>Gỡ thông báo này</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.containerBottomShet}>
                <TouchableOpacity style={styles.card} onPress={() => { }}>
                    <View style={styles.userInfo}>
                        <View style={styles.userImgWrapper} >
                            <Image style={styles.userImg} source={{ uri: "https://cdn.iconscout.com/icon/free/png-256/no-notification-1767486-1502556.png" }} />
                        </View>
                        <View style={styles.textSection} >
                            <View style={styles.userInfoText}>
                                <Text style={styles.userName}>Tắt thông báo về sinh nhật của bạn bè</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default BottomSheetNotification

const styles = StyleSheet.create({
    containerBottomShet: {
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 40,
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
        // paddingTop: 15,
        // paddingBottom: 15
    },
    userImg: {
        width: 40,
        height: 40,
        borderRadius: 25
    },
    textSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        // padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
    },
    line: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: "#cccccc",
    },
    userInfoText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    userName: {
        fontSize: 16,
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
