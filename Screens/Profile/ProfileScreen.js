import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (


    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>


    </View>
  );
};

export default ProfileScreen;
