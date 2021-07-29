import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import FormHeader from '../../../components/Login_Register/FormHeader/FormHeader';
import LoginForm from '../../../components/Login_Register/LoginForm';

const LoginScreen = () => {
    return (
        <View>
            <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {/* Import From dang nhap */}
                <LoginForm />
            </ScrollView>
        </View>
    );
};

export default LoginScreen;
