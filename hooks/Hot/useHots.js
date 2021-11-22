import React from 'react';
import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import baseURL from './../../assets/common/baseUrl';
import axios from './../../assets/data/client copy';

const useHots = () => {
  const [hots, setHots] = useState();

  //get all hots
  useEffect(async () => {
    await axios
      .get(`${baseURL}hot`)
      .then(function (response) {
        console.log(
          '🚀 ~ file: useHots.js ~ line 11 ~ response',
          response.data,
        );
        // handle success
        setHots(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return {hots};
};

export default useHots;
