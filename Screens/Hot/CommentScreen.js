import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
export const bback = require('../../assets/images/back.jpg');
export const user1 = require('../../assets/images/ao7.jpg');
export const viet = require('../../assets/images/viet.jpg');
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import useComment from '../../hooks/Hot/Comment/useComment';
import TimeAgo from 'javascript-time-ago';
import vi from 'javascript-time-ago/locale/vi.json';
import {useRoute} from '@react-navigation/native';
TimeAgo.addLocale(vi);

const user = [
  {
    id: 1,
    image: user1,
    name: 'Tiến Am Nhạc',
    textchat: 'âm nhạc còn là music',
  },
  {
    id: 2,
    image: user1,
    name: 'Tiến Am Nhạc',
    textchat: 'âm nhạc còn là music',
  },
  {
    id: 3,
    image: user1,
    name: 'Tiến Am Nhạc',
    textchat: 'âm nhạc còn là music',
  },
];

/**
 * @param {*hot_id} param0
 */
const CommentScreen = ({likeCountProp, navigation, route}) => {
  const {hot_id} = route.params;
  const [isLike, seiIsLike] = useState(false);
  const [comment, setComment] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [commentFiltered, setCommentFiltered] = useState([]);
  const {comments, getComments, postComment} = useComment(hot_id);

  useEffect(() => {
    setCommentFiltered(comments);
  }, [comments]);

  const onLikePressed = () => {
    const amount = isLike ? -1 : 1;
    setLikeCount(likeCount + amount);
    seiIsLike(!isLike);
  };

  useEffect(() => {
    setLikeCount(likeCountProp);
  }, []);

  const sendKeyboardSubmit = () => {
    postComment(comment);
    setComment(null);
    getComments();
  };

  const renderItemComment = ({item}) => {
    const timeAgo = new TimeAgo('vi-VN');

    return (
      <View style={Styles.All}>
        <View style={Styles.left}>
          <Image
            style={Styles.avatar}
            source={{
              uri:
                item.user_id && item.user_id.avatar != ''
                  ? item.user_id.avatar
                  : 'https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png',
            }}
          />
        </View>
        <View style={Styles.Betwen}>
          <Text style={Styles.name}>
            {item.user_id ? item.user_id.fullname : ''}
          </Text>
          <Text style={Styles.comment}>{item.comment}</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity>
              <Text style={{marginLeft: 10}}>Trả lời</Text>
            </TouchableOpacity>
            <Text style={{marginLeft: 40}}>
              {timeAgo.format(new Date(item.dateCreated))}
            </Text>
          </View>
        </View>
        <View style={Styles.left}>
          <View style={{marginTop: 10}}>
            <TouchableWithoutFeedback onPress={onLikePressed}>
              {isLike ? (
                <AntIcon name="heart" size={20} color={'#c30000'} />
              ) : (
                <AntIcon name="hearto" size={20} color={'#545454'} />
              )}
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={Styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{justifyContent: 'center', width: '15%'}}>
          <Image style={Styles.imgheader} source={bback} />
        </TouchableOpacity>
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20}}>Bình luận</Text>
        </View>
      </View>
      <View style={Styles.body}>
        <FlatList
          data={commentFiltered}
          keyExtractor={item => item.id}
          renderItem={renderItemComment}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '7%',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            backgroundColor: 'white',
            borderWidth: 0.3,
            borderRadius: 5,
          }}>
          <Image source={viet} style={{width: 23, height: 23, marginTop: 6}} />
          <TextInput
            placeholder="Nhập bình luận"
            value={comment}
            onChangeText={text => setComment(text)}
            onSubmitEditing={sendKeyboardSubmit}
          />
        </View>
      </View>
    </View>
  );
};

export default CommentScreen;

export const Styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: 'white',
    height: '7%',
    flexDirection: 'row',
    borderBottomWidth: 0.7,
  },
  imgheader: {
    width: 17,
    height: 17,
    marginLeft: 10,
  },
  body: {
    width: '100%',
    height: '86%',
    backgroundColor: 'white',
  },
  All: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    marginTop: 15,
  },
  left: {
    width: '15%',
    height: '100%',
  },
  Betwen: {
    width: '70%',
    height: '100%',
    borderBottomWidth: 0.5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  comment: {
    marginLeft: 10,
    marginTop: 5,
  },
});
