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

const iconEmail = require('../../assets/icon/mail.png');
const iconPassowrd = require('../../assets/icon/lock.png');

const LoginForm = ({navigation}) => {
    const {setIsLoggedIn,setProfile}=useLogin();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const { email, password } = userInfo;

    //Submit kiem tra loi
    const submitForm = async () => {
        if (isValidForm()) {
           try{
               const res= await 
            //    signIn(userInfo.email,userInfo.password);
               client.post('/sign-in',{
                    ...userInfo
               });

                if(res.data.success){
                    // props.navigation.navigate('ProfileTwo');
                    // console.log(res.data);
                    setProfile(res.data.user);
                    setIsLoggedIn(true);
                }else{
                    Alert.alert("Thất bại")
                }
            //    console.log('running');
            //    console.log(res.data);    
           }catch(error){
               console.log(error.message);

           }
        }
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
                label='Password'
                placeholder='...'
                value={password}
                onChangeText={(value) => handleOnChangeText(value, 'password')}
                source={iconPassowrd }
            />

            <FormSubmitButton onPress={submitForm} title='Login' />
        </FormContainer>
    );
};

const styles = StyleSheet.create({

});

export default LoginForm;
