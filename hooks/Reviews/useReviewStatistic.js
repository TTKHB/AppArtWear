import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import baseURL from './../../assets/common/baseUrl';

const useReviewStatistic = (product_id = '') => {
  const [statisticStart, setStatisticStart] = React.useState({});

  React.useEffect(async () => {
    await axios
      .get(`${baseURL}reviews/statistic5Star?product_id=${product_id}`)
      .then(function (response) {
        // handle success
        setStatisticStart(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return {reviewsStatistics: statisticStart.allStar};
};

export default useReviewStatistic;
