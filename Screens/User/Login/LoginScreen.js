import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import FormHeader from '../../../components/Login_Register/FormHeader/FormHeader';
import LoginForm from '../../../components/Login_Register/LoginForm';

const LoginScreen = ({navigation}) => {
    return (
        <View style={{flex: 1,backgroundColor: '#fff'}}>
            <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {/* Import From dang nhap */}
                <LoginForm navigation={navigation}/>
            </ScrollView>
        </View>
    );
};

export default LoginScreen;
