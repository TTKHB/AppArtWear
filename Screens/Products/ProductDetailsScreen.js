import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
} from 'react-native';
import {format} from '../../utils/Methods';
import IconFavorite from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Animated from 'react-native-reanimated';
import SearchHangDau from '../../components/Home/SearchHangDau';
import COLORS from '../../assets/data/colors';
import {LogBox} from 'react-native';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import Star from '../../components/ProductMenu/Star';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import RoundedCheckbox from 'react-native-rounded-checkbox';
const {height, width} = Dimensions.get('window');
import StarRating from 'react-native-star-rating';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
import Swiper from 'react-native-swiper';
import {List} from 'react-native-paper';
import Ship from '../../components/Checkout/ShipDetail';
import LoaderProductDetail from '../../components/Home/Loader/LoaderProductDetail';
import useReviewByProductId from './../../hooks/Reviews/useReviewByProductId';
import {formatDate} from '../../utils/Methods';
import useReviewStatistic from './../../hooks/Reviews/useReviewStatistic';
import {rate, average} from 'average-rating';
import {useLogin} from '../../Context/LoginProvider';
import Dialog from 'react-native-dialog';
import useFavoriteOfUser from '../../hooks/Favorite/useFavoriteOfUser';
import {Header, Icon} from 'react-native-elements';
/**
 *
 * @param {id as product_id} param
 */
