import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import baseURL from './../../assets/common/baseUrl';
import {useEffect} from 'react';

/**
 *thống kê số người đánh giá từ 1 đến 5 sao
 * @param {*} product_id
 * @returns object reviewsStatistics
 */
const useReviewStatistic = (product_id = '') => {
  const [statisticStar, setStatisticStar] = React.useState({});

  React.useEffect(async () => {
    await axios
      .get(`${baseURL}reviews/statistic5Star?product_id=${product_id}`)
      .then(function (response) {
        // handle success
        setStatisticStar(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return {reviewsStatistics: statisticStar.allStar};
};

export default useReviewStatistic;
