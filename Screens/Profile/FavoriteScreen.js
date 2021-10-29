import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import Star from '../../components/ProductMenu/Star';
import LoaderFavorite from '../../components/Home/Loader/LoaderFavorite';
import IconSearch from 'react-native-vector-icons/Ionicons';
import IconBack from 'react-native-vector-icons/Ionicons';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../assets/data/colors';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import {DATA} from '../../assets/data/PopularSearch';
import {useLogin} from '../../Context/LoginProvider';
const {height, width} = Dimensions.get('window');
const numColumns = 2;
const FavoriteScreen = ({navigation, i}) => {
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const {profile} = useLogin();
  useFocusEffect(
    useCallback(() => {
      axios
        .get(`${baseURL}favorite/user/` + profile._id)
        .then(res => {
          setFavorite(res.data);
          console.log(res);
          if (loading) {
            setLoading(false);
          }
          console.log('a:', res.data);
        })
        .catch(error => {
          console.log('Api call error');
        });
      return () => {
        setFavorite([]);
      };
    }, []),
  );

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
    const showConfirmDialog = () => {
      return Alert.alert(
        'Bạn đã chắc chắn?',
        'Bạn có chắc chắn xoá sản phẩm này chứ?',
        [
          {
            text: 'Huỷ',
          },
          {
            text: 'Đồng ý',
            onPress: () => DeleteFavorite(item._id),
          },
        ],
      );
    };

    const DeleteFavorite = _id => {
      let filterArray = favorite.filter((val, i) => {
        if (val._id !== _id) {
          return val;
        }
      });
      axios
        .delete(`${baseURL}favorite/` + item._id)
        .then(function (response) {
          setFavorite(filterArray);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    return (
      <TouchableOpacity style={styles.view} onPress={showConfirmDialog}>
        <View style={{flex: 1}}>
          <Image
            style={{flex: 1, width: null, height: null}}
            source={{uri: item.product_id ? item.product_id.ThumbImg : ' '}}
          />
          {/* <TouchableOpacity style={styles.iconContainer} onPress={AlertFavorite} >
          <Icon name="favorite" color="red" size={20}  />
        </TouchableOpacity> */}
        </View>
        <View style={{top: -4, marginLeft: 5}}>
          <Text style={{fontSize: 18}}>
            {item.product_id ? item.product_id.ten : ' '}
          </Text>
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
            <Text style={{fontSize: 16, color: 'red'}}>
              {item.product_id ? item.product_id.gia : ' '}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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

      <SafeAreaView>
        {loading ? (
          <LoaderFavorite />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
              <View style={styles.viewBody}></View>
              <ScrollView showsVerticalScrollIndicator={false} horizontal>
                <FlatList
                  data={favorite}
                  numColumns={2}
                  scrollEnabled={false}
                  keyExtractor={item => item.id}
                  renderItem={renderItemFavorite}
                />
              </ScrollView>
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
                <ScrollView showsVerticalScrollIndicator={false} horizontal>
                  <FlatList
                    numColumns={numColumns} // numColumns 2 nam ngang
                    data={DATA} //set Data
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </ScrollView>
              </View>
            </View>
            <View style={{height: 50, backgroundColor: 'white'}}></View>
          </ScrollView>
        )}
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
    position: 'relative',
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
    margin: 9.8,
    backgroundColor: COLORS.white,
    height: height / 2.9,
    width: width / 2.24,
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
