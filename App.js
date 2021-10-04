import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Navigator/Main';
import LoginProvider from './Context/LoginProvider';
import StackScreen from './Navigator/ScreenNavigator/StackScreen';
import FavoriteScreen from'./Screens/Profile/FavoriteScreen';
const App = () => {
  return (
    <LoginProvider>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </LoginProvider>

  );
};

export default App;
