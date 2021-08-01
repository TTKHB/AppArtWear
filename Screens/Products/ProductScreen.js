import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ProductScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('gggScreen')}>
      <Text>ContainerProduct</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;
