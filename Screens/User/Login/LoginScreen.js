import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import LoaderAuthen from '../../../components/Login_Register/LoaderAuthen/LoaderAuthen';
import LoginForm from '../../../components/Login_Register/LoginForm';
import { useLogin } from '../../../Context/LoginProvider';
const LoginScreen = ({ navigation }) => {
    const { loginPending } = useLogin();
    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#F4EEEA' }}>
                <ScrollView
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    {/* Import From dang nhap */}
                    <LoginForm navigation={navigation} />
                </ScrollView>
            </View>
            {/* Nếu form đăng nhập đúng sẽ loading thành công
            Ngược lại sẽ không loading khi giá trị trong form rỗng hoặc sai */}
            {loginPending ? <LoaderAuthen /> : null}
        </>
    );
};

export default LoginScreen;
