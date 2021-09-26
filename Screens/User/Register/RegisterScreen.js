import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import RegisterForm from '../../../components/Login_Register/RegisterForm';

const RegisterScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F4EEEA' }}>
            <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {/* Import From dang ki */}
                <RegisterForm navigation={navigation} />
            </ScrollView>

        </View>
    );
};
export default RegisterScreen;
