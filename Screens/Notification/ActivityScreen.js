import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  SectionList,
} from 'react-native';
export const Back = require ('../../assets/images/back.png');
export const banner1 = require ('../../assets/images/banner1.jpg');


const List = [
  {
    id: 1,
    Image: banner1,
    title: 'RA MẮT NGÀY 25/05/2021 ',
    theme: '#Bộ sưu tập thời trang nam',
    date: '25/05/2021'
  },
  {
    id: 2,
    Image: banner1,
    title: 'SĂN SALE THẢ GA',
    theme: '#Ưu đải cực sốc lên đến 50%',
    date: '25/05/2021'
  },
];

const ActivityScreen = ({navigation}) => {
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      {/* header----------------------------------------------------------- */}
      <View style={Styles.Header}>
        <TouchableOpacity  onPress={() => navigation.goBack()}  style={Styles.TouHeader}>
          <Image source={Back} style={Styles.ImageHeader}/>
        </TouchableOpacity>
        <View style={Styles.ViewText}>
          <Text style={Styles.TextHeader}>Hoạt động</Text>
        </View>
        <View style={Styles.TouHeader}></View>
      </View>
     {/* body--------------------------------------------------------------- */}
     <View >
       <FlatList style={{}}
       data={List}
       keyExtractor={ item => item.id}
       renderItem={({item})=>{
         return(
           <View style={{alignItems: 'center', marginTop: 20}}>
             <Text>{item.date}</Text>
             <TouchableOpacity   onPress={() =>
          navigation.navigate('UserNavigator', {
            screen: 'Detail',
            params: {id: item.id},
          })
        }style={Styles.FlatView}>
             <View style={{width: '100%', height: '65%', backgroundColor: 'white'}}>
               <Image style={{width: '100%', height: '100%',resizeMode: 'stretch'}} source={item.Image}
               />
             </View>
             <View style={{width: '100%', height: '35%', justifyContent: 'center'}}>
            <Text style={Styles.TextFlat1}>{item.theme}</Text>
            <Text style={Styles.TextFlat2}>{item.title}</Text>
             </View>
             </TouchableOpacity>
           </View>
         )
       }}/>
     </View>
    </View>
  );
};

export default ActivityScreen;

export const Styles = StyleSheet.create ({
  Header: {
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 10,
  },
  TouHeader: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ImageHeader: {
    width: 20,
    height: 20,
  },
  ViewText: {alignItems: 'center', justifyContent: 'center', width: '80%'},
  //----------------------------------------------
  Body: {
    width: '100%',
    height: '92%',
  },
  FlatView: {
    width: '95%',
    height: 190,
    backgroundColor: 'white',
    marginTop: 5,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5.84,
    elevation: 5,
  },
  TextFlat1:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  TextFlat2: {
    fontSize: 13,
    marginLeft: 10
  }
});
