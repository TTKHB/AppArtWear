import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NotifiScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Art Wear</Text>
          <FontAwesome
            name="paint-brush"
            size={25}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://c4.wallpaperflare.com/wallpaper/351/365/83/beautiful-sceneries-of-nature-hd-1920x1200-wallpaper-preview.jpg',
            }}
            style={styles.avatar}
          />
          <View style={styles.content}>
            <View style={styles.mainContent}>
              <View style={styles.text}>
                <Text style={styles.name}>Thông báo</Text>
                <Text>
                  Xin chào Aio! dưới đây là một hướng dẫn về cách có được thông
                  tin hữu ích, đạt được điểm và...
                </Text>
              </View>
              <Text style={styles.timeAgo}>18/04/2018</Text>
            </View>
            <Image
              style={styles.attachment}
              source={{
                uri: 'https://media.istockphoto.com/vectors/vector-illustration-giving-a-book-to-a-christmas-gift-vector-id1299041662?b=1&k=20&m=1299041662&s=170667a&w=0&h=kJqs_nVt-thOlvHM_9HdZ479sIovgmJi0u8WjSC182M=',
              }}
            />
          </View>
          <Icons style={styles.attachmentBack} name="right" size={22} />
        </View>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/proxy/3Efxh2S9bG3UafGTDsw0moZDW1ZZy_33QLoxuKA1xZQdLs8ajrmMUuYcsJKs9JKlSbg-X80d8P-USHTLHmdDqoAJEpyORR06sV1XbiOBJmooTdwBZPTwbCq6KW3g25a41nEYIb_mN4W2fYhwL9nazMSCy7SdhECQEE42h0d1YHed3HGJtmdWNtCwXZM',
            }}
            style={styles.avatarTitle}
          />
          <View style={styles.content}>
            <View style={styles.textTitle}>
              <Text style={styles.nameTitle}>Lượt thích mới</Text>
            </View>
          </View>
          <Icons style={styles.attachmentBack} name="right" size={22} />
        </View>
        <View style={styles.container}>
          <Image
            source={{uri: 'https://image.pngaaa.com/458/1963458-middle.png'}}
            style={styles.avatarTitle}
          />
          <View style={styles.content}>
            <View style={styles.textTitle}>
              <Text style={styles.nameTitle}>Nhận xét mới</Text>
            </View>
          </View>
          <Icons style={styles.attachmentBack} name="right" size={22} />
        </View>
        <View style={styles.container}>
          <Image
            source={{uri: 'https://image.jpgaaa.com/468/81468-middle.png'}}
            style={styles.avatarTitle}
          />
          <View style={styles.content}>
            <View style={styles.textTitle}>
              <Text style={styles.nameTitle}>Người theo dõi mới</Text>
            </View>
          </View>
          <Icons style={styles.attachmentBack} name="right" size={22} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotifiScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderColor: '#F8F8F8',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 10,
    borderColor: '#F8F8F8',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 25,
    width: 180,
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatarTitle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textTitle: {
    marginVertical: 20,
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0,
  },
  mainContent: {
    marginRight: 60,
  },
  img: {
    height: 50,
    width: 50,
    margin: 0,
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50,
    top: 20,
  },
  attachmentBack: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  timeAgo: {
    fontSize: 12,
    color: '#696969',
  },
  name: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  nameTitle: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});
