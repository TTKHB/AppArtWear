import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import FormContainer from './FormContainer/FormContainer';
import FormInput from './FormInput/FormInput';
import FormSubmitButton from './FormButton/FormSubmitButton';
import FormHeader from './FormHeader/FormHeader';
import { isValidObjField, updateError, isValidEmail } from '../../utils/Methods';
import { Formik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import client from '../../assets/data/client';
import { StackActions } from '@react-navigation/native';

//Tạo biến chứa các icon,hình ảnh trong text input
const iconName = require('../../assets/icon/profile.png');
const iconEmail = require('../../assets/icon/mail.png');
const iconPassowrd = require('../../assets/icon/lock.png');
const iconConfirmPassword = require('../../assets/icon/lock.png');

//Biến check lỗi thư viện Formik
const validationSchema = Yup.object({
    fullname:
        Yup
            .string()
            .trim()
            .min(3, 'Invalid Name!').required('Name is required!'),
    email:
        Yup
            .string()
            .email('Invalid email')
            .required('Email is required!'),
    password:
        Yup
            .string()
            .trim()
            .min(8, 'Password is too short!')
            .required('Password is required!'),
    confirmPassword:
        Yup
            .string()
            .equals([Yup.ref('password'), null], 'Password does not match!')
})

const RegisterForm = props => {
    const userInfo = {
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    //Test connect React Native voi Server
    // const fetchApi = async ()=>{
    //     try{
    //         const res = await axios.get('http://10.0.2.2:3000/')
    //         console.log(res.data);
    //     }catch{
    //         console.log(error.message);
    //     }
    // };
    // useEffect(()=>{
    //     fetchApi()
    // },[])

    //Biến đăng kí
    const signUp = async (values, formikActions) => {
        //POST đăng kí 
        const res = await client.post('/create-user', {
            ...values
        })

        console.log(res.data);
        formikActions.resetForm();
        formikActions.setSubmitting(false);
    }
    return (
        //FormContainer bao bọc toàn bộ các form con bên trong
        <FormContainer>
            <Formik
                initialValues={userInfo}
                validationSchema={validationSchema}
                //OnSubmit trong Formik(Truyen vao values)
                onSubmit={signUp}
            >
                {({ 
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit }) => {
                    const { fullname, email, password, confirmPassword } = values
                    return <>
                        {/* FormHeader trang tri phần header của screen đăng ky(ví dụ như text hoặc hình ảnh) */}
                        <FormHeader Heading="ArtWear" subHeading="Shop easy,shop happy" />
                        <FormInput
                            // autoCapitalize='none' khi nhập chữ vào textinput, không cho phép viết hoa chữ cái đầu
                            autoCapitalize='none'
                            label='Full Name'
                            placeholder='Ly Cao Thang'
                            value={fullname}
                            error={touched.fullname && errors.fullname}
                            onChangeText={handleChange('fullname')}
                            onBlur={handleBlur('fullname')}
                            source={iconName}
                        />
                        <FormInput
                            autoCapitalize='none'
                            label='Email'
                            placeholder='example@gmail.com'
                            value={email}
                            error={touched.email && errors.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            source={iconEmail}
                        />
                        <FormInput
                            autoCapitalize='none'
                            secureTextEntry
                            label='Password'
                            placeholder='...'
                            value={password}
                            error={touched.password && errors.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            source={iconPassowrd}
                        />
                        <FormInput
                            autoCapitalize='none'
                            secureTextEntry
                            label='Confirm Password'
                            placeholder='...'
                            value={confirmPassword}
                            error={touched.confirmPassword && errors.confirmPassword}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            source={iconConfirmPassword}
                        />
                        <FormSubmitButton
                            submitting={isSubmitting}
                            onPress={handleSubmit}
                            title='Sign up'
                        />                    
                    </>
                }}
            </Formik>
        </FormContainer>
    );
};

const styles = StyleSheet.create({
});

export default RegisterForm;