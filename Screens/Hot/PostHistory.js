import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {Dimensions} from 'react-native';
export const width = Dimensions.get ('window').width;
export const height = Dimensions.get ('window').height;

export const story = require ('../../assets/images/huyen.jpg');
const Story = [
  {
    id: 1,
    date: '25/05/2001',
    images: story,
    name: 'ArtWear',
    cap: 'Quần áo Đẹp'
  },
  {
    id: 2,
    date: '25/05/2001',
    images: story,
    name: 'ArtWear',
    cap: 'Quần áo Đẹp'
  },
  {
    id: 3,
    date: '25/05/2001',
    images: story,
    name: 'ArtWear',
    cap: 'Quần áo Đẹp'
  },
];
const PostHistory = () => {
  return (
    <View style={Styles.containerPostHistory}>
      <View>
        <FlatList
          data={Story}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={Styles.strr}>
                <View style={Styles.Datee}>
                <Text style={{fontSize: 19, color: 'white',}}>{item.date}</Text>
                </View>
                <Image source={item.images} style={Styles.img} />
                <Text style={{fontSize: 22, fontWeight: 'bold', marginLeft: 18}}>{item.name}</Text>
                <Text style={{fontSize: 18, marginLeft: 18}}>{item.cap}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default PostHistory;

export const Styles = StyleSheet.create ({
  containerPostHistory: {
    width: '100%',
    height: '100%',
    
  },
  strr: {
    width: '94%',
    height: 450,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
marginBottom: 10
  },
  Datee: {
      width: 120, 
      height: 40, 
      backgroundColor: '#BBBFCA',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10, marginTop: 10, borderRadius: 10, 
  },
  img: {
      alignSelf: 'center',
      width: '90%', 
      height: '70%', marginTop: 10
  }
});
