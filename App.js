import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoginProvider from './Context/LoginProvider';
import StackScreen from './Navigator/ScreenNavigator/StackScreen';
import FavoriteScreen from './components/Home/Loader/LoaderMenuFlashSale';
const App = () => {
  return (
    <LoginProvider>
      <NavigationContainer>
        <StackScreen/>
      </NavigationContainer>
    </LoginProvider>

  );
};

export default App;
