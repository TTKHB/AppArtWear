import React from 'react';
import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import baseURL from './../../assets/common/baseUrl';
import axios from './../../assets/data/client copy';

const useLikeHots = hot_id => {
  const [numberOfLike, setNumberOfLike] = useState(0);
  const [peopleLike, setPeopleLike] = useState([]);

  //get all number of like
  useEffect(async () => {
    await axios
      .get(`${baseURL}like/numberlike/${hot_id}`)
      .then(function (response) {
        console.log(
          '🚀 ~ file: useHots.js ~ line 11 ~ response',
          response.data.likes,
        );
        // handle success
        setNumberOfLike(response.data.likes);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  //get all by hot _id
  useEffect(async () => {
    await axios
      .get(`${baseURL}like/hot/${hot_id}`)
      .then(function (response) {
        console.log('🚀 ~ file: useAddLikes.js ~ line 15 ~ response', response);
        setPeopleLike(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  //check user exits into people like
  function checkLikeByUserId(user_id) {
    for (let i = 0; i < peopleLike.length; i++) {
      let like = peopleLike[i];
      if (like.user_id != null) {
        if (like.user_id._id.toString() == user_id.toString()) {
          return true;
        }
      }
    }
    return false;
  }

  async function addLike(user_id, hot_id) {
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
  }
  async function removelike(user_id, hot_id) {
    console.log('local', `${baseURL}like/user_id=${user_id}&hot_id=${hot_id}`);
    await axios
      .delete(`${baseURL}like?user_id=${user_id}&hot_id=${hot_id}`)
      .then(function (response) {
        console.log('🚀 ~ file: useLikeHots.js ~ line 47 ~ response', response);
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.trace(error);
      });
  }

  return {numberOfLike, addLike, removelike, peopleLike, checkLikeByUserId};
};

export default useLikeHots;