import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

const BottomSheetHot = () => {
    return (
        <ScrollView contentContainerStyle={{ padding: 5 }}>
            {/* {Array.from({ length: 20 }).map((_, index) => <Text key={index}>Text - {index + 1}</Text>)} */}
            <View style={styles.containerBottomShet}>
                <TouchableOpacity style={styles.card} onPress={() => { }}>
                    <View style={styles.userInfo}>
                        <View style={styles.userImgWrapper} >
                            <Image style={styles.userImg} source={{ uri: "https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_saved-512.png" }} />
                        </View>
                        <View style={styles.textSection} >
                            <View style={styles.userInfoText}>
                                <Text style={styles.userName}>Lưu liên kết</Text>
                            </View>
                            <Text style={styles.notificationText}>Thêm vào danh sách mục đã lưu.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.containerBottomShet}>
                <TouchableOpacity style={styles.card} onPress={() => { }}>
                    <View style={styles.userInfo}>
                        <View style={styles.userImgWrapper} >
                            <Image style={styles.userImg} source={{ uri: "https://icons-for-free.com/iconfiles/png/512/notification-131964743693202280.png" }} />
                        </View>
                        <View style={styles.textSection} >
                            <Text style={styles.userName}>Bật thông báo về bài viết này</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.containerBottomShet}>
                <TouchableOpacity style={styles.card} onPress={() => { }}>
                    <View style={styles.userInfo}>
                        <View style={styles.userImgWrapper} >
                            <Image style={styles.userImg} source={{ uri: "https://icon-library.com/images/tick-box-icon/tick-box-icon-8.jpg" }} />
                        </View>
                        <View style={styles.textSection} >
                            <View style={styles.userInfoText}>
                                <Text style={styles.userName}>Ẩn bài viết</Text>
                            </View>
                            <Text style={styles.notificationText}>Ẩn bớt các bài viết tương tự.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.containerBottomShet}>
                <TouchableOpacity style={styles.card} onPress={() => { }}>
                    <View style={styles.userInfo}>
                        <View style={styles.userImgWrapper} >
                            <Image style={styles.userImg} source={{ uri: "https://cdn3.iconfinder.com/data/icons/office-229/32/Jam-512.png" }} />
                        </View>
                        <View style={styles.textSection} >
                            <View style={styles.userInfoText}>
                                <Text style={styles.userName}>Tạm ẩn blog tâm sự Video trong 30 ngày</Text>
                            </View>
                            <Text style={styles.notificationText}>Tạm thời ngừng xem bài viết.</Text>
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
                                <Text style={styles.userName}>Bỏ theo dõi Blog Tâm Sự Video</Text>
                            </View>
                            <Text style={styles.notificationText}>Không xem bài viết của trang này nữa.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.containerBottomShet}>
                <TouchableOpacity style={styles.card} onPress={() => { }}>
                    <View style={styles.userInfo}>
                        <View style={styles.userImgWrapper} >
                            <Image style={styles.userImg} source={{ uri: "https://cdn.iconscout.com/icon/free/png-256/warning-190-457484.png" }} />
                        </View>
                        <View style={styles.textSection} >
                            <View style={styles.userInfoText}>
                                <Text style={styles.userName}>Báo cáo ảnh</Text>
                            </View>
                            <Text style={styles.notificationText}>Tôi Lo ngại về bài viết này.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default BottomSheetHot

const styles = StyleSheet.create({
    containerBottomShet: {
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
