import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import LoaderAuthen from '../../../components/Login_Register/LoaderAuthen/LoaderAuthen';
import RegisterForm from '../../../components/Login_Register/RegisterForm';
import { useLogin } from '../../../Context/LoginProvider';
const RegisterScreen = ({ navigation }) => {
    const { loginPending } = useLogin();
    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#F4EEEA' }}>
                <ScrollView
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    {/* Import From dang ki */}
                    <RegisterForm navigation={navigation} />
                </ScrollView>
            </View>
            {/* Nếu form đăng ký nhập đúng và đăng ký sẽ loading thành công
            Ngược lại sẽ không loading khi giá trị trong form rỗng */}
            {loginPending ? <LoaderAuthen /> : null}
        </>
    );
};
export default RegisterScreen;
