import React, {useCallback, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import useDashboard from '../../hooks/Dashboards/useDashboard';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import {Header, Icon} from 'react-native-elements';
import {format} from '../../utils/Methods';
const {height, width} = Dimensions.get('window');
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import {useLogin} from '../../Context/LoginProvider';
const ProductMenu = ({navigation, route}) => {
  const {isLoggedIn, profile} = useLogin();
  const [cartItems, setCartItems] = useState([]);
  const {dashboard} = useDashboard();
  const [products, setProducts] = useState([]);
  const id_dashboard = route.params.id_dashboard;
  console.log('Thang', id_dashboard);
  const [menudashboard,setMenudashboard] = useState([]);
  useFocusEffect(
    useCallback(() => {
      axios
        .get(`${baseURL}products`)
        .then(res => {
          setProducts(res.data);
        })
        .catch(error => {
          console.log('Api call error');
        });
      return () => {
        setProducts([]);
   
      };
    }, []),
  );
  // find menudashboard


  useEffect(() => {
    const menu = products.filter((item) => {
      if (item.styleid == id_dashboard) {
        return item
      }
      else {
        console.log('Không tìm thấy sản phẩm');
      }
    });
    setMenudashboard(menu)
    },[products])

  // Carts
  useFocusEffect(
    useCallback(() => {
      // Carts
      axios
        .get(`${baseURL}carts/user/` + profile._id)
        .then(res => {
          setCartItems(res.data);
        })
        .catch(error => {
          console.log('Api call error');
        });
      return () => {
        setCartItems([]);
      };
    }, []),
  );

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
            onPress={() =>
              navigation.navigate('HomeNavigator', {
                screen: 'Product Detail',
                params: {id: item._id},
              })
            }>
            <View style={styles.viewPopSearch}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{uri: item.ThumbImg}}
                  style={{height: 170, width: '100%'}}
                />
              </View>
              <View style={{marginLeft: 4}}>
                <Text style={styles.cardName}>{item.ten}</Text>
              </View>
              <View style={{marginLeft: 4}}>
                <Text style={styles.price}>{format(item.gia)} đ</Text>
              </View>
            </View>
          </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header
        containerStyle={{
          backgroundColor: '#ffffff',
          borderColor: '#F5F5F5',
          borderWidth: 1,
          width: '100%',
        }}
        centerComponent={{
          text: 'Sản Phẩm',
          style: {
            color: '#8D6E63',
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name="angle-left"
              size={25}
              type="font-awesome"
              color="#000000"
              style={{marginLeft: 5}}
            />
          </TouchableOpacity>
        }
        rightComponent={
          <View
            style={{
              flexDirection: 'row',
              marginRight: 10,
            }}>
            {isLoggedIn ? (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CartNavigator', {screen: 'Cart'})
                  }>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{marginRight: -8}}>
                      <IconCart name="handbag" size={24} />
                    </View>
                    <View
                      style={{
                        backgroundColor: 'red',
                        height: 20,
                        width: 20,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', fontWeight: 'bold'}}>
                        {cartItems.length ? (
                          <Text>{cartItems.length}</Text>
                        ) : (
                          <Text>0</Text>
                        )}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UserNavigator', {screen: 'Login'})
                  }>
                  <IconCart name="handbag" size={24} />
                </TouchableOpacity>
              </>
            )}
          </View>
        }
      />
      <View style={styles.bodyContainer}>
        <ScrollView showsVerticalScrollIndicator={false} horizontal>
          <FlatList data={menudashboard} numColumns={2} renderItem={renderItem} />
          <View style={styles.footer}></View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
  // Header Style
  headerContainer: {
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Body Style
  bodyContainer: {
    flex: 1,
    marginTop: 20,
  },
  viewPopSearch: {
    height: 250,
    backgroundColor: 'white',
    elevation: 3,
    width: width / 2.24,
    marginVertical: 10,
    marginHorizontal: 10.5,
    borderRadius: 5,
  },
  cardName: {
    marginTop: 10,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  price: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductMenu;
