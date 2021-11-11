import React from 'react';
import {View, Text, Button, StyleSheet, FlatList, Image} from 'react-native';
import StarRating from '../../../components/Checkout/StarRating';
import {Appbar} from 'react-native-paper';

const MyOrders = [
  {
    id: '1',
    orderTitle: 'Order#: 123456',
    orderImg: require('../../../assets/images/Banner/SplashScreen.jpg'),
    orderTime: '20-Dec-2019, 3:00pm',
    orderDelivery: 'Estimated Delivery on 16Dec',
  },
  {
    id: '2',
    orderTitle: 'Order#: 123456',
    orderImg: require('../../../assets/images/Banner/SplashScreen.jpg'),
    orderTime: '20-Dec-2019, 3:00pm',
    orderDelivery: 'Estimated Delivery on 16Dec',
  },
  {
    id: '3',
    orderTitle: 'Order#: 123456',
    orderImg: require('../../../assets/images/Banner/SplashScreen.jpg'),
    orderTime: '20-Dec-2019, 3:00pm',
    orderDelivery: 'Estimated Delivery on 16Dec',
  },
  {
    id: '4',
    orderTitle: 'Order#: 123456',
    orderImg: require('../../../assets/images/Banner/SplashScreen.jpg'),
    orderTime: '20-Dec-2019, 3:00pm',
    orderDelivery: 'Estimated Delivery on 16Dec',
  },
  {
    id: '5',
    orderTitle: 'Order#: 123456',
    orderImg: require('../../../assets/images/Banner/SplashScreen.jpg'),
    orderTime: '20-Dec-2019, 3:00pm',
    orderDelivery: 'Estimated Delivery on 16Dec',
  },
];

const MyOrDerScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{backgroundColor: 'transparent'}}>
        <Appbar.BackAction />
        <Appbar.Content title="" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="shopping" />
      </Appbar.Header>
      <Text
        style={{
          alignSelf: 'flex-start',
          fontSize: 22,
          fontWeight: 'bold',
          color: '#333',
          marginTop: 20,
          width: '90%',
          alignSelf: 'center',
          marginBottom: 10,
        }}>
        My Orders
      </Text>

      <FlatList
        data={MyOrders}
        style={styles.cardsWrapper}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={item.orderImg}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.orderTitle}</Text>
              <StarRating ratings={4} reviews={99} />
              <Text style={styles.cardDetails}>{item.orderTime}</Text>
              <Text style={styles.cardDelivery}>{item.orderDelivery}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MyOrDerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  cardDelivery: {
    fontSize: 12,
    color: 'green',
  },
  cardDeliveryFail: {
    fontSize: 12,
    color: 'brown',
  },
});
