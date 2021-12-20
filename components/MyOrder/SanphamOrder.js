import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('window');
const SanphamOrder = ({ img, name, size, price, textAmount, mota }) => (
  <View style={styles.itemContainer}>
    {/* Custom Image */}
    <View style={{marginLeft:4}}>
      <Image
        source={img}
        style={styles.imageSP} />
    </View>
    {/* Column Item */}
    <View style={{ flexDirection: 'column' }}>
      {/* Name san pham */}
      <View>
        <Text
          style={[
            styles.itemTextName,
            {
              marginLeft: img ? 5 : 0
            }
          ]}
        >
          {name}
        </Text>
      </View>
      {/* Size san pham */}
      <View>
        <Text
          style={[
            styles.itemTextSize,
            {
              marginLeft: img ? 5 : 0,
              marginTop: name ? 2 : 0
            }
          ]}
        >
        Size {size}
        </Text>
      </View>
      {/* Mota san pham*/}
      <View style={{ width: width / 1.5 }}>
        <Text
          style={[
            styles.itemTextMoTa,
            {
              marginLeft: img ? 5 : 0,
              marginTop: name ? 2 : 0
            }]
          }
        >
          {mota}
        </Text>
      </View>
      {/* View row Price and Quantity*/}
      <View style={styles.viewItemRow}>
        {/* Price san pham*/}
        <View>
          <Text
            style={[
              styles.itemTextPrice,
              {
                marginLeft: img ? 5 : 0,
                marginTop: name ? 2 : 0
              }]}
          >
            {price} đ
          </Text>
        </View>
        {/* Quantity san pham*/}
        <View>
          <Text
            style={[
              styles.itemTextAmount,
              {
                marginLeft: img ? 5 : 0,
                marginTop: name ? 2 : 0
              }]}
          >
            x {textAmount}
          </Text>
        </View>
      </View>

    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  imageSP: {
    height: 105,
    width: 105,
    borderColor: '#8D6E63',
    borderWidth: 0.5,
  },
  itemTextName: {
    color: '#1e1e1e',
    fontSize: 16,
    marginTop: -5,
    fontWeight: 'bold'
  },
  itemTextSize: {
    color: 'black',
    fontSize: 16,
  },
  itemTextPrice: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemTextAmount: {
    color: '#1e1e1e',
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemTextMoTa: {
    color: '#1e1e1e',
    fontSize: 16,
    marginTop: -5,
  },

  viewItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 1.58
  }
})

export default SanphamOrder;