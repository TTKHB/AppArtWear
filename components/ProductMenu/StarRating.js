import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import COLORS from '../../assets/data/colors';
import Comment from './Comment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconBack from 'react-native-vector-icons/Ionicons';
import IconCart from 'react-native-vector-icons/SimpleLineIcons';
import IconSearch from 'react-native-vector-icons/Ionicons';
// đánh giá
const PercentageBar = ({starText, percentage}) => {
  const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: percentage,
      duration: 500,
    }).start();
  }, [percentage]);




  //thanh năng lượng đánh giá (%)
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Text style={styles.progressText}>{starText}</Text>
      <View style={styles.progressMiddle}>
        <View style={styles.progressWrap}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>
      </View>
      <Text style={styles.progressPercentText}>{percentage}%</Text>
    </View>
  );
};

export default function StarRating(item) {
  return (
  
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        <IconBack
          name="chevron-back"
          size={28}
          onPress={() => navigation.goBack()}
        />
       
        <Text style={{fontSize: 20, fontWeight: 'bold',marginLeft: -35}}>Đánh giá</Text>
        <IconCart name="handbag" size={28} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.reviewContainer}>
          <View style={styles.totalWrap}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{left: -60, fontSize: 30, fontWeight: 'bold'}}>
                4.7/{' '}
              </Text>
              <Text style={{left: -60, top: 15, fontSize: 15}}>5</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  top: 10,
                  left: 72,
                }}>
                  <Icon name="star" color="orange" size={25} />
                  <Icon name="star" color="orange" size={25} />
                  <Icon name="star" color="orange" size={25} />
                  <Icon name="star" color="orange" size={25} />
                  <Icon name="star" color="orange" size={25} />
                </View>
            </View>
          </View>
          <Text style={styles.amountText}> 40 đánh giá </Text>

          
          {/* //thanh năng lượng đánh giá (%) */}
          <View style={{marginTop: 40, width: 280, left: 68}}>
            <View style={styles.spacer}>
              {/* Ống năng lượng đánh giá từ 1 -> 100% */}
              <PercentageBar starText="5" percentage={84} />
            </View>
            <View style={styles.spacer}>
              <PercentageBar starText="4" percentage={9} />
            </View>
            <View style={styles.spacer}>
              <PercentageBar starText="3" percentage={4} />
            </View>
            <View style={styles.spacer}>
              <PercentageBar starText="2  " percentage={50} />
            </View>
            <View style={styles.spacer}>
              <PercentageBar starText="1 " percentage={1} />
            </View>
          </View>
          <Text style={{left: 25, fontSize: 15, fontWeight: 'bold'}}>
            Bình luận
          </Text>
          {/* Người dùng bình luận */}
          <Comment />
        </View>
        </ScrollView>
      </View>

   

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    margin: 10,
  },
  totalWrap: {
    marginTop: 30,
    marginBottom: 5,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 100,
    paddingVertical: 10,
  },
  amountText: {
    fontSize: 16,
    color: '#595B71',
    left: 30,
  },
  howWeCalculate: {
    fontSize: 15,
    color: '#2A5BDA',
    textAlign: 'center',
  },
  spacer: {
    marginBottom: 14,
  },
  progressText: {
    width: 10,
    fontSize: 14,
    color: 'black',
  },
  progressPercentText: {width: 40, fontSize: 14, color: '#323357'},
  progressMiddle: {
    height: 15,
    flex: 1,
    marginHorizontal: 5,
  },
  progressWrap: {
    backgroundColor: COLORS.grey,
    position: 'absolute',
    top: 5,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 0.5,
  },
  progressBar: {
    flex: 1,
    shadowOffset: {width: 100, height: 1},
    backgroundColor: '#cd853f',
  },

  //
  categoriesListContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    marginLeft: 9,
  },
  categoryBtn: {
    height: 35,
    width: 73,
    alignItems: 'center',
    marginRight: 4,
    backgroundColor: '#F5F5F5',
    borderRadius: 3,
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 2,
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
