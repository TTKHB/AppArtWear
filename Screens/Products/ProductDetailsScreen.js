import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Animated from 'react-native-reanimated';
import SeacrchProduct from '../../components/Home/SeacrchProduct';
import DropDownItem from 'react-native-drop-down-item';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../assets/data/colors';
import { LogBox } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import baseURL from '../../assets/common/baseUrl';
import Star from '../../components/ProductMenu/Star';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import RoundedCheckbox from 'react-native-rounded-checkbox';
const { height, width } = Dimensions.get('window');
import StarRating from 'react-native-star-rating';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
import Swiper from 'react-native-swiper';
import Comment from '../../components/ProductMenu/Comment';
import { List } from 'react-native-paper';
import Ship from '../../components/Checkout/Ship';

//  detail
const ProductDetailsScreen = ({ route, navigation }) => {
  const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'black', fontSize: 20 }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    );
  };
  const item = route.params.a;

  console.log('gggggggg:', route.params.a);
  LogBox.ignoreAllLogs();
  Animated.timing(new Animated.Value(0), {
    toValue: 1,
    duration: 2500,
    useNativeDriver: true, // Add this line
  }).start();

  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

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
  return (
    <View style={[styles.container, { backgroundColor: COLORS.white }]}>
      {/* Header */}
      <ImageHeaderScrollView
        maxHeight={500}
        minHeight={MIN_HEIGHT}
        minOverlayOpacity={0}
        useNativeDriver={false}
        maxOverlayOpacity={0.1}

        renderForeground={() => (
          <Swiper
            style={styles.wrapper}
            renderPagination={renderPagination}
            loop={false}>
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
              }>
              <Image
                style={styles.image}
                // source={{uri:item.ThumbImg}}
                source={{ uri: item.ThumbImg ? item.ThumbImg : null }}
              />
            </View>
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
              }>
              <Image
                style={styles.image}
                // source={require('../../assets/images/Ao/AoThun/aothun2.png')}
                source={{
                  uri: 'https://shopgiayreplica.com/wp-content/uploads/2020/03/giay-nike-air-jordan-1-dior-replica.jpg'
                }}
              />
            </View>
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Why Stone split from Garfield</Text>
              }>
              <Image
                style={styles.image}
                // source={require('../../assets/images/Ao/AoThun/aothun3.png')}
                source={{ uri: 'https://fsport247.com/wp-content/uploads/2021/04/Giay-Jordan-1-Retro-Black-White-1.jpg' }}
              />
            </View>
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
              }>
              <Image
                style={styles.image}
                // source={require('../../assets/images/Ao/AoThun/aothun4.png')}
                source={{ uri: 'https://shopgiayreplica.com/wp-content/uploads/2019/02/nike-jordan-1-off-white-replica.jpg' }}
              />
            </View>
          </Swiper>
        )}>
        <View style={{ height: 1300 }}>
          <TriggeringView onHide={() => console.log('text hidden')}>
            <Animated.ScrollView style={{ alignSelf: 'stretch' }}>
              {/* Body */}
              <View style={styles.detailsContainer}>
                <Text style={styles.nameText}>{item.ten}</Text>
                <Text style={styles.priceText}>{item.gia} VNĐ</Text>

                {/* ngôi sao đánh giá sản phảm*/}
                <View style={styles.rate}>
                  <Star rating={4} reviews={10}></Star>
                </View>



                <View style={styles.content}>
                  {/*Chọn đơn vị giao hàng (ví dụ giao hàng tiết kiệm) */}
                  <Ship icon="truck-fast-outline"
                    iconship="truck-check-outline"
                    name="Giao hàng tiêu chuẩn"
                    nameship="Nhận hàng trong vòng 1 -> 3 ngày"
                    iconright="angle-right" />
                </View>
                <View style={styles.flashing}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Màu </Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, left: -5 }}>
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
                    <BouncyCheckbox
                      size={30}
                      unfillColor="red"
                      fillColor="red"></BouncyCheckbox>
                    <BouncyCheckbox
                      size={30}
                      unfillColor="black"
                      fillColor="black"></BouncyCheckbox>
                    <BouncyCheckbox
                      size={30}
                      unfillColor="yellow"
                      fillColor="yellow"></BouncyCheckbox>
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
                    style={{ backgroundColor: 'white' }}
                    title="Mô tả">
                    <View>
                      <Text style={{ fontSize: 18 }}>{item.mota}</Text>

                    </View>

                  </List.Accordion>
                </List.Section>


                {/* Đánh giá */}
                <List.Section >
                  <List.Accordion
                    titleStyle={{
                      marginLeft: -15,
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: 'black',
                    }}
                    style={{ backgroundColor: 'white' }}
                    title="Đánh giá">
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text style={{ fontSize: 18 }}>Nhận xét</Text>

                      <TouchableOpacity
                        onPress={() => navigation.navigate('StarRating')}>
                        <Text style={styles.flashingSubTitle}>Tất cả</Text>
                      </TouchableOpacity>
                    </View>

                    {/* Ngôi sao dưới nhận  xét */}
                    <View style={styles.rate}>
                      <StarRating
                        rating={4}
                        reviews={88}
                        fullStarColor={'orange'}
                        starSize={13}></StarRating>
                      <Text style={{ left: 4, fontSize: 13, color: 'red' }}>
                        4.7/5
                      </Text>
                      <Text style={styles.score}>(5 đánh giá)</Text>
                    </View>
                    {/* Bình luận user*/}
                    <Comment />
                  </List.Accordion>
                </List.Section>


                {/* Sản phẩm đề xuất   */}

                <Text style={styles.mota}>Sản phẩm có thể bạn quan tâm</Text>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={products}
                  horizontal
                  renderItem={({ item }) => (
                    <SeacrchProduct item={item} navigation={navigation} />
                  )}
                />
              </View>
            </Animated.ScrollView>
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>


      {/* Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={[
            styles.btnContainer,
            { marginRight: 10 },
          ]}>
          <Icon name="favorite" size={30} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnContainer,
            { flex: 1, },
          ]}>
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
  flashing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },
  header: {
    height: 80,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  badgeContainer: {
    top: -4,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: COLORS.white,
  },
  badgeText: {
    color: COLORS.black,
  },
  imgContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.black,
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
  sizeCircleContainer: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.black,
    fontWeight: 'bold',
    borderWidth: 0.2,
    backgroundColor: COLORS.white,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  priceText: {
    fontSize: 28,
    color: "red",
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 15,
    color: '#708090',
  },
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
    color: 'white'
  },
  mota: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
  image: {
    height: 500,
    width: width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },

  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width,
    flex: 1,
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
  score: {
    fontSize: 13,
    marginLeft: 20,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 2,
  },
  content: {
    backgroundColor: '#fff',
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    flex: 1,
  },
});

export default ProductDetailsScreen;
