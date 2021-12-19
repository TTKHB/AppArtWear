import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import client from '../assets/data/client';

const LoginContext = createContext();

const LoginProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [loginPending, setLoginPending] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      const res = await client.get('/profile', {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      if (res.data.success) {
        setProfile(res.data.profile);
        if (res.data.profile.role !== 'user') {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      } else {
        setProfile({});
        setIsLoggedIn(false);
      }
    } else {
      setProfile({});
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profile,
        setProfile,
        loginPending,
        setLoginPending,
        loading,
        setLoading,
        fetchUser,
      }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
