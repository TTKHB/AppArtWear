import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import COLORS from '../../assets/data/colors';
import categories from '../../assets/data/categories';


// thể loại
const Category = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    horizontal>
      <View style={styles.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            {/* Button */}
            <View
              style={styles.categoryBtn}>
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{ height: 32, width: 32, resizeMode: 'cover' }}
                />
              </View>
              {/* chữ */}
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color: COLORS.black
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  categoriesListContainer: {
    paddingVertical: 5,
    flexDirection: 'row'
  },
  categoryBtn: {
    height: 45,
    width: 130,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 0.3,
    justifyContent: 'center'
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default Category;