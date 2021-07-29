import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      {/* Neu co user thi ra screen thong tin user, neu chua co user thi screen dang nhap,dang ki */}
      {/* {user ? (
        <>
            <View style={styles.bodyContainer}>

            </View>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text>Register</Text>
          </TouchableOpacity>
        </>
      )} */}
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
