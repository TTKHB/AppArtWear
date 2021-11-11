import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import StarRating from '../../../components/Checkout/StarRating';
import StepIndicator from 'react-native-step-indicator';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Appbar} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const labels = [
  'Cart',
  'Delivery Address',
  'Order Summary',
  'Payment Method',
  'Track',
];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeWidth: 1,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: 'green',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#fe7013',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#fe7013',
};

const MyOrDerScreen = ({navigation}) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const nextStep = () => {
    setCurrentPosition(currentPosition + 1);
  };
  const data = [
    {
      label: 'order and approved',
      status: 'your orders has been placed',
      dateTime: 'Sat, 3rd Nov 12:30 am',
    },
    {
      label: 'order and approved',
      status: 'your orders has been placed',
      dateTime: 'Sat, 3rd Nov 12:30 am',
    },
    {
      label: 'order and approved',
      status: 'your orders has been placed',
      dateTime: 'Sat, 3rd Nov 12:30 am',
    },
    {
      label: 'order and approved',
      status: 'your orders has been placed',
      dateTime: 'Sat, 3rd Nov 12:30 am',
    },
    {
      label: 'order and approved',
      status: 'your orders has been placed',
      dateTime: 'Sat, 3rd Nov 12:30 am',
    },
  ];
  state = {
    contents: [
      {
        Track_Orders: 'Track Orders',
      },
    ],
  };
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: 'transparent'}}>
        <Appbar.BackAction />
        <Appbar.Content title="" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="shopping" />
      </Appbar.Header>
      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 25,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Track Orders
        </Text>
        <View style={styles.cardsWrapper}>
          <Text style={styles.cardTitle}>Order#: 123456</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../../assets/images/Banner/SplashScreen.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Apple</Text>
            <Text style={styles.cardDetails}>10.000đ</Text>
            <Text style={styles.cardDelivery}>Estimated Delivery on 16Dec</Text>
            <StarRating ratings={4} reviews={99} />
          </View>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            justifyContent: 'center',
          }}>
          Track Orders
        </Text>
      </View>
      <ScrollView style={styles.cardsWrapper}>
        {this.state.contents
          ? this.state.contents.map((param, i) => {
              return (
                <DropDownItem
                  key={i}
                  customStyles={customStyles}
                  contentVisible={false}
                  header={
                    <View>
                      <AwesomeIcon
                        name="chevron-down"
                        size={21}
                        style={{alignSelf: 'flex-end'}}
                      />
                    </View>
                  }>
                  <Text>
                    <Text
                      style={[
                        styles.txt,
                        {
                          fontSize: 20,
                        },
                      ]}>
                      <View>
                        <View style={styles.indicatorContainer}>
                          <StepIndicator
                            customStyles={customStyles}
                            currentPosition={currentPosition}
                            labels={labels}
                            direction={'vertical'}
                            renderLabel={({
                              position,
                              stepStatus,
                              label,
                              currentPosition,
                            }) => {
                              return (
                                <View style={styles.lblContainer}>
                                  <Text style={styles.lblText}>
                                    {data[position].label}
                                  </Text>
                                  <Text
                                    style={(styles.lblStatus, {marginTop: 5})}>
                                    {data[position].status}
                                  </Text>
                                  <Text style={styles.lblStatus}>
                                    {data[position].dateTime}
                                  </Text>
                                </View>
                              );
                            }}
                          />
                        </View>
                      </View>
                      <TouchableOpacity
                        style={styles.nextBtn}
                        onPress={() => nextStep()}>
                        <Text style={styles.text}>Next</Text>
                      </TouchableOpacity>
                    </Text>
                  </Text>
                </DropDownItem>
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};
export default MyOrDerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    fontSize: 20,
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
  cardName: {
    fontSize: 20,
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

  headerText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  indicatorContainer: {
    height: height - 170,
    width: width - 30,
    padding: 20,
    margin: 15,
    elevation: 10,
  },
  lblContainer: {
    marginTop: 40,
    padding: 10,
    paddingLeft: 5,
    width: width - 100,
  },
  lblText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  lblStatus: {
    fontSize: 15,
  },
  nextBtn: {
    alignSelf: 'flex-end',
  },
  text: {
    color: '#FF3232',
    fontSize: 18,
  },
});
