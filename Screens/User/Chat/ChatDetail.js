import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import axios from "axios";
import Message from "../../User/Chat/Message";
export const Back = require('../../../assets/images/back1.jpg');
import { useLogin } from '../../../Context/LoginProvider';
import { Styles } from './ChatStyle';
import baseURL from '../../../assets/common/baseUrl';
import { io } from 'socket.io-client';

export default function ChatDetail({ navigation, route }) {
  const user = route.params.user;
  const currentChat = route.params.currentChat;
  const { profile } = useLogin();
  const [messages, setMessages] = useState([]);
  const [soantin, setSoanTin] = useState("");

  useEffect(() => {
    //Tất cả tin nhắn của người dùng (message by id)
    const getMessages = async () => {
      try {
        const res = await axios.get(`${baseURL}message/` + currentChat?._id);
        setMessages(res.data);
        console.log("Tin nhắn dau man", res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);
  console.log("Tin nhắn user", messages)

  //Biến gửi tin nhắn
  const handleSubmit = async () => {
    const message = {
      sender: profile._id,
      text: soantin,
      conversationId: currentChat._id,
    };
    try {
      const res = await axios.post(`${baseURL}message`, message);
      setMessages([...messages, res.data]);
      //Gửi xong text input clear text 
      setSoanTin("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      {/* header */}
      <View style={Styles.HeaderDetail}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: '8%', justifyContent: 'center' }}>
          <Image style={Styles.backheader} source={Back} />
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', width: '92%' }}>
          <Text style={{ fontSize: 19, color: 'white', marginLeft: 10, fontWeight: 'bold' }}>
            {user ? user.fullname : ''}
          </Text>
        </View>
      </View>
      {/* body */}
      <ScrollView style={Styles.BodyDetail}>
        <View>
          <View style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <View style={{
              height: '100%',
              paddingRight: 10
            }}>
              {/* Truyền item tin nhắn qua Message (nơi hiện ảnh,tin nhắn, ngày giờ)*/}
              {messages.map((m) => (
                <Message message={m} own={m.sender === user._id} key={m._id} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Send tin nhan */}
      <View style={{ height: '20%', width: '100%', backgroundColor: 'white' }}>
        <View style={Styles.ButtonChat}>
          <TextInput
            value={soantin}
            onChangeText={(e) => setSoanTin(e)}
            placeholder="Soạn tin nhắn"
            style={{ width: '85%', fontSize: 19, marginLeft: 10 }}
          />
          <TouchableOpacity
            onPress={handleSubmit}
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, color: 'blue' }}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

