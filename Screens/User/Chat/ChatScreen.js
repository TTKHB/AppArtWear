import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView
}
from 'react-native';
import LoaderChat from '../../../components/Home/Loader/LoaderChat';

import axios from "axios";
import { useLogin } from '../../../Context/LoginProvider';
import ChatItem from './ChatItem';
import { Styles } from './ChatStyle';

const ChatScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);
  const { profile } = useLogin();

  useEffect(() => {
    //Lấy tất cuộc trò chuyện cùa người dùng đó bằng id user
    const getConversations = async () => {
      try {
        const res = await axios.get("http://192.168.0.101:3000/api/v1/conversation/" + profile._id);
        console.log("list ne", res)
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [profile._id]);

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  })

  return (
    <SafeAreaView>
      {loading ? (
        <LoaderChat />
      ) : (
        <View>
          {/* body */}
          <View style={Styles.Body}>
            <FlatList
              data={conversations}
              keyExtractor={item => item._id}
              renderItem={({ item }) => (
                <ChatItem item={item} navigation={navigation} currentUser={profile} />
              )}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ChatScreen;
