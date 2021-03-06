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
      return updateError('Xin m???i nh???p t??i kho???n v?? m???t kh???u!', setError);
    }
    //only valid email id is allowed
    if (!isValidEmail(email)) {
      return updateError('Email sai ?????nh d???ng!', setError);
    }
    //Password must have 8 or more characters
    if (!password.trim() || password.length < 8) {
      return updateError('M???t kh???u ph???i tr??n 8 k?? t???!', setError);
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
    //FormContainer bao b???c to??n b??? c??c form con b??n trong
    <FormContainer>
      <View style={{marginVertical: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconBack name="chevron-back-outline" size={30} />
        </TouchableOpacity>
      </View>
      {/* FormHeader trang tri ph???n header c???a screen ????ng nh???p(v?? d??? nh?? text ho???c h??nh ???nh) */}
      <FormHeader Heading="ArtWear" subHeading="????ng nh???p t??i kho???n" />
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
          label="M???t Kh???u"
          placeholder="..."
          value={password}
          onChangeText={value => handleOnChangeText(value, 'password')}
          source={iconPassowrd}
        />
      </View>
      <FormSubmitButton onPress={submitForm} title="????ng Nh???p" />

      {/* DigLog When login error */}
      <Dialog.Container
        visible={visible}
        contentStyle={{
          borderRadius: 10,
          borderColor: 'white',
          width: width / 1.09,
        }}>
        <Dialog.Title style={{fontSize: 28, fontWeight: 'bold'}}>
          ????ng nh???p th???t b???i{' '}
          <Image
            style={{height: 25, width: 25}}
            source={require('../../assets/images/Error/errorNotFound.jpg')}
          />
        </Dialog.Title>
        <Dialog.Description style={{fontSize: 22, fontWeight: 'bold'}}>
          Vui l??ng ki???m tra l???i t??i kho???n v?? m???t kh???u
        </Dialog.Description>
        <Dialog.Button
          style={{color: 'brown', fontWeight: 'bold', fontSize: 20}}
          label="Ti???p t???c"
          onPress={handleContinue}
        />
      </Dialog.Container>

      <Forgotpassword forgotPass="Qu??n m???t kh???u?" onPress={ResetPassword} />

      {/* //Set onPress form FormSMS */}
      <FormSMS SMS="????ng nh???p b???ng SMS" onPress={submitSMS} />
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
