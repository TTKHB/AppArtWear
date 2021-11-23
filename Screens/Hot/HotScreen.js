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
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoaderHot from '../../components/Home/Loader/LoaderHot';
import Swiper from 'react-native-swiper';
import {dataPost} from '../../assets/data/Hot/DataNews';
import {Tooltip} from 'react-native-elements';
import useHots from './../../hooks/Hot/useHots';
const {width} = Dimensions.get('window');
import {useFocusEffect} from '@react-navigation/native';
import useLikeHots from '../../hooks/Hot/useLikeHots';
import {useLogin} from '../../Context/LoginProvider';
import useUserLiked from './../../hooks/Hot/useUserLiked';


export const add = require('../../assets/images/postt.jpg');

const Post = ({item, item: likeCountProp, navigation}) => {
  console.log('🚀 ~ file: HotScreen.js ~ line 42 ~ Post ~ item', item);
  const {isLoggedIn, profile} = useLogin();
  const {numberOfLike, addLike, removelike, checkLikeByUserId} = useLikeHots(
    item._id,
  );

  const {isUserLiked} = useUserLiked(item._id, profile._id);
  const [isLike, setIsLike] = useState(isUserLiked ? isUserLiked : '');
  const [likeCount, setLikeCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLike ? -1 : 1;

    setLikeCount(likeCount + amount);
    setIsLike(!isLike);
    if (amount == 1) {
      addLike(profile ? profile._id : '', item._id);
    } else {
      removelike(profile ? profile._id : '', item._id);
    }
  };

  useEffect(() => {
    setIsLike(isUserLiked);
    return () => {
      setIsLike(false);
    };
  }, [isUserLiked]);

  // //fill liked of user

  useEffect(() => {
    setLikeCount(numberOfLike);
    return () => {
      setLikeCount(0);
    };
  }, [numberOfLike]);

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
          <Text style={styles.nameHeader}>
            {item.user_id ? item.user_id.fullname : null}
          </Text>
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity style={styles.headerFollow}>
            <Text style={styles.headerFollowText}>Theo dỗi</Text>
          </TouchableOpacity>
          <Icon name="dots-three-vertical" size={16} />
        </View>
      </View>

      {/* <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: item.imageUri }} style={styles.imageBody} />
      </View> */}
      <Swiper
        style={styles.wrapper}
        loop={true}>
        {item.images.map((image, i) => (
          <View key={i} style={styles.slide}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={{
                uri: image,
              }}
            />
          </View>
        ))}
      </Swiper>

      <View style={styles.containerFooter}>
        <View style={styles.iconContainerFooter}>
          <View style={styles.leftIconsFooter}>
            <TouchableWithoutFeedback onPress={onLikePressed}>
              {isLike ? (
                <AntIcon name="heart" size={25} color={'#c30000'} />
              ) : (
                <AntIcon name="hearto" size={25} color={'#545454'} />
              )}
            </TouchableWithoutFeedback>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Comment', {hot_id: item._id})
              }>
              <FontistoIcon name="comment" size={23} color={'#545454'} />
            </TouchableOpacity>
            <Ionicons name="paper-plane-outline" size={25} color={'#545454'} />
          </View>

          <FontAwesome name="bookmark-o" size={25} color={'#545454'} />
        </View>
        <Text style={styles.likeFooter}>{likeCount} Likes</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* <Text style={styles.captionFooter}>{item.caption}</Text>
          <Text style={styles.postedAtFooter}>{item.postedAt}</Text> */}
        </View>
      </View>
    </View>
  );
};

const HotScreen = ({navigation}) => {
  const {hots} = useHots();
  const [hotsFiltered, setHotsFiltered] = useState([]);
  console.log(
    '🚀 ~ file: HotScreen.js ~ line 142 ~ HotScreen ~ hotsFiltered',
    hotsFiltered,
  );
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      setHotsFiltered(hots);
      setLoading(false);

      return () => {
        setHotsFiltered([]);
        setLoading(false);
      };
    }, [hots]),
  );

  return (
    <SafeAreaView>
      {loading ? (
        <LoaderHot />
      ) : (
        <View>
          <FlatList
            data={hotsFiltered}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <Post item={item} navigation={navigation} />
            )}
          />

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PostScreen')}
              style={{marginTop: '-20%', marginLeft: '80%'}}>
              <Image source={add} style={{width: 70, height: 70}} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#3c3c3c',
    fontSize: 18,
  },

  imageBody: {
    width: Dimensions.get('window').width / 1.06,
    height: Dimensions.get('window').height / 1.8,
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
    justifyContent: 'space-between',
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
    height: Dimensions.get('window').height / 3,
    backgroundColor: 'white',
  },
  slide: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 1.06,
    height: Dimensions.get('window').height / 3,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width / 1.06,
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 10,
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
