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

const CommentScreen = ({likeCountProp, navigation}) => {
  const [isLike, seiIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLike ? -1 : 1;
    setLikeCount(likeCount + amount);
    seiIsLike(!isLike);
  };

  useEffect(() => {
    setLikeCount(likeCountProp);
  }, []);
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
          data={user}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={Styles.All}>
                <View style={Styles.left}>
                  <Image style={Styles.avatar} source={user1} />
                </View>
                <View style={Styles.Betwen}>
                  <Text style={Styles.name}>{item.name}</Text>
                  <Text style={Styles.comment}>{item.textchat}</Text>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <TouchableOpacity>
                      <Text style={{marginLeft: 10}}>Trả lời</Text>
                    </TouchableOpacity>
                    <Text style={{marginLeft: 40}}>Hôm nay: 12:30</Text>
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
          }}
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
          <TextInput placeholder="Nhập bình luận" />
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
