import React from 'react';
import { View,Text,FlatList,StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import COLORS from '../../assets/data/colors';
import categories from '../../assets/data/categories';


// thể loại
const Category = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <ScrollView
        horizontal
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            {/* Button */}
            <View
              style={style.categoryBtn}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
              </View>

            {/* chữ */}
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color: COLORS.black
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

const style = StyleSheet.create({
    categoriesListContainer: {
        paddingVertical: 5,
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      categoryBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        backgroundColor: COLORS.grey,
        borderRadius:5,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
      },
      categoryBtnImgCon: {
        height: 35,
        width: 35,
        // backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
})
export default Category;