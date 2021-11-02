import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

export const Back = require ('../../../assets/images/back1.png');
const chatLeft =[
  {
    id:1,
    title: 'Shop ban ngon '
  }
]



const ChatDetail = ({navigation, route}) => {
  const {item} = route.params;
  console.log ('abcsd:', item);
  return (
    <View>
      {/* header------------------------------------------------------------- */}
      <View style={Styles.Header}>
        <TouchableOpacity
          onPress={() => navigation.goBack ()}
          style={{width: '8%', justifyContent: 'center'}}>
          <Image style={Styles.backheader} source={Back} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center',width: '92%'}}>
          <Text style={{fontSize: 19, color: 'white', marginLeft: 10}}>{item.Username}</Text>
        </View>
        
      </View>
      {/* body-------------------------------------------------------- */}
      <ScrollView style={Styles.Body}>
        <View>
        <FlatList 
        data={chatLeft}
        keyExtractor={item => item.id}
        renderItem={({item})=> {
          return(
            <View style={{padding: 10,}}>
              <View style={{borderRadius: 7, backgroundColor: 'white', height: 40,width: '33%', justifyContent: 'center',}}>
                <Text style={{fontSize: 17, marginLeft: 5}}>{item.title}</Text>
              </View>
            </View>
          )
        }}
        />
        </View>
        <View>
        <FlatList 
        data={chatLeft}
        keyExtractor={item => item.id}
        renderItem={({item})=> {
          return(
            <View style={{padding: 10,alignSelf: 'flex-end'}}>
              <View style={{borderRadius: 7, backgroundColor: 'white', height: 40,width: '33%', justifyContent: 'center',}}>
                <Text style={{fontSize: 17, marginLeft: 5}}>{item.title}</Text>
              </View>
            </View>
          )
        }}
        />
        </View>
      </ScrollView>
      {/* chat----------------------------------------------------------------- */}
      <View style={{height: '12%', width: '100%', backgroundColor: 'white'}}>
        <View style={Styles.ButtonChat}>
          <TextInput 
          placeholder= 'Soạn tin nhắn'
          style={{width: '85%', fontSize: 19, marginLeft: 10}}
          />
          <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 22,color: 'blue'}}>Gửi</Text>
          </TouchableOpacity>
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
    width: 20,
    height: 20,
    marginLeft: 10
  },
  backheader1: {
    width: 26,
    height: 26,
    marginTop: 7,
  },
  //body--------------------------------------
  Body: {
    width: '100%',
    height: '86%',
    backgroundColor: '#D8E3E7',
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
    marginLeft: 8,
  },
  ButtonChat: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 0.5,
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
  ImageAvatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  HederAvt: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
