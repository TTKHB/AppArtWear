import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Button, ScrollView, Image } from 'react-native';
import ProfileHaveAccount from '../../components/Profile/ProfileHaveAccount';
import ProfileNoAccount from '../../components/Profile/ProfileNoAccount';
import { useLogin } from '../../Context/LoginProvider';

const ProfileScreen = ({ navigation, route }) => {
  const { isLoggedIn } = useLogin();
  return (
    <View>
      {isLoggedIn ? (
        <>
          <ProfileHaveAccount navigation={navigation} />
        </>
      ) : (
        <>
          <ProfileNoAccount navigation={navigation} />
        </>
      )}
    </View>


  );
};

export default ProfileScreen;