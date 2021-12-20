import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  Image
}
from 'react-native';
import axios from "axios";
import { useLogin } from '../../../Context/LoginProvider';
import ChatItem from './ChatItem';
import { Styles } from './ChatStyle';
import baseURL from '../../../assets/common/baseUrl';
import LoaderCart from '../../../components/Home/Loader/LoaderCart';

const ChatScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);
  const { profile } = useLogin();

  useEffect(() => {
    //Lấy tất cuộc trò chuyện cùa người dùng đó bằng id user
    const getConversations = async () => {
      try {
        const res = await axios.get(`${baseURL}conversation/` + profile._id);
        console.log("list ne", res)
        setConversations(res.data);
        if (loading) {
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [profile._id]);

  return (
    <SafeAreaView>
      {loading ? (
        <LoaderCart />
      ) : (
        <View>
          {/* body */}
          {conversations.length ? (
            <>
              <View style={Styles.Body}>
                <FlatList
                  data={conversations}
                  keyExtractor={item => item._id}
                  renderItem={({ item }) => (
                    <ChatItem conversation={item} navigation={navigation} currentUser={profile} />
                  )}
                />
              </View>
            </>
          ) : (
            <>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                <Image source={require("../../../assets/icon/iconchat.jpg")} />
                <Text>Không có cuộc trò chuyện nào</Text>
              </View>
            </>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default ChatScreen;
