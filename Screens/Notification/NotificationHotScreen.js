import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
  SafeAreaView
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

const Notification = {
  post: [
    {
      "id": 1,
      "name": 'Bùi Nhật Tiến',
      "avatarUri": 'https://i.pinimg.com/736x/78/90/e1/7890e13d8985d3a5360e3e62831575fd.jpg',
      "content": 'đã chấp nhận yêu cầu kết bạn của bạn.',
      "icon": {
        "name": "users",
        "color": 'blue'
      },
      "create_at": "Bây giờ",
    },
    {
      "id": 2,
      "name": 'Nguyễn Tấn Huy',
      "avatarUri": 'https://i.pinimg.com/236x/ed/cc/8c/edcc8c03f2922146c8d337c517455e5b.jpg',
      "content": 'đã trả lời bình luận của bạn.',
      "icon": {
        "name": "comments",
        "color": 'red'
      },
      "create_at": "10 phút trước",
    }
  ],
  recommend: [
    {
      "id": 1,
      "name": 'Trần Nhĩ Kha',
      "avatarUri": 'https://kenh14cdn.com/thumb_w/660/2020/5/25/original-2-15904048419461374664211.jpg',
      "mutualFriends": "7 bạn chung",
    },
    {
      "id": 2,
      "name": 'Lý Cao Thắng',
      "avatarUri": 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
      "mutualFriends": "8 bạn chung",
    },
  ],
  lates: [
    {
      "id": 1,
      "name": 'Art Wear',
      "avatarUri": 'https://i.pinimg.com/736x/26/a7/54/26a7548af4f4daea1dab2b9e2673d96f.jpg',
      "content": 'đã gắn thẻ bạn trong một bình luận.',
      "icon": {
        "name": "tag",
        "color": 'orange'
      },
      "create_at": "2 ngày trước",
    },
    {
      "id": 2,
      "name": 'Art Wear',
      "avatarUri": 'https://i.pinimg.com/736x/78/90/e1/7890e13d8985d3a5360e3e62831575fd.jpg',
      "content": 'đã chấp nhận yêu cầu kết bạn của bạn.',
      "icon": {
        "name": "users",
        "color": 'blue'
      },
      "create_at": "Bây giờ",
    },
    {
      "id": 3,
      "name": 'Art Wear',
      "avatarUri": 'https://i.pinimg.com/236x/ed/cc/8c/edcc8c03f2922146c8d337c517455e5b.jpg',
      "content": 'đã trả lời bình luận của bạn.',
      "icon": {
        "name": "comments",
        "color": 'red'
      },
      "create_at": "10 phút trước",
    },
  ],
}

const ListPost = ({ item }) => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <TouchableOpacity
        style={styles.containerList}>
        <ImageBackground imageStyle={{ borderRadius: 64 }} style={styles.avatar} source={{ uri: item.avatarUri }}>
          <View style={styles.notificationIcon}>
            <FontAwesome5Icon name={item.icon.name} size={20} color={item.icon.color} />
          </View>
        </ImageBackground>
        <View style={styles.contentWrapper}>
          <Text style={styles.pureTxt}>
            <Text style={styles.hightlightTxt}>{item.name}</Text> {item.content}</Text>
          <Text style={{ color: '#333' }}>{item.create_at}</Text>
        </View>
        <TouchableOpacity style={styles.btnOptions}>
          <FontAwesome5Icon name="ellipsis-h" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View >
  );
};

const ListRecommend = ({ item }) => {
  return (
    <TouchableOpacity
      style={styles.containerBody}>
      <Image style={styles.avatarBody} source={{ uri: item.avatarUri }} />
      <View style={styles.recommendInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.mutualCount}>{item.mutualFriends}</Text>
        <View style={styles.btnActionsWrapper}>
          <TouchableOpacity style={styles.btnAddFriend}>
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>Thêm bạn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnHide}>
            <Text style={{ color: '#000', fontWeight: '500', fontSize: 16 }}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const NotificationHotScreen = () => {

  return (
    <SafeAreaView>
      <ScrollView bounces={false} showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Thông báo</Text>
          <TouchableOpacity onPress={this.onPressSearchHandler} style={styles.btnSearch}>
            <FontAwesome5Icon name="search" size={18} />
          </TouchableOpacity>
        </View>
        <Text style={styles.notiTitle}>Mới</Text>
        <FlatList
          data={Notification.post}
          renderItem={({ item }) => <ListPost item={item} />}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.containerAllBody}>
          <View>
            <Text style={styles.titleBody}>Những người bạn có thể biết</Text>
          </View>
          <FlatList
            data={Notification.recommend}
            renderItem={({ item }) => <ListRecommend item={item} />}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity style={styles.btnViewAll}>
            <Text style={{ fontSize: 14, fontWeight: '500' }}>
              Xem tất cả các đề xuất
            </Text>
          </TouchableOpacity>
        </View>

        < Text style={styles.notiTitle} > Trước đó</Text >
        <FlatList
          data={Notification.lates}
          renderItem={({ item }) => <ListPost item={item} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView >
    </SafeAreaView>
  )
}

export default NotificationHotScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1
  },
  titleWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    marginHorizontal: 20
  },
  btnSearch: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  notiTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    marginHorizontal: 20
  },
  containerList: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  notificationIcon: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    height: 25,
    width: 25,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnOptions: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignContent: 'center'
  },
  containerAllBody: {
    marginVertical: 10,
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
    marginHorizontal: 20
  },
  titleBody: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  btnViewAll: {
    width: '100%',
    height: 36,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  avatar: {
    height: 64,
    width: 64,
    position: 'relative',
    borderRadius: 64,
    borderColor: "#ddd",
    borderWidth: 0.5,
  },
  contentWrapper: {
    width: Math.round(Dimensions.get('window').width) - 40 - 30 - 64,
    paddingHorizontal: 10
  },
  pureTxt: {
    fontSize: 16,
  },
  hightlightTxt: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  containerBody: {
    marginVertical: 10,
    flexDirection: 'row'
  },
  avatarBody: {
    width: 64,
    height: 64,
    borderRadius: 64,
    borderColor: "#333",
    borderWidth: 0.3
  },
  recommendInfo: {
    width: Math.round(Dimensions.get('window').width) - 30 - 100,
    paddingLeft: 10
  },
  name: {
    fontSize: 16,
    fontWeight: '500'
  },
  mutualCount: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5
  },
  btnActionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnAddFriend: {
    width: '48.5%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#318bfb',
    borderRadius: 5
  },
  btnHide: {
    width: '48.5%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#ddd'
  }
})
