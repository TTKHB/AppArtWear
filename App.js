import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen from './Navigator/ScreenNavigator/StackScreen';
const App = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default App;
