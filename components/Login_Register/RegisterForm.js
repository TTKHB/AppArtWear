import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import FormContainer from './FormContainer/FormContainer';
import FormInput from './FormInput/FormInput';
import FormSubmitButton from './FormButton/FormSubmitButton';
import FormHeader from './FormHeader/FormHeader';
import {Formik, validateYupSchema} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import client from '../../assets/data/client';
import {StackActions} from '@react-navigation/native';
import {useLogin} from '../../Context/LoginProvider';
//Tạo biến chứa các icon,hình ảnh trong text input
const iconName = require('../../assets/icon/profile.jpg');
const iconEmail = require('../../assets/icon/mail.jpg');
const iconPassowrd = require('../../assets/icon/lock.jpg');
const iconConfirmPassword = require('../../assets/icon/lock.jpg');
import IconBack from 'react-native-vector-icons/Ionicons';

//Biến check lỗi thư viện Formik
const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, 'Tên phải trên 3 ký tự')
    .required('Chưa nhập tên!'),
  email: Yup.string()
    .email('Email không đúng định dạng')
    .required('Chưa nhập Email!'),
  password: Yup.string()
    .trim()
    .min(8, 'Mật khẩu phải trên 8 ký tự')
    .required('Chưa nhập mật khẩu!'),
  confirmPassword: Yup.string().equals(
    [Yup.ref('password'), null],
    'mật khẩu không khớp!',
  ),
});

const RegisterForm = props => {
  const userInfo = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const {loginPending, setLoginPending} = useLogin();
  //Biến đăng kí
  const signUp = async (values, formikActions) => {
    setLoginPending(true);
    const res = await client.post('/create-user', {
      ...values,
    });

    if (res.data.success) {
      const signInRes = await client.post('/sign-in', {
        email: values.email,
        password: values.password,
      });
      if (signInRes.data.success) {
        props.navigation.navigate('UserNavigator', {screen: 'Success'});
      }
    }
    //Khi đăng kí xong sẽ resetForm
    //Ví dụ lúc nãy ô fullname nhập abc khi bấm đăng kí ô full name sẽ trống và xoá abc
    formikActions.resetForm();
    formikActions.setSubmitting(false);
    setLoginPending(false);
  };
  return (
    //FormContainer bao bọc toàn bộ các form con bên trong
    <FormContainer>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        //OnSubmit trong Formik(Truyen vao values)
        onSubmit={signUp}>
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const {fullname, email, password, confirmPassword} = values;
          return (
            <>
              <View style={{marginVertical: 10}}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('ProfileScreen')}>
                  <IconBack name="chevron-back-outline" size={30} />
                </TouchableOpacity>
              </View>
              {/* FormHeader trang tri phần header của screen đăng ky(ví dụ như text hoặc hình ảnh) */}
              <FormHeader
                Heading="ArtWear"
                subHeading="Shop easy, shop happy"
              />
              <View style={{backgroundColor: '#fff', borderRadius: 10}}>
                <FormInput
                  // autoCapitalize='none' khi nhập chữ vào textinput, không cho phép viết hoa chữ cái đầu
                  autoCapitalize="none"
                  label="Họ và tên"
                  placeholder="Họ và tên"
                  value={fullname}
                  error={touched.fullname && errors.fullname}
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                  source={iconName}
                />
                <FormInput
                  autoCapitalize="none"
                  label="Email"
                  placeholder="example@gmail.com"
                  value={email}
                  error={touched.email && errors.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  source={iconEmail}
                />
                <FormInput
                  autoCapitalize="none"
                  secureTextEntry
                  label="Mật khẩu"
                  placeholder="..."
                  value={password}
                  error={touched.password && errors.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  source={iconPassowrd}
                />
                <FormInput
                  autoCapitalize="none"
                  secureTextEntry
                  label="Nhập lại mật khẩu"
                  placeholder="..."
                  value={confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  source={iconConfirmPassword}
                />
              </View>
              <FormSubmitButton
                submitting={isSubmitting}
                onPress={handleSubmit}
                title="Đăng Ký"
              />
              {/* Footer screen dang ky */}
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text style={{fontSize: 18}}>
                  Bằng việc đăng ký, bạn đã đồng ý với
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 18, color: '#1E90FF'}}>
                    Điều khoản dịch vụ
                  </Text>
                  <Text style={{fontSize: 18, color: '#000', marginLeft: 10}}>
                    &
                  </Text>
                  <Text
                    style={{fontSize: 18, color: '#1E90FF', marginLeft: 10}}>
                    Chính sách riêng tư
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 18, color: '#000'}}>của</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#000',
                      marginLeft: 10,
                      fontWeight: 'bold',
                    }}>
                    Art Wear
                  </Text>
                </View>
              </View>
            </>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default RegisterForm;
