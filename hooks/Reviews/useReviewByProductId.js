import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import baseURL from './../../assets/common/baseUrl';

/**
 * lấy tất cả review có cùng id sản phẩm
 * @param {*} product_id
 * @returns object reviewsStatistics
 */
const useReviewByProductId = (product_id = '') => {
  console.log(
    '🚀 ~ file: useReviewByProductId.js ~ line 12 ~ useReviewByProductId ~ product_id',
    product_id,
  );
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(async () => {
    await axios
      .get(`${baseURL}reviews/product/` + product_id)
      .then(function (response) {
        // handle success
        console.log('data', response.data);
        setReviews(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return {reviewsOfProduct: reviews};
};

export default useReviewByProductId;
