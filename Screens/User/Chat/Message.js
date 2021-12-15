
import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  Image,
}
  from 'react-native';
import TimeAgo from 'javascript-time-ago';
import vi from 'javascript-time-ago/locale/vi.json';
TimeAgo.addLocale(vi);
import axios from "axios";
import { Styles } from './ChatStyle';
import baseURL from '../../../assets/common/baseUrl';
export const timeAgo = new TimeAgo('vi-VN');
timeAgo.getLabels('narrow');

export default function Message({ own, message, currentUser }) {
  const [user, setUser] = useState([])
  useEffect(() => {
    axios
      .get(`${baseURL}users/` + message.sender)
      .then(res => {
        console.log("tat ca nguoi dung", res.data)
        setUser(res.data)
      })
      .catch(error => {
        console.log('Api call error nha');
      });
  }, []);

  return (
    <View>
      {own ? (
        <>
          <View style={Styles.messageTop}>
            <Image
              style={Styles.messageImg}
              source={{
                uri:
                  user
                    ? user.avatar ||
                    'https://res.cloudinary.com/artwear/image/upload/v1632695686/imageUser/LogoUser_khxsbc.jpg'
                    : 'https://res.cloudinary.com/artwear/image/upload/v1632695686/imageUser/LogoUser_khxsbc.jpg',
              }}
            />
            <Text style={Styles.messageText}>
              {message.text}
            </Text>
          </View>
          <View style={Styles.messageBottom}>
            <Text>
              {timeAgo.format(new Date(message.dateCreate))}
            </Text>
          </View>
        </>
      ) : (
        <>
          <View style={Styles.messageTopTwo}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={Styles.messageTextTwo}>
                {message.text}
              </Text>
              <Image
                style={Styles.messageImgTwo}
                source={{
                  uri:
                    user
                      ? user.avatar ||
                      'https://res.cloudinary.com/artwear/image/upload/v1632695686/imageUser/LogoUser_khxsbc.jpg'
                      : 'https://res.cloudinary.com/artwear/image/upload/v1632695686/imageUser/LogoUser_khxsbc.jpg',
                }}
              />
            </View>
          </View>
          <View style={Styles.messageBottomTwo}>
            <Text>
              {timeAgo.format(new Date(message.dateCreate))}
            </Text>
          </View>
        </>
      )}
    </View>
  );
}