const ProductDetailsScreen = ({route, navigation, likeCountProp}) => {
  const {isLoggedIn, profile} = useLogin();
  const [cartItems, setCartItems] = useState([]);
  console.log(
    '🚀 ~ file: ProductDetailsScreen.js ~ line 50 ~ ProductDetailsScreen ~ profile',
    profile,
  );
  //Biến add sp vào giỏ hàng
  const updateData = async () => {
    //Nếu khác isLoggedIn từ Authencontext (Tức là chưa có tài khoản)
    //Phải vào login
    if (!isLoggedIn) {
      navigation.navigate('UserNavigator', {screen: 'Login'});
    }
    //Ngược lại thêm sp vào giỏ hàng
    else {
      fetch(`${baseURL}carts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: '1',
          product_id: details._id,
          user_id: profile._id,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('is Update successffly!!');
          //Show dialog thanh cong
          showDialog();
        })
        .catch(err => {
          console.log('error', err);
        });
    }
  };

  //Diglog onClick
  const [visible, setVisible] = useState(false);
  const showDialog = () => {
    setVisible(true);
  };
  const handleContinue = () => {
    setVisible(false);
  };

  const id = route.params.id;

  const renderItemComment = ({item, index}) => {
    if (item.UserId) {
      return (
        <View style={styles.container1}>
          <Image
            style={styles.image_user}
            source={{
              uri: item.UserId
                ? item.UserId.avatar
                : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg',
            }}
          />
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <Text style={styles.name}>{item.UserId.fullname}</Text>
              <Text style={styles.time}>{formatDate(item.DateCreated)}</Text>
            </View>
            <View style={styles.rate}>
              <Star ratings={item.RatingValue} reviews={item.RatingValue} />
            </View>
            <Text>{item.Review}</Text>
          </View>
        </View>
      );
    }
  };
  const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{color: 'black', fontSize: 20}}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    );
  };
  LogBox.ignoreAllLogs();
  Animated.timing(new Animated.Value(0), {
    toValue: 1,
    duration: 2500,
    useNativeDriver: true, // Add this line
  }).start();

  const onLikePressed = () => {
    const amount = isFavorite ? -1 : 1;
    setLikeCount(likeCount + amount);
    setIsFavorite(!isFavorite);
  };
  useEffect(() => {
    setLikeCount(likeCountProp);
  }, []);

  const [likeCount, setLikeCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [loading, setLoading] = useState(true);
  const [checkboxColor, setCheckboxColor] = React.useState('');
  const [imagesFilter, setImagesFilter] = React.useState([]);
  const [images, setImages] = React.useState([]);
  const [colors, setColors] = React.useState([]);
  const {reviewsOfProduct} = useReviewByProductId(id);
  const {reviewsStatistics} = useReviewStatistic(id);
  const {favoriteOfUser, deleteByFavorite, InsertOneFavoriteEqualTrue} =
    useFavoriteOfUser(profile._id); //profile._id => user_id
  const [dataReviewOfProduct, setDataReviewOfProduct] = React.useState([]);
  const [totalReviewOfProduct, setTotalReviewOfProduct] = React.useState(0);
  const [NumRating, setNumRating] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(
    '🚀 ~ file: ProductDetailsScreen.js ~ line 199 ~ ProductDetailsScreen ~ isFavorite',
    isFavorite,
  );

  const selectedColor = (index, color) => {
    setCheckboxColor(color);
  };

  const UpdateFavorite = () => {
    if (!isLoggedIn) {
      navigation.navigate('UserNavigator', {screen: 'Login'});
    } else {
      if (profile && !isFavorite) {
        const product_id = id;
        const user_id = profile._id;
        InsertOneFavoriteEqualTrue(product_id, user_id, !isFavorite);
      }
      if (profile && isFavorite) {
        deleteByFavorite(id);
      }
    }
  };

  //tìm favorite và fill data
  useEffect(() => {
    const findIsFavorite = favoriteOfUser.find(favorite => {
      if (favorite.product_id !== null) {
        return favorite.product_id._id == id;
      }
    });
    if (findIsFavorite) {
      setIsFavorite(findIsFavorite.isFavorite);
    }
  }, [favoriteOfUser]);

  //lắng nghe khi có reviewsOfProduct và set reviewsOfProduct
  useEffect(() => {
    const dataSlice = reviewsOfProduct.slice(0, 4);
    setTotalReviewOfProduct(reviewsOfProduct.length);
    setDataReviewOfProduct(dataSlice);

    const totalReviews = reviewsOfProduct.length;
    if (typeof reviewsStatistics !== 'undefined') {
      if (totalReviews != 0) {
        let countOneStar = Math.round(
          (reviewsStatistics.NumStar1 / totalReviews) * 100,
        );
        let countTwoStar = Math.round(
          (reviewsStatistics.NumStar2 / totalReviews) * 100,
        );
        let countThreeStar = Math.round(
          (reviewsStatistics.NumStar3 / totalReviews) * 100,
        );
        let countFourStar = Math.round(
          (reviewsStatistics.NumStar4 / totalReviews) * 100,
        );
        let countFiveStar = Math.round(
          (reviewsStatistics.NumStar5 / totalReviews) * 100,
        );

        const rating = [
          countOneStar,
          countTwoStar,
          countThreeStar,
          countFourStar,
          countFiveStar,
        ];
        let NumRating = average(rating);

        setNumRating(NumRating);
      }
    }
  }, [reviewsOfProduct, reviewsStatistics]);

  //fetch colors
  useEffect(() => {
    let color = [];
    if (images) {
      images.forEach(item => {
        color.push(item.mau);
      });
      setColors([...color]);

      //default value first color
      setCheckboxColor(color[0]);
    }
  }, [images]);

  //lắng nghe khi chọn màu nó sẽ filter ảnh có value là màu
  useEffect(() => {
    if (images) {
      const indexOfColor = images.findIndex(item => {
        return item.mau == checkboxColor;
      });
      console.log(
        '🚀 ~ file: ProductDetailsScreen.js ~ line 165 ~ useEffect ~ indexOfColor',
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
  }, [images, checkboxColor]);

  useFocusEffect(
    useCallback(() => {
      // Products
      axios
        .get(`${baseURL}products`)
        .then(res => {
          setProducts(res.data);
          if (loading) {
            setLoading(false);
          }
        })
        .catch(error => {
          console.log('Api call error');
        });
      return () => {
        setProducts([]);
      };
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      // Products Detail
      axios
        .get(`${baseURL}products/` + id)
        .then(res => {
          setDetails(res.data);
          setImages(res.data.product);
          if (loading) {
            setLoading(false);
          }
        })
        .catch(error => {
          console.log('Api call error');
        });
      return () => {
        setDetails([]);
      };
    }, []),
  );

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

  return (
    <View style={[styles.container, {backgroundColor: COLORS.white}]}>
      {/* Header */}
      <Header
        containerStyle={{
          backgroundColor: '#ffffff',
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UserNavigator', {screen: 'FavoriteScreen'})
              }>
              <IconFavorite
                name="favorite-outline"
                size={28}
                style={{
                  marginRight: 10,
                }}
              />
            </TouchableOpacity>
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
      <ScrollView>
        <TriggeringView onHide={() => console.log('text hidden')}>
          <Animated.ScrollView style={{alignSelf: 'stretch'}}>
            {/* Dialog thêm thành công giỏ hàng */}
            <Dialog.Container
              visible={visible}
              contentStyle={{
                borderRadius: 10,
                borderColor: 'white',
                width: width / 1.09,
              }}>
              <Dialog.Title style={{fontSize: 28, fontWeight: 'bold'}}>
                Thêm thành công{' '}
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../../assets/icon/checked.jpg')}
                />
              </Dialog.Title>
              <Dialog.Description style={{fontSize: 22, fontWeight: 'bold'}}>
                Sản phẩm đã được thêm vào giỏ hàng
              </Dialog.Description>
              <Dialog.Button
                style={{color: 'brown', fontWeight: 'bold', fontSize: 20}}
                label="Tiếp tục"
                onPress={handleContinue}
              />
            </Dialog.Container>
            <Swiper
              style={styles.wrapper}
              renderPagination={renderPagination}
              loop={false}>
              {imagesFilter.map((image, i) => {
                return (
                  <View style={styles.slide}>
                    <Image
                      style={styles.image}
                      source={{uri: image}}
                      // source={{uri: item.ThumbImg ? item.ThumbImg : null}}
                    />
                  </View>
                );
              })}
            </Swiper>

            {/* Body */}
            <View style={styles.detailsContainer}>
              <Text style={styles.nameText}>{details.ten}</Text>
              <Text style={styles.priceText}>{format(details.gia)} VNĐ</Text>

              {/* ngôi sao đánh giá sản phảm*/}
              <View style={styles.rate}>
                <Star rating={2} reviews={10}></Star>
              </View>
              <View style={styles.contentship}>
                {/*Chọn đơn vị giao hàng (ví dụ giao hàng tiết kiệm) */}
                <Ship
                  icon="truck-fast-outline"
                  iconship="truck-check-outline"
                  name="Giao hàng tiêu chuẩn"
                  nameship="Nhận hàng trong vòng 1 -> 3 ngày"
                  iconright="angle-right"
                />
              </View>
              <View style={styles.flashing}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Màu </Text>
                <Text style={{fontWeight: 'bold', fontSize: 20, left: -5}}>
                  Kích cỡ
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                {/* chọn màu */}
                <View style={styles.colorContainer}>
                  {colors.map((color, i) => {
                    return (
                      <BouncyCheckbox
                        size={30}
                        isChecked={checkboxColor == color ? true : false}
                        onPress={() => selectedColor(i, color)}
                        unfillColor={color}
                        iconStyle={{borderColor: 'brown'}}
                        disableBuiltInState={true}
                        fillColor={color}></BouncyCheckbox>
                    );
                  })}
                </View>

                {/* chọn size */}
                <View style={styles.sizesContainer}>
                  <RoundedCheckbox size={25} text="S"></RoundedCheckbox>
                  <RoundedCheckbox size={25} text="M"></RoundedCheckbox>
                  <RoundedCheckbox size={25} text="L"></RoundedCheckbox>
                </View>
              </View>

              {/* Mô tả sản phẩm */}
              <List.Section>
                <List.Accordion
                  titleStyle={{
                    marginLeft: -15,
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'black',
                  }}
                  style={{backgroundColor: 'white'}}
                  title="Mô tả">
                  <View>
                    <Text style={{fontSize: 18}}>{details.mota}</Text>
                  </View>
                </List.Accordion>
              </List.Section>

              {/* Đánh giá */}
              <List.Section>
                <List.Accordion
                  titleStyle={{
                    marginLeft: -15,
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'black',
                  }}
                  style={{backgroundColor: 'white'}}
                  title="Đánh giá">
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18}}>Nhận xét</Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('StarRating', {
                          product_id: id,
                        });
                      }}>
                      <Text>Tất cả</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Ngôi sao dưới nhận  xét */}
                  <View style={styles.rate}>
                    <StarRating
                      rating={4}
                      reviews={88}
                      fullStarColor={'orange'}
                      starSize={13}></StarRating>
                    <Text style={{left: 4, fontSize: 13, color: 'red'}}>
                      {NumRating}/5
                    </Text>
                    <Text style={styles.score}>
                      ({totalReviewOfProduct} đánh giá)
                    </Text>
                  </View>

                  {/* Bình luận user*/}
                  <FlatList
                    data={dataReviewOfProduct}
                    keyExtractor={item => item.id}
                    renderItem={renderItemComment}
                  />
                </List.Accordion>
              </List.Section>

              {/* Sản phẩm đề xuất   */}

              <Text style={styles.mota}>Sản phẩm có thể bạn quan tâm</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={products}
                horizontal
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <SearchHangDau item={item} navigation={navigation} />
                )}
              />
            </View>
          </Animated.ScrollView>
        </TriggeringView>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            onLikePressed();
            UpdateFavorite();
          }}>
          <View style={[styles.btnContainer, {marginRight: 10}]}>
            {isFavorite ? (
              <AntIcon name="heart" size={25} color={'red'} />
            ) : (
              <AntIcon name="hearto" size={25} color={'#fff'} />
            )}
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={[styles.btnContainer, {flex: 1}]}
          onPress={updateData}>
          <Text style={styles.btnText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //Header
  wrapper: {
    height: 300,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    height: 300,
    width: width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },

  //Body
  detailsContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.black,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  priceText: {
    fontSize: 28,
    color: 'red',
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 2,
  },
  contentship: {
    backgroundColor: '#fff',
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    flex: 1,
  },
  flashing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },

  colorContainer: {
    flexDirection: 'row',
    top: 2,
  },
  sizesContainer: {
    flexDirection: 'row',
    marginLeft: 80,
    top: 2,
  },
  score: {
    fontSize: 13,
    marginLeft: 20,
  },
  mota: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
  //Footer

  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  btnContainer: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8D6E63',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },

  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  paginationText: {
    color: 'orange',
    fontSize: 28,
  },

  // Style bình luận
  container1: {
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  bodyContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image_user: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 2,
  },
});

export default ProductDetailsScreen;
