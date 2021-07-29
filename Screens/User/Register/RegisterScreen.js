import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import RegisterForm from '../../../components/Login_Register/RegisterForm';

const RegisterScreen = () => {
    return (
        <View>
            <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {/* Import From dang ki */}
                <RegisterForm />
            </ScrollView>
           
        </View>
    );
};

export default RegisterScreen;
