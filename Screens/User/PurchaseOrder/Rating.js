import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  FlatList,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const Back = require ('../../../assets/images/back.png');
export const Tim = require ('../../../assets/images/timtim.png');
export const tuyen = require ('../../../assets/images/ao7.jpg');

const Rating = () => {
  const [isEnabled, setIsEnabled] = useState (false);
  const toggleSwitch = () => setIsEnabled (previousState => !previousState);
  const [defaultRating, setdefaultRating] = useState (2);
  const [maxRating, setmaxRating] = useState ([1, 2, 3, 4, 5]);
  const starImgFilled =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  const CustomRatingBar = () => {
    return (
      <View style={Styles.Rating}>
        {maxRating.map ((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setdefaultRating (item)}
              key={item}
            >
              <Image
                style={Styles.ImageRating}
                source={
                  item <= defaultRating
                    ? {uri: starImgFilled}
                    : {uri: starImgCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View>
      {/* heder---------------------------------------------------------------- */}
      <View style={[Styles.Header, Styles.Shadow]}>
        <TouchableOpacity style={Styles.TouHeader}>
          <Image style={Styles.ImageHeader} source={Back} />
        </TouchableOpacity>
        <View
          style={{justifyContent: 'center', alignItems: 'center', width: '70%'}}
        >
          <Text style={Styles.Text}>
            Đánh giá sản phẩm
          </Text>
        </View>
        <TouchableOpacity style={Styles.TouHeader}>
          <Text style={Styles.Text}>chọn</Text>
        </TouchableOpacity>
      </View>
      {/* body------------------------------------------------------------------------- */}
      <View style={Styles.Body}>
        {/* View1------------------------------------------------------------- */}
        <View style={Styles.View1}>
          <Image style={Styles.ImageBody} source={Tim} />
          <Text style={Styles.TextBody}>
            Hãy nêu cảm nhận của bạn về sản phẩm!!
          </Text>
        </View>
        <View style={{borderWidth: 0.5, height: 410, width: '95%', alignSelf: 'center', marginTop: 10}}>
        {/* View2------------------------------------------------ */}
        <View style={Styles.View2}>
          <View style={{height: '100%', width: '25%'}}> 
          <Image
            style={{
              width: '100%',
              height: '100%',
              marginLeft: 10,
            }}
            source={tuyen}
          />
          </View>
          <View style={{height: '100%', width: '75%'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: '10%'}}>
              Áo đẹp Super Saiyan Blue
            </Text>
          <CustomRatingBar />
          </View>
        </View>
        
        {/* View3------------------------------------------------------- */}
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            height: 220,
            marginTop: 10,
          }}
        >
          <Text style={Styles.TextBody}>Ghi chú</Text>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Ghi đánh giá tại đây"
            numberOfLines={10}
            multiline={true}
            style={[Styles.TextIp]}
          />
        <TouchableOpacity style={{width: '95%', height: 30, backgroundColor: '#3DB2FF', borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: 5,alignSelf: 'center' }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Gửi</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={[Styles.View3]}>
          <View style={{width: '85%', height: 60}}>
            <Text style={{fontSize: 20, marginLeft: 7}}>
              Đánh giá ẩn danh
            </Text>
            <Text style={Styles.TextBody}>
              Tên tài khoản của bản sẽ không hiển thị
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Switch
              trackColor={{false: '#767577', true: 'blue'}}
              thumbColor={isEnabled ? 'yellow' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

        </View>
      </View>
    </View>
  );
};

export default Rating;
export const Styles = StyleSheet.create ({
  Header: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
  },
  Shadow: {
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  ImageHeader: {
    width: 20,
    height: 20,
  },
  Text: {
    fontSize: 20,
  },
  TouHeader: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //----------------------------------------------------
  Body: {
    width: '100%',
    height: '93%',
    backgroundColor: 'white',
  },
  View1: {
    width: '100%',
    height: 50,
    backgroundColor: '#FDF5CA',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  View2: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
  },
  View3: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'white',
  },
  ImageBody: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  TextBody: {
    fontSize: 16,
    marginLeft: 7,
  },
  Rating: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 7,
    marginLeft: -20
  },
  ImageRating: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginLeft: 10,
  },
  TextIp: {
    width: '95%',
    textAlignVertical: 'top',
    height: 200,
    backgroundColor: 'white',
    borderWidth: 0.3,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 7,
  },
});
