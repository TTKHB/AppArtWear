import React, { useState, useCallback } from 'react';
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
export const Back = require('../../assets/images/back.jpg');
export const banner1 = require('../../assets/images/banner1.jpg');
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import { addMethod } from 'yup';
import { formatDate } from '../../utils/Methods';

const List = [
  {
    id: 1,
    Image: banner1,
    title: 'RA MẮT NGÀY 25/05/2021 ',
    theme: '#Bộ sưu tập thời trang nam',
    date: '25/05/2021',
  },
  {
    id: 2,
    Image: banner1,
    title: 'SĂN SALE THẢ GA',
    theme: '#Ưu đải cực sốc lên đến 50%',
    date: '25/05/2021',
  },
];



const ActivityScreen = ({ navigation, item, index }) => {
  const [activity, setActivity] = useState([]);

  const getAllActivity = () => {
    axios
      .get(`${baseURL}notification`)
      .then(res => {
        setActivity(res.data);
        // setLoading(false);
      })
      .catch(error => {
        console.log('Api call error');
      });
  };

  useFocusEffect(
    useCallback(() => {
      // setLoading(true);
      // Products
      getAllActivity();
      return () => {
        setActivity([]);
      };
    }, []),
  );
  return (
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      {/* header----------------------------------------------------------- */}
      <View style={Styles.Header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Styles.TouHeader}>
          <Image source={Back} style={Styles.ImageHeader} />
        </TouchableOpacity>
        <View style={Styles.ViewText}>
          <Text style={Styles.TextHeader}>Hoạt động</Text>
        </View>
        <View style={Styles.TouHeader}></View>
      </View>
      {/* body--------------------------------------------------------------- */}
      <View>
        <FlatList
          style={{}}
          data={activity}
          // keyExtractor={item => item._id}
          keyExtractor={item => `key-${item._id}`}
          renderItem={({ item, index }) => {
            return (
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text>{formatDate(item.date)}</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Detail', { item: item })}
                  style={Styles.FlatView}>
                  <View
                    style={{
                      width: '100%',
                      height: '65%',
                      backgroundColor: 'white',
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'stretch',
                      }}
                      source={{ uri: item.img ? item.img : null }}
                    />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '35%',
                      justifyContent: 'center',
                    }}>
                    <Text style={Styles.TextFlat1}>{item.body}</Text>
                    <Text style={Styles.TextFlat2}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ActivityScreen;

export const Styles = StyleSheet.create({
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
  ViewText: { alignItems: 'center', justifyContent: 'center', width: '80%' },
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
  TextFlat1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  TextFlat2: {
    fontSize: 13,
    marginLeft: 10,
  },
});
