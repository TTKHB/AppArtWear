import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import baseURL from './../../assets/common/baseUrl';

const useReviewByProductId = (product_id = '') => {
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
