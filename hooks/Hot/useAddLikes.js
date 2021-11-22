import React from 'react';
import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import baseURL from './../../assets/common/baseUrl';
import axios from 'axios';
const useAddLikes = (hot_id, user_id) => {
  //   const [numberOfLike, setNumberOfLike] = useState(0);

  //get all number of like
  useEffect(async () => {
    await axios
      .post(`${baseURL}like`, {
        user_id: user_id,
        hot_id: hot_id,
      })
      .then(function (response) {
        console.log('🚀 ~ file: useAddLikes.js ~ line 15 ~ response', response);

        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return {numberOfLike};
};

export default useAddLikes;
