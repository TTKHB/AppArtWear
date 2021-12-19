import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
export const back = require ('../../assets/images/back.jpg');
export const cr7 = require ('../../assets/images/Cr7.jpg');

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
      <View style={{width: '100%', height: '93%', backgroundColor: 'white'}}>
        <View style={Styles.All}>
          <View style={Styles.left}>
            <Image style={Styles.avatar} source={cr7} />
          </View>
          <View style={Styles.Betwen}>
            <Text style={Styles.name}>
              abc
            </Text>
            <Text style={Styles.comment}>abc</Text>
          </View>
        </View>
        <View
          style={{
            width: '70%',
            height: '100%',
            backgroundColor: 'white',
            alignSelf: 'center',
          }}
        >
          <FlatList
            data={rep}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image style={{width: 40, height: 40, borderRadius: 40, marginTop: -18}} source={cr7} />
                    </View>
                    <View style={{width: '80%', height: 60, backgroundColor: '#EAEAEA', marginLeft: 10,marginTop: 1, borderRadius: 16}}>
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
      </View>

    </View>
  );
};

export default RepComment;

const Styles = StyleSheet.create ({
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
    height: '80%',
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
