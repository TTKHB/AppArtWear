import React from 'react';
import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import baseURL from './../../../assets/common/baseUrl';
import axios from 'axios';
import {useLogin} from '../../../Context/LoginProvider';
const useComment = hot_id => {
  const [comments, setComments] = useState([]);
  const [numberComments, setNumberComments] = useState(0);
  const {isLoggedIn, profile} = useLogin();

  //get all number of like
  useEffect(async () => {
    await getComments();
    await getNumberComment();
  }, []);

  async function getNumberComment() {
    await axios
      .get(`${baseURL}comment/numbercomment/${hot_id}`)
      .then(function (response) {
        console.log(
          '🚀 ~ file: useHots.js ~ line 11 ~ response',
          response.data.comments,
        );
        // handle success
        setNumberComments(response.data.comments);
      })
      .catch(function (error) {
        // handle error
        console.error('error here 1', error);
      });
  }
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
        console.trace(error);
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

  return {comments, getComments, postComment, numberComments};
};

export default useComment;
