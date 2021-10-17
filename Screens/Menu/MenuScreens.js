import React, {Component,useEffect, useState } from 'react';
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
  ScrollView
} from 'react-native';
import { sectionListData, listTab } from '../../assets/data/Menu/ItemMenu';
import LoaderMenu from '../../components/Home/Loader/LoaderMenu';
const { height, width } = Dimensions.get('window');
const MenuScreen = ({ navigation }) => {
  const [status, setStatus] = useState('Tất cả');
  const [datalist, setDataList] = useState(sectionListData);
//loader
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  });
  //Biến tìm và hiển thị sản phẩm theo loại sản phẩm (Filter)
  const setStatusFilter = status => {
    if (status !== 'Tất cả') { //trạng thái khác All hiển thị quần, áo, giày,..
      setDataList([...sectionListData.filter(e => e.status === status)]);
      
    } else { //Ngược lại hiển thị tất cả
      setDataList(sectionListData)
    }
    setStatus(status)
  }
  //Call vào renderItem của Section List (chia numColumns cho section list, ...)
  const renderSection = ({ item }) => {
    return (
      <FlatList
        data={item.list}
        numColumns={3}
        renderItem={renderListItem}
        keyExtractor={keyExtractor}
      />
    )
  }
  //Section List Header (Tiêu đề)
  const renderSectionHeader = ({ section }) => {
    return (
      <View style={{ marginTop: 15, marginLeft: 10 }}>
        <Text style={styles.textTab}>{section.title}</Text>
      </View>
    );
  }
  //List chứa các item Image,name,price, ...
  const renderListItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DrawerNavigator', { screen: 'ProductMenu' })}
      >
        <View key={item.id} style={styles.itemContainer}>
          <View style={styles.itemLogo}>
            <Image
              style={styles.itemImage}
              source={item.image}
            />
          </View>
          <View style={{}}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  //Chọn key là id (hoặc name,...)
  const keyExtractor = (item) => {
    return item.id
  }
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView 
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
        style={styles.listTab}>
        {
          listTab.map(e => (
            <TouchableOpacity
              key={e.id}
              style={[styles.btnTab, status === e.status && styles.btnTabActive]}
              onPress={() => setStatusFilter(e.status)}
            >
              <Text style={[styles.textTab, status === e.status && styles.textTabActive]}>{e.status}</Text>
            </TouchableOpacity>
          ))
        }
    </ScrollView>
 
    {loading ? (
        <LoaderMenu/>
      ) : (

      <View style={{ width: 200, backgroundColor: '#fff', flex: 2 }}>
  
        <SectionList
          keyExtractor={(item, index) => item.name}
          sections={datalist}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderSection}
        />
     
      </View>
)}
    </SafeAreaView>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  listTab: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderColor: '#C0C0C0',
    marginBottom: 15,
  },
  textTab: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  btnTabActive: {
    backgroundColor: '#8D6E63',
  },
  textTabActive: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  itemContainer: {
    paddingVertical: 15,
    alignItems: 'center',
    width: width / 4.9,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
  },
  itemLogo: {
    backgroundColor: 'green',
    width: 70,
    alignItems: 'center'
  },
  itemImage: {
    height: 100,
    width: 82,
    resizeMode: 'cover'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
});

