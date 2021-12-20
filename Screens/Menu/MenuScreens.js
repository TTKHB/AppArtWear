import React, {Component, useEffect, useState} from 'react';
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
import LoaderMenu from '../../components/Home/Loader/LoaderMenu';
import useDashboard from '../../hooks/Dashboards/useDashboard';
import useCategories from './../../hooks/Categories/useCategories';

const {height, width} = Dimensions.get('window');
const MenuScreen = ({navigation}) => {
  const {categories} = useCategories();
  const {dashboard} = useDashboard();
  console.log(
    '🚀 ~ file: MenuScreens.js ~ line 23 ~ MenuScreen ~ dashboard',
    dashboard,
  );
  const [status, setStatus] = useState('all');
  const [dashboardFiltered, setDashboardFiltered] = useState([]);
  const [mainDashBoard, setMainDashBoard] = useState([]);
  console.log(
    '🚀 ~ file: MenuScreens.js ~ line 29 ~ MenuScreen ~ dashboardFiltered',
    dashboardFiltered,
  );

  //loader
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let dataDashBoard = dashboard.map(item => {
      item.data = [{Styles: item.Styles}];
      delete item.Styles;
      return item;
    });
    console.log(
      '🚀 ~ file: MenuScreens.js ~ line 37 ~ useEffect ~ dataDashBoard',
      dataDashBoard,
    );
    setMainDashBoard(dataDashBoard);
    setDashboardFiltered(dataDashBoard);
    return () => {
      setMainDashBoard([]);
      setDashboardFiltered([]);
    };
  }, [dashboard]);
  //Biến tìm và hiển thị sản phẩm theo loại sản phẩm (Filter)
  const setStatusFilter = id => {
    setDashboardFiltered(dashboard);
    if (id == 'all') {
      setDashboardFiltered(mainDashBoard);
    } else {
      const data = mainDashBoard.filter(dashboard => {
        return dashboard.theloai_id == id;
      });
      console.log(
        '🚀 ~ file: MenuScreens.js ~ line 59 ~ MenuScreen ~ data',
        data,
      );
      setDashboardFiltered(data);
    }
    setStatus(id);
  };
  //Call vào renderItem của Section List (chia numColumns cho section list, ...)
  const renderSection = ({item}) => {
    return (
      <FlatList
        data={item.Styles}
        numColumns={3}
        renderItem={renderListItem}
        keyExtractor={keyExtractor}
      />
    );
  };
  //Section List Header (Tiêu đề)
  const renderSectionHeader = ({section}) => {
    return (

      <View style={{marginTop: 15, marginLeft: 10}}>
        <Text style={styles.textTab}>{section.title}</Text>
      </View>
    );
  };
  //List chứa các item Image,name,price, ...
  const renderListItem = ({item}) => {
    console.log("Bac",item._id);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DrawerNavigator', {screen: 'ProductMenu', params: { id_dashboard: item._id},}) }>
        <View key={item._id} style={styles.itemContainer}>
          <View style={styles.itemLogo}>
            <Image style={styles.itemImage} source={{uri: item.image}} />
          </View>
          <View style={{}}>
            <Text style={styles.itemName}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  //Chọn key là id (hoặc name,...)
  const keyExtractor = item => {
    return item.id;
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.listTab}>
        <TouchableOpacity
          style={[styles.btnTab, status === 'all' && styles.btnTabActive]}
          onPress={() => setStatusFilter('all')}>
          <Text
            style={[styles.textTab, status === 'all' && styles.textTabActive]}>
            Tất cả
          </Text>
        </TouchableOpacity>
        {categories.map(e => (
          <TouchableOpacity
            key={e._id}
            style={[styles.btnTab, status === e._id && styles.btnTabActive]}
            onPress={() => setStatusFilter(e._id)}>
            <Text
              style={[
                styles.textTab,
                status === e._id && styles.textTabActive,
              ]}>
              {e.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{width: 200, backgroundColor: '#fff', flex: 2}}>
        <SectionList
          keyExtractor={(item, index) => item._id}
          sections={dashboardFiltered}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderSection}
        />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
    fontWeight: 'bold',
  },
  itemContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    width: width / 4.9,
    justifyContent: 'center',
    margin:10
  },
  itemName: {
    fontSize: 16,
  },
  itemLogo: {
    backgroundColor: 'green',
    width: 70,
    alignItems: 'center',
  },
  itemImage: {
    height: 100,
    width: 82,
    resizeMode: 'cover',
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
