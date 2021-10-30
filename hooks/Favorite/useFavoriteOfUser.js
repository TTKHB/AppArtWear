import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import baseURL from './../../assets/common/baseUrl';
import {useEffect} from 'react';

/**
 * lấy favorite của user
 * @param {*} user_id
 * @returns object {favoriteOfUser}
 */
const useFavoriteOfUser = (user_id = '') => {
  const [favoriteOfUser, setFavoriteOfUser] = React.useState([]);

  React.useEffect(async () => {
    await axios
      .get(`${baseURL}favorite/user/${user_id}`)
      .then(function (response) {
        // handle success
        setFavoriteOfUser(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const deleteByFavorite = async product_id => {
    await axios
      .delete(`${baseURL}favorite/product/` + product_id)
      .then(function (response) {
        console.log('delete', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const InsertOneFavoriteEqualTrue = async (
    product_id,
    user_id,
    isFavorite,
  ) => {
    await axios
      .post(`${baseURL}favorite`, {
        product_id: product_id,
        user_id: user_id,
        isFavorite: isFavorite,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {favoriteOfUser, deleteByFavorite, InsertOneFavoriteEqualTrue};
};

export default useFavoriteOfUser;
