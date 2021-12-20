import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useLogin} from './../../Context/LoginProvider';
var logo = require('../../assets/images/logoArtt.jpg');

const SplashScreen = ({navigation}) => {
  const {setLoading} = useLogin();
  setTimeout(() => {
    //navigation chuyển qua trang Main(Bottom navigation)
    setLoading(true);
    // navigation.navigate('Main');
    //5s chuyển qua Main
  }, 3000);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    height: '50%',
    width: '50%',
  },
});

export default SplashScreen;
