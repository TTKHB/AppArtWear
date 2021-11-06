import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
export const Back = require('../../../assets/images/back.jpg');
export const Camera = require('../../../assets/images/camera.jpg');
const FeedbackScreens = ({navigation}) => {
  return (
    <View>
      <View style={Styles.Header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Styles.View}>
          <Image style={Styles.ImgHeader} source={Back} />
        </TouchableOpacity>
        <View style={Styles.viewbetween}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Phản hồi</Text>
        </View>
        <TouchableOpacity style={Styles.View}>
          <Text style={{fontSize: 20, color: 'gray'}}>Gửi</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.Body}>
        <View>
          <TextInput
            style={Styles.Textip}
            placeholder="Nhập nhận xét tại đây"
          />
        </View>
        <TouchableOpacity
          style={{
            width: 90,
            height: 90,
            borderWidth: 1,
            marginLeft: 15,
            marginTop: 15,
          }}>
          <Text>Thêm ảnh từ camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedbackScreens;

export const Styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
  },
  viewbetween: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  View: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImgHeader: {
    width: 23,
    height: 23,
  },
  Textip: {
    width: '100%',
    height: 350,
    borderBottomWidth: 1,
  },
  Body: {
    width: '100%',
    height: ' 93%',
    marginTop: 15,
    backgroundColor: 'white',
  },
});
