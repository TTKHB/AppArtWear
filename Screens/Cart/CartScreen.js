import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  Modal,
}
from 'react-native';
import { Header, Icon, Avatar, Badge, withBadge } from 'react-native-elements';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import CheckOutItem from '../../components/Checkout/CheckOutItem';
import MyCheckOut from '../../components/Checkout/myCheckOut';
import IconFavorite from 'react-native-vector-icons/MaterialIcons';
import IconArrow from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import { useLogin } from '../../Context/LoginProvider';
import { styles } from '../../components/Cart/ItemCart';
import DialogCart from '../../components/Cart/DialogCart';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import LoaderCart from '../../components/Home/Loader/LoaderCart';
const CartScreen = ({ navigation }) => {
  const { isLoggedIn, profile } = useLogin();
  const [cartList, setcartList] = useState([]);
  const [itemCart, setitemCart] = useState([]);
  const [checkboxColor, setCheckboxColor] = useState('');
  const [imagesFilter, setImagesFilter] = useState([]);
  const [images, setImages] = useState([]);
  const [colors, setColors] = useState([]);
  const [details, setDetails] = useState([]);
  const [products, setProducts] = useState([]);
  const [checksize, setchecksize] = useState([]);
  const [sizedo, setsizedo] = useState([]);
  const [checkboxSize, setCheckboxSize] = useState('');
  const [loading, setLoading] = useState(true);
  let itemsPrice = 0;
  cartList.forEach((order) => {
    if (order) {
      itemsPrice += order.amount * (order.product_id ? order.product_id.gia : '');
    }
  });
  // get all cart bang id user
  useFocusEffect(
    useCallback(() => {
      // Products
      axios
        .get(`${baseURL}carts/user/` + profile._id)
        .then(res => {
          setcartList(res.data);
          if (loading) {
            setLoading(false)
          }
        })
        .catch(error => {
          console.log('Api call error');
        });
      return () => {
        setcartList([]);
      };
    }, []),
  );
  // get all product
  useFocusEffect(
    useCallback(() => {
      // Products
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
  //Diglog onClick
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  }
  //Bottom sheet show dung mau dung kich thuoc tung san pham
  const openBottomSheet = product_id => {
    let filterArray = cartList.filter((val, i) => {
      if (val.product_id == product_id) {
        bs.current.snapTo(0)
        return val;
      }
    });
    setDetails(filterArray)
  }
  console.log("detail ne", details)

  useEffect(() => {
    details.map(item => {
      if (item.product_id.product) {
        setImages(item.product_id.product)
        setchecksize(item.product_id.kichthuoc)
      }
      if (item._id) {
        setitemCart(item._id)
      }
    })
  }, [details]);
  console.log("list mau, color:", images)
  console.log("list size:", checksize)
  console.log("id Cart", itemCart)

  //fetch colors
  useEffect(() => {
    let color = [];
    let size = [];
    if (images) {
      images.forEach(item => {
        color.push(item.mau);
      });
      setColors([...color]);
      //default value first color  
      setCheckboxColor(color[0]);
    }
    if (checksize) {
      checksize.forEach(item => {
        size.push(item);
      });
      setsizedo([...size]);
      //default value first size
      setCheckboxSize(size[0]);
    }
  }, [images, checksize]);
  console.log("Colors", colors)
  console.log("Set list size sp", sizedo)

  //l???ng nghe khi ch???n m??u n?? s??? filter ???nh c?? value l?? m??u
  useEffect(() => {
    if (images) {
      const indexOfColor = images.findIndex(item => {
        return item.mau == checkboxColor;
      });
      console.log(
        '???? ~ file: ProductDetailsScreen.js ~ line 165 ~ useEffect ~ indexOfColor',
        indexOfColor,
      );
      let img = [];
      if (indexOfColor != -1 && images[indexOfColor].image != '') {
        const data = images[indexOfColor].image.forEach(image => {
          img.push(image);
        });
        setImagesFilter([...img]);
      }
      console.log('img test', img);
    }
    if (checksize) {
      const indexOfSize = checksize.findIndex(item => {
        return item == checkboxSize;
      });
      console.log(
        'indexOfSize',
        indexOfSize,
      );
    }
  }, [images, checkboxColor, checksize, checkboxSize]);

  console.log("Mau da check", checkboxColor)
  console.log("Image filter", imagesFilter)
  console.log("checkboxSize ne", checkboxSize)

  const selectedColor = (index, color) => {
    setCheckboxColor(color);
  };
  const selectedSize = (index, size) => {
    setCheckboxSize(size);
  };

  //Update size,anh, mau
  const updateItemSp = (itemCart, type) => {
    const dataCart = itemCart;
    //Lay ra tam anh dau tien trong array list do 
    var firstImage = imagesFilter[0];
    console.log("Get first Image in list:", firstImage);
    if (type) {
      const itemListCart = cartList.map(item => {
        if (item._id == dataCart) {
          item.color = checkboxColor;
          item.size = checkboxSize;
          item.imageSp = firstImage;
          return item;
        }
        return item;
      });
      fetch(`${baseURL}carts/updateItem/` + itemCart, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageSp: firstImage,
          size: checkboxSize,
          color: checkboxColor,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('is Update successffly!!');
          setcartList(itemListCart);
          bs.current.snapTo(1);
          setLoading(true);
          setTimeout(() => {
            setLoading(false)
          }, 3000)
        })
        .catch(err => {
          console.log('error', err);
        });
    }
  };

  //RenderItem Cart
  const renderItem = ({ item }) => {
    const showConfirmDialog = () => {
      return Alert.alert(
        'B???n ???? ch???c ch???n?',
        'B???n c?? ch???c ch???n xo?? s???n ph???m n??y ch????',
        [
          {
            text: 'Hu???',
          },
          {
            text: '?????ng ??',
            onPress: () => DeleteCart(item._id),
          },
        ],
      );
    };
    // Delete Cart
    const DeleteCart = _id => {
      //delete an item from state array
      changeModalVisible(true)
      let filterArray = cartList.filter((val, i) => {
        if (val._id !== _id) {
          return val;
        }
      });
      axios
        .delete(`${baseURL}carts/` + item._id)
        .then(function (response) {
          console.log(response);
          if (response) {
            setTimeout(() => {
              changeModalVisible(false)
              setcartList(filterArray);
            }, 3000)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    const onChangeQual = (item, type) => {
      const dataCar = item._id;
      if (type) {
        const congSoLuong = cartList.map(item => {
          if (item._id == dataCar) {
            item.amount += 1;
            return item;
          }
          return item;
        });
        fetch(`${baseURL}carts/` + item._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: item.amount,
          }),
        })
          .then(res => res.json())
          .then(data => {
            setcartList(congSoLuong);
            console.log('is Update successffly!!', data.amount);
          })
          .catch(err => {
            console.log('error', err);
          });
      } else if (type == false) {
        const truSoLuong = cartList.map(item => {
          if (item._id == dataCar) {
            item.amount -= 1;
            if (item.amount < 1) {
              console.log('end game');
              item.amount = 1;
              showConfirmDialog();
            }
            return item;
          }
          return item;
        });
        fetch(`${baseURL}carts/` + item._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: item.amount,
          }),
        })
          .then(res => res.json())
          .then(data => {
            setcartList(truSoLuong);
            console.log('is Update successffly!!', data.amount);
          })
          .catch(err => {
            console.log('error', err);
          });
      }
    };
    return (
      <View style={styles.FlatListStyle} key={item._id}>
        <View style={styles.viewCart}>
          <Image
            style={styles.imageCart}
            source={{ uri: item ? item.imageSp : ' ' }}
          />
          {/* Item name, price,... */}
          <View style={styles.itemCart}>
            <Text style={styles.textItemName}>
              {item.product_id ? item.product_id.ten : ' '}
            </Text>
            <TouchableOpacity style={styles.itemSizeColor}
              onPress={() => openBottomSheet(item.product_id)}
            >
              <BouncyCheckbox
                size={15}
                unfillColor={item ? item.color : ' '}
                iconStyle={{ borderColor: 'brown' }}
                disableBuiltInState={true}
                fillColor={item ? item.color : ' '} />
              <Text style={styles.textpain}>/</Text>
              <Text style={styles.textsize}>
                Size  {item ? item.size : ' '}
              </Text>
              <IconArrow size={20} name='keyboard-arrow-down' style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            <Text style={styles.textItemPrice}>
              {item.product_id ? item.product_id.gia.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.') : ' '} ??
            </Text>
            {/* + - */}
            <View style={styles.itemAmount}>
              <TouchableOpacity onPress={() => onChangeQual(item, false)}>
                <Text style={styles.textItemAmount}>-</Text>
              </TouchableOpacity>
              <Text>{item.amount}</Text>
              <TouchableOpacity onPress={() => onChangeQual(item, true)}>
                <Text style={styles.textItemAmount}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Delete Cart */}
        <TouchableOpacity
          style={styles.btnDeleteCart}
          onPress={showConfirmDialog}>
          <Image source={require('../../assets/icon/bin.jpg')} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderSanphamQuanTam = ({ item }) => {
    return (
      <View
        style={styles.viewSpQuanTam}
        key={item._id}
      >
        <TouchableOpacity style={styles.boxSpQuanTam} onPress={() =>
          navigation.navigate('HomeNavigator', {
            screen: 'Product Detail',
            params: { id: item._id },
          })}>
          <Image
            style={styles.imageSpQuanTam}
            source={{ uri: item.ThumbImg ? item.ThumbImg : null }}
          />
          <Text style={styles.priceSp}>
            {item.gia ? item.gia.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.') : ''} ??
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const imageFilterList = ({ item }) => {
    return (
      <View style={styles.viewImageFilter}>
        <Image
          style={{ height: 120, width: 100 }}
          source={{ uri: item ? item : ' ' }}
          resizeMode="stretch" />
      </View>
    )
  }
  //Bi???n Custom bottom sheet
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelTitle}>C???p nh???t s???n ph???m</Text>
        <Text style={styles.panelSubtitle}>Ch???n thu???c t??nh b???n mu???n c???p nh???t</Text>
      </View>
      <View style={styles.bannerGif}>
        {imagesFilter == "" ? (
          <>
            <View style={styles.viewImageRong}>
              <View style={styles.viewRong}>
                <Text style={styles.textRong}>?????i x??u...</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <FlatList
              horizontal={true}
              data={imagesFilter}
              renderItem={imageFilterList}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
        )}
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>M??u s???c:</Text>
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 1 }}>
        {colors.map((color, i) => {
          return (
            <BouncyCheckbox
              key={color}
              size={30}
              isChecked={checkboxColor == color ? true : false}
              onPress={() => selectedColor(i, color)}
              unfillColor={color}
              iconStyle={{ borderColor: 'brown' }}
              disableBuiltInState={true}
              fillColor={color}></BouncyCheckbox>
          );
        })}
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>K??ch th?????c:</Text>
      </View>
      <View style={styles.sizesContainer}>
        {checksize.map((size, i) => {
          return (
            <TouchableOpacity
              key={size}
              onPress={() => selectedSize(i, size)}
              style={{
                borderColor: checkboxSize == size ? 'black' : '#D3D3D3', //if check true borderColor is black, else is #D3D3D3
                borderWidth: checkboxSize == size ? 2 : 2, // tuong tu nhu tren
                justifyContent: 'center',
                alignItems: 'center',
                height: 30,
                width: 30,
                borderRadius: 10,
                flexDirection: 'row',
                margin: 2
              }}
            >
              <Text>{size}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={() => updateItemSp(itemCart, true)}>
        <Text style={styles.panelButtonTitle}>C???P NH???T</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButtonCancel}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>HU??? B???</Text>
      </TouchableOpacity>
    </View>
  );
  //Bi???n Custom Header Bottom Sheet
  const renderHeader = () => (
    <View style={styles.headerBottomSheet}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.useRef(null);
  const fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.Container}
        centerComponent={{
          text: 'Gi??? h??ng c???a t??i',
          style: {
            color: '#8D6E63', textAlign: 'center',
            alignSelf: 'center',
            fontSize: 25,
            fontWeight: 'bold'
          }
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
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        }
        rightComponent={
          <View
            style={styles.rightComponent}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UserNavigator', { screen: 'FavoriteScreen' })
              }>
              <IconFavorite
                name="favorite-outline"
                size={28}
                style={styles.IconFavorite}
              />
            </TouchableOpacity>
            {isLoggedIn ? (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CartNavigator', { screen: 'Cart' })
                  }>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 0 }}>
                      <IconCart name="handbag" size={24} />
                    </View>
                    {cartList.length ? (
                      <>
                        <View style={{ marginLeft: -10 }}>
                          <Badge value={cartList.length} status="error" />
                        </View>
                      </>
                    ) : null}
                  </View>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UserNavigator', { screen: 'Login' })
                  }>
                  <IconCart name="handbag" size={24} />
                </TouchableOpacity>
              </>
            )}
          </View>
        }
      />
      <BottomSheet
        ref={bs}
        snapPoints={[500, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      {loading ? (
        <LoaderCart />
      ) : (
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          }}
        >
          {/* Diglog when delete cart success */}
          <Modal
            transparent={true}
            animationType='fade'
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(false)}
          >
            <DialogCart />
          </Modal>
          {/* Th??m ?????a ch???*/}
          <CheckOutItem
            icon="truck-outline"
            color="#00008B"
            name="Mua th??m ????? t???n h?????ng v???n chuy???n mi???n ph??"
            iconright="angle-right"
          />
          <View style={styles.content}>
            {/* S???n ph???m thanh to??n c???a t??i */}
            <MyCheckOut icon="shop" name="Art Wear" />
            {/* View san pham */}
            <View
              style={{
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* Check cart r???ng */}
              {cartList.length === 0 && (
                <View style={styles.viewCartEmpty}>
                  <Image
                    style={styles.imageCartEmpty}
                    source={require('../../assets/images/Error/ShoppingCart.jpg')}
                  />
                  <Text style={styles.textCartEmptyOne}>
                    Kh??ng c?? g?? trong gi??? h??ng
                  </Text>
                  <Text style={styles.textCartEmptyTwo}>
                    L?????t Art Wear v?? mua s???m n??o!
                  </Text>
                  <TouchableOpacity
                    style={styles.viewShoppingNow}
                    onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.textShoppingNow}>Mua s???m n??o</Text>
                  </TouchableOpacity>
                </View>
              )}
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <FlatList
                  data={cartList}
                  renderItem={renderItem}
                  keyExtractor={item => item._id}
                />
              </ScrollView>
            </View>
            {/* View san pham goi ??*/}
            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                elevation: 2,
              }}>
              {/* Line g???ch ngang */}
              <View style={styles.divider} />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                S???n ph???m c?? th??? b???n ??ang t??m ki???m
              </Text>
              <FlatList
                data={products}
                renderItem={renderSanphamQuanTam}
                keyExtractor={item => item._id}
                horizontal
              />
            </View>
          </View>
        </Animated.ScrollView>
      )}
      {/*Footer Button X??c nh???n thanh to??n ngay b??y gi??? */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.texttong}>T???ng thanh to??n:</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.tongprice}>
            {itemsPrice.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')} ??
          </Text>
          <View style={styles.btnItemOne}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CartNavigator',
                {
                  screen: 'Checkout',
                  params:
                  {
                    tongPrice: itemsPrice,
                    spGioHang: cartList,
                  }
                }
              )}>
              <Text style={styles.textItemOne}>Mua h??ng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
