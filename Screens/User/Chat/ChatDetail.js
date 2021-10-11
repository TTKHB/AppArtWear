import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const Back = require ('../../../assets/images/back1.png');
export const more = require ('../../../assets/images/more.png');
export const Mic = require ('../../../assets/images/mic.png');
export const Camera = require ('../../../assets/images/camera.png');
export const Image1 = require ('../../../assets/images/image.png');
export const Plus = require ('../../../assets/images/plus.png');
export const Like = require ('../../../assets/images/send.png');

const ChatDetail = ({navigation, route}) => {
  const {item} = route.params;
  console.log ('abcsd:', item);
  // const item= route.params
  // const {navigation} = props;
  return (
    <View>
      <View style={Styles.Header}>
        <TouchableOpacity
          onPress={() => navigation.goBack ()}
          style={{width: '8%', justifyContent: 'center'}}
        >
          <Image style={Styles.backheader} source={Back} />
        </TouchableOpacity>
        <View style={Styles.HederAvt}>
          <Image style={Styles.ImageAvatar} source={item.image} />
          <Text style={Styles.TextChat}>{item.Username}</Text>
        </View>
        <TouchableOpacity style={{width: '10%', justifyContent: 'center'}}>
          <Image style={Styles.backheader} source={more} />
        </TouchableOpacity>
      </View>
      <View style={Styles.Body}>
        <View style={Styles.ButtonChat}>
          <View style={Styles.ChatLeft}>
            <TouchableOpacity style={Styles.Touchat}>
              <Image style={Styles.backheader} source={Plus} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Touchat}>
              <Image style={Styles.backheader} source={Camera} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Touchat}>
              <Image style={Styles.backheader1} source={Image1} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Touchat}>
              <Image style={Styles.backheader} source={Mic} />
            </TouchableOpacity>
          </View>
          <View style={Styles.ChatRight}>
            <TextInput style={Styles.TextInput} placeholder="Aa" />
            <TouchableOpacity style={Styles.Touchat}>
              <Image style={Styles.backheader} source={Like} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ChatDetail;

export const Styles = StyleSheet.create ({
  Header: {
    width: '100%',
    height: '8%',
    backgroundColor: '#8D6E63',
    flexDirection: 'row',
  },
  backheader: {
    width: 25,
    height: 25,
  },
  backheader1: {
    width: 26,
    height: 26,
    marginTop: 7,
  },
  //--------------------------------------
  Body: {
    width: '100%',
    height: '92%',
    backgroundColor: 'white',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  TextChat: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8
  },
  ButtonChat: {
    width: '100%',
    height: 50,
    marginTop: '154%',
    flexDirection: 'row',
    borderWidth: 0.5,
  },
  ChatLeft: {
    width: '45%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ChatRight: {
    width: '55%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Touchat: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    width: 175,
    height: 35,
    borderRadius: 20,
    borderWidth: 0.3,
    fontSize: 12,
    textAlign: 'left',
    justifyContent: 'center',
    marginLeft: 7,
  },
  ImageAvatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  HederAvt: {width: '80%',
  alignItems: 'center',
   flexDirection: 'row',

  },
});
