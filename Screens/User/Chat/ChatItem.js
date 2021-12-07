import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native';
const { width } = Dimensions.get('screen');
import axios from "axios";
import { Styles } from './ChatStyle';

export default function ({ item, currentUser, navigation }) {
    console.log('item cuoc trò chuyện', item);
    console.log('item người dùng hiện tại', currentUser);
    const [user, setUser] = useState(null)

    useEffect(() => {
        //Tìm ra đúng người dùng đó và xuất dự liệu ra (user by id)
        const friendId = item.members.find((m) => m !== currentUser._id);
        const getUser = async () => {
            try {
                const res = await axios("http://192.168.0.101:3000/api/v1/users/" + friendId);
                setUser(res.data);
                console.log("Du lieu", res.data)
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, item]);

    const [currentChat, setCurrentChat] = useState(null);
    console.log("Trò chuyện hiện tại", currentChat)

    const onPressDetail = () => {
        setCurrentChat(item)
        navigation.navigate('ChatNavigator', {
            screen: 'Chat detail',
            params: {
                id: item,
                user: user,
                currentChat: currentChat
            }
        })
    }
    return (
        <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
            <TouchableOpacity style={Styles.UserIcon}
                onPress={onPressDetail}
            >
                <Image style={Styles.ImageUser}
                    source={{
                        uri:
                            user
                                ? user.avatar ||
                                'https://res.cloudinary.com/artwear/image/upload/v1632695686/imageUser/LogoUser_khxsbc.jpg'
                                : 'https://res.cloudinary.com/artwear/image/upload/v1632695686/imageUser/LogoUser_khxsbc.jpg',
                    }}
                />
                <View style={{ marginLeft: 10 }}>
                    <Text style={Styles.TextNameUser}>{user ? user.fullname : ''}</Text>
                    <Text style={Styles.TextAddressUser}>{user ? user.address : ''}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};


