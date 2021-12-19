import axios from 'axios';
import React, {useState} from 'react';
import baseURL from '../../../assets/common/baseUrl';
import {useLogin} from '../../../Context/LoginProvider';

const useNotificationHot = () => {
  const [notificationHot, setNotificationHot] = useState([]);
  const [notificationByUser, setNotificationByUser] = useState([]);
  const {setIsLoggedIn, setProfile, setLoginPending} = useLogin();
  const {isLoggedIn, profile} = useLogin();

  React.useEffect(async () => {
    await getAllNotificationHot();
    await getAllNotificationHotByUser();

    return () => {
      setNotificationHot([]);
      setNotificationByUser([]);
    };
  }, []);

  async function getAllNotificationHot() {
    await axios
      .get(`${baseURL}notification_hot`)
      .then(function (response) {
        console.log(
          '🚀 ~ file: useNotificationHot.js ~ line 12 ~ response',
          response,
        );
        // handle success
        setNotificationHot(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log('rror here' + error);
      });
  }

  async function findById(id) {
    return await axios
      .get(`${baseURL}notification_hot/${id}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  async function getAllNotificationHotByUser() {
    await axios
      .get(`${baseURL}notification_hot/user/${profile._id}`)
      .then(function (response) {
        console.log(
          '🚀 ~ file: useNotificationHot.js ~ line 12 ~ response',
          response,
        );
        setNotificationByUser(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log('rror here' + error);
      });
  }
  return {
    NotificationHot: notificationHot,
    getAllNotificationHot,
    getNotificationByUser: notificationByUser,
    getAllNotificationHotByUser,
    findById,
  };
};

export default useNotificationHot;
