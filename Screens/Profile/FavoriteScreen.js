import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  SectionList,
  Image,
  Dimensions,
} from 'react-native';
import Star from '../../components/ProductMenu/Star';

import IconSearch from 'react-native-vector-icons/Ionicons';

import IconBack from 'react-native-vector-icons/Ionicons';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import IconFilter from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {clothes} from '../../assets/data/products';
import COLORS from '../../assets/data/colors';

import {DATA} from '../../assets/data/PopularSearch';
import {List} from 'react-native-paper';
const {height, width} = Dimensions.get('window');
const numColumns = 2;
const FavoriteScreen = ({navigation, i}) => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailMenu')}>
        <View style={styles.view}>
          <View style={{flex: 2}}>
            <Image
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'stretch',
              }}
              source={item.image}
            />
          </View>
          <View style={{top: -4, marginLeft: 5}}>
            <Text style={{fontSize: 18}}>{item.name}</Text>
            <View style={styles.rate}>
              <Star ratings={4} reviews={100} />
            </View>

            <Text style={{fontSize: 16, color: 'red'}}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItemFavorite = ({item, index}) => {
    return (
      <View style={styles.view}>
        <View style={styles.iconContainer}>
          <Icon name="favorite" color="red" size={20} />
        </View>
        <View style={{flex: 2}}>
          <Image
            style={{flex: 1, width: null, height: null, resizeMode: 'stretch'}}
            source={item.image}
          />
        </View>
        <View style={{top: -4, marginLeft: 5}}>
          <Text style={{fontSize: 18}}>{item.name}</Text>
          <View style={styles.rate}>
            <Star ratings={4} reviews={100} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.iconAddCart}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/icon/addcart.png')}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 16, color: 'red'}}>{item.price}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <IconBack
          name="chevron-back"
          size={28}
          onPress={() => navigation.goBack()}
        />
        <IconSearch
          name="md-search-outline"
          size={28}
          style={{marginLeft: -85}}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Yêu thích</Text>
        <IconCart name="handbag" size={28} />
      </View>

      {/* Body */}
      <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.viewBody}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <View style={styles.itemBody}>
                <Text style={styles.itemText}>Sàng lọc</Text>
                <IconFilter name="filter" size={28} style={{marginLeft: 10}} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{width: 140, marginTop: -8}}>
                <List.Section>
                  <List.Accordion
                    title="Tình trạng"
                    titleStyle={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 14,
                    }}
                    style={{backgroundColor: '#fff'}}></List.Accordion>
                </List.Section>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{width: 140, marginTop: -8}}>
                <List.Section>
                  <List.Accordion
                    title="Kiểu dáng"
                    titleStyle={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 14,
                    }}
                    style={{backgroundColor: '#fff'}}></List.Accordion>
                </List.Section>
              </View>
            </TouchableOpacity>
          </View>

          <ScrollView >
            <FlatList
              data={clothes}
              numColumns={2}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={renderItemFavorite}
            />

            <View>
              <Text
                style={{
                  fontSize: 25,
                  color: 'black',
                  marginLeft: 5,
                  marginTop: 25,
                  fontWeight: 'bold',
                }}>
                Sản phẩm đề xuất
              </Text>

              <FlatList
                numColumns={numColumns} // numColumns 2 nam ngang
                showsHorizontalScrollIndicator={false}
                data={DATA} //set Data
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Header Style
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    margin: 10,
  },
  iconHeader: {
    marginLeft: 2,
    top: 10,
  },
  iconContainer: {
    height: 30,
    width: 30,
    position: 'absolute',
    marginLeft: 143,
    top: 2,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Body Style
  bodyContainer: {
    flex: 1,
  },
  view: {
    flex: 1,
    margin: 8,
    backgroundColor: COLORS.white,
    height: 270,
    width: 180,
    borderColor: 'black',
    borderWidth: 0.3,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 2,
  },
  wrap: {
    flex: 1,
    padding: 10,
  },
  iconAddCart: {
    height: 40,
    width: 40,
    position: 'absolute',
    marginLeft: 124,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
  },
  textBox: {
    marginLeft: 15,
    marginTop: 10,
    color: '#384F7D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 5,
    marginHorizontal: 10,
  },
  itemBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#C0C0C0',
    height: height / 17.0,
  },
  itemText: {
    fontSize: 16,
    fontStyle: 'normal',
    color: '#000000',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default FavoriteScreen;
