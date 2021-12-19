import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import FormContainer from './FormContainer/FormContainer';
import FormInput from './FormInput/FormInput';
import FormSubmitButton from './FormButton/FormSubmitButton';
import FormHeader from './FormHeader/FormHeader';
import {isValidObjField, updateError, isValidEmail} from '../../utils/Methods';
import {useLogin} from '../../Context/LoginProvider';
import {signIn} from '../../utils/user';
import Forgotpassword from './FormForgotPassword/Forgotpassword';
import FormSMS from './FormSMS/FormSMS';
//icon
const iconEmail = require('../../assets/icon/mail.jpg');
const iconPassowrd = require('../../assets/icon/lock.jpg');
import IconBack from 'react-native-vector-icons/Ionicons';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Dialog from 'react-native-dialog';

const {height, width} = Dimensions.get('window');

const LoginForm = ({navigation}) => {
  const {setIsLoggedIn, setProfile, setLoginPending} = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const {email, password} = userInfo;

  //Submit kiem tra loi
  const submitForm = async () => {
    //set Loading when submit dang nhap
    setLoginPending(true);
    //Xu ly dang nhap
    if (isValidForm()) {
      try {
        const res = await signIn(userInfo.email, userInfo.password);
        if (res.data.success) {
          setUserInfo({email: '', password: ''});
          setProfile(res.data.user);
          if (res.data.user.role !== 'user') {
            setIsLoggedIn(false);
            showDialog();
          } else {
            navigation.navigate('ProfileScreen');
            setIsLoggedIn(true);
          }
        } else {
          setIsLoggedIn(false);
          showDialog();
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    setLoginPending(false);
  };

  const submitSMS = () => {
    navigation.navigate('SMS');
  };

  const ResetPassword = () => {
    navigation.navigate('ResetPassword');
  };

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  //Form kiem tra loi
  const isValidForm = () => {
    //we will accept only if all of the fields have value
    if (!isValidObjField(userInfo)) {
      return updateError('Xin mời nhập tài khoản và mật khẩu!', setError);
    }
    //only valid email id is allowed
    if (!isValidEmail(email)) {
      return updateError('Email sai định dạng!', setError);
    }
    //Password must have 8 or more characters
    if (!password.trim() || password.length < 8) {
      return updateError('Mật khẩu phải trên 8 ký tự!', setError);
    }
    return true;
  };

  //Diglog onClick
  const [visible, setVisible] = useState(false);
  const showDialog = () => {
    setVisible(true);
  };
  const handleContinue = () => {
    setVisible(false);
  };

  return (
    //FormContainer bao bọc toàn bộ các form con bên trong
    <FormContainer>
      <View style={{marginVertical: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconBack name="chevron-back-outline" size={30} />
        </TouchableOpacity>
      </View>
      {/* FormHeader trang tri phần header của screen đăng nhập(ví dụ như text hoặc hình ảnh) */}
      <FormHeader Heading="ArtWear" subHeading="Đăng nhập tài khoản" />
      {error ? (
        <Text
          style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {error}
        </Text>
      ) : null}
      <View style={{backgroundColor: '#fff', borderRadius: 10}}>
        <FormInput
          autoCapitalize="none"
          label="Email"
          placeholder="email"
          value={email}
          onChangeText={value => handleOnChangeText(value, 'email')}
          source={iconEmail}
        />
        <FormInput
          autoCapitalize="none"
          secureTextEntry
          label="Mật Khẩu"
          placeholder="..."
          value={password}
          onChangeText={value => handleOnChangeText(value, 'password')}
          source={iconPassowrd}
        />
      </View>
      <FormSubmitButton onPress={submitForm} title="Đăng Nhập" />

      {/* DigLog When login error */}
      <Dialog.Container
        visible={visible}
        contentStyle={{
          borderRadius: 10,
          borderColor: 'white',
          width: width / 1.09,
        }}>
        <Dialog.Title style={{fontSize: 28, fontWeight: 'bold'}}>
          Đăng nhập thất bại{' '}
          <Image
            style={{height: 25, width: 25}}
            source={require('../../assets/images/Error/errorNotFound.jpg')}
          />
        </Dialog.Title>
        <Dialog.Description style={{fontSize: 22, fontWeight: 'bold'}}>
          Vui lòng kiểm tra lại tài khoản và mật khẩu
        </Dialog.Description>
        <Dialog.Button
          style={{color: 'brown', fontWeight: 'bold', fontSize: 20}}
          label="Tiếp tục"
          onPress={handleContinue}
        />
      </Dialog.Container>

      <Forgotpassword forgotPass="Quên mật khẩu?" onPress={ResetPassword} />

      {/* //Set onPress form FormSMS */}
      <FormSMS SMS="Đăng nhập bằng SMS" onPress={submitSMS} />
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
