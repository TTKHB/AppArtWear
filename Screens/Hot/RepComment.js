import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
export const back = require ('../../assets/images/back.jpg');
export const cr7 = require ('../../assets/images/Cr7.jpg');
export const viet = require('../../assets/images/icon.jpg');
export const senddd = require('../../assets/images/senddd.jpg');
const rep = [
  {
    id: 1,
    title: 'âsasas',
  },
];

const RepComment = ({navigation, route}) => {
  // const id = route.params.id
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'red'}}>
      <View
        style={{
          width: '100%',
          height: '7%',
          backgroundColor: 'pink',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            width: '25%',
            backgroundColor: 'white',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack ()}>
            <Image
              source={back}
              style={{width: 25, height: 25, marginLeft: 7}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '50%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Trả lời</Text>
          <Text style={{fontSize: 22, marginLeft: 10}}>(Nhật Tiến)</Text>
        </View>
        <View
          style={{
            width: '25%',
            backgroundColor: 'white',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity />
        </View>
      </View>
      <View style={{backgroundColor: 'white', width: '100%', height: '86%'}}>
      <FlatList
            data={rep}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10, marginLeft: 20}}>
                      <Image style={{width: 50, height: 50, borderRadius: 50, marginTop: -18}} source={cr7} />
                    </View>
                    <View style={{width: '70%', height: 60, backgroundColor: '#EAEAEA', marginLeft: 10,marginTop: 20, borderRadius: 16}}>
                      <Text style={{fontSize: 17, fontWeight: 'bold', padding: 7}}>
                        Ronaldo
                      </Text>
                      <Text style={{fontSize: 15, marginTop: -7, marginLeft: 7}}>Messi đá ncc</Text>
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
            width: '100%',
            height: 40,
            backgroundColor: 'white',
            borderWidth: 0.3,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Image source={viet} style={{width: 23, height: 23, marginLeft: 5}} />
          <TextInput
            placeholder="Nhập bình luận"
            style={{
              fontSize: 16,
              marginLeft: 5,
              borderWidth: 0.4,
              width: '80%',
              height: '80%',
              padding: 5,
              borderRadius: 7,
            }}
          />
          <TouchableOpacity onPress={() => sendKeyboardSubmit()}>
            <Image
              source={senddd}
              style={{width: 23, height: 23, marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RepComment;