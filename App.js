import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Main from './Navigator/Main';

const App = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default App;
