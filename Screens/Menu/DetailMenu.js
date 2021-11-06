import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

const {height, width} = Dimensions.get('window');

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;

import Swiper from 'react-native-swiper';

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{color: 'grey'}}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

const DetailMenu = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageHeaderScrollView
        maxHeight={500}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.8}
        minOverlayOpacity={0.3}
        headerContainerStyle={styles.ggg}
        bounces={false}
        showsVerticalScrollIndicator={false}
        //   headerImage={require("../../assets/images/AoThun/aothun2.jpg")}
        renderForeground={() => (
          <Swiper
            style={styles.wrapper}
            renderPagination={renderPagination}
            loop={false}>
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
              }>
              <Image
                style={styles.image}
                source={require('../../assets/images/Ao/AoThun/aothun1.jpg')}
              />
            </View>
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
              }>
              <Image
                style={styles.image}
                source={require('../../assets/images/Ao/AoThun/aothun2.jpg')}
              />
            </View>
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Why Stone split from Garfield</Text>
              }>
              <Image
                style={styles.image}
                source={require('../../assets/images/Ao/AoThun/aothun3.jpg')}
              />
            </View>
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
              }>
              <Image
                style={styles.image}
                source={require('../../assets/images/Ao/AoThun/aothun4.jpg')}
              />
            </View>
          </Swiper>
        )}>
        <View style={{height: height}}>
          <TriggeringView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.title}>Overview</Text>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={{marginHorizontal: 2}}>ggg</Text>
                <Text>ggg</Text>
              </View>
            </View>
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  image: {
    height: 500,
    width: width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },

  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width,
    flex: 1,
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  paginationText: {
    color: 'red',
    fontSize: 20,
  },
};
export default DetailMenu;
