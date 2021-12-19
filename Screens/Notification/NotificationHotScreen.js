import React, {useState, useContext} from 'react';
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
  SafeAreaView,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import useNotificationHot from './../../hooks/Notification/NotificationType/useNotificationHot';
import TimeAgo from 'javascript-time-ago';
import Icons from '../../assets/common/Icons';
import Color from '../../assets/common/Color';
import {useNavigation} from '@react-navigation/native';
import {useScroll} from './../../Context/ScrollContext';
import BottomSheet from './BottomSheet';
import BottomSheetNotification from './BottomSheetNotification';
import {Provider} from 'react-native-paper';

const ListPost = ({item, navigation}) => {
  const timeAgo = new TimeAgo('vi-VN');
  timeAgo.getLabels('narrow');
  const {setScrollingWithId} = useScroll();
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  console.log(
    '🚀 ~ file: NotificationHotScreen.js ~ line 101 ~ ListPost ~ item',
    item,
  );
  return (
    <View style={{backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={styles.containerList}
        onPress={() => {
          // navigation.navigate('Main', {
          //   screen: 'Hot',
          //   params: {
          //     ScrollingWithId: item.hot_id,
          //   },
          // });

          setScrollingWithId(item.hot_id);
          navigation.navigate('Hot');
          // navigation.navigate('HotScreen');
        }}>
        <ImageBackground
          imageStyle={{borderRadius: 64}}
          style={styles.avatar}
          source={{uri: item.wholiked.avatar}}>
          <View style={styles.notificationIcon}>
            <FontAwesome5Icon
              name={
                item.NotifyType_id.name == 'like'
                  ? Icons.FontAwesome5Icons.Thumbsup
                  : item.NotifyType_id.name == 'comment'
                  ? Icons.FontAwesome5Icons.Comments
                  : ''
              }
              size={20}
              color={Color.blue2}
            />
          </View>
        </ImageBackground>
        <View style={styles.contentWrapper}>
          <Text style={styles.pureTxt}>
            <Text style={styles.hightlightTxt}>{item.wholiked.fullname}</Text>
            {item.PeopleLiked && item.PeopleLiked != '0' ? (
              <Text>
                {' '}
                và{' '}
                <Text style={{fontWeight: 'bold'}}>
                  {item.PeopleLiked} người khác
                </Text>{' '}
                {item.NotifyType_id.content}
              </Text>
            ) : (
              '' + item.NotifyType_id.content
            )}
          </Text>
          <Text style={{color: '#333'}}>
            {timeAgo.format(new Date(item.dateCreated))}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btnOptions}
          onPress={() => setShowBottomSheet(true)}>
          <FontAwesome5Icon name="ellipsis-h" />
        </TouchableOpacity>
        <BottomSheet
          showBottomSheet={showBottomSheet}
          enableBackdropDismiss
          onDismiss={() => {
            setShowBottomSheet(false);
          }}>
          <BottomSheetNotification />
        </BottomSheet>
      </TouchableOpacity>
    </View>
  );
};

const NotificationHotScreen = () => {
  const {getNotificationByUser} = useNotificationHot();
  const navigation = useNavigation();

  return (
    <Provider>
      <ScrollView
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Thông báo</Text>
          <TouchableOpacity onPress={() => {}} style={styles.btnSearch}>
            <FontAwesome5Icon name="search" size={18} />
          </TouchableOpacity>
        </View>
        <Text style={styles.notiTitle}>Mới</Text>
        <FlatList
          data={getNotificationByUser}
          renderItem={({item}) => (
            <ListPost navigation={navigation} item={item} />
          )}
          keyExtractor={item => item._id}
        />
      </ScrollView>
    </Provider>
  );
};

export default NotificationHotScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  titleWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  btnSearch: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  notiTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    marginHorizontal: 20,
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
    alignItems: 'center',
  },
  btnOptions: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerAllBody: {
    marginVertical: 10,
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    marginHorizontal: 20,
  },
  titleBody: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnViewAll: {
    width: '100%',
    height: 36,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  avatar: {
    height: 64,
    width: 64,
    position: 'relative',
    borderRadius: 64,
    borderColor: '#ddd',
    borderWidth: 0.5,
  },
  contentWrapper: {
    width: Math.round(Dimensions.get('window').width) - 40 - 30 - 64,
    paddingHorizontal: 10,
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
    flexDirection: 'row',
  },
  avatarBody: {
    width: 64,
    height: 64,
    borderRadius: 64,
    borderColor: '#333',
    borderWidth: 0.3,
  },
  recommendInfo: {
    width: Math.round(Dimensions.get('window').width) - 30 - 100,
    paddingLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  mutualCount: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5,
  },
  btnActionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnAddFriend: {
    width: '48.5%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#318bfb',
    borderRadius: 5,
  },
  btnHide: {
    width: '48.5%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
});
