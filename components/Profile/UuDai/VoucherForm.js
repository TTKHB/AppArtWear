import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SafeAreaView,
  SectionList,
  ScrollView,
} from 'react-native';
import { sectionListData } from '../../../assets/data/Voucher/VoucherData';
const { height, width } = Dimensions.get('window');
import Dash from 'react-native-dash';

const VoucherForm = () => {
  //Call vào renderItem của Section List
  const renderSection = ({ item }) => {
    return (
      <FlatList
        data={item.list}
        renderItem={renderListItem}
        keyExtractor={keyExtractor}
      />
    )
  }
  //Section List Header (Tiêu đề)
  const renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.textHeader}>{section.title}</Text>
      </View>
    );
  }
  //List chứa các item Image,name,sale, ...
  const renderListItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ paddingVertical: 10 }}
      >
        <View key={item.id} style={[styles.headerItemThree, { backgroundColor: item.color }]} >
          <View style={styles.viewHeaderItem}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.textNameItem}>{item.name}</Text>
              <Text style={styles.textSaleItem}>{item.sale}</Text>
            </View>
            <View style={{ marginRight: 15 }}>
              <Image source={item.image} style={styles.iconGift} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.botronOne} />
            <View style={styles.viewDash}>
              <Dash dashLength={5} dashColor="#fff" />
            </View>
            <View style={styles.botronTwo} />
          </View>
          <View style={styles.viewDecription}>
            <Text style={styles.textDecription}>{'\u2022'} {item.decriptionOne}</Text>
            <Text style={styles.textDecription}>{'\u2022'} {item.decriptionTwo}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  //Chọn key là id (hoặc name,...)
  const keyExtractor = (item) => {
    return item.name
  }

  return (
    <View style={styles.container}>
      <SectionList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        sections={sectionListData}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  sectionHeader: {
    marginTop: 15,
  },
  textHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0E2061'
  },
  viewHeaderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerItemThree: {
    width: width / 1.1,
    height: height / 5.5,
    borderWidth: 0.5,
    borderColor: '#F8F8F8',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  textNameItem: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12
  },
  textSaleItem: {
    color: 'white',
    fontSize: 20,
  },
  iconGift: {
    marginTop: 10,
    height: 70,
    width: 65
  },
  viewDash: {
    marginTop: 10,
    height: 2,
    flex: 1
  },
  botronOne: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 20,
    width: 20,
    marginLeft: '-2%'
  },
  botronTwo: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 20,
    width: 20,
    marginRight: '-1%'
  },
  viewDecription: {
    paddingHorizontal: 10,
    marginVertical: 2
  },
  textDecription: {
    color: 'white',
    fontSize: 20
  }
})
export default VoucherForm;