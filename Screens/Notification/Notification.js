
import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    FlatList
} from 'react-native';
import { Appbar } from 'react-native-paper';
import LoaderNotification from '../../components/Home/Loader/LoaderNotification';
const Notifications = [
    { id: 3, image: require('../../assets/images/users/user-1.jpg'), name: "March SoulLaComa", text: "Like so many organizations these days, Auto is a company in trasition. It is until recently.", attachment: "https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/512/New-icon.png", time: "Ngày 26, Tháng 8" },
    { id: 2, image: require('../../assets/images/users/user-2.jpg'), name: "John DoeLink", text: "Like so many organizations these days, Auto is a company in trasition. It is until recently.", attachment: "https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/512/New-icon.png", time: "2 giờ trước" },
    { id: 4, image: require('../../assets/images/users/user-3.jpg'), name: "Finn DoRemiFaso", text: "Like so many organizations these days, Auto is a company in trasition. It is until recently.", attachment: "https://i.pinimg.com/474x/5d/2f/45/5d2f451bef5caa5f78a08a0ebe3a560c.jpg", time: "1 giờ trước" },
    { id: 5, image: require('../../assets/images/users/user-4.jpg'), name: "Maria More More", text: "Like so many organizations these days, Auto is a company in trasition. It is until recently.", attachment: "https://chungcuhn24h.net/wp-content/uploads/2017/12/icon-hot.png", time: "30 phút trước" },
    { id: 1, image: require('../../assets/images/users/user-5.jpg'), name: "Frank Odalthh", text: "Like so many organizations these days, Auto is a company in trasition. It is until recently.", attachment: "https://chungcuhn24h.net/wp-content/uploads/2017/12/icon-hot.png", time: "10 phút trước" },
    { id: 6, image: require('../../assets/images/users/user-6.jpg'), name: "Clark June Boom!", text: "Like so many organizations these days, Auto is a company in trasition. It is until recently.", attachment: "https://i.pinimg.com/474x/5d/2f/45/5d2f451bef5caa5f78a08a0ebe3a560c.jpg", time: "5 phút trước" },
    { id: 7, image: require('../../assets/images/users/user-7.jpg'), name: "The googler", text: "Like so many organizations these days, Auto is a company in trasition. It is until recently.", attachment: "https://i.pinimg.com/474x/5d/2f/45/5d2f451bef5caa5f78a08a0ebe3a560c.jpg", time: "Bây giờ" },
];

const Notification = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  });
    return (
      
    
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                <Appbar.BackAction />
                <Appbar.Content title="Notification" />
                <Appbar.Action icon="magnify" />
                <Appbar.Action icon="shopping" />
            </Appbar.Header>
            {loading ? (
        <LoaderNotification/>
      ) : (
            <FlatList
                style={styles.root}
                data={Notifications}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={styles.separator} />
                    )
                }}
                renderItem={(item) => {
                    const Notification = item.item;
                    let attachment = <View />;

                    let mainContentStyle;
                    if (Notification.attachment) {
                        mainContentStyle = styles.mainContent;
                        attachment = <Image style={styles.attachment} source={{ uri: Notification.attachment }} />
                    }
                    return (
                        <View style={styles.container}>
                            <Image source={Notification.image} style={styles.avatar} />
                            <View style={styles.content}>
                                <View style={mainContentStyle}>
                                    <View style={styles.text}>
                                        <Text style={styles.name}>{Notification.name}</Text>
                                        <Text>{Notification.text}</Text>
                                    </View>
                                    <Text style={styles.timeAgo}>
                                        {Notification.time}
                                    </Text>
                                </View>
                                {attachment}
                            </View>
                        </View>
                    );
                }} />
                )}
        </View>

    );
}
export default Notification;

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFFFFF"
    },
    container: {
        padding: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: 'flex-start'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    text: {
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    content: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0
    },
    mainContent: {
        marginRight: 60
    },
    img: {
        height: 50,
        width: 50,
        margin: 0
    },
    attachment: {
        position: 'absolute',
        right: 0,
        height: 50,
        width: 50
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC"
    },
    timeAgo: {
        fontSize: 12,
        color: "#696969"
    },
    name: {
        fontSize: 16,
        color: "#1E90FF"
    }
});
