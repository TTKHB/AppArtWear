import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LoaderHot from '../../components/Home/Loader/LoaderHot';
import Swiper from 'react-native-swiper';
import {dataPost} from '../../assets/data/Hot/DataNews';
import {Tooltip} from 'react-native-elements';
import useHots from './../../hooks/Hot/useHots';
const {width} = Dimensions.get ('window');
import {useFocusEffect} from '@react-navigation/native';
import useLikeHots from '../../hooks/Hot/useLikeHots';
import {useLogin} from '../../Context/LoginProvider';
import useUserLiked from './../../hooks/Hot/useUserLiked';
import TimeAgo from 'javascript-time-ago';
import vi from 'javascript-time-ago/locale/vi.json';
export const galaxy = require ('../../assets/images/galaxy.jpg');
export const cr7 = require ('../../assets/images/Cr7.jpg');
TimeAgo.addLocale (vi);
export const timeAgo = new TimeAgo ('vi-VN');
export const add = require ('../../assets/images/postt.jpg');

const Post = ({item, item: likeCountProp, navigation}) => {
  timeAgo.getLabels ('narrow');
  const {isLoggedIn, profile} = useLogin ();
  console.log ('🚀 ~ file: HotScreen.js ~ line 34 ~ Post ~ profile', profile);
  const {numberOfLike, addLike, removelike, checkLikeByUserId} = useLikeHots (
    item._id
  );

  const {isUserLiked} = useUserLiked (item._id, profile._id);
  const [isLike, setIsLike] = useState (isUserLiked ? isUserLiked : null);
  const [likeCount, setLikeCount] = useState (0);

  const onLikePressed = () => {
    if (isLike != null && profile._id) {
      const amount = isLike ? -1 : 1;
      setLikeCount (likeCount + amount);
      setIsLike (!isLike);

      if (amount == 1) {
        addLike (profile ? profile._id : '', item._id);
      } else {
        removelike (profile ? profile._id : '', item._id);
      }
    }
  };

  useEffect (
    () => {
      setIsLike (isUserLiked);
      return () => {
        setIsLike (false);
      };
    },
    [isUserLiked]
  );

  // //fill liked of user

  useEffect (
    () => {
      setLikeCount (numberOfLike);
      return () => {
        setLikeCount (0);
      };
    },
    [numberOfLike]
  );

  // const timeAgo = new TimeAgo('vi-VN');

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.containerHeader}>
        <View style={styles.letfHeader}>
          <View style={styles.containerImageHeader}>
            <Image
              source={{uri: item.user_id ? item.user_id.avatar : null}}
              style={styles.imageHeader}
            />
          </View>
          <View style={{flexDirection: 'column', marginTop: 10}}>
            <Text style={styles.nameHeader}>
              {item.user_id ? item.user_id.fullname : null}
              {'\t'}
              <Ionicons
                name="md-checkmark-circle-sharp"
                size={20}
                color={'#66CCFF'}
              />
            </Text>
            <Text>{timeAgo.format (new Date (item.dateCreated))}</Text>
          </View>
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity style={styles.headerFollow}>
            <Text style={styles.headerFollowText}>Theo dõi</Text>
          </TouchableOpacity>
          <Icon name="dots-three-vertical" size={16} />
        </View>
      </View>

      {/* <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: item.imageUri }} style={styles.imageBody} />
      </View> */}
      <View style={{marginLeft: 10, marginVertical: 10}}>
        <Text>{item.content}</Text>
      </View>
      <Swiper style={styles.wrapper} loop={true}>
        {item.images.length > 0
          ? item.images.map ((image, i) => (
              <View key={i} style={styles.slide}>
                <Image
                  style={styles.image}
                  resizeMode={'stretch'}
                  source={{
                    uri: image,
                  }}
                />
              </View>
            ))
          : null}
      </Swiper>

      <View style={styles.containerFooter}>
        <View style={styles.iconContainerFooter}>
          <View style={styles.leftIconsFooter}>
            <TouchableWithoutFeedback onPress={onLikePressed}>
              {isLike
                ? <AntIcon name="heart" size={25} color={'#c30000'} />
                : <AntIcon name="hearto" size={25} color={'#545454'} />}
            </TouchableWithoutFeedback>
            <Text style={styles.likeFooter}>{likeCount}</Text>
            <TouchableOpacity
              onPress={() => {
                if (profile._id) {
                  navigation.navigate ('Comment', {hot_id: item._id});
                }
              }}
            >
              <FontistoIcon name="comment" size={23} color={'#545454'} />
            </TouchableOpacity>
            <Text style={styles.likeFooter}>4</Text>
          </View>
          <View style={styles.rightIconsFooter}>
            <FontAwesome name="bookmark-o" size={25} color={'#545454'} />
            <FontAwesome5 name="share" size={25} color={'#c0c0c0'} />
          </View>
        </View>
        {/* <Text style={styles.likeFooter}>{likeCount} Likes</Text> */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* <Text style={styles.captionFooter}>{item.caption}</Text>
          <Text style={styles.postedAtFooter}>{item.postedAt}</Text> */}
        </View>
      </View>
    </View>
  );
};

