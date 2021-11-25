import React from 'react';
import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import baseURL from './../../assets/common/baseUrl';
import axios from './../../assets/data/client copy';

const useUserLiked = (hot_id, user_id) => {
  const [isUserLiked, setIsUserLiked] = useState(false);

  //get all hots
  useEffect(async () => {
    if (user_id) {
      await axios
        .get(`${baseURL}like/hot/user?user_id=${user_id}&hot_id=${hot_id}`)
        .then(function (response) {
          console.log(
            '🚀 ~ file: useUserLiked.js ~ line 15 ~ response',
            response.data,
            response.data.length > 0,
          );
          // handle success
          setIsUserLiked(response.data.length > 0);
        })
        .catch(function (error) {
          // handle error
          console.trace(error);
        });
    }
  }, []);

  return {isUserLiked};
};

export default useUserLiked;
