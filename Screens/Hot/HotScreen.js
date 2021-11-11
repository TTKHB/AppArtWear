import React, { useState, useEffect } from "react";
import { View, Dimensions, StyleSheet, Image, Text, TouchableWithoutFeedback, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LoaderHot from '../../components/Home/Loader/LoaderHot';
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: '#0099FF' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

const dataPost = [
  {
    id: '1',
    user: {
      imageUri: 'https://mfiles.alphacoders.com/640/640435.jpg',
      name: 'ArtWaer1'
    },
    imageUri: {
      image: 'https://mfiles.alphacoders.com/640/640435.jpg',
      image1: 'https://afamilycdn.com/150157425591193600/2021/9/28/2391844204307082782389062332922196710878383n-1632802457549309170777.jpg',
      image2: 'https://assets.vogue.com/photos/61461ca0a0a3f0de76c0ad29/master/w_1280%2Cc_limit/00001-KNWLS-Spring-22-RTW-London-credit-gorunway.jpg',
      image3: 'https://kenh14cdn.com/2019/10/1/b7-1569942053146857120959.jpg',
    },
    caption: 'Welcome to City #ArtWaer',
    likeCount: 10,
    postedAt: '6 min ago'
  }, {
    id: '2',
    user: {
      imageUri: 'https://afamilycdn.com/150157425591193600/2021/9/28/2391844204307082782389062332922196710878383n-1632802457549309170777.jpg',
      name: 'ArtWaer'
    },
    imageUri: {
      image: 'https://mfiles.alphacoders.com/640/640435.jpg',
      image1: 'https://afamilycdn.com/150157425591193600/2021/9/28/2391844204307082782389062332922196710878383n-1632802457549309170777.jpg',
      image2: 'https://assets.vogue.com/photos/61461ca0a0a3f0de76c0ad29/master/w_1280%2Cc_limit/00001-KNWLS-Spring-22-RTW-London-credit-gorunway.jpg',
      image3: 'https://kenh14cdn.com/2019/10/1/b7-1569942053146857120959.jpg',
    },
    caption: 'Fashion in the summer #ArtWaer',
    likeCount: 100,
    postedAt: '6 min ago'
  }, {
    id: '3',
    user: {
      imageUri: 'https://assets.vogue.com/photos/61461ca0a0a3f0de76c0ad29/master/w_1280%2Cc_limit/00001-KNWLS-Spring-22-RTW-London-credit-gorunway.jpg',
      name: 'ArtWaer'
    },
    imageUri: {
      image: 'https://mfiles.alphacoders.com/640/640435.jpg',
      image1: 'https://afamilycdn.com/150157425591193600/2021/9/28/2391844204307082782389062332922196710878383n-1632802457549309170777.jpg',
      image2: 'https://assets.vogue.com/photos/61461ca0a0a3f0de76c0ad29/master/w_1280%2Cc_limit/00001-KNWLS-Spring-22-RTW-London-credit-gorunway.jpg',
      image3: 'https://kenh14cdn.com/2019/10/1/b7-1569942053146857120959.jpg',
    },
    caption: 'Fashion in the summer #ArtWaer',
    likeCount: 13,
    postedAt: '6 min ago'
  }, {
    id: '4',
    user: {
      imageUri: 'https://kenh14cdn.com/2019/10/1/b7-1569942053146857120959.jpg',
      name: 'ArtWaer'
    },
    imageUri: {
      image: 'https://mfiles.alphacoders.com/640/640435.jpg',
      image1: 'https://afamilycdn.com/150157425591193600/2021/9/28/2391844204307082782389062332922196710878383n-1632802457549309170777.jpg',
      image2: 'https://assets.vogue.com/photos/61461ca0a0a3f0de76c0ad29/master/w_1280%2Cc_limit/00001-KNWLS-Spring-22-RTW-London-credit-gorunway.jpg',
      image3: 'https://kenh14cdn.com/2019/10/1/b7-1569942053146857120959.jpg',
    },
    caption: "Idol's fashion #ArtWaer",
    likeCount: 23,
    postedAt: '6 min ago'
  },
]

const Post = ({ item, item: likeCountProp, navigation }) => {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);


  const onLikePressed = () => {
    const amount = isLike ? -1 : 1;
    setLikeCount(likeCount + amount);
    setIsLike(!isLike);
  }

  useEffect(() => {
    setLikeCount()
  }, [])
  return (
    <View>
      <View style={styles.containerHeader}>
        <View style={styles.letfHeader}>
          <View style={styles.containerImageHeader} >
            <Image source={{ uri: item.user.imageUri }} style={styles.imageHeader} />
          </View>
          <Text style={styles.nameHeader}>{item.user.name}</Text>
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
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={true}
      >
        <View style={styles.slide}>
          <Image style={styles.image} source={{ uri: item.imageUri.image }} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={{ uri: item.imageUri.image1 }} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={{ uri: item.imageUri.image2 }} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={{ uri: item.imageUri.image3 }} />
        </View>
      </Swiper>

      <View style={styles.containerFooter}>
        <View style={styles.iconContainerFooter}>
          <View style={styles.leftIconsFooter}>
            <TouchableWithoutFeedback onPress={onLikePressed}>
              {isLike ?
                <AntIcon name="heart" size={25} color={"#c30000"} />
                : <AntIcon name="hearto" size={25} color={"#545454"} />
              }
            </TouchableWithoutFeedback>
            <TouchableOpacity onPress={() => navigation.navigate('Comment')} >
              <FontistoIcon name="comment" size={23} color={"#545454"} />
            </TouchableOpacity>
            <Ionicons name="paper-plane-outline" size={25} color={"#545454"} />
          </View>

          <FontAwesome name="bookmark-o" size={25} color={"#545454"} />
        </View>
        <Text style={styles.likeFooter}>{item.likeCount ? item.likeCount : likeCountProp} Likes</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.captionFooter}>{item.caption}</Text>
          <Text style={styles.postedAtFooter}>{item.postedAt}</Text>
        </View>

      </View>
    </View>
  )

}

const HotScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }
  )

  return (
    <SafeAreaView>
      {loading ? (
        <LoaderHot />
      ) : (

        <FlatList
          data={dataPost}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <Post item={item} navigation={navigation} />}
        />

      )}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  letfHeader: {
    flexDirection: 'row'
  },
  rightHeader: {
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerFollow: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#0099FF",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  headerFollowText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: 'bold'
  },
  nameHeader: {
    alignSelf: 'center',
    fontWeight: "bold",
    color: "#3c3c3c",
    fontSize: 18
  },

  imageBody: {
    width: Dimensions.get('window').width / 1.06,
    height: Dimensions.get('window').height / 1.8,
    marginHorizontal: 50,
    borderRadius: 10,
  },

  containerFooter: {
    backgroundColor: "#fff",
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
    justifyContent: 'space-between'
  },

  likeFooter: {
    fontWeight: 'bold',
    margin: 3,
    fontSize: 14
  },
  captionFooter: {
    margin: 3,
    fontSize: 18
  },
  postedAtFooter: {
    color: '#8c8c8c',
    margin: 3,
    marginBottom: 15,
    fontSize: 18
  },
  containerImageHeader: {
    margin: 10,
    borderRadius: 40,
    borderWidth: 3,
    // borderColor: "#dbb98f",
    borderColor: "#000000",
    height: 46,
    width: 46
  },
  imageHeader: {
    borderRadius: 40,
    // borderWidth: 1,
    // borderColor: "#ffffff",
    height: 40,
    width: 40
  },

  wrapper: {
    height: Dimensions.get('window').height / 1.8,
    backgroundColor: '#fff',
  },
  slide: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width / 1.06,
    height: Dimensions.get('window').height / 1.8,
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
    fontSize: 20
  }
});
export default HotScreen;
