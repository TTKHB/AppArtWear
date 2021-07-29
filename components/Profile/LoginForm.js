import React from 'react';
import {StyleSheet ,View, Text, Dimensions, TextInput } from 'react-native';
import FormContainer from './FormContainer';
import FormInput from '../Login-Register/FormInput';
import FormSubmitButton from '../Login-Register/FormSubmitButton';

const LoginForm = () => {
    return (
        <FormContainer>
           <FormInput title='Email' placeholder='example@gmail.com'/>
           <FormInput title='Password' placeholder='...'/>
           <FormSubmitButton title='Login' />
        </FormContainer>
    );
};

const styles =StyleSheet.create({

});

export default LoginForm;
