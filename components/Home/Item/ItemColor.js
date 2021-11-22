import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const ItemColor = ({item}) => {
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="ellipse" type="ionicon" color={item.color} />
          <Text style={{fontSize: 15}}> {item.color}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemColor;
