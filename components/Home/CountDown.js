// React Native CountDown Timer | react-native-countdown-component
// https://aboutreact.com/react-native-countdown-timer/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// import CountDown to show the timer
import CountDown from 'react-native-countdown-component';

// import moment to help you play with date and time
import moment from 'moment';


// Thời gian 

const TimeSale = () => {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    // Coundown timer for a given expiry date-time
    let date =
      moment()
        .utcOffset('+05:30')
        .format('YYYY-MM-DD hh:mm:ss');

    // Getting the current date-time
    // You can set your own date-time
    let expirydate = '2021-09-05 04:00:45';

    let diffr =
      moment
        .duration(moment(expirydate)
          .diff(moment(date)));
    // Difference of the expiry date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());

    // Converting in seconds
    var d = hours * 60 * 60 + minutes * 60 + seconds;

    // Settign up the duration of countdown
    setTotalDuration(d);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft:150 }}>
        <CountDown
          until={totalDuration}
          //duration of countdown in seconds
          timetoShow={('H', 'M', 'S')}
          //formate to show
          size={14}
          //Custom background color button
          digitStyle={{backgroundColor: '#8D6E63'}}
          //Custom text button CountDown
          digitTxtStyle={{color:'#fff'}}
          //Style :
          separatorStyle={{color: '#8D6E63',marginTop:-15}}
          //Show :
          showSeparator
        />
      </View>
    </SafeAreaView>
  );
};

export default TimeSale;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 5,
    fontWeight: 'bold',
  },
});