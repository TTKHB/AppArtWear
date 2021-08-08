import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Navigator/Main';
import StackScreen from './Navigator/ScreenNavigator/StackScreen';
const App = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default App;
