import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Star from '../../components/ProductMenu/Star';

import {datauser} from '../../assets/data/ItemUserComment';
// BÌnh luận


const Comment = () => {
  const renderItemComment = ({item}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>9:58 am</Text>
          </View>
          <View style={styles.rate}>
            <Star ratings={4} reviews={4} />
          </View>
          <Text>{item.comment}</Text>
        </View>
      </View>
    );
  };

  return (
  
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false} vertical>
      <View style={styles.Bodycontainer}>
      <FlatList
          data={datauser}
          keyExtractor={item => item.id}
          renderItem={renderItemComment}
        />
      </View>
        
    </ScrollView>
    </SafeAreaView>
   
  
  );
};

const styles = StyleSheet.create({
  container: {
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
