import axios from 'axios';
import React, {useState} from 'react';
import baseURL from '../../../assets/common/baseUrl';

const useNotificationHot = () => {
  const [notificationHot, setNotificationHot] = useState([]);

  React.useEffect(async () => {
    await getAllNotificationHot();
    return () => {
      setHots([]);
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
  return {
    NotificationHot: notificationHot,
    getAllNotificationHot,
  };
};

export default useNotificationHot;
