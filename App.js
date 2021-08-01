import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Navigator/Main';
import LoginProvider from './Context/LoginProvider';

const App = () => {
  return (
    <LoginProvider>
    <NavigationContainer>
      <Main />
    </NavigationContainer>
    </LoginProvider>
  );
};

export default App;