import React from 'react';
import { View, Text, TouchableOpacity,SafeAreaView, StyleSheet, Button, ScrollView } from 'react-native';
import { signOut } from '../../assets/data/user';
import ProfileHaveAccount from '../../components/Profile/ProfileHaveAccount';
import ProfileNoAccount from '../../components/Profile/ProfileNoAccount';
import { useLogin } from '../../Context/LoginProvider';



const ProfileScreen = ({ navigation }) => {
  const { isLoggedIn, setIsLoggedIn, profile } = useLogin();
  return (
    <View>
      {isLoggedIn ?  (
        <>
          <ProfileHaveAccount navigation={navigation}/>
        </>
      ) : (
        <>
            <ProfileNoAccount navigation={navigation}/>
        </>
      )}
    </View>


  );
};

export default ProfileScreen ;
