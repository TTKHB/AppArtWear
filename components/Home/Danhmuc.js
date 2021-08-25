import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import COLORS from '../../assets/data/colors';
const Danhmuc = () => {
  return (
    <ScrollView>
      <View style={styles.flashing}>
        <Text style={styles.flashingTitle}>Danh mục</Text>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-restaurant" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Quần</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
        >
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={35}
              color="#000"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Áo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="food" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Giày</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Fontisto name="hotel" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Túi xách</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Ionicons name="md-restaurant" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Áo khoác</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="expand-more" size={35} color="#000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Nón</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: COLORS.grey /*  */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: COLORS.black,
  },
  flashingTitle: {
    fontSize: 20,
    color: COLORS.red,
  },
});
export default Danhmuc;
