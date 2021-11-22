import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const ItemSize = ({item}) => {
  console.log('🚀 ~ file: ItemColor.js ~ line 7 ~ ItemColor ~ item', item);
  const [checked, setChecked] = useState(false);

  const changeChecked = () => {
    setChecked(!checked);
    item.checked = !checked;
  };

  return (
    <TouchableOpacity onPress={changeChecked}>
      <View
        style={{
          backgroundColor: 'white',
          borderColor: checked ? 'brown' : 'grey',
          padding: 10,
          margin: 4,
          borderWidth: checked ? 1 : 0.4,
          width: width / 4,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15}}> {item.size}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemSize;
