import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {datauser} from '../../assets/data/ItemUserComment';
import Star from '../../components/ProductMenu/Star';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoaderComment from '../../components/Home/Loader/LoaderComment';
import {formatDate} from '../../utils/Methods';

const listTab = [
  {
    name: <Icon name="star" color="orange" size={20} />,
    status: 0,
  },
  {
    name: <Icon name="star" color="orange" size={20} />,
    status: 5,
  },
  {
    name: <Icon name="star" color="orange" size={20} />,
    status: 4,
  },
  {
    name: <Icon name="star" color="orange" size={20} />,
    status: 3,
  },
  {
    name: <Icon name="star" color="orange" size={20} />,
    status: 2,
  },
  ,
  {
    name: <Icon name="star" color="orange" size={20} />,
    status: 1,
  },
];

const Comment = ({reviews}) => {
  const [reviewsFilter, setReviewsFilter] = useState([]);
  console.log(
    '🚀 ~ file: Comment.js ~ line 43 ~ Comment ~ reviewsFilter',
    reviewsFilter,
  );
  const [loading, setLoading] = useState(true);

  //fetch list reivews
  useEffect(() => {
    if (reviews) {
      setReviewsFilter(reviews);
    }
  }, [reviews]);

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, []);

  const [datalist, setDataList] = useState(datauser);
  const [status, setStatus] = useState(0);
  const setStatusFilter = status => {
    setStatus(status);
  };

  useEffect(() => {
    if (reviews) {
      console.log('status', status);

      // => 0 -> all
      if (status == 0) {
        setReviewsFilter(reviews);
      } else {
        const reviewFilter = reviews.filter(
          review => review.RatingValue == status,
        );
        setReviewsFilter(reviewFilter);
      }
    }
  }, [status]);

  const renderItemComment = ({item, index}) => {
    console.log(
      '🚀 ~ file: Comment.js ~ line 91 ~ renderItemComment ~ item',
      item,
    );
    if (item.UserId) {
      return (
        <View style={styles.container1}>
          <Image
            style={styles.image}
            source={{
              uri: item.UserId
                ? item.UserId.avatar
                : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg',
            }}
          />
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <Text style={styles.name}>{item.UserId.fullname}</Text>
              <Text style={styles.time}>{formatDate(item.DateCreated)}</Text>
            </View>
            <View style={styles.rate}>
              <Star ratings={item.RatingValue} reviews={15} />
            </View>
            <Text>{item.Review}</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <LoaderComment />
      ) : (
        <ScrollView>
          <ScrollView horizontal={true}>
            <View style={styles.listTab}>
              {listTab.map(e => (
                <TouchableOpacity
                  style={[
                    styles.btnTab,
                    status === e.status && styles.btnTabActive,
                  ]}
                  onPress={() => setStatusFilter(e.status)}>
                  <Text
                    style={[
                      styles.text,
                      status === e.status && styles.textTabActive,
                    ]}>
                    {e.status == 0 ? 'Tất cả' : e.status}
                  </Text>
                  <View>
                    <Text
                      style={[
                        styles.textname,
                        status === e.status && styles.textTabActive,
                      ]}>
                      {e.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={reviewsFilter}
              keyExtractor={item => item.id}
              renderItem={renderItemComment}
            />
          </ScrollView>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTab: {
    width: Dimensions.get('window').width / 5.7,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'grey',
    alignItems: 'center',
    backgroundColor: '#ffefd5',
    marginLeft: 2,
    justifyContent: 'center',
    borderRadius: 2,
  },
  textname: {
    color: 'black',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  btnTabActive: {
    backgroundColor: '#E6838D',
  },
  textTabActive: {
    color: '#fff',
  },
  container1: {
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  bodyContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 2,
  },
});
export default Comment;
