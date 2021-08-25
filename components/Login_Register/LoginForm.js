import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput, Alert } from 'react-native';
import FormContainer from './FormContainer/FormContainer';
import FormInput from './FormInput/FormInput';
import FormSubmitButton from './FormButton/FormSubmitButton';
import FormHeader from './FormHeader/FormHeader';
import { isValidObjField, updateError, isValidEmail } from '../../utils/Methods';
import client from '../../assets/data/client';
import { StackActions } from '@react-navigation/native';
import { useLogin } from '../../Context/LoginProvider';
import { signIn } from '../../assets/data/user';
import Forgotpassword from './FormForgotPassword/Forgotpassword';
import FormSMS from './FormSMS/FormSMS';

const iconEmail = require('../../assets/icon/mail.png');
const iconPassowrd = require('../../assets/icon/lock.png');

const LoginForm = props => {
    const { setIsLoggedIn, setProfile } = useLogin();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const { email, password } = userInfo;

    //Submit kiem tra loi
    const submitForm = async () => {
        if (isValidForm()) {
            try {
                //    const res= await 
                //    client.post('/sign-in',{
                //         ...userInfo
                //    });
                const res = await signIn(userInfo.email, userInfo.password);

                if (res.data.success) {
                    // props.navigation.navigate('ProfileNoAccount');
                    // console.log(res.data);
                    setUserInfo({email:'',password:''})
                    setProfile(res.data.user);
                    props.navigation.navigate('ProfileScreen');
                    setIsLoggedIn(true);
                } else {
                    Alert.alert("Thất bại")
                }
            } catch (error) {
                console.log(error.message);

            }
        }
    }


    const submitSMS = () => {
        props.navigation.navigate('SMS');
    }

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value });
    };

    //Form kiem tra loi
    const isValidForm = () => {
        //we will accept only if all of the fields have value
        if (!isValidObjField(userInfo)) {
            return updateError('Required all fields!', setError);
        }
        //only valid email id is allowed
        if (!isValidEmail(email)) {
            return updateError('Invalid email!', setError);
        }
        //Password must have 8 or more characters
        if (!password.trim() || password.length < 8) {
            return updateError('Password is less than 8 characters!', setError);
        }
        return true;
    }


    return (
        //FormContainer bao bọc toàn bộ các form con bên trong
        <FormContainer>
            {/* FormHeader trang tri phần header của screen đăng nhập(ví dụ như text hoặc hình ảnh) */}
            <FormHeader Heading="ArtWear" subHeading='Shop easy,shop happy' />
            {error ? (
                <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
            ) : null}
            <FormInput
                autoCapitalize='none'
                label='Email'
                placeholder='email'
                value={email}
                onChangeText={(value) => handleOnChangeText(value, 'email')}
                source={iconEmail}
            />
            <FormInput
                autoCapitalize='none'
                secureTextEntry
                label='Mật Khẩu'
                placeholder='...'
                value={password}
                onChangeText={(value) => handleOnChangeText(value, 'password')}
                source={iconPassowrd}
            />
            <FormSubmitButton onPress={submitForm} title='Đăng Nhập' />

            <Forgotpassword forgotPass="Quên mật khẩu?"/>

            {/* //Set onPress form FormSMS */}
            <FormSMS SMS="Đăng nhập bằng SMS"  onPress={submitSMS}/>

        </FormContainer>



    );
};

const styles = StyleSheet.create({

});

export default LoginForm;