const HotScreen = ({navigation}) => {
  const {hots, getAllHots} = useHots ();
  const [hotsFiltered, setHotsFiltered] = useState ([]);
  const [loading, setLoading] = useState (false);
  const onRefresh = React.useCallback (() => {
    getAllHots ();
    setRefreshing (false);
  }, []);
  const [refreshing, setRefreshing] = useState (false);

  useFocusEffect (
    useCallback (
      () => {
        setLoading (true);
        setHotsFiltered (hots);
        setLoading (false);

        return () => {
          setHotsFiltered ([]);
          setLoading (false);
        };
      },
      [hots]
    )
  );
  useFocusEffect (
    useCallback (() => {
      getAllHots ();
    }, [])
  );

  return (
    <SafeAreaView>
      {loading
        ? <LoaderHot />
        : <ScrollView
       
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View>
              <View
                style={{width: '100%', height: 350, backgroundColor: 'pink'}}
              >
                <View style={{width: '100%', height: '65%'}}>
                  <Image
                    source={galaxy}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'stretch',
                    }}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '35%',
                    backgroundColor: 'white',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={cr7}
                    style={{
                      width: 180,
                      height: 180,
                      borderRadius: 180,
                      marginTop: '-25%',
                      borderWidth: 7,
                      borderColor: 'white',
                    }}
                  />
                  <Text style={{fontSize: 25, fontWeight: '700'}}>
                    Cristiano Ronaldo
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 60,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate ('PostScreen')}
                  style={{
                    width: '95%',
                    height: '65%',
                    backgroundColor: 'blue',
                    borderRadius: 7,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: 'white'}}
                  >
                    Thêm bảng tin
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 40,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                }}
              >
                <Text style={{fontSize: 25, fontWeight: '800', marginLeft: 10}}>
                  Bài viết
                </Text>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
              <FlatList
                data={hotsFiltered}
                keyExtractor={({id}) => id}
                renderItem={({item}) => (
                  <Post item={item} navigation={navigation} />
                )}
              />
              </ScrollView>
            </View>
          </ScrollView>}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create ({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  letfHeader: {
    flexDirection: 'row',
  },
  rightHeader: {
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerFollow: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3DB2FF',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  headerFollowText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  nameHeader: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: '#3c3c3c',
    fontSize: 18,
    marginVertical: 5,
  },
  nameHeaderTime: {
    // alignSelf: 'center',
    fontWeight: '500',
    color: '#808080',
    fontSize: 13,
  },

  imageBody: {
    width: Dimensions.get ('window').width / 1.06,
    height: Dimensions.get ('window').height / 1.8,
    marginHorizontal: 50,
    borderRadius: 10,
  },

  containerFooter: {
    backgroundColor: '#fff',
    margin: 5,
  },
  iconContainerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },

  leftIconsFooter: {
    flexDirection: 'row',
    width: 120,
    padding: 5,
    justifyContent: 'space-between',
  },
  rightIconsFooter: {
    flexDirection: 'row',
    width: 80,
    // padding: 5,
    justifyContent: 'space-around',
  },

  likeFooter: {
    fontWeight: 'bold',
    margin: 3,
    fontSize: 14,
  },
  captionFooter: {
    margin: 3,
    fontSize: 18,
  },
  postedAtFooter: {
    color: '#8c8c8c',
    margin: 3,
    marginBottom: 15,
    fontSize: 18,
  },
  containerImageHeader: {
    margin: 10,
    borderRadius: 40,
    borderWidth: 3,
    // borderColor: "#dbb98f",
    borderColor: '#000000',
    height: 46,
    width: 46,
  },
  imageHeader: {
    borderRadius: 40,
    // borderWidth: 1,
    // borderColor: "#ffffff",
    height: 40,
    width: 40,
  },

  wrapper: {
    height: Dimensions.get ('window').height / 3,
    backgroundColor: 'white',
  },
  slide: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: Dimensions.get ('window').width / 1.06,
    height: Dimensions.get ('window').height / 3,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1,
  },
  image: {
    width: Dimensions.get ('window').width / 1.06,
    flex: 1,
    marginHorizontal: 12,
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 14,
  },
  paginationText: {
    color: '#FF6699',
    fontSize: 20,
  },
});
export default HotScreen;
