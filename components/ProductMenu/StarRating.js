import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import COLORS from '../../assets/data/colors';
import Comment from './Comment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoaderStarRating from '../../components/Home/Loader/LoaderStarRating';

import {Rating, AirbnbRating} from 'react-native-elements';
import useReviewByProductId from './../../hooks/Reviews/useReviewByProductId';
import useReviewStatistic from './../../hooks/Reviews/useReviewStatistic';
import {rate, average} from 'average-rating';

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

const StarRating = ({navigation, route}) => {
  const {product_id} = route.params;
  const {reviewsOfProduct} = useReviewByProductId(product_id);
  const {reviewsStatistics} = useReviewStatistic(product_id);
  const [rating, setRating] = useState(0);
  console.log(
    '🚀 ~ file: StarRating.js ~ line 62 ~ StarRating ~ rating',
    rating,
  );

  // const [countOneStar, setcountOneStar] = useState('');
  // const [countTwoStar, setcountTwoStar] = useState('');
  // const [countThreeStar, setcountThreeStar] = useState('');
  // const [countFourStar, setcountFourStar] = useState('');
  // const [countFiveStar, setcountFiveStar] = useState('');

  let totalReviews = 0;
  let countOneStar = 0;
  let countTwoStar = 0;
  let countThreeStar = 0;
  let countFourStar = 0;
  let countFiveStar = 0;
  let NumRating = 0;

  //handle count star 1->5
  if (typeof reviewsStatistics !== 'undefined') {
    console.log(
      '🚀 ~ file: StarRating.js ~ line 77 ~ StarRating ~ reviewsStatistics',
      reviewsStatistics,
    );
    totalReviews = reviewsOfProduct.length;
    if (totalReviews != 0) {
      countOneStar = Math.round(
        (reviewsStatistics.NumStar1 / totalReviews) * 100,
      );
      countTwoStar = Math.round(
        (reviewsStatistics.NumStar2 / totalReviews) * 100,
      );
      countThreeStar = Math.round(
        (reviewsStatistics.NumStar3 / totalReviews) * 100,
      );
      countFourStar = Math.round(
        (reviewsStatistics.NumStar4 / totalReviews) * 100,
      );
      countFiveStar = Math.round(
        (reviewsStatistics.NumStar5 / totalReviews) * 100,
      );
      const rating = [
        countOneStar,
        countTwoStar,
        countThreeStar,
        countFourStar,
        countFiveStar,
      ];
      NumRating = average(rating);
    }
  }

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  });
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <LoaderStarRating />
        ) : (
          <View style={styles.container}>
            <View style={styles.reviewContainer}>
              <View style={styles.totalWrap}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text style={{left: -80, fontSize: 30, fontWeight: 'bold'}}>
                    {NumRating}/{' '}
                  </Text>
                  <Text style={{left: -75, top: 15, fontSize: 15}}>5</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      top: 10,
                      left: 82,
                    }}>
                    <Rating
                      imageSize={30}
                      readonly
                      fractions={1}
                      startingValue={NumRating}
                    />
                    {/* <Icon name="star" color="orange" size={25} />
                    <Icon name="star" color="orange" size={25} />
                    <Icon name="star" color="orange" size={25} />
                    <Icon name="star" color="orange" size={25} />
                    <Icon name="star" color="orange" size={25} /> */}
                  </View>
                </View>
              </View>
              <Text style={styles.amountText}>{totalReviews} đánh giá </Text>

              {/* //thanh năng lượng đánh giá (%) */}
              <View style={{marginTop: 40, width: 280, left: 68}}>
                <View style={styles.spacer}>
                  {/* Ống năng lượng đánh giá từ 1 -> 100% */}
                  <PercentageBar starText="5" percentage={countFiveStar} />
                </View>
                <View style={styles.spacer}>
                  <PercentageBar starText="4" percentage={countFourStar} />
                </View>
                <View style={styles.spacer}>
                  <PercentageBar starText="3" percentage={countThreeStar} />
                </View>
                <View style={styles.spacer}>
                  <PercentageBar starText="2  " percentage={countTwoStar} />
                </View>
                <View style={styles.spacer}>
                  <PercentageBar starText="1 " percentage={countOneStar} />
                </View>
              </View>

              <Text style={{left: 20, fontSize: 15, fontWeight: 'bold'}}>
                Bình luận
              </Text>
              {/* Người dùng bình luận */}
              <Comment reviews={reviewsOfProduct} />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
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
    left: 20,
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
export default StarRating;
