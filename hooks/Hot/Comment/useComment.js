import React from 'react';
import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import baseURL from './../../../assets/common/baseUrl';
import axios from 'axios';
import {useLogin} from '../../../Context/LoginProvider';
const useComment = hot_id => {
  const [comments, setComments] = useState([]);
  const {isLoggedIn, profile} = useLogin();

  //get all number of like
  useEffect(() => {
    getComments();
  }, []);

  async function getComments() {
    await axios
      .get(`${baseURL}comment/hots/${hot_id}`)
      .then(function (response) {
        console.log(
          '🚀 ~ file: useComment.js ~ line 15 ~ response',
          response.data,
        );
        // handle success
        setComments(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  async function postComment(comment) {
    console.log(
      '🚀 ~ file: useComment.js ~ line 30 ~ postComment ~ comment',
      comment,
    );

    await axios
      .post(`${baseURL}comment`, {
        hot_id: hot_id,
        user_id: profile._id,
        comment: comment,
      })
      .then(function (response) {
        console.log('🚀 ~ file: useComment.js ~ line 37 ~ response', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return {comments, getComments, postComment};
};

export default useComment;
