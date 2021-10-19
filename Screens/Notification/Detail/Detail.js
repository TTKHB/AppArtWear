import React from 'react';
import {
  StyleSheet, Text, View,Image,SafeAreaView, ScrollView, TouchableOpacity,FlatList,
} from 'react-native';
import {Dimensions} from 'react-native';
export const width = Dimensions.get ('window').width;
export const height = Dimensions.get ('window').height;
export const Back = require ('../../../assets/img/back.png');
export const Banner8 = require ('../../../assets/img/banner10.jpg');
export const Banner12 = require ('../../../assets/img/banner12.jpg');
export const Banner6 = require ('../../../assets/img/banner6.jpg');
export const huyen = require ('../../../assets/img/huyen.jpg');
export const Banner7 = require ('../../../assets/img/banner9.jpg');
export const watch = require ('../../../assets/img/36.webp');
export const nam = require ('../../../assets/img/nam.webp');
export const nu = require ('../../../assets/img/nu.webp');
export const more = require ('../../../assets/img/xemthem.webp');
const Theme = [
  {
    image: nam,
    id: 1,
    title: 'Thời trang nam',
  },
  {
    image: nu,
    id: 2,
    title: 'Thời trang nữ',
  },
  {
    image: watch,
    id: 3,
    title: 'Đồng hồ',
  },
  {
    image: more,
    id: 4,
    title: 'Xem thêm',
  },
];
const Lists = [
  {
    id: 1,
    image: more,
    price: '300',
  },
  {
    id: 2,
    image: more,
    price: '300',
  },
  {
    id: 3,
    image: more,
    price: '300',
  },
  {
    id: 4,
    image: more,
    price: '300',
  },
  {
    id: 5,
    image: more,
    price: '300',
  },
  {
    id: 6,
    image: more,
    price: '300',
  },
];

const Detail = ({navigation, route}) => {
  const {item} = route.params;
  console.log ('abcsd:', item);
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      {/* header----------------------------------------------------------- */}
      <View style={Styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack ()} style={Styles.TouHeader}>
          <Image source={Back} style={Styles.ImageHeader} />
        </TouchableOpacity>
        <View style={Styles.ViewText}>
          <Text style={Styles.TextHeader}>ArtWear</Text>
        </View>
        <View style={Styles.TouHeader}/>
      </View>
      {/* body--------------------------------------------------------------- */}
      <SafeAreaView>
        <ScrollView>
          <View>
            <Image
              source={item.Image}
              style={{width: '100%', height: 200, resizeMode: 'stretch'}}
            />
          </View>
          {/* Mua theo thể loại ---------------------------------------------- */}
          <View>
            <Text style={Styles.TextBanner1}>
              Mua theo thể loại
            </Text>
            <FlatList
              data={Theme}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <View
                    style={Styles.Theloai}
                  >
                    <TouchableOpacity style={Styles.ButtonTheme}>
                      <View style={{width: '20%', alignItems: 'center'}}>
                        <Image style={Styles.IconTheme} source={item.image} />
                      </View>
                      <Text style={Styles.TextTheme}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
          {/* Banner--------------------------------------------------------------- */}
          <Text style={Styles.TextBanner}>#ARTWEARcampaings</Text>
          <TouchableOpacity style={Styles.ViewBanner}>
            <Image style={Styles.Imagebanner} source={Banner7} />
          </TouchableOpacity>
          <Text style={Styles.TextBanner}>Brands</Text>
          <TouchableOpacity style={Styles.ViewBanner}>
            <Image style={Styles.Imagebanner} source={Banner6} />
          </TouchableOpacity>

          <Text style={Styles.TextBanner}>#dailydrops</Text>
          <TouchableOpacity style={Styles.ViewBanner}>
            <Image style={Styles.Imagebanner} source={Banner8} />
          </TouchableOpacity>

          <Text style={Styles.TextBanner}>#ARTWEARsale</Text>
          <TouchableOpacity style={Styles.ViewBanner}>
            <Image style={Styles.Imagebanner} source={Banner12} />
          </TouchableOpacity>

          <View style={{marginBottom: 80}}>
            <Text style={Styles.TextBanner}>Sản phẩm liên quan</Text>
            <FlatList
              data={Lists}
              keyExtractor={item => item.id}
              numColumns={3}
              renderItem={({item}) => {
                return (
                  <View style={Styles.ViewProduct}>
                    <TouchableOpacity style={Styles. Tou12}>
                      <Image  style={{
                          width: '100%',
                          height: '80%',
                          resizeMode: 'stretch',
                        }}
                        source={huyen}
                      />
                      <Text style={{fontSize: 18, marginTop: 5, fontWeight: 'bold'}}>
                        {item.price}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Detail;

export const Styles = StyleSheet.create ({
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
  ViewText: {alignItems: 'center', justifyContent: 'center', width: '80%'},
  //----------------------------------------------
  Body: {
    width: '100%',
    height: '92%',
  },
  Imagebanner: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
    marginTop: 10,
  },
  ViewBanner: {
    alignItems: 'center',
    marginTop: 2,
  },
  TextBanner: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
  },
  TextBanner1: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 23,
  },
  IconTheme: {
    width: 30,
    height: 30,
  },
  ButtonTheme: {
    width: '93%',
    backgroundColor: '#FDE8CD',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextTheme: {
    fontSize: 19,
    width: '80%',
    marginLeft: 10,
  },
  ViewProduct: {
    width: 100,
    height: 150,
    width: width / 3,
    alignItems: 'center',
    marginTop: 20,
  },
  Theloai: {
    width: '100%',
    width: width / 2,
    alignItems: 'center',
    marginTop: 20,
  },
  Tou12: {
    width: 100,
    height: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 10,
    shadowRadius: 3.84,
    elevation: 10,
  }
});
