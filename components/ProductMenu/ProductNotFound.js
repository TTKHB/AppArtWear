import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
const {width, height} = Dimensions.get('window');

const ProductNotFound = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        resizeMode="contain"
        style={{
          width: width / 2 + 50,
          height: width / 2 + 50,
          marginTop: -width / 2,
        }}
        source={{
          uri: 'https://res.cloudinary.com/uploadartwear/image/upload/v1637932798/assets/Product_Not_Found_ifg1xn.png',
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: width / 24,
        }}>
        Không tìm thấy kết quả tìm kiếm sản phẩm
      </Text>
    </View>
  );
};

export default ProductNotFound;
