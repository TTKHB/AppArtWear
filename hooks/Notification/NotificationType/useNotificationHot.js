import axios from 'axios';
import React, {useState} from 'react';
import baseURL from '../../../assets/common/baseUrl';
import {useLogin} from '../../../Context/LoginProvider';

const useNotificationHot = () => {
  const [notificationHot, setNotificationHot] = useState([]);
  const [notificationByUser, setNotificationByUser] = useState([]);
  const {setIsLoggedIn, setProfile, setLoginPending} = useLogin();
  const {isLoggedIn, profile} = useLogin();

  const types = {
    LIKE: '61ba16676a435f4a106593f6',
    COMMENT: '61bdb3637066c71d70d2d86f',
  };

  React.useEffect(async () => {
    await getAllNotificationHot();
    await getAllNotificationHotByUser();

    return () => {
      setNotificationHot([]);
      setNotificationByUser([]);
    };
  }, []);

  /**
   *
   * @param {*PeopleLiked} @type {String}
   * @param {*wholiked} @type {ObjectId}
   * @param {*hot_id} @type {ObjectId}
   * @param {*user_id} @type {ObjectId}
   */
  async function sendNotificationLikeToUser({
    PeopleLiked,
    wholiked,
    hot_id,
    user_id,
  }) {
    const body = {
      PeopleLiked: PeopleLiked,
      wholiked: wholiked,
      NotifyType_id: types.LIKE,
      hot_id: hot_id,
      user_id: user_id,
    };

    await axios
      .post(`${baseURL}notification_hot`, body)
      .then(function (response) {
        console.log(
          '🚀 ~ file: useNotificationHot.js ~ line 12 ~ response',
          response,
        );
      })
      .catch(function (error) {
        // handle error
        console.log('rror here' + error);
      });
  }

  /**
   *
   * @param {*PeopleLiked} @type {String}
   * @param {*wholiked} @type {ObjectId}
   * @param {*hot_id} @type {ObjectId}
   * @param {*user_id} @type {ObjectId}
   */
  async function sendNotificationCommentToUser() {
    const body = {
      PeopleLiked: PeopleLiked,
      wholiked: wholiked,
      NotifyType_id: types.LIKE,
      hot_id: hot_id,
      user_id: user_id,
    };
    await axios
      .post(`${baseURL}notification_hot`, body)
      .then(function (response) {
        console.log(
          '🚀 ~ file: useNotificationHot.js ~ line 12 ~ response',
          response,
        );
      })
      .catch(function (error) {
        // handle error
        console.log('rror here' + error);
      });
  }
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
    if (profile._id) {
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
  }
  return {
    NotificationHot: notificationHot,
    getAllNotificationHot,
    getNotificationByUser: notificationByUser,
    getAllNotificationHotByUser,
    findById,
    sendNotificationLikeToUser,
    sendNotificationCommentToUser,
  };
};

export default useNotificationHot;
