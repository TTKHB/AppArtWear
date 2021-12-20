import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import baseURL from '../../../assets/common/baseUrl';
import FormInput from '../../../components/Login_Register/FormInput/FormInput';
const iconEmail = require('../../../assets/icon/mail.jpg');
import {updateError, isValidEmail} from '../../../utils/Methods';

const ResetPassword = ({navigation}) => {
  const isValidForm = () => {
    //Check ko dc bỏ trống
    if (email == '') {
      return updateError('Xin mời nhập email!', setError);
    }
    //Check định dạng email
    if (!isValidEmail(email)) {
      return updateError('Email không đúng định dạng!', setError);
    }
    return true;
  };
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const PostData = () => {
    if (isValidForm()) {
      fetch(`http://10.0.3.2:3000/api/v1/users/forgot-Password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log('error', err);
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Xác nhận email của bạn và gửi liên kết đặt lại
        </Text>
      </View>
      <FormInput
        autoCapitalize="none"
        label="Địa chỉ email"
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        source={iconEmail}
      />
      <TouchableOpacity onPress={() => PostData()} style={styles.btnSendEmail}>
        <Text style={styles.textSendEmail}>Send Email</Text>
      </TouchableOpacity>
      <View style={{marginTop: 10}}>
        {error ? <Text style={styles.textError}>{error}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  btnSendEmail: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    height: 50,
    marginHorizontal: 10,
  },
  textSendEmail: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textError: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResetPassword;
