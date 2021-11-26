import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const ActivityIndiCatorScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={{marginTop: -40}}
        size={width / 7}
        color="#8D6E63"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ActivityIndiCatorScreen;
