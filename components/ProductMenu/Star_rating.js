import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Animated,ScrollView} from 'react-native';
import Star from '../../components/ProductMenu/Star';
import COLORS from '../../assets/data/colors';
import DropDownItem from "react-native-drop-down-item";
 import  Comment  from '../../components/ProductMenu/Comment';




 // đánh giá
const PercentageBar = ({starText, percentage}) => {
  const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: percentage,
      duration: 500,
    }).start();
  }, [percentage]);

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

export default function Star_rating(item) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        <Text style={styles.title}>ĐÁNH GIÁ</Text>
        <View style={styles.totalWrap}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{left: -60, fontSize: 30, fontWeight: 'bold'}}>
              4.7/{' '}
            </Text>
            <Text style={{left: -60, top: 15, fontSize: 15}}>5</Text>
            <View style={{left: 70}}>
              <Star />
            </View>
          </View>
        </View>
        <Text style={styles.amountText}> 40 đánh giá </Text>
        <View style={{marginTop: 40,width:280,left:68} }>
          <View style={styles.spacer}>
            {/* Ống năng lượng đánh giá từ 1 -> 100% */}
            <PercentageBar starText="5" percentage={84} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="4 " percentage={9} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="3 " percentage={4} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="2 " percentage={50} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="1 " percentage={1} />
          </View>
        </View>

       
                <Text style={{left:35,fontSize:15,fontWeight: 'bold'}}>Bình luận</Text>
            
            
             <Comment/>
  
 
      </View>
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },

  title: {
    top: 20,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: COLORS.black,
  },
  totalWrap: {
    marginTop: 30,
    marginBottom: 5,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft:100,
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
    width: 50,
    fontSize: 14,
    color: '#2A5BDA',
  },
  progressPercentText: {width: 40, fontSize: 14, color: '#323357'},
  progressMiddle: {
    height: 15,
    flex: 1,
    marginHorizontal: 5,
  },
  progressWrap: {
    backgroundColor:COLORS.grey,
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
});
