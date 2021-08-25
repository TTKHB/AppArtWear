import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
var logo = require('../../assets/banner/SplashScreen.png');

export default class Splasscreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      //navigation chuyển qua trang Main(Bottom navigation)
      this.props.navigation.navigate('Main');
      //5s chuyển qua Main
    }, 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})


